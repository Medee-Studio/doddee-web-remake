"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {  ChevronRight, ChevronLeft, Info, CalendarIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { QuestionTree, QuestionNode, FormAnswer, QuestionnaireState, KpiData, QuestionnaireType } from "@/types";
import { createClient } from "@/lib/supabase/client";
import { saveQuestionnaireData } from "@/lib/supabase/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface QuestionnaireProps {
  questionTree: QuestionTree;
  questionnaireType: QuestionnaireType;
}

/**
 * Questionnaire component with unique key generation for form fields
 * 
 * Key Format: "{step}-{id}" where:
 * - step = currentQuestionIndex (parent question index in the tree)
 * - id = individual question ID
 * 
 * This ensures ALL form inputs have unique keys AND answers are stored separately even if:
 * - Same question IDs appear in different steps (e.g., "0-1" vs "1-1")
 * - Same questions are repeated across multiple parent questions
 * - Identical question text appears in different steps
 * 
 * IMPORTANT: Answers are stored using questionKey (not questionText) to prevent
 * cross-contamination between steps when identical questions appear.
 * 
 * Example with ETPE data:
 * - Step 0, Question 1: "0-1" → Answer stored as {questionKey: "0-1", answer: "Oui"}
 * - Step 0, Question 3: "0-3" → Answer stored as {questionKey: "0-3", answer: "Non"}
 * - Step 1, Question 1: "1-1" → Answer stored as {questionKey: "1-1", answer: "Oui"} (separate from "0-1")
 * - Step 1, Question 3: "1-3" → Answer stored as {questionKey: "1-3", answer: "Non"} (separate from "0-3")
 */
export default function Questionnaire({ questionTree, questionnaireType }: QuestionnaireProps) {
  const router = useRouter();
  const [state, setState] = useState<QuestionnaireState>({
    answers: [],
    valide_id_actions: [],
    disponible_id_actions: [],
    kpis: [],
    currentQuestionIndex: 0,
    currentPath: [],
  });

  const [currentQuestions, setCurrentQuestions] = useState<QuestionNode[]>([]);
  const [canProceed, setCanProceed] = useState(false);

  const handleQuestionnaireComplete = async (finalState: QuestionnaireState) => {
    console.log("Questionnaire terminé avec l'état:", finalState);
    console.log("Type de questionnaire:", questionnaireType);
    
    try {
      const supabase = createClient();
      const result = await saveQuestionnaireData(supabase, finalState, questionnaireType);
      
      if ('success' in result) {
        toast.success(result.success);
        router.push("/dashboard/actions");
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde du questionnaire:", error);
      toast.error("Erreur lors de la sauvegarde du questionnaire");
    }
  };

  // Initialize with the first parent question
  useEffect(() => {
    if (questionTree.length > 0) {
      setCurrentQuestions([questionTree[state.currentQuestionIndex]]);
    }
  }, [questionTree, state.currentQuestionIndex]);

  // Check if we can proceed to next question
  useEffect(() => {
    const requiredQuestions = currentQuestions.filter(q => q.type === "question");
    const answeredQuestions = requiredQuestions.filter(q => {
      const questionKey = `${state.currentQuestionIndex}-${q.id}`;
      return state.answers.some(answer => answer.questionKey === questionKey);
    });
    
    setCanProceed(requiredQuestions.length > 0 && answeredQuestions.length === requiredQuestions.length);
  }, [currentQuestions, state.answers, state.currentQuestionIndex]);

  const rebuildQuestionList = useCallback(() => {
    const parentQuestion = questionTree[state.currentQuestionIndex];
    const newQuestionList: QuestionNode[] = [parentQuestion];
    
    // Add questions recursively based on current answers
    const addQuestionsRecursively = (question: QuestionNode, currentAnswers: FormAnswer[]) => {
      const questionKey = `${state.currentQuestionIndex}-${question.id}`;
      const answer = currentAnswers.find(a => a.questionKey === questionKey);
      if (!answer) return;

      // Find selected responses for this question
      const selectedResponses = question.children.filter(child => {
        if (Array.isArray(answer.answer)) {
          return answer.answer.includes(child.value);
        }
        return child.value === answer.answer.toString();
      });

      // Add all child questions from selected responses
      selectedResponses.forEach(response => {
        response.children.forEach(child => {
          if (child.type === "question") {
            newQuestionList.push(child);
            // Recursively add children of this question too
            addQuestionsRecursively(child, currentAnswers);
          }
        });
      });
    };

    // Start the recursive process with the parent question
    addQuestionsRecursively(parentQuestion, state.answers);
    
    setCurrentQuestions(newQuestionList);
  }, [questionTree, state.currentQuestionIndex, state.answers]);

  // Rebuild questions when answers change
  useEffect(() => {
    if (questionTree.length > 0) {
      rebuildQuestionList();
    }
  }, [rebuildQuestionList, questionTree]);

  const handleAnswer = (questionKey: string, value: string | number | string[]) => {
    // Extract question ID from the key format "{step}-{id}"
    // This ensures uniqueness even if same question IDs appear in different steps
    // Example: "0-1" (step 0, question 1) vs "1-1" (step 1, question 1)
    const questionId = questionKey.split('-')[1];
    
    // Find the current question to collect id_actions and id_kpis
    const currentQuestion = currentQuestions.find(q => q.id === questionId);
    if (currentQuestion) {
      // Check if this question itself has id_kpis (for KPI questions)
      if (currentQuestion.id_kpis && currentQuestion.id_kpis.length > 0) {
        // Create KPI data objects for questions that have id_kpis
        const newKpiData: KpiData[] = currentQuestion.id_kpis.map(kpiId => ({
          questionId: currentQuestion.id,
          questionText: currentQuestion.value,
          kpiId: kpiId,
          answer: value
        }));

        setState(prev => ({
          ...prev,
          kpis: [
            ...prev.kpis.filter(kpi => kpi.questionId !== currentQuestion.id), // Remove existing KPIs for this question
            ...newKpiData
          ]
        }));
      }

      // Find the selected response(s) for collecting id_actions and id_kpis from responses
      const selectedResponses = currentQuestion.children.filter(child => {
        if (Array.isArray(value)) {
          return value.includes(child.value);
        }
        return child.value === value.toString();
      });

      // Collect id_actions from selected responses
      selectedResponses.forEach(response => {
        if (response.id_action) {
          // Check the done property to determine which array to update
          if (response.done === true) {
            setState(prev => ({
              ...prev,
              valide_id_actions: [...prev.valide_id_actions.filter(id => id !== response.id_action), response.id_action!]
            }));
          } else if (response.done === false) {
            setState(prev => ({
              ...prev,
              disponible_id_actions: [...prev.disponible_id_actions.filter(id => id !== response.id_action), response.id_action!]
            }));
          }
        }
      });
    }

    setState(prev => {
      // Remove existing answer for this question key
      const filteredAnswers = prev.answers.filter(a => a.questionKey !== questionKey);
      
      // Add new answer with unique key
      const newAnswer: FormAnswer = {
        questionKey: questionKey,
        questionText: currentQuestion?.value || "",
        answer: value,
      };

      const newAnswers = [...filteredAnswers, newAnswer];
      
      return {
        ...prev,
        answers: newAnswers,
      };
    });
  };

  const handleNext = async () => {
    // Auto-scroll to top when "Suivant" is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
    

    if (state.currentQuestionIndex < questionTree.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        currentPath: [],
      }));
      
      // Reset current questions to next parent question
      setCurrentQuestions([questionTree[state.currentQuestionIndex + 1]]);
    } else {
      // Questionnaire complete
      await handleQuestionnaireComplete(state);
      console.log("Questionnaire Complete:", state);
    }
  };

  const handlePrevious = () => {
    if (state.currentQuestionIndex > 0) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
        currentPath: [],
      }));
      
      setCurrentQuestions([questionTree[state.currentQuestionIndex - 1]]);
    }
  };

  const renderInput = (question: QuestionNode) => {
    // Create question key using format "{step}-{id}" where step is the parent question index
    const questionKey = `${state.currentQuestionIndex}-${question.id}`;
    const currentAnswer = state.answers.find(a => a.questionKey === questionKey);

    switch (question.inputType) {
      case "single":
        return (
          <RadioGroup
            value={currentAnswer?.answer as string || ""}
            onValueChange={(value) => handleAnswer(questionKey, value)}
            className="space-y-3"
          >
            {question.children.map((child) => (
              <div key={child.id} className="flex items-center space-x-2">
                <RadioGroupItem value={child.value} id={`${questionKey}-${child.id}`} />
                <Label htmlFor={`${questionKey}-${child.id}`} className="cursor-pointer flex-1">
                  {child.value}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case "multiple":
        const selectedValues = (currentAnswer?.answer as string[]) || [];
        return (
          <div className="space-y-3">
            {question.children.map((child) => (
              <div key={child.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`${questionKey}-${child.id}`}
                  checked={selectedValues.includes(child.value)}
                  onCheckedChange={(checked) => {
                    const newValues = checked
                      ? [...selectedValues, child.value]
                      : selectedValues.filter(v => v !== child.value);
                    handleAnswer(questionKey, newValues);
                  }}
                />
                <Label htmlFor={`${questionKey}-${child.id}`} className="cursor-pointer flex-1">
                  {child.value}
                </Label>
              </div>
            ))}
          </div>
        );

      case "numeric":
        return (
          <Input
            type="number"
            placeholder="Entrez un nombre"
            value={currentAnswer?.answer as number || ""}
            onChange={(e) => handleAnswer(questionKey, parseFloat(e.target.value) || 0)}
            className="max-w-md"
          />
        );

      case "text":
        return (
          <Textarea
            placeholder="Entrez votre réponse"
            value={currentAnswer?.answer as string || ""}
            onChange={(e) => handleAnswer(questionKey, e.target.value)}
            className="max-w-md"
          />
        );

      case "year":
        const selectedYear = currentAnswer?.answer as number;
        const selectedDate = selectedYear ? new Date(selectedYear, 0, 1) : undefined;
        
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-64 justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedYear ? selectedYear : "Sélectionnez une année"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  if (date) {
                    const year = date.getFullYear();
                    handleAnswer(questionKey, year);
                  }
                }}
                captionLayout="dropdown"
                fromYear={1900}
                toYear={new Date().getFullYear() + 10}
                classNames={{
                  dropdown_root: "relative",
                }}
              />
            </PopoverContent>
          </Popover>
        );

      default:
        return (
          <Input
            placeholder="Entrez votre réponse"
            value={currentAnswer?.answer as string || ""}
            onChange={(e) => handleAnswer(questionKey, e.target.value)}
            className="max-w-md"
          />
        );
    }
  };

  if (questionTree.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">Aucune question disponible.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground">
          <span className="text-center sm:text-left">Étape {state.currentQuestionIndex + 1} sur {questionTree.length}</span>
          <div className="flex space-x-2 justify-center sm:justify-end flex-wrap gap-1">
            {Array.from({ length: questionTree.length }).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-6 sm:w-8 rounded ${
                  index <= state.currentQuestionIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="space-y-6">
          {currentQuestions.map((question, index) => {
            // Create question key using format "{step}-{id}" where step is the parent question index
            const questionKey = `${state.currentQuestionIndex}-${question.id}`;
            return (
            <Card key={questionKey} className={index === 0 ? "border-primary" : ""}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-medium leading-6">
                      {question.value}
                    </CardTitle>
                  </div>
                  {question.information && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 flex-shrink-0"
                        >
                          <Info className="h-4 w-4" />
                          <span className="sr-only">Voir les informations</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Informations complémentaires</DialogTitle>
                          <DialogDescription className="text-left">
                            Détails concernant cette question
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <p className="text-sm whitespace-pre-line leading-relaxed">
                            {question.information}
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {renderInput(question)}
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={state.currentQuestionIndex === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Précédent</span>
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center space-x-2"
          >
            <span>
              {state.currentQuestionIndex === questionTree.length - 1 ? "Terminer" : "Suivant"}
            </span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>


    </div>
  );
} 