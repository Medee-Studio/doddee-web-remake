import { QuestionTree } from "@/types/esg-form";
import { UtilisateurMorauxSecteurAndCategory } from "@/types";

// Import all gouvernance questionnaire modules
import { gt } from "./gt";
import { gi } from "./gi";
import { gtpe } from "./gtpe";
import { gw } from "./gw";

/**
 * Filters questions based on user's sector ID
 */
function filterQuestionsBySector(questions: QuestionTree, userSousSecteurId: number | null): QuestionTree {
  if (!userSousSecteurId) {
    console.log("No sous_secteur_id provided, including all questions");
    return questions;
  }

  const filteredQuestions = questions.filter(question => {
    // Check if the question has ids_secteurs and if user's sector is included
    if (question.ids_secteurs && Array.isArray(question.ids_secteurs)) {
      const isIncluded = question.ids_secteurs.includes(userSousSecteurId);
      if (!isIncluded) {
        console.log(`Filtering out question "${question.value?.substring(0, 50)}..." - sector ${userSousSecteurId} not in [${question.ids_secteurs.join(', ')}]`);
      }
      return isIncluded;
    }
    
    // If no ids_secteurs specified, include the question
    console.log(`Question "${question.value?.substring(0, 50)}..." has no sector filter - including`);
    return true;
  });

  return filteredQuestions;
}

/**
 * Builds a dynamic gouvernance questionnaire array based on user's moral categories and sector
 * 
 * Filtering Logic:
 * 1. Category-based filtering:
 *    - gt: Always included (base questionnaire for gouvernance)
 *    - gi: parc_informatique = true
 *    - gtpe: plus_de_un_salarie = false
 *    - gw: site_web = true
 * 
 * 2. Sector-based filtering:
 *    - Each parent question is filtered by ids_secteurs array
 *    - Only questions where sous_secteur_id is in ids_secteurs are included
 */
export function buildGouvernanceQuestionnaire(userData: UtilisateurMorauxSecteurAndCategory | null): QuestionTree {
  console.log("=== GOUVERNANCE QUESTIONNAIRE BUILDER ===");
  console.log("Building gouvernance questionnaire based on user data:", userData);
  console.log("User sous_secteur_id:", userData?.sous_secteur_id);
  
  let combinedQuestionnaire: QuestionTree = [];
  const includedSections: string[] = [];
  let totalQuestionsBeforeFiltering = 0;
  
  // Get the sector ID, defaulting to null if userData is null
  const userSousSecteurId = userData?.sous_secteur_id ?? null;

  // Always include GT questionnaire (base questionnaire for gouvernance)
  const filteredGT = filterQuestionsBySector(gt, userSousSecteurId);
  combinedQuestionnaire = [...combinedQuestionnaire, ...filteredGT];
  includedSections.push(`gt (always included) - ${filteredGT.length}/${gt.length} questions after sector filtering`);
  totalQuestionsBeforeFiltering += gt.length;

  // Check categories and add relevant questionnaires
  if (userData?.categories) {
    const categories = userData.categories;

    // gi: parc_informatique = true
    if (categories.parc_informatique === true) {
      const filteredGI = filterQuestionsBySector(gi, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredGI];
      includedSections.push(`gi (parc_informatique) - ${filteredGI.length}/${gi.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += gi.length;
    }

    // gtpe: plus_de_un_salarie = false
    if (categories.plus_de_un_salarie === false) {
      const filteredGTPE = filterQuestionsBySector(gtpe, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredGTPE];
      includedSections.push(`gtpe (plus_de_un_salarie = false) - ${filteredGTPE.length}/${gtpe.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += gtpe.length;
    }

    // gw: site_web = true
    if (categories.site_web === true) {
      const filteredGW = filterQuestionsBySector(gw, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredGW];
      includedSections.push(`gw (site_web) - ${filteredGW.length}/${gw.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += gw.length;
    }
  } else {
    console.log("No categories data available, using only GT questionnaire");
  }

  console.log("Included gouvernance questionnaire sections:", includedSections);
  console.log(`Total questions: ${combinedQuestionnaire.length}/${totalQuestionsBeforeFiltering} (after category + sector filtering)`);
  console.log("==========================================");

  return combinedQuestionnaire;
}

/**
 * Get gouvernance questionnaire section names for debugging
 */
export function getGouvernanceQuestionnaireInfo(userData: UtilisateurMorauxSecteurAndCategory | null): {
  sections: string[];
  totalQuestions: number;
  categoryStatus: Record<string, boolean | null>;
} {
  const sections: string[] = ["gt (always included)"];
  const categoryStatus: Record<string, boolean | null> = {};
  
  if (userData?.categories) {
    const categories = userData.categories;
    
    categoryStatus.parc_informatique = categories.parc_informatique;
    categoryStatus.plus_de_un_salarie = categories.plus_de_un_salarie;
    categoryStatus.site_web = categories.site_web;

    if (categories.parc_informatique === true) sections.push("gi (parc_informatique)");
    if (categories.plus_de_un_salarie === false) sections.push("gtpe (plus_de_un_salarie = false)");
    if (categories.site_web === true) sections.push("gw (site_web)");
  }

  const questionnaire = buildGouvernanceQuestionnaire(userData);
  
  return {
    sections,
    totalQuestions: questionnaire.length,
    categoryStatus
  };
} 