import { QuestionTree } from "@/types/esg-form";

export const et: QuestionTree = [
    {
      "id": "1",
      "value": "Comment votre entreprise pilote-t-elle les émissions de Gaz à Effet de Serre de ses activités ?",
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
          "value": "L'entreprise ne pilote pas ses émissions de GES et aucun bilan d'émission de Gaz à effet de serre n'est en cours ou n'a été réalisé.",
          "id_action": 1,
          "done": false,
          "information": "Le GIEC recommande une réduction de nos émissions de 50% d'ici 2030, de 80% d'ici 2040, avec pour objectif d'atteindre la neutralité carbone en 2050.",
          "children": [],
          "type": "reponse"
        },
        {
          "id": "3",
          "value": "Un bilan de Gaz à Effet de Serre est en cours de réalisation.",
          "id_action": 1,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "4",
              "value": "Veuillez préciser le périmètre couvert :\n(ex : toute l'entreprise, un service, une usine, etc.)",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "text",
              "id_kpis": []
            },
            {
              "id": "6",
              "value": "Pour quel(s) Scope(s) ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "7",
                  "value": "Scope 1",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "8",
                  "value": "Scope 2",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "9",
                  "value": "Scope 3",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
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
          "value": "Un bilan de Gaz à Effet de Serre (ou Bilan Carbone) a été réalisé au cours des quatre dernières années.",
          "id_action": 1,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "11",
              "value": "Quel est le Scope maximum que vous avez mesuré dans votre Bilan Carbone ?",
              "id_action": null,
              "information": "Veuillez sélectionner la réponse correspondant au scope le plus avancé mesuré par votre organisation.",
              "children": [
                {
                  "id": "12",
                  "value": "Scope 1",
                  "id_action": 2,
                  "done": true,
                  "information": "Au cours des quatre dernières années, votre organisation a réalisé un bilan de ses émissions de gaz à effet de serre (BEGES) lié à ses activités et met actuellement en œuvre un plan d'action visant à réduire ces émissions.\n\nPour les entreprises de moins de 250 salariés, vous pouvez vous faire accompagner par un expert ou effectuer votre BEGES en utilisant une solution gratuite en ligne, telle que celle proposée par la Fondation Good Planet.\n\nEn revanche, pour les entreprises de plus de 250 salariés, seuls les bilans conformes au GHG Protocol, au GRI 305, au Bilan Carbone® ou à la norme ISO 14064 sont acceptés.\n\nMesurer les émissions directes (Scope 1) est souvent le plus plus simple moyen de commencer car il s'agit de sources contrôlées directement par l'entreprise. La collecte de données et la vérification peuvent généralement être effectuées en 1 à 3 mois.\n\nLe Scope 1 englobe les émissions de gaz à effet de serre résultant directement de la production du produit :\n\n• Émissions directes provenant des sources de combustion fixes\n• Émissions directes provenant des sources mobiles équipées de moteurs thermiques\n• Émissions directes liées aux procédés non énergétiques\n• Émissions directes fugitives\n• Émissions provenant de la biomasse (sols et forêts)",
                  "children": [
                    {
                      "id": "13",
                      "value": "Quelles étaient vos émissions de GES Scope 1 en tCO2eq ?",
                      "id_action": null,
                      "information": "Veuillez indiquer le volume des émissions de GES Scope 1 de votre organisation en valeur absolue, exprimé en tonnes équivalent CO2 (TeqCO2), émis par votre entreprise sur une période donnée.\n\nCes émissions doivent refléter les résultats obtenus lors de la dernière évaluation de votre empreinte carbone.\n\nIl est recommandé de synchroniser la période de reporting des émissions de GES avec l'année fiscale de l'entreprise pour une intégration plus facile des données dans les rapports extra financiers.",
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        1
                      ]
                    },
                    {
                      "id": "15",
                      "value": "En quelle année ce Bilan Carbone Scope 1 a-t-il été réalisé ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "year",
                      "id_kpis": []
                    },
                    {
                      "id": "17",
                      "value": "Veuillez préciser le périmètre couvert :\n(toute l'entreprise, un service, une usine, etc.)",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "text",
                      "id_kpis": []
                    },
                    {
                      "id": "19",
                      "value": "Avez-vous publié ou communiqué les résultats de votre Bilan Scope 1 ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "20",
                          "value": "Oui",
                          "id_action": 3,
                          "done": true,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "21",
                          "value": "Non",
                          "id_action": 3,
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
                      "id": "22",
                      "value": "La mesure de votre empreinte carbone a-t-elle été validée par un organisme externe ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "23",
                          "value": "Oui",
                          "id_action": 158,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "24",
                              "value": "Veuillez préciser le nom de cet organisme :",
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
                          "id": "26",
                          "value": "Non",
                          "id_action": 158,
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
                  "id": "27",
                  "value": "Scope 2",
                  "id_action": 4,
                  "done": true,
                  "information": "Au cours des quatre dernières années, votre organisation a réalisé un bilan de ses émissions de gaz à effet de serre (BEGES) lié à ses activités et met actuellement en œuvre un plan d'action visant à réduire ces émissions.\n\nPour les entreprises de moins de 250 salariés, vous pouvez vous faire accompagner par un expert ou effectuer votre BEGES en utilisant une solution gratuite en ligne, telle que celle proposée par la Fondation Good Planet.\n\nEn revanche, pour les entreprises de plus de 250 salariés, seuls les bilans conformes au GHG Protocol, au GRI 305, au Bilan Carbone® ou à la norme ISO 14064 sont acceptés.\n\nMesurer les émissions directes (Scope 1) est souvent le plus plus simple moyen de commencer car il s'agit de sources contrôlées directement par l'entreprise. La collecte de données et la vérification peuvent généralement être effectuées en 1 à 3 mois.\n\nLe Scope 2 comprend les émissions de gaz à effet de serre associées à la consommation d'énergie nécessaire à la fabrication du produit :\n\n• Émissions indirectes dues à l'utilisation de l'électricité\n• Émissions indirectes liées à l'utilisation de vapeur, de chaleur ou de froid",
                  "children": [
                    {
                      "id": "28",
                      "value": "Quelles sont vos émissions de GES Scope 2 en tCO2eq ?",
                      "id_action": null,
                      "information": "Veuillez indiquer le volume des émissions de GES Scope 2 de votre organisation en valeur absolue, exprimé en tonnes équivalent CO2 (TeqCO2), émis par votre entreprise sur une période donnée.\n\nCes émissions doivent refléter les résultats obtenus lors de la dernière évaluation de votre empreinte carbone.\n\nIl est recommandé de synchroniser la période de reporting des émissions de GES avec l'année fiscale de l'entreprise pour une intégration plus facile des données dans les rapports extra financiers.",
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        1
                      ]
                    },
                    {
                      "id": "30",
                      "value": "En quelle année ce Bilan Scope 2 a-t-il été réalisé ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "year",
                      "id_kpis": []
                    },
                    {
                      "id": "32",
                      "value": "Veuillez préciser le périmètre couvert :\n(toute l'entreprise, un service, une usine, etc.)",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "text",
                      "id_kpis": []
                    },
                    {
                      "id": "34",
                      "value": "Avez-vous publié ou communiqué les résultats de votre Bilan Scope 2 ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "35",
                          "value": "Oui",
                          "id_action": 5,
                          "done": true,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "36",
                          "value": "Non",
                          "id_action": 5,
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
                      "id": "37",
                      "value": "La mesure de votre empreinte carbone a-t-elle été validée par un organisme externe ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "38",
                          "value": "Oui",
                          "id_action": 158,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "39",
                              "value": "Veuillez préciser le nom de cet organisme :",
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
                          "id": "41",
                          "value": "Non",
                          "id_action": 158,
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
                  "id": "42",
                  "value": "Scope 3",
                  "id_action": null,
                  "done": true,
                  "information": "Au cours des quatre dernières années, votre organisation a réalisé un bilan de ses émissions de gaz à effet de serre (BEGES) lié à ses activités et met actuellement en œuvre un plan d\\'action visant à réduire ces émissions.\n\nPour les entreprises de moins de 250 salariés, vous pouvez ous faire accompagner par un expert ou effectuer votre BEGES en utilisant une solution gratuite en ligne, telle que celle proposée par la Fondation Good Planet.\n\nEn revanche, pour les entreprises de plus de 250 salariés, seuls les bilans conformes au GHG Protocol, au GRI 305, au Bilan Carbone® ou à la norme ISO 14064 sont acceptés.\n\n\nLe Scope 3 englobe toutes les autres émissions de gaz à effet de serre qui ne sont pas directement liées à la fabrication du produit mais à d\\'autres phases de son cycle de vie (approvisionnement, transport, utilisation, fin de vie, etc.) :\n\n• Émissions liées à l\\'énergie non incluse dans les catégories \"émissions directes de GES\" et \"émissions de GES à énergies indirectes\"\n• Achats de produits ou services\n• Immobilisation de biens\n• Déchets\n• Transport de marchandises en amont\n• Déplacements professionnels\n• Actifs en leasing en amont\n• Investissements\n• Transport de visiteurs et de clients\n• Transport de marchandises en aval\n• Utilisation des produits vendus\n• Fin de vie des produits vendus\n• Franchise en aval\n• Leasing en aval\n• Déplacements domicile-travail\n• Autres émissions indirectes",
                  "children": [
                    {
                      "id": "43",
                      "value": "Quelles sont vos émissions de GES Scope 3 en tCO2eq ?",
                      "id_action": null,
                      "information": "Veuillez indiquer le volume des émissions de GES Scope 3 de votre organisation en valeur absolue, exprimé en tonnes équivalent CO2 (TeqCO2), émis par votre entreprise sur une période donnée.\n\nCes émissions doivent refléter les résultats obtenus lors de la dernière évaluation de votre empreinte carbone.\n\nIl est recommandé de synchroniser la période de reporting des émissions de GES avec l'année fiscale de l'entreprise pour une intégration plus facile des données dans les rapports extra financiers.",
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        1
                      ]
                    },
                    {
                      "id": "45",
                      "value": "En quelle année ce Bilan Scope 3 a-t-il été réalisé ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "year",
                      "id_kpis": []
                    },
                    {
                      "id": "47",
                      "value": "Veuillez préciser le périmètre couvert :\n(toute l'entreprise, un service, une usine, etc.)",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "text",
                      "id_kpis": []
                    },
                    {
                      "id": "49",
                      "value": "Avez-vous publié ou communiqué les résultats de votre Bilan Scope 3 ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "50",
                          "value": "Oui",
                          "id_action": 6,
                          "done": true,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "51",
                          "value": "Non",
                          "id_action": 6,
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
                      "id": "52",
                      "value": "La mesure de votre empreinte carbone a-t-elle été validée par un organisme externe ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "53",
                          "value": "Oui",
                          "id_action": 158,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "54",
                              "value": "Veuillez préciser le nom de cet organisme :",
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
                          "id": "56",
                          "value": "Non",
                          "id_action": 158,
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
                }
              ],
              "type": "question",
              "inputType": "single"
            }
          ],
          "type": "reponse"
        }
      ],
      "type": "question",
      "inputType": "single"
    },
    {
      "id": "57",
      "value": "L'entreprise mesure t-elle l'empreinte carbone de ses produits/services ?",
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
      "information": "L'empreinte carbone d'un produit comprend la totalité des émissions de gaz à effet de serre générées sur l'ensemble de son cycle de vie.\n\nUn score carbone produit ou service est un indicateur quantitatif qui mesure l'empreinte carbone d'un produit ou d'un service tout au long de son cycle de vie.\nIl calcule les émissions de gaz à effet de serre (GES) générées depuis l'extraction des matières premières, la production, le transport, l'utilisation, jusqu'à la fin de vie du produit.\nCe score permet de quantifier l'impact environnemental d'un produit ou servuce, de promouvoir des choix de consommation plus durables et éclairés par les consommateurs et d'encourager les entreprises à adopter des pratiques écologiques.\n\nL'empreinte carbone d'un produit ou service peut être mesurée grâce à des calculettes carbone.\nVoici quelques exemples d'outils existants en fonction de certains secteurs d'activité :\n\n• Textile : Affichage Environnemental, Ecobalyse, Clear Fashion\n• Meuble : Affichage Environnemental, Base Empreinte\n• Agroalimentaire : Planet-Score, Eco-Score, Agribalyse\n\nL'ADEME propose également des outils en ligne, gratuits et accessibles, pour calculer l'impact des produits : la Base Empreinte®, la Base Carbone® et la Base IMPACTS®.",
      "children": [
        {
          "id": "58",
          "value": "Oui",
          "id_action": 9,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "59",
              "value": "Veuillez préciser la part de vos produits ou services dont le score carbone a été mesuré :",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "60",
                  "value": "Plus de 75 % de nos produits ou services",
                  "id_action": null,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "61",
                  "value": "De 51 % à 75 % de nos produits ou services",
                  "id_action": 7,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "62",
                  "value": "De 26 % à 50 % de nos produits ou services",
                  "id_action": 7,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "63",
                  "value": "De 1 % à 25 % de nos produits ou services",
                  "id_action": 7,
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
              "id": "64",
              "value": "Veuillez préciser l'outil que vous avez utilisé pour mesurer le score carbone de vos produits ou services :",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "text",
              "id_kpis": []
            },
            {
              "id": "66",
              "value": "Publiez-vous le score carbone de vos produits ou services ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "67",
                  "value": "Oui",
                  "id_action": 8,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "68",
                  "value": "Non",
                  "id_action": 8,
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
          "id": "69",
          "value": "Non, mais le projet est en cours",
          "id_action": 9,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "70",
          "value": "Non, et nous ne souhaitons pas mettre en place cette mesure",
          "id_action": 9,
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
      "id": "71",
      "value": "Comment ont été fixés les objectifs de réduction des émissions de GES de votre entreprise ?",
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
          "id": "72",
          "value": "Actuellement, l'entreprise n'a pas fixé d'objectifs de réduction de ses émissions de GES.",
          "id_action": 10,
          "done": false,
          "information": "Sélectionnez cette option si votre entreprise n'a pas encore fixé d'objectifs de réduction de ses émissions de GES.",
          "children": [],
          "type": "reponse"
        },
        {
          "id": "73",
          "value": "L'entreprise a fixé des objectifs de réduction selon la Science Based Targets initiative (SBTi) approuvés par la SBTi et divulgués chaque année.\n\nVeuillez préciser :",
          "id_action": 11,
          "done": true,
          "information": "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES conformément aux recommandations de la SBTi, approuvés par le SBT et divulgués chaque année.",
          "children": [
            {
              "id": "74",
              "value": "En quelle année avez-vous fixé vos objectifs de réduction ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "76",
              "value": "En quelle année vos objectifs doivent-ils être atteint ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "78",
              "value": "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": []
            },
            {
              "id": "80",
              "value": "Quel(s) Scope(s) couvrent vos objectifs ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "81",
                  "value": "Scope 1",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "82",
                  "value": "Scope 2",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "83",
                  "value": "Scope 3",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
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
          "id": "84",
          "value": "L'entreprise a fixé des objectifs de réduction selon la Science Based Targets initiative (SBTi) mais non approuvés par la SBTi.\n\nVeuillez préciser :",
          "id_action": 11,
          "done": false,
          "information": "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES conformément aux recommandations de la SBTi, mais n'a pas encore obtenu l'approbation du SBT.\n\nUne entreprise peut faire approuver ses objectifs de réduction des émissions de gaz à effet de serre (GES) par l'initiative Science Based Targets (SBTi). Le SBTi aide les entreprises à fixer des objectifs de réduction des émissions conformes aux recommandations scientifiques nécessaires pour limiter le réchauffement de la planète bien en dessous de 2 °C, et idéalement à 1,5 °C, par rapport aux niveaux préindustriels.\n\n• Processus d'approbation par le SBTi\nL'entreprise commence par soumettre une lettre d'engagement, indiquant son intention de définir des objectifs fondés sur la science.\n\n• Développement des objectifs : L'entreprise développe ses objectifs de réduction des émissions en suivant les critères et les recommandations du SBTi. Ces objectifs doivent couvrir les émissions directes (Scope 1), les émissions indirectes provenant de l'énergie achetée (Scope 2), et le cas échéant, les autres émissions indirectes (Scope 3).\n\n• Soumission pour validation : L'entreprise soumet ses objectifs pour validation via le portail en ligne du SBTi. Les objectifs sont ensuite évalués par les experts du SBTi pour vérifier leur conformité aux critères de l'initiative.\n\n• Révision et approbation : Après évaluation, le SBTi fournit des commentaires détaillés. Si les objectifs sont conformes, ils sont approuvés. Si des modifications sont nécessaires, l'entreprise doit les apporter et soumettre à nouveau les objectifs pour examen.\n\n• Communication : Une fois approuvés, les objectifs peuvent être publiés et communiqués. L'entreprise est reconnue par le SBTi comme ayant des objectifs de réduction des émissions alignés sur la science.\n\nAvantages de l'approbation par le SBTi :\n\n• Crédibilité : Les objectifs validés par le SBTi sont reconnus mondialement comme étant alignés sur la science climatique.\n• Transparence : Les entreprises peuvent démontrer leur engagement envers la lutte contre le changement climatique de manière transparente.\n• Confiance des Parties Prenantes : Les investisseurs, clients et autres parties prenantes sont plus susceptibles de faire confiance à une entreprise ayant des objectifs validés par le SBTi.",
          "children": [
            {
              "id": "85",
              "value": "En quelle année avez-vous fixé vos objectifs de réduction ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "87",
              "value": "En quelle année vos objectifs doivent-ils être atteint ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "89",
              "value": "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": []
            },
            {
              "id": "91",
              "value": "Quel(s) Scope(s) couvrent vos objectifs ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "92",
                  "value": "Scope 1",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "93",
                  "value": "Scope 2",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "94",
                  "value": "Scope 3",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
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
          "id": "95",
          "value": "L'entreprise a fixé des objectifs de réduction de ses GES, selon une cible compatible avec une trajectoire à +1,5°C (conformément à l'accord de Paris).\n\nVeuillez préciser :",
          "id_action": null,
          "done": true,
          "information": "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES compatibles avec une trajectoire à +1,5°C, conformément à l'accord de Paris.\n\nLes objectifs compatibles avec une trajectoire de +1,5°C sont essentiels pour éviter les impacts les plus sévères du changement climatique.\n\nMême si votre entreprise n'a pas encore adopté les normes SBTi, viser une trajectoire de +1,5°C démontre un engagement fort et proactif envers la durabilité et la responsabilité environnementale.",
          "children": [
            {
              "id": "96",
              "value": "En quelle année avez-vous fixé vos objectifs de réduction ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "98",
              "value": "En quelle année vos objectifs doivent-ils être atteint ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "100",
              "value": "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": []
            },
            {
              "id": "102",
              "value": "Quel(s) Scope(s) couvrent vos objectifs ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "103",
                  "value": "Scope 1",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "104",
                  "value": "Scope 2",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "105",
                  "value": "Scope 3",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
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
          "id": "106",
          "value": "L'entreprise a fixé des objectifs de réduction selon le One Earth Climate Model (OECM).\n\nVeuillez préciser :",
          "id_action": null,
          "done": true,
          "information": "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES selon le One Earth Climate Model (OECM).\n\nLe One Earth Climate Model (OECM) est une méthodologie scientifique rigoureuse qui aide les entreprises à aligner leurs objectifs de réduction des émissions avec les recommandations nécessaires pour limiter le réchauffement climatique à 1,5°C, conformément à l'accord de Paris.\n\nFixer des objectifs selon le OECM démontre un engagement fort envers la durabilité et la responsabilité environnementale, et contribue à éviter les impacts les plus graves du changement climatique. Cela implique une évaluation détaillée des émissions tout au long de la chaîne de valeur et l'adoption de stratégies spécifiques pour réduire les émissions de manière significative et durable.\n\nLes entreprises utilisant le OECM bénéficient d'une approche intégrée qui tient compte de l'ensemble des impacts environnementaux, favorisant ainsi des pratiques plus écologiques et responsables.",
          "children": [
            {
              "id": "107",
              "value": "En quelle année avez-vous fixé vos objectifs de réduction ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "109",
              "value": "En quelle année vos objectifs doivent-ils être atteint ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "111",
              "value": "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": []
            },
            {
              "id": "113",
              "value": "Quel(s) Scope(s) couvrent vos objectifs ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "114",
                  "value": "Scope 1",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "115",
                  "value": "Scope 2",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "116",
                  "value": "Scope 3",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
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
          "id": "117",
          "value": "L'entreprise a fixé des objectifs de réduction selon Greenhouse Gas Protocol (GHG Protocol).\n\nVeuillez préciser :",
          "id_action": null,
          "done": true,
          "information": "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES selon le Greenhouse Gas Protocol (GHG Protocol).\n\nLe Greenhouse Gas Protocol (GHG Protocol) est une norme mondiale pour mesurer, gérer et réduire les émissions de gaz à effet de serre (GES). Il fournit des directives complètes pour comptabiliser les émissions directes (Scope 1), les émissions indirectes provenant de l'énergie achetée (Scope 2), et les autres émissions indirectes tout au long de la chaîne de valeur (Scope 3).\n\nFixer des objectifs selon le GHG Protocol démontre un engagement solide et structuré envers la gestion et la réduction des émissions de GES. Cette méthodologie permet aux entreprises de suivre et de réduire leurs émissions de manière transparente et conforme aux normes internationales.\n\nLes entreprises qui adoptent le GHG Protocol bénéficient d'un cadre éprouvé et largement reconnu pour évaluer et réduire leurs impacts environnementaux, favorisant ainsi une gestion plus durable et responsable des émissions de GES.",
          "children": [
            {
              "id": "118",
              "value": "En quelle année avez-vous fixé vos objectifs de réduction ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "120",
              "value": "En quelle année vos objectifs doivent-ils être atteint ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "122",
              "value": "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": []
            },
            {
              "id": "124",
              "value": "Quel(s) Scope(s) couvrent vos objectifs ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "125",
                  "value": "Scope 1",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "126",
                  "value": "Scope 2",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "127",
                  "value": "Scope 3",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
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
          "id": "128",
          "value": "Autre, veuillez préciser :",
          "id_action": null,
          "done": true,
          "information": "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES selon une autre méthode.",
          "children": [
            {
              "id": "129",
              "value": "Quelle méthodologie avez-vous suivie ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "text",
              "id_kpis": []
            },
            {
              "id": "131",
              "value": "En quelle année avez-vous fixé vos objectifs de réduction ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "133",
              "value": "En quelle année vos objectifs doivent-ils être atteint ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "135",
              "value": "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": []
            },
            {
              "id": "137",
              "value": "Quel(s) Scope(s) couvrent vos objectifs ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "138",
                  "value": "Scope 1",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "139",
                  "value": "Scope 2",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "140",
                  "value": "Scope 3",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
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
      "inputType": "single"
    },
    {
      "id": "141",
      "value": "Avez-vous mis en place une stratégie de contribution/compensation carbone ?",
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
          "id": "142",
          "value": "Oui",
          "id_action": 14,
          "done": true,
          "information": "Sélectionnez cette option si votre entreprise achète des crédits carbone pour compenser ses émissions de gaz à effet de serre sur la part de ses émissions de CO2 incompressibles.",
          "children": [
            {
              "id": "143",
              "value": "Quelle est l'année de votre dernière contribution carbone ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "year",
              "id_kpis": []
            },
            {
              "id": "145",
              "value": "Quels sont les types de crédits carbone auxquels vous avez eu recours lors de votre dernière compensation carbone ?",
              "id_action": null,
              "information": "Précisez si vos crédits carbone proviennent de projets naturels (comme la plantation d'arbres) ou de projets technologiques (comme la capture du CO2).",
              "children": [
                {
                  "id": "146",
                  "value": "Projets naturels (par exemple, plantation d'arbres).",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "147",
                  "value": "Projets technologiques (par exemple, capture du CO2).",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "148",
                  "value": "Projets de séquestration du carbone (par exemple, restauration des sols)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "149",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "150",
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
              "id": "152",
              "value": "Dans quel territoire se situent les actions mises en place par votre dernière contribution carbone ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "153",
                  "value": "France",
                  "id_action": 13,
                  "done": true,
                  "information": "Sélectionnez cette option pour indiquer que les projets de compensation carbone de votre entreprise sont situés en France.\n\nLa localisation des projets de compensation carbone est cruciale pour garantir une responsabilité environnementale adéquate. Compensez vos émissions là où elles sont générées afin de maximiser l'impact positif local.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "154",
                  "value": "UE",
                  "id_action": 12,
                  "done": false,
                  "information": "Sélectionnez cette option pour indiquer que les projets de compensation carbone de votre entreprise sont situés en UE mais hors de France.\n\nLa localisation des projets de compensation carbone est cruciale pour garantir une responsabilité environnementale adéquate. Compensez vos émissions là où elles sont générées afin de maximiser l'impact positif local.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "155",
                  "value": "Hors France et UE",
                  "id_action": 13,
                  "done": false,
                  "information": "Sélectionnez cette option pour indiquer que les projets de compensation carbone de votre entreprise sont situés hors France et UE.\n\nLa localisation des projets de compensation carbone est cruciale pour garantir une responsabilité environnementale adéquate. Compensez vos émissions là où elles sont générées afin de maximiser l'impact positif local.",
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
          "id": "156",
          "value": "Non",
          "id_action": 14,
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
      "id": "157",
      "value": "Suivez-vous des indicateurs clés de performance pour mesurer votre contribution carbone ?",
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
      "information": "Indiquez-nous si vous utilisez des outils de suivi pour gérer la compensation carbone de votre entreprise.\n\nDes solutions technologiques permettent de calculer vos émissions, suivre l'impact des projets de compensation, et garantir leur conformité aux standards environnementaux. Ces outils offrent des rapports détaillés, surveillent l'évolution des projets, et assurent une compensation transparente et vérifiable.",
      "children": [
        {
          "id": "158",
          "value": "Oui",
          "id_action": 15,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "159",
              "value": "Quel indicateur vous permet de mesurer votre stratégie de contribution carbone ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "160",
                  "value": "Le % de vos émissions totales de CO2 compensées.",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "161",
                      "value": "Veuillez indiquer le % des émissions totales de CO2 que vous avez compensées.",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        6
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "163",
                  "value": "La quantité (en tonnes) de Co2 compensée.",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "164",
                      "value": "Veuillez indiquer la quantité en tonnes de Co2 compensées.",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        7
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "166",
                  "value": "Le budget total consacré à votre contribution carbone (en % de votre CA).",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "167",
                      "value": "Veuillez indiquer le budget total consacré à votre contribution carbone (en % de votre CA).",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        8
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "169",
                  "value": "Le nombre de projets de compensation que vous avez soutenu.",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "170",
                      "value": "Veuillez indiquer le nombre de projets de compensation carbone que vous avez soutenu.",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        9
                      ]
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
          "id": "172",
          "value": "Non",
          "id_action": 15,
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
      "id": "173",
      "value": "Votre activité utilise t-elle ou émet-elle des polluants multi-types (air, sol, eau) ?",
      "ids_secteurs": [
        2,
        4,
        5,
        6,
        7,
        8,
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "174",
          "value": "Oui",
          "id_action": 16,
          "done": true,
          "information": "Sélectionnez cette option si votre entreprise émet ou utilise des polluants de l'air, des sols, de l'eau dans le cadre de ses propres opérations.\n\nLes polluants concernés sont :\n\n• Métaux lourds (mercure, plomb, cuivre)\n• Dioxines et furanes\n• Hydrocarbures\n• Pesticides\n• Produits chimiques industriels (ex : solvants, acides, bases, colorants et pigments synthétiques, produits chimiques de fabrication)\n• Produits pétroliers (ex : huiles, lubrifiants, bitumes)\n• Nutriments (azote, phosphore, nitrates, phosphates)",
          "children": [
            {
              "id": "175",
              "value": "Lesquels :",
              "id_action": null,
              "information": "Veuillez sélectionner les types de polluants atmosphériques :",
              "children": [
                {
                  "id": "176",
                  "value": "Métaux lourds (mercure, plomb, cuivre)",
                  "id_action": null,
                  "done": false,
                  "information": "Les métaux lourds comme le mercure, le plomb et le cuivre sont souvent présents dans divers matériaux et produits industriels.\n\nVoici les principaux matériaux contenant des métaux lourds :\n\n• Alliages métalliques : Utilisés dans la fabrication d'outils, de composants électroniques, et d'équipements industriels.\n\n• Peintures et revêtements : Utilisés pour la protection et la finition des surfaces métalliques.\n\n• Piles et batteries : utilisées dans les appareils électroniques, les véhicules, et les équipements de secours.\n\n• Produits chimiques industriels : Utilisés dans les processus de galvanoplastie, d'extraction minière, et de fabrication de produits chimiques.\n\n• Matériaux de construction : Utilisés dans les tuyaux, les revêtements de toiture, et les structures en acier.",
                  "children": [
                    {
                      "id": "177",
                      "value": "L'entreprise mesure t-elle son utilisation de matériaux contenant des métaux lourds ?",
                      "id_action": null,
                      "information": "Matériaux potentiellement concernés :\n\n• Alliages métalliques : Outils, composants électroniques, équipements industriels.\n• Peintures et revêtements : Surfaces métalliques ou autres.\n• Piles et batteries : Appareils électroniques, véhicules, équipements de secours.\n• Produits chimiques industriels : Galvanoplastie, extraction minière, fabrication de produits chimiques.\n• Matériaux de construction : Tuyaux, revêtements de toiture, structures en acier.",
                      "children": [
                        {
                          "id": "178",
                          "value": "Oui",
                          "id_action": 17,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "179",
                              "value": "Quelles sont les quantités de matériaux contenant des métaux lourds utilisés annuellement par votre entreprise ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                10
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "181",
                          "value": "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                          "id_action": 18,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "182",
                          "value": "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                          "id_action": 18,
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
                  "id": "183",
                  "value": "Pesticides",
                  "id_action": null,
                  "done": false,
                  "information": "Les pesticides incluent les insecticides, herbicides, fongicides, rodenticides, et nématicides.\n\nRéduire les pesticides est crucial car ces substances chimiques ont des effets néfastes sur la santé humaine et l'environnement.\n\nLes secteurs les plus concernés sont :\nagriculture, industrie agroalimentaire, jardinage et espaces verts.\n\nIls sont associés à des risques tels que l'augmentation des cancers, des perturbations endocriniennes, des effets neurotoxiques, et des dommages graves aux écosystèmes et à la biodiversité.",
                  "children": [
                    {
                      "id": "184",
                      "value": "L'entreprise mesure t-elle son utilisation de pesticides ?",
                      "id_action": null,
                      "information": "L'utilisation de pesticides peut avoir des impacts significatifs sur la santé et l'environnement.\n\nVoici les principaux types de pesticides utilisés à mesurer :\n• Insecticides\n• Herbicides\n• Fongicides\n• Rodenticides\n• Nématicides",
                      "children": [
                        {
                          "id": "185",
                          "value": "Oui",
                          "id_action": 21,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "186",
                              "value": "Quelles sont les quantités totales de pesticides utilisées annuellement par votre entreprise ?",
                              "id_action": null,
                              "information": "Veuillez indiquer les quantités totales de pesticides utilisés par votre entreprise dans le cadre de ses propres opérations, sur une période de 1 an.",
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                11
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "188",
                          "value": "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                          "id_action": 22,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "189",
                          "value": "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                          "id_action": 22,
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
                  "id": "190",
                  "value": "Produits chimiques industriels (émetteurs de COV)",
                  "id_action": null,
                  "done": false,
                  "information": "Les COV sont des substances chimiques présentes dans divers produits industriels et domestiques, connues pour s'évaporer facilement dans l'air.\n\nTypes de produits contenant des COV à inclure :\n\n• Solvants : Acétone, Méthanol, Toluène, Xylène, Benzène, utilisés pour le nettoyage industriel et le dégraissage.\n\n• Peintures et vernis : Utilisés pour les revêtements de surfaces et la finition de meubles.\n\n• Adhésifs et colles : Utilisés dans l'assemblage de matériaux, notamment dans l'industrie du bois et de la construction.\n\n• Produits de nettoyage : Utilisés dans divers contextes industriels.\n\n• Produits de soins personnels : Inclus dans des cosmétiques comme les laques pour cheveux et les déodorants.\n\n• Revêtements et finisseurs : Pour la protection et la finition des matériaux industriels.\n\n• L'utilisation de ces produits peut avoir des effets nocifs sur la santé humaine et l'environnement, notamment des problèmes respiratoires et des effets néfastes sur les écosystèmes.",
                  "children": [
                    {
                      "id": "191",
                      "value": "L'entreprise mesure t-elle les quantités de produits chimiques industriels qu'elle utilise ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "192",
                          "value": "Oui",
                          "id_action": 23,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "193",
                              "value": "Quelles sont les quantités de produits chimiques industriels utilisés mensuellement par votre entreprise ?",
                              "id_action": null,
                              "information": "Veuillez indiquer les quantités totales de produits chimiques industriels utilisés mensuellement par votre entreprise, dans le cadre de ses propres opérations.",
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                12
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "195",
                          "value": "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                          "id_action": 24,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "196",
                          "value": "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                          "id_action": 24,
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
                  "id": "197",
                  "value": "Produits pétroliers (ex : huiles, lubrifiants, bitumes) hors carburants",
                  "id_action": null,
                  "done": false,
                  "information": "Les produits pétroliers peuvent causer une pollution étendue, affectant la qualité de l'eau et la santé des organismes aquatiques, de l'air et des sols.\n\nVoici la liste des produits pétroliers à prendre en compte dans votre mesure :\n\n• Huiles : Huiles moteur, huiles hydrauliques\nUtilisation : Lubrification des machines et équipements\n\n• Lubrifiants : Graisses industrielles, lubrifiants pour moteurs\nUtilisation : Réduction de la friction dans les moteurs et autres équipements mécaniques\n\n• Bitumes : Bitume pour enrobé routier\nUtilisation : Construction et maintenance des infrastructures routières\n\nNotez que cette catégorie exclut Les carburants tels que l'essence et le diesel;",
                  "children": [
                    {
                      "id": "198",
                      "value": "L'entreprise mesure t-elle les quantités de produits pétroliers qu'elle utilise ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "199",
                          "value": "Oui",
                          "id_action": 25,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "200",
                              "value": "Quelles sont les quantités de produits pétroliers tels que les huiles, lubrifiants ou bitumes utilisés mensuellement par votre entreprise ?",
                              "id_action": null,
                              "information": "Veuillez indiquer les quantités totales de produits pétroliers utilisés mensuellement par votre entreprise, dans le cadre de ses propres opérations",
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                13
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "202",
                          "value": "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                          "id_action": 26,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "203",
                          "value": "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                          "id_action": 26,
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
                  "id": "204",
                  "value": "Engrais ou produits contenants des nutriments (azote, phosphore, nitrates, phosphates)",
                  "id_action": null,
                  "done": false,
                  "information": "La gestion des nutriments est cruciale pour éviter des effets environnementaux graves. Un excès de nutriments tels que l'azote, le phosphore, les nitrates et les phosphates peut provoquer :\n\n• Dans l'eau : L'excès de nutriments entraîne l'eutrophisation, une prolifération d'algues nuisibles, qui réduit l'oxygène dissous et crée des zones mortes dans les plans d'eau, perturbant la vie aquatique.\n\n• Dans les sols : Un apport excessif de nutriments acidifie les sols, diminue leur fertilité et favorise le lessivage, ce qui peut contaminer les nappes phréatiques.\n\n• Dans l'air : L'azote peut se transformer en oxydes nitriques, contribuant à la formation de smog et aux pluies acides, qui impactent la qualité de l'air et les écosystèmes.\n\nSecteurs concernés :\n\n• Agriculture : Les pratiques agricoles intensives, via les engrais chimiques et les déjections animales, sont une source majeure d'émissions de nutriments.\n• Industries alimentaires : La transformation des aliments génère des effluents riches en nutriments, susceptibles de contaminer l'environnement.\n• Construction : Le lessivage des matériaux de construction, combiné à une gestion inadéquate des eaux pluviales, peut également disperser des nutriments dans les écosystèmes voisins.",
                  "children": [
                    {
                      "id": "205",
                      "value": "Avez-vous mis en place des pratiques pour réduire ou optimiser l'utilisation des nutriments ?",
                      "id_action": null,
                      "information": "Optimiser l'utilisation des nutriments est essentiel pour limiter les impacts environnementaux négatifs tout en améliorant l'efficacité des pratiques agricoles et industrielles.",
                      "children": [
                        {
                          "id": "206",
                          "value": "Oui",
                          "id_action": 19,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "207",
                              "value": "Quelles pratiques ont été mises en place ?",
                              "id_action": null,
                              "information": null,
                              "children": [
                                {
                                  "id": "208",
                                  "value": "Optimisation de l'application d'engrais (quantité, fréquence, période)",
                                  "id_action": null,
                                  "done": false,
                                  "information": "Cette pratique se concentre sur l'application d'engrais de manière ciblée et précise en fonction des besoins réels des cultures. En ajustant la quantité, la fréquence et le moment de l'application, l'entreprise peut réduire le gaspillage d'engrais et minimiser les pertes dans l'environnement.\nCette pratique est validée scientifiquement par l'approche des 4R (la bonne source, au bon moment, à la bonne dose, au bon endroit), qui permet d'améliorer l'efficacité de l'utilisation des nutriments tout en réduisant les pertes vers l'environnement.",
                                  "children": [],
                                  "type": "reponse"
                                },
                                {
                                  "id": "209",
                                  "value": "Pratiques de culture durable (agriculture de précision, rotation des cultures, etc.)",
                                  "id_action": null,
                                  "done": false,
                                  "information": "Ces pratiques sont fondamentales pour la gestion des sols et la préservation des nutriments. L'agriculture de précision, qui utilise des technologies comme des capteurs et des outils de télédétection, est particulièrement efficace pour optimiser l'utilisation des intrants (engrais, eau). La rotation des cultures aide à maintenir la fertilité du sol et à limiter le besoin d'intrants chimiques en exploitant les cycles naturels de récupération des nutriments.",
                                  "children": [],
                                  "type": "reponse"
                                },
                                {
                                  "id": "210",
                                  "value": "Utilisation de fertilisants biologiques ou d'amendements organiques (réduction des engrais chimiques)",
                                  "id_action": null,
                                  "done": false,
                                  "information": "L'utilisation de composts, de fumiers ou d'autres amendements organiques permet une libération progressive des nutriments, évitant les chocs de pollution comme ceux causés par des engrais chimiques à libération rapide. Cela améliore la santé du sol à long terme et réduit le risque de pollution des nappes phréatiques.",
                                  "children": [],
                                  "type": "reponse"
                                },
                                {
                                  "id": "211",
                                  "value": "Autre(s)",
                                  "id_action": null,
                                  "done": false,
                                  "information": null,
                                  "children": [
                                    {
                                      "id": "212",
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
                          "id": "214",
                          "value": "Non, mais l'entreprise envisage de mettre en place des pratiques",
                          "id_action": 19,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "215",
                          "value": "Non, et l'entreprise ne souhaite pas mettre en place de mesures pour l'instant",
                          "id_action": 19,
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
                  "id": "229",
                  "value": "Autre(s)",
                  "id_action": 27,
                  "done": false,
                  "information": "Veuillez indiquer le type de polluant.\n\nSi vous avez déjà effectué une mesure d'émission de ce polluant, merci d'indiquer les quantités émises (par an) lors de votre dernière mesure et l'unité de mesure correspondante (kg, tonne, etc.).\nVous pouvez aussi indiquer l'utilisation de matériaux ou produits contenant ou générant ce type de polluant.",
                  "children": [
                    {
                      "id": "230",
                      "value": "Veuillez préciser :",
                      "id_action": 28,
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
              "id": "232",
              "value": "Avez-vous mis en place des mesures pour réduire les émissions de ces polluants ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "233",
                  "value": "Oui",
                  "id_action": 29,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "234",
                      "value": "Quelles mesures avez-vous mises en place pour réduire les émissions de ces polluants ?",
                      "id_action": null,
                      "information": "Veuillez sélectionner les mesures mises en place par votre entreprise pour réduire les émissions de polluants des sols.",
                      "children": [
                        {
                          "id": "235",
                          "value": "Adoption de produits et procédés moins polluants ou réduction de l'utilisation de produits chimiques dangereux",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous avez adopté des produits et procédés moins polluants ou si vous avez réduit l'utilisation de produits chimiques dangereux.\n\nAdopter des produits et procédés moins polluants permet de réduire les émissions de polluants et de protéger la santé humaine et l'environnement.\n\nRéduire l'utilisation de produits chimiques dangereux contribue à diminuer les émissions de polluants nocifs pour la santé et l'environnement.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "236",
                          "value": "Mise en place de procédures de gestion et de traitement des déchets",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous avez mis en place des procédures de gestion et de traitement des déchets.\n\nMettre en place des procédures de gestion et de traitement des déchets permet de minimiser les émissions de polluants des sols issus des déchets industriels et de protéger l'environnement.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "243",
                          "value": "Autre(s)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "244",
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
                  "id": "246",
                  "value": "Non",
                  "id_action": 29,
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
          "id": "247",
          "value": "Non",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "248",
          "value": "Ne sait pas",
          "id_action": 30,
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
      "id": "249",
      "value": "Votre activité utilise t-elle ou émet-elle des polluants atmosphériques ?",
      "ids_secteurs": [
        2,
        4,
        5,
        6,
        7,
        8,
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "250",
          "value": "Oui",
          "id_action": 31,
          "done": true,
          "information": "Sélectionnez cette option si votre entreprise émet ou utilise des polluants atmosphériques dans le cadre de ses propres opérations.\n\nLes polluants concernés sont :\n\n• Composés organiques volatils ou COV (incluant benzène, formaldéhyde, etc.)\n• Particules en suspension (PM)\n• Monoxyde de carbone (CO)\n• Oxydes d'azote (NOx)\n• Ammoniac\n• Ozone (O₃)\n• Dioxyde de carbone (CO₂)\n• Radon",
          "children": [
            {
              "id": "251",
              "value": "Lesquels :",
              "id_action": null,
              "information": "Veuillez sélectionner les types de polluants atmosphériques :",
              "children": [
                {
                  "id": "252",
                  "value": "Polluants atmosphériques issus de la combustion d'hydrocarbures (CO, NOx, CO₂)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "253",
                      "value": "L'entreprise mesure t-elle son utilisation de polluants atmosphériques issus de la combustion ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "254",
                          "value": "Oui",
                          "id_action": 40,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "255",
                              "value": "Quelles sont les quantités de combustibles fossiles utilisées annuellement par votre entreprise ?",
                              "id_action": null,
                              "information": "Les hydrocarbures sont des composés organiques présents dans les combustibles fossiles comme le pétrole, le gaz naturel et le charbon.\n\nLa combustion de ces hydrocarbures génère des polluants atmosphériques tels que le CO, le CO₂ et les NOx, qui affectent la qualité de l'air et contribuent au changement climatique.",
                              "children": [
                                {
                                  "id": "256",
                                  "value": "Essence",
                                  "id_action": null,
                                  "information": "Veuillez indiquer les quantités d'essence utilisées par votre entreprise dans le cadre de ses propres opérations, sur une période de 1 an.",
                                  "children": [],
                                  "type": "question",
                                  "inputType": "numeric",
                                  "id_kpis": [
                                    14
                                  ]
                                },
                                {
                                  "id": "257",
                                  "value": "Diesel",
                                  "id_action": null,
                                  "information": "Veuillez indiquer les quantités de diesel utilisées par votre entreprise dans le cadre de ses propres opérations, sur une période de 1 an.",
                                  "children": [],
                                  "type": "question",
                                  "inputType": "numeric",
                                  "id_kpis": [
                                    15
                                  ]
                                }
                              ],
                              "type": "question",
                              "inputType": "multiple"
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "263",
                          "value": "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                          "id_action": 46,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "264",
                          "value": "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                          "id_action": 46,
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
                  "id": "291",
                  "value": "Autre(s)",
                  "id_action": 48,
                  "done": false,
                  "information": "Veuillez indiquer le type de polluant atmosphérique (par exemple : COSV, soufre, produits chimiques industriels, Gaz à Effet de Serre autres que CO2 tels que protoxyde d'azote, HFC, PFC, etc).\n\nSi vous avez déjà effectué une mesure d'émission de ce polluant, merci d'indiquer les quantités émises (par an) lors de votre dernière mesure et l'unité de mesure correspondante (kg, tonne, etc.).\nVous pouvez aussi indiquer l'utilisation de matériaux ou produits contenant ou générant ce type de polluant atmosphérique.",
                  "children": [
                    {
                      "id": "292",
                      "value": "Veuillez préciser :",
                      "id_action": 49,
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
              "id": "294",
              "value": "Quelles mesures avez-vous mises en place pour réduire les émissions de ces polluants atmosphériques ?",
              "id_action": null,
              "information": "Veuillez sélectionner les mesures mises en place par votre entreprise pour réduire les émissions de polluants atmosphériques.",
              "children": [
                {
                  "id": "295",
                  "value": "Adoption de produits et procédés moins polluants",
                  "id_action": null,
                  "done": false,
                  "information": "Sélectionnez cette action si vous avez adopté des produits et procédés moins polluants.\n\nAdopter des produits et procédés moins polluants permet de réduire les émissions de polluants atmosphériques et de protéger la santé humaine et l'environnement.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "302",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": "Sélectionnez cette action si vous avez mis en place d'autres mesures pour réduire les émissions de polluants atmosphériques.\n\nPréciser ces mesures permet de documenter les actions spécifiques prises par l'entreprise.",
                  "children": [
                    {
                      "id": "303",
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
                  "id": "305",
                  "value": "Aucune mesure mise en place",
                  "id_action": 50,
                  "done": false,
                  "information": null,
                  "children": [],
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
          "id": "306",
          "value": "Non",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "307",
          "value": "Ne sait pas",
          "id_action": 51,
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
      "id": "308",
      "value": "Votre entreprise génère-t-elle des pollutions aquatiques ?",
      "ids_secteurs": [
        2,
        4,
        5,
        6,
        7,
        8,
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "Les polluants aquatiques incluent des détergents et agents tensioactifs tels que les alkylbenzènesulfonates linéaires (LAS), les alkylphénol éthoxylates (APEO), les polyéthylène glycols (PEG), le Sodium Lauryl Sulfate (SLS) et les ammoniums quaternaires (Quats).\n\nCes substances, couramment utilisées dans les produits de nettoyage et les soins personnels, peuvent perturber les écosystèmes aquatiques en modifiant la tension superficielle de l'eau et en facilitant la dispersion d'autres polluants.",
      "children": [
        {
          "id": "309",
          "value": "Oui",
          "id_action": 52,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "310",
              "value": "Lesquels :",
              "id_action": null,
              "information": "Veuillez sélectionner les types de polluants aquatiques :",
              "children": [
                {
                  "id": "311",
                  "value": "Détergents et agents tensioactifs",
                  "id_action": null,
                  "done": false,
                  "information": "Il est nécessaire de réduire les émissions de ces substances car elles peuvent perturber les écosystèmes aquatiques en réduisant la tension superficielle de l'eau et en augmentant la solubilité d'autres polluants.\n\nLes détergents et agents tensioactifs comprennent généralement plusieurs types de composés chimiques qui peuvent être classés comme polluants.\n\nVoici quelques exemples courants :\n\n• Alkylbenzènesulfonates linéaires (LAS) : composés organiques sulfonés, souvent utilisés dans les détergents à lessive et les produits de nettoyage.\n\n• Alkylphénol éthoxylates (APEO) : utilisés comme agents émulsifiants et agents de surface, ces composés peuvent être persistants et bioaccumulatifs.\n\n• Polyéthylène glycols (PEG) et Polypropylène glycols (PPG) : utilisés comme agents épaississants et solvants dans divers produits de nettoyage.\n\n• Phosphates : souvent utilisés dans les détergents pour adoucir l'eau, mais peuvent contribuer à l'eutrophisation des eaux.\n\n• Sodium Lauryl Sulfate (SLS) et Sodium Laureth Sulfate (SLES) : tensioactifs courants dans les produits de nettoyage et les soins personnels.\n\n• Quats (ammoniums quaternaires) : utilisés comme désinfectants et agents antimicrobiens dans les nettoyants.",
                  "children": [
                    {
                      "id": "312",
                      "value": "L'entreprise mesure t-elle son utilisation de détergents et agents tensioactifs ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "313",
                          "value": "Oui",
                          "id_action": 53,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "314",
                              "value": "Quelles sont les quantités de détergents et agents tensioactifs utilisées annuellement par votre entreprise ?",
                              "id_action": null,
                              "information": "L'utilisation de détergents et agents tensioactifs dans vos processus peut entraîner des émissions importantes.\n\nLes détergents et agents tensioactifs incluent :\n\n• Alkylbenzènesulfonates linéaires (LAS)\n• Alkylphénol éthoxylates (APEO)\n• Polyéthylène glycols (PEG) et Polypropylène glycols (PPG)\n• Phosphates\n• Sodium Lauryl Sulfate (SLS) et Sodium Laureth Sulfate (SLES)\n• Quats (ammoniums quaternaires)",
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                26
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "316",
                          "value": "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                          "id_action": 54,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "317",
                          "value": "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                          "id_action": 54,
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
                  "id": "318",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "319",
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
              "id": "321",
              "value": "Avez-vous mis en place des mesures pour réduire les émissions de ces polluants aquatiques ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "322",
                  "value": "Oui",
                  "id_action": 55,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "323",
                      "value": "Quelles mesures avez-vous mises en place pour réduire les émissions de ces polluants aquatiques ?",
                      "id_action": null,
                      "information": "Veuillez sélectionner les mesures mises en place par votre entreprise pour réduire les émissions de polluants atmosphériques.",
                      "children": [
                        {
                          "id": "324",
                          "value": "Adoption de produits et procédés moins polluants",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous avez adopté des produits et procédés moins polluants. Adopter des produits et procédés moins polluants permet de réduire les émissions de polluants aquatiques et de protéger la santé humaine et l'environnement.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "325",
                          "value": "Installation de systèmes de traitement des eaux usées",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous avez installé des systèmes de traitement des eaux usées. Installer des systèmes de traitement des eaux usées aide à éliminer les polluants avant qu'ils ne soient libérés dans l'environnement aquatique.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "326",
                          "value": "Réduction de l'utilisation de produits chimiques dangereux",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous avez réduit l'utilisation de produits chimiques dangereux. Réduire l'utilisation de produits chimiques dangereux contribue à diminuer les émissions de polluants aquatiques nocifs pour la santé et l'environnement.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "327",
                          "value": "Mise en place de procédures de gestion et de traitement des déchets",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous avez mis en place des procédures de gestion et de traitement des déchets. Mettre en place des procédures de gestion et de traitement des déchets permet de minimiser les émissions de polluants aquatiques issus des déchets industriels et de protéger l'environnement.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "328",
                          "value": "Formation des employés sur les pratiques de réduction des polluants aquatiques",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si ou vos employés avez été formés aux pratiques de réduction des polluants aquatiques.\n\nLa formation garantit que tout le personnel comprend et applique les meilleures pratiques pour minimiser les émissions de polluants aquatiques.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "329",
                          "value": "Surveillance continue des niveaux de polluants aquatiques et réduction des émissions de polluants en conséquence",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous surveillez continuellement les niveaux de polluants aquatiques et si vous mettez en place des ajustements de mesures en conséquence.\n\nSurveiller les niveaux de polluants permet de réagir rapidement à toute augmentation des émissions et de maintenir des niveaux de pollution bas.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "330",
                          "value": "Autre(s)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "331",
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
                  "id": "333",
                  "value": "Non",
                  "id_action": 55,
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
          "id": "334",
          "value": "Non",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "335",
          "value": "Ne sait pas",
          "id_action": 56,
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
      "id": "336",
      "value": "Avez-vous mis en place des actions pour limiter la pression de vos activités sur la biodiversité et les écosystèmes et contribuer à leur préservation ?",
      "ids_secteurs": [
        1,
        3,
        9,
        28
      ],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "337",
          "value": "Oui",
          "id_action": 67,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "338",
              "value": "Avez-vous mené une étude d'impact environnemental pour évaluer ou surveiller l'impact de l'entreprise sur les écosystèmes ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vous réalisez des études d'impact environnemental pour évaluer ou surveiller l'impact de votre entreprise sur les écosystèmes.\n\nRéaliser des études d'impact environnemental permet d'identifier les effets négatifs potentiels de vos activités sur les écosystèmes et de mettre en place des mesures d'atténuation efficaces.\n\nCela contribue à :\n\n• Préserver la biodiversité en réduisant les impacts négatifs de vos opérations\n• Améliorer la conformité réglementaire et éviter les sanctions\n• Renforcer l'image de marque en démontrant un engagement envers la durabilité environnementale\n• Faciliter le dialogue avec les parties prenantes grâce à des données transparentes et fiables\n• Optimiser les processus internes pour une gestion plus durable des ressources naturelles",
              "children": [
                {
                  "id": "339",
                  "value": "Oui",
                  "id_action": 57,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "340",
                  "value": "Non",
                  "id_action": 57,
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
              "id": "341",
              "value": "Avez-vous évalué l'impact de votre chaîne d'approvisionnement sur la biodiversité ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vous évaluez l'impact de votre chaîne d'approvisionnement sur la biodiversité.\nÉvaluer l'impact de la chaîne d'approvisionnement permet d'identifier et de réduire les effets négatifs potentiels sur les écosystèmes, de promouvoir des pratiques durables parmi les fournisseurs, et d'améliorer la résilience de votre chaîne d'approvisionnement.\n\nCela contribue à :\n\n• Identifier les risques environnementaux associés aux fournisseurs\n• Encourager des pratiques durables tout au long de la chaîne d'approvisionnement\n• Améliorer la transparence et la responsabilité environnementale\n• Réduire les impacts négatifs sur les écosystèmes locaux\n• Renforcer les relations avec les parties prenantes et les autorités réglementaires",
              "children": [
                {
                  "id": "342",
                  "value": "Oui",
                  "id_action": 58,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "343",
                  "value": "Non",
                  "id_action": 58,
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
              "id": "344",
              "value": "Avez-vous noué des partenariats avec des ONG spécialisées dans la préservation de la biodiversité ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vous établissez des partenariats avec des ONG spécialisées dans la préservation de la biodiversité.\n\nÉtablir des partenariats avec des ONG permet de renforcer les actions de conservation grâce à une expertise spécialisée, de bénéficier de réseaux et de ressources additionnelles, et d'augmenter l'efficacité des programmes de préservation.\n\nCela contribue à :\n\n• Renforcer l'expertise en matière de biodiversité\n• Accroître l'impact des projets de conservation\n• Promouvoir la responsabilité sociale et environnementale\n• Améliorer les relations avec les parties prenantes et la communauté locale\n• Assurer une gestion durable des écosystèmes et des ressources naturelles",
              "children": [
                {
                  "id": "345",
                  "value": "Oui",
                  "id_action": 59,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "346",
                  "value": "Non",
                  "id_action": 59,
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
              "id": "347",
              "value": "Avez-vous participé à des initiatives de restauration ou de préservation de la biodiversité, telles que la plantation d'arbres ou la réhabilitation d'habitats naturels ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "348",
                  "value": "Oui",
                  "id_action": 60,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "349",
                  "value": "Non",
                  "id_action": 60,
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
              "id": "350",
              "value": "Avez-vous lancé ou financé des projets de restauration écologique des zones impactées par votre activité ? (participation directe ou financement de projets régénératifs)",
              "id_action": null,
              "information": "Sélectionnez cette option si vous participez directement ou financez des projets de restauration écologique pour les zones impactées par vos activités.\n\nMener des projets de restauration écologique permet de rétablir les fonctions naturelles des écosystèmes endommagés, de séquestrer le CO2, et de promouvoir la biodiversité.\n\nCela contribue à :\n\n• Améliorer la qualité de l'eau et du sol dans les zones restaurées\n• Séquestrer ou réduire les émissions de CO2\n• Augmenter le taux de survie des espèces plantées ou réintroduites\n• Mobiliser des ressources humaines, matérielles et financières pour des initiatives durables\n• Accroître le nombre de projets de restauration écologique",
              "children": [
                {
                  "id": "351",
                  "value": "Oui",
                  "id_action": 61,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "352",
                      "value": "Quel est le % de votre Chiffre d'Affaire annuel attribué à des projets de restauration écologique",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        27
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "354",
                  "value": "Non",
                  "id_action": 61,
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
              "id": "355",
              "value": "Avez-vous contribué à la conservation des habitats par la création de réserves naturelles ou de corridors pour la faune ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vous avez mis en place des initiatives pour conserver les habitats en créant des réserves naturelles ou des corridors pour la faune.\n\nLa création de réserves naturelles et de corridors pour la faune permet de protéger les espèces menacées, de maintenir la connectivité des habitats, et de réduire les menaces sur la biodiversité.\n\nCela contribue à :\n\n• Préserver les habitats naturels et les écosystèmes\n• Favoriser la survie et la reproduction des espèces animales et végétales\n• Maintenir la connectivité écologique entre les habitats fragmentés\n• Réduire les impacts négatifs des activités humaines sur la faune et la flore\n• Promouvoir la participation et l'engagement des communautés locales dans la conservation des habitats",
              "children": [
                {
                  "id": "356",
                  "value": "Oui",
                  "id_action": 62,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "357",
                      "value": "Quelle superficie de zones ou d'espaces avez-vous aménagée pour soutenir la biodiversité (en m2) ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        28
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "359",
                  "value": "Non",
                  "id_action": 62,
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
              "id": "360",
              "value": "Avez-vous élaboré une stratégie de protection des espèces, incluant la préservation et/ou l'introduction de biodiversité dans le respect de l'écosystème local ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vous mettez en place des stratégies pour préserver ou introduire la biodiversité en respectant l'écosystème local.\n\nProtéger les espèces et introduire de la biodiversité de manière stratégique permet de maintenir l'équilibre écologique, de préserver les habitats naturels, et de garantir la viabilité à long terme des écosystèmes locaux.\n\nCela contribue à :\n\n• Augmenter le nombre d'espèces protégées\n• Restaurer les habitats naturels\n• Améliorer la diversité des espèces présentes\n• Assurer la réussite des projets de restauration écologique\n• Gérer durablement les ressources naturelles prélevées",
              "children": [
                {
                  "id": "361",
                  "value": "Oui",
                  "id_action": 63,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "362",
                      "value": "Veuillez préciser la stratégie de protection des espèces que vous avez mis en oeuvre :",
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
                  "id": "364",
                  "value": "Non",
                  "id_action": 63,
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
              "id": "365",
              "value": "Avez-vous suivi des formations sur l'importance de la biodiversité cette dernière année ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vous organisez des sessions de formation et de sensibilisation sur l'importance de la biodiversité pour vos employés.\n\nFormer et sensibiliser les employés sur l'importance de la biodiversité permet d'améliorer la compréhension des enjeux environnementaux, de promouvoir des pratiques durables au sein de l'entreprise, et de renforcer l'engagement envers la conservation de la biodiversité.\n\nCela contribue à :\n\n• Augmenter la sensibilisation à la biodiversité parmi les employés\n• Améliorer les connaissances sur les pratiques durables\n• Renforcer l'engagement environnemental de l'entreprise\n• Promouvoir la collaboration avec des organisations spécialisées en biodiversité\n• Améliorer la performance environnementale globale de l'entreprise",
              "children": [
                {
                  "id": "366",
                  "value": "Oui",
                  "id_action": 64,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "367",
                      "value": "Combien d'heure de formations avez-vous suivies concernant l'importance de la biodiversité ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        29
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "369",
                  "value": "Non",
                  "id_action": 64,
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
              "id": "370",
              "value": "Avez-vous mis en place des campagnes de sensibilisations sur l'importance de la biodiversité cette dernière année ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "371",
                  "value": "Oui",
                  "id_action": 47,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "372",
                      "value": "Combien de personnes ont été sensibilisées par vos campagnes de sensibilisation ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        30
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "373",
                  "value": "Non",
                  "id_action": 47,
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
              "id": "374",
              "value": "Avez-vous obtenu des certifications liées à la biodiversité (telles que le Label Signature Biodiversité ou le Label Entreprises engagées pour la nature par exemple) ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vous obtenez des certifications liées à la biodiversité pour vos pratiques agricoles ou industrielles.\n\nObtenir des certifications liées à la biodiversité permet de garantir que vos pratiques respectent des normes environnementales élevées, de réduire les impacts négatifs sur les écosystèmes, et de promouvoir des pratiques durables.\n\nCela contribue à :\n\n• Protéger et restaurer les habitats naturels\n• Réduire la quantité de polluants utilisés dans les opérations\n• Adopter des pratiques agricoles ou industrielles plus durables\n• Améliorer la réputation environnementale de l'entreprise\n• Se conformer aux exigences réglementaires et des marchés",
              "children": [
                {
                  "id": "375",
                  "value": "Oui",
                  "id_action": 65,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "376",
                      "value": "Quelle(s) certification(s) liée(s) à la biodiversité avez-vous obtenue(s) ?",
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
                  "id": "378",
                  "value": "Non",
                  "id_action": 65,
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
              "id": "379",
              "value": "Avez-vous réduit l'usage de produits chimiques en faveur de solutions biologiques et durables ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vous réduisez l'usage des produits chimiques au profit de solutions biologiques et durables.\n\nRéduire l'usage des produits chimiques et adopter des solutions biologiques contribue à la protection de la biodiversité et à la santé des écosystèmes.\n\nCela permet de :\n\n• Diminuer les résidus chimiques dans l'environnement\n• Améliorer la qualité de l'eau et du sol\n• Promouvoir l'utilisation de produits biologiques\n• Réduire les impacts négatifs sur la faune et la flore\n• Renforcer les pratiques agricoles durables",
              "children": [
                {
                  "id": "380",
                  "value": "Oui",
                  "id_action": 66,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "381",
                      "value": "Quelle est la part de produits chimiques remplacés par des produits biologiques ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        31
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "383",
                  "value": "Non",
                  "id_action": 66,
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
              "id": "384",
              "value": "Autre(s)",
              "id_action": null,
              "done": false,
              "information": "Sélectionnez cette option si vous avez mis en place des actions spécifiques de protection de la biodiversité et de préservation des écosystèmes qui ne sont pas couvertes par les autres catégories.\n\nPrécisez la nature de ces actions et leurs impacts.",
              "children": [
                {
                  "id": "385",
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
          "id": "387",
          "value": "Non",
          "id_action": 67,
          "done": false,
          "information": "Sélectionnez cette option si vous n'avez mis en place aucune action pour la protection de la biodiversité et la préservation des écosystèmes.",
          "children": [],
          "type": "reponse"
        }
      ],
      "type": "question",
      "inputType": "single"
    },
    {
      "id": "388",
      "value": "Votre entreprise génère-t-elle des déchets ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "La loi anti-gaspillage (AGEC) vise à réduire le gaspillage et à promouvoir le recyclage, la revente d'occasion et le réemploi des déchets.\n\nSes objectifs incluent la réduction de l'utilisation du plastique et des emballages plastiques à usage unique de 20 %, la suppression des emballages à usage unique, et le recyclage de 100 % des emballages plastiques à usage unique d'ici 2025.\n\nElle interdit également la distribution gratuite de bouteilles en plastique en entreprise ou dans les ERP, en encourageant l'installation de fontaines à eau gratuites.\n\nLe décret d'avril 2022 fixe un objectif de 10 % d'emballages réemployés d'ici 2027 pour les entreprises mettant en circulation plus de 10 000 emballages par an, avec un pourcentage proportionnel à leur chiffre d'affaires.\n\nBon à savoir : En cas de non-respect du tri à la source, les entreprises peuvent être sanctionnées par une amende de 750 € pour les personnes physiques et 3 750 € pour les personnes morales, ainsi qu'une peine de 4 ans de prison et 150 000 € d'amende pour les personnes physiques ou 750 000 € pour les personnes morales.\n\nCochez toutes les réponses qui s'appliquent à votre entreprise :",
      "children": [
        {
          "id": "389",
          "value": "Oui",
          "id_action": null,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "390",
              "value": "Quels types de déchets votre entreprise génère-t-elle ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "391",
                  "value": "Biodéchets",
                  "id_action": 68,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des biodéchets tels que : restes alimentaires, déchets verts, résidus de préparation de repas, etc.\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de valoriser les matières organiques, et de réaliser des économies substantielles.\n\nDéfinition : Les biodéchets comprennent tous les déchets organiques issus des activités de restauration, de préparation de repas, ainsi que les déchets verts.\n\nExemples : Restes alimentaires, épluchures, marc de café, déchets de jardinage (herbe, feuilles, branches), résidus de préparation de repas, produits alimentaires périmés.\n\nTypes de Biodéchets :\n\nDéchets verts : Déchets de jardinage et d'entretien des espaces verts.\nDéchets alimentaires ou de cuisine : Restes de repas, épluchures, marc de café.\nProvenance :\nMénages : Restes alimentaires, déchets de cuisine, déchets verts.\nCommerces : Restes alimentaires, emballages organiques.\nIndustries : Résidus de transformation alimentaire, déchets verts industriels.\nLes biodéchets se dégradent sous l'action de bactéries et d'autres micro-organismes, fermentant et se transformant en biogaz, ce qui leur vaut également le nom de déchets fermentescibles.\n\nGestion : Collecte séparée des biodéchets, compostage, méthanisation pour produire du biogaz et du compost, réduction à la source par la prévention du gaspillage alimentaire.\n\nNote : Une gestion appropriée des biodéchets permet de réduire les déchets envoyés en décharge, de produire de l'énergie renouvelable et d'améliorer la qualité des sols par le compost.",
                  "children": [
                    {
                      "id": "392",
                      "value": "Mesurez-vous les biodéchets que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "393",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mesurez les biodéchets que votre entreprise génère.\n\nMesurer le volume de biodéchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                          "children": [
                            {
                              "id": "394",
                              "value": "Veuillez indiquer le volume total de biodéchets généré (en tonnes/an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                32
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "396",
                          "value": "Non mesuré actuellement mais l'entreprise souhaite commencer à mesurer les biodéchets qu'elle génère.",
                          "id_action": 69,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "397",
                          "value": "Non mesuré actuellement et l'entreprise ne souhaite pas mesurer les biodéchets qu'elle génère.",
                          "id_action": 69,
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
                      "id": "398",
                      "value": "Comment gérez-vous ces biodéchets ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "399",
                          "value": "Les biodéchets sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 70,
                          "done": false,
                          "information": "Sélectionnez cette action si vos biodéchets sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "400",
                          "value": "Les biodéchets sont triés pour être recyclés.",
                          "id_action": 71,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des biodéchets qu'elle génère.\n\nLe tri permet de valoriser et recycler les déchets pour réduire les impacts environnementaux.",
                          "children": [
                            {
                              "id": "401",
                              "value": "Veuillez indiquer le volume total de biodéchets triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                33
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "403",
                          "value": "Les biodéchets sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des biodéchets qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                          "children": [
                            {
                              "id": "404",
                              "value": "Veuillez indiquer le volume total de biodéchets triés, valorisés, réemployés, réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                34
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "406",
                      "value": "L'entreprise met-elle en place des actions pour réduire les biodéchets qu'elle génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "407",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les biodéchets que votre entreprise génère.\n\nLes actions de réduction des biodéchets peuvent inclure :\n\n• Tri à la source : Séparer les biodéchets des autres types de déchets pour faciliter leur collecte et leur traitement.\n• Compostage : Transformer les biodéchets en compost utilisable pour l'agriculture ou l'horticulture.\n• Méthanisation : Utiliser les biodéchets pour produire du biogaz et de l'électricité.\n• Sensibilisation des employés : Organiser des campagnes de sensibilisation pour encourager les pratiques de réduction des biodéchets.\n• Réduction à la source : Optimiser les processus de production et de consommation pour minimiser la génération de biodéchets.\n• Collaboration avec des prestataires spécialisés : Travailler avec des entreprises spécialisées dans la gestion et la valorisation des biodéchets.",
                          "children": [
                            {
                              "id": "408",
                              "value": "Veuillez décrire les actions mises en place pour réduire les biodéchets que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "409",
                          "value": "Non",
                          "id_action": 68,
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
                  "id": "410",
                  "value": "Bois",
                  "id_action": 72,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des déchets de bois.\n\nLa gestion efficace des déchets de bois permet de réduire les impacts environnementaux et de réaliser des économies.\n\nCela permet de :\n• Réduire la quantité de déchets envoyés en décharge\n• Favoriser le recyclage et la réutilisation des matériaux\n• Améliorer l'efficacité des ressources\n• Diminuer les coûts de gestion des déchets",
                  "children": [
                    {
                      "id": "411",
                      "value": "Mesurez-vous les déchets de bois que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "412",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mesurez le volume de déchets de bois que vous produisez annuellement.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources",
                          "children": [
                            {
                              "id": "413",
                              "value": "Veuillez indiquer le volume total de déchets de bois généré (en tonnes/an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                35
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "415",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets de bois que nous générons.",
                          "id_action": 73,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore vos déchets de bois mais que vous souhaitez commencer.\n\nCela vous permettra de :\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "416",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets de bois que nous générons pour l'instant.",
                          "id_action": 73,
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
                      "id": "417",
                      "value": "Comment gérez-vous ces déchets de bois ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "418",
                          "value": "Nos déchets de bois sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 74,
                          "done": false,
                          "information": "Sélectionnez cette action si vous jetez vos déchets de bois sans tri ni réemploi.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "419",
                          "value": "Nos déchets de bois sont triés pour être recyclés.",
                          "id_action": 75,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de bois qu'elle génère.\n\nLe tri permet de valoriser et de recycler les matériaux.",
                          "children": [
                            {
                              "id": "420",
                              "value": "Veuillez indiquer le volume total de déchets de bois triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                36
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "422",
                          "value": "Nos déchets de bois sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette option si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de bois qu'elle génère.\n\nElle peut le faire elle-même ou passer par des prestataires externes.",
                          "children": [
                            {
                              "id": "423",
                              "value": "Veuillez indiquer le volume total de déchets de bois triés, valorisés, réemployés, réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                37
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "425",
                      "value": "L'entreprise met-elle en place des actions pour réduire les déchets de bois qu'elle génère ?",
                      "id_action": null,
                      "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de bois que votre entreprise génère.\n\nLes actions de réduction des déchets de bois peuvent inclure :\n\n• Tri à la source : Séparer les déchets de bois des autres types de déchets pour faciliter leur collecte et leur traitement.\n• Réutilisation et recyclage : Transformer les déchets de bois en produits réutilisables ou en matière première pour d'autres industries.\n• Valorisation énergétique : Utiliser les déchets de bois comme source de combustible pour produire de l'énergie.\n• Sensibilisation des employés : Organiser des campagnes de sensibilisation pour encourager les pratiques de réduction des déchets de bois.\n• Réduction à la source : Optimiser les processus de production pour minimiser la génération de déchets de bois.\n• Collaboration avec des prestataires spécialisés : Travailler avec des entreprises spécialisées dans la gestion et la valorisation des déchets de bois.",
                      "children": [
                        {
                          "id": "426",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "427",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets de bois que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "428",
                          "value": "Non",
                          "id_action": 72,
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
                  "id": "429",
                  "value": "Carton/Emballage",
                  "id_action": 76,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des déchets carton et d'emballage.\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de recycler les matériaux, et de réaliser des économies substantielles.\n\nLes déchets de carton et emballages incluent tous les déchets issus de l'utilisation de ces matériaux dans les activités quotidiennes et industrielles.\n\nGestion : Collecte sélective, tri, recyclage en nouveaux produits en papier/carton.\n\nTypes de Déchets Papier/Carton :\n\nCarton : Boîtes en carton, cartons d'emballage.\nEmballage : Emballages en papier et carton, cartons de boissons.\n\nNote : Une gestion appropriée des déchets carton et emballage permet de réduire les déchets envoyés en décharge et de recycler les matériaux pour de nouvelles utilisations.",
                  "children": [
                    {
                      "id": "430",
                      "value": "Mesurez-vous les déchets cartons et emballages que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "431",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mesurez les déchets de carton/emballage que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                          "children": [
                            {
                              "id": "432",
                              "value": "Veuillez indiquer le volume total de déchets cartons/emballages généré (en tonnes par an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                38
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "434",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets de carton/emballage que nous générons.",
                          "id_action": 77,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore les déchets de carton/emballage que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "435",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets de carton/emballage que nous générons pour l'instant.",
                          "id_action": 77,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets de carton/emballage.",
                          "children": [],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "436",
                      "value": "Comment gérez-vous ces déchets de carton/emballage ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "437",
                          "value": "Nos déchets de carton/emballage sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 78,
                          "done": false,
                          "information": "Sélectionnez cette action si vos déchets de carton/emballage sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "438",
                          "value": "Nos déchets de carton/emballage sont triés pour être recyclés.",
                          "id_action": 79,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de carton/emballage qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [
                            {
                              "id": "439",
                              "value": "Veuillez indiquer le volume total de cartons et emballages triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                39
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "441",
                          "value": "Nos déchets de carton/emballage sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de carton/emballage qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                          "children": [
                            {
                              "id": "442",
                              "value": "Veuillez indiquer le volume total de cartons et emballages triés, valorisés, réemployés, réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                41
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "444",
                      "value": "L'entreprise met-elle en place des actions pour réduire les déchets de carton/emballage qu'elle génère ?",
                      "id_action": null,
                      "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de cartons et emballages que votre entreprise génère.\n\nLes actions de réduction des déchets de cartons et emballages peuvent inclure :\n\n• Remplacer les produits en papier et emballages à usage unique par des produits réutilisables.\n• Privilégier l'achat de produits certifiés ou labellisés \"écoresponsables\".\n• Organiser des campagnes de sensibilisation pour les employés.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets.\n• Utilisation d'emballages reconditionnés ou réutilisables.\n• Audits pour cerner les principales sources de déchets et améliorer leur gestion.\n• Réduire l'épaisseur des emballages ou les remplacer par des alternatives durables (carton, papier recyclé).",
                      "children": [
                        {
                          "id": "445",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "446",
                              "value": "Veuillez décrire les actions mises en place pour réduire les cartons et emballages que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "447",
                          "value": "Non",
                          "id_action": 76,
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
                  "id": "448",
                  "value": "Construction/démolition\n\nInfo : hors métaux et déchets dangereux",
                  "id_action": 80,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des déchets de construction et de démolition tels que : béton, bois de construction, plâtre, etc.\n\nLa gestion efficace des déchets de construction permet de réduire les impacts environnementaux et de réaliser des économies.",
                  "children": [
                    {
                      "id": "449",
                      "value": "Mesurez-vous les déchets de construction et démolition que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "450",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous connaissez le volume de déchets de construction/démolition que vous produisez annuellement.\n\nMesurer le volume de déchets vous permet de :\n\n• Établir une base de référence\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources",
                          "children": [
                            {
                              "id": "451",
                              "value": "Veuillez indiquer le volume de déchets de construction/démolition généré (en tonnes /an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                42
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "453",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets de construction/démolition que nous générons.",
                          "id_action": 81,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore vos déchets de construction/démolition mais que vous souhaitez commencer.\n\nCela vous permettra de :\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "454",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets de bois construction/démolition nous générons pour l'instant.",
                          "id_action": 81,
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
                      "id": "455",
                      "value": "Comment gérez-vous ces déchets de construction/démolition :",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "456",
                          "value": "Nos déchets de construction/démolition sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 82,
                          "done": false,
                          "information": "Sélectionnez cette action si vous jetez vos déchets de construction/démolition sans tri ni réemploi.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "457",
                          "value": "Nos déchets de construction/démolition sont triés pour être recyclés.",
                          "id_action": 83,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de construction/démolition qu'elle génère.\n\nLe tri permet de valoriser et de recycler les matériaux.",
                          "children": [
                            {
                              "id": "458",
                              "value": "Veuillez indiquer le volume total de déchets de construction/démolition triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                43
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "460",
                          "value": "Nos déchets de construction/démolition sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de construction/démolition qu'elle génère.\n\nElle peut le faire elle-même ou passer par des prestataires externes.",
                          "children": [
                            {
                              "id": "461",
                              "value": "Veuillez indiquer le volume total de déchets de construction/démolition triés, valorisés, réemployés, réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                44
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "463",
                      "value": "L'entreprise met-elle en place des actions pour réduire les déchets de construction/démolition qu'elle génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "464",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de construction et de démolition que votre entreprise génère, hors métaux et déchets dangereux.\n\nLes actions de réduction des déchets de construction et de démolition peuvent inclure :\n\n• Réutilisation des matériaux de construction sur site.\n• Privilégier les techniques de construction modulaire pour minimiser les déchets.\n• Sélectionner des matériaux de construction recyclés et recyclables.\n• Mettre en place des pratiques de tri à la source sur les chantiers.\n• Adoption de méthodes de déconstruction sélective pour maximiser la récupération des matériaux.\n• Sensibilisation des équipes de chantier aux pratiques de réduction des déchets.\n• Collaboration avec des entreprises spécialisées dans la valorisation des déchets de construction.",
                          "children": [
                            {
                              "id": "465",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets de construction/démolition que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "466",
                          "value": "Non",
                          "id_action": 80,
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
                  "id": "467",
                  "value": "Dangereux (produits chimiques, solvants, huiles usagées, etc.)",
                  "id_action": 84,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des déchets dangereux.\n\nLes déchets dangereux incluent les produits chimiques, solvants, huiles usagées, et autres substances nocives. Une gestion efficace de ces déchets permet de minimiser les risques pour la santé humaine et l'environnement, de respecter les réglementations et de réduire les coûts liés à leur gestion.\n\nAdopter de meilleures pratiques de gestion des déchets dangereux permet de contribuer à la durabilité environnementale et à la responsabilité sociale de votre entreprise.",
                  "children": [
                    {
                      "id": "468",
                      "value": "Mesurez-vous les déchets dangereux que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "469",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous connaissez le volume de déchets dangereux que vous produisez annuellement.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources",
                          "children": [
                            {
                              "id": "470",
                              "value": "Veuillez indiquer le volume total de déchets dangereux généré (en tonnes/an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                45
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "472",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets dangereux que nous générons",
                          "id_action": 85,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore vos déchets dangereux mais que vous souhaitez commencer.\n\nCela vous permettra de :\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "473",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets dangereux que nous générons pour l'instant",
                          "id_action": 85,
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
                      "id": "474",
                      "value": "Comment gérez-vous ces déchets dangereux ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "475",
                          "value": "Nos déchets dangereux sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 86,
                          "done": false,
                          "information": "Sélectionnez cette action si vous jetez vos déchets dangereux sans tri ni réemploi.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "476",
                          "value": "Nos déchets dangereux sont triés pour être recyclés.",
                          "id_action": 87,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets dangereux qu'elle génère.\n\nLe tri permet de valoriser et de recycler les matériaux.",
                          "children": [
                            {
                              "id": "477",
                              "value": "Veuillez indiquer le volume total de déchets dangereux triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                46
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "479",
                          "value": "Nos déchets dangereux sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets dangereux qu'elle génère.\n\nElle peut le faire elle-même ou passer par des prestataires externes.\n\nLes déchets dangereux peuvent être traités par des méthodes spécialisées pour réduire leur dangerosité avant toute forme de réutilisation ou revalorisation.\n\nVoici quelques exemples de valorisation des déchets dangereux :\n\n• Réutilisation des solvants : Les solvants usagés peuvent être purifiés et réutilisés dans des processus industriels.\n• Recyclage des huiles usagées : Les huiles usagées peuvent être retraitées pour produire du mazout, pour valorisation énergétique en cimenterie ou pour fabriquer des lubrifiants industriels.\n• Neutralisation des produits chimiques : Certains produits chimiques peuvent être neutralisés et utilisés dans d'autres applications.\n• Batteries : Vidées, dépolluées, avec recyclage du plomb et du plastique.\n• Aérosols : Dépollués, ils fournissent aluminium, acier et plastique.\n\nÀ chaque déchet dangereux sa valorisation !\n\nLa réglementation stricte s'applique pour le stockage et le traitement des déchets industriels dangereux (DID) avant leur élimination, afin d'éviter toute pollution ou contamination.\n\nLe Bordereau de Suivi des Déchets (BSD) doit systématiquement être émis au moment de la collecte. Ce document officiel (CERFA) doit être conservé pendant 5 ans et sera uniquement exigé en cas de contrôle.",
                          "children": [
                            {
                              "id": "480",
                              "value": "Veuillez indiquer le volume total de déchets dangereux triés, valorisés, réemployés, réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                47
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "482",
                      "value": "L'entreprise met-elle en place des actions pour réduire les déchets dangereux qu'elle génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "483",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets dangereux que votre entreprise génère.\n\nLes actions de réduction des déchets dangereux peuvent inclure :\n\n• Remplacer les substances dangereuses par des alternatives moins dangereuses.\n• Mettre en place des processus de production plus propres pour réduire la génération de déchets dangereux.\n• Utiliser des technologies de traitement pour neutraliser les déchets dangereux avant leur élimination.\n• Sensibiliser les employés aux bonnes pratiques de gestion des déchets dangereux.\n• Collaborer avec des prestataires spécialisés dans la gestion et le traitement des déchets dangereux.",
                          "children": [
                            {
                              "id": "484",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets dangereux que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "485",
                          "value": "Non",
                          "id_action": 84,
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
                  "id": "486",
                  "value": "Électronique (DEEE)",
                  "id_action": 88,
                  "done": false,
                  "information": "Choisissez cette action si vous générez des déchets électroniques.\n\nLes DEEE (Déchets d'Équipements Électriques et Électroniques) incluent tous les appareils fonctionnant à l'électricité ou avec des piles, tels que les ordinateurs, téléphones, imprimantes, et électroménagers.\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de récupérer des matériaux précieux, et de réaliser des économies substantielles.\n\nAdopter de meilleures pratiques de gestion des DEEE permet de contribuer à la durabilité environnementale et à la responsabilité sociale de votre entreprise.",
                  "children": [
                    {
                      "id": "487",
                      "value": "Mesurez-vous les déchets électroniques que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "488",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous connaissez le volume de déchets électroniques que vous produisez annuellement.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources",
                          "children": [
                            {
                              "id": "489",
                              "value": "Veuillez indiquer le volume total de déchets électroniques généré (en kg/an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                48
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "491",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets électroniques que nous générons",
                          "id_action": 89,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore vos déchets électroniques mais que vous souhaitez commencer.\n\nCela vous permettra de :\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "492",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets électroniques que nous générons pour l'instant",
                          "id_action": 89,
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
                      "id": "493",
                      "value": "Comment gérez-vous ces déchets électroniques ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "494",
                          "value": "Nos déchets électroniques sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 90,
                          "done": false,
                          "information": "Sélectionnez cette action si vous jetez vos déchets de électroniques sans tri ni réemploi.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "495",
                          "value": "Nos déchets électroniques sont triés pour être recyclés.",
                          "id_action": 91,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets électroniques qu'elle génère.\n\nLe tri permet de valoriser et de recycler les matériaux.",
                          "children": [
                            {
                              "id": "496",
                              "value": "Veuillez indiquer le volume total de déchets électroniques triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                48
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "498",
                          "value": "Nos déchets électroniques sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets électroniques qu'elle génère.\n\nElle peut le faire elle-même ou passer par des prestataires externes.",
                          "children": [
                            {
                              "id": "499",
                              "value": "Veuillez indiquer le volume total de déchets életroniques triés, valorisés, réemployés, réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                50
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "501",
                      "value": "L'entreprise met en place des actions pour réduire les déchets électroniques qu'elle génère.",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "502",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets électroniques que votre entreprise génère.\n\nLes actions de réduction des déchets électroniques peuvent inclure :\n\n• Prolonger la durée de vie des équipements électroniques par la maintenance et la réparation.\n• Mettre en place des programmes de reprise et de reconditionnement des équipements électroniques.\n• Sensibiliser les employés à l'importance de la réduction des déchets électroniques.\n• Favoriser l'achat d'équipements électroniques durables et facilement réparables.\n• Recycler les équipements électroniques en fin de vie de manière appropriée.\n• Collaborer avec des prestataires spécialisés dans le recyclage et la revalorisation des déchets électroniques.",
                          "children": [
                            {
                              "id": "503",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets électroniques que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "504",
                          "value": "Non",
                          "id_action": 92,
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
                  "id": "505",
                  "value": "Fournitures de bureau (feuilles, papiers, consommables, etc.)",
                  "id_action": 93,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des déchets de fournitures de bureau.",
                  "children": [
                    {
                      "id": "506",
                      "value": "Mesurez-vous les déchets de bureau que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "507",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous générez des déchets de fournitures de bureau (papiers, consommables, etc.).\n\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                          "children": [
                            {
                              "id": "508",
                              "value": "Veuillez indiquer le volume total de déchets de fournitures de bureau généré (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                51
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "510",
                          "value": "Non mesuré actuellement mais l'entreprise souhaite commencer à mesurer les déchets de bureau qu'elle génère.",
                          "id_action": 94,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "511",
                          "value": "Non mesuré actuellement et l'entreprise ne souhaite pas mesurer les déchets de bureau qu'elle génère.",
                          "id_action": 94,
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
                      "id": "512",
                      "value": "Comment gérez-vous ces déchets de bureau ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "513",
                          "value": "Les déchets de bureau sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 95,
                          "done": false,
                          "information": "Sélectionnez cette action si vos déchets de fournitures de bureaux sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "514",
                          "value": "Les déchets de bureau sont triés pour être recyclés.",
                          "id_action": 96,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de fournitures de bureaux qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [
                            {
                              "id": "515",
                              "value": "Veuillez indiquer le volume total de déchets de bureau triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                52
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "517",
                          "value": "Les déchets de bureau sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de fournitures de bureaux qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                          "children": [
                            {
                              "id": "518",
                              "value": "Veuillez indiquer le volume total de déchets de bureau triés, valorisés, réemployés, réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                53
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "520",
                      "value": "L'entreprise met-elle en place des actions pour réduire les déchets de fourniture de bureau qu'elle génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "521",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de bureau que votre entreprise génère.\n\nExemples d'actions visant à la réduction des déchets de bureau :\n\n• Remplacer l'utilisation de produits jetables par des produits réutilisables.\n• Privilégier l'achat de produits certifiés ou labellisés \"écoresponsables\".\n• Organiser des campagnes de sensibilisation pour les employés.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets.\n• Audits pour cerner les principales sources de déchets et améliorer leur gestion.\n• Réduire les impressions, privilégier les impressions en recto/verso.",
                          "children": [
                            {
                              "id": "522",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets de bureau que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "523",
                          "value": "Non",
                          "id_action": 93,
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
                  "id": "524",
                  "value": "Industriels (hors déchets de construction/démolition)",
                  "id_action": 97,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des déchets industriels (inertes, non dangereux et banals/non inertes).\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de récupérer des matériaux précieux, et de réaliser des économies substantielles.\n\n• Déchets industriels inertes :\n\nDéfinition : Les déchets inertes sont des déchets qui ne subissent aucune modification physique, chimique ou biologique importante. Ils ne se décomposent pas, ne brûlent pas, ne produisent aucune réaction physique ou chimique, ne sont pas biodégradables et ne détériorent pas les matières avec lesquelles ils entrent en contact.\nExemples : Béton, tuiles et briques, agrégats d'enrobés, déblais, vitrage, etc.\nGestion : Recyclage par réemploi direct ou transformation en granulats, traçabilité recommandée.\n\n• Déchets industriels non dangereux (banals) :\n\nDéfinition : Les déchets industriels non dangereux (banals) sont des déchets produits par les activités industrielles, mais qui ne présentent pas de danger particulier pour la santé humaine ou l'environnement.\nExemples : Cartons, plastiques, métaux, bois, résidus de processus de fabrication, etc.\nGestion : Collecte sélective, recyclage, valorisation énergétique, mise en décharge non dangereuse.",
                  "children": [
                    {
                      "id": "525",
                      "value": "Mesurez-vous les déchets industriels que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "526",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise mesure la quantité de déchets industriels inertes (tels que béton, tuiles et briques, agrégats d'enrobés, déblais, vitrage, etc.) ou banals (cartons, plastiques, métaux, bois, résidus de processus de fabrication, etc.) qu'elle génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                          "children": [
                            {
                              "id": "527",
                              "value": "Veuillez indiquer le volume total de déchets industriels généré (en tonnes/an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                54
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "529",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets industriels que nous générons.",
                          "id_action": 98,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore les déchets industriels que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "530",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets industriels que nous générons pour l'instant.",
                          "id_action": 98,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets industriels.",
                          "children": [],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "531",
                      "value": "Comment gérez-vous ces déchets industriels ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "532",
                          "value": "Nos déchets industriels sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 99,
                          "done": false,
                          "information": "Sélectionnez cette action si vos déchets industriels sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "533",
                          "value": "Nos déchets industriels sont triés pour être recyclés.",
                          "id_action": 100,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets industriels qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [
                            {
                              "id": "534",
                              "value": "Veuillez indiquer le volume total de déchets industriels triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                55
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "536",
                          "value": "Nos déchets industriels sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets industriels qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                          "children": [
                            {
                              "id": "537",
                              "value": "Veuillez indiquer le volume total de déchets industriels triés, valorisés, réemployés, réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                56
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "539",
                      "value": "L'entreprise met-elle en place des actions pour réduire les déchets industriels (hors déchets de construction/démolition) qu'elle génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "540",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets industriels (hors déchets de construction/démolition) que votre entreprise génère.\n\nLes actions de réduction des déchets industriels peuvent inclure :\n\n• Optimiser les processus de production pour minimiser les déchets générés.\n• Mettre en place des pratiques de réutilisation des matériaux dans le processus de production.\n• Favoriser l'achat de matériaux recyclés et recyclables.\n• Sensibiliser les employés à l'importance de la réduction des déchets et des bonnes pratiques de gestion des déchets.\n• Utiliser des technologies de traitement des déchets pour les transformer en sous-produits réutilisables ou en matières premières pour d'autres industries.",
                          "children": [
                            {
                              "id": "541",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets industriels que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "542",
                          "value": "Non",
                          "id_action": 101,
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
                  "id": "543",
                  "value": "Médicaux ou biologiques",
                  "id_action": 102,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des déchets médicaux ou biologiques (aiguilles, produits pharmaceutiques, équipements médicaux, etc.).\n\nUne gestion efficace de ces déchets permet de minimiser les risques pour la santé humaine et l'environnement, de respecter les réglementations, et de réduire les coûts liés à leur traitement.\n\nDéfinition : Les déchets médicaux ou biologiques sont produits par les activités du secteur de la santé, incluant les soins, traitements, diagnostics et recherches.\n\nExemples : Aiguilles, seringues, gants, produits pharmaceutiques, équipements médicaux.\n\nGestion : Tri sélectif, traitement sécurisé, recyclage ou élimination selon les réglementations en vigueur.",
                  "children": [
                    {
                      "id": "544",
                      "value": "Mesurez-vous les déchets médicaux ou biologiques que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "545",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise mesure la quantité de déchets médicaux ou biologiques qu'elle génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                          "children": [
                            {
                              "id": "546",
                              "value": "Veuillez indiquer le volume total de déchets médicaux ou biologiques  généré (en tonnes/an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                57
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "548",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets médicaux ou biologiques que nous générons.",
                          "id_action": 103,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore les déchets médicaux ou biologiques que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "549",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets médicaux ou biologiques que nous générons pour l'instant.",
                          "id_action": 103,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets médicaux ou biologiques.",
                          "children": [],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "550",
                      "value": "Comment gérez-vous ces déchets médicaux ou biologiques ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "551",
                          "value": "Nos déchets médicaux ou biologiques sont jetés sans être triés ou traités.",
                          "id_action": 104,
                          "done": false,
                          "information": "Sélectionnez cette action si vos déchets médicaux ou biologiques sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "552",
                          "value": "Nos déchets médicaux ou biologiques sont triés pour être recyclés.",
                          "id_action": 105,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets industriels qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [
                            {
                              "id": "553",
                              "value": "Veuillez indiquer le volume total de déchets médicaux et biologiques triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                58
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "555",
                          "value": "Nos déchets médicaux ou biologiques sont traités de manière sécurisée pour minimiser les risques sanitaires et environnementaux.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise met en place des actions pour traiter de manière sécurisée les déchets médicaux ou biologiques qu'elle génère.\n\nLes actions peuvent inclure :\n\n• Tri des déchets pour séparer les déchets infectieux et non infectieux.\n• Utilisation de conteneurs spécifiques pour la collecte des objets tranchants et des aiguilles.\n• Désinfection et stérilisation des équipements médicaux réutilisables.\n• Revalorisation des composants non infectieux après traitement approprié.",
                          "children": [
                            {
                              "id": "556",
                              "value": "Veuillez indiquer le volume total de déchets médicaux et biologiques traités de manière sécurisée (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                59
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "558",
                      "value": "L'entreprise met-elle en place des actions pour réduire les déchets médicaux ou biologiques qu'elle génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "559",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets médicaux ou biologiques (aiguilles, produits pharmaceutiques, équipements médicaux, etc.) que votre entreprise génère.\n\nLes actions de réduction des déchets médicaux ou biologiques peuvent inclure :\n\n• Remplacer les produits à usage unique par des produits réutilisables.\n• Adopter des technologies de stérilisation pour prolonger la durée de vie des équipements médicaux.\n• Mettre en place des programmes de collecte sélective pour les différents types de déchets médicaux et biologiques.\n• Collaborer avec des prestataires spécialisés dans la gestion des déchets médicaux.\n• Sensibiliser les employés à l'importance de la réduction des déchets et des bonnes pratiques de gestion des déchets médicaux.\n• Optimiser les processus pour minimiser les déchets générés pendant les soins et les traitements médicaux.\n• Utiliser des matériaux moins impactants pour l'environnement pour les équipements médicaux et les produits pharmaceutiques.",
                          "children": [
                            {
                              "id": "560",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets médicaux et biologiques que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "561",
                          "value": "Non",
                          "id_action": 102,
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
                  "id": "562",
                  "value": "Métaux",
                  "id_action": 106,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des déchets de métaux (ferraille, aluminium, cuivre, etc.).\n\nLes déchets de métaux incluent tous les résidus métalliques provenant d'activités industrielles, de construction ou de démolition.\n\nIl existe deux grandes familles de déchets métalliques :\n\n• Métaux ferreux : Correspondent aux déchets de fabrication et de transformation des métaux contenant plus de 90% de fer.\nPar exemple :\nChutes propres (sidérurgie) : Recyclées au sein de l'usine de production.\nChutes d'usines (transformation) : Transitent par le négoce de la ferraille.\nFerrailles de récupération : Issues de démolitions ou mises au rebut de produits en fin de vie (épaves automobiles, électroménager, boîtes métalliques, etc.).\n\n• Métaux non ferreux : Comprennent tous les métaux sauf le fer pur ou faiblement allié (inférieur à 10%).\n\nPar exemple :\nCuivre, aluminium, zinc, plomb, étain, chrome, nickel.\nChutes neuves de fabrication ou transformation.\nMatériels usagés et composés métalliques à traiter.\nContenants et emballages divers (canettes, etc.).\nGestion : Collecte sélective, tri par type de métal, recyclage pour réutilisation dans de nouveaux produits, valorisation énergétique pour les métaux non recyclables.\n\nNote : Les métaux souillés par des huiles ou solvants et les métaux précieux sont classés comme déchets dangereux.",
                  "children": [
                    {
                      "id": "563",
                      "value": "Mesurez-vous les déchets métalliques que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "564",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mesurez les déchets de métaux (ferraille, aluminium, cuivre, etc.) que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                          "children": [
                            {
                              "id": "565",
                              "value": "Veuillez indiquer le volume total de déchets métalliques généré (en tonnes/an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                60
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "567",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets de métaux que nous générons.",
                          "id_action": 107,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore les déchets de métaux que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "568",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets de métaux que nous générons pour l'instant.",
                          "id_action": 107,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets de métaux.",
                          "children": [],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "569",
                      "value": "Comment gérez-vous ces déchets de métaux ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "570",
                          "value": "Nos déchets métalliques sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 108,
                          "done": false,
                          "information": "Sélectionnez cette action si vos déchets de métaux sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "571",
                          "value": "Nos déchets métalliques sont triés pour être recyclés.",
                          "id_action": 109,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de métaux qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [
                            {
                              "id": "572",
                              "value": "Veuillez indiquer le volume total de déchets métalliques triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                61
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "574",
                          "value": "Nos déchets métalliques sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de métaux qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                          "children": [
                            {
                              "id": "575",
                              "value": "Veuillez indiquer le volume total de déchets métalliques triés, valorisés, réemployés, réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                62
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "577",
                      "value": "L'entreprise met-elle en place des actions pour réduire les déchets métalliques qu'elle génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "578",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de métaux que votre entreprise génère.\n\nLes actions de réduction des déchets de métaux peuvent inclure :\n\n• Réutiliser les chutes de métaux pour d'autres projets ou produits.\n• Privilégier l'achat de métaux certifiés durables.\n• Organiser des campagnes de sensibilisation pour les employés.\n• Mettre en place des pratiques de réduction à la source pour minimiser la production de déchets.\n• Adopter des technologies ou des processus favorisant la valorisation des déchets (recyclage, transformation en matières premières).\n• Audits pour cerner les principales sources de déchets et améliorer leur gestion.",
                          "children": [
                            {
                              "id": "579",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets métaliques que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "580",
                          "value": "Non",
                          "id_action": 106,
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
                  "id": "581",
                  "value": "Plastique",
                  "id_action": 110,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des déchets plastiques.\n\nExemples : Bouteilles, emballages alimentaires, films plastiques, bidons, flacons, sacs plastiques.\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de recycler les matériaux, et de réaliser des économies substantielles.\n\nLes déchets plastiques incluent tous les résidus plastiques issus des activités industrielles, de consommation et de production.\n\n• Collecte sélective : Mise en place de bacs de tri pour les différents types de plastiques directement dans les locaux de l'entreprise.\n• Recyclage : Les plastiques sont triés, compactés, broyés et nettoyés pour être transformés en granulés de plastique réutilisables.\n• Réduction à la source : Adoption de matériaux alternatifs, réduction de l'épaisseur des emballages, et utilisation de produits réutilisables au lieu de produits jetables.\n\nNote : La réglementation européenne et nationale impose des objectifs stricts de recyclage. Par exemple, la directive européenne sur les emballages et les déchets d'emballages vise à recycler au moins 50% des déchets d'emballages en plastique d'ici 2025",
                  "children": [
                    {
                      "id": "582",
                      "value": "Mesurez-vous les déchets plastique que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "583",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mesurez les déchets plastiques que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                          "children": [
                            {
                              "id": "584",
                              "value": "Veuillez indiquer le volume total de déchets plastiques généré (en tonnes/an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                63
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "586",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets plastiques que nous générons.",
                          "id_action": 111,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore les déchets plastiques que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "587",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets plastiques que nous générons pour l'instant.",
                          "id_action": 111,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets plastiques.",
                          "children": [],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "588",
                      "value": "Comment gérez-vous ces déchets plastiques ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "589",
                          "value": "Nos déchets plastiques sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 112,
                          "done": false,
                          "information": "Sélectionnez cette action si vos déchets plastiques sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "590",
                          "value": "Nos déchets plastiques sont triés pour être recyclés.",
                          "id_action": 113,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets plastiques qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [
                            {
                              "id": "591",
                              "value": "Veuillez indiquer le volume total de déchets plastiques triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                64
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "593",
                          "value": "Nos déchets plastiques sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets plastiques qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                          "children": [
                            {
                              "id": "594",
                              "value": "Veuillez indiquer le volume total de déchets plastiques valorisés, réemployés ou réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                65
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "596",
                      "value": "L'entreprise met-elle en place des actions pour réduire les déchets plastiques qu'elle génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "597",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets plastiques que votre entreprise génère.\n\nLes actions de réduction des déchets plastiques peuvent inclure :\n\n• Remplacer l'utilisation de produits jetables par des produits réutilisables.\n• Privilégier l'achat de produits certifiés ou labellisés \"écoresponsables\".\n• Organiser des campagnes de sensibilisation pour les employés.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets.\n• Audits pour cerner les principales sources de déchets et améliorer leur gestion.",
                          "children": [
                            {
                              "id": "598",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets plastiques que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "599",
                          "value": "Non",
                          "id_action": 110,
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
                  "id": "600",
                  "value": "Produits cosmétiques et d'hygiène",
                  "id_action": 114,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des déchets liés aux produits cosmétiques et d'hygiène (résidus/déchets de production, etc.).\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de recycler les matériaux, et de réaliser des économies substantielles.\n\nLes déchets liés aux produits cosmétiques et d'hygiène incluent tous les déchets générés par l'utilisation, la production et la distribution de ces produits.\n\nGestion : Tri sélectif, recyclage, réduction à la source par l'écoconception, et mise en place de systèmes de recharge et de collecte.\n\nNote : Une gestion appropriée des déchets liés aux produits cosmétiques et d'hygiène permet de réduire les déchets envoyés en décharge, de recycler les matériaux pour de nouvelles utilisations, et de diminuer l'empreinte environnementale globale de l'entreprise.",
                  "children": [
                    {
                      "id": "601",
                      "value": "Mesurez-vous les déchets cosmétiques et d'hygiène que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "602",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mesurez les déchets de produits cosmétiques et d'hygiène que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                          "children": [
                            {
                              "id": "603",
                              "value": "Veuillez indiquer le volume total de déchets cosmétiques et d\"hygiène généré (en tonnes/an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                66
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "605",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets de produits cosmétiques et d'hygiène que nous générons.",
                          "id_action": 115,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore les déchets de produits cosmétiques et d'hygiène que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "606",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets de produits cosmétiques et d'hygiène que nous générons pour l'instant.",
                          "id_action": 115,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets de produits cosmétiques et d'hygiène.",
                          "children": [],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "607",
                      "value": "Comment gérez-vous ces déchets de produits cosmétiques et d'hygiène ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "608",
                          "value": "Nos déchets de produits cosmétiques et d'hygiène sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 116,
                          "done": false,
                          "information": "Sélectionnez cette action si vos déchets de produits cosmétiques et d'hygiène sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "609",
                          "value": "Nos déchets de produits cosmétiques et d'hygiène sont triés pour être recyclés.",
                          "id_action": 117,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de produits cosmétiques et d'hygiène qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [
                            {
                              "id": "610",
                              "value": "Veuillez indiquer le volume total de déchets cosmétiques et d'hygiène triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                67
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "612",
                          "value": "Nos déchets plastique sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de produits cosmétiques et d'hygiène qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                          "children": [
                            {
                              "id": "613",
                              "value": "Veuillez indiquer le volume total de déchets cosmétiques et d'hygiène valorisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                68
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "615",
                      "value": "L'entreprise met-elle en place des actions pour réduire les déchets de produits cosmétiques et d'hygiène qu'elle génère ?",
                      "id_action": null,
                      "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de produits cosmétiques et d'hygiène que votre entreprise génère.\n\nLes actions de réduction des déchets de produits cosmétiques et d'hygiène peuvent inclure :\n\n• Remplacer les produits à usage unique par des produits réutilisables.\n• Privilégier l'achat de produits certifiés ou labellisés \"écoresponsables\".\n• Organiser des campagnes de sensibilisation pour les employés et les consommateurs.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets.\n• Utilisation d'emballages reconditionnés ou réutilisables.\n• Audits pour cerner les principales sources de déchets et améliorer leur gestion.\n• Réduire le nombre de couches d'emballage et utiliser des matériaux alternatifs durables.",
                      "children": [
                        {
                          "id": "616",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "617",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets cosmétiques et d'hygiène que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "619",
                          "value": "Non",
                          "id_action": 114,
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
                  "id": "620",
                  "value": "Textile",
                  "id_action": 118,
                  "done": false,
                  "information": "Sélectionnez cette action si vous générez des déchets textiles.\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de récupérer des matériaux précieux, et de réaliser des économies substantielles.\n\nLes déchets textiles incluent :\n\n• Chutes de tissu : résidus de tissu provenant de la coupe et de l'assemblage des vêtements.\n• Déchets de filature : restes de fibres et de fils produits lors de la filature des matières premières.\n• Déchets de teinture et d'impression : eau usée contenant des colorants et des produits chimiques, restes de pigments et de colorants.\n• Déchets de produits chimiques : produits chimiques utilisés dans les processus de teinture, d'ennoblissement et de finition des textiles.\n• Vêtements et textiles usagés : produits textiles en fin de vie, incluant les vêtements et les textiles de maison.\n• Déchets de packaging : emballages en plastique, carton, et papier utilisés pour le conditionnement des produits textiles.\n\nGestion :\n\n• Réemploi : Encourager la revente ou le don des vêtements usagés.\n• Recyclage : Mettre en place des systèmes de collecte et de tri des textiles pour leur recyclage.\n• Éco-conception : Concevoir des textiles plus durables et facilement recyclables.\n• Réduction à la source : Optimiser les processus de production pour réduire les chutes de tissu et les déchets de production.\n• Tri sélectif : Séparer les différents types de déchets textiles pour faciliter leur recyclage et réutilisation.\n• Valorisation énergétique : Utiliser les textiles non recyclables pour produire de l'énergie.\n\nCes actions permettent de prolonger la durée de vie des textiles, de réduire les déchets envoyés en décharge, et de minimiser les impacts environnementaux associés à la production et à la gestion des textiles",
                  "children": [
                    {
                      "id": "621",
                      "value": "Mesurez-vous les déchets textiles que votre entreprise génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "622",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mesurez les déchets textile que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                          "children": [
                            {
                              "id": "623",
                              "value": "Veuillez indiquer le volume total de déchets textiles généré (en tonnes/an)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                69
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "625",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets textile que nous générons.",
                          "id_action": 119,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore les déchets textile que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "626",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets textile que nous générons pour l'instant.",
                          "id_action": 119,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets textile.",
                          "children": [],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "627",
                      "value": "Comment gérez-vous ces déchets textile ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "628",
                          "value": "Nos déchets textiles sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 120,
                          "done": false,
                          "information": "Sélectionnez cette action si vos déchets textile sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "629",
                          "value": "Nos déchets textiles sont triés pour être recyclés.",
                          "id_action": 121,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets textiles qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [
                            {
                              "id": "630",
                              "value": "Veuillez indiquer le volume total de déchets textiles triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                70
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "632",
                          "value": "Nos déchets textiles sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets textiles qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                          "children": [
                            {
                              "id": "633",
                              "value": "Veuillez indiquer le volume total de déchets textiles triés, valorisés, réemployés, réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                71
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "635",
                      "value": "L'entreprise met-elle en place des actions pour réduire les déchets textiles qu'elle génère ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "636",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets textiles que votre entreprise génère.\n\nLes actions de réduction des déchets textiles peuvent inclure :\n\n• Remplacer les matériaux non durables par des matériaux recyclables ou biodégradables.\n• Privilégier l\\'achat de textiles certifiés ou labellisés \"écoresponsables\".\n• Organiser des campagnes de sensibilisation pour les employés et les consommateurs.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets textiles.\n• Réduire les chutes de tissus en optimisant les processus de coupe et de fabrication.\n• Mettre en place des programmes de collecte et de recyclage des textiles usagés.\n• Encourager la réparation et la réutilisation des textiles.",
                          "children": [
                            {
                              "id": "637",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets textiles que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "639",
                          "value": "Non",
                          "id_action": 118,
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
                  "id": "640",
                  "value": "Autres types de déchets liés à votre industrie ou activité",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "641",
                      "value": "Veuillez préciser de quel type de déchet il s'agit :",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "text",
                      "id_kpis": []
                    },
                    {
                      "id": "643",
                      "value": "Mesurez-vous ces déchets ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "644",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mesurez les déchets que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                          "children": [
                            {
                              "id": "645",
                              "value": "Veuillez indiquer la quantité totale de déchets liés à votre activité générés (en tonnes/an)",
                              "id_action": 122,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                72
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "647",
                          "value": "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets que nous générons.",
                          "id_action": 123,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne mesurez pas encore les déchets que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "648",
                          "value": "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets que nous générons pour l'instant.",
                          "id_action": 123,
                          "done": false,
                          "information": "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets.",
                          "children": [],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "649",
                      "value": "Comment gérez-vous ces déchets ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "650",
                          "value": "Nos déchets sont jetés sans être triés, réemployés ou valorisés.",
                          "id_action": 124,
                          "done": false,
                          "information": "Sélectionnez cette action si vos déchets sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "651",
                          "value": "Nos déchets sont triés pour être recyclés.",
                          "id_action": 125,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                          "children": [
                            {
                              "id": "652",
                              "value": "Veuillez indiquer le volume total de déchets triés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                73
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "654",
                          "value": "Nos déchets sont triés, valorisés, réemployés ou réutilisés.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                          "children": [
                            {
                              "id": "655",
                              "value": "Veuillez indiquer le volume total de déchets triés, valorisés, réemployés, réutilisés (en kg/mois)",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                74
                              ]
                            }
                          ],
                          "type": "reponse"
                        }
                      ],
                      "type": "question",
                      "inputType": "single"
                    },
                    {
                      "id": "657",
                      "value": "L'entreprise met-elle en place des actions pour réduire ces déchets ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "658",
                          "value": "Oui",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets spécifiques à votre industrie ou activité.\n\nLes actions de réduction des déchets peuvent inclure :\n\n• Remplacer les matériaux non durables par des matériaux recyclables ou biodégradables.\n• Privilégier l\\'achat de produits certifiés ou labellisés \"écoresponsables\".\n• Organiser des campagnes de sensibilisation pour les employés et les consommateurs.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets.\n• Réduire les chutes et les pertes en optimisant les processus de production.\n• Mettre en place des programmes de collecte et de recyclage des déchets spécifiques.\n• Encourager la réparation et la réutilisation des produits et matériaux.",
                          "children": [
                            {
                              "id": "659",
                              "value": "Veuillez décrire les actions mises en place pour réduire les déchets que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
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
                          "id": "661",
                          "value": "Non",
                          "id_action": 122,
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
                }
              ],
              "type": "question",
              "inputType": "multiple"
            }
          ],
          "type": "reponse"
        },
        {
          "id": "662",
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
      "id": "663",
      "value": "Quelle proportion de matériaux recyclés, reconditionnés ou réemployés utilisez-vous dans la fabrication de vos produits ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "Cette question vise à évaluer l'utilisation de matériaux recyclés, reconditionnés, ou de seconde main, par votre entreprise, dans ses processus de fabrication pour promouvoir une économie circulaire et réduire son impact environnemental.\n\nTypes de matériaux concernés :\n\n• Matériaux recyclés :\n\nMatériaux issus de déchets transformés pour être réintroduits dans le cycle de production.\nExemples : plastique recyclé, papier recyclé, métaux recyclés.\n\n• Matériaux reconditionnés :\n\nComposants ou matériaux ayant subi un processus de remise à neuf, vérifiés pour leur qualité, et prêts à être réutilisés.\nExemples : pièces électroniques reconditionnées, appareils électroménagers remis à neuf.\n\n• Matériaux issus de réemploi : \nMatériaux usagés encore en bon état qui sont directement réutilisés dans la fabrication de nouveaux produits, sans transformation.\nExemples : textile, bois, meubles récupérés.",
      "children": [
        {
          "id": "664",
          "value": "0,1 à 9,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            75
          ]
        },
        {
          "id": "665",
          "value": "10 à 19,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            76
          ]
        },
        {
          "id": "666",
          "value": "20 à 29,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            77
          ]
        },
        {
          "id": "667",
          "value": "30 à 39,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            78
          ]
        },
        {
          "id": "668",
          "value": "40 à 49,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            79
          ]
        },
        {
          "id": "669",
          "value": "50 à 59,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            80
          ]
        },
        {
          "id": "670",
          "value": "60 à 69,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            81
          ]
        },
        {
          "id": "671",
          "value": "70 à 79,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            82
          ]
        },
        {
          "id": "672",
          "value": "80 à 89,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            83
          ]
        },
        {
          "id": "673",
          "value": "90 à 100%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            84
          ]
        },
        {
          "id": "674",
          "value": "L'entreprise ne mesure/contrôle pas cette information",
          "id_action": 127,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "675",
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
      "id": "676",
      "value": "Quelle proportion de matériaux biosourcées ou biologiques utilisez-vous dans la fabrication de vos produits ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "Cette question vise à évaluer l'utilisation de matériaux biosourcés ou biologiques dans vos processus de fabrication, ce qui peut contribuer à réduire l'empreinte carbone de votre entreprise et promouvoir des pratiques plus durables et respectueuses de l'environnement.\n\nTypes de matériaux concernés :\n\n• Matériaux biosourcés :\n\nDéfinition : Matériaux issus de sources renouvelables d'origine biologique. Ils sont souvent produits à partir de plantes ou de matières animales et peuvent être utilisés comme alternatives aux matériaux pétrochimiques.\nExemples : Plastiques biosourcés (comme le PLA), biopolymères, fibres de bambou, huiles végétales, résines naturelles.\n\n• Matériaux biologiques :\n\nDéfinition : Matériaux d'origine organique qui peuvent être utilisés dans des produits finis ou comme matières premières dans la fabrication. Ils sont biodégradables et respectueux de l'environnement.\nExemples : Coton biologique, laine, soie, cuir végétal, bois certifié durable.",
      "children": [
        {
          "id": "677",
          "value": "0,1 à 9,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            85
          ]
        },
        {
          "id": "678",
          "value": "10 à 19,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            86
          ]
        },
        {
          "id": "679",
          "value": "20 à 29,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            87
          ]
        },
        {
          "id": "680",
          "value": "30 à 39,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            88
          ]
        },
        {
          "id": "681",
          "value": "40 à 49,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            89
          ]
        },
        {
          "id": "682",
          "value": "50 à 59,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            90
          ]
        },
        {
          "id": "683",
          "value": "60 à 69,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            91
          ]
        },
        {
          "id": "684",
          "value": "70 à 79,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            92
          ]
        },
        {
          "id": "685",
          "value": "80 à 89,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            93
          ]
        },
        {
          "id": "686",
          "value": "90 à 100%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            94
          ]
        },
        {
          "id": "687",
          "value": "L'entreprise ne mesure/contrôle pas cette information",
          "id_action": 129,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "688",
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
      "id": "689",
      "value": "Quelle proportion de matériaux recyclables utilisez-vous dans la fabrication de vos produits ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "Cette question vise à évaluer l'intégration de matériaux recyclables dans vos processus de fabrication, contribuant à la promotion d'une économie circulaire et à la réduction de l'empreinte écologique de votre entreprise. En utilisant des matériaux recyclables, vous pouvez augmenter la durabilité de vos produits et participer activement à la conservation des ressources naturelles.\n\n• Matériaux recyclables :\n\nMatériaux qui peuvent être récupérés, retraités et réintroduits dans le cycle de production après leur usage initial. Ils jouent un rôle crucial dans la réduction des déchets et la conservation des ressources naturelles.\n\nExemples : Verre, aluminium, acier, carton, plastiques recyclables (comme le PP, le PET, le PVC et le PEHD), papiers, textiles recyclables.",
      "children": [
        {
          "id": "690",
          "value": "0,1 à 9,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            95
          ]
        },
        {
          "id": "691",
          "value": "10 à 19,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            96
          ]
        },
        {
          "id": "692",
          "value": "20 à 29,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            97
          ]
        },
        {
          "id": "693",
          "value": "30 à 39,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            98
          ]
        },
        {
          "id": "694",
          "value": "40 à 49,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            99
          ]
        },
        {
          "id": "695",
          "value": "50 à 59,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            100
          ]
        },
        {
          "id": "696",
          "value": "60 à 69,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            101
          ]
        },
        {
          "id": "697",
          "value": "70 à 79,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            102
          ]
        },
        {
          "id": "698",
          "value": "80 à 89,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            103
          ]
        },
        {
          "id": "699",
          "value": "90 à 100%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            104
          ]
        },
        {
          "id": "700",
          "value": "L'entreprise ne mesure/contrôle pas cette information",
          "id_action": 131,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "701",
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
      "id": "702",
      "value": "Votre entreprise a-t-elle intégré des principes d'approvisionnement durable ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "703",
          "value": "Oui",
          "id_action": null,
          "done": true,
          "information": "Sélectionnez cette option si vous intégrez déjà des principes d'approvisionnement durable dans vos opérations.\n\nAdopter ces principes signifie choisir des fournisseurs en fonction de critères environnementaux et sociaux pour minimiser l'impact de votre chaîne d'approvisionnement.\n\nExemples : Utilisation de matériaux renouvelables, collaboration avec des partenaires respectant des normes éthiques, et réduction de l'empreinte carbone via des circuits courts.\n\nBénéfices :\n\n• Amélioration de l'image de marque\n• Fidélisation des clients soucieux de l'environnement\n• Réduction des risques de pénuries de ressources\n• Contribution à la durabilité environnementale et sociale",
          "children": [
            {
              "id": "704",
              "value": "Avez-vous instaurés des critères sociaux/environnementaux pour sélectionner vos fournisseurs ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "705",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": "Sélectionnez cette option si vous avez mis en place des critères sociaux et environnementaux pour le choix de vos fournisseurs.\n\nCette pratique vous permet de travailler avec des partenaires qui respectent des normes éthiques et durables, renforçant la responsabilité de votre chaîne d'approvisionnement.\n\nExemples : Exiger des certifications environnementales, s'assurer du respect des normes de travail équitables, et vérifier l'empreinte carbone des fournisseurs.\n\nBénéfices :\n\n• Renforce la réputation de votre entreprise\n• Minimise les risques liés à la chaîne d'approvisionnement\n• Améliore la conformité aux réglementations\n• Contribue à la durabilité globale de vos opérations",
                  "children": [
                    {
                      "id": "706",
                      "value": "Quels critères utilisez-vous pour choisir vos fournisseurs de matières ou de produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "707",
                          "value": "Critères de proximité : vous privilégiez les fournisseurs situés à moins de 250 km pour limiter votre empreinte carbone et soutenir l'économie régionale.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez les critères que vous appliquez pour choisir vos fournisseurs.\n\nUtiliser des critères précis pour sélectionner vos fournisseurs assure une chaîne d'approvisionnement durable, éthique et fiable.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "708",
                          "value": "Matériaux durables ou recyclables.\nEx : vous privilégiez les matériaux certifiés durables (FSC, PEFC), recyclés, recyclables, biodégradables ou biosourcés.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "709",
                          "value": "Élimination des substances toxiques.\nEx : vous évitez les matériaux contenant des substances toxiques (REACH, RoHS), vous collaborez pour réduire ou éliminer les substances dangereuses ou vous réalisez des audits réguliers pour vérifier votre conformité aux normes de sécurité.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "710",
                          "value": "Éthique du travail.\nEx : vous vérifiez que les fournisseurs respectent les droits des travailleurs ou engagés dans des pratiques durables, éthiques ou équitables.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "711",
                          "value": "Certifications sociales et environnementales.\nEx : vous choisissez des fournisseurs ayant des certifications (ISO 14001 par ex) ou labels.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "712",
                          "value": "Impact Carbone.\nVous choisissez des fournisseurs avec une politique de réduction de l'empreinte carbone.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "713",
                          "value": "Stabilité et fiabilité.\nEx : vous vérifiez la stabilité financière et la fiabilité de vos fournisseurs, vous privilégiez les fournisseurs avec des antécédents de livraisons fiables.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "714",
                          "value": "Autre(s)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "715",
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
                  "id": "717",
                  "value": "Non",
                  "id_action": 132,
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
              "id": "718",
              "value": "Votre entreprise évalue-t-elle l'impact environnemental de ses achats ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "719",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": "Sélectionnez cette option si vous mettez en place une évaluation de l'impact environnemental de vos achats, ce qui est essentiel pour adopter des pratiques plus durables.\n\nPour cela, des outils simplifiés et des guides sectoriels permettent d'effectuer ces évaluations de manière accessible et efficace :\n\n• Calculatrices environnementales :\n\nPermettent de calculer facilement l'empreinte carbone et d'autres impacts environnementaux. Exemples : Ecochain, Carbon Trust Footprint Calculator.\n\n• Bases de données de matériaux :\n\nFournissent des informations sur la durabilité des matériaux pour guider des choix responsables. Exemples : EcoInvent, Greenspec.\n\n• Outils de calcul simplifiés :\n\nOffrent une évaluation rapide des émissions de carbone et des impacts environnementaux. Exemples : Bilan Carbone Simplifié (ADEME), GHG Protocol's Calculators.\n\n• Guides par industrie :\n\nProposent des normes et des recommandations spécifiques à votre secteur. Exemples : Textile Exchange Guide, Sustainable Construction Guide.\n\n• Directives de l'ADEME :\n\nOffrent des conseils sur les achats responsables et l'intégration de la durabilité. Exemple : Guide des achats responsables.\n\n• Normes et Certifications :\n\nFournissent un cadre pour des pratiques durables. Exemples : ISO 14001, Fair Trade Certification.",
                  "children": [
                    {
                      "id": "720",
                      "value": "Quelle proportion de vos achats est accompagnée d'une analyse d'impact environnemental ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "721",
                          "value": "76% à 100%",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez la proportion d'achats pour lesquels vous effectuez une analyse d'impact environnemental.\n\nAnalyser l'impact environnemental de vos achats vous permet de prendre des décisions plus éclairées, de réduire votre empreinte écologique et d'améliorer la durabilité de votre chaîne d'approvisionnement.",
                          "children": [],
                          "type": "reponse",
                          "id_kpis": [
                            105
                          ]
                        },
                        {
                          "id": "722",
                          "value": "51% à 75%",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse",
                          "id_kpis": [
                            106
                          ]
                        },
                        {
                          "id": "723",
                          "value": "26% à 50%",
                          "id_action": 133,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse",
                          "id_kpis": [
                            107
                          ]
                        },
                        {
                          "id": "724",
                          "value": "11% à 25%",
                          "id_action": 133,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse",
                          "id_kpis": [
                            108
                          ]
                        },
                        {
                          "id": "725",
                          "value": "0% à 10%",
                          "id_action": 133,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse",
                          "id_kpis": [
                            109
                          ]
                        },
                        {
                          "id": "726",
                          "value": "L'entreprise ne mesure/contrôle pas cette information",
                          "id_action": 134,
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
                  "id": "727",
                  "value": "Non",
                  "id_action": 135,
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
              "id": "728",
              "value": "Quel pourcentage du montant total que vous dépensez pour vos matières premières provient de fournisseurs situés à moins de 300 km de votre lieu de production ?",
              "id_action": null,
              "information": "Sélectionnez la proportion du budget total consacré aux matières premières qui provient de fournisseurs situés à moins de 300 km de votre site de production.\n\nPour calculer ce pourcentage, divisez le montant total des dépenses effectuées auprès de fournisseurs locaux (à moins de 300 km) par le montant total de vos dépenses en matières premières, puis multipliez par 100 pour obtenir le pourcentage.\n\nExemple de calcul :\nSi vous dépensez un total de 200 000 € en matières premières et que 50 000 € proviennent de fournisseurs situés à moins de 300 km, la proportion de votre budget est de 25 %.\n\nBénéfices :\n\n• Réduction de l'empreinte carbone : Moins de transport signifie moins d'émissions de gaz à effet de serre.\n• Soutien à l'économie locale : Encourager le développement économique régional en travaillant avec des fournisseurs locaux.\n• Réactivité accrue : Les fournisseurs locaux peuvent souvent offrir des délais de livraison plus courts et une meilleure flexibilité.\n• Résilience de la chaîne d'approvisionnement : Réduire la dépendance à l'égard des fournisseurs éloignés diminue les risques logistiques et de transport.",
              "children": [
                {
                  "id": "729",
                  "value": "0,1% à 4,9%",
                  "id_action": 136,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    110
                  ]
                },
                {
                  "id": "730",
                  "value": "5% à 9,9%",
                  "id_action": 136,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    111
                  ]
                },
                {
                  "id": "731",
                  "value": "10% à 14,9%",
                  "id_action": 136,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    112
                  ]
                },
                {
                  "id": "732",
                  "value": "15% à 19,9%",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    113
                  ]
                },
                {
                  "id": "733",
                  "value": "20% à 50 %",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    114
                  ]
                },
                {
                  "id": "734",
                  "value": "Plus de 50 %",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    115
                  ]
                },
                {
                  "id": "735",
                  "value": "L'entreprise ne mesure/contrôle pas cette information",
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
              "id": "736",
              "value": "Quelle part de vos fournisseurs détient des certifications/labellisations environnementales et/ou sociales (ex : ISO 14001, EMAS, 1,2,3 Environnement, Imprim'Vert, etc.) ?",
              "id_action": null,
              "information": "Sélectionnez la proportion de vos fournisseurs qui détiennent des certifications ou labellisations environnementales et/ou sociales.\n\nIntégrer des fournisseurs certifiés assure que vos partenaires respectent des normes élevées en matière de durabilité et de responsabilité sociale, ce qui peut renforcer votre chaîne d'approvisionnement et améliorer votre image de marque.\n\nCalcul :\n\nPour déterminer cette proportion, divisez le nombre de fournisseurs certifiés par le nombre total de vos fournisseurs, puis multipliez par 100 pour obtenir le pourcentage.\n\nExemple de calcul :\n\nSi vous avez 100 fournisseurs et que 30 d'entre eux possèdent des certifications environnementales ou sociales, la part de vos de fournisseurs certifiés est de 30 %\n\nBénéfices :\n\n• Amélioration de la réputation : Travailler avec des partenaires certifiés montre un engagement envers des pratiques responsables.\n• Réduction des risques : Assure la conformité avec les réglementations environnementales et sociales.\n• Avantage concurrentiel : Les certifications renforcent la confiance des clients et partenaires.",
              "children": [
                {
                  "id": "737",
                  "value": "76% à 100%",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    116
                  ]
                },
                {
                  "id": "738",
                  "value": "51% à 75%",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    117
                  ]
                },
                {
                  "id": "739",
                  "value": "26% à 50%",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    118
                  ]
                },
                {
                  "id": "740",
                  "value": "11% à 25%",
                  "id_action": 137,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    119
                  ]
                },
                {
                  "id": "741",
                  "value": "1 % à 10 %",
                  "id_action": 137,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    120
                  ]
                },
                {
                  "id": "742",
                  "value": "L'entreprise ne mesure/contrôle pas cette information",
                  "id_action": 138,
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
              "id": "743",
              "value": "Assurez-vous la traçabilité de vos approvisionnements en matières premières ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "744",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": "Sélectionnez cette option si vous avez mis en place des systèmes pour assurer la traçabilité de vos approvisionnements en matières premières.\n\nSystèmes de traçabilité :\n\n• Mise en place de systèmes internes : Pour suivre l'origine des matières premières et garantir la conformité aux normes.\n• Collaboration avec des fournisseurs certifiés : Assurez-vous que vos partenaires garantissent la traçabilité de leurs approvisionnements.\n• Certifications et labels : Utilisez des certifications telles que bio ou équitable pour assurer la traçabilité.\n• Initiatives sectorielles : Participez à des initiatives ou plateformes de traçabilité spécifiques à votre secteur.\n• Technologies avancées : Adoptez des technologies comme la blockchain pour renforcer la transparence de la chaîne d'approvisionnement.\n• Rapports de transparence : Développez des rapports ou déclarations pour démontrer votre engagement envers la traçabilité.\n\nBénéfices :\n\n• Transparence et confiance : Renforce la confiance des clients et partenaires grâce à une chaîne d'approvisionnement transparente.\n• Conformité réglementaire : Garantit le respect des normes internationales et locales.\n• Réduction des risques : Identifie rapidement les problèmes potentiels liés à la qualité ou à l'approvisionnement.\n• Image de marque améliorée : Positionne votre entreprise en tant qu'acteur responsable et engagé dans le développement durable.",
                  "children": [
                    {
                      "id": "745",
                      "value": "Quels systèmes utilisez-vous pour garantir la traçabilité ?",
                      "id_action": null,
                      "information": "Sélectionnez les systèmes que vous utilisez pour assurer la traçabilité de vos approvisionnements en matières premières.",
                      "children": [
                        {
                          "id": "746",
                          "value": "Mise en place de systèmes de traçabilité pour suivre l'origine des matières premières",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "747",
                          "value": "Collaboration avec des fournisseurs qui garantissent la traçabilité de leurs approvisionnements",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "748",
                          "value": "Utilisation de certifications ou labels garantissant la traçabilité des matières premières (ex. bio, équitable)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "749",
                          "value": "Participation à des initiatives ou des plateformes de traçabilité dans votre secteur d'activité",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "750",
                          "value": "Développement de rapports ou de déclarations de transparence sur les approvisionnements en matières premières",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "751",
                          "value": "Adoption de technologies telles que la blockchain pour assurer la traçabilité des approvisionnements",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "752",
                          "value": "Engagement dans des programmes de suivi et de contrôle des chaînes d'approvisionnement pour garantir la transparence",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "753",
                          "value": "Autre(s)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "754",
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
                  "id": "756",
                  "value": "Non",
                  "id_action": 139,
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
          "id": "757",
          "value": "Non",
          "id_action": 140,
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
      "id": "663",
      "value": "Quelle proportion de matériaux recyclés, reconditionnés ou réemployés utilisez-vous dans la fabrication de vos produits ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "Cette question vise à évaluer l'utilisation de matériaux recyclés, reconditionnés, ou de seconde main, par votre entreprise, dans ses processus de fabrication pour promouvoir une économie circulaire et réduire son impact environnemental.\n\nTypes de matériaux concernés :\n\n• Matériaux recyclés :\n\nMatériaux issus de déchets transformés pour être réintroduits dans le cycle de production.\nExemples : plastique recyclé, papier recyclé, métaux recyclés.\n\n• Matériaux reconditionnés :\n\nComposants ou matériaux ayant subi un processus de remise à neuf, vérifiés pour leur qualité, et prêts à être réutilisés.\nExemples : pièces électroniques reconditionnées, appareils électroménagers remis à neuf.\n\n• Matériaux issus de réemploi : \nMatériaux usagés encore en bon état qui sont directement réutilisés dans la fabrication de nouveaux produits, sans transformation.\nExemples : textile, bois, meubles récupérés.",
      "children": [
        {
          "id": "664",
          "value": "0,1 à 9,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            75
          ]
        },
        {
          "id": "665",
          "value": "10 à 19,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            76
          ]
        },
        {
          "id": "666",
          "value": "20 à 29,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            77
          ]
        },
        {
          "id": "667",
          "value": "30 à 39,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            78
          ]
        },
        {
          "id": "668",
          "value": "40 à 49,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            79
          ]
        },
        {
          "id": "669",
          "value": "50 à 59,9%",
          "id_action": 126,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            80
          ]
        },
        {
          "id": "670",
          "value": "60 à 69,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            81
          ]
        },
        {
          "id": "671",
          "value": "70 à 79,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            82
          ]
        },
        {
          "id": "672",
          "value": "80 à 89,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            83
          ]
        },
        {
          "id": "673",
          "value": "90 à 100%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            84
          ]
        },
        {
          "id": "674",
          "value": "L'entreprise ne mesure/contrôle pas cette information",
          "id_action": 127,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "675",
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
      "id": "676",
      "value": "Quelle proportion de matériaux biosourcées ou biologiques utilisez-vous dans la fabrication de vos produits ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "Cette question vise à évaluer l'utilisation de matériaux biosourcés ou biologiques dans vos processus de fabrication, ce qui peut contribuer à réduire l'empreinte carbone de votre entreprise et promouvoir des pratiques plus durables et respectueuses de l'environnement.\n\nTypes de matériaux concernés :\n\n• Matériaux biosourcés :\n\nDéfinition : Matériaux issus de sources renouvelables d'origine biologique. Ils sont souvent produits à partir de plantes ou de matières animales et peuvent être utilisés comme alternatives aux matériaux pétrochimiques.\nExemples : Plastiques biosourcés (comme le PLA), biopolymères, fibres de bambou, huiles végétales, résines naturelles.\n\n• Matériaux biologiques :\n\nDéfinition : Matériaux d'origine organique qui peuvent être utilisés dans des produits finis ou comme matières premières dans la fabrication. Ils sont biodégradables et respectueux de l'environnement.\nExemples : Coton biologique, laine, soie, cuir végétal, bois certifié durable.",
      "children": [
        {
          "id": "677",
          "value": "0,1 à 9,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            85
          ]
        },
        {
          "id": "678",
          "value": "10 à 19,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            86
          ]
        },
        {
          "id": "679",
          "value": "20 à 29,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            87
          ]
        },
        {
          "id": "680",
          "value": "30 à 39,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            88
          ]
        },
        {
          "id": "681",
          "value": "40 à 49,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            89
          ]
        },
        {
          "id": "682",
          "value": "50 à 59,9%",
          "id_action": 128,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            90
          ]
        },
        {
          "id": "683",
          "value": "60 à 69,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            91
          ]
        },
        {
          "id": "684",
          "value": "70 à 79,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            92
          ]
        },
        {
          "id": "685",
          "value": "80 à 89,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            93
          ]
        },
        {
          "id": "686",
          "value": "90 à 100%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            94
          ]
        },
        {
          "id": "687",
          "value": "L'entreprise ne mesure/contrôle pas cette information",
          "id_action": 129,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "688",
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
      "id": "689",
      "value": "Quelle proportion de matériaux recyclables utilisez-vous dans la fabrication de vos produits ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "Cette question vise à évaluer l'intégration de matériaux recyclables dans vos processus de fabrication, contribuant à la promotion d'une économie circulaire et à la réduction de l'empreinte écologique de votre entreprise. En utilisant des matériaux recyclables, vous pouvez augmenter la durabilité de vos produits et participer activement à la conservation des ressources naturelles.\n\n• Matériaux recyclables :\n\nMatériaux qui peuvent être récupérés, retraités et réintroduits dans le cycle de production après leur usage initial. Ils jouent un rôle crucial dans la réduction des déchets et la conservation des ressources naturelles.\n\nExemples : Verre, aluminium, acier, carton, plastiques recyclables (comme le PP, le PET, le PVC et le PEHD), papiers, textiles recyclables.",
      "children": [
        {
          "id": "690",
          "value": "0,1 à 9,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            95
          ]
        },
        {
          "id": "691",
          "value": "10 à 19,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            96
          ]
        },
        {
          "id": "692",
          "value": "20 à 29,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            97
          ]
        },
        {
          "id": "693",
          "value": "30 à 39,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            98
          ]
        },
        {
          "id": "694",
          "value": "40 à 49,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            99
          ]
        },
        {
          "id": "695",
          "value": "50 à 59,9%",
          "id_action": 130,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            100
          ]
        },
        {
          "id": "696",
          "value": "60 à 69,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            101
          ]
        },
        {
          "id": "697",
          "value": "70 à 79,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            102
          ]
        },
        {
          "id": "698",
          "value": "80 à 89,9%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            103
          ]
        },
        {
          "id": "699",
          "value": "90 à 100%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse",
          "id_kpis": [
            104
          ]
        },
        {
          "id": "700",
          "value": "L'entreprise ne mesure/contrôle pas cette information",
          "id_action": 131,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "701",
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
      "id": "702",
      "value": "Votre entreprise a-t-elle intégré des principes d'approvisionnement durable ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "703",
          "value": "Oui",
          "id_action": null,
          "done": true,
          "information": "Sélectionnez cette option si vous intégrez déjà des principes d'approvisionnement durable dans vos opérations.\n\nAdopter ces principes signifie choisir des fournisseurs en fonction de critères environnementaux et sociaux pour minimiser l'impact de votre chaîne d'approvisionnement.\n\nExemples : Utilisation de matériaux renouvelables, collaboration avec des partenaires respectant des normes éthiques, et réduction de l'empreinte carbone via des circuits courts.\n\nBénéfices :\n\n• Amélioration de l'image de marque\n• Fidélisation des clients soucieux de l'environnement\n• Réduction des risques de pénuries de ressources\n• Contribution à la durabilité environnementale et sociale",
          "children": [
            {
              "id": "704",
              "value": "Avez-vous instaurés des critères sociaux/environnementaux pour sélectionner vos fournisseurs ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "705",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": "Sélectionnez cette option si vous avez mis en place des critères sociaux et environnementaux pour le choix de vos fournisseurs.\n\nCette pratique vous permet de travailler avec des partenaires qui respectent des normes éthiques et durables, renforçant la responsabilité de votre chaîne d'approvisionnement.\n\nExemples : Exiger des certifications environnementales, s'assurer du respect des normes de travail équitables, et vérifier l'empreinte carbone des fournisseurs.\n\nBénéfices :\n\n• Renforce la réputation de votre entreprise\n• Minimise les risques liés à la chaîne d'approvisionnement\n• Améliore la conformité aux réglementations\n• Contribue à la durabilité globale de vos opérations",
                  "children": [
                    {
                      "id": "706",
                      "value": "Quels critères utilisez-vous pour choisir vos fournisseurs de matières ou de produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "707",
                          "value": "Critères de proximité : vous privilégiez les fournisseurs situés à moins de 250 km pour limiter votre empreinte carbone et soutenir l'économie régionale.",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez les critères que vous appliquez pour choisir vos fournisseurs.\n\nUtiliser des critères précis pour sélectionner vos fournisseurs assure une chaîne d'approvisionnement durable, éthique et fiable.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "708",
                          "value": "Matériaux durables ou recyclables.\nEx : vous privilégiez les matériaux certifiés durables (FSC, PEFC), recyclés, recyclables, biodégradables ou biosourcés.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "709",
                          "value": "Élimination des substances toxiques.\nEx : vous évitez les matériaux contenant des substances toxiques (REACH, RoHS), vous collaborez pour réduire ou éliminer les substances dangereuses ou vous réalisez des audits réguliers pour vérifier votre conformité aux normes de sécurité.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "710",
                          "value": "Éthique du travail.\nEx : vous vérifiez que les fournisseurs respectent les droits des travailleurs ou engagés dans des pratiques durables, éthiques ou équitables.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "711",
                          "value": "Certifications sociales et environnementales.\nEx : vous choisissez des fournisseurs ayant des certifications (ISO 14001 par ex) ou labels.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "712",
                          "value": "Impact Carbone.\nVous choisissez des fournisseurs avec une politique de réduction de l'empreinte carbone.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "713",
                          "value": "Stabilité et fiabilité.\nEx : vous vérifiez la stabilité financière et la fiabilité de vos fournisseurs, vous privilégiez les fournisseurs avec des antécédents de livraisons fiables.",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "714",
                          "value": "Autre(s)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "715",
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
                  "id": "717",
                  "value": "Non",
                  "id_action": 132,
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
              "id": "718",
              "value": "Votre entreprise évalue-t-elle l'impact environnemental de ses achats ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "719",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": "Sélectionnez cette option si vous mettez en place une évaluation de l'impact environnemental de vos achats, ce qui est essentiel pour adopter des pratiques plus durables.\n\nPour cela, des outils simplifiés et des guides sectoriels permettent d'effectuer ces évaluations de manière accessible et efficace :\n\n• Calculatrices environnementales :\n\nPermettent de calculer facilement l'empreinte carbone et d'autres impacts environnementaux. Exemples : Ecochain, Carbon Trust Footprint Calculator.\n\n• Bases de données de matériaux :\n\nFournissent des informations sur la durabilité des matériaux pour guider des choix responsables. Exemples : EcoInvent, Greenspec.\n\n• Outils de calcul simplifiés :\n\nOffrent une évaluation rapide des émissions de carbone et des impacts environnementaux. Exemples : Bilan Carbone Simplifié (ADEME), GHG Protocol's Calculators.\n\n• Guides par industrie :\n\nProposent des normes et des recommandations spécifiques à votre secteur. Exemples : Textile Exchange Guide, Sustainable Construction Guide.\n\n• Directives de l'ADEME :\n\nOffrent des conseils sur les achats responsables et l'intégration de la durabilité. Exemple : Guide des achats responsables.\n\n• Normes et Certifications :\n\nFournissent un cadre pour des pratiques durables. Exemples : ISO 14001, Fair Trade Certification.",
                  "children": [
                    {
                      "id": "720",
                      "value": "Quelle proportion de vos achats est accompagnée d'une analyse d'impact environnemental ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "721",
                          "value": "76% à 100%",
                          "id_action": null,
                          "done": false,
                          "information": "Sélectionnez la proportion d'achats pour lesquels vous effectuez une analyse d'impact environnemental.\n\nAnalyser l'impact environnemental de vos achats vous permet de prendre des décisions plus éclairées, de réduire votre empreinte écologique et d'améliorer la durabilité de votre chaîne d'approvisionnement.",
                          "children": [],
                          "type": "reponse",
                          "id_kpis": [
                            105
                          ]
                        },
                        {
                          "id": "722",
                          "value": "51% à 75%",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse",
                          "id_kpis": [
                            106
                          ]
                        },
                        {
                          "id": "723",
                          "value": "26% à 50%",
                          "id_action": 133,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse",
                          "id_kpis": [
                            107
                          ]
                        },
                        {
                          "id": "724",
                          "value": "11% à 25%",
                          "id_action": 133,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse",
                          "id_kpis": [
                            108
                          ]
                        },
                        {
                          "id": "725",
                          "value": "0% à 10%",
                          "id_action": 133,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse",
                          "id_kpis": [
                            109
                          ]
                        },
                        {
                          "id": "726",
                          "value": "L'entreprise ne mesure/contrôle pas cette information",
                          "id_action": 134,
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
                  "id": "727",
                  "value": "Non",
                  "id_action": 135,
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
              "id": "728",
              "value": "Quel pourcentage du montant total que vous dépensez pour vos matières premières provient de fournisseurs situés à moins de 300 km de votre lieu de production ?",
              "id_action": null,
              "information": "Sélectionnez la proportion du budget total consacré aux matières premières qui provient de fournisseurs situés à moins de 300 km de votre site de production.\n\nPour calculer ce pourcentage, divisez le montant total des dépenses effectuées auprès de fournisseurs locaux (à moins de 300 km) par le montant total de vos dépenses en matières premières, puis multipliez par 100 pour obtenir le pourcentage.\n\nExemple de calcul :\nSi vous dépensez un total de 200 000 € en matières premières et que 50 000 € proviennent de fournisseurs situés à moins de 300 km, la proportion de votre budget est de 25 %.\n\nBénéfices :\n\n• Réduction de l'empreinte carbone : Moins de transport signifie moins d'émissions de gaz à effet de serre.\n• Soutien à l'économie locale : Encourager le développement économique régional en travaillant avec des fournisseurs locaux.\n• Réactivité accrue : Les fournisseurs locaux peuvent souvent offrir des délais de livraison plus courts et une meilleure flexibilité.\n• Résilience de la chaîne d'approvisionnement : Réduire la dépendance à l'égard des fournisseurs éloignés diminue les risques logistiques et de transport.",
              "children": [
                {
                  "id": "729",
                  "value": "0,1% à 4,9%",
                  "id_action": 136,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    110
                  ]
                },
                {
                  "id": "730",
                  "value": "5% à 9,9%",
                  "id_action": 136,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    111
                  ]
                },
                {
                  "id": "731",
                  "value": "10% à 14,9%",
                  "id_action": 136,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    112
                  ]
                },
                {
                  "id": "732",
                  "value": "15% à 19,9%",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    113
                  ]
                },
                {
                  "id": "733",
                  "value": "20% à 50 %",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    114
                  ]
                },
                {
                  "id": "734",
                  "value": "Plus de 50 %",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    115
                  ]
                },
                {
                  "id": "735",
                  "value": "L'entreprise ne mesure/contrôle pas cette information",
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
              "id": "736",
              "value": "Quelle part de vos fournisseurs détient des certifications/labellisations environnementales et/ou sociales (ex : ISO 14001, EMAS, 1,2,3 Environnement, Imprim'Vert, etc.) ?",
              "id_action": null,
              "information": "Sélectionnez la proportion de vos fournisseurs qui détiennent des certifications ou labellisations environnementales et/ou sociales.\n\nIntégrer des fournisseurs certifiés assure que vos partenaires respectent des normes élevées en matière de durabilité et de responsabilité sociale, ce qui peut renforcer votre chaîne d'approvisionnement et améliorer votre image de marque.\n\nCalcul :\n\nPour déterminer cette proportion, divisez le nombre de fournisseurs certifiés par le nombre total de vos fournisseurs, puis multipliez par 100 pour obtenir le pourcentage.\n\nExemple de calcul :\n\nSi vous avez 100 fournisseurs et que 30 d'entre eux possèdent des certifications environnementales ou sociales, la part de vos de fournisseurs certifiés est de 30 %\n\nBénéfices :\n\n• Amélioration de la réputation : Travailler avec des partenaires certifiés montre un engagement envers des pratiques responsables.\n• Réduction des risques : Assure la conformité avec les réglementations environnementales et sociales.\n• Avantage concurrentiel : Les certifications renforcent la confiance des clients et partenaires.",
              "children": [
                {
                  "id": "737",
                  "value": "76% à 100%",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    116
                  ]
                },
                {
                  "id": "738",
                  "value": "51% à 75%",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    117
                  ]
                },
                {
                  "id": "739",
                  "value": "26% à 50%",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    118
                  ]
                },
                {
                  "id": "740",
                  "value": "11% à 25%",
                  "id_action": 137,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    119
                  ]
                },
                {
                  "id": "741",
                  "value": "1 % à 10 %",
                  "id_action": 137,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    120
                  ]
                },
                {
                  "id": "742",
                  "value": "L'entreprise ne mesure/contrôle pas cette information",
                  "id_action": 138,
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
              "id": "743",
              "value": "Assurez-vous la traçabilité de vos approvisionnements en matières premières ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "744",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": "Sélectionnez cette option si vous avez mis en place des systèmes pour assurer la traçabilité de vos approvisionnements en matières premières.\n\nSystèmes de traçabilité :\n\n• Mise en place de systèmes internes : Pour suivre l'origine des matières premières et garantir la conformité aux normes.\n• Collaboration avec des fournisseurs certifiés : Assurez-vous que vos partenaires garantissent la traçabilité de leurs approvisionnements.\n• Certifications et labels : Utilisez des certifications telles que bio ou équitable pour assurer la traçabilité.\n• Initiatives sectorielles : Participez à des initiatives ou plateformes de traçabilité spécifiques à votre secteur.\n• Technologies avancées : Adoptez des technologies comme la blockchain pour renforcer la transparence de la chaîne d'approvisionnement.\n• Rapports de transparence : Développez des rapports ou déclarations pour démontrer votre engagement envers la traçabilité.\n\nBénéfices :\n\n• Transparence et confiance : Renforce la confiance des clients et partenaires grâce à une chaîne d'approvisionnement transparente.\n• Conformité réglementaire : Garantit le respect des normes internationales et locales.\n• Réduction des risques : Identifie rapidement les problèmes potentiels liés à la qualité ou à l'approvisionnement.\n• Image de marque améliorée : Positionne votre entreprise en tant qu'acteur responsable et engagé dans le développement durable.",
                  "children": [
                    {
                      "id": "745",
                      "value": "Quels systèmes utilisez-vous pour garantir la traçabilité ?",
                      "id_action": null,
                      "information": "Sélectionnez les systèmes que vous utilisez pour assurer la traçabilité de vos approvisionnements en matières premières.",
                      "children": [
                        {
                          "id": "746",
                          "value": "Mise en place de systèmes de traçabilité pour suivre l'origine des matières premières",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "747",
                          "value": "Collaboration avec des fournisseurs qui garantissent la traçabilité de leurs approvisionnements",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "748",
                          "value": "Utilisation de certifications ou labels garantissant la traçabilité des matières premières (ex. bio, équitable)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "749",
                          "value": "Participation à des initiatives ou des plateformes de traçabilité dans votre secteur d'activité",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "750",
                          "value": "Développement de rapports ou de déclarations de transparence sur les approvisionnements en matières premières",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "751",
                          "value": "Adoption de technologies telles que la blockchain pour assurer la traçabilité des approvisionnements",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "752",
                          "value": "Engagement dans des programmes de suivi et de contrôle des chaînes d'approvisionnement pour garantir la transparence",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "753",
                          "value": "Autre(s)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "754",
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
                  "id": "756",
                  "value": "Non",
                  "id_action": 139,
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
          "id": "757",
          "value": "Non",
          "id_action": 140,
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
      "id": "758",
      "value": "Pour un ou plusieurs de vos produits/services, avez-vous intégré des principes d'écoconception ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29,
        29
      ],
      "id_action": null,
      "information": "Cette question a pour objectif de comprendre si votre entreprise intègre l'écoconception dans le développement de ses produits.\n\nL'écoconception vise à réduire l'impact environnemental des produits tout au long de leur cycle de vie, en tenant compte des aspects tels que la durabilité, l'efficacité des ressources, et la minimisation des déchets.",
      "children": [
        {
          "id": "759",
          "value": "Oui",
          "id_action": 180,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "760",
              "value": "Quelle part de vos produits intégre des principes d'écoconception ?",
              "id_action": null,
              "information": "Sélectionnez la proportion de vos produits qui intègrent des critères d'écoconception.\n\nCette question vise à évaluer la part de vos produits qui intègre des critères d'écoconception.\n\nL'écoconception, également appelée design durable, consiste à concevoir des produits en tenant compte de leur impact environnemental tout au long de leur cycle de vie, depuis la production jusqu'à la fin de vie. Cela inclut l'utilisation de matériaux sains, la limitation des matières premières neuves, et l'intégration de pratiques durables.\n\nCalcul :\n\nPour déterminer cette proportion, divisez le nombre de produits qui intègrent des principes d'écoconception par le nombre total de produits que vous offrez, puis multipliez par 100 pour obtenir le pourcentage.",
              "children": [
                {
                  "id": "761",
                  "value": "Moins de 25 % de vos produits",
                  "id_action": 141,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    121
                  ]
                },
                {
                  "id": "762",
                  "value": "Entre 25 % et 50 % de vos produits",
                  "id_action": 141,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    122
                  ]
                },
                {
                  "id": "763",
                  "value": "Entre 51 % et 75 % de vos produits",
                  "id_action": 141,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    123
                  ]
                },
                {
                  "id": "764",
                  "value": "Plus de 75 % de vos produits",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse",
                  "id_kpis": [
                    124
                  ]
                },
                {
                  "id": "765",
                  "value": "Ne sait pas",
                  "id_action": 142,
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
              "id": "766",
              "value": "Quels principes d'écoconception avez-vous intégrés dans vos produits ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "767",
                  "value": "Réduction de l'usage de matières non renouvelables",
                  "id_action": null,
                  "done": false,
                  "information": "La réduction de l'usage de matières non renouvelables consiste à minimiser l'utilisation de ressources qui ne se régénèrent pas naturellement à l'échelle humaine.\n\nCela implique l'adoption de matériaux alternatifs et renouvelables, ainsi que l'amélioration de l'efficacité des processus de fabrication pour diminuer la dépendance aux ressources limitées.\n\nStratégies pour réduire l'utilisation de matières non renouvelables :\n• Évaluation et identification : Analysez les matières non renouvelables actuellement utilisées dans vos produits pour comprendre leur impact et leur rôle.\n• Substitution : Remplacez les matières non renouvelables par des alternatives renouvelables, recyclées ou biosourcées.\n• Optimisation de la conception : Améliorez la conception des produits pour réduire le besoin en matières premières et optimiser l'utilisation des ressources.\n• Collaboration avec les fournisseurs : Travaillez avec les fournisseurs pour identifier et promouvoir l'utilisation de matériaux plus durables.\n• Initiatives de réduction des plastiques : Mettez en œuvre des stratégies pour diminuer l'utilisation de plastiques non renouvelables.\n\nBénéfices de la réduction de l'usage de matières non renouvelables :\n• Diminution de l'empreinte carbone : Moins de matières non renouvelables signifie moins d'extraction et de transformation, ce qui réduit les émissions de CO2.\n• Durabilité accrue : Favoriser l'utilisation de matériaux renouvelables augmente la durabilité et la résilience de vos produits.\n• Réduction des coûts : L'optimisation des ressources et la réduction du gaspillage peuvent diminuer les coûts de production à long terme.\n• Amélioration de l'image de marque : Engager votre entreprise dans des pratiques durables peut renforcer la confiance et la fidélité des consommateurs.\n• Conformité réglementaire : Se préparer aux exigences futures et aux normes environnementales strictes.",
                  "children": [
                    {
                      "id": "768",
                      "value": "Votre entreprise a-t-elle identifié et évalué les matières non renouvelables utilisées dans ses produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "769",
                          "value": "Oui",
                          "id_action": 143,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez identifié et évalué les matières non renouvelables utilisées dans vos produits.\n\nL'identification et l'évaluation des matières non renouvelables dans vos produits sont essentielles pour comprendre leur impact environnemental et identifier des opportunités de réduction ou de remplacement par des alternatives plus durables.\n\nPourquoi c'est important :\n• Analyse de l'impact : Comprendre l'impact environnemental des matières non renouvelables utilisées.\n• Amélioration continue : Identifier les opportunités de substitution par des matières renouvelables ou recyclées.\n• Stratégie durable : Élaborer des stratégies pour réduire l'utilisation de ressources limitées.\n\nComment procéder :\n• Inventaire des matières premières : Répertorier toutes les matières non renouvelables utilisées dans vos produits.\n• Évaluation de l'impact : Analyser l'impact environnemental et social de ces matières.\n• Identification des alternatives : Rechercher des matériaux renouvelables, recyclés ou biosourcés pouvant remplacer les matières non renouvelables.\n• Élaboration d'un plan : Définir un plan pour réduire progressivement l'utilisation de ces matières.",
                          "children": [
                            {
                              "id": "770",
                              "value": "Quelle est la part de matière non renouvelables utilisées dans vos produits ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                125
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "772",
                          "value": "Non",
                          "id_action": 143,
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
                      "id": "773",
                      "value": "Avez-vous mis en place des mesures pour réduire l'utilisation de matières non renouvelables dans vos produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "774",
                          "value": "Oui",
                          "id_action": 144,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez adopté des mesures pour réduire l'utilisation de matières non renouvelables dans vos produits.\n\nLa mise en place de mesures visant à réduire l'utilisation de matières non renouvelables est essentielle pour minimiser l'impact environnemental de vos produits et favoriser la durabilité.\n\nActions à envisager :\n\n• Substitution de matériaux : Remplacer les matières non renouvelables par des alternatives renouvelables, recyclées ou biosourcées. Par exemple, utiliser des plastiques biosourcés au lieu de plastiques traditionnels à base de pétrole.\n\n• Optimisation de la conception : Reconcevoir les produits pour utiliser moins de matériaux ou pour inclure des matériaux durables. Cela inclut la réduction du poids et du volume, ce qui peut également améliorer l'efficacité des produits.\n\n• Réduction du gaspillage : Mettre en œuvre des pratiques de fabrication qui minimisent les déchets et optimisent l'utilisation des ressources.\n\n• Collaboration avec la chaîne d'approvisionnement : Travailler avec les fournisseurs pour développer et utiliser des matériaux durables, et encourager les innovations dans les matériaux.\n\n• Recyclage et réutilisation : Intégrer des composants recyclés dans les produits et encourager la réutilisation des matériaux.",
                          "children": [
                            {
                              "id": "775",
                              "value": "Veuillez préciser les mesures mises en place :",
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
                          "id": "777",
                          "value": "Non",
                          "id_action": 144,
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
                      "id": "778",
                      "value": "Votre entreprise met-elle en place des stratégies pour optimiser l'utilisation des matières et composants dans la fabrication de ses produits afin de réduire le gaspillage et l'utilisation de ressources non renouvelables ?",
                      "id_action": null,
                      "information": "Sélectionnez cette option si vous avez mis en œuvre des stratégies pour optimiser l'utilisation des matériaux et composants dans vos processus de fabrication.\n\nOptimiser l'utilisation des matières et des composants est crucial pour réduire le gaspillage, minimiser l'utilisation de ressources non renouvelables, et améliorer l'efficacité de la production. Ces stratégies contribuent non seulement à la durabilité environnementale, mais aussi à la rentabilité économique.\n\nActions possibles :\n• Conception économe en ressources : Concevoir des produits qui utilisent moins de matières premières, réduisant ainsi la dépendance aux ressources non renouvelables. Cela peut inclure la simplification des produits, la réduction du nombre de pièces, et l'amélioration de l'efficacité des composants.\n\n• Amélioration des processus de fabrication : Mettre en œuvre des méthodes de production avancées qui maximisent l'efficacité et minimisent le gaspillage, comme la fabrication additive (impression 3D) ou la production à flux tendu.\n\n• Utilisation de matériaux alternatifs : Substituer les matériaux non renouvelables par des matériaux renouvelables ou recyclés, et promouvoir l'utilisation de matières premières biosourcées.\n\n• Recyclage interne et réutilisation : Recycler les déchets de production et réintégrer les matériaux dans le processus de fabrication, diminuant ainsi le besoin de nouvelles ressources.\n\n• Collaboration avec les fournisseurs : Travailler avec la chaîne d'approvisionnement pour développer des matériaux plus durables et optimiser l'approvisionnement en matières premières.\n\n• Analyse de cycle de vie (ACV) : Utiliser l'analyse de cycle de vie pour identifier les étapes où l'optimisation peut réduire l'impact environnemental.",
                      "children": [
                        {
                          "id": "779",
                          "value": "Oui",
                          "id_action": 145,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "780",
                              "value": "Veuillez préciser les stratégies mises en place pour optimiser l'utilisation des matières et composants afin de réduire l'utilisation de ressources non renouvelables :",
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
                          "id": "782",
                          "value": "Non",
                          "id_action": 145,
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
                      "id": "783",
                      "value": "Votre entreprise a-t-elle mis en place des actions pour diminuer la quantité de plastique utilisée dans la fabrication de ses produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "784",
                          "value": "Oui",
                          "id_action": 148,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez mis en œuvre des initiatives pour réduire l'utilisation de plastique dans vos produits.\n\nRéduire la quantité de plastique utilisés dans les produits est essentiel pour diminuer l'impact environnemental et répondre à la demande croissante des consommateurs pour des alternatives plus durables. Les plastiques, bien que souvent économiques et polyvalents, posent des problèmes environnementaux importants, notamment en raison de leur persistance dans l'environnement.\n\nInitiatives possibles :\n\n• Substitution par des matériaux alternatifs : Remplacer les plastiques traditionnels par des matériaux renouvelables, recyclés ou biodégradables, tels que le plastique biosourcé, le carton ou des composites naturels.\n\n• Optimisation de la conception : Repenser les produits pour réduire ou éliminer les composants plastiques inutiles, tout en maintenant ou en améliorant la fonctionnalité.\n\n• Réduction du poids et du volume : Diminuer l'épaisseur ou la densité des plastiques utilisés sans compromettre la qualité, ce qui peut également réduire les coûts de transport.\n\n• Incorporation de plastiques recyclés : Utiliser des plastiques recyclés post-consommation ou post-industriels pour diminuer la demande de nouveaux plastiques vierges.\n\n• Éducation et sensibilisation des consommateurs : Encourager les consommateurs à recycler et réutiliser les produits plastiques, tout en leur proposant des alternatives plus durables.\n\n• Collaboration avec les fournisseurs : Travailler en partenariat avec des fournisseurs pour développer et adopter des solutions innovantes et durables qui réduisent l'utilisation de plastique.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "785",
                          "value": "Non",
                          "id_action": 148,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "786",
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
                      "id": "787",
                      "value": "Avez-vous remplacé des matières non renouvelables par des matières renouvelables ou biosourcées dans vos produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "788",
                          "value": "Oui",
                          "id_action": 147,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez remplacé des matières non renouvelables par des matières renouvelables ou biosourcées dans vos produits.\n\nLe remplacement des matières non renouvelables par des alternatives renouvelables ou biosourcées est une stratégie clé pour réduire l'impact environnemental de vos produits et favoriser une économie circulaire. Cela contribue non seulement à la durabilité, mais répond également à la demande croissante des consommateurs pour des produits plus écologiques.\n\nActions possibles :\n\n• Identification des matériaux : Évaluer les matières non renouvelables actuellement utilisées dans vos produits pour identifier les opportunités de remplacement.\n\n• Substitution par des matières renouvelables : Intégrer des matériaux renouvelables, tels que le bois certifié FSC, le coton biologique ou les plastiques biosourcés, qui se régénèrent naturellement et ont un impact moindre sur l'environnement.\n\n• Utilisation de matériaux biosourcés : Adopter des matières premières dérivées de biomasse, telles que les fibres de bambou, le bioplastique à base d'amidon ou de canne à sucre, qui sont biodégradables ou compostables.\n\n• Innovation en R&D : Investir dans la recherche et le développement pour découvrir de nouvelles matières renouvelables adaptées à vos produits, en collaboration avec des fournisseurs et des institutions de recherche.\n\n• Évaluation du cycle de vie : Utiliser l'analyse du cycle de vie (ACV) pour comprendre l'impact environnemental des nouveaux matériaux et s'assurer qu'ils apportent une amélioration par rapport aux alternatives non renouvelables.",
                          "children": [
                            {
                              "id": "789",
                              "value": "Quelle est la part de matières non renouvelables remplacées par des matières renouvelables ou biosourcées ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                126
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "791",
                          "value": "Non",
                          "id_action": 147,
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
                      "id": "792",
                      "value": "Encouragez-vous vos fournisseurs à utiliser des matières renouvelables ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "793",
                          "value": "Oui",
                          "id_action": 149,
                          "done": true,
                          "information": "Sélectionnez cette option si vous encouragez activement vos fournisseurs à utiliser des matières renouvelables dans leurs produits et services.\n\nEncourager vos fournisseurs à adopter des matières renouvelables est un moyen efficace de promouvoir la durabilité tout au long de votre chaîne d'approvisionnement. Cette incitation peut se faire par des recommandations, des échanges sur les meilleures pratiques, et une collaboration étroite pour atteindre des objectifs communs en matière de durabilité.\n\nTypes d'incitations :\n\n• Éducation et sensibilisation : Partager des informations et des ressources sur les avantages des matériaux renouvelables et les pratiques durables.\n\n• Critères de sélection : Inclure l'utilisation de matériaux renouvelables comme critère dans le processus de sélection des fournisseurs ou dans vos cahiers des charges.\n\n• Collaboration sur les projets : Travailler conjointement sur des projets pilotes ou des innovations produits pour intégrer des matériaux durables.\n\n• Partage des meilleures pratiques : Faciliter des sessions de partage des meilleures pratiques où les fournisseurs peuvent apprendre les uns des autres.\n\n• Établissement d'objectifs communs : Définir des objectifs de durabilité partagés avec vos fournisseurs pour accroître l'adoption de matériaux renouvelables.",
                          "children": [
                            {
                              "id": "794",
                              "value": "Quelle proportion de vos fournisseurs avez-vous sensibilisée à l'utilisation de matières renouvelables ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                127
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "796",
                          "value": "Non",
                          "id_action": 149,
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
                      "id": "797",
                      "value": "Avez-vous optimisé les caractéristiques dimensionnelles de vos produits, comme le poids et le volume ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "798",
                          "value": "Oui",
                          "id_action": 150,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez pris des mesures pour optimiser le poids et le volume de vos produits.\n\nL'optimisation des caractéristiques dimensionnelles des produits, telles que le poids et le volume, est un aspect important de l'écoconception. Elle permet non seulement de réduire l'utilisation de matières premières, mais aussi d'améliorer l'efficacité logistique et de diminuer l'impact environnemental des produits tout au long de leur cycle de vie.\n\nUne meilleure optimisation peut également permettre de diminuer les coûts de transport, d'augmenter l'efficacité logistique et de réduire les émissions de CO₂.\n\nActions possibles :\n\n• Conception légère : Utiliser des matériaux légers pour réduire le poids des produits sans compromettre leur durabilité ou performance.\n\n• Réduction du volume : Concevoir des produits plus compacts pour minimiser l'espace nécessaire au stockage et au transport.\n\n• Modularité : Concevoir des produits qui peuvent être facilement démontés ou reconfigurés pour optimiser le transport et la distribution.\n\n• Emballage optimisé : Développer des solutions d'emballage qui s'adaptent parfaitement au produit, réduisant ainsi le volume et la quantité de matériaux nécessaires.\n\n• Analyse de la chaîne logistique : Revoir les processus logistiques pour exploiter au mieux l'espace de transport et réduire les coûts associés.",
                          "children": [
                            {
                              "id": "799",
                              "value": "Quelle est la part des produits ayant bénéficié d'une réduction de leur rapport poids/volume sur le total des produits au cours des 12 derniers mois ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                128
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "801",
                          "value": "Non",
                          "id_action": 150,
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
                      "id": "802",
                      "value": "Réduisez-vous la variété des matériaux utilisés dans vos produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "803",
                          "value": "Oui",
                          "id_action": 151,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez pris des mesures pour réduire la diversité des matériaux utilisés dans vos produits.\n\nRéduire la variété des matériaux dans vos produits est une stratégie efficace pour simplifier la chaîne d'approvisionnement, faciliter le recyclage, et optimiser les processus de fabrication. Cela contribue également à améliorer l'efficacité environnementale et à réduire les coûts.\n\nActions possibles :\n\n• Standardisation des matériaux : Utiliser des matériaux standardisés et polyvalents qui peuvent être employés dans plusieurs produits pour réduire la complexité.\n\n• Simplification du design : Concevoir des produits en utilisant moins de types de matériaux, ce qui facilite le tri et le recyclage en fin de vie.\n\n• Optimisation des processus de fabrication : Rationaliser les opérations en réduisant le nombre de matériaux différents, ce qui peut réduire les besoins en stockage et simplifier la gestion des inventaires.\n\n• Partenariat avec les fournisseurs : Collaborer avec les fournisseurs pour sélectionner des matériaux qui répondent aux normes de durabilité et peuvent être utilisés de manière interchangeable.",
                          "children": [
                            {
                              "id": "805",
                              "value": "Quelle est la part de vos produits pour lesquels la variété de matériaux a été réduite ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                129
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "807",
                          "value": "Non",
                          "id_action": 151,
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
                      "id": "808",
                      "value": "Votre entreprise simplifie-t-elle ses produits, gammes, et variantes ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "809",
                          "value": "Oui",
                          "id_action": 152,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez entrepris des actions pour simplifier vos produits, gammes, et variantes.\n\nLa simplification des produits, des gammes, et des variantes permet de réduire la complexité de la production et de la logistique, d'améliorer l'efficacité opérationnelle, et de diminuer l'impact environnemental. Cette approche favorise également une meilleure gestion des ressources et une réponse plus agile aux besoins du marché.\n\nActions possibles :\n\n• Rationalisation des produits : Réduire le nombre de variantes pour se concentrer sur les produits essentiels qui répondent le mieux aux besoins des clients.\n\n• Standardisation des composants : Utiliser des pièces et des composants standardisés à travers différentes gammes de produits pour simplifier l'assemblage et réduire les coûts.\n\n• Optimisation du portefeuille de produits : Analyser les performances des produits pour identifier ceux qui peuvent être consolidés ou éliminés sans affecter la satisfaction client.\n\n• Réduction de la complexité : Concevoir des produits modulaires qui permettent une personnalisation sans augmenter la complexité de fabrication.\n\n• Alignement sur les tendances du marché : Évaluer les tendances et préférences des consommateurs pour ajuster les gammes de produits de manière à maximiser leur pertinence et leur attrait.",
                          "children": [
                            {
                              "id": "810",
                              "value": "Quelle est la part de vos produits ayant été simplifiés (réduction du nombre de composants ou de variantes) au cours des 12 derniers mois ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                130
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "812",
                          "value": "Non",
                          "id_action": 152,
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
                      "id": "813",
                      "value": "Votre entreprise réduit-elle l'utilisation de matières non renouvelables dans les emballages de ses produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "814",
                          "value": "Oui",
                          "id_action": 153,
                          "done": true,
                          "information": "Réduire l'utilisation de matières non renouvelables dans les emballages est une étape clé pour minimiser l'empreinte environnementale des produits.\n\nCela participe à la transition vers une économie plus durable, en répondant aux attentes des consommateurs et en contribuant potentiellement à des réductions de coûts.\n\nActions possibles :\n\n• Utilisation de matériaux renouvelables : Remplacer les matériaux non renouvelables par des alternatives comme le papier recyclé, le carton ou des bioplastiques compostables qui proviennent de ressources naturelles renouvelables.\n\n• Conception d'emballages minimalistes : Simplifier les designs d'emballages pour réduire la quantité de matériaux utilisés, diminuant ainsi les déchets et les coûts.\n\n• Adoption de technologies optimisées : Exploiter des technologies innovantes (ex. impression 3D) pour améliorer l'efficacité de la fabrication des emballages et limiter la consommation de matières premières.\n\n• Augmentation de la recyclabilité : Concevoir des emballages facilement recyclables, favorisant ainsi leur réintroduction dans le cycle de production.\n\n• Matériaux innovants : Investir dans des matériaux d'emballage éco-responsables offrant les mêmes performances que les options traditionnelles, mais avec un impact environnemental moindre.\n\nCette démarche permet de concilier performance et responsabilité écologique tout en répondant aux exigences croissantes en matière d'éco-conception.",
                          "children": [
                            {
                              "id": "815",
                              "value": "Quelle est la part d'emballages composés de matières renouvelables sur l'ensemble des emballages utilisés au cours des 12 derniers mois ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                131
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "817",
                          "value": "Non",
                          "id_action": 153,
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
                  "id": "818",
                  "value": "Utilisation de matières recyclées",
                  "id_action": null,
                  "done": false,
                  "information": "L'utilisation de matières recyclées dans la fabrication de produits est une stratégie clé pour réduire l'empreinte carbone de votre entreprise, diminuer la dépendance aux matières premières vierges et soutenir une économie circulaire. En intégrant des matériaux recyclés, votre entreprise peut non seulement contribuer à la durabilité environnementale, mais aussi répondre à une demande croissante des consommateurs pour des produits plus respectueux de l'environnement.\n\nActions possibles :\n\n• Incorporation de plastiques recyclés : Utiliser des plastiques recyclés post-consommation dans les produits pour réduire la demande de nouveaux plastiques vierges.\n\n• Utilisation de métaux recyclés : Intégrer des métaux tels que l'acier, l'aluminium ou le cuivre recyclés dans vos produits pour limiter l'extraction minière.\n\n• Emballages en matériaux recyclés : Concevoir des emballages à partir de papier ou de carton recyclé pour diminuer l'utilisation de fibres vierges.\n\n• Partenariats avec des fournisseurs : Collaborer avec des fournisseurs qui offrent des matériaux recyclés de haute qualité et certifiés.\n\n• Innovation produit : Développer des produits conçus spécifiquement pour intégrer un pourcentage élevé de matières recyclées.",
                  "children": [
                    {
                      "id": "819",
                      "value": "Avez-vous établi des objectifs pour augmenter l'utilisation de matières recyclées dans vos produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "820",
                          "value": "Oui",
                          "id_action": 154,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez défini des objectifs pour augmenter l'utilisation de matières recyclées dans vos produits.\n\nÉtablir des objectifs clairs pour maximiser l'utilisation de matières recyclées démontre un engagement stratégique envers la durabilité et l'économie circulaire. Cela implique la planification et la mise en œuvre de stratégies visant à augmenter la proportion de matériaux recyclés utilisés dans la fabrication de vos produits.\n\nActions possibles :\n\n• Définition d'objectifs quantitatifs : Fixer des cibles mesurables pour le pourcentage de matériaux recyclés à intégrer dans chaque gamme de produits.\n\n• Évaluation des matériaux actuels : Analyser l'utilisation actuelle de matériaux recyclés pour identifier les opportunités d'augmentation.\n\n• Développement de produits : Concevoir ou adapter des produits pour inclure davantage de matériaux recyclés tout en maintenant la qualité et la performance.\n\n• Collaboration avec la chaîne d'approvisionnement : Travailler avec les fournisseurs pour s'assurer qu'ils peuvent fournir des matériaux recyclés de haute qualité et certifiés.\n\n• Surveillance et reporting : Mettre en place des systèmes pour suivre les progrès réalisés vers les objectifs fixés et communiquer régulièrement les résultats aux parties prenantes.",
                          "children": [
                            {
                              "id": "821",
                              "value": "Veuillez décrire ces objectifs :",
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
                          "id": "823",
                          "value": "Non",
                          "id_action": 154,
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
                      "id": "824",
                      "value": "Votre entreprise a-t-elle identifié des fournisseurs de matières recyclées en vue d'augmenter la part de matériaux recyclés dans ses produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "825",
                          "value": "Oui",
                          "id_action": 155,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez identifié des fournisseurs capables de vous fournir des matières recyclées pour vos produits.\n\nIdentifier des fournisseurs de matières recyclées est essentiel pour intégrer ces matériaux dans vos produits de manière efficace et fiable. Cela implique de rechercher et d'établir des relations avec des fournisseurs qui partagent votre engagement en matière de durabilité et peuvent fournir des matériaux de haute qualité.\n\nActions possibles :\n\n• Cartographie des fournisseurs : Identifier et évaluer les fournisseurs potentiels de matières recyclées, en tenant compte de leur capacité à fournir des matériaux de haute qualité et certifiés.\n\n• Évaluation des certifications : Vérifier les certifications des fournisseurs pour s'assurer qu'ils respectent les normes de qualité et de durabilité, telles que ISO 14001 ou d'autres certifications pertinentes.\n\n• Collaboration avec les fournisseurs : Établir des partenariats stratégiques avec des fournisseurs pour assurer un approvisionnement stable et fiable en matériaux recyclés.\n\n• Recherche et développement : Collaborer avec les fournisseurs pour développer de nouveaux matériaux recyclés adaptés à vos besoins spécifiques.\n\n• Surveillance des performances : Mettre en place des indicateurs de performance clés (KPI) pour évaluer régulièrement la qualité et la fiabilité des matériaux recyclés fournis.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "826",
                          "value": "Non",
                          "id_action": 155,
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
                      "id": "827",
                      "value": "Avez-vous mis en place des partenariats avec des fournisseurs et/ou éco-organismes pour améliorer l'utilisation de matières recyclées ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "828",
                          "value": "Oui",
                          "id_action": 156,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez établi des partenariats avec des fournisseurs et/ou des éco-organismes pour optimiser l'utilisation de matières recyclées dans vos produits.\n\nÉtablir des partenariats stratégiques avec des fournisseurs et des éco-organismes est crucial pour maximiser l'utilisation de matières recyclées. Ces collaborations permettent de développer de nouvelles solutions, d'améliorer les processus de production et d'assurer un approvisionnement fiable en matériaux durables.\n\nActions possibles :\n\n• Collaboration avec des éco-organismes : Travailler avec des organisations spécialisées dans le recyclage et la gestion des déchets pour améliorer l'efficacité du recyclage et identifier de nouvelles opportunités de matières recyclées.\n\n• Partenariats stratégiques avec les fournisseurs : Établir des relations à long terme avec des fournisseurs qui s'engagent à fournir des matériaux recyclés de haute qualité et certifiés.\n\n• Programmes de recherche et développement : Collaborer avec des partenaires pour innover et développer de nouveaux matériaux recyclés qui répondent aux besoins spécifiques de vos produits.\n\n• Échanges de meilleures pratiques : Participer à des réseaux ou forums pour partager des connaissances et des innovations sur l'utilisation de matières recyclées.\n\n• Certification et standardisation : Travailler avec les partenaires pour obtenir des certifications qui garantissent la qualité et la durabilité des matériaux recyclés utilisés.",
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "829",
                          "value": "Non",
                          "id_action": 156,
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
                      "id": "830",
                      "value": "Avez-vous intégré des plastiques recyclés dans vos produits en vue d'augmenter le taux d'incorporation ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "831",
                          "value": "Oui",
                          "id_action": 157,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez intégré des plastiques recyclés dans vos produits et augmenté le taux d'incorporation de ces matériaux.\n\nIncorporer des plastiques recyclés dans vos produits est une stratégie efficace pour réduire la dépendance aux plastiques vierges et minimiser l'impact environnemental de votre production. L'augmentation du taux d'incorporation de plastiques recyclés démontre un engagement fort envers la durabilité et l'innovation dans le design produit.\n\nActions possibles :\n\n• Analyse des produits : Évaluer la faisabilité d'intégrer des plastiques recyclés dans vos produits existants et identifier de nouvelles opportunités pour utiliser ces matériaux.\n\n• Optimisation du design : Reconcevoir les produits pour inclure une plus grande proportion de plastiques recyclés tout en maintenant la qualité et la performance.\n\n• Collaboration avec les fournisseurs : Travailler avec les fournisseurs pour s'assurer de l'approvisionnement en plastiques recyclés de haute qualité et développer des solutions adaptées à vos besoins.\n\n• Amélioration des processus de fabrication : Adapter les processus de production pour mieux intégrer les plastiques recyclés, y compris la mise à jour des équipements et des techniques de fabrication.\n\n• Suivi des progrès : Mettre en place des indicateurs de performance pour suivre l'augmentation du taux d'incorporation de plastiques recyclés et évaluer les impacts environnementaux.",
                          "children": [
                            {
                              "id": "832",
                              "value": "Quelle  est la part de vos produits contenant du plastique recyclé sur l'ensemble des produits au cours des 12 derniers mois ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                132
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "834",
                          "value": "Non",
                          "id_action": 157,
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
                      "id": "835",
                      "value": "Collaborez-vous avec vos fournisseurs pour sensibiliser, évaluer et encourager l'utilisation de matières recyclées ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "836",
                          "value": "Oui",
                          "id_action": 159,
                          "done": true,
                          "information": "Sélectionnez cette option si vous collaborez activement avec vos fournisseurs pour promouvoir l'utilisation de matières recyclées dans vos produits.\n\nTravailler en étroite collaboration avec vos fournisseurs pour encourager l'utilisation de matières recyclées est essentiel pour créer une chaîne d'approvisionnement plus durable.\nCette approche collaborative permet de sensibiliser les partenaires à l'importance des matériaux recyclés, d'évaluer les possibilités d'intégration et de promouvoir l'innovation dans le développement de produits plus écologiques.\n\nActions possibles :\n\n• Sensibilisation : Organiser des ateliers et des formations pour informer les fournisseurs sur les avantages environnementaux et économiques de l'utilisation de matières recyclées.\n\n• Évaluation des capacités : Collaborer avec les fournisseurs pour évaluer leur capacité à fournir des matériaux recyclés de haute qualité et identifier les opportunités d'amélioration.\n\n• Établissement de critères de durabilité : Définir des critères clairs pour les fournisseurs afin d'encourager l'approvisionnement en matières recyclées certifiées et de haute qualité.\n\n• Co-développement de solutions : Travailler ensemble pour développer des solutions innovantes qui intègrent davantage de matières recyclées, et pour adapter les produits aux nouvelles normes de durabilité.\n\n• Suivi des performances : Mettre en place des indicateurs clés de performance (KPI) pour suivre l'utilisation de matières recyclées et évaluer les progrès réalisés par les fournisseurs.\n\n• Incitations pour l'innovation : Proposer des incitations aux fournisseurs qui développent ou fournissent des matériaux recyclés innovants, afin de stimuler l'adoption et l'amélioration continue.",
                          "children": [
                            {
                              "id": "837",
                              "value": "Quelle proportion de vos fournisseurs avez-vous sensibilisée à l'utilisation de matières recyclées ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                133
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "839",
                          "value": "Non",
                          "id_action": 159,
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
                      "id": "840",
                      "value": "Incorporez-vous des métaux recyclés (comme l'acier et l'aluminium) dans vos produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "841",
                          "value": "Oui",
                          "id_action": 160,
                          "done": true,
                          "information": "Sélectionnez cette option si vous intégrez des métaux recyclés, tels que l'acier et l'aluminium, dans vos produits.\n\nL'incorporation de métaux recyclés dans vos produits est une stratégie efficace pour réduire l'impact environnemental et promouvoir la durabilité. Les métaux recyclés offrent les mêmes propriétés de performance que les métaux vierges tout en nécessitant moins d'énergie et de ressources pour leur production.\n\nActions possibles :\n\n• Évaluation des besoins en matériaux : Analyser les produits pour identifier les opportunités d'intégrer des métaux recyclés sans compromettre la qualité et la durabilité.\n\n• Sourcing responsable : Travailler avec des fournisseurs certifiés qui peuvent garantir la qualité des métaux recyclés et leur conformité aux normes environnementales.\n\n• Optimisation de la conception : Adapter la conception des produits pour maximiser l'utilisation de métaux recyclés, que ce soit dans la structure, les composants ou les finitions.\n\n• Collaboration avec la chaîne d'approvisionnement : Établir des partenariats avec des recycleurs et des fournisseurs pour sécuriser un approvisionnement régulier en métaux recyclés.\n\n• Suivi et reporting : Mettre en place des systèmes pour suivre l'utilisation de métaux recyclés et communiquer ces efforts aux parties prenantes.",
                          "children": [
                            {
                              "id": "842",
                              "value": "Quelle est la part de matériaux recyclés (comme l'acier et l'aluminium) utilisés dans vos produits par rapport au total des matériaux au cours des 12 derniers mois ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                134
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "844",
                          "value": "Non",
                          "id_action": 160,
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
                      "id": "845",
                      "value": "Avez-vous mis en place un recyclage en boucle courte ou interne chez le producteur ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "846",
                          "value": "Oui",
                          "id_action": 161,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez mis en place un système de recyclage en boucle courte ou interne dans votre processus de production.\n\nLe recyclage en boucle courte (ou recyclage interne) consiste à récupérer et réutiliser les matériaux et déchets générés au cours du processus de production au sein de l'entreprise elle-même. Cette approche réduit la dépendance aux matières premières vierges, minimise les déchets et optimise l'utilisation des ressources.\n\nActions possibles :\n\n• Collecte et tri des déchets : Mettre en place des systèmes pour collecter et trier les déchets de production, permettant leur réutilisation immédiate dans le processus de fabrication.\n\n• Technologies de recyclage : Utiliser des technologies avancées pour traiter et recycler les matériaux sur place, comme le broyage, le tri automatisé, et la refonte des matériaux.\n\n• Recyclage des chutes de production : Transformer les chutes de matériaux en matières premières réutilisables pour la production de nouveaux produits ou composants.",
                          "children": [
                            {
                              "id": "847",
                              "value": "Quel est le poids total, en kg,  des matériaux récupérés et recyclés en boucle courte ou interne chez vos producteurs au cours des 12 derniers mois ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                135
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "849",
                          "value": "Non",
                          "id_action": 161,
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
                      "id": "850",
                      "value": "Votre entreprise favorise-t-elle l'utilisation de matières recyclées dans ses emballages ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "851",
                          "value": "Oui",
                          "id_action": 162,
                          "done": true,
                          "information": "Sélectionnez cette option si vous maximisez l'utilisation de matières recyclées dans vos emballages.\n\nL'intégration de matières recyclées dans les emballages est une pratique essentielle pour réduire l'empreinte écologique de vos produits. En utilisant des matériaux recyclés, votre entreprise contribue à la conservation des ressources naturelles, à la réduction des déchets et à la promotion d'une économie circulaire.\n\nActions possibles :\n\n• Conception d'emballages recyclables : Développer des emballages conçus pour être facilement recyclés après usage, en utilisant des matériaux qui peuvent être réintégrés dans le cycle de production.\n\n• Sourcing de matériaux recyclés : Collaborer avec des fournisseurs pour s'approvisionner en papier, carton, plastique, et autres matériaux recyclés certifiés pour vos emballages.\n\n• Innovation dans les matériaux : Explorer des innovations dans les matériaux, comme les bioplastiques recyclés ou les composites de fibres recyclées, pour améliorer la durabilité des emballages.\n\n• Optimisation de la conception : Réduire la quantité de matériau utilisé dans chaque emballage grâce à un design optimisé, tout en maintenant la protection et la fonctionnalité.",
                          "children": [
                            {
                              "id": "852",
                              "value": "Quelle est la part d'emballages composés de matières recyclées ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                136
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "854",
                          "value": "Non",
                          "id_action": 162,
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
                      "id": "855",
                      "value": "Votre entreprise a-t-elle des projets de R&D ou d'innovation visant à intégrer davantage de matières recyclées ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "856",
                          "value": "Oui",
                          "id_action": 163,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez des projets de recherche et développement (R&D) ou d'innovation qui visent à augmenter l'utilisation de matières recyclées dans vos produits.\n\nInvestir dans la R&D pour intégrer davantage de matières recyclées est un moyen efficace de stimuler l'innovation, d'améliorer la durabilité et de répondre aux attentes croissantes des consommateurs pour des produits respectueux de l'environnement. Ces projets peuvent impliquer le développement de nouveaux matériaux, l'optimisation des processus de fabrication et la création de produits innovants.\n\nActions possibles :\n\n• Développement de nouveaux matériaux : Collaborer avec des chercheurs et des experts pour créer de nouveaux matériaux recyclés qui peuvent être utilisés dans vos produits.\n\n• Optimisation des processus de fabrication : Mettre en œuvre des technologies avancées pour intégrer plus efficacement les matières recyclées dans la production.\n\n• Partenariats avec des institutions académiques : Travailler avec des universités et des centres de recherche pour bénéficier de leur expertise en développement durable et matériaux innovants.\n\n• Prototypes et tests : Concevoir et tester des prototypes utilisant des matières recyclées pour évaluer leur performance et identifier les améliorations possibles.",
                          "children": [
                            {
                              "id": "857",
                              "value": "Quel est le nombre de projets de R&D mené par l'entreprise au cours des 12 derniers mois visant à intégrer davantage de matières recyclées dans ses produits ou procédés ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                137
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "859",
                          "value": "Non",
                          "id_action": 163,
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
                  "id": "860",
                  "value": "Limitation des impacts à l'usage",
                  "id_action": null,
                  "done": false,
                  "information": "La conception des produits en vue de limiter les impacts à l'usage se concentre sur la réduction des impacts environnementaux pendant la phase d'utilisation des produits.\n\nCela implique de concevoir des produits qui consomment moins d'énergie et de ressources, produisent moins d'émissions et de déchets et sont plus faciles à entretenir et à réparer.\n\nEn intégrant ces principes d'écoconception, vous améliorez la durabilité des produits et leur attrait pour les consommateurs soucieux de l'environnement.",
                  "children": [
                    {
                      "id": "861",
                      "value": "Vos produits/services sont-ils conçus pourlimiter la consommation d'énergie, d'eau et de consommables durant leur usage ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "862",
                          "value": "Oui",
                          "id_action": 164,
                          "done": true,
                          "information": "Sélectionnez cette option si vos produits sont spécifiquement conçus pour réduire la consommation d'énergie, d'eau et d'autres consommables pendant leur utilisation.\n\nLa conception de produits qui consomment moins de ressources contribue à minimiser leur impact environnemental, tout en offrant des économies d'utilisation aux consommateurs.\n\nActions possibles :\n\n• Conception écoénergétique : Intégrer des technologies et des matériaux qui réduisent la consommation d'énergie, comme l'isolation thermique améliorée ou des composants électroniques à faible consommation.\n\n• Réduction de la consommation d'eau : Développer des systèmes économes en eau, comme des mécanismes de limitation du débit ou des technologies de recyclage de l'eau dans les produits.\n\n• Diminution des consommables : Concevoir des produits qui nécessitent moins de consommables, comme des encres ou des cartouches durables, ou optimiser l'utilisation des matériaux pour réduire les déchets.",
                          "children": [
                            {
                              "id": "863",
                              "value": "Quelle est la part des produits/services conçus pour réduire la consommation de ressources (énergie, eau, consommables) par rapport au total des produits/services conçus ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                138
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "865",
                          "value": "Non",
                          "id_action": 164,
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
                      "id": "866",
                      "value": "Votre entreprise a-t-elle mis en place des actions pour réduire les émissions et rejets durant l'utilisation de ses produits/services ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "867",
                          "value": "Oui",
                          "id_action": 165,
                          "done": true,
                          "information": "Sélectionnez cette option si votre entreprise a pris des mesures pour réduire les émissions de gaz, les rejets liquides ou les résidus solides produits lors de l'utilisation de vos produits.\n\nLimiter ces émissions et rejets est essentiel pour diminuer l'impact environnemental global des produits tout au long de leur cycle de vie.\n\nActions possibles :\n\n• Technologies de réduction des émissions : Intégrer des technologies qui réduisent les émissions de gaz à effet de serre, comme des systèmes de filtration avancés ou des moteurs à faible émission.\n\n• Minimisation des rejets liquides : Concevoir des produits qui réduisent les effluents liquides, par exemple en intégrant des systèmes de purification ou de réutilisation des eaux usées.\n\n• Gestion des résidus solides : Mettre en place des solutions pour réduire, réutiliser ou recycler les résidus solides générés par l'utilisation des produits.\n\n• Suivi et rapport des émissions : Mettre en place des systèmes de suivi pour mesurer les émissions et rejets des produits, et rapporter ces données de manière transparente aux utilisateurs et aux régulateurs.",
                          "children": [
                            {
                              "id": "868",
                              "value": "Veuillez décrire les actions que vous avez mises en place pour réduire les émissions et les rejets durant l'utilisation de vos produits/services :",
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
                          "id": "870",
                          "value": "Non",
                          "id_action": 165,
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
                      "id": "871",
                      "value": "Vos produits/services facilitent-ils les écogestes pour les utilisateurs (économie d'énergie, gestion des déchets, entretien) ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "872",
                          "value": "Oui",
                          "id_action": 166,
                          "done": true,
                          "information": "Sélectionnez cette option si vos produits sont conçus pour encourager et faciliter les écogestes chez les utilisateurs, tels que l'économie d'énergie, la gestion des déchets et un entretien minimal mais efficace.\n\nFavoriser ces pratiques aide à prolonger la durée de vie des produits et à réduire leur impact environnemental.\n\nActions possibles :\n\n• Instructions claires : Fournir des guides d'utilisation détaillés et simples qui expliquent comment économiser l'énergie, gérer les déchets, et entretenir les produits de manière écologique.\n\n• Conception intuitive : Créer des produits faciles à utiliser, qui encouragent naturellement les comportements écologiques, comme des modes économie d'énergie ou des fonctionnalités de gestion automatisée des déchets.\n\n• Technologies intelligentes : Intégrer des technologies qui alertent les utilisateurs sur les actions écologiques à entreprendre, comme des notifications pour le tri des déchets ou l'entretien périodique.\n\n• Partage des meilleures pratiques : Sensibiliser les utilisateurs via des campagnes éducatives ou des plateformes en ligne, où ils peuvent partager leurs expériences et astuces pour utiliser les produits de manière durable.",
                          "children": [
                            {
                              "id": "873",
                              "value": "Veuillez décrire les actions que vous avez mises en place pour faciliter les écogestes chez les utilisateurs :",
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
                          "id": "875",
                          "value": "Non",
                          "id_action": 166,
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
                      "id": "876",
                      "value": "Vos produits sont-ils conçus pour être facilement entretenus par les utilisateurs ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "877",
                          "value": "Oui",
                          "id_action": 167,
                          "done": true,
                          "information": "Sélectionnez cette option si vos produits sont conçus pour être facilement entretenus par les utilisateurs eux-mêmes, prolongeant ainsi leur durée de vie et réduisant la nécessité de remplacements fréquents.\n\nUn entretien facile contribue également à la satisfaction des clients tout en ayant un impact positif sur l'environnement.\n\nActions possibles :\n\n• Manuels d'entretien détaillés : Fournir des guides d'entretien clairs et détaillés qui aident les utilisateurs à entretenir leurs produits sans difficulté.\n\n• Conception modulaire : Développer des produits avec des composants modulaires, facilement remplaçables ou réparables par les utilisateurs.\n\n• Accessibilité des pièces de rechange : Assurer la disponibilité des pièces de rechange, et faciliter leur commande pour les utilisateurs.\n\n• Support en ligne et tutoriels : Offrir un support en ligne avec des tutoriels vidéo, des FAQ et des forums pour aider les utilisateurs à entretenir leurs produits efficacement.",
                          "children": [
                            {
                              "id": "878",
                              "value": "Veuillez décrire les actions que vous avez mises en place pour faciliter l'entretien de vos produits/services par les utilisateurs :",
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
                          "id": "880",
                          "value": "Non",
                          "id_action": 167,
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
                      "id": "881",
                      "value": "Votre entreprise a-t-elle un programme pour sensibiliser les utilisateurs à l'impact environnemental lié à l'utilisation de ses produits/services ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "882",
                          "value": "Oui",
                          "id_action": 168,
                          "done": true,
                          "information": "Sélectionnez cette option si votre entreprise a mis en place un programme de sensibilisation visant à informer les utilisateurs sur l'impact environnemental de l'utilisation de vos produits.\n\nUne bonne sensibilisation peut encourager les utilisateurs à adopter des pratiques plus durables.\n\nActions possibles :\n\n• Campagnes de sensibilisation : Lancer des campagnes de communication pour éduquer les utilisateurs sur les impacts environnementaux et comment les réduire.\n\n• Labels informatifs : Utiliser des labels ou des certifications environnementales sur les produits pour informer les utilisateurs de leur impact écologique.\n\n• Formation et éducation : Offrir des formations en ligne, des ateliers ou des séminaires pour approfondir la compréhension des enjeux environnementaux liés à l'utilisation des produits.\n\n• Collaborations avec des ONG : Travailler avec des organisations environnementales pour créer des programmes de sensibilisation robustes et crédibles.",
                          "children": [
                            {
                              "id": "883",
                              "value": "Veuillez décrire votre programme de sensibilisation visant à informer les utilisateurs sur l'impact environnemental de l'utilisation de vos produits :",
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
                          "id": "885",
                          "value": "Non",
                          "id_action": 168,
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
                  "id": "886",
                  "value": "Écoefficience des procédés de fabrication/distribution/traçabilité",
                  "id_action": null,
                  "done": false,
                  "information": "L'écoefficience des procédés de fabrication, distribution et traçabilité consiste à optimiser l'utilisation des ressources tout en minimisant les impacts environnementaux, un principe clé de l'économie circulaire.\n\nCela implique de réduire les déchets et la consommation d'énergie tout au long du cycle de vie des produits, depuis la production jusqu'à la distribution, en intégrant des pratiques comme l'utilisation de matériaux durables, des processus énergétiquement efficaces et une traçabilité transparente pour garantir un suivi optimisé des flux de matériaux.\n\nCes actions permettent d'augmenter la durabilité des produits et de favoriser la circularité.",
                  "children": [
                    {
                      "id": "887",
                      "value": "Optimisez-vous vos procédés de fabrication pour minimiser les déchets et les chutes de production ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "888",
                          "value": "Oui",
                          "id_action": 169,
                          "done": true,
                          "information": "Sélectionnez cette option si vous optimisez vos procédés de fabrication pour réduire les déchets et les chutes de production.\n\nEn minimisant ces pertes, vous pouvez non seulement réduire les coûts, mais également limiter l'impact environnemental de votre activité.\n\nActions possibles :\n\n• Amélioration continue : Mettre en place des processus d'amélioration continue pour identifier et réduire les sources de déchets dans la production.\n\n• Technologies de précision : Utiliser des technologies de fabrication avancées, telles que la découpe laser ou l'impression 3D, qui réduisent les chutes de matériaux.\n\n•Analyse des flux de production : Réaliser des analyses régulières des flux de production pour identifier les inefficacités et les corriger.\n\n•Formation des employés : Former le personnel à des pratiques de production plus efficaces et à la gestion des ressources pour minimiser les pertes.",
                          "children": [
                            {
                              "id": "889",
                              "value": "Quel est le pourcentage de réduction des déchets et des chutes de production depuis l'optimisation des procédés de fabrication ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                139
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "891",
                          "value": "Non",
                          "id_action": 169,
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
                      "id": "892",
                      "value": "Votre entreprise utilise-t-elle des technologies ou équipements innovants respectueux de l'environnement pour améliorer l'efficacité de sa production ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "893",
                          "value": "Oui",
                          "id_action": 170,
                          "done": true,
                          "information": "Sélectionnez cette option si votre entreprise investit dans des technologies et équipements innovants qui sont respectueux de l'environnement et qui améliorent l'efficacité de la production.\n\nCes innovations peuvent inclure des procédés à faible consommation énergétique, l'utilisation de technologies sans produits chimiques nocifs ou d'autres méthodes visant à réduire l'impact écologique.\n\nActions possibles :\n\n• Adoption de technologies vertes : Intégrer des technologies de production qui réduisent la consommation d'énergie, comme les systèmes de récupération de chaleur ou les équipements à haute efficacité énergétique.\n\n• Procédés sans produits chimiques nocifs : Remplacer les procédés de production utilisant des produits chimiques dangereux par des alternatives plus sûres et écologiques.\n\n• Investissement en R&D : Investir dans la recherche et le développement pour créer ou adopter des technologies de production innovantes à faible impact environnemental.\n\n• Certification environnementale : Obtenir des certifications pour les procédés et équipements, prouvant leur efficacité et leur respect des normes environnementales.",
                          "children": [
                            {
                              "id": "894",
                              "value": "Veuillez décrire les technologies ou équipements innovants que vous utilisez pour améliorer l'efficacité de votre production :",
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
                          "id": "896",
                          "value": "Non",
                          "id_action": 170,
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
                      "id": "897",
                      "value": "Avez-vous mis en place une gestion des stocks efficace pour éviter les excédents et minimiser les gaspillages de matières premières ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "898",
                          "value": "Oui",
                          "id_action": 171,
                          "done": true,
                          "information": "Sélectionnez cette option si votre entreprise met en œuvre une gestion efficace des stocks pour éviter les excédents et minimiser les gaspillages de matières premières.\n\nUne bonne gestion des stocks permet de réduire les coûts et de diminuer l'empreinte environnementale liée à la surproduction et au gaspillage.\n\nActions possibles :\n\n• Prévision de la demande : Utiliser des logiciels de prévision pour ajuster la production en fonction des besoins réels et éviter les surstocks.\n\n• Gestion en flux tendu : Adopter des pratiques de gestion en flux tendu (Just-In-Time) pour aligner les niveaux de stock sur la demande réelle.\n\n• Rotation des stocks : Mettre en place des systèmes pour assurer une rotation optimale des stocks, réduisant ainsi les risques de péremption et de gaspillage.\n\n• Audit régulier des stocks : Réaliser des audits réguliers pour identifier et éliminer les inefficacités dans la gestion des stocks.",
                          "children": [
                            {
                              "id": "899",
                              "value": "Veuillez décrire de quelle façon votre gestion des stocks permet d'éviter les excédents et de minimiser les gaspillages de matières premières :",
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
                          "id": "901",
                          "value": "Non",
                          "id_action": 171,
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
                      "id": "902",
                      "value": "Pratiquez-vous le recyclage interne des déchets de production pour réintégrer les matériaux dans le processus de fabrication ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "903",
                          "value": "Oui",
                          "id_action": 172,
                          "done": true,
                          "information": "Sélectionnez cette option si votre entreprise recycle en interne les déchets de production pour les réintégrer dans le processus de fabrication.\n\nLe recyclage interne des matériaux permet de réduire les coûts de matières premières et de limiter les déchets, contribuant ainsi à une production plus durable.\n\nActions possibles :\n\n• Collecte et tri des déchets : Mettre en place des systèmes efficaces de collecte et de tri des déchets de production pour faciliter leur réutilisation.\n\n• Technologies de recyclage : Investir dans des technologies qui permettent de traiter et de recycler les matériaux directement sur le site de production.\n\n• Formation des employés : Former le personnel sur les procédures de recyclage interne et l'importance de minimiser les déchets.\n\n• Utilisation des matériaux recyclés : Intégrer les matériaux recyclés dans la fabrication de nouveaux produits, garantissant ainsi un cycle de production plus circulaire.",
                          "children": [
                            {
                              "id": "904",
                              "value": "Veuillez décrire les actions que vous avez mises en place pour recycler les déchets de production et réintégrer les matériaux dans votre processus de fabrication :",
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
                          "id": "906",
                          "value": "Non",
                          "id_action": 172,
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
                      "id": "907",
                      "value": "Avez-vous recours à des logiciels de simulation pour réduire les déchets, diminuer les coûts et optimiser l'utilisation des ressources dans votre production ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "908",
                          "value": "Oui",
                          "id_action": 173,
                          "done": true,
                          "information": "Sélectionnez cette option si votre entreprise utilise des logiciels de simulation pour optimiser la production, réduire les déchets et les coûts.\n\nCes outils permettent de modéliser et d'optimiser les processus avant la mise en production réelle, réduisant ainsi les inefficacités et les erreurs.\n\nActions possibles :\n\n• Simulation des processus : Utiliser des logiciels de simulation pour modéliser les processus de production, identifier les goulots d'étranglement et prévoir les déchets potentiels.\n\n• Optimisation des ressources : Mettre en œuvre des simulations pour optimiser l'utilisation des matières premières et réduire les pertes.\n\n• Réduction des coûts : Utiliser les résultats des simulations pour ajuster les processus de production en vue de réduire les coûts opérationnels.",
                          "children": [
                            {
                              "id": "909",
                              "value": "Veuillez décrire les logiciels de simulation que vous utilisez et expliquer comment ils contribuent à réduire les déchets, diminuer les coûts et optimiser l'utilisation des ressources dans votre production :",
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
                          "id": "911",
                          "value": "Non",
                          "id_action": 173,
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
                  "id": "912",
                  "value": "Analyse du Cycle de Vie (ACV)",
                  "id_action": null,
                  "done": false,
                  "information": "L'Analyse du Cycle de Vie (ACV) est un outil clé de l'économie circulaire, permettant d'évaluer l'impact environnemental d'un produit ou service à chaque étape de son cycle de vie, de l'extraction des matières premières à la fin de vie.\n\nElle aide à identifier les opportunités de réduction de l'empreinte écologique, d'optimisation de l'utilisation des ressources et de minimisation des déchets, contribuant ainsi à une gestion plus durable et circulaire des matériaux.",
                  "children": [
                    {
                      "id": "913",
                      "value": "Avez-vous mis en place une Analyse de Cycle de Vie (ACV) sur une partie ou la totalité de vos produits ?",
                      "id_action": null,
                      "information": "Sélectionnez cette option si votre entreprise a mis en place une Analyse de Cycle de Vie (ACV) pour évaluer l'impact environnemental de tout ou partie de vos produits.\n\nL'ACV est un outil essentiel qui permet de mesurer les impacts environnementaux à chaque étape du cycle de vie d'un produit, de l'extraction des matières premières à la fin de vie, en passant par la fabrication, la distribution et l'utilisation.\n\nCette analyse fournit une vision complète et objective, aidant à identifier les points critiques où des améliorations peuvent être apportées pour réduire l'empreinte écologique.",
                      "children": [
                        {
                          "id": "914",
                          "value": "Oui",
                          "id_action": 174,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "915",
                              "value": "Quelle part de vos produits/services a fait l'objet d'une Analyse de Cycle de Vie ?",
                              "id_action": null,
                              "information": null,
                              "children": [
                                {
                                  "id": "916",
                                  "value": "Plus de 75 % de nos produits ou services",
                                  "id_action": null,
                                  "done": false,
                                  "information": null,
                                  "children": [],
                                  "type": "reponse",
                                  "id_kpis": [
                                    140
                                  ]
                                },
                                {
                                  "id": "917",
                                  "value": "De 51 % à 75 % de nos produits ou services",
                                  "id_action": null,
                                  "done": false,
                                  "information": null,
                                  "children": [],
                                  "type": "reponse",
                                  "id_kpis": [
                                    141
                                  ]
                                },
                                {
                                  "id": "918",
                                  "value": "De 26 % à 50 % de nos produits ou services",
                                  "id_action": null,
                                  "done": false,
                                  "information": null,
                                  "children": [],
                                  "type": "reponse",
                                  "id_kpis": [
                                    142
                                  ]
                                },
                                {
                                  "id": "919",
                                  "value": "De 1 % à 25 % de nos produits ou services",
                                  "id_action": null,
                                  "done": false,
                                  "information": null,
                                  "children": [],
                                  "type": "reponse",
                                  "id_kpis": [
                                    143
                                  ]
                                }
                              ],
                              "type": "question",
                              "inputType": "single"
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "920",
                          "value": "Non",
                          "id_action": 174,
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
                  "id": "921",
                  "value": "Fin de vie des produits/services",
                  "id_action": null,
                  "done": false,
                  "information": "La fin de vie des produits/services dans le cadre de l'économie circulaire concerne la gestion des produits après leur utilisation, en minimisant les déchets et en maximisant la récupération des matériaux.\n\nCela inclut le recyclage, le réemploi, la réparation et la valorisation des composants pour éviter l'enfouissement et favoriser une réintégration dans le cycle de production. \n\nOptimiser cette phase permet de prolonger la durée de vie des ressources et de réduire l'impact environnemental global.",
                  "children": [
                    {
                      "id": "922",
                      "value": "Vos produits sont-ils conçus pour être recyclables ou compostables à la fin de leur cycle de vie ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "923",
                          "value": "Oui",
                          "id_action": 175,
                          "done": true,
                          "information": "Sélectionnez cette option si vos produits sont spécifiquement conçus pour être recyclés ou compostés à la fin de leur cycle de vie.\n\nLa conception en vue du recyclage ou du compostage permet de réduire les déchets envoyés en décharge et de récupérer des matériaux précieux, contribuant ainsi à une économie circulaire.\n\nActions possibles :\n\n• Matériaux recyclables : Utiliser des matériaux facilement recyclables dans la conception de vos produits pour garantir leur valorisation en fin de vie.\n\n• Matériaux compostables : Intégrer des matériaux compostables dans les produits où cela est pertinent, notamment pour les produits à usage unique ou les emballages.\n\n• Design pour le démantèlement : Concevoir des produits qui peuvent être facilement démontés pour permettre une séparation efficace des matériaux recyclables et compostables.\n\n• Certification de recyclabilité : Obtenir des certifications pour vos produits qui attestent de leur recyclabilité ou compostabilité.",
                          "children": [
                            {
                              "id": "924",
                              "value": "Veuillez préciser la part de vos produits qui est conçue pour être recyclable ou compostable à la fin de leur cycle de vie :",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                144
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "926",
                          "value": "Non",
                          "id_action": 175,
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
                      "id": "927",
                      "value": "Utilisez-vous des étiquetages clairs sur les emballages pour indiquer comment trier correctement les matériaux ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "928",
                          "value": "Oui",
                          "id_action": 176,
                          "done": true,
                          "information": "Sélectionnez cette option si vous utilisez des étiquetages clairs sur vos emballages pour guider les consommateurs sur la manière correcte de trier et de recycler les matériaux.\n\nDes instructions claires aident à améliorer les taux de recyclage et à réduire les erreurs de tri, contribuant ainsi à une gestion des déchets plus efficace.\n\nActions possibles :\n\n• Étiquetage informatif : Ajouter des instructions explicites sur les emballages pour indiquer les consignes de tri spécifiques pour chaque matériau.\n\n• Utilisation de symboles : Incorporer des symboles universels de recyclage ou de compostage pour faciliter la reconnaissance par les consommateurs.\n\n• Communication éducative : Développer des campagnes de sensibilisation qui expliquent l'importance du tri correct des matériaux et l'impact de ces actions sur l'environnement.\n\n• Collaboration avec les filières de recyclage : Travailler avec les autorités locales et les filières de recyclage pour s'assurer que les étiquetages sont conformes aux systèmes de tri locaux.",
                          "children": [
                            {
                              "id": "929",
                              "value": "Quelle part de vos produits bénéficie d'étiquetages clairs indiquant comment trier les matériaux ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                145
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "931",
                          "value": "Non",
                          "id_action": 176,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "932",
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
                      "id": "933",
                      "value": "Avez-vous mis en place des systèmes de consigne pour encourager la récupération des emballages ou des produits ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "934",
                          "value": "Oui",
                          "id_action": 177,
                          "done": true,
                          "information": "Sélectionnez cette option si vous avez mis en place des systèmes de consigne pour encourager la récupération des emballages ou des produits en fin de vie.\n\nLes systèmes de consigne incitent les consommateurs à retourner les emballages ou produits usagés en échange d'une compensation, facilitant ainsi leur recyclage ou réutilisation.\n\nActions possibles :\n\n• Mise en place de consignes : Introduire un système de consigne pour les emballages ou les produits, permettant aux clients de les retourner en échange d'un remboursement ou d'une remise.\n\n• Partenariats pour la collecte : Collaborer avec des points de vente ou des centres de collecte pour faciliter la récupération des produits consignés.\n\n• Communication sur les avantages : Sensibiliser les consommateurs aux avantages environnementaux et économiques de la consigne pour augmenter les taux de retour.\n\n• Réutilisation des matériaux : Intégrer les matériaux récupérés grâce aux consignes dans votre chaîne de production pour réduire l'utilisation de nouvelles ressources.",
                          "children": [
                            {
                              "id": "935",
                              "value": "Quelle est la part des produits pour lesquels vous avez mis en place des systèmes de consigne afin d'encourager la récupération des emballages ou des produits ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [
                                146
                              ]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "937",
                          "value": "Non",
                          "id_action": 177,
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
                      "id": "938",
                      "value": "Votre entreprise participe-t-elle au financement de filières de recyclage, telles que l'éco-contribution ou les consignes ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "939",
                          "value": "Oui",
                          "id_action": 178,
                          "done": true,
                          "information": "Sélectionnez cette option si votre entreprise contribue au financement des filières de recyclage, par exemple par le biais de l'éco-contribution ou de systèmes de consignes.\n\nLe soutien financier à ces filières est essentiel pour assurer le recyclage efficace des produits en fin de vie et pour encourager une gestion durable des ressources.\n\nActions possibles :\n\n• Éco-contribution : Participer à des programmes d'éco-contribution qui financent le recyclage des produits en fin de vie.\n\n• Soutien aux consignes : Contribuer financièrement à des systèmes de consigne pour améliorer les taux de retour des produits et emballages.\n\n• Partenariats avec les recycleurs : Travailler avec des entreprises de recyclage pour cofinancer des initiatives de récupération et de traitement des déchets.\n\n• Transparence sur les contributions : Communiquer de manière transparente sur votre participation financière à ces filières pour renforcer votre engagement en faveur du recyclage.",
                          "children": [
                            {
                              "id": "940",
                              "value": "Veuillez préciser à quelle(s) filière(s) de recyclage votre entreprise participe :",
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
                          "id": "942",
                          "value": "Non",
                          "id_action": 178,
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
                      "id": "943",
                      "value": "Votre entreprise a-t-elle mis en place des systèmes de logistique inverse pour faciliter la récupération et le recyclage des produits usagés de ses clients ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "944",
                          "value": "Oui",
                          "id_action": 179,
                          "done": true,
                          "information": "Sélectionnez cette option si votre entreprise a mis en place des systèmes de logistique inverse pour faciliter la récupération et le recyclage des produits usagés de vos clients.\n\nLa logistique inverse est une approche qui permet de récupérer les produits à la fin de leur vie utile, réduisant ainsi les déchets et maximisant la réutilisation des matériaux.\n\nActions possibles :\n\n• Réseaux de collecte : Mettre en place des réseaux de collecte pour récupérer les produits usagés directement auprès des clients.\n\n• Retour gratuit : Offrir des options de retour gratuit pour encourager les clients à retourner leurs produits en fin de vie pour le recyclage.\n\n• Partenariats logistiques : Collaborer avec des prestataires de services logistiques spécialisés pour assurer un retour efficace et durable des produits.\n\n• Suivi et traçabilité : Implémenter des systèmes de suivi pour gérer les retours et vous ssurer que les produits récupérés sont bien recyclés ou réutilisés.",
                          "children": [
                            {
                              "id": "945",
                              "value": "Veuillez préciser le(s) système(s) de logistique inverse que votre entreprise a mis en place pour faciliter la récupération et le recyclage des produits usagés de ses clients :",
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
                          "id": "947",
                          "value": "Non",
                          "id_action": 179,
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
                      "id": "948",
                      "value": "Autre(s)",
                      "id_action": null,
                      "done": false,
                      "information": null,
                      "children": [
                        {
                          "id": "949",
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
                  "id": "951",
                  "value": "Autres principes d'écoconception",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "952",
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
          "id": "954",
          "value": "Non",
          "id_action": 180,
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
      "id": "955",
      "value": "Votre entreprise est-elle engagée dans des initiatives d'écologie industrielle et territoriale ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "L'écologie industrielle et territoriale vise à créer des synergies entre les entreprises et les acteurs locaux pour optimiser l'utilisation des ressources, réduire les impacts environnementaux et favoriser une économie circulaire à l'échelle locale ou régionale.",
      "children": [
        {
          "id": "956",
          "value": "Oui",
          "id_action": 183,
          "done": true,
          "information": "Sélectionnez cette option si votre entreprise participe à des initiatives d'écologie industrielle et territoriale.\n\nActions possibles :\n\n• Participation à des réseaux locaux : Rejoindre des réseaux ou clusters locaux dédiés à l'écologie industrielle pour collaborer avec d'autres acteurs du territoire.\n\n• Projets de mutualisation : Engager des projets de mutualisation des ressources (eau, énergie, matières premières) avec d'autres entreprises pour maximiser l'efficacité et réduire les coûts.\n\n• Échanges de sous-produits : Mettre en place des systèmes d'échange de sous-produits industriels avec d'autres entreprises pour réutiliser des matériaux qui seraient autrement considérés comme des déchets.\n\n• Contribution aux initiatives territoriales : Collaborer avec les autorités locales pour développer des initiatives d'écologie industrielle qui profitent à l'ensemble de la communauté.",
          "children": [
            {
              "id": "957",
              "value": "Votre entreprise valorise-t-elle les excédents de stock et les chutes de production pour réduire le gaspillage ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "958",
                  "value": "Oui",
                  "id_action": 181,
                  "done": true,
                  "information": "Sélectionnez cette option si votre entreprise valorise les excédents de stock et les chutes de production pour réduire le gaspillage.\n\nLa valorisation des excédents et des chutes permet de réintégrer ces matériaux dans la production ou de les transformer en nouvelles ressources, contribuant ainsi à une gestion plus durable des ressources.\n\nActions possibles :\n\n• Réutilisation interne : Réintégrer les excédents de stock et les chutes de production dans vos processus de fabrication pour minimiser le besoin en nouvelles matières premières.\n\n• Transformation en nouveaux produits : Développer des solutions pour transformer les chutes de production en nouveaux produits ou matériaux vendables.\n\n• Vente des excédents : Mettre en place des canaux de vente ou de don pour les excédents de stock, évitant ainsi leur mise au rebut.\n\n• Collaboration avec des recycleurs : Travailler avec des entreprises de recyclage pour valoriser les chutes de production qui ne peuvent pas être réutilisées en interne.",
                  "children": [
                    {
                      "id": "959",
                      "value": "Quel(s) type(s) d'excédents ou de chutes valorisez-vous ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "960",
                          "value": "Produits finis non vendus",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "961",
                          "value": "Matériaux ou composants inutilisés",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "962",
                          "value": "Produits proches de la date d'expiration",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "963",
                          "value": "Chutes de production (ex : morceaux de tissus, copeaux de bois)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "964",
                          "value": "Autre(s)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "965",
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
                      "id": "967",
                      "value": "A qui bénéficient ces matériaux ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "968",
                          "value": "Utilisation en interne pour créer de nouveaux produits",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "969",
                          "value": "Dons (ou ventes avec réductions) aux salariés",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "970",
                          "value": "Entreprises de recyclage",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "971",
                          "value": "Artisans ou créateurs locaux",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "972",
                          "value": "Écoles ou centres éducatifs",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "973",
                          "value": "Associations caritatives",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "974",
                          "value": "Autre",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "975",
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
                  "id": "977",
                  "value": "Non",
                  "id_action": 181,
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
              "id": "978",
              "value": "Votre entreprise collabore-t-elle avec d'autres entreprises pour partager des ressources, des technologies ou des infrastructures dans le cadre de projets d'économie circulaire ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "979",
                  "value": "Oui",
                  "id_action": 182,
                  "done": true,
                  "information": "Sélectionnez cette option si votre entreprise collabore avec d'autres entreprises pour partager des ressources, des technologies ou des infrastructures dans le cadre de projets d'économie circulaire.\n\nLa collaboration inter-entreprises est essentielle pour maximiser l'efficacité des ressources, réduire les coûts et développer des solutions innovantes qui profitent à tous les participants.\n\nActions possibles :\n\n• Partage d'infrastructures : Partager des infrastructures (telles que des installations de traitement de déchets ou des systèmes de distribution d'énergie) avec d'autres entreprises pour améliorer l'efficience et réduire l'impact environnemental.\n\n• Mutualisation des technologies : Collaborer avec d'autres entreprises pour co-développer ou partager des technologies qui améliorent l'efficience des processus industriels.\n\n• Échanges de matières premières : Mettre en place des systèmes d'échange ou de vente de matières premières secondaires issues de la production entre entreprises partenaires.\n\n• Développement de projets communs : Participer à des projets d'économie circulaire avec d'autres entreprises, comme la création de boucles locales de valorisation des déchets ou l'élaboration de produits éco-conçus en commun.",
                  "children": [
                    {
                      "id": "980",
                      "value": "Quels types de ressources partagez-vous avec d'autres entreprises ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "981",
                          "value": "Équipements de production",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "982",
                          "value": "Espaces ou infrastructures",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "983",
                          "value": "Technologies ou savoir-faire",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "984",
                          "value": "Logistique ou transport",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "985",
                          "value": "Autre",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "986",
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
                  "id": "988",
                  "value": "Non",
                  "id_action": 182,
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
          "id": "989",
          "value": "Non",
          "id_action": 183,
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
      "id": "990",
      "value": "Votre entreprise propose-t-elle des solutions pour participer à l'économie de la fonctionnalité ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "L'économie de la fonctionnalité privilégie l'usage d'un produit ou d'un service plutôt que sa possession, en mettant l'accent sur la performance et l'optimisation des ressources.\n\nCe modèle permet de réduire la consommation de matières premières, d'augmenter la durée de vie des produits, et de minimiser les déchets en favorisant des services tels que la location, la maintenance et le partage.",
      "children": [
        {
          "id": "991",
          "value": "Oui",
          "id_action": 191,
          "done": true,
          "information": "Sélectionnez cette option si votre entreprise propose des solutions qui s'inscrivent dans l'économie de la fonctionnalité.\n\nTypes d'actions possibles :\n\n• Offre de services plutôt que de produits : Développer des modèles économiques basés sur la fourniture de services (location, abonnement, maintenance) plutôt que sur la vente de produits.\n\n• Solutions de partage ou de mutualisation : Proposer des plateformes ou des solutions de partage de ressources, comme la mise à disposition de matériel en commun ou l'accès à des services partagés.\n\n• Modèles d'abonnement : Introduire des modèles d'abonnement où les clients paient pour l'usage d'un produit plutôt que pour son achat, avec des options de mise à niveau ou de remplacement.\n\n• Innovation dans les services : Innover en proposant des services qui répondent aux besoins spécifiques des clients tout en favorisant l'efficience des ressources, comme des solutions personnalisées basées sur les données d'utilisation.",
          "children": [
            {
              "id": "992",
              "value": "Votre entreprise propose-t-elle un système de location ou leasing pour ses produits comme alternative à l'achat ?",
              "id_action": null,
              "information": "Proposer un système de location ou de leasing pour vos produits permet aux clients de bénéficier des avantages de vos produits sans avoir à en assumer la propriété complète. Par exemple, vous pouvez louer des machines à café aux cafés ou des équipements industriels aux entreprises, ce qui leur permet de bénéficier des produits sans les coûts initiaux élevés.\n\n• Bénéfices pour l'entreprise :\n\n• Fidélisation et revenus récurrents : les systèmes de location ou leasing créent une relation continue avec vos clients, générant des revenus récurrents. Cela peut améliorer la prévisibilité des revenus et augmenter la fidélisation des clients.\n• Accès à un marché plus large : offrir la location rend vos produits accessibles à des clients qui ne peuvent pas se permettre de les acheter directement, augmentant ainsi votre base de clientèle.\n\n• Impact environnemental :\n\n• Réduction des déchets : les produits loués sont souvent mieux entretenus et réparés, ce qui prolonge leur durée de vie et réduit le besoin de remplacement fréquent.\n• Utilisation efficace des ressources : en encourageant le partage et la réutilisation des produits, vous réduisez la consommation de ressources pour la fabrication de nouveaux produits.",
              "children": [
                {
                  "id": "993",
                  "value": "Oui",
                  "id_action": 184,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "994",
                  "value": "Non",
                  "id_action": 184,
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
              "id": "995",
              "value": "Votre entreprise favorise-t-elle la vente de l'usage ou propose-t-elle des services basés sur la performance où les clients payent pour le résultat plutôt que pour le produit lui-même ?",
              "id_action": null,
              "information": "Favoriser la vente de l'usage ou proposer des services basés sur la performance signifie que vos clients paient pour l'accès ou les résultats obtenus plutôt que pour posséder le produit. Cela peut inclure des modèles où les clients payent en fonction de l'usage ou des résultats obtenus.\n\nPar exemple, un fournisseur de solutions énergétiques pourrait facturer en fonction des économies d'énergie réalisées par le client, ou une entreprise de nettoyage pourrait facturer par la propreté mesurée ou l'état final plutôt que par le nombre d'heures travaillées.\n\nBénéfices pour l'entreprise :\n\n• Alignement avec les résultats clients : en basant votre modèle économique sur la performance, vous vous alignez sur les objectifs de vos clients, ce qui peut renforcer la confiance et la satisfaction.\n\n• Potentiel de marges plus élevées : les modèles basés sur la performance peuvent souvent justifier des marges plus élevées, car ils démontrent directement la valeur ajoutée de votre produit ou service.\n\n• Réduction de la consommation : en vendant l'usage, vous optimisez l'utilisation des ressources, ce qui peut réduire la production et, par conséquent, l'empreinte carbone.\n\n• Efficacité des ressources : ce modèle incite à concevoir des produits et services qui maximisent l'efficacité et minimisent les déchets, contribuant ainsi à une économie plus durable.",
              "children": [
                {
                  "id": "996",
                  "value": "Oui",
                  "id_action": 185,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "997",
                  "value": "Non",
                  "id_action": 185,
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
              "id": "998",
              "value": "Avez-vous mis en place des systèmes de produits-services (PSS) où vous intégrez des services de maintenance, de réparation ou de mise à jour avec vos produits ?",
              "id_action": null,
              "information": "Les systèmes de produits-services (PSS) combinent la vente de produits avec des services complémentaires tels que la maintenance, la réparation et la mise à jour.\n\nPar exemple, une entreprise de photocopieurs pourrait proposer des contrats de service qui incluent la réparation et l'entretien réguliers, garantissant ainsi le bon fonctionnement des machines.\n\n• Bénéfices pour l'entreprise :\n\n• Revenus continus : en offrant des services supplémentaires, vous générez des revenus récurrents tout en renforçant les relations client.\n• Fidélisation accrue : les clients bénéficient de la tranquillité d'esprit en sachant que leurs produits seront entretenus et réparés si nécessaire, ce qui peut les inciter à rester fidèles à votre marque.\n\n• Impact environnemental :\n\n• Prolongation de la durée de vie des produits : en maintenant et en réparant les produits, vous réduisez le besoin de remplacement, ce qui minimise la production de nouveaux produits et les déchets associés.\n• Réduction de l'empreinte carbone : en encourageant la réparation et l'entretien, vous réduisez l'impact environnemental lié à la fabrication de nouveaux produits.",
              "children": [
                {
                  "id": "999",
                  "value": "Oui",
                  "id_action": 186,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "1000",
                  "value": "Non",
                  "id_action": 186,
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
              "id": "1001",
              "value": "Votre entreprise propose-t-elle des abonnements qui donnent accès à vos produits ou services sur une base régulière ?",
              "id_action": null,
              "information": "Proposer des abonnements pour vos produits ou services permet aux clients d'accéder régulièrement à vos offres sans avoir à les acheter directement.\n\nPar exemple, des entreprises de logiciels offrent des abonnements mensuels qui incluent des mises à jour et un support technique ou des entreprises de meubles qui proposent des abonnements pour des meubles modulables.\n\nBénéfices pour l'entreprise :\n\n• Revenus récurrents : les abonnements génèrent un flux constant de revenus et permettent une planification financière plus précise.\n\n• Engagement client : les abonnements favorisent un engagement client continu, car les clients ont un accès régulier à vos produits ou services.\n\n• Réduction de la production : en encourageant l'utilisation continue des produits existants plutôt que l'achat de nouveaux, vous réduisez la demande de production et les déchets associés.\n\n• Optimisation des ressources : les abonnements permettent une meilleure gestion des ressources et minimisent l'empreinte environnementale.",
              "children": [
                {
                  "id": "1002",
                  "value": "Oui",
                  "id_action": 187,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "1003",
                  "value": "Non",
                  "id_action": 187,
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
              "id": "1004",
              "value": "Votre entreprise conçoit-elle des produits qui offrent des usages multiples, permettant plusieurs fonctions ou applications avec le même produit ?",
              "id_action": null,
              "information": "Concevoir des produits qui offrent des usages multiples signifie créer des produits qui peuvent être utilisés pour différentes fonctions ou applications.\n\nPar exemple, une lampe de bureau qui sert également de station de charge pour les appareils électroniques ou une table qui peut se transformer en bureau.\n\nBénéfices pour l'entreprise :\n\n• Augmentation de la valeur perçue : les produits polyvalents attirent les clients qui recherchent des solutions pratiques et innovantes, augmentant ainsi la valeur perçue de vos offres.\n\n• Réduction des coûts : en offrant plusieurs fonctions dans un seul produit, vous pouvez réduire les coûts de production et de stockage.\n\n• Réduction des déchets : en utilisant un produit pour plusieurs usages, vous diminuez la nécessité d'acheter plusieurs produits, ce qui réduit les déchets et l'empreinte écologique.\n\n• Utilisation efficace des matériaux : concevoir des produits multifonctionnels optimise l'utilisation des matériaux, contribuant ainsi à la durabilité.",
              "children": [
                {
                  "id": "1005",
                  "value": "Oui",
                  "id_action": 188,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "1006",
                  "value": "Non",
                  "id_action": 188,
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
              "id": "1007",
              "value": "Votre entreprise propose-t-elle des produits qui sont conçus pour être partagés entre plusieurs usagers, permettant ainsi une utilisation collective ou successive ?",
              "id_action": null,
              "information": "Proposer des produits conçus pour être partagés signifie qu'ils peuvent être utilisés par plusieurs personnes, souvent de manière collective ou successive.\n\nCela inclut des modèles de partage comme les vélos partagés, les outils de bricolage en commun ou les espaces de coworking.\n\nBénéfices pour l'entreprise :\n\n• Élargissement de la base de clients : en rendant les produits accessibles à plusieurs utilisateurs, vous atteignez un public plus large et diversifié.\n\n• Engagement communautaire : les produits partagés peuvent favoriser un sentiment de communauté et de collaboration entre les utilisateurs.\n\n• Réduction de la consommation : en partageant les produits, vous réduisez le besoin de production de nouveaux produits, ce qui diminue l'impact environnemental global.\n\n• Efficacité des ressources : les produits partagés optimisent l'utilisation des ressources et prolongent la durée de vie des produits.",
              "children": [
                {
                  "id": "1008",
                  "value": "Oui",
                  "id_action": 189,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "1009",
                  "value": "Non",
                  "id_action": 189,
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
              "id": "1010",
              "value": "Avez-vous mis en place des solutions flexibles qui permettent de personnaliser vos produits ou services selon les besoins de vos clients ?",
              "id_action": null,
              "information": "Mettre en place des solutions flexibles pour la personnalisation permet à vos clients d'adapter vos produits ou services à leurs besoins spécifiques.\nCela peut inclure des options comme la couleur, le matériau ou des fonctionnalités supplémentaires dans des produits tels que les meubles, les appareils électroniques ou même les services numériques.\n\nPar exemple, un fabricant de meubles pourrait offrir la possibilité de personnaliser la couleur et le tissu des canapés pour correspondre au décor de la maison d'un client.\n\n• Bénéfices pour l'entreprise :\n\n• Satisfaction client accrue : la personnalisation permet de répondre directement aux attentes des clients, augmentant ainsi leur satisfaction et leur fidélité. Les clients apprécient les produits qui répondent précisément à leurs besoins, ce qui peut conduire à des taux de fidélisation plus élevés et à des recommandations positives.\n\n• Différenciation sur le marché : en offrant des produits personnalisables, vous vous démarquez de la concurrence en proposant des solutions uniques que vos concurrents pourraient ne pas avoir. Cela peut également justifier des prix plus élevés en raison de la valeur ajoutée perçue par les clients.\n\n• Augmentation des ventes et des marges : la personnalisation peut créer des opportunités de vente incitative, où les clients choisissent des options supplémentaires ou des fonctionnalités premium, augmentant ainsi le panier moyen et les marges bénéficiaires.\n\n• Impact environnemental :\n\n• Réduction du gaspillage : en produisant exactement ce que les clients désirent, la personnalisation réduit la production de produits invendus ou obsolètes, minimisant ainsi le gaspillage.\n\n• Utilisation efficace des ressources : en adaptant la production aux demandes spécifiques, l'entreprise utilise ses ressources de manière plus ciblée et responsable, ce qui peut contribuer à une empreinte carbone réduite.\n\n• Encouragement à une consommation responsable : en offrant des produits sur mesure, les clients sont encouragés à acheter des articles qui leur conviennent parfaitement, réduisant ainsi le besoin de remplacer fréquemment les produits.",
              "children": [
                {
                  "id": "1011",
                  "value": "Oui",
                  "id_action": 190,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1012",
                      "value": "Veuillez préciser les solutions flexibles que vous avez mises en place pour permettre la personnalisation de vos produits ou services selon les besoins de vos clients :",
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
                  "id": "1014",
                  "value": "Non",
                  "id_action": 190,
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
          "id": "1015",
          "value": "Non",
          "id_action": 191,
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
      "id": "1016",
      "value": "Votre entreprise encourage t-elle une consommation durable et responsable ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "Sélectionnez cette option si votre entreprise met en place des initiatives pour promouvoir une consommation durable et responsable auprès de ses clients.\n\nEncourager une consommation durable signifie sensibiliser les consommateurs à l'impact environnemental de leurs choix, leur offrir des produits et services qui respectent l'environnement et les inciter à adopter des comportements d'achat plus conscients.",
      "children": [
        {
          "id": "1017",
          "value": "Oui",
          "id_action": 197,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "1018",
              "value": "L'entreprise communique t-elle publiquement des informations sur l'origine de ses matériaux ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise fournit des informations transparentes sur l'origine des matériaux utilisés dans ses produits.\n\nConnaître l'origine des matériaux permet aux consommateurs de faire des choix éclairés, en privilégiant les produits issus de sources durables, éthiques et respectueuses de l'environnement.\n\nActions possibles :\n\n• Transparence sur l'origine : Communiquer clairement l'origine géographique des matériaux sur les produits ou leur emballage.\n\n• Labels et certifications : Obtenir des certifications qui garantissent l'origine durable et éthique des matériaux utilisés, comme les labels biologiques, fair trade ou FSC.\n\n• Documentation en ligne : Fournir des informations détaillées en ligne sur l'origine des matériaux, incluant des histoires, des vidéos ou des témoignages de producteurs locaux.\n\n• Communication proactive : Sensibiliser les consommateurs à l'importance de l'origine des matériaux par des campagnes de communication et des partenariats éducatifs.",
              "children": [
                {
                  "id": "1019",
                  "value": "Oui",
                  "id_action": 192,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "1020",
                  "value": "Non",
                  "id_action": 192,
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
              "id": "1021",
              "value": "L'entreprise communique-t-elle sur la traçabilité de ses fournisseurs tout au long de la chaîne d'approvisionnement ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise communique activement sur la traçabilité de ses fournisseurs tout au long de la chaîne d'approvisionnement.\n\nLa traçabilité garantit que chaque étape de la production est transparente et conforme aux standards éthiques et environnementaux, renforçant ainsi la confiance des consommateurs.\n\nActions possibles :\n\n• Chaîne d'approvisionnement transparente : Publier des informations sur vos fournisseurs et sur les pratiques mises en place pour garantir une chaîne d'approvisionnement durable.\n\n• Cartographie des fournisseurs : Créer des cartes interactives en ligne montrant l'emplacement des principaux fournisseurs et les étapes de transformation des matériaux.\n\n• Audits et certifications : Réaliser des audits réguliers de la chaîne d'approvisionnement pour assurer la conformité aux normes environnementales et sociales.\n\n• Communication sur la traçabilité : Utiliser des QR codes ou des numéros de lot sur les produits pour permettre aux consommateurs de suivre l'origine des matériaux et les conditions de production.",
              "children": [
                {
                  "id": "1022",
                  "value": "Oui",
                  "id_action": 193,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "1023",
                  "value": "Non",
                  "id_action": 193,
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
              "id": "1024",
              "value": "Offrez-vous des réductions ou avantages à vos clients pour les encourager à revendre ou donner leurs anciens produits au lieu de les jeter ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise offre des réductions ou des avantages pour inciter les clients à revendre ou donner leurs anciens produits plutôt que de les jeter.\n\nCette approche soutient la consommation durable en prolongeant la durée de vie des produits et en réduisant les déchets.\n\nActions possibles :\n\n• Programmes de reprise : Mettre en place des programmes de reprise où les clients peuvent retourner leurs anciens produits en échange de réductions sur de nouveaux achats.\n\n• Partenariats avec des associations : Collaborer avec des associations caritatives pour faciliter le don des produits usagés en échange d'avantages pour les clients.\n\n• Incitations à la revente : Offrir des incitations financières ou des crédits d'achat pour les clients qui revendent leurs produits via votre plateforme ou vos partenaires.\n\n• Campagnes de sensibilisation : Lancer des campagnes pour sensibiliser les consommateurs aux avantages environnementaux et économiques de la revente ou du don de produits.",
              "children": [
                {
                  "id": "1025",
                  "value": "Oui",
                  "id_action": 194,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1026",
                      "value": "Veuillez préciser les réductions ou avantages que vous offrez à vos clients pour les encourager à revendre ou donner leurs anciens produits au lieu de les jeter :",
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
                  "id": "1028",
                  "value": "Non",
                  "id_action": 194,
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
              "id": "1029",
              "value": "Votre entreprise participe-t-elle à des actions de lutte contre la surconsommation (comme le boycott des soldes ou du black friday, la lutte contre la publicité agressive, la participation au green friday) ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise s'engage dans des actions de lutte contre la surconsommation, telles que le boycott des soldes ou du Black Friday, la lutte contre la publicité agressive ou la participation au Green Friday.\n\nCes actions montrent votre engagement à encourager une consommation plus réfléchie et responsable.\n\nActions possibles :\n\n• Participation au Green Friday : Participer activement au Green Friday en proposant des alternatives au Black Friday, comme des promotions sur des produits durables ou des dons à des causes environnementales.\n\n• Campagnes anti-surconsommation : Lancer des campagnes qui sensibilisent aux dangers de la surconsommation et promeuvent des pratiques d'achat plus conscientes.\n\n• Boycott des soldes : Refuser de participer aux périodes de soldes traditionnelles pour éviter d'encourager l'achat impulsif et la surconsommation.\n\n• Promotion de produits durables : Mettre en avant des produits durables et de qualité, conçus pour durer, en opposition à la culture du \"fast fashion\" ou du \"fast consumer goods\".",
              "children": [
                {
                  "id": "1030",
                  "value": "Oui",
                  "id_action": 195,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1031",
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
                  "id": "1033",
                  "value": "Non",
                  "id_action": 195,
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
              "id": "1034",
              "value": "Votre entreprise fabrique-t-elle des produits \"à la demande\", uniquement sur commande pour éviter les surplus de production ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise adopte un modèle de production \"à la demande\", fabriquant des produits uniquement sur commande pour éviter le surplus de production.\n\nCe modèle réduit les déchets, limite les invendus, et répond précisément aux besoins des clients, favorisant ainsi une consommation plus responsable.\n\nActions possibles :\n\n• Production sur commande : Mettre en place un système de production où les produits sont fabriqués uniquement lorsqu\\'ils sont commandés par les clients.\n\n• Personnalisation des produits : Offrir des options de personnalisation pour les clients, renforçant ainsi la valeur perçue du produit et réduisant le risque de surplus.\n\n• Optimisation des stocks : Utiliser des outils de gestion de la demande pour ajuster la production en fonction des commandes, évitant ainsi les invendus.\n\n• Communication sur la durabilité : Informer les clients des avantages environnementaux de la production à la demande et les inciter à planifier leurs achats de manière plus réfléchie.",
              "children": [
                {
                  "id": "1035",
                  "value": "Oui",
                  "id_action": 196,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "1036",
                  "value": "Non",
                  "id_action": 196,
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
          "id": "1037",
          "value": "Non",
          "id_action": 197,
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
      "id": "1038",
      "value": "Votre entreprise met-elle en place des solutions visant à allonger la durée d'usage de ses produits/services ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "L'allongement de la durée de vie des produits est une approche essentielle pour promouvoir la durabilité et la satisfaction des clients.\n\nCela peut inclure des solutions telles que la maintenance préventive, la réparation et la revente des produits.\n\nCes actions visent à réduire le gaspillage et l'impact environnemental tout en offrant une valeur ajoutée aux consommateurs.",
      "children": [
        {
          "id": "1039",
          "value": "Oui",
          "id_action": 214,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "1040",
              "value": "Votre entreprise développe-t-elle des produits évolutifs, réparables, modulaires, aptes aux mises à jour/réactualisations pour prolonger leur durée de vie et minimiser les besoins de nouvelles matières premières ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise conçoit des produits qui sont évolutifs, réparables, modulaires ou aptes à recevoir des mises à jour pour prolonger leur durée de vie.\n\nCes caractéristiques permettent de minimiser l'utilisation de nouvelles matières premières en favorisant la réutilisation et l'adaptabilité des produits au fil du temps.\n\nActions possibles :\n\n• Design modulaire : Concevoir des produits avec des composants modulaires qui peuvent être facilement remplacés ou mis à jour sans nécessiter le remplacement complet du produit.\n\n• Compatibilité des mises à jour : Offrir des mises à jour logicielles ou matérielles qui prolongent la durée de vie des produits sans qu'il soit nécessaire d'en acheter de nouveaux.\n\n• Réparabilité intégrée : Faciliter la réparation des produits en utilisant des pièces standardisées et en offrant des instructions claires pour le remplacement des composants défectueux.\n\n• Revalorisation des produits : Créer des programmes permettant aux clients de renvoyer leurs produits pour des mises à jour ou des améliorations, prolongeant ainsi leur durée de vie utile.",
              "children": [
                {
                  "id": "1041",
                  "value": "Oui",
                  "id_action": 198,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1042",
                      "value": "Veuillez préciser comment la conception de vos produits permet de les rendre évolutifs, réparables, modulaires ou aptes aux mises à jour/réactualisations :",
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
                  "id": "1044",
                  "value": "Non",
                  "id_action": 198,
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
              "id": "1045",
              "value": "Votre entreprise conçoit-elle ses produits pour maximiser leur robustesse et leur fiabilité, garantissant ainsi une utilisation durable et pérenne ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vos produits sont conçus pour maximiser leur robustesse et leur fiabilité, garantissant ainsi une utilisation durable et à long terme.\n\nUne conception robuste réduit les risques de panne et limite la nécessité de remplacer fréquemment les produits, contribuant ainsi à la durabilité.\n\nActions possibles :\n\n• Tests de durabilité : Soumettre vos produits à des tests rigoureux pour garantir leur robustesse et leur résistance à l'usure dans diverses conditions d'utilisation.\n\n• Sélection de matériaux résistants : Utiliser des matériaux de haute qualité et résistants aux chocs, à l'eau ou à d'autres conditions extrêmes.\n\n• Garantie de fiabilité : Offrir des garanties solides qui témoignent de la confiance que vous avez dans la durabilité de vos produits.\n\n• Documentation technique : Fournir des guides techniques expliquant les meilleures pratiques pour maintenir la robustesse et la fiabilité des produits au fil du temps.",
              "children": [
                {
                  "id": "1046",
                  "value": "Oui",
                  "id_action": 199,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1047",
                      "value": "Veuillez préciser de quelle manière la conception de vos produits permet de maximiser leur robustesse :",
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
                  "id": "1049",
                  "value": "Non",
                  "id_action": 199,
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
              "id": "1051",
              "value": "Les matériaux utilisés dans vos produits sont-ils choisis en fonction de leur durabilité et de leur capacité à résister à l'usure ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vous choisissez les matériaux de vos produits en fonction de leur durabilité et de leur capacité à résister à l'usure.\n\nLa sélection de matériaux durables est essentielle pour prolonger la durée de vie des produits et réduire les besoins en remplacements fréquents.\n\nActions possibles :\n\n• Choix de matériaux durables : Utiliser des matériaux reconnus pour leur longévité, tels que des métaux résistants à la corrosion, des plastiques renforcés ou des textiles techniques durables.\n\n• Certification des matériaux : Rechercher des certifications qui garantissent la durabilité des matériaux utilisés, comme les labels de résistance à l'usure ou à l'abrasion.\n\n• Tests de vieillissement : Réaliser des tests de vieillissement accéléré pour évaluer la durabilité des matériaux sous différentes conditions.\n\n• Innovation en matériaux : Investir dans la recherche de nouveaux matériaux qui combinent durabilité et faible impact environnemental.",
              "children": [
                {
                  "id": "1052",
                  "value": "Oui",
                  "id_action": 200,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1053",
                      "value": "Veuillez préciser comment les matériaux sélectionnés pour vos produits sont choisis pour garantir leur durabilité et leur résistance à l'usure :",
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
                  "id": "1055",
                  "value": "Non",
                  "id_action": 200,
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
              "id": "1056",
              "value": "Privilégiez-vous des esthétiques ou styles intemporels dans la conception de vos produits afin de réduire le besoin de remplacement dû aux changements de mode ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vous privilégiez des esthétiques ou styles intemporels dans la conception de vos produits.\n\nOpter pour des designs intemporels permet de réduire le besoin de remplacer les produits simplement en raison des changements de mode, favorisant ainsi une consommation plus durable.\n\nActions possibles :\n\n• Design intemporel : Concevoir des produits avec des lignes classiques et des couleurs neutres qui résistent aux tendances de mode passagères.\n\n• Valorisation du minimalisme : Promouvoir des designs minimalistes qui ne se démodent pas et qui s'intègrent dans divers styles d'intérieurs ou d'usages.\n\n• Partenariats avec des designers : Collaborer avec des designers pour créer des produits qui allient esthétique durable et fonctionnalité, assurant leur attrait à long terme.\n\n• Promotion de la longévité esthétique : Communiquer avec les consommateurs sur les avantages d'un design intemporel qui évite l'obsolescence esthétique.",
              "children": [
                {
                  "id": "1057",
                  "value": "Oui",
                  "id_action": 201,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1058",
                      "value": "Veuillez préciser comment la conception de vos produits intègre des esthétiques ou styles intemporels pour réduire le besoin de remplacement lié aux évolutions de la mode",
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
                  "id": "1060",
                  "value": "Non",
                  "id_action": 201,
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
              "id": "1061",
              "value": "Votre entreprise réutilise-t-elle des composants ou utilise-t-elle les mêmes matériaux et pièces standardisées pour plusieurs produits afin de réduire les coûts, faciliter la production et simplifier les mises à jour ou le reconditionnement ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise réutilise des composants ou utilise des matériaux et pièces standardisées pour plusieurs produits.\n\nCette approche réduit les coûts, facilite la production, et simplifie les mises à jour ou le reconditionnement, contribuant ainsi à la durabilité des produits.\n\nActions possibles :\n\n• Standardisation des pièces : Utiliser des pièces et composants standardisés qui peuvent être interchangeables entre différents produits, simplifiant ainsi les réparations et mises à jour.\n\n• Réutilisation des composants : Intégrer des composants réutilisés ou reconditionnés dans la production de nouveaux produits pour réduire les besoins en nouvelles matières premières.\n\n• Optimisation des chaînes d'approvisionnement : Tirer parti des économies d'échelle en utilisant les mêmes matériaux pour plusieurs lignes de produits, réduisant ainsi les coûts et l'empreinte carbone.",
              "children": [
                {
                  "id": "1062",
                  "value": "Oui",
                  "id_action": 202,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1063",
                      "value": "Veuillez préciser comment votre entreprise réutilise des composants ou utilise les mêmes matériaux et pièces standardisées pour plusieurs produits :",
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
                  "id": "1065",
                  "value": "Non",
                  "id_action": 202,
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
              "id": "1066",
              "value": "Vos produits sont-ils conçus pour être facilement réparables et disposent-ils d'informations facilitant leur réparation ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vos produits sont conçus pour être facilement réparables et s'ils disposent d'informations claires pour faciliter leur réparation.\n\nLa réparabilité est un élément clé pour prolonger la durée de vie des produits et réduire les déchets.\n\nActions possibles :\n\n• Conception pour la réparabilité : Créer des produits avec des pièces facilement accessibles et remplaçables, en minimisant l'utilisation d'adhésifs ou de composants intégrés.\n\n• Guides de réparation : Fournir des manuels de réparation détaillés et des tutoriels vidéo pour guider les utilisateurs dans le processus de réparation.\n\n• Partenariats avec des ateliers de réparation : Collaborer avec des ateliers de réparation locaux pour offrir des services de réparation certifiés.\n\n• Certification de réparabilité : Obtenir des certifications qui attestent de la réparabilité de vos produits, telles que les labels \"Réparable\" ou \"Facile à réparer\".",
              "children": [
                {
                  "id": "1067",
                  "value": "Oui",
                  "id_action": 203,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1068",
                      "value": "Veuillez préciser la part de vos produits conçus pour être facilement réparables :",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        147
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "1070",
                  "value": "Non",
                  "id_action": 203,
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
              "id": "1071",
              "value": "Vos produits disposent-ils de pièces détachées disponibles à long terme, au-delà des contraintes légales ou des pratiques du marché (plus de 10 ans) ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise s'engage à rendre disponibles des pièces détachées pour ses produits sur une période longue, allant au-delà des contraintes légales ou des pratiques courantes du marché.\n\nCette disponibilité permet aux consommateurs de réparer leurs produits plutôt que de les remplacer.\n\nActions possibles :\n\n• Engagement à long terme : Assurer la disponibilité des pièces détachées pour une période prolongée, garantissant ainsi la possibilité de réparer les produits pendant de nombreuses années.\n\n• Stockage et distribution des pièces : Mettre en place un système efficace de stockage et de distribution des pièces détachées pour répondre aux besoins des clients dans la durée.\n\n• Transparence sur la disponibilité : Informer les consommateurs de la disponibilité à long terme des pièces détachées au moment de l'achat du produit.\n\n• Partenariats pour les pièces : Collaborer avec des fournisseurs de pièces détachées pour garantir une production continue et un approvisionnement fiable des composants nécessaires.",
              "children": [
                {
                  "id": "1072",
                  "value": "Oui",
                  "id_action": 204,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1073",
                      "value": "Quelle est la part de vos produits disposant de pièces détachées dont la disponibilité est garantie à long terme (+ de 10 ans) ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        148
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "1075",
                  "value": "Non",
                  "id_action": 204,
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
              "id": "1076",
              "value": "Votre entreprise fournit-elle des guides ou documents pour favoriser l'autoréparation des produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise fournit des guides ou documents destinés à favoriser l'autoréparation des produits par les utilisateurs.\n\nL'autoréparation permet de prolonger la durée de vie des produits tout en réduisant les coûts et l'empreinte écologique.\n\nActions possibles :\n\n• Manuels d'autoréparation : Créer et distribuer des manuels d'autoréparation clairs et détaillés, disponibles en ligne ou avec le produit.\n\n• Tutoriels vidéo : Produire des tutoriels vidéo pour guider les utilisateurs étape par étape dans le processus de réparation.\n\n• Plateformes de support : Mettre en place des forums ou des plateformes en ligne où les utilisateurs peuvent poser des questions et partager leurs expériences de réparation.\n\n• Partenariats éducatifs : Collaborer avec des associations ou des organismes pour organiser des ateliers d'autoréparation et sensibiliser à l'importance de la réparation.",
              "children": [
                {
                  "id": "1077",
                  "value": "Oui",
                  "id_action": 205,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1078",
                      "value": "Quelle est la part de vos produits disposant de guides ou de documents facilitant l'autoréparation ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        149
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "1080",
                  "value": "Non",
                  "id_action": 205,
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
              "id": "1081",
              "value": "Votre entreprise sensibilise-t-elle les utilisateurs au bon entretien de ses produits à travers des guides d'entretien ou des documents d'accompagnement pour encourager des écogestes et lutter contre l'obsolescence d'usage ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise sensibilise les utilisateurs au bon entretien de ses produits à travers des guides d'entretien ou des documents d'accompagnement.\n\nUn bon entretien permet de prolonger la durée de vie des produits et de lutter contre l'obsolescence d'usage.\n\nActions possibles :\n\n• Guides d'entretien : Fournir des guides d'entretien détaillés qui expliquent comment prendre soin des produits pour en maximiser la durée de vie.\n\n• Conseils pratiques : Offrir des conseils pratiques sur les écogestes à adopter pour maintenir les produits en bon état, tels que le nettoyage, le stockage et l'utilisation correcte.\n\n• Campagnes de sensibilisation : Lancer des campagnes de sensibilisation pour éduquer les consommateurs sur l'importance de l'entretien régulier et des petites réparations.\n\n• Support en ligne : Mettre à disposition des ressources en ligne, telles que des FAQ, des articles de blog et des vidéos, pour guider les utilisateurs dans l'entretien de leurs produits.",
              "children": [
                {
                  "id": "1082",
                  "value": "Oui",
                  "id_action": 206,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1083",
                      "value": "Quel est le pourcentage de vos produits disposant de guides d'entretien ou de contenu sur les écogestes permettant de lutter contre l'obsolescence d'usage ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        150
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "1085",
                  "value": "Non",
                  "id_action": 206,
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
              "id": "1086",
              "value": "Offrez-vous des services de maintenance préventive, des services de réparation ou des partenariats avec des ateliers de réparation pour assurer la longévité de vos produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise offre des services de maintenance préventive, des services de réparation ou collabore avec des ateliers de réparation pour assurer la longévité de vos produits.\n\nCes services permettent de prévenir les pannes, de réparer les produits en cas de besoin et de maximiser leur durée de vie.\n\nActions possibles :\n\n• Services de maintenance préventive : Proposer des services de maintenance préventive régulière pour détecter et corriger les problèmes avant qu'ils ne deviennent critiques.\n\n• Réseau d'ateliers de réparation : Mettre en place un réseau d'ateliers de réparation certifiés où les clients peuvent faire réparer leurs produits en toute confiance.\n\n• Réparation à domicile : Offrir des services de réparation à domicile pour les produits volumineux ou complexes.\n\n• Offres de maintenance avec garantie : Intégrer des offres de maintenance et de réparation dans les garanties prolongées pour inciter les clients à entretenir leurs produits régulièrement.",
              "children": [
                {
                  "id": "1087",
                  "value": "Oui",
                  "id_action": 207,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1088",
                      "value": "Veuillez préciser les services de maintenance préventive, de réparation ou les partenariats avec des ateliers de réparation que vous offrez afin d'assurer la longévité de vos produits/services :",
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
                  "id": "1090",
                  "value": "Non",
                  "id_action": 207,
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
              "id": "1091",
              "value": "Proposez-vous des services de réemploi, réutilisation ou reconditionnement pour prolonger la durée de vie des produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise propose des services de réemploi, de réutilisation ou de reconditionnement pour prolonger la durée de vie des produits.\n\nCes services permettent de donner une seconde vie aux produits usagés, réduisant ainsi le besoin de nouvelles ressources et les déchets.\n\nActions possibles :\n\n• Programmes de reconditionnement : Mettre en place des programmes de reconditionnement où les produits retournés sont remis à neuf et revendus à des prix réduits.\n\n• Services de réemploi : Proposer des services qui encouragent la réutilisation des produits ou de leurs composants, comme la récupération de pièces détachées.\n\n• Incitations pour la réutilisation : Offrir des réductions ou des crédits d'achat pour les clients qui retournent leurs anciens produits pour réemploi ou reconditionnement.\n\n• Collaboration avec des organisations : Collaborer avec des associations ou des entreprises spécialisées dans le réemploi pour maximiser l'impact de ces initiatives.",
              "children": [
                {
                  "id": "1092",
                  "value": "Oui",
                  "id_action": 208,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1093",
                      "value": "Veuillez préciser les services liés au réemploi, à la réutilisation ou au reconditionnement que vous proposez pour prolonger la durée de vie de vos produits :",
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
                  "id": "1095",
                  "value": "Non",
                  "id_action": 208,
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
              "id": "1096",
              "value": "Votre entreprise a-t-elle un service après-vente dans chaque pays de commercialisation pour soutenir la durabilité de ses produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise dispose d'un service après-vente dans chaque pays de commercialisation pour soutenir la durabilité de ses produits.\n\nUn service après-vente localisé permet de garantir un support efficace pour les réparations, les pièces détachées et les conseils d'entretien.\n\nActions possibles :\n\n• Implantation de services après-vente : Mettre en place des services après-vente dans tous les pays où vos produits sont commercialisés, offrant un support local rapide et efficace.\n\n• Formation des techniciens : Former des techniciens locaux pour assurer la réparation et la maintenance des produits conformément aux standards de qualité.\n\n• Support multilingue : Offrir un support client dans les langues locales pour faciliter les échanges et la résolution des problèmes.\n\n• Partenariats locaux : Collaborer avec des partenaires locaux pour étendre la couverture des services après-vente et garantir une prise en charge rapide des besoins des clients.",
              "children": [
                {
                  "id": "1097",
                  "value": "Oui",
                  "id_action": 209,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "1098",
                  "value": "Non",
                  "id_action": 209,
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
              "id": "1099",
              "value": "Disposez-vous d'un programme de reprise ou de partenariats qui participent à la récupération, le reconditionnement ou le remanufacturing des produits en fin de vie ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise dispose d'un programme de reprise ou de partenariats qui participent à la récupération, au reconditionnement ou au remanufacturing des produits en fin de vie.\n\nCes initiatives permettent de réduire les déchets et de valoriser les produits usagés en leur donnant une nouvelle vie.\n\nActions possibles :\n\n• Programme de reprise : Mettre en place un programme où les clients peuvent retourner leurs produits en fin de vie en échange d'une compensation ou d'une réduction sur un nouvel achat.\n\n• Partenariats pour le reconditionnement : Collaborer avec des entreprises spécialisées dans le reconditionnement pour traiter les produits récupérés et les remettre sur le marché.\n\n• Recyclage des matériaux : S'assurer que les produits non réutilisables sont recyclés de manière responsable, en récupérant les matériaux pour une nouvelle utilisation.\n\n• Communication sur la reprise : Informer les clients des avantages de ces programmes de reprise et de leur contribution à la réduction des déchets.",
              "children": [
                {
                  "id": "1100",
                  "value": "Oui",
                  "id_action": 210,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1101",
                      "value": "Veuillez détailler les programmes de reprise ou les partenariats que vous avez mis en place pour la récupération, le reconditionnement ou le remanufacturing des produits en fin de vie :",
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
                  "id": "1103",
                  "value": "Non",
                  "id_action": 210,
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
              "id": "1104",
              "value": "Proposez-vous des garanties longue durée (au-delà de 10 ans) pour vos produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise propose des garanties longue durée, au-delà de 10 ans, pour ses produits.\n\nOffrir une garantie longue durée est un gage de confiance dans la qualité et la durabilité des produits et incite les consommateurs à investir dans des produits durables.\n\nActions possibles :\n\n• Élargissement de la garantie : Proposer des garanties qui couvrent une période de plus de 10 ans, incluant les réparations, les remplacements et le support technique.\n\n• Extensions de garantie : Offrir des extensions de garantie à un coût réduit pour encourager les clients à protéger leurs investissements à long terme.\n\n• Communication sur la durabilité : Utiliser la garantie longue durée comme un argument de vente pour démontrer l'engagement de votre entreprise en faveur de la qualité et de la durabilité.\n\n• Support après-garantie : Fournir un support continu même après l'expiration de la garantie pour renforcer la relation avec le client et la durabilité du produit.",
              "children": [
                {
                  "id": "1105",
                  "value": "Oui",
                  "id_action": 211,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1106",
                      "value": "Quelle est la part de vos produits disposant de garanties longue durée (au-delà de 10 ans) ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        151
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "1108",
                  "value": "Non",
                  "id_action": 211,
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
              "id": "1109",
              "value": "Avez-vous mis en place un service d'achat/revente dédié à la seconde main pour encourager la réutilisation des produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise a mis en place un service d'achat/revente dédié à la seconde main pour encourager la réutilisation des produits.\n\nLe marché de la seconde main permet de prolonger la durée de vie des produits et de réduire le besoin de nouvelles productions, contribuant ainsi à une consommation plus durable.\n\nActions possibles :\n\n• Plateforme de revente : Créer une plateforme en ligne ou un espace physique dédié à la revente des produits d'occasion de votre marque.\n\n• Service de reprise : Offrir un service où les clients peuvent vendre leurs anciens produits à votre entreprise pour qu'ils soient revendus après inspection et reconditionnement.\n\n• Certifications de seconde main : Proposer des produits d'occasion avec une certification de qualité et une garantie, rassurant les clients sur leur état et leur durabilité.\n\n• Promotion de la seconde main : Sensibiliser les clients aux avantages de l'achat de produits d'occasion, tant pour leur budget que pour l'environnement.",
              "children": [
                {
                  "id": "1110",
                  "value": "Oui",
                  "id_action": 212,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "1111",
                  "value": "Non",
                  "id_action": 212,
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
              "id": "1112",
              "value": "Avez-vous mesuré la durabilité ou la réparabilité de vos produits/services ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise a mis en place des mesures pour évaluer la durabilité ou la réparabilité de ses produits ou services.\n\nLa mesure de ces aspects est essentielle pour identifier les points d\\'amélioration, renforcer la qualité des produits, et garantir qu\\'ils répondent aux attentes des consommateurs en matière de durabilité.\n\nActions possibles :\n\n• Tests de durabilité : Réaliser des tests rigoureux pour évaluer la durée de vie de vos produits sous diverses conditions d\\'utilisation.\n\n• Évaluation de la réparabilité : Analyser la réparabilité de vos produits en tenant compte de la disponibilité des pièces détachées, de la facilité de démontage et du coût des réparations.\n\n• Labels et certifications : Obtenir des labels ou certifications qui attestent de la durabilité ou de la réparabilité de vos produits, comme le label \"Long Time\" ou \"Facile à Réparer\".\n\n• Amélioration continue : Utiliser les résultats des mesures de durabilité et de réparabilité pour améliorer continuellement la conception de vos produits et services.",
              "children": [
                {
                  "id": "1113",
                  "value": "Oui",
                  "id_action": 213,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1114",
                      "value": "Comment avez-vous mesuré la durabilité/réparabilité de vos produits/services ?",
                      "id_action": null,
                      "information": null,
                      "children": [
                        {
                          "id": "1115",
                          "value": "Évaluation de la durabilité à l'aide de l'indice de durabilité des produits",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "1116",
                          "value": "Évaluation de la réparabilité à l'aide de l'indice de réparabilité",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "1117",
                          "value": "Tests de résistance à l'usure",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "1118",
                          "value": "Lutte contre l'obsolescence (programmée/logicielle/perçue)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "1119",
                          "value": "Autre(s)",
                          "id_action": null,
                          "done": false,
                          "information": null,
                          "children": [
                            {
                              "id": "1120",
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
                  "id": "1122",
                  "value": "Non",
                  "id_action": 213,
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
          "id": "1123",
          "value": "Non",
          "id_action": 214,
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
      "id": "1124",
      "value": "Votre entreprise met-elle en place des solutions visant à faciliter la recyclabilité de ses produits/services ?",
      "ids_secteurs": [
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
        23,
        24,
        25,
        26,
        27,
        29
      ],
      "id_action": null,
      "information": "Sélectionnez cette option si votre entreprise met en place des solutions concrètes pour faciliter la recyclabilité de ses produits ou services.\n\nCela implique des actions dès la conception des produits, le choix des matériaux, jusqu'à la fin de vie des produits pour s'assurer qu'ils peuvent être recyclés efficacement. En améliorant la recyclabilité, vous contribuez à la réduction des déchets et à la promotion d'une économie circulaire.",
      "children": [
        {
          "id": "1125",
          "value": "Oui",
          "id_action": 229,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "1126",
              "value": "Votre entreprise applique-t-elle les principes Cradle-to-Cradle dans la conception de ses produits, en veillant à ce que tous les matériaux utilisés puissent être recyclés ou réutilisés sans générer de déchets ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise applique les principes Cradle-to-Cradle dans la conception de ses produits, assurant que tous les matériaux utilisés sont soit recyclables, soit réutilisables sans générer de déchets.\n\nLe principe Cradle-to-Cradle vise à créer des cycles de matériaux en boucle fermée où aucun déchet n'est produit.\n\nActions possibles :\n\n• Design circulaire : Concevoir des produits où tous les matériaux peuvent être réintégrés dans un cycle technique (recyclage) ou biologique (compostage) après usage.\n\n• Certification Cradle-to-Cradle : Obtenir une certification Cradle-to-Cradle pour vos produits afin de valider leur recyclabilité et réutilisabilité.\n\n• Sélection de matériaux sûrs : Choisir des matériaux non toxiques et sûrs pour l'environnement et la santé humaine, facilitant leur réutilisation.\n\n• Innovation en matériaux : Collaborer avec des fournisseurs pour développer ou adopter des matériaux qui s'intègrent parfaitement dans les cycles de réutilisation.",
              "children": [
                {
                  "id": "1127",
                  "value": "Oui",
                  "id_action": 215,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1128",
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
                  "id": "1130",
                  "value": "Non",
                  "id_action": 215,
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
              "id": "1131",
              "value": "Vos produits sont-ils conçus pour permettre la séparabilité des pièces pour le recyclage ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vos produits sont conçus pour permettre la séparabilité facile des pièces, facilitant ainsi le recyclage.\n\nLa séparabilité est cruciale pour s'assurer que les différents matériaux peuvent être triés et recyclés de manière efficace.\n\nActions possibles :\n\n• Design modulaire : Créer des produits avec des composants facilement démontables, sans l'utilisation d'adhésifs permanents ou de fixations complexes.\n\n• Instructions de démontage : Fournir des instructions claires pour le démontage des produits, facilitant ainsi le recyclage par les utilisateurs ou les centres de traitement.\n\n• Utilisation de fixations réversibles : Préférer l'utilisation de vis, clips ou autres systèmes réversibles qui permettent de séparer les matériaux sans les endommager.\n\n• Collaboration avec les recycleurs : Travailler avec des recycleurs pour s'assurer que la conception des produits facilite réellement le tri et le recyclage des matériaux.",
              "children": [
                {
                  "id": "1132",
                  "value": "Oui",
                  "id_action": 216,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1133",
                      "value": "Veuillez préciser :",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "text",
                      "id_kpis": [
                        152
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "1135",
                  "value": "Non",
                  "id_action": 216,
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
              "id": "1136",
              "value": "Prenez-vous en compte la séparabilité des composants dans la conception de vos produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si vous prenez en compte la séparabilité des composants dès la phase de conception de vos produits.\n\nEn facilitant la séparabilité, vous contribuez à améliorer la recyclabilité globale des produits et à maximiser la récupération des matériaux.\n\nActions possibles :\n\n• Design pour le démontage : Intégrer le principe du \"design pour le démontage\" dès le début du processus de conception pour faciliter la séparation des composants.\n\n• Réduction des matériaux composites : Minimiser l'utilisation de matériaux composites difficiles à séparer pour favoriser la recyclabilité des composants individuels.\n\n• Formations en écoconception : Former vos équipes de conception sur l'importance de la séparabilité des composants pour le recyclage.\n\n• Outils de simulation : Utiliser des logiciels de simulation pour évaluer et améliorer la séparabilité des composants dans les phases de conception.",
              "children": [
                {
                  "id": "1137",
                  "value": "Oui",
                  "id_action": 217,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1138",
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
                  "id": "1140",
                  "value": "Non",
                  "id_action": 217,
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
              "id": "1141",
              "value": "Votre entreprise évalue-t-elle la recyclabilité des produits existants pour en améliorer le design ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise évalue régulièrement la recyclabilité des produits existants pour en améliorer le design.\n\nL'évaluation de la recyclabilité permet d'identifier les points faibles dans la conception actuelle et de les corriger pour maximiser la récupération des matériaux en fin de vie.\n\nActions possibles :\n\n• Audits de recyclabilité : Réaliser des audits de recyclabilité sur vos produits pour identifier les obstacles au recyclage et proposer des améliorations.\n\n• Révisions de conception : Mettre à jour les conceptions existantes pour améliorer la recyclabilité, par exemple en remplaçant les matériaux difficiles à recycler ou en simplifiant le démontage.\n\n• Collaboration avec les recycleurs : Collaborer avec les acteurs du recyclage pour tester la recyclabilité des produits et ajuster leur design en conséquence.\n\n• Benchmarking : Comparer la recyclabilité de vos produits avec celle des produits concurrents pour identifier des opportunités d'amélioration.",
              "children": [
                {
                  "id": "1142",
                  "value": "Oui",
                  "id_action": 218,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1143",
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
                  "id": "1145",
                  "value": "Non",
                  "id_action": 218,
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
              "id": "1146",
              "value": "Votre entreprise a-t-elle mis en place des mesures pour réduire la présence de perturbateurs du recyclage dans ses produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise a mis en place des mesures pour réduire ou éliminer les perturbateurs du recyclage dans ses produits.\n\nLes perturbateurs du recyclage sont des éléments qui compliquent ou empêchent le recyclage efficace des matériaux.\n\nActions possibles :\n\n• Identification des perturbateurs : Analyser vos produits pour identifier les matériaux ou composants qui perturbent le processus de recyclage.\n\n• Substitution des matériaux : Remplacer les matériaux perturbateurs par des alternatives plus compatibles avec le recyclage.\n\n• Élimination des revêtements nocifs : Réduire ou éliminer les revêtements, adhésifs, ou finitions qui compliquent le recyclage.\n\n• Collaboration avec les fournisseurs : Travailler avec vos fournisseurs pour réduire la présence de perturbateurs du recyclage dans les matériaux fournis.",
              "children": [
                {
                  "id": "1147",
                  "value": "Oui",
                  "id_action": 219,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1148",
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
                  "id": "1150",
                  "value": "Non",
                  "id_action": 219,
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
              "id": "1151",
              "value": "Avez-vous identifié et réduit les substances préoccupantes dans vos produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise a identifié et réduit la présence de substances préoccupantes dans ses produits.\n\nCes substances peuvent inclure des produits chimiques dangereux ou des matériaux qui posent des risques pour la santé humaine ou l'environnement et compliquent le recyclage.\n\nActions possibles :\n\n• Inventaire des substances : Réaliser un inventaire complet des substances chimiques utilisées dans vos produits pour identifier celles qui sont préoccupantes.\n\n• Substitution proactive : Remplacer les substances préoccupantes par des alternatives plus sûres et plus faciles à recycler.\n\n• Conformité réglementaire : Assurer que vos produits sont conformes aux réglementations environnementales telles que REACH ou RoHS, en limitant ou en éliminant les substances préoccupantes.\n\n• Transparence sur les substances : Communiquer de manière transparente avec les consommateurs et les partenaires sur les substances présentes dans vos produits et les efforts pour les réduire.",
              "children": [
                {
                  "id": "1152",
                  "value": "Oui",
                  "id_action": 220,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1153",
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
                  "id": "1155",
                  "value": "Non",
                  "id_action": 220,
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
              "id": "1156",
              "value": "Votre entreprise prend-elle des mesures pour simplifier et réduire la diversité des matériaux utilisés dans ses produits afin de faciliter leur recyclage ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise prend des mesures pour simplifier et réduire la diversité des matériaux utilisés dans ses produits.\n\nRéduire le nombre de matériaux différents dans un produit facilite le tri et le recyclage en fin de vie.\n\nActions possibles :\n\n• Rationalisation des matériaux : Standardiser les matériaux utilisés dans vos produits pour réduire la complexité du recyclage.\n\n• Design monomatériau : Développer des produits utilisant principalement un seul type de matériau pour simplifier le recyclage.\n\n• Formation des équipes de conception : Former vos équipes de design à l'importance de la réduction de la diversité des matériaux pour faciliter le recyclage.\n\n• Optimisation des matériaux : Travailler avec les fournisseurs pour développer des matériaux polyvalents qui peuvent être utilisés dans plusieurs produits, réduisant ainsi la diversité matérielle.",
              "children": [
                {
                  "id": "1157",
                  "value": "Oui",
                  "id_action": 221,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1158",
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
                  "id": "1160",
                  "value": "Non",
                  "id_action": 221,
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
              "id": "1161",
              "value": "Rationalisez-vous et mutualisez-vous l'utilisation des matières (comme les plastiques) et des composants pour faciliter le recyclage ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise rationalise et mutualise l'utilisation des matières (comme les plastiques) et des composants pour faciliter le recyclage.\n\nMutualiser les matériaux et composants permet d'améliorer la recyclabilité en simplifiant les processus de tri et de traitement.\n\nActions possibles :\n\n• Standardisation des plastiques : Utiliser des plastiques standardisés qui sont plus facilement recyclables et largement acceptés dans les filières de recyclage.\n\n• Harmonisation des composants : Concevoir des composants qui peuvent être utilisés dans plusieurs produits, facilitant leur recyclage en fin de vie.\n\n• Réduction des polymères : Limiter le nombre de types de polymères dans un produit pour simplifier le tri et le recyclage.\n\n• Collaboration inter-services : Encourager la collaboration entre les équipes de design, production et recyclage pour mutualiser les matériaux utilisés dans différents produits.",
              "children": [
                {
                  "id": "1162",
                  "value": "Oui",
                  "id_action": 222,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1163",
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
                  "id": "1165",
                  "value": "Non",
                  "id_action": 222,
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
              "id": "1166",
              "value": "Avez-vous réduit ou supprimé l'utilisation de substances (comme les solvants, RFB, etc.) dans vos produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise a réduit ou supprimé l'utilisation de substances telles que les solvants, les retardateurs de flamme bromés (RFB) ou autres substances préoccupantes dans ses produits.\n\nLa réduction de ces substances facilite le recyclage et diminue les impacts environnementaux négatifs.\n\nActions possibles :\n\n• Élimination des solvants toxiques : Remplacer les solvants nocifs par des alternatives plus écologiques dans la production de vos produits.\n\n• Substitution des RFB : Éliminer les retardateurs de flamme bromés et autres substances chimiques dangereuses de vos produits, en utilisant des alternatives sûres et recyclables.\n\n• Conception sans substances préoccupantes : Intégrer des critères de réduction des substances préoccupantes dès la phase de conception des produits.\n\n• Certification et conformité : Assurer la conformité aux normes et certifications qui limitent l'utilisation de substances préoccupantes dans les produits.",
              "children": [
                {
                  "id": "1167",
                  "value": "Oui",
                  "id_action": 223,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1168",
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
                  "id": "1170",
                  "value": "Non",
                  "id_action": 223,
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
              "id": "1171",
              "value": "Votre entreprise respecte-t-elle les exigences REACH (ou RoHS si concerné) pour les substances chimiques dans ses produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise respecte les exigences REACH (Réglementation de l'UE sur les produits chimiques) ou RoHS (Restriction of Hazardous Substances) pour les substances chimiques dans ses produits.\n\nLe respect de ces réglementations garantit que vos produits sont exempts de substances dangereuses et que leur recyclage est sécurisé.\n\nActions possibles :\n\n• Conformité REACH/RoHS : Veiller à ce que tous les produits soient conformes aux exigences REACH et RoHS, réduisant ainsi l'utilisation de substances dangereuses.\n\n• Audits de conformité : Réaliser des audits réguliers pour s'assurer que tous les matériaux et composants respectent les réglementations REACH et RoHS.\n\n• Communication avec les fournisseurs : Collaborer étroitement avec vos fournisseurs pour garantir que les matériaux fournis sont conformes aux exigences REACH et RoHS.\n\n• Mise à jour des processus : Adapter vos processus de production pour éliminer ou réduire l'utilisation de substances chimiques restreintes par REACH ou RoHS.",
              "children": [
                {
                  "id": "1172",
                  "value": "Oui",
                  "id_action": 224,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "1173",
                  "value": "Non",
                  "id_action": 224,
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
              "id": "1174",
              "value": "Collaborez-vous avec vos fournisseurs pour sensibiliser et évaluer les matières qui perturbent le recyclage ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise collabore avec ses fournisseurs pour sensibiliser et évaluer les matières qui perturbent le recyclage.\n\nUne collaboration étroite avec les fournisseurs permet d'identifier et de réduire les matériaux problématiques en amont, facilitant ainsi le recyclage en fin de vie.\n\nActions possibles :\n\n• Dialogue avec les fournisseurs : Engager un dialogue continu avec vos fournisseurs pour les sensibiliser aux matériaux qui perturbent le recyclage et trouver des alternatives.\n\n• Évaluation des matières premières : Mettre en place des critères stricts pour évaluer les matières premières en fonction de leur recyclabilité.\n\n• Partage des bonnes pratiques : Partager avec vos fournisseurs les meilleures pratiques pour réduire l'impact des matériaux perturbateurs sur le recyclage.\n\n• Programmes de substitution : Collaborer avec les fournisseurs pour développer ou adopter des matériaux qui ne perturbent pas les processus de recyclage.",
              "children": [
                {
                  "id": "1175",
                  "value": "Oui",
                  "id_action": 225,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1176",
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
                  "id": "1178",
                  "value": "Non",
                  "id_action": 225,
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
              "id": "1179",
              "value": "Développez-vous et sélectionnez-vous des produits monomatières pour simplifier le recyclage ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise développe et sélectionne des produits monomatières pour simplifier le recyclage.\n\nLes produits monomatières, composés d'un seul type de matériau, sont plus faciles à recycler car ils ne nécessitent pas de séparation des matériaux.\n\nActions possibles :\n\n• Design monomatière : Concevoir des produits composés d'un seul matériau ou d'un nombre très limité de matériaux pour faciliter le recyclage.\n\n• Matériaux recyclables : Sélectionner des matériaux monomatières qui sont largement acceptés dans les filières de recyclage.\n\n• Tests de recyclabilité : Tester régulièrement les produits monomatières pour s'assurer qu'ils sont effectivement faciles à recycler.\n\n• Promotion de l'option monomatière : Encourager vos équipes de design à prioriser les solutions monomatières lors de la conception de nouveaux produits.",
              "children": [
                {
                  "id": "1180",
                  "value": "Oui",
                  "id_action": 226,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1181",
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
                  "id": "1183",
                  "value": "Non",
                  "id_action": 226,
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
              "id": "1184",
              "value": "Choisissez-vous des emballages recyclables pour vos produits ?",
              "id_action": null,
              "information": "Sélectionnez cette option si votre entreprise choisit systématiquement des emballages recyclables pour ses produits.\n\nL'utilisation d'emballages recyclables réduit l'impact environnemental et facilite la gestion des déchets par les consommateurs.\n\nActions possibles :\n\n• Emballages en matériaux recyclables : Utiliser des matériaux d'emballage qui sont entièrement recyclables, tels que le carton, le verre, ou certains plastiques.\n\n• Certification des emballages : Obtenir des certifications pour vos emballages, attestant de leur recyclabilité.\n\n• Design sans perturbateurs : Concevoir des emballages sans perturbateurs du recyclage, tels que des revêtements plastiques complexes ou des encres non recyclables.\n\n• Sensibilisation des consommateurs : Informer les consommateurs sur la recyclabilité de vos emballages et leur fournir des instructions claires pour leur tri correct.",
              "children": [
                {
                  "id": "1185",
                  "value": "Oui",
                  "id_action": 227,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "1186",
                      "value": "Quelle est la part d'emballages en matériaux recyclables utilisés par votre entreprise ?",
                      "id_action": null,
                      "information": "La question sur les emballages en matériaux recyclables concerne l'utilisation de matériaux qui, après usage, peuvent être traités pour être réintégrés dans le cycle de production sous forme de nouveaux emballages ou produits similaires.\n\nCela inclut des matériaux comme le plastique, le carton, le verre, etc. L'objectif est de limiter l'utilisation de ressources vierges et de favoriser un cycle fermé de réutilisation des matériaux.",
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [
                        153
                      ]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "1188",
                  "value": "Non",
                  "id_action": 227,
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
          "id": "1189",
          "value": "Non",
          "id_action": 229,
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
