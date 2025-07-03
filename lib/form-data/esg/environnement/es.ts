import { QuestionTree } from "@/types/esg-form";

export const es: QuestionTree = [
    {
      "id": "1",
      "value": "Votre entreprise optimise-t-elle sa gestion des stocks pour améliorer sa logistique de transport et réduire son empreinte carbone ?",
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
      "information": "L'optimisation de la gestion des stocks peut inclure des initiatives telles que la réduction des stocks excédentaires pour diminuer les trajets inutiles, l'amélioration de la prévision des besoins pour éviter les déplacements fréquents, l'adoption de méthodes de stockage adaptées pour minimiser les transports, ou l'utilisation de technologies pour mieux gérer les flux de marchandises. Votre réponse doit décrire les pratiques et stratégies que votre entreprise a mises en place pour allier une gestion efficace des stocks et une réduction des impacts environnementaux.",
      "children": [
        {
          "id": "2",
          "value": "Oui",
          "id_action": 246,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "3",
              "value": "L'entreprise utilise t-elle des logiciels avancés de gestion des stocks pour optimiser ses niveaux de stock ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise utilise des logiciels de gestion des stocks avancés pour optimiser les niveaux de stock.\n\nCes logiciels permettent de suivre les mouvements de stock en temps réel, de prévoir les besoins futurs et de réduire les coûts de stockage en évitant les surstocks et les ruptures.",
              "children": [
                {
                  "id": "4",
                  "value": "Oui",
                  "id_action": 249,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "5",
                      "value": "Quel outil ou logiciel l'entreprise utilise t-elle ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "6",
                          "value": "Veuillez préciser :",
                          "id_action": null,
                          "information": null,
                          "children": [],
                          "type": "question",
                          "inputType": "text",
                          "id_kpis": []
                        }
                      ],
                      "type": "question",
                      "inputType": "text"
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "8",
                  "value": "Non",
                  "id_action": 249,
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
              "id": "9",
              "value": "L'entreprise améliore t-elle sa gestion des stocks pour réduire les besoins de transport fréquents ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise améliore la gestion des stocks pour réduire les besoins de transport fréquents.\n\nCela inclut l'optimisation des niveaux de stock, la prévision de la demande et l'utilisation de logiciels de gestion des stocks pour minimiser les ruptures de stock et les surstocks, permettant ainsi de réduire la fréquence des livraisons.",
              "children": [
                {
                  "id": "10",
                  "value": "Oui",
                  "id_action": 250,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "11",
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
                },
                {
                  "id": "13",
                  "value": "Non",
                  "id_action": 250,
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
              "id": "14",
              "value": "L'entreprise adopte t-elle une politique de zéro stock, en utilisant des méthodes comme la précommande et le juste à temps pour minimiser les besoins de stockage et de transport ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise optimise le stockage avec une politique de 0 stock (précommande, juste à temps, etc.).\n\nCette méthode vise à minimiser les niveaux de stock en maintenant les quantités nécessaires pour répondre à la demande immédiate, réduisant ainsi les coûts de stockage et les risques de surstock.",
              "children": [
                {
                  "id": "15",
                  "value": "Oui",
                  "id_action": 251,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "16",
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
                },
                {
                  "id": "18",
                  "value": "Non",
                  "id_action": 251,
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
              "value": "L'entreprise a t-elle mis en place un système de stockage intelligent qui optimise la gestion des stocks et réduit les besoins de transport fréquents ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise utilise des techniques avancées de gestion des stocks pour réduire les besoins de transport fréquents et les coûts associés.\n\nCela inclut l'utilisation de technologies telles que les systèmes de gestion des stocks en temps réel, les prévisions de la demande basées sur les données, et les méthodes de stockage intelligent pour optimiser les niveaux de stock et réduire les mouvements inutiles.",
              "children": [
                {
                  "id": "20",
                  "value": "Oui",
                  "id_action": 252,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "21",
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
                },
                {
                  "id": "23",
                  "value": "Non",
                  "id_action": 252,
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
              "value": "L'entreprise regroupe t-elle les commandes pour optimiser les envois et réduire le nombre de trajets nécessaires pour les livraisons ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise optimise les commandes en regroupant les colis. Cette approche permet de réduire le nombre de livraisons, diminuer les coûts de transport et limiter l'empreinte carbone associée aux déplacements fréquents.\n\nLe regroupement des colis peut être réalisé grâce à des logiciels de gestion des commandes et des stratégies logistiques efficaces.",
              "children": [
                {
                  "id": "25",
                  "value": "Oui",
                  "id_action": 253,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "26",
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
                },
                {
                  "id": "28",
                  "value": "Non",
                  "id_action": 253,
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
              "value": "L'entreprise a t-elle mis en place des indicateurs clés de performance pour suivre et optimiser sa gestion des stocks ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise a mis en place des indicateurs clés de performance (KPI) pour suivre les progrès et optimiser la gestion des stocks.\n\nLes KPI permettent de mesurer l'efficacité des actions mises en place et de réaliser des ajustements nécessaires. Ils sont essentiels pour garantir une gestion efficace et proactive des stocks.",
              "children": [
                {
                  "id": "30",
                  "value": "Oui",
                  "id_action": 254,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "31",
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
                },
                {
                  "id": "33",
                  "value": "Non",
                  "id_action": 254,
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
              "value": "Autre(s)",
              "id_action": null,
              "done": false,
              "information": "Sélectionnez cette option si votre entreprise a mis en place d'autres actions pour optimiser sa logistique de distribution à travers la gestion des stocks.\n\nDécrivez l'action spécifique mise en œuvre et fournissez des documents de validation pertinents.",
              "children": [
                {
                  "id": "35",
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
          "type": "reponse"
        },
        {
          "id": "37",
          "value": "Non",
          "id_action": 246,
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