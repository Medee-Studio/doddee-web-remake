"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Cours, RessourceInterne } from "@/types";
import { whichEmoji } from "@/lib/helpers";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, PlayCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import sanitize from "sanitize-html";
import ProgressBar from "./progress-bar";

type CoursState = "intro" | "started" | "finished";

export default function RessourceInterneCard({
  ressource,
}: {
  ressource: RessourceInterne;
}) {
  const cours = ressource.cours;
  const [currentCoursElement, setCurrentCoursElement] = useState<Cours>(
    cours[0],
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [coursState, setCoursState] = useState<CoursState>("intro");

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollCooldown = 200; // Cooldown time in milliseconds

  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const handleForward = useCallback((newValue: number) => {
    if (newValue == cours.length) {
      setCoursState("finished");
    } else {
      setCurrentIndex(newValue);
      setDirection(1);
    }
  }, [cours.length]);

  const handleBackward = (newValue: number) => {
    setCurrentIndex(newValue);
    setDirection(-1);
  };

  const handleScroll = useCallback((scrollDirection: number) => {
    if (isScrolling) return;

    setIsScrolling(true);

    if (scrollDirection < 0) {
      handleBackward(currentIndex - 1);
    } else {
      handleForward(currentIndex + 1);
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, scrollCooldown);
  }, [isScrolling, currentIndex, scrollCooldown, handleForward]);

  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      // For title type (vertical scrolling) - use up/down arrows
      if (currentCoursElement.type === "title") {
        if (event.key === "ArrowDown" && currentIndex < cours.length - 1) {
          handleScroll(1);
        } else if (event.key === "ArrowUp" && currentIndex > 0) {
          handleScroll(-1);
        }
      }
      // For html_content type (horizontal scrolling) - use left/right arrows
      else if (currentCoursElement.type === "html_content") {
        if (event.key === "ArrowRight" && currentIndex < cours.length - 1) {
          handleScroll(1);
        } else if (event.key === "ArrowLeft" && currentIndex > 0) {
          handleScroll(-1);
        }
      }
    };

    // Add keyboard event listener
    document.addEventListener("keydown", keyHandler);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, [currentIndex, currentCoursElement.type, cours.length, handleScroll]);

  // Update currentCoursElement and find the current title index
  useEffect(() => {
    setCurrentCoursElement(cours[currentIndex]);
  }, [currentIndex, cours]);

  // Function to find the previous title index
  const findCurrentTitleIndex = (currentIndex: number) => {
    for (let i = currentIndex; i >= 0; i--) {
      if (cours[i].type === "title") {
        return i;
      }
    }
    return 0;
  };

  return (
    <div className="w-full h-full flex flex-col relative">
      {coursState === "intro" ? (
        <Card className="h-full border-0 shadow-none">
          <CardHeader className="text-center space-y-6">
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-sm">
                {whichEmoji(ressource.type)} Cours interactif
              </Badge>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              {ressource.nom_ressource}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {ressource.intro}
            </p>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col justify-center items-center space-y-8">
            <Separator className="w-24" />
            
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
              <Image
                alt="Image de l'auteur"
                src={ressource.author_image_url}
                width={60}
                height={60}
                className="rounded-full border-2 border-background shadow-sm"
              />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Présenté par</p>
                <p className="font-medium">{ressource.author}</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full max-w-xs" 
              onClick={() => setCoursState("started")}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Commencer le cours
            </Button>
          </CardContent>
        </Card>
      ) : coursState === "started" ? (
        <>
          <Card className="absolute top-0 left-0 right-0 z-10 border-0 shadow-sm bg-background/95 backdrop-blur-sm">
            <CardContent>
              <div className="flex gap-2 overflow-x-auto scrollbar-hidden">
                {cours.map(
                  (el, key) =>
                    el.type === "title" && (
                      <Button
                        variant={findCurrentTitleIndex(currentIndex) === key ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setCurrentIndex(key)}
                        key={key}
                        className={`whitespace-nowrap text-xs md:text-sm ${
                          currentIndex < key ? "opacity-50" : ""
                        }`}
                      >
                        {el.content}
                      </Button>
                    ),
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex-1 flex flex-col pt-20 pb-20">
            <AnimatePresence mode="wait">
              {currentCoursElement.type === "html_content" ? (
                <Card className="flex-1 mx-4 md:mx-8">
                  <CardContent className="h-full flex items-center justify-center">
                    <motion.div
                      key={currentIndex}
                      ref={contentRef}
                      initial={{ x: direction > 0 ? 40 : -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: direction > 0 ? -40 : 40, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="prose prose-slate max-w-[1000px] mx-auto h-full overflow-y-auto scrollbar-hidden text-sm md:text-base leading-relaxed flex flex-col justify-center w-full text-center"
                      dangerouslySetInnerHTML={{
                        __html: sanitize(currentCoursElement.content, {
                          allowedTags: [
                            "div",
                            "img",
                            "p",
                            "h1", "h2", "h3", "h4",
                            "a",
                            "strong", "em", "b", "i",
                            "ul", "ol", "li",
                            "blockquote",
                            "code", "pre"
                          ],
                          allowedAttributes: {
                            "*": [
                              "class",
                              "href",
                              "target",
                              "alt",
                              "width",
                              "height",
                              "src",
                            ],
                          },
                        }),
                      }}
                    />
                  </CardContent>
                </Card>

              ) : (
                <div className="flex-1 flex flex-col items-center justify-center px-8">
                  <motion.div
                    key={currentIndex}
                    ref={titleRef}
                    initial={{ y: direction > 0 ? 50 : -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: direction < 0 ? -50 : 50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-8"
                  >
                    <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Image
                        alt="mascotte Doddee"
                        src={
                          "https://tmqpkvgkjkwemkxknhns.supabase.co/storage/v1/object/public/cours/doddee2.png?t=2025-01-22T15%3A19%3A46.518Z"
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                    <h2 className="text-xl md:text-3xl font-bold text-primary max-w-2xl">
                      {currentCoursElement.content}
                    </h2>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
          
          <Card className="absolute bottom-0 left-0 right-0 border-0 shadow-sm bg-background/95 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex justify-center items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => currentCoursElement.type === "html_content" ? handleBackward(currentIndex - 1) : handleBackward(currentIndex - 1)}
                  disabled={currentIndex === 0}
                >
                  {currentCoursElement.type === "html_content" ? <ArrowLeft className="h-4 w-4" /> : <ArrowUp className="h-4 w-4" />}
                </Button>
                
                {currentIndex === cours.length - 1 ? (
                  <Button
                    onClick={() => handleForward(currentIndex + 1)}
                    disabled={currentIndex === cours.length}
                    className="px-8"
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Terminer
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleForward(currentIndex + 1)}
                    disabled={currentIndex === cours.length}
                  >
                    {currentCoursElement.type === "html_content" ? <ArrowRight className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
          
          <ProgressBar currentIndex={currentIndex} totalItems={cours.length} />
        </>
      ) : (
        <Card className="h-full border-0 shadow-none">
          <CardContent className="h-full flex flex-col justify-center items-center text-center space-y-8 p-8">
            <motion.div
              key={currentIndex}
              initial={{ y: direction > 0 ? 50 : -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction < 0 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-16 w-16 text-green-600" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-green-600">
                  Félicitations ! 🎉
                </h2>
                <p className="text-lg text-muted-foreground">
                  Vous avez terminé le cours
                </p>
                <p className="text-xl font-semibold">{ressource.nom_ressource}</p>
              </div>
              
              <Separator className="w-24 mx-auto" />
              
              <div className="space-y-4 max-w-md">
                <p className="text-lg font-medium">
                  Prêt à passer à l&apos;action ?
                </p>
                <p className="text-sm text-muted-foreground">
                  Envoyez-nous votre justificatif pour valider cette action et améliorer votre score ESG
                </p>
              </div>
            </motion.div>
            
            <Button size="lg" className="w-full max-w-xs" asChild>
              <a href="/dashboard/plan">
                Voir mes actions
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}