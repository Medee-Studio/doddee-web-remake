import { QuestionTree } from "@/types/esg-form";

export const el: QuestionTree = [
    {
      "id": "1",
      "value": "Votre entreprise a-t-elle mis en place des actions pour une meilleure gestion énergétique ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Cette question vise à évaluer si votre entreprise a mis en place des actions pour améliorer la gestion de sa consommation d'énergie. Une meilleure gestion énergétique peut inclure des initiatives visant à réduire la consommation d'énergie, à utiliser des sources d'énergie renouvelable, ou à améliorer l'efficacité énergétique de vos installations, équipements et processus de production. Cela peut se traduire par l'installation de systèmes d'éclairage ou d'appareils à faible consommation, l'optimisation des processus industriels pour minimiser l'utilisation d'énergie, ou encore l'adoption d'une stratégie globale de réduction de l'empreinte énergétique.",
      "children": [
        {
          "id": "2",
          "value": "Oui",
          "id_action": 304,
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
                  "value": "Système de récupération de la chaleur des eaux usées pour le chauffage ou la production d'eau chaude",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "5",
                  "value": "Système de récupération de la chaleur dégagée par les équipements pour le chauffage ou le préchauffage d'air ou d'eau",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "6",
                  "value": "Système de récupération de gaz ou de sous-produits pour une utilisation énergétique ou une réduction des émissions",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "7",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "8",
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
          "id": "10",
          "value": "Non",
          "id_action": 304,
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
      "id": "11",
      "value": "Utilisez-vous du gaz naturel comme combustible ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Le gaz naturel est un combustible fossile couramment utilisé pour le chauffage des bâtiments ou dans les processus industriels nécessitant de la chaleur, comme la production de vapeur ou le séchage industriel.",
      "children": [
        {
          "id": "12",
          "value": "Oui",
          "id_action": 305,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "13",
              "value": "Veuillez indiquer votre consommation annuelle totale de gaz naturel en mètres cubes (m³) :",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [167]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "15",
          "value": "Non",
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
      "id": "16",
      "value": "Utilisez-vous du charbon comme combustible ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Le charbon est principalement utilisé dans certaines industries lourdes, comme la sidérurgie, pour alimenter des fours à haute température, bien que son utilisation soit en déclin en raison de son impact environnemental.",
      "children": [
        {
          "id": "17",
          "value": "Oui",
          "id_action": 306,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "18",
              "value": "Veuillez indiquer votre consommation annuelle totale de charbon en tonnes :",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [168]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "20",
          "value": "Non",
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
      "id": "21",
      "value": "Utilisez-vous du fioul comme combustible ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "22",
          "value": "Oui",
          "id_action": 307,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "23",
              "value": "Veuillez indiquer votre consommation annuelle totale de fioul en litres :",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [169]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "25",
          "value": "Non",
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
      "id": "26",
      "value": "Veuillez indiquer votre consommation annuelle totale d'électricité en kWh :",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "28",
          "value": "Votre électricité provient-elle de sources renouvelables ?",
          "id_action": null,
          "information": null,
          "children": [
            {
              "id": "29",
              "value": "Oui",
              "id_action": 308,
              "done": true,
              "information": null,
              "children": [
                {
                  "id": "30",
                  "value": "Veuillez indiquer votre consommation totale d'électricité provenant de sources renouvelables en kWh / an :",
                  "id_action": null,
                  "information": null,
                  "children": [],
                  "type": "question",
                  "inputType": "numeric",
                  "id_kpis": [171]
                }
              ],
              "type": "reponse"
            },
            {
              "id": "32",
              "value": "Non",
              "id_action": 308,
              "done": false,
              "information": null,
              "children": [],
              "type": "reponse"
            }
          ],
          "type": "question",
          "inputType": "single"
        }
      ],
      "type": "question",
      "inputType": "numeric",
      "id_kpis": [170]
    },
    {
      "id": "33",
      "value": "Votre entreprise a-t-elle produit de l'énergie renouvelable au cours des 12 derniers mois ou du dernier exercice ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "L'énergie bas carbone comprend les sources d'énergie qui génèrent peu ou pas d'émissions de gaz à effet de serre, telles que l'énergie solaire, éolienne, hydraulique, géothermique, biomasse ou nucléaire. Cette question cherche à évaluer la contribution de votre entreprise à la transition énergétique en produisant ou en commercialisant des formes d'énergie plus respectueuses de l'environnement.",
      "children": [
        {
          "id": "34",
          "value": "Oui",
          "id_action": 309,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "35",
              "value": "Veuillez préciser la quantité d'énergie renouvelable produite par votre entreprise au cours des 12 derniers mois ou du dernier exercice, en kWh ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [172]
            },
            {
              "id": "37",
              "value": "Quelles sont les technologies utilisées ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "38",
                  "value": "Installation de panneaux solaires",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "39",
                  "value": "Utilisation d'éoliennes",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "40",
                  "value": "Systèmes de chauffage solaire",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "41",
                  "value": "Pompes à chaleur géothermiques",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "42",
                  "value": "Participation à des projets d'énergie renouvelable",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "43",
                  "value": "Certificats d'énergie verte",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "44",
                  "value": "Systèmes de récupération de chaleur",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "45",
                  "value": "Contrats d'achat d'énergie verte (PPA)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "46",
                  "value": "Biogaz et biométhane",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "47",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "48",
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
          "id": "50",
          "value": "Non",
          "id_action": 309,
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
      "id": "51",
      "value": "Avez-vous mis en place des actions visant à réduire ou optimiser vos consommations énergétiques ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Ces actions peuvent inclure des initiatives telles que l'installation d'équipements à haute efficacité énergétique, la mise en place de systèmes de gestion énergétique, la sensibilisation des employés à la réduction de la consommation, ou encore l'adoption de nouvelles technologies visant à minimiser l'empreinte énergétique de vos activités.",
      "children": [
        {
          "id": "52",
          "value": "Oui",
          "id_action": 310,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "53",
              "value": "Quelles sont ces actions ?",
              "id_action": 310,
              "information": null,
              "children": [
                {
                  "id": "54",
                  "value": "Mesure et suivi régulier de la consommation énergétique",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "55",
                  "value": "Objectifs chiffrés et datés de réduction de la consommation énergétique",
                  "id_action": 311,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "56",
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
                  "id": "58",
                  "value": "Mise en place de politiques d'achat favorisant les équipements économes en énergie",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "59",
                  "value": "Installations visant à réduire ou optimiser vos consommations d'énergie",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "60",
                      "value": "Quelles sont les installations faites pour réduire ou optimiser vos consommations d'énergie ?",
                      "id_action": null,
                      "information": "Ces actions peuvent inclure des initiatives telles que l'installation d'équipements à haute efficacité énergétique, la mise en place de systèmes de gestion énergétique, la sensibilisation des employés à la réduction de la consommation, ou encore l'adoption de nouvelles technologies visant à minimiser l'empreinte énergétique de vos activités.",
                      "children": [
                        {
                          "id": "61",
                          "value": "Éclairage LED à faible consommation",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "62",
                              "value": "Oui",
                              "id_action": 312,
                              "done": true,
                              "information": null,
                              "children": [
                                {
                                  "id": "63",
                                  "value": "Quel est le taux de couverture de vos bureaux/locaux en éclairage LED ?",
                                  "id_action": null,
                                  "information": null,
                                  "children": [],
                                  "type": "question",
                                  "inputType": "numeric",
                                  "id_kpis": [173]
                                }
                              ],
                              "type": "reponse"
                            },
                            {
                              "id": "65",
                              "value": "Non",
                              "id_action": 312,
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
                          "id": "67",
                          "value": "Automatisation de l'éclairage avec détecteurs de présence",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "68",
                              "value": "Oui",
                              "id_action": 313,
                              "done": true,
                              "information": null,
                              "children": [
                                {
                                  "id": "69",
                                  "value": "Quel est le pourcentage de surfaces/zones équipées de détecteurs de présence pour l'éclairage ?",
                                  "id_action": null,
                                  "information": null,
                                  "children": [],
                                  "type": "question",
                                  "inputType": "numeric",
                                  "id_kpis": [174]
                                }
                              ],
                              "type": "reponse"
                            },
                            {
                              "id": "71",
                              "value": "Non",
                              "id_action": 313,
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
                          "id": "72",
                          "value": "Installation de systèmes de régulation thermique",
                          "id_action": null,
                          "done": false,
                          "information": "Cela inclut divers équipements et technologies conçus pour maintenir une température optimale et stable dans un espace.\n\nCes systèmes peuvent comprendre des thermostats intelligents, qui offrent des fonctionnalités avancées telles que la programmation automatique et le contrôle à distance via des applications mobiles, ainsi que d'autres dispositifs comme les vannes thermostatiques, les capteurs de température, et les contrôleurs pour les systèmes de chauffage, ventilation, et climatisation (CVC). L'objectif est d'améliorer le confort et l'efficacité énergétique en régulant précisément la température.",
                          "children": [
                            {
                              "id": "73",
                              "value": "Oui",
                              "id_action": 314,
                              "done": true,
                              "information": null,
                              "children": [
                                {
                                  "id": "74",
                                  "value": "Quel pourcentage de vos surfaces est équipé de systèmes de régulation thermique ?",
                                  "id_action": null,
                                  "information": null,
                                  "children": [],
                                  "type": "question",
                                  "inputType": "numeric",
                                  "id_kpis": [175]
                                }
                              ],
                              "type": "reponse"
                            },
                            {
                              "id": "76",
                              "value": "Non",
                              "id_action": 314,
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
                          "id": "78",
                          "value": "Utilisation d'appareils électroménagers écoénergétiques",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "79",
                              "value": "Oui",
                              "id_action": 315,
                              "done": true,
                              "information": null,
                              "children": [
                                {
                                  "id": "80",
                                  "value": "Quel pourcentage de vos appareils électroménagers sont classés comme écoénergétiques (par exemple, avec une étiquette énergétique A+++ ou équivalent) ?",
                                  "id_action": null,
                                  "information": null,
                                  "children": [],
                                  "type": "question",
                                  "inputType": "numeric",
                                  "id_kpis": [176]
                                }
                              ],
                              "type": "reponse"
                            },
                            {
                              "id": "82",
                              "value": "Non",
                              "id_action": 315,
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
                          "id": "83",
                          "value": "Isolation thermique pour réduire la climatisation/chauffage",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "84",
                              "value": "Oui",
                              "id_action": 316,
                              "done": true,
                              "information": null,
                              "children": [
                                {
                                  "id": "85",
                                  "value": "Quel pourcentage de la surface totale de vos locaux/bureaux a bénéficié d'une amélioration de l'isolation thermique ?",
                                  "id_action": null,
                                  "information": null,
                                  "children": [],
                                  "type": "question",
                                  "inputType": "numeric",
                                  "id_kpis": [177]
                                }
                              ],
                              "type": "reponse"
                            },
                            {
                              "id": "87",
                              "value": "Non",
                              "id_action": 316,
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
                          "id": "88",
                          "value": "Gestion intelligente de l'énergie avec des systèmes de contrôle",
                          "id_action": null,
                          "done": false,
                          "information": "La gestion intelligente de l'énergie avec des systèmes de contrôle se réfère à une approche globale de la gestion de l'énergie dans un bâtiment ou une installation.\n\nCela inclut l'utilisation de technologies avancées pour surveiller et contrôler la consommation énergétique de manière intégrée.\nLes systèmes de contrôle de l'énergie peuvent gérer divers aspects de l'utilisation de l'énergie, y compris la régulation thermique, l'éclairage, et d'autres équipements, souvent en utilisant des données en temps réel pour optimiser l'efficacité énergétique.",
                          "children": [
                            {
                              "id": "89",
                              "value": "Oui",
                              "id_action": 317,
                              "done": true,
                              "information": null,
                              "children": [],
                              "type": "reponse"
                            },
                            {
                              "id": "90",
                              "value": "Non",
                              "id_action": 317,
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
                          "id": "91",
                          "value": "Chauffe-eau à haut rendement",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "92",
                              "value": "Oui",
                              "id_action": 318,
                              "done": true,
                              "information": null,
                              "children": [],
                              "type": "reponse"
                            },
                            {
                              "id": "93",
                              "value": "Non",
                              "id_action": 318,
                              "done": false,
                              "information": null,
                              "children": [],
                              "type": "reponse"
                            },
                            {
                              "id": "94",
                              "value": "Non concerné",
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
                          "id": "95",
                          "value": "Systèmes de chauffage, ventilation et climatisation (CVC) à haut rendement",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "96",
                              "value": "Oui",
                              "id_action": 319,
                              "done": true,
                              "information": null,
                              "children": [],
                              "type": "reponse"
                            },
                            {
                              "id": "97",
                              "value": "Non",
                              "id_action": 319,
                              "done": false,
                              "information": null,
                              "children": [],
                              "type": "reponse"
                            },
                            {
                              "id": "98",
                              "value": "Non concerné",
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
                          "id": "99",
                          "value": "Pompes à chaleur à haut rendement",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "100",
                              "value": "Oui",
                              "id_action": 320,
                              "done": true,
                              "information": null,
                              "children": [],
                              "type": "reponse"
                            },
                            {
                              "id": "101",
                              "value": "Non",
                              "id_action": 320,
                              "done": false,
                              "information": null,
                              "children": [],
                              "type": "reponse"
                            },
                            {
                              "id": "102",
                              "value": "Non concerné",
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
                          "id": "103",
                          "value": "Domotique visant à optimiser la consommation d'énergie et le confort",
                          "id_action": null,
                          "done": false,
                          "information": "Ce choix s'intéresse aux systèmes intégrés de gestion et de contrôle intelligent qui permettent de réguler et d'optimiser la consommation d'énergie dans les bâtiments.\nCela inclut l'automatisation de l'éclairage, la régulation thermique avec des thermostats intelligents, la gestion centralisée de l'énergie, et d'autres technologies visant à améliorer le confort tout en réduisant les coûts énergétiques.",
                          "children": [
                            {
                              "id": "104",
                              "value": "Oui",
                              "id_action": 321,
                              "done": true,
                              "information": null,
                              "children": [],
                              "type": "reponse"
                            },
                            {
                              "id": "105",
                              "value": "Non",
                              "id_action": 321,
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
                          "id": "106",
                          "value": "Autres(s)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "107",
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
                }
              ],
              "type": "question",
              "inputType": "multiple"
            }
          ],
          "type": "reponse"
        },
        {
          "id": "109",
          "value": "Non",
          "id_action": 322,
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
      "id": "110",
      "value": "Avez-vous réalisé un Diagnostic de Performance Énergétique (DPE) de vos bâtiments ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Le Diagnostic de Performance Énergétique (DPE) permet d'évaluer la consommation énergétique d'un bâtiment et son impact en termes d'émissions de gaz à effet de serre. Il classe les bâtiments sur une échelle allant de A (très performant) à G (peu performant). Cette mesure est essentielle pour identifier les améliorations possibles en matière d'efficacité énergétique et pour réduire l'empreinte environnementale de votre entreprise.",
      "children": [
        {
          "id": "111",
          "value": "Oui",
          "id_action": 324,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "112",
              "value": "Quel est le classement énergétique de vos bâtiments (moyenne si plusieurs bâtiments) ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "113",
                  "value": "A",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [178]
                },
                {
                  "id": "114",
                  "value": "B",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [179]
                },
                {
                  "id": "115",
                  "value": "C",
                  "id_action": 323,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [180]
                },
                {
                  "id": "116",
                  "value": "D",
                  "id_action": 323,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [181]
                },
                {
                  "id": "117",
                  "value": "E",
                  "id_action": 323,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [182]
                },
                {
                  "id": "118",
                  "value": "F",
                  "id_action": 323,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [183]
                },
                {
                  "id": "119",
                  "value": "G",
                  "id_action": 323,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [184]
                }
              ],
              "type": "question",
              "inputType": "single"
            }
          ],
          "type": "reponse"
        },
        {
          "id": "120",
          "value": "Non",
          "id_action": 324,
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
      "id": "121",
      "value": "Vos bâtiments sont-ils certifiés selon des standards environnementaux comme HQE, LEED ou BREEAM ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Les certifications environnementales telles que HQE, LEED, ou BREEAM garantissent que vos bâtiments respectent des critères stricts en matière d'efficacité énergétique, de durabilité, et de respect de l'environnement. Ces certifications attestent de la qualité de vos bâtiments et de leur faible impact écologique, en améliorant à la fois leur performance énergétique et leur confort d'usage.",
      "children": [
        {
          "id": "122",
          "value": "Oui",
          "id_action": 325,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "123",
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
          "id": "125",
          "value": "Non",
          "id_action": 325,
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
      "id": "126",
      "value": "Avez-vous réalisé une analyse environnementale de vos sites et implantations ?",
      "ids_secteurs": [1, 3, 9, 28],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "127",
          "value": "Oui",
          "id_action": 326,
          "done": true,
          "information": "Une analyse environnementale consiste à évaluer les impacts de vos activités, installations, et processus sur l'environnement. Cela peut inclure l'évaluation des émissions de gaz à effet de serre, la consommation d'eau et d'énergie, la gestion des déchets, l'impact sur la biodiversité, ainsi que les risques liés aux pollutions. L'objectif est d'identifier les points faibles et les opportunités d'amélioration pour minimiser l'empreinte écologique de vos sites.",
          "children": [
            {
              "id": "128",
              "value": "Veuillez indiquer quels aspects ont été couverts dans cette analyse ? (ex. : énergie, déchets, émissions de CO2, biodiversité)",
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
          "id": "130",
          "value": "Non",
          "id_action": 326,
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
      "id": "131",
      "value": "Quel est le total des surfaces occupées (possédées, louées ou gérées) par votre entreprise incluant les terrains non construits et les bâtiments (en m²) ?",
      "ids_secteurs": [1, 3, 9, 28],
      "id_action": null,
      "information": "Cela inclut toutes les surfaces utilisées par votre entreprise pour ses activités, y compris les bureaux, les usines, les entrepôts, les terrains et autres installations. La connaissance de cette surface totale est importante pour évaluer l'empreinte physique de votre entreprise, ainsi que pour comprendre l'impact environnemental et les besoins en ressources liés à l'utilisation de ces espaces.",
      "children": [],
      "type": "question",
      "inputType": "numeric",
      "id_kpis": [185]
    },
    {
      "id": "133",
      "value": "Quelle est votre utilisation totale des sols (en m²) ?\n(Part de vos sols utilisée pour vos activités principales : production, stockage, bureaux)",
      "ids_secteurs": [1, 3, 9, 28],
      "id_action": null,
      "information": "Cette question cible uniquement les surfaces réellement utilisées pour les activités principales (production, stockage, bureaux). Elle ne concerne pas les terrains non exploités ou les espaces verts.\n\nExemple : Une entreprise utilisant 1 000 m² pour ses bureaux, entrepôts ou ateliers, sur un total de 5 000 m² de terrains.",
      "children": [],
      "type": "question",
      "inputType": "numeric",
      "id_kpis": [186]
    },
    {
      "id": "135",
      "value": "Quelle est votre surface totale imperméabilisée (en m²) ?\ninclut les surfaces comme les parkings, routes, bâtiments non perméables)",
      "ids_secteurs": [1, 3, 9, 28],
      "id_action": null,
      "information": "Il s'agit ici d'évaluer la surface totale de vos terrains ou sites sur laquelle le sol a été rendu imperméable, généralement par des constructions, du béton ou de l'asphalte. Cela inclut les routes, les parkings, les bâtiments, et tout autre aménagement qui empêche l'eau de pluie de s'infiltrer naturellement dans le sol.\nCette information est importante pour comprendre l'impact de vos activités sur l'écosystème local, notamment en ce qui concerne la gestion de l'eau, les risques d'inondations et l'effet sur les habitats naturels. Une surface imperméabilisée importante peut contribuer à des problèmes environnementaux tels que la diminution de la biodiversité, l'augmentation des ruissellements d'eau polluée et des perturbations dans le cycle naturel de l'eau.",
      "children": [],
      "type": "question",
      "inputType": "numeric",
      "id_kpis": [187]
    },
    {
      "id": "137",
      "value": "Quelle est la surface totale des espaces naturels ou non construits gérés dans le respect de la nature (en m²) ?",
      "ids_secteurs": [1, 3, 9, 28],
      "id_action": null,
      "information": "Cette question vise à évaluer la surface de votre site que vous gérez de manière responsable en tenant compte de la biodiversité et des écosystèmes. Cela inclut toutes les zones naturelles, telles que les espaces verts, forêts, terres agricoles, ou autres surfaces non construites, sur lesquelles vous appliquez des pratiques durables pour minimiser l'impact environnemental et protéger la nature.\n\nCes pratiques peuvent inclure l'absence de pesticides nocifs, la restauration des habitats naturels, la gestion écologique des ressources, ou d'autres mesures visant à préserver la biodiversité locale. Lors de la réponse, n'oubliez pas d'inclure toutes les surfaces, même si elles sont petites ou dispersées, dès lors que vous y avez mis en place des actions concrètes conformes à des critères écologiques et environnementaux spécifiques.",
      "children": [],
      "type": "question",
      "inputType": "numeric",
      "id_kpis": [188]
    },
    {
      "id": "139",
      "value": "Etes-vous situé dans ou à proximité de zones sensibles ?",
      "ids_secteurs": [1, 3, 9, 28],
      "id_action": null,
      "information": "Cela peut inclure des zones naturelles protégées, des habitats de biodiversité critiques, des réserves naturelles, des zones humides, des côtes, des forêts primaires ou des sites inscrits au patrimoine mondial de l'UNESCO.\nCes zones sensibles sont souvent soumises à des réglementations environnementales strictes, car elles abritent des écosystèmes fragiles ou des espèces en danger. Si votre site est situé à proximité ou au sein de ces zones, il est important d'identifier et de prendre des mesures spécifiques pour minimiser les impacts potentiels de vos activités sur ces environnements délicats.",
      "children": [
        {
          "id": "140",
          "value": "Oui",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [
            {
              "id": "141",
              "value": "Quelle est la surface totale (en m²) des sites que vous possédez, louez ou gérez dans ou à proximité de zones sensibles sur le plan de la biodiversité ?\n\n",
              "id_action": null,
              "information": "Cette question vise à quantifier la superficie des sites que vous possédez, louez ou gérez, situés dans ou à proximité de zones sensibles sur le plan de la biodiversité. Ces zones sensibles incluent des habitats critiques, des zones Natura 2000, des réserves naturelles, des zones humides, des côtes, ou des sites protégés comme ceux inscrits au patrimoine mondial de l'UNESCO.\n\nPour savoir si votre site est situé dans ou à proximité de ces zones sensibles, vous pouvez utiliser plusieurs outils en ligne :\n\n• Geoportail (www.geoportail.gouv.fr), un service officiel du gouvernement français, permet de visualiser des cartes environnementales détaillées, y compris les zones Natura 2000.\n• INPN (Inventaire National du Patrimoine Naturel) (https://inpn.mnhn.fr), qui centralise des données sur la biodiversité en France, vous permet également de vérifier si votre site se trouve à proximité de zones protégées.\n• Vous pouvez aussi consulter les plans locaux d'urbanisme (PLU) ou contacter la Direction Régionale de l'Environnement, de l'Aménagement et du Logement (DREAL) pour obtenir des informations précises.",
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [189]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "143",
          "value": "Non",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "144",
          "value": "Ne sait pas",
          "id_action": 327,
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
      "id": "145",
      "value": "Avez-vous aménagé des zones préservées ou des espaces favorables à la biodiversité ?",
      "ids_secteurs": [1, 3, 9, 28],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "146",
          "value": "Oui",
          "id_action": 328,
          "done": true,
          "information": "Il s'agit d'identifier et de quantifier toutes les zones, sur site ou hors site, que vous gérez de manière durable. Ces pratiques peuvent inclure des projets de compensation carbone, des initiatives de conservation de la faune et de la flore, ou des partenariats pour la préservation des écosystèmes naturels. Même un petit jardin ou un espace vert en milieu urbain peut contribuer à soutenir la biodiversité.\n\nRépondre à cette question permet de valoriser vos efforts en matière de gestion environnementale, que ce soit dans vos installations ou au-delà. En aménageant des zones pour soutenir la biodiversité, vous démontrez un engagement concret en faveur de la protection des écosystèmes et de la préservation de la faune et de la flore, contribuant ainsi à un impact positif à une échelle locale ou plus large.",
          "children": [
            {
              "id": "147",
              "value": "Quelle superficie de zones préservées ou d'espaces favorables à la biodiversité avez-vous aménagée (en m²) ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [190]
            },
            {
              "id": "149",
              "value": "Veuillez préciser les actions mises en place :",
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
          "id": "151",
          "value": "Non",
          "id_action": 328,
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
      "id": "152",
      "value": "Avez-vous mis en place des actions pour réduire votre consommation d'eau ?",
      "ids_secteurs": [1, 23, 28],
      "id_action": null,
      "information": "Cette question vise à évaluer si votre entreprise ou organisation a adopté des mesures spécifiques pour diminuer l'utilisation de l'eau dans vos activités quotidiennes. Cela peut inclure des initiatives telles que l'installation de systèmes de récupération d'eau de pluie, l'optimisation des processus industriels pour consommer moins d'eau, l'utilisation de dispositifs économiseurs d'eau, ou encore la réutilisation des eaux usées après traitement.",
      "children": [
        {
          "id": "153",
          "value": "Oui",
          "id_action": 329,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "154",
              "value": "Quelles actions avez-vos mises en place ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "155",
                  "value": "Mesure et suivi régulier de votre consommation d'eau",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "156",
                      "value": "Veuillez préciser les m³ d'eau consommée sur une période de 1 an :",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [191]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "157",
                  "value": "Objectifs de réduction de la consommation d'eau (chiffrés, date …)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "158",
                      "value": "Veuillez préciser vos objectifs chiffrés et datés :",
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
                  "id": "160",
                  "value": "Installations réalisées pour réduire et/ou optimiser et/ou recycler votre consommation d'eau",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "161",
                      "value": "Quelles sont ces installations ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "162",
                          "value": "Installation de robinets à débit réduit ou économiseurs d'eau",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "163",
                          "value": "Utilisation de chasses d'eau à faible débit",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "164",
                          "value": "Collecte et réutilisation des eaux de pluie",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "165",
                          "value": "Technologies de contrôle automatique de l'eau (incluant les capteurs de détection de fuites)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "166",
                          "value": "Capteurs de détection de fuites",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "167",
                          "value": "Pratiques de production plus efficaces en eau",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "168",
                          "value": "Programmes de récupération des eaux usées",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "169",
                          "value": "Réduction ou recyclage de l'eau dans les processus industriels",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "170",
                          "value": "Audits de consommation d'eau pour identifier les économies potentielles",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "171",
                          "value": "Développement de produits/services moins consommateurs d'eau",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "172",
                          "value": "Optimisation de la chaîne de production pour réduire la consommation en eau",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "173",
                          "value": "Traitement/pré-traitement des eaux usées avant rejet et suivi de la qualité de l'eau en sortie de site",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "174",
                          "value": "Programmes de sensibilisation des employés sur la gestion de l'eau",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "175",
                          "value": "Autre(s)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "176",
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
                }
              ],
              "type": "question",
              "inputType": "multiple"
            }
          ],
          "type": "reponse"
        },
        {
          "id": "178",
          "value": "Non",
          "id_action": 329,
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
      "id": "179",
      "value": "Connaissez-vous le total d'eau prélevée par votre organisation (dans les limites de l'organisation ou du site) ?",
      "ids_secteurs": [1, 23, 28],
      "id_action": null,
      "information": "Cette question vise à connaître le total d'eau prélevée par votre entreprise, c'est-à-dire la quantité d'eau retirée de l'environnement ou du réseau public pour vos activités. Cela inclut toute l'eau utilisée pour la production, le refroidissement, le nettoyage ou tout autre usage lié à vos opérations. Le terme \"prélevée\" se réfère à l'eau totale captée, qu'elle soit consommée ou restituée après usage.\n\nLa mesure du volume total d'eau prélevée est essentielle pour évaluer votre impact sur les ressources en eau locales et pour identifier des opportunités de réduction ou d'optimisation de vos pratiques. Votre réponse doit indiquer la quantité précise d'eau prélevée au cours de la période spécifiée, généralement exprimée en mètres cubes (m³), afin de mieux comprendre l'ampleur de vos prélèvements et leur impact environnemental.",
      "children": [
        {
          "id": "180",
          "value": "Oui",
          "id_action": 330,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "181",
              "value": "Quelle est la quantité totale d'eau prélevée par votre organisation au cours des 12 derniers mois (en m³) ?",
              "id_action": 330,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [192]
            },
            {
              "id": "183",
              "value": "L'un de vos sites ou locaux est-il situé sur une zone de stress hydrique élevé ?",
              "id_action": null,
              "information": "Une zone de stress hydrique élevé est une région où la demande en eau dépasse les ressources disponibles et où l'accès à l'eau est limité.\n\nLes zones de stress hydrique élevé peuvent être particulièrement vulnérables aux pénuries d'eau, ce qui peut avoir un impact sur vos opérations et sur l'environnement local.\n\nPour savoir si votre entreprise se situe sur une zone de stress hydrique élevé, visitez ce site : https://www.wri.org/applications/aqueduct/water-risk-atlas/\nDans la colonne de gauche, cochez \"Water Stress\" (les zones de stress hydriques élevés sont de couleur rouge (high) et bordeau.",
              "children": [
                {
                  "id": "184",
                  "value": "Oui",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "185",
                  "value": "Non",
                  "id_action": 331,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "186",
                  "value": "Ne sait pas",
                  "id_action": 331,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                }
              ],
              "type": "question",
              "inputType": "single"
            }
          ],
          "type": "reponse"
        },
        {
          "id": "187",
          "value": "Non",
          "id_action": 332,
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
      "id": "188",
      "value": "Votre entreprise recycle-t-elle l'eau ?",
      "ids_secteurs": [1, 23, 28],
      "id_action": null,
      "information": "Le recyclage de l'eau consiste à traiter et réutiliser l'eau plutôt que de la rejeter après un seul usage.\n\nCela peut inclure des systèmes de filtration, de purification ou d'autres technologies permettant de réutiliser l'eau dans vos processus industriels, pour le nettoyage, le refroidissement ou d'autres usages.\n\nLe recyclage de l'eau réduit la demande en nouvelles ressources et minimise les rejets d'eaux usées dans l'environnement.\n\n",
      "children": [
        {
          "id": "189",
          "value": "Oui",
          "id_action": 333,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "190",
              "value": "Quel volume d'eau votre entreprise a-t-elle recyclée (en m³) sur une période de 12 mois ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [193]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "192",
          "value": "Non",
          "id_action": 333,
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