import {
  ActionFormDataType,
  EnjeuFormDataType,
  ObjectifFormDataType,
  SupabaseActionType,
  SupabaseEnjeuType,
  SupabaseObjectifType,
} from "@/types";
import { SupabaseClient } from "@supabase/supabase-js";

type FetchActionsResult = {
  data: [
    {
      actions: SupabaseActionType[];
      objectifs: SupabaseObjectifType[];
      enjeux: SupabaseEnjeuType[];
    },
  ];
};

export async function fetchActionsWithObjectifsAndEnjeux(
  supabase: SupabaseClient,
): Promise<FetchActionsResult | null> {
  const { data, error } = await supabase.rpc(
    "fetch_actions_disponible_with_objectifs_and_enjeux",
  );
  console.log("data", data);
  if (error) {
    console.error("Error fetching actions:", error);
    return null;
  } else {
    return { data };
  }
}

type RawData = {
  actions: SupabaseActionType[];
  enjeux: SupabaseEnjeuType[];
  objectifs: SupabaseObjectifType[];
};

// Function to format the raw data into EnjeuFormDataType
export function createEnjeuxFormData(rawData: RawData): EnjeuFormDataType[] {
  const enjeuMap: Map<number, EnjeuFormDataType> = new Map();
  const actionMap: Map<number, ActionFormDataType> = new Map();

  // Process actions and store them in a map
  rawData.actions.forEach((action: SupabaseActionType) => {
    const formattedAction: ActionFormDataType = {
      id_action: action.id_action,
      nom_action: action.nom_action,
      benefice_entreprise: action.benefice_entreprise,
      delai_recommandation: action.delai_recommandation,
      nombre_sablier: action.nombre_sablier,
      nombre_bonhomme: action.nombre_bonhomme,
      nombre_billet: action.nombre_billet,
      deadline: new Date(action.delai_recommandation), // Assuming delai_recommandation is a timestamp
      coef: action.coef,
      id_objectif: action.id_objectif,
    };
    actionMap.set(action.id_action, formattedAction);
  });

  // Process enjeux
  rawData.enjeux.forEach((enjeu: SupabaseEnjeuType) => {
    const seenObjectifs = new Set(); // Track unique objectifs by ID within each enjeu
    const objectifs = rawData.objectifs
      .filter((objectif: SupabaseObjectifType) => objectif.id_enjeu === enjeu.id_enjeu)
      .filter((objectif: SupabaseObjectifType) => {
        // Filter out duplicates in objectifs for this enjeu
        if (seenObjectifs.has(objectif.id_objectif)) {
          return false;
        }
        seenObjectifs.add(objectif.id_objectif);
        return true;
      })
      .map((objectif: SupabaseObjectifType) => {
        // Get unique actions for each objectif
        const actions = rawData.actions
          .filter((action: SupabaseActionType) => action.id_objectif === objectif.id_objectif)
          .map((action: SupabaseActionType) => actionMap.get(action.id_action)!)
          .filter(
            (action, index, self) =>
              self.findIndex((a) => a.id_action === action.id_action) === index,
          ); // Ensure unique actions by id_action

        const total_coef = actions.reduce(
          (sum, action) => sum + action.coef,
          0,
        );

        return {
          nom_objectif: objectif.nom_objectif,
          actions: actions,
          classe: objectif.classe,
          total_coef: total_coef,
        } as ObjectifFormDataType;
      });

    const total_coef = objectifs.reduce(
      (sum, objectif) => sum + objectif.total_coef,
      0,
    );

    const formattedEnjeu: EnjeuFormDataType = {
      nom_enjeu: enjeu.nom_enjeu,
      objectifs: objectifs,
      classe: enjeu.classe,
      total_coef: total_coef,
    };
    enjeuMap.set(enjeu.id_enjeu, formattedEnjeu);
  });

  // Convert the map to an array and return
  return Array.from(enjeuMap.values());
}

// Helper function to find the second highest value in an array
function findSecondHighest(numbers: number[]): number | null {
  if (numbers.length < 2) return null; // Return null if there aren't enough numbers

  const uniqueNumbers = Array.from(new Set(numbers)); // Remove duplicates
  if (uniqueNumbers.length < 2) return null; // Return null if not enough unique numbers

  uniqueNumbers.sort((a, b) => b - a); // Sort in descending order
  return uniqueNumbers[1]; // Return the second highest value
}

// Function to get the second highest total_coef for enjeux
export function getEnjeuThreshold(
  enjeuFormData: EnjeuFormDataType[],
): number | null {
  const enjeuCoefs = enjeuFormData.map((enjeu) => enjeu.total_coef); // Extract total_coef from enjeux
  return findSecondHighest(enjeuCoefs); // Find the second highest value
}

// Function to get the second highest total_coef for objectifs
export function getObjectifThreshold(
  enjeuFormData: EnjeuFormDataType[],
): number | null {
  const objectifCoefs = enjeuFormData.flatMap((enjeu) =>
    enjeu.objectifs.map((objectif) => objectif.total_coef),
  ); // Extract total_coef from all objectifs across all enjeux
  return findSecondHighest(objectifCoefs); // Find the second highest value
}