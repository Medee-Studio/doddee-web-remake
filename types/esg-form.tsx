export interface QuestionNode {
  id: string;
  value: string;
  ids_secteurs?: number[];
  id_action?: number | null;
  information?: string | null;
  children: QuestionNode[];
  type?: "question" | "reponse";
  inputType?: "single" | "multiple" | "numeric" | "text";
  id_kpis?: number[];
  done?: boolean;
}

export type QuestionTree = QuestionNode[];

export interface FormAnswer {
  questionKey: string;
  questionText: string;
  answer: string | number | string[];
}

export interface KpiData {
  questionId: string;
  questionText: string;
  kpiId: number;
  answer: string | number | string[];
}

export interface QuestionnaireState {
  answers: FormAnswer[];
  valide_id_actions: number[];
  disponible_id_actions: number[];
  kpis: KpiData[];
  currentQuestionIndex: number;
  currentPath: string[];
}
  