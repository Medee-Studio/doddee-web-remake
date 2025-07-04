import { QuestionTree } from "@/types/esg-form";
import { UtilisateurMorauxSecteurAndCategory } from "@/types";
import { st } from "./st";
import { stpe } from "./stpe";
import { sw } from "./sw";

/**
 * Builds a dynamic social questionnaire based on user categories and sector
 * 
 * Category Mapping for Social:
 * - st: Always included (base social questionnaire)
 * - stpe: plus_d_un_salarie = false
 * - sw: site_web = true
 * 
 * @param userData - User business profile and categories
 * @returns Combined and filtered questionnaire tree
 */
export function buildSocialQuestionnaire(userData: UtilisateurMorauxSecteurAndCategory | null): QuestionTree {
  console.log("=== SOCIAL QUESTIONNAIRE BUILDER ===");
  console.log("Input userData:", JSON.stringify(userData, null, 2));

  // Handle null userData case
  if (!userData) {
    console.log("No user data provided, returning empty questionnaire");
    return [];
  }

  const allModules: { name: string; questions: QuestionTree; shouldInclude: boolean }[] = [
    {
      name: "ST (Base Social)",
      questions: st,
      shouldInclude: true, // Always included
    },
    {
      name: "STPE (Plus d'un salarié = false)",
      questions: stpe,
      shouldInclude: userData.categories?.plus_de_un_salarie === false,
    },
    {
      name: "SW (Site Web)",
      questions: sw,
      shouldInclude: userData.categories?.site_web === true,
    },
  ];

  console.log("\n=== CATEGORY-BASED MODULE SELECTION ===");
  allModules.forEach(module => {
    console.log(`${module.name}: ${module.shouldInclude ? 'INCLUDED' : 'EXCLUDED'} (${module.questions.length} questions)`);
  });

  // Step 1: Combine questions from selected modules
  let combinedQuestions: QuestionTree = [];
  
  allModules.forEach(module => {
    if (module.shouldInclude) {
      console.log(`\nAdding ${module.questions.length} questions from ${module.name}`);
      combinedQuestions = combinedQuestions.concat(module.questions);
    }
  });

  console.log(`\nTotal questions after category filtering: ${combinedQuestions.length}`);

  // Step 2: Apply sector-based filtering if sous_secteur_id is available
  if (userData.sous_secteur_id !== null) {
    console.log(`\n=== SECTOR-BASED FILTERING (sous_secteur_id: ${userData.sous_secteur_id}) ===`);
    
    const filteredQuestions = combinedQuestions.filter(question => {
      const hasValidSectors = question.ids_secteurs && question.ids_secteurs.length > 0;
      const isIncluded = hasValidSectors ? question.ids_secteurs!.includes(userData.sous_secteur_id!) : true;
      
      console.log(`Question ${question.id}: ${isIncluded ? 'INCLUDED' : 'EXCLUDED'} (sectors: [${question.ids_secteurs?.join(', ') || 'none'}])`);
      
      return isIncluded;
    });

    console.log(`Questions after sector filtering: ${filteredQuestions.length} (removed ${combinedQuestions.length - filteredQuestions.length})`);
    combinedQuestions = filteredQuestions;
  } else {
    console.log("\n=== NO SECTOR FILTERING ===");
    console.log("sous_secteur_id is null, keeping all category-filtered questions");
  }

  console.log(`\n=== FINAL SOCIAL QUESTIONNAIRE ===`);
  console.log(`Total questions: ${combinedQuestions.length}`);
  console.log("Questions IDs:", combinedQuestions.map(q => q.id).join(", "));

  return combinedQuestions;
}

