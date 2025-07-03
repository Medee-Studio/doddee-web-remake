import { QuestionTree } from "@/types/esg-form";

export const ev : QuestionTree = [
    {
      "id": "1",
      "value": "Quel est le type de véhicules utilisé dans votre flotte de véhicules ?",
      "ids_secteurs": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        24,
        25,
        26,
        27,
        28,
        29
      ],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "2",
          "value": "Véhicules thermiques (essence, diesel)",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [
            {
              "id": "3",
              "value": "Quelle est la part de véhicules thermiques sur le total des véhicules ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [
                194
              ]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "5",
          "value": "Véhicules hybrides (essence/électricité)",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [
            {
              "id": "6",
              "value": "Quelle est la part de véhicules hybrides sur le total des véhicules ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [
                195
              ]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "8",
          "value": "Véhicules électriques",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [
            {
              "id": "9",
              "value": "Quelle est la part de véhicules électriques sur le total des véhicules ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [
                196
              ]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "11",
          "value": "Autre(s)",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [
            {
              "id": "12",
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
    },
    {
      "id": "14",
      "value": "Mesurez-vous la consommation de carburant de votre flotte de véhicules ?",
      "ids_secteurs": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        24,
        25,
        26,
        27,
        28,
        29
      ],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "15",
          "value": "Oui",
          "id_action": 285,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "16",
              "value": "Quel est le volume total de carburant consommé par votre flotte de véhicules (en litres / an) ?",
              "id_action": null,
              "information": "Pour mettre cela en œuvre, collectez des données sur le carburant utilisé par chaque véhicule en enregistrant les factures de carburant ou en utilisant des systèmes de suivi de la consommation.\nRassemblez les données de consommation sur une base annuelle, en vous assurant que chaque véhicule soit inclus dans le suivi.\nUne mesure précise de la consommation de carburant permet d'identifier des opportunités d'optimisation, de réduire les coûts de fonctionnement et de diminuer les émissions de gaz à effet de serre, contribuant ainsi à vos objectifs de responsabilité sociétale.",
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [
                197
              ]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "18",
          "value": "Non",
          "id_action": 285,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        }
      ],
      "type": "question",
      "inputType": "single"
    },
    {
      "id": "19",
      "value": "Connaissez-vous l'émission moyenne de CO2 pour l'ensemble de la flotte de véhicules de votre entreprise ?",
      "ids_secteurs": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        24,
        25,
        26,
        27,
        28,
        29
      ],
      "id_action": null,
      "information": "L'émission moyenne de CO2 par véhicule est généralement exprimée en grammes de CO2 par kilomètre (gCO2/km). Pour calculer cette valeur, vous pouvez utiliser les données spécifiques des constructeurs automobiles fournies dans les fiches techniques des véhicules. Ces informations sont souvent disponibles dans la documentation du véhicule ou en ligne.\n\nSi vous avez une flotte mixte composée de différents types de véhicules (voitures, utilitaires, camions, etc.), vous pouvez calculer une moyenne pondérée en fonction du nombre de kilomètres parcourus par chaque véhicule.\n\nMéthode pour calculer l'émission moyenne de CO2 :\n\n1. Vérifiez les fiches techniques : Obtenez les données d'émission en gCO2/km pour chaque véhicule de votre flotte.\n2. Pondérez en fonction du kilométrage : Multipliez l'émission de chaque véhicule par le nombre de kilomètres parcourus au cours de l'année.\n3. Calculez la moyenne : Additionnez les émissions pondérées de tous les véhicules et divisez par le nombre total de kilomètres parcourus par l'ensemble de la flotte.\n\nCela vous permettra de calculer l'émission moyenne de CO2 pour l'ensemble de votre flotte de véhicules.",
      "children": [
        {
          "id": "20",
          "value": "Oui",
          "id_action": 286,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "21",
              "value": "Quelle est l'émission moyenne de CO2 pour l'ensemble de la flotte de véhicules de votre entreprise (gCO2/km) ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [
                198
              ]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "23",
          "value": "Non",
          "id_action": 286,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        }
      ],
      "type": "question",
      "inputType": "single"
    },
    {
      "id": "24",
      "value": "Avez-vous mis en place des actions pour réduire les émissions de CO2 de votre flotte de véhicules ?",
      "ids_secteurs": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        24,
        25,
        26,
        27,
        28,
        29
      ],
      "id_action": null,
      "information": "Sélectionnez cette option si vous avez mis en place des actions pour réduire les émissions de CO2 de votre flotte de véhicules. Cette question évalue les initiatives prises pour minimiser l'impact environnemental de vos opérations de transport. Les actions peuvent inclure l'utilisation de véhicules économes en carburant, l'adoption de l'éco-conduite, la maintenance régulière des véhicules pour optimiser leur performance, etc.",
      "children": [
        {
          "id": "25",
          "value": "Oui",
          "id_action": 287,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "26",
              "value": "Veuillez décrire les actions mises en place pour réduire les émissions de CO2 (adoption de véhicules électriques, optimisation des itinéraires, formation à l'écoconduite, etc.) :",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "text",
              "id_kpis": []
            }
          ],
          "type": "reponse"
        },
        {
          "id": "28",
          "value": "Non",
          "id_action": 287,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        }
      ],
      "type": "question",
      "inputType": "single"
    },
    {
      "id": "29",
      "value": "Votre entreprise a-t-elle un plan de transition vers des véhicules plus écologiques ?",
      "ids_secteurs": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        24,
        25,
        26,
        27,
        28,
        29
      ],
      "id_action": null,
      "information": "Sélectionnez cette option si votre entreprise a un plan de transition vers des véhicules plus écologiques. Cette question évalue votre engagement à réduire l'impact environnemental de votre flotte. Les actions peuvent inclure la mise en place d'un calendrier pour remplacer les véhicules anciens par des modèles plus économes en carburant, l'intégration de véhicules électriques ou hybrides et des stratégies pour promouvoir l'utilisation de modes de transport durables.",
      "children": [
        {
          "id": "30",
          "value": "Oui",
          "id_action": 288,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "31",
              "value": "Décrivez ce plan de transition (remplacement des véhicules thermiques par des véhicules hybrides ou électriques, politique de renouvellement de la flotte, etc.) :",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "text",
              "id_kpis": []
            }
          ],
          "type": "reponse"
        },
        {
          "id": "33",
          "value": "Non",
          "id_action": 288,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        }
      ],
      "type": "question",
      "inputType": "single"
    },
    {
      "id": "34",
      "value": "Utilisez-vous des véhicules partagés (\"car sharing\") au sein de votre entreprise ?",
      "ids_secteurs": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        24,
        25,
        26,
        27,
        28,
        29
      ],
      "id_action": null,
      "information": "Sélectionnez cette option si vous utilisez des véhicules partagés (\"car sharing\") au sein de votre entreprise. Cette question évalue l'adoption de solutions de transport collaboratives qui peuvent réduire le nombre de véhicules en circulation et les émissions de CO2. Les actions peuvent inclure la mise en place d'un système de réservation de véhicules partagés pour les employés, l'encouragement à l'utilisation de ces véhicules pour des trajets professionnels et la collaboration avec des services de car sharing.",
      "children": [
        {
          "id": "35",
          "value": "Oui",
          "id_action": 289,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "36",
          "value": "Non",
          "id_action": 289,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "37",
          "value": "Pas concerné",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        }
      ],
      "type": "question",
      "inputType": "single"
    },
    {
      "id": "38",
      "value": "Renouvelez-vous régulièrement votre flotte de véhicules ?",
      "ids_secteurs": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        24,
        25,
        26,
        27,
        28,
        29
      ],
      "id_action": null,
      "information": "Il est important de considérer que maximiser l'utilisation des ressources existantes peut être une stratégie durable. Cela peut inclure l'optimisation des véhicules en service, l'adoption de pratiques de partage ou l'investissement dans des solutions de transport alternatives. En somme, que vous choisissiez de renouveler régulièrement ou de remplacer uniquement en cas de besoin, il est essentiel d'inscrire votre stratégie dans une démarche globale de réduction de l'impact environnemental.",
      "children": [
        {
          "id": "39",
          "value": "Oui, nous avons un programme de renouvellement régulier.",
          "id_action": 290,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "40",
              "value": "Quelle est la fréquence moyenne de ce renouvellement ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [
                16
              ]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "42",
          "value": "Non, nous remplaçons les véhicules uniquement en cas de besoin.",
          "id_action": null,
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