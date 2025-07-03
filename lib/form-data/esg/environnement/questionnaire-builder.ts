import { QuestionTree } from "@/types/esg-form";
import { UtilisateurMorauxSecteurAndCategory } from "@/lib/supabase/queries";

// Import all questionnaire modules
import { et } from "./et";
import { ev } from "./ev";
import { etpe } from "./etpe";
import { el } from "./el";
import { ei } from "./ei";
import { ew } from "./ew";
import { ep } from "./ep";
import { ea } from "./ea";
import { ed } from "./ed";
import { es } from "./es";

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
 * Builds a dynamic questionnaire array based on user's moral categories and sector
 * 
 * Filtering Logic:
 * 1. Category-based filtering:
 *    - et: Always included (base questionnaire)
 *    - ev: flotte_vehicule = true
 *    - etpe: plus_de_un_salarie = false
 *    - el: locaux = true
 *    - ei: parc_informatique = true
 *    - ew: site_web = true
 *    - ep: site_de_production = true
 *    - ea: approvisionnement = true
 *    - ed: distribution = true
 *    - es: stock = true
 * 
 * 2. Sector-based filtering:
 *    - Each parent question is filtered by ids_secteurs array
 *    - Only questions where sous_secteur_id is in ids_secteurs are included
 */
export function buildEnvironmentQuestionnaire(userData: UtilisateurMorauxSecteurAndCategory | null): QuestionTree {
  console.log("=== QUESTIONNAIRE BUILDER ===");
  console.log("Building questionnaire based on user data:", userData);
  console.log("User sous_secteur_id:", userData?.sous_secteur_id);
  
  let combinedQuestionnaire: QuestionTree = [];
  const includedSections: string[] = [];
  let totalQuestionsBeforeFiltering = 0;
  
  // Get the sector ID, defaulting to null if userData is null
  const userSousSecteurId = userData?.sous_secteur_id ?? null;

  // Always include ET questionnaire (base questionnaire)
  const filteredET = filterQuestionsBySector(et, userSousSecteurId);
  combinedQuestionnaire = [...combinedQuestionnaire, ...filteredET];
  includedSections.push(`et (always included) - ${filteredET.length}/${et.length} questions after sector filtering`);
  totalQuestionsBeforeFiltering += et.length;

  // Check categories and add relevant questionnaires
  if (userData?.categories) {
    const categories = userData.categories;

    // ev: flotte_vehicule = true
    if (categories.flotte_vehicule === true) {
      const filteredEV = filterQuestionsBySector(ev, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredEV];
      includedSections.push(`ev (flotte_vehicule) - ${filteredEV.length}/${ev.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += ev.length;
    }

    // etpe: plus_de_un_salarie = false
    if (categories.plus_de_un_salarie === false) {
      const filteredETPE = filterQuestionsBySector(etpe, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredETPE];
      includedSections.push(`etpe (plus_de_un_salarie = false) - ${filteredETPE.length}/${etpe.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += etpe.length;
    }

    // el: locaux = true
    if (categories.locaux === true) {
      const filteredEL = filterQuestionsBySector(el, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredEL];
      includedSections.push(`el (locaux) - ${filteredEL.length}/${el.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += el.length;
    }

    // ei: parc_informatique = true
    if (categories.parc_informatique === true) {
      const filteredEI = filterQuestionsBySector(ei, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredEI];
      includedSections.push(`ei (parc_informatique) - ${filteredEI.length}/${ei.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += ei.length;
    }

    // ew: site_web = true
    if (categories.site_web === true) {
      const filteredEW = filterQuestionsBySector(ew, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredEW];
      includedSections.push(`ew (site_web) - ${filteredEW.length}/${ew.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += ew.length;
    }

    // ep: site_de_production = true
    if (categories.site_de_production === true) {
      const filteredEP = filterQuestionsBySector(ep, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredEP];
      includedSections.push(`ep (site_de_production) - ${filteredEP.length}/${ep.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += ep.length;
    }

    // ea: approvisionnement = true
    if (categories.approvisionnement === true) {
      const filteredEA = filterQuestionsBySector(ea, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredEA];
      includedSections.push(`ea (approvisionnement) - ${filteredEA.length}/${ea.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += ea.length;
    }

    // ed: distribution = true
    if (categories.distribution === true) {
      const filteredED = filterQuestionsBySector(ed, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredED];
      includedSections.push(`ed (distribution) - ${filteredED.length}/${ed.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += ed.length;
    }

    // es: stock = true
    if (categories.stock === true) {
      const filteredES = filterQuestionsBySector(es, userSousSecteurId);
      combinedQuestionnaire = [...combinedQuestionnaire, ...filteredES];
      includedSections.push(`es (stock) - ${filteredES.length}/${es.length} questions after sector filtering`);
      totalQuestionsBeforeFiltering += es.length;
    }
  } else {
    console.log("No categories data available, using only ET questionnaire");
  }

  console.log("Included questionnaire sections:", includedSections);
  console.log(`Total questions: ${combinedQuestionnaire.length}/${totalQuestionsBeforeFiltering} (after category + sector filtering)`);
  console.log("==============================");

  return combinedQuestionnaire;
}

/**
 * Get questionnaire section names for debugging
 */
export function getQuestionnaireInfo(userData: UtilisateurMorauxSecteurAndCategory | null): {
  sections: string[];
  totalQuestions: number;
  categoryStatus: Record<string, boolean | null>;
} {
  const sections: string[] = ["et (always included)"];
  const categoryStatus: Record<string, boolean | null> = {};
  
  if (userData?.categories) {
    const categories = userData.categories;
    
    categoryStatus.flotte_vehicule = categories.flotte_vehicule;
    categoryStatus.plus_de_un_salarie = categories.plus_de_un_salarie;
    categoryStatus.locaux = categories.locaux;
    categoryStatus.parc_informatique = categories.parc_informatique;
    categoryStatus.site_web = categories.site_web;
    categoryStatus.site_de_production = categories.site_de_production;
    categoryStatus.approvisionnement = categories.approvisionnement;
    categoryStatus.distribution = categories.distribution;
    categoryStatus.stock = categories.stock;

    if (categories.flotte_vehicule === true) sections.push("ev (flotte_vehicule)");
    if (categories.plus_de_un_salarie === false) sections.push("etpe (plus_de_un_salarie = false)");
    if (categories.locaux === true) sections.push("el (locaux)");
    if (categories.parc_informatique === true) sections.push("ei (parc_informatique)");
    if (categories.site_web === true) sections.push("ew (site_web)");
    if (categories.site_de_production === true) sections.push("ep (site_de_production)");
    if (categories.approvisionnement === true) sections.push("ea (approvisionnement)");
    if (categories.distribution === true) sections.push("ed (distribution)");
    if (categories.stock === true) sections.push("es (stock)");
  }

  const questionnaire = buildEnvironmentQuestionnaire(userData);
  
  return {
    sections,
    totalQuestions: questionnaire.length,
    categoryStatus
  };
} 