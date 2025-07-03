import { QuestionTree } from "@/types/esg-form";

export const ed: QuestionTree = [
    {
      "id": "1",
      "value": "Votre entreprise a-t-elle mis en place des actions pour minimiser l'empreinte carbone de sa logistique de distribution ?",
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
      "information": "Cette question a pour objectif de déterminer si votre entreprise a mis en place des initiatives pour optimiser la logistique de distribution. L'optimisation de la logistique de distribution consiste à réduire l'impact environnemental et améliorer l'efficacité des livraisons en adoptant des actions concrètes.\n\nCela peut inclure l'utilisation de moyens de transport respectueux de l'environnement, la planification des itinéraires, la collaboration avec d'autres entreprises pour partager les ressources logistiques, ou encore la mise en place de solutions pour le dernier kilomètre, comme des consignes intelligentes ou des points relais.",
      "children": [
        {
          "id": "2",
          "value": "Oui",
          "id_action": 244,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "3",
              "value": "Quelles sont ces actions ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "4",
                  "value": "L'entreprise favorise des moyens de transport plus respectueux de l'environnement\n(carburants alternatifs, véhicules hybrides ou électriques, formation à l'éco-conduite, etc.).",
                  "id_action": null,
                  "done": false,
                  "information": "Sélectionnez cette option si votre entreprise utilise des carburants alternatifs ou forme ses employés/dirigeants à l'éco-conduite par exemple.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "5",
                  "value": "L'entreprise optimise et planifie des itinéraires\n(utilisation de logiciels avancés ou de GPS pour réduire la distance parcourue).",
                  "id_action": null,
                  "done": false,
                  "information": "Sélectionnez cette option si votre entreprise utilise des logiciels avancés ou des GPS pour optimiser les itinéraires de transport, réduisant ainsi la distance parcourue et l'impact environnemental.\n\nExemple de logiciels : Mapo by Woop, ORTEC, Opti-Time, AntsRoute, Geoconcept, PTV Route Optimiser",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "6",
                  "value": "L'entreprise collabore avec d'autres entreprises pour partager ses ressources logistiques et réduire les voyages à vide.",
                  "id_action": null,
                  "done": false,
                  "information": "Sélectionnez cette option si votre entreprise collabore avec d'autres entreprises pour partager les ressources logistiques et réduire les voyages à vide. Cette approche peut inclure la mutualisation des moyens de transport, la consolidation des livraisons, et la coordination des itinéraires pour maximiser l'efficacité et réduire l'empreinte carbone.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "7",
                  "value": "L'entreprise utilise la logistique du dernier kilomètre\n(livraison en vélo, en véhicule électrique, consigne intelligente, point relais, etc.).",
                  "id_action": null,
                  "done": false,
                  "information": "Sélectionnez cette option si votre entreprise optimise la logistique du dernier kilomètre en utilisant des moyens de transport plus verts et des solutions de consigne intelligente ou de point relais.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "8",
                  "value": "L'entreprise optimise ses livraisons pour limiter les transports\n(logiciel de gestion des tournées, réduction des étapes, logistique inversée, etc.).",
                  "id_action": null,
                  "done": false,
                  "information": "Sélectionnez cette option si votre entreprise optimise les livraisons pour limiter les transports en utilisant des logiciels de gestion des tournées ou la logistique inversée. Cette approche vise à maximiser l'efficacité des livraisons, réduire le nombre de kilomètres parcourus et minimiser l'impact environnemental.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "9",
                  "value": "L'entreprise a eu recours à un audit logistique pour évaluer ses opérations de transport et identifier ses inefficacités.",
                  "id_action": null,
                  "done": false,
                  "information": "Sélectionnez cette option si votre entreprise réalise des audits logistiques pour évaluer les opérations de transport et identifier les inefficacités. Les audits permettent de repérer les zones à améliorer et d'optimiser les processus logistiques.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "10",
                  "value": "L'entreprise a mis en place et suit des indicateurs clés de performance pour optimiser sa logistique de distribution et réduire son empreinte carbone en conséquence.",
                  "id_action": null,
                  "done": false,
                  "information": "Sélectionnez cette option si votre entreprise met en place des indicateurs clés de performance (KPI) pour suivre les progrès et optimiser la gestion des transports en conséquence. Les KPI permettent de mesurer l'efficacité des actions mises en place et de réaliser des ajustements nécessaires.",
                  "children": [],
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
            }
          ],
          "type": "reponse"
        },
        {
          "id": "14",
          "value": "Non",
          "id_action": 244,
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
      "id": "15",
      "value": "Votre entreprise a-t-elle mis en place des solutions pour réduire l'empreinte carbone de sa logistique de distribution à travers l'optimisation des emballages ?",
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
      "information": "Cette question a pour objectif de déterminer si votre entreprise a adopté des initiatives pour optimiser la logistique de distribution à travers la gestion des emballages. L'optimisation des emballages consiste à repenser leur conception, leur matériau, leur taille, leur réutilisation ou leur recyclabilité pour réduire leur impact environnemental, les coûts logistiques, et améliorer l'efficacité. Cela peut inclure l'utilisation de matériaux recyclables, la réduction des emballages superflus, ou encore la mise en place de systèmes de réutilisation des emballages. Votre réponse doit refléter les actions concrètes mises en place par votre entreprise dans ce domaine.",
      "children": [
        {
          "id": "16",
          "value": "Oui",
          "id_action": 245,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "17",
              "value": "Lesquelles ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "18",
                  "value": "Adoption de la démarche zéro emballage pour réduire les émissions de CO2 liées à la production et au transport des emballages (livraison en vrac, contenants réutilisables, etc.)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "19",
                  "value": "Réduction des emballages pour minimiser l'empreinte carbone en adoptant des matériaux recyclables et en éliminant les emballages superflus",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "20",
                  "value": "Mise en place d'indicateurs de performance pour suivre et optimiser la réduction des emballages, contribuant ainsi à la baisse des émissions de CO2 liées à la logistique",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "21",
                  "value": "Limitation du poids et du volume des emballages pour optimiser les chargements et réduire les émissions de CO2 liées au transport (chargements en vrac, caisses navette, palette multi-rotations, etc.)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "22",
                  "value": "Utilisation d'emballages durables à faible impact carbone (réutilisables, minimalistes, biodégradables, recyclés ou recyclables)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "23",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "24",
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
          "id": "26",
          "value": "Non",
          "id_action": 245,
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