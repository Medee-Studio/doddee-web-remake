import { QuestionTree } from "@/types/esg-form";

export const ea : QuestionTree = [
    {
        "id": "1",
        "value": "Votre entreprise a-t-elle mis en place des actions pour réduire l'impact environnemental de la logistique amont de ses produits ou matières premières ?",
        "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
        "id_action": null,
        "information": "Cette question vise à savoir si votre organisation a pris des mesures pour diminuer les effets négatifs de ses activités logistiques sur l'environnement.\nLa logistique amont concerne toutes les activités liées à l'approvisionnement des matières premières ou des produits avant qu'ils n'arrivent à l'usine ou au site de production. Cela inclut le transport, le stockage et la gestion des stocks.\nL'impact environnemental fait référence aux effets négatifs que ces activités peuvent avoir sur l'environnement, comme les émissions de gaz à effet de serre, la consommation d'énergie, la pollution de l'air et de l'eau, et la production de déchets",
        "children": [
          {
            "id": "2",
            "value": "Oui",
            "id_action": 277,
            "done": true,
            "information": null,
            "children": [
              {
                "id": "3",
                "value": "Comment votre organisation réduit-elle l'impact environnemental de la logistique amont (approvisionnement) de ses produits ou matières premières ?",
                "id_action": null,
                "information": null,
                "children": [
                  {
                    "id": "4",
                    "value": "Recours au transport combiné pour réduire l'impact du transport (maritime, rail, route, etc.)",
                    "id_action": null,
                    "done": false,
                    "information": null,
                    "children": [],
                    "type": "reponse"
                  },
                  {
                    "id": "5",
                    "value": "Optimisation des transports utilisés (mutualisation, maximisation des taux de chargement, logistique inversée, etc.)",
                    "id_action": null,
                    "done": false,
                    "information": null,
                    "children": [],
                    "type": "reponse"
                  },
                  {
                    "id": "6",
                    "value": "Sélection de transports moins impactants sur l'environnement (utilisation de carburants alternatifs, électrique, etc.)",
                    "id_action": null,
                    "done": false,
                    "information": null,
                    "children": [],
                    "type": "reponse"
                  },
                  {
                    "id": "7",
                    "value": "Choix de prestataires de transport ayant une RSE formalisée",
                    "id_action": null,
                    "done": false,
                    "information": null,
                    "children": [],
                    "type": "reponse"
                  },
                  {
                    "id": "8",
                    "value": "Autre(s)",
                    "id_action": null,
                    "done": false,
                    "information": null,
                    "children": [
                      {
                        "id": "9",
                        "value": "Veuillez préciser :",
                        "id_action": null,
                        "information": null,
                        "children": [],
                        "type": "question",
                        "inputType": "text",
                        "id_kpis": []
                      }
                    ],
                    "type": "reponse"
                  }
                ],
                "type": "question",
                "inputType": "multiple"
              }
            ],
            "type": "reponse"
          },
          {
            "id": "11",
            "value": "Non",
            "id_action": 277,
            "done": false,
            "information": null,
            "children": [],
            "type": "reponse"
          }
        ],
        "type": "question",
        "inputType": "single"
      }
]