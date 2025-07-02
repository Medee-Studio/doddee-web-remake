import { QuestionTree } from "@/types/esg-form";

export const et: QuestionTree = [
  {
    id: "1",
    value:
      "Comment votre entreprise pilote-t-elle les émissions de Gaz à Effet de Serre de ses activités ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 24, 25, 26, 27, 28, 29,
    ],
    id_action: null,
    information: null,
    children: [
      {
        id: "2",
        value:
          "L'entreprise ne pilote pas ses émissions de GES et aucun bilan d'émission de Gaz à effet de serre n'est en cours ou n'a été réalisé.",
        id_action: 1,
        done: false,
        information:
          "Le GIEC recommande une réduction de nos émissions de 50% d'ici 2030, de 80% d'ici 2040, avec pour objectif d'atteindre la neutralité carbone en 2050.",
        children: [],
        type: "reponse",
      },
      {
        id: "3",
        value: "Un bilan de Gaz à Effet de Serre est en cours de réalisation.",
        id_action: 1,
        done: true,
        information: null,
        children: [
          {
            id: "4",
            value:
              "Veuillez préciser le périmètre couvert :\n(ex : toute l'entreprise, un service, une usine, etc.)",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "text",
            id_kpis: [],
          },
          {
            id: "6",
            value: "Pour quel(s) Scope(s) ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "7",
                value: "Scope 1",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "8",
                value: "Scope 2",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "9",
                value: "Scope 3",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
        ],
        type: "reponse",
      },
      {
        id: "10",
        value:
          "Un bilan de Gaz à Effet de Serre (ou Bilan Carbone) a été réalisé au cours des quatre dernières années.",
        id_action: 1,
        done: true,
        information: null,
        children: [
          {
            id: "11",
            value:
              "Quel est le Scope maximum que vous avez mesuré dans votre Bilan Carbone ?",
            id_action: null,
            information:
              "Veuillez sélectionner la réponse correspondant au scope le plus avancé mesuré par votre organisation.",
            children: [
              {
                id: "12",
                value: "Scope 1",
                id_action: 2,
                done: true,
                information:
                  "Au cours des quatre dernières années, votre organisation a réalisé un bilan de ses émissions de gaz à effet de serre (BEGES) lié à ses activités et met actuellement en œuvre un plan d'action visant à réduire ces émissions.\n\nPour les entreprises de moins de 250 salariés, vous pouvez vous faire accompagner par un expert ou effectuer votre BEGES en utilisant une solution gratuite en ligne, telle que celle proposée par la Fondation Good Planet.\n\nEn revanche, pour les entreprises de plus de 250 salariés, seuls les bilans conformes au GHG Protocol, au GRI 305, au Bilan Carbone® ou à la norme ISO 14064 sont acceptés.\n\nMesurer les émissions directes (Scope 1) est souvent le plus plus simple moyen de commencer car il s'agit de sources contrôlées directement par l'entreprise. La collecte de données et la vérification peuvent généralement être effectuées en 1 à 3 mois.\n\nLe Scope 1 englobe les émissions de gaz à effet de serre résultant directement de la production du produit :\n\n• Émissions directes provenant des sources de combustion fixes\n• Émissions directes provenant des sources mobiles équipées de moteurs thermiques\n• Émissions directes liées aux procédés non énergétiques\n• Émissions directes fugitives\n• Émissions provenant de la biomasse (sols et forêts)",
                children: [
                  {
                    id: "13",
                    value:
                      "Quelles étaient vos émissions de GES Scope 1 en tCO2eq ?",
                    id_action: null,
                    information:
                      "Veuillez indiquer le volume des émissions de GES Scope 1 de votre organisation en valeur absolue, exprimé en tonnes équivalent CO2 (TeqCO2), émis par votre entreprise sur une période donnée.\n\nCes émissions doivent refléter les résultats obtenus lors de la dernière évaluation de votre empreinte carbone.\n\nIl est recommandé de synchroniser la période de reporting des émissions de GES avec l'année fiscale de l'entreprise pour une intégration plus facile des données dans les rapports extra financiers.",
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [1],
                  },
                  {
                    id: "15",
                    value:
                      "En quelle année ce Bilan Carbone Scope 1 a-t-il été réalisé ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "year",
                    id_kpis: [],
                  },
                  {
                    id: "17",
                    value:
                      "Veuillez préciser le périmètre couvert :\n(toute l'entreprise, un service, une usine, etc.)",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "text",
                    id_kpis: [],
                  },
                  {
                    id: "19",
                    value:
                      "Avez-vous publié ou communiqué les résultats de votre Bilan Scope 1 ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "20",
                        value: "Oui",
                        id_action: 3,
                        done: true,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "21",
                        value: "Non",
                        id_action: 3,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "22",
                    value:
                      "La mesure de votre empreinte carbone a-t-elle été validée par un organisme externe ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "23",
                        value: "Oui",
                        id_action: 206,
                        done: true,
                        information: null,
                        children: [
                          {
                            id: "24",
                            value:
                              "Veuillez préciser le nom de cet organisme :",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "26",
                        value: "Non",
                        id_action: 206,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "27",
                value: "Scope 2",
                id_action: 4,
                done: true,
                information:
                  "Au cours des quatre dernières années, votre organisation a réalisé un bilan de ses émissions de gaz à effet de serre (BEGES) lié à ses activités et met actuellement en œuvre un plan d'action visant à réduire ces émissions.\n\nPour les entreprises de moins de 250 salariés, vous pouvez vous faire accompagner par un expert ou effectuer votre BEGES en utilisant une solution gratuite en ligne, telle que celle proposée par la Fondation Good Planet.\n\nEn revanche, pour les entreprises de plus de 250 salariés, seuls les bilans conformes au GHG Protocol, au GRI 305, au Bilan Carbone® ou à la norme ISO 14064 sont acceptés.\n\nMesurer les émissions directes (Scope 1) est souvent le plus plus simple moyen de commencer car il s'agit de sources contrôlées directement par l'entreprise. La collecte de données et la vérification peuvent généralement être effectuées en 1 à 3 mois.\n\nLe Scope 2 comprend les émissions de gaz à effet de serre associées à la consommation d'énergie nécessaire à la fabrication du produit :\n\n• Émissions indirectes dues à l'utilisation de l'électricité\n• Émissions indirectes liées à l'utilisation de vapeur, de chaleur ou de froid",
                children: [
                  {
                    id: "28",
                    value:
                      "Quelles sont vos émissions de GES Scope 2 en tCO2eq ?",
                    id_action: null,
                    information:
                      "Veuillez indiquer le volume des émissions de GES Scope 2 de votre organisation en valeur absolue, exprimé en tonnes équivalent CO2 (TeqCO2), émis par votre entreprise sur une période donnée.\n\nCes émissions doivent refléter les résultats obtenus lors de la dernière évaluation de votre empreinte carbone.\n\nIl est recommandé de synchroniser la période de reporting des émissions de GES avec l'année fiscale de l'entreprise pour une intégration plus facile des données dans les rapports extra financiers.",
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [1],
                  },
                  {
                    id: "30",
                    value:
                      "En quelle année ce Bilan Scope 2 a-t-il été réalisé ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "year",
                    id_kpis: [],
                  },
                  {
                    id: "32",
                    value:
                      "Veuillez préciser le périmètre couvert :\n(toute l'entreprise, un service, une usine, etc.)",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "text",
                    id_kpis: [],
                  },
                  {
                    id: "34",
                    value:
                      "Avez-vous publié ou communiqué les résultats de votre Bilan Scope 2 ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "35",
                        value: "Oui",
                        id_action: 5,
                        done: true,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "36",
                        value: "Non",
                        id_action: 5,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "37",
                    value:
                      "La mesure de votre empreinte carbone a-t-elle été validée par un organisme externe ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "38",
                        value: "Oui",
                        id_action: 206,
                        done: true,
                        information: null,
                        children: [
                          {
                            id: "39",
                            value:
                              "Veuillez préciser le nom de cet organisme :",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "41",
                        value: "Non",
                        id_action: 206,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "42",
                value: "Scope 3",
                id_action: null,
                done: true,
                information:
                  'Au cours des quatre dernières années, votre organisation a réalisé un bilan de ses émissions de gaz à effet de serre (BEGES) lié à ses activités et met actuellement en œuvre un plan d\'action visant à réduire ces émissions.\n\nPour les entreprises de moins de 250 salariés, vous pouvez ous faire accompagner par un expert ou effectuer votre BEGES en utilisant une solution gratuite en ligne, telle que celle proposée par la Fondation Good Planet.\n\nEn revanche, pour les entreprises de plus de 250 salariés, seuls les bilans conformes au GHG Protocol, au GRI 305, au Bilan Carbone® ou à la norme ISO 14064 sont acceptés.\n\n\nLe Scope 3 englobe toutes les autres émissions de gaz à effet de serre qui ne sont pas directement liées à la fabrication du produit mais à d\'autres phases de son cycle de vie (approvisionnement, transport, utilisation, fin de vie, etc.) :\n\n• Émissions liées à l\'énergie non incluse dans les catégories "émissions directes de GES" et "émissions de GES à énergies indirectes"\n• Achats de produits ou services\n• Immobilisation de biens\n• Déchets\n• Transport de marchandises en amont\n• Déplacements professionnels\n• Actifs en leasing en amont\n• Investissements\n• Transport de visiteurs et de clients\n• Transport de marchandises en aval\n• Utilisation des produits vendus\n• Fin de vie des produits vendus\n• Franchise en aval\n• Leasing en aval\n• Déplacements domicile-travail\n• Autres émissions indirectes',
                children: [
                  {
                    id: "43",
                    value:
                      "Quelles sont vos émissions de GES Scope 3 en tCO2eq ?",
                    id_action: null,
                    information:
                      "Veuillez indiquer le volume des émissions de GES Scope 3 de votre organisation en valeur absolue, exprimé en tonnes équivalent CO2 (TeqCO2), émis par votre entreprise sur une période donnée.\n\nCes émissions doivent refléter les résultats obtenus lors de la dernière évaluation de votre empreinte carbone.\n\nIl est recommandé de synchroniser la période de reporting des émissions de GES avec l'année fiscale de l'entreprise pour une intégration plus facile des données dans les rapports extra financiers.",
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [1],
                  },
                  {
                    id: "45",
                    value:
                      "En quelle année ce Bilan Scope 3 a-t-il été réalisé ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "year",
                    id_kpis: [],
                  },
                  {
                    id: "47",
                    value:
                      "Veuillez préciser le périmètre couvert :\n(toute l'entreprise, un service, une usine, etc.)",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "text",
                    id_kpis: [],
                  },
                  {
                    id: "49",
                    value:
                      "Avez-vous publié ou communiqué les résultats de votre Bilan Scope 3 ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "50",
                        value: "Oui",
                        id_action: 6,
                        done: true,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "51",
                        value: "Non",
                        id_action: 6,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "52",
                    value:
                      "La mesure de votre empreinte carbone a-t-elle été validée par un organisme externe ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "53",
                        value: "Oui",
                        id_action: 206,
                        done: true,
                        information: null,
                        children: [
                          {
                            id: "54",
                            value:
                              "Veuillez préciser le nom de cet organisme :",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "56",
                        value: "Non",
                        id_action: 206,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
        ],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "57",
    value:
      "L'entreprise mesure t-elle l'empreinte carbone de ses produits/services ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 24, 25, 26, 27, 28, 29,
    ],
    id_action: null,
    information:
      "L'empreinte carbone d'un produit comprend la totalité des émissions de gaz à effet de serre générées sur l'ensemble de son cycle de vie.\n\nUn score carbone produit ou service est un indicateur quantitatif qui mesure l'empreinte carbone d'un produit ou d'un service tout au long de son cycle de vie.\nIl calcule les émissions de gaz à effet de serre (GES) générées depuis l'extraction des matières premières, la production, le transport, l'utilisation, jusqu'à la fin de vie du produit.\nCe score permet de quantifier l'impact environnemental d'un produit ou servuce, de promouvoir des choix de consommation plus durables et éclairés par les consommateurs et d'encourager les entreprises à adopter des pratiques écologiques.\n\nL'empreinte carbone d'un produit ou service peut être mesurée grâce à des calculettes carbone.\nVoici quelques exemples d'outils existants en fonction de certains secteurs d'activité :\n\n• Textile : Affichage Environnemental, Ecobalyse, Clear Fashion\n• Meuble : Affichage Environnemental, Base Empreinte\n• Agroalimentaire : Planet-Score, Eco-Score, Agribalyse\n\nL'ADEME propose également des outils en ligne, gratuits et accessibles, pour calculer l'impact des produits : la Base Empreinte®, la Base Carbone® et la Base IMPACTS®.",
    children: [
      {
        id: "58",
        value: "Oui",
        id_action: 9,
        done: true,
        information: null,
        children: [
          {
            id: "59",
            value:
              "Veuillez préciser la part de vos produits ou services dont le score carbone a été mesuré :",
            id_action: null,
            information: null,
            children: [
              {
                id: "60",
                value: "Plus de 75 % de nos produits ou services",
                id_action: null,
                done: true,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "61",
                value: "De 51 % à 75 % de nos produits ou services",
                id_action: 7,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "62",
                value: "De 26 % à 50 % de nos produits ou services",
                id_action: 7,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "63",
                value: "De 1 % à 25 % de nos produits ou services",
                id_action: 7,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "64",
            value:
              "Veuillez préciser l'outil que vous avez utilisé pour mesurer le score carbone de vos produits ou services :",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "text",
            id_kpis: [],
          },
          {
            id: "66",
            value:
              "Publiez-vous le score carbone de vos produits ou services ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "67",
                value: "Oui",
                id_action: 8,
                done: true,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "68",
                value: "Non",
                id_action: 8,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
        ],
        type: "reponse",
      },
      {
        id: "69",
        value: "Non, mais le projet est en cours",
        id_action: 9,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
      {
        id: "70",
        value: "Non, et nous ne souhaitons pas mettre en place cette mesure",
        id_action: 9,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "71",
    value:
      "Comment ont été fixés les objectifs de réduction des émissions de GES de votre entreprise ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 24, 25, 26, 27, 28, 29,
    ],
    id_action: null,
    information: null,
    children: [
      {
        id: "72",
        value:
          "Actuellement, l'entreprise n'a pas fixé d'objectifs de réduction de ses émissions de GES.",
        id_action: 10,
        done: false,
        information:
          "Sélectionnez cette option si votre entreprise n'a pas encore fixé d'objectifs de réduction de ses émissions de GES.",
        children: [],
        type: "reponse",
      },
      {
        id: "73",
        value:
          "L'entreprise a fixé des objectifs de réduction selon la Science Based Targets initiative (SBTi) approuvés par la SBTi et divulgués chaque année.\n\nVeuillez préciser :",
        id_action: 11,
        done: true,
        information:
          "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES conformément aux recommandations de la SBTi, approuvés par le SBT et divulgués chaque année.",
        children: [
          {
            id: "74",
            value:
              "En quelle année avez-vous fixé vos objectifs de réduction ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "76",
            value: "En quelle année vos objectifs doivent-ils être atteint ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "78",
            value:
              "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "numeric",
            id_kpis: [],
          },
          {
            id: "80",
            value: "Quel(s) Scope(s) couvrent vos objectifs ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "81",
                value: "Scope 1",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "82",
                value: "Scope 2",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "83",
                value: "Scope 3",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
        ],
        type: "reponse",
      },
      {
        id: "84",
        value:
          "L'entreprise a fixé des objectifs de réduction selon la Science Based Targets initiative (SBTi) mais non approuvés par la SBTi.\n\nVeuillez préciser :",
        id_action: 11,
        done: false,
        information:
          "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES conformément aux recommandations de la SBTi, mais n'a pas encore obtenu l'approbation du SBT.\n\nUne entreprise peut faire approuver ses objectifs de réduction des émissions de gaz à effet de serre (GES) par l'initiative Science Based Targets (SBTi). Le SBTi aide les entreprises à fixer des objectifs de réduction des émissions conformes aux recommandations scientifiques nécessaires pour limiter le réchauffement de la planète bien en dessous de 2 °C, et idéalement à 1,5 °C, par rapport aux niveaux préindustriels.\n\n• Processus d'approbation par le SBTi\nL'entreprise commence par soumettre une lettre d'engagement, indiquant son intention de définir des objectifs fondés sur la science.\n\n• Développement des objectifs : L'entreprise développe ses objectifs de réduction des émissions en suivant les critères et les recommandations du SBTi. Ces objectifs doivent couvrir les émissions directes (Scope 1), les émissions indirectes provenant de l'énergie achetée (Scope 2), et le cas échéant, les autres émissions indirectes (Scope 3).\n\n• Soumission pour validation : L'entreprise soumet ses objectifs pour validation via le portail en ligne du SBTi. Les objectifs sont ensuite évalués par les experts du SBTi pour vérifier leur conformité aux critères de l'initiative.\n\n• Révision et approbation : Après évaluation, le SBTi fournit des commentaires détaillés. Si les objectifs sont conformes, ils sont approuvés. Si des modifications sont nécessaires, l'entreprise doit les apporter et soumettre à nouveau les objectifs pour examen.\n\n• Communication : Une fois approuvés, les objectifs peuvent être publiés et communiqués. L'entreprise est reconnue par le SBTi comme ayant des objectifs de réduction des émissions alignés sur la science.\n\nAvantages de l'approbation par le SBTi :\n\n• Crédibilité : Les objectifs validés par le SBTi sont reconnus mondialement comme étant alignés sur la science climatique.\n• Transparence : Les entreprises peuvent démontrer leur engagement envers la lutte contre le changement climatique de manière transparente.\n• Confiance des Parties Prenantes : Les investisseurs, clients et autres parties prenantes sont plus susceptibles de faire confiance à une entreprise ayant des objectifs validés par le SBTi.",
        children: [
          {
            id: "85",
            value:
              "En quelle année avez-vous fixé vos objectifs de réduction ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "87",
            value: "En quelle année vos objectifs doivent-ils être atteint ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "89",
            value:
              "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "numeric",
            id_kpis: [],
          },
          {
            id: "91",
            value: "Quel(s) Scope(s) couvrent vos objectifs ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "92",
                value: "Scope 1",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "93",
                value: "Scope 2",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "94",
                value: "Scope 3",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
        ],
        type: "reponse",
      },
      {
        id: "95",
        value:
          "L'entreprise a fixé des objectifs de réduction de ses GES, selon une cible compatible avec une trajectoire à +1,5°C (conformément à l'accord de Paris).\n\nVeuillez préciser :",
        id_action: null,
        done: true,
        information:
          "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES compatibles avec une trajectoire à +1,5°C, conformément à l'accord de Paris.\n\nLes objectifs compatibles avec une trajectoire de +1,5°C sont essentiels pour éviter les impacts les plus sévères du changement climatique.\n\nMême si votre entreprise n'a pas encore adopté les normes SBTi, viser une trajectoire de +1,5°C démontre un engagement fort et proactif envers la durabilité et la responsabilité environnementale.",
        children: [
          {
            id: "96",
            value:
              "En quelle année avez-vous fixé vos objectifs de réduction ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "98",
            value: "En quelle année vos objectifs doivent-ils être atteint ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "100",
            value:
              "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "numeric",
            id_kpis: [],
          },
          {
            id: "102",
            value: "Quel(s) Scope(s) couvrent vos objectifs ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "103",
                value: "Scope 1",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "104",
                value: "Scope 2",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "105",
                value: "Scope 3",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
        ],
        type: "reponse",
      },
      {
        id: "106",
        value:
          "L'entreprise a fixé des objectifs de réduction selon le One Earth Climate Model (OECM).\n\nVeuillez préciser :",
        id_action: null,
        done: true,
        information:
          "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES selon le One Earth Climate Model (OECM).\n\nLe One Earth Climate Model (OECM) est une méthodologie scientifique rigoureuse qui aide les entreprises à aligner leurs objectifs de réduction des émissions avec les recommandations nécessaires pour limiter le réchauffement climatique à 1,5°C, conformément à l'accord de Paris.\n\nFixer des objectifs selon le OECM démontre un engagement fort envers la durabilité et la responsabilité environnementale, et contribue à éviter les impacts les plus graves du changement climatique. Cela implique une évaluation détaillée des émissions tout au long de la chaîne de valeur et l'adoption de stratégies spécifiques pour réduire les émissions de manière significative et durable.\n\nLes entreprises utilisant le OECM bénéficient d'une approche intégrée qui tient compte de l'ensemble des impacts environnementaux, favorisant ainsi des pratiques plus écologiques et responsables.",
        children: [
          {
            id: "107",
            value:
              "En quelle année avez-vous fixé vos objectifs de réduction ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "109",
            value: "En quelle année vos objectifs doivent-ils être atteint ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "111",
            value:
              "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "numeric",
            id_kpis: [],
          },
          {
            id: "113",
            value: "Quel(s) Scope(s) couvrent vos objectifs ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "114",
                value: "Scope 1",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "115",
                value: "Scope 2",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "116",
                value: "Scope 3",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
        ],
        type: "reponse",
      },
      {
        id: "117",
        value:
          "L'entreprise a fixé des objectifs de réduction selon Greenhouse Gas Protocol (GHG Protocol).\n\nVeuillez préciser :",
        id_action: null,
        done: true,
        information:
          "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES selon le Greenhouse Gas Protocol (GHG Protocol).\n\nLe Greenhouse Gas Protocol (GHG Protocol) est une norme mondiale pour mesurer, gérer et réduire les émissions de gaz à effet de serre (GES). Il fournit des directives complètes pour comptabiliser les émissions directes (Scope 1), les émissions indirectes provenant de l'énergie achetée (Scope 2), et les autres émissions indirectes tout au long de la chaîne de valeur (Scope 3).\n\nFixer des objectifs selon le GHG Protocol démontre un engagement solide et structuré envers la gestion et la réduction des émissions de GES. Cette méthodologie permet aux entreprises de suivre et de réduire leurs émissions de manière transparente et conforme aux normes internationales.\n\nLes entreprises qui adoptent le GHG Protocol bénéficient d'un cadre éprouvé et largement reconnu pour évaluer et réduire leurs impacts environnementaux, favorisant ainsi une gestion plus durable et responsable des émissions de GES.",
        children: [
          {
            id: "118",
            value:
              "En quelle année avez-vous fixé vos objectifs de réduction ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "120",
            value: "En quelle année vos objectifs doivent-ils être atteint ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "122",
            value:
              "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "numeric",
            id_kpis: [],
          },
          {
            id: "124",
            value: "Quel(s) Scope(s) couvrent vos objectifs ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "125",
                value: "Scope 1",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "126",
                value: "Scope 2",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "127",
                value: "Scope 3",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
        ],
        type: "reponse",
      },
      {
        id: "128",
        value: "Autre, veuillez préciser :",
        id_action: null,
        done: true,
        information:
          "Sélectionnez cette option si votre entreprise a fixé des objectifs de réduction des émissions de GES selon une autre méthode.",
        children: [
          {
            id: "129",
            value: "Quelle méthodologie avez-vous suivie ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "text",
            id_kpis: [],
          },
          {
            id: "131",
            value:
              "En quelle année avez-vous fixé vos objectifs de réduction ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "133",
            value: "En quelle année vos objectifs doivent-ils être atteint ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "135",
            value:
              "Quel pourcentage de réduction des émissions de GES avez vous fixé ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "numeric",
            id_kpis: [],
          },
          {
            id: "137",
            value: "Quel(s) Scope(s) couvrent vos objectifs ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "138",
                value: "Scope 1",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "139",
                value: "Scope 2",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "140",
                value: "Scope 3",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
        ],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "141",
    value:
      "Avez-vous mis en place une stratégie de contribution/compensation carbone ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 24, 25, 26, 27, 28, 29,
    ],
    id_action: null,
    information: null,
    children: [
      {
        id: "142",
        value: "Oui",
        id_action: 14,
        done: true,
        information:
          "Sélectionnez cette option si votre entreprise achète des crédits carbone pour compenser ses émissions de gaz à effet de serre sur la part de ses émissions de CO2 incompressibles.",
        children: [
          {
            id: "143",
            value:
              "Quelle est l'année de votre dernière contribution carbone ?",
            id_action: null,
            information: null,
            children: [],
            type: "question",
            inputType: "year",
            id_kpis: [],
          },
          {
            id: "145",
            value:
              "Quels sont les types de crédits carbone auxquels vous avez eu recours lors de votre dernière compensation carbone ?",
            id_action: null,
            information:
              "Précisez si vos crédits carbone proviennent de projets naturels (comme la plantation d'arbres) ou de projets technologiques (comme la capture du CO2).",
            children: [
              {
                id: "146",
                value: "Projets naturels (par exemple, plantation d'arbres).",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "147",
                value: "Projets technologiques (par exemple, capture du CO2).",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "148",
                value:
                  "Projets de séquestration du carbone (par exemple, restauration des sols)",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "149",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "150",
                    value: "Veuillez préciser :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "text",
                    id_kpis: [],
                  },
                ],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
          {
            id: "152",
            value:
              "Dans quel territoire se situent les actions mises en place par votre dernière contribution carbone ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "153",
                value: "France",
                id_action: 13,
                done: true,
                information:
                  "Sélectionnez cette option pour indiquer que les projets de compensation carbone de votre entreprise sont situés en France.\n\nLa localisation des projets de compensation carbone est cruciale pour garantir une responsabilité environnementale adéquate. Compensez vos émissions là où elles sont générées afin de maximiser l'impact positif local.",
                children: [],
                type: "reponse",
              },
              {
                id: "154",
                value: "UE",
                id_action: 12,
                done: false,
                information:
                  "Sélectionnez cette option pour indiquer que les projets de compensation carbone de votre entreprise sont situés en UE mais hors de France.\n\nLa localisation des projets de compensation carbone est cruciale pour garantir une responsabilité environnementale adéquate. Compensez vos émissions là où elles sont générées afin de maximiser l'impact positif local.",
                children: [],
                type: "reponse",
              },
              {
                id: "155",
                value: "Hors France et UE",
                id_action: 13,
                done: false,
                information:
                  "Sélectionnez cette option pour indiquer que les projets de compensation carbone de votre entreprise sont situés hors France et UE.\n\nLa localisation des projets de compensation carbone est cruciale pour garantir une responsabilité environnementale adéquate. Compensez vos émissions là où elles sont générées afin de maximiser l'impact positif local.",
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
        ],
        type: "reponse",
      },
      {
        id: "156",
        value: "Non",
        id_action: 14,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "157",
    value:
      "Suivez-vous des indicateurs clés de performance pour mesurer votre contribution carbone ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 24, 25, 26, 27, 28, 29,
    ],
    id_action: null,
    information:
      "Indiquez-nous si vous utilisez des outils de suivi pour gérer la compensation carbone de votre entreprise.\n\nDes solutions technologiques permettent de calculer vos émissions, suivre l'impact des projets de compensation, et garantir leur conformité aux standards environnementaux. Ces outils offrent des rapports détaillés, surveillent l'évolution des projets, et assurent une compensation transparente et vérifiable.",
    children: [
      {
        id: "158",
        value: "Oui",
        id_action: 15,
        done: true,
        information: null,
        children: [
          {
            id: "159",
            value:
              "Quel indicateur vous permet de mesurer votre stratégie de contribution carbone ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "160",
                value: "Le % de vos émissions totales de CO2 compensées.",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "161",
                    value:
                      "Veuillez indiquer le % des émissions totales de CO2 que vous avez compensées.",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [6],
                  },
                ],
                type: "reponse",
              },
              {
                id: "163",
                value: "La quantité (en tonnes) de Co2 compensée.",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "164",
                    value:
                      "Veuillez indiquer la quantité en tonnes de Co2 compensées.",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [7],
                  },
                ],
                type: "reponse",
              },
              {
                id: "166",
                value:
                  "Le budget total consacré à votre contribution carbone (en % de votre CA).",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "167",
                    value:
                      "Veuillez indiquer le budget total consacré à votre contribution carbone (en % de votre CA).",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [8],
                  },
                ],
                type: "reponse",
              },
              {
                id: "169",
                value:
                  "Le nombre de projets de compensation que vous avez soutenu.",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "170",
                    value:
                      "Veuillez indiquer le nombre de projets de compensation carbone que vous avez soutenu.",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [9],
                  },
                ],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
        ],
        type: "reponse",
      },
      {
        id: "172",
        value: "Non",
        id_action: 15,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "173",
    value:
      "Votre activité utilise t-elle ou émet-elle des polluants multi-types (air, sol, eau) ?",
    ids_secteurs: [
      2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
      24, 25, 26, 27, 29,
    ],
    id_action: null,
    information: null,
    children: [
      {
        id: "174",
        value: "Oui",
        id_action: 16,
        done: true,
        information:
          "Sélectionnez cette option si votre entreprise émet ou utilise des polluants de l'air, des sols, de l'eau dans le cadre de ses propres opérations.\n\nLes polluants concernés sont :\n\n• Métaux lourds (mercure, plomb, cuivre)\n• Dioxines et furanes\n• Hydrocarbures\n• Pesticides\n• Produits chimiques industriels (ex : solvants, acides, bases, colorants et pigments synthétiques, produits chimiques de fabrication)\n• Produits pétroliers (ex : huiles, lubrifiants, bitumes)\n• Nutriments (azote, phosphore, nitrates, phosphates)",
        children: [
          {
            id: "175",
            value: "Lesquels :",
            id_action: null,
            information:
              "Veuillez sélectionner les types de polluants atmosphériques :",
            children: [
              {
                id: "176",
                value: "Métaux lourds (mercure, plomb, cuivre)",
                id_action: null,
                done: false,
                information:
                  "Les métaux lourds comme le mercure, le plomb et le cuivre sont souvent présents dans divers matériaux et produits industriels.\n\nVoici les principaux matériaux contenant des métaux lourds :\n\n• Alliages métalliques : Utilisés dans la fabrication d'outils, de composants électroniques, et d'équipements industriels.\n\n• Peintures et revêtements : Utilisés pour la protection et la finition des surfaces métalliques.\n\n• Piles et batteries : utilisées dans les appareils électroniques, les véhicules, et les équipements de secours.\n\n• Produits chimiques industriels : Utilisés dans les processus de galvanoplastie, d'extraction minière, et de fabrication de produits chimiques.\n\n• Matériaux de construction : Utilisés dans les tuyaux, les revêtements de toiture, et les structures en acier.",
                children: [
                  {
                    id: "177",
                    value:
                      "L'entreprise mesure t-elle son utilisation de matériaux contenant des métaux lourds ?",
                    id_action: null,
                    information:
                      "Matériaux potentiellement concernés :\n\n• Alliages métalliques : Outils, composants électroniques, équipements industriels.\n• Peintures et revêtements : Surfaces métalliques ou autres.\n• Piles et batteries : Appareils électroniques, véhicules, équipements de secours.\n• Produits chimiques industriels : Galvanoplastie, extraction minière, fabrication de produits chimiques.\n• Matériaux de construction : Tuyaux, revêtements de toiture, structures en acier.",
                    children: [
                      {
                        id: "178",
                        value: "Oui",
                        id_action: 19,
                        done: true,
                        information: null,
                        children: [
                          {
                            id: "179",
                            value:
                              "Quelles sont les quantités de matériaux contenant des métaux lourds utilisés annuellement par votre entreprise ?",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [10],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "181",
                        value:
                          "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                        id_action: 20,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "182",
                        value:
                          "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                        id_action: 20,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "183",
                value: "Pesticides",
                id_action: null,
                done: false,
                information:
                  "Les pesticides incluent les insecticides, herbicides, fongicides, rodenticides, et nématicides.\n\nRéduire les pesticides est crucial car ces substances chimiques ont des effets néfastes sur la santé humaine et l'environnement.\n\nLes secteurs les plus concernés sont :\nagriculture, industrie agroalimentaire, jardinage et espaces verts.\n\nIls sont associés à des risques tels que l'augmentation des cancers, des perturbations endocriniennes, des effets neurotoxiques, et des dommages graves aux écosystèmes et à la biodiversité.",
                children: [
                  {
                    id: "184",
                    value:
                      "L'entreprise mesure t-elle son utilisation de pesticides ?",
                    id_action: null,
                    information:
                      "L'utilisation de pesticides peut avoir des impacts significatifs sur la santé et l'environnement.\n\nVoici les principaux types de pesticides utilisés à mesurer :\n• Insecticides\n• Herbicides\n• Fongicides\n• Rodenticides\n• Nématicides",
                    children: [
                      {
                        id: "185",
                        value: "Oui",
                        id_action: 36,
                        done: true,
                        information: null,
                        children: [
                          {
                            id: "186",
                            value:
                              "Quelles sont les quantités totales de pesticides utilisées annuellement par votre entreprise ?",
                            id_action: null,
                            information:
                              "Veuillez indiquer les quantités totales de pesticides utilisés par votre entreprise dans le cadre de ses propres opérations, sur une période de 1 an.",
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [11],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "188",
                        value:
                          "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                        id_action: 37,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "189",
                        value:
                          "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                        id_action: 37,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "190",
                value: "Produits chimiques industriels (émetteurs de COV)",
                id_action: null,
                done: false,
                information:
                  "Les COV sont des substances chimiques présentes dans divers produits industriels et domestiques, connues pour s'évaporer facilement dans l'air.\n\nTypes de produits contenant des COV à inclure :\n\n• Solvants : Acétone, Méthanol, Toluène, Xylène, Benzène, utilisés pour le nettoyage industriel et le dégraissage.\n\n• Peintures et vernis : Utilisés pour les revêtements de surfaces et la finition de meubles.\n\n• Adhésifs et colles : Utilisés dans l'assemblage de matériaux, notamment dans l'industrie du bois et de la construction.\n\n• Produits de nettoyage : Utilisés dans divers contextes industriels.\n\n• Produits de soins personnels : Inclus dans des cosmétiques comme les laques pour cheveux et les déodorants.\n\n• Revêtements et finisseurs : Pour la protection et la finition des matériaux industriels.\n\n• L'utilisation de ces produits peut avoir des effets nocifs sur la santé humaine et l'environnement, notamment des problèmes respiratoires et des effets néfastes sur les écosystèmes.",
                children: [
                  {
                    id: "191",
                    value:
                      "L'entreprise mesure t-elle les quantités de produits chimiques industriels qu'elle utilise ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "192",
                        value: "Oui",
                        id_action: 38,
                        done: true,
                        information: null,
                        children: [
                          {
                            id: "193",
                            value:
                              "Quelles sont les quantités de produits chimiques industriels utilisés mensuellement par votre entreprise ?",
                            id_action: null,
                            information:
                              "Veuillez indiquer les quantités totales de produits chimiques industriels utilisés mensuellement par votre entreprise, dans le cadre de ses propres opérations.",
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [12],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "195",
                        value:
                          "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                        id_action: 39,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "196",
                        value:
                          "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                        id_action: 39,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "197",
                value:
                  "Produits pétroliers (ex : huiles, lubrifiants, bitumes) hors carburants",
                id_action: null,
                done: false,
                information:
                  "Les produits pétroliers peuvent causer une pollution étendue, affectant la qualité de l'eau et la santé des organismes aquatiques, de l'air et des sols.\n\nVoici la liste des produits pétroliers à prendre en compte dans votre mesure :\n\n• Huiles : Huiles moteur, huiles hydrauliques\nUtilisation : Lubrification des machines et équipements\n\n• Lubrifiants : Graisses industrielles, lubrifiants pour moteurs\nUtilisation : Réduction de la friction dans les moteurs et autres équipements mécaniques\n\n• Bitumes : Bitume pour enrobé routier\nUtilisation : Construction et maintenance des infrastructures routières\n\nNotez que cette catégorie exclut Les carburants tels que l'essence et le diesel;",
                children: [
                  {
                    id: "198",
                    value:
                      "L'entreprise mesure t-elle les quantités de produits pétroliers qu'elle utilise ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "199",
                        value: "Oui",
                        id_action: 40,
                        done: true,
                        information: null,
                        children: [
                          {
                            id: "200",
                            value:
                              "Quelles sont les quantités de produits pétroliers tels que les huiles, lubrifiants ou bitumes utilisés mensuellement par votre entreprise ?",
                            id_action: null,
                            information:
                              "Veuillez indiquer les quantités totales de produits pétroliers utilisés mensuellement par votre entreprise, dans le cadre de ses propres opérations",
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [13],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "202",
                        value:
                          "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                        id_action: 41,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "203",
                        value:
                          "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                        id_action: 41,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "204",
                value:
                  "Engrais ou produits contenants des nutriments (azote, phosphore, nitrates, phosphates)",
                id_action: null,
                done: false,
                information:
                  "La gestion des nutriments est cruciale pour éviter des effets environnementaux graves. Un excès de nutriments tels que l'azote, le phosphore, les nitrates et les phosphates peut provoquer :\n\n• Dans l'eau : L'excès de nutriments entraîne l'eutrophisation, une prolifération d'algues nuisibles, qui réduit l'oxygène dissous et crée des zones mortes dans les plans d'eau, perturbant la vie aquatique.\n\n• Dans les sols : Un apport excessif de nutriments acidifie les sols, diminue leur fertilité et favorise le lessivage, ce qui peut contaminer les nappes phréatiques.\n\n• Dans l'air : L'azote peut se transformer en oxydes nitriques, contribuant à la formation de smog et aux pluies acides, qui impactent la qualité de l'air et les écosystèmes.\n\nSecteurs concernés :\n\n• Agriculture : Les pratiques agricoles intensives, via les engrais chimiques et les déjections animales, sont une source majeure d'émissions de nutriments.\n• Industries alimentaires : La transformation des aliments génère des effluents riches en nutriments, susceptibles de contaminer l'environnement.\n• Construction : Le lessivage des matériaux de construction, combiné à une gestion inadéquate des eaux pluviales, peut également disperser des nutriments dans les écosystèmes voisins.",
                children: [
                  {
                    id: "205",
                    value:
                      "Avez-vous mis en place des pratiques pour réduire ou optimiser l'utilisation des nutriments ?",
                    id_action: null,
                    information:
                      "Optimiser l'utilisation des nutriments est essentiel pour limiter les impacts environnementaux négatifs tout en améliorant l'efficacité des pratiques agricoles et industrielles.",
                    children: [
                      {
                        id: "206",
                        value: "Oui",
                        id_action: 21,
                        done: true,
                        information: null,
                        children: [
                          {
                            id: "207",
                            value: "Quelles pratiques ont été mises en place ?",
                            id_action: null,
                            information: null,
                            children: [
                              {
                                id: "208",
                                value:
                                  "Optimisation de l'application d'engrais (quantité, fréquence, période)",
                                id_action: null,
                                done: false,
                                information:
                                  "Cette pratique se concentre sur l'application d'engrais de manière ciblée et précise en fonction des besoins réels des cultures. En ajustant la quantité, la fréquence et le moment de l'application, l'entreprise peut réduire le gaspillage d'engrais et minimiser les pertes dans l'environnement.\nCette pratique est validée scientifiquement par l'approche des 4R (la bonne source, au bon moment, à la bonne dose, au bon endroit), qui permet d'améliorer l'efficacité de l'utilisation des nutriments tout en réduisant les pertes vers l'environnement.",
                                children: [],
                                type: "reponse",
                              },
                              {
                                id: "209",
                                value:
                                  "Pratiques de culture durable (agriculture de précision, rotation des cultures, etc.)",
                                id_action: null,
                                done: false,
                                information:
                                  "Ces pratiques sont fondamentales pour la gestion des sols et la préservation des nutriments. L'agriculture de précision, qui utilise des technologies comme des capteurs et des outils de télédétection, est particulièrement efficace pour optimiser l'utilisation des intrants (engrais, eau). La rotation des cultures aide à maintenir la fertilité du sol et à limiter le besoin d'intrants chimiques en exploitant les cycles naturels de récupération des nutriments.",
                                children: [],
                                type: "reponse",
                              },
                              {
                                id: "210",
                                value:
                                  "Utilisation de fertilisants biologiques ou d'amendements organiques (réduction des engrais chimiques)",
                                id_action: null,
                                done: false,
                                information:
                                  "L'utilisation de composts, de fumiers ou d'autres amendements organiques permet une libération progressive des nutriments, évitant les chocs de pollution comme ceux causés par des engrais chimiques à libération rapide. Cela améliore la santé du sol à long terme et réduit le risque de pollution des nappes phréatiques.",
                                children: [],
                                type: "reponse",
                              },
                              {
                                id: "211",
                                value: "Autre(s)",
                                id_action: null,
                                done: false,
                                information: null,
                                children: [
                                  {
                                    id: "212",
                                    value: "Veuillez préciser :",
                                    id_action: null,
                                    information: null,
                                    children: [],
                                    type: "question",
                                    inputType: "text",
                                    id_kpis: [],
                                  },
                                ],
                                type: "reponse",
                              },
                            ],
                            type: "question",
                            inputType: "multiple",
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "214",
                        value:
                          "Non, mais l'entreprise envisage de mettre en place des pratiques",
                        id_action: 21,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "215",
                        value:
                          "Non, et l'entreprise ne souhaite pas mettre en place de mesures pour l'instant",
                        id_action: 21,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "229",
                value: "Autre(s)",
                id_action: 46,
                done: false,
                information:
                  "Veuillez indiquer le type de polluant.\n\nSi vous avez déjà effectué une mesure d'émission de ce polluant, merci d'indiquer les quantités émises (par an) lors de votre dernière mesure et l'unité de mesure correspondante (kg, tonne, etc.).\nVous pouvez aussi indiquer l'utilisation de matériaux ou produits contenant ou générant ce type de polluant.",
                children: [
                  {
                    id: "230",
                    value: "Veuillez préciser :",
                    id_action: 47,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "text",
                    id_kpis: [],
                  },
                ],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
          {
            id: "232",
            value:
              "Avez-vous mis en place des mesures pour réduire les émissions de ces polluants ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "233",
                value: "Oui",
                id_action: 48,
                done: true,
                information: null,
                children: [
                  {
                    id: "234",
                    value:
                      "Quelles mesures avez-vous mises en place pour réduire les émissions de ces polluants ?",
                    id_action: null,
                    information:
                      "Veuillez sélectionner les mesures mises en place par votre entreprise pour réduire les émissions de polluants des sols.",
                    children: [
                      {
                        id: "235",
                        value:
                          "Adoption de produits et procédés moins polluants ou réduction de l'utilisation de produits chimiques dangereux",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous avez adopté des produits et procédés moins polluants ou si vous avez réduit l'utilisation de produits chimiques dangereux.\n\nAdopter des produits et procédés moins polluants permet de réduire les émissions de polluants et de protéger la santé humaine et l'environnement.\n\nRéduire l'utilisation de produits chimiques dangereux contribue à diminuer les émissions de polluants nocifs pour la santé et l'environnement.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "236",
                        value:
                          "Mise en place de procédures de gestion et de traitement des déchets",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous avez mis en place des procédures de gestion et de traitement des déchets.\n\nMettre en place des procédures de gestion et de traitement des déchets permet de minimiser les émissions de polluants des sols issus des déchets industriels et de protéger l'environnement.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "243",
                        value: "Autre(s)",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [
                          {
                            id: "244",
                            value: "Veuillez préciser :",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "multiple",
                  },
                ],
                type: "reponse",
              },
              {
                id: "246",
                value: "Non",
                id_action: 48,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
        ],
        type: "reponse",
      },
      {
        id: "247",
        value: "Non",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
      {
        id: "248",
        value: "Ne sait pas",
        id_action: 49,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "249",
    value:
      "Votre activité utilise t-elle ou émet-elle des polluants atmosphériques ?",
    ids_secteurs: [
      2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
      24, 25, 26, 27, 29,
    ],
    id_action: null,
    information: null,
    children: [
      {
        id: "250",
        value: "Oui",
        id_action: 50,
        done: true,
        information:
          "Sélectionnez cette option si votre entreprise émet ou utilise des polluants atmosphériques dans le cadre de ses propres opérations.\n\nLes polluants concernés sont :\n\n• Composés organiques volatils ou COV (incluant benzène, formaldéhyde, etc.)\n• Particules en suspension (PM)\n• Monoxyde de carbone (CO)\n• Oxydes d'azote (NOx)\n• Ammoniac\n• Ozone (O₃)\n• Dioxyde de carbone (CO₂)\n• Radon",
        children: [
          {
            id: "251",
            value: "Lesquels :",
            id_action: null,
            information:
              "Veuillez sélectionner les types de polluants atmosphériques :",
            children: [
              {
                id: "252",
                value:
                  "Polluants atmosphériques issus de la combustion d'hydrocarbures (CO, NOx, CO₂)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "253",
                    value:
                      "L'entreprise mesure t-elle son utilisation de polluants atmosphériques issus de la combustion ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "254",
                        value: "Oui",
                        id_action: 77,
                        done: true,
                        information: null,
                        children: [
                          {
                            id: "255",
                            value:
                              "Quelles sont les quantités de combustibles fossiles utilisées annuellement par votre entreprise ?",
                            id_action: null,
                            information:
                              "Les hydrocarbures sont des composés organiques présents dans les combustibles fossiles comme le pétrole, le gaz naturel et le charbon.\n\nLa combustion de ces hydrocarbures génère des polluants atmosphériques tels que le CO, le CO₂ et les NOx, qui affectent la qualité de l'air et contribuent au changement climatique.",
                            children: [
                              {
                                id: "256",
                                value: "Essence",
                                id_action: null,
                                information:
                                  "Veuillez indiquer les quantités d'essence utilisées par votre entreprise dans le cadre de ses propres opérations, sur une période de 1 an.",
                                children: [],
                                type: "question",
                                inputType: "numeric",
                                id_kpis: [14],
                              },
                              {
                                id: "257",
                                value: "Diesel",
                                id_action: null,
                                information:
                                  "Veuillez indiquer les quantités de diesel utilisées par votre entreprise dans le cadre de ses propres opérations, sur une période de 1 an.",
                                children: [],
                                type: "question",
                                inputType: "numeric",
                                id_kpis: [15],
                              },
                            ],
                            type: "question",
                            inputType: "multiple",
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "263",
                        value:
                          "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                        id_action: 83,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "264",
                        value:
                          "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                        id_action: 83,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "291",
                value: "Autre(s)",
                id_action: 88,
                done: false,
                information:
                  "Veuillez indiquer le type de polluant atmosphérique (par exemple : COSV, soufre, produits chimiques industriels, Gaz à Effet de Serre autres que CO2 tels que protoxyde d'azote, HFC, PFC, etc).\n\nSi vous avez déjà effectué une mesure d'émission de ce polluant, merci d'indiquer les quantités émises (par an) lors de votre dernière mesure et l'unité de mesure correspondante (kg, tonne, etc.).\nVous pouvez aussi indiquer l'utilisation de matériaux ou produits contenant ou générant ce type de polluant atmosphérique.",
                children: [
                  {
                    id: "292",
                    value: "Veuillez préciser :",
                    id_action: 89,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "text",
                    id_kpis: [],
                  },
                ],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
          {
            id: "294",
            value:
              "Quelles mesures avez-vous mises en place pour réduire les émissions de ces polluants atmosphériques ?",
            id_action: null,
            information:
              "Veuillez sélectionner les mesures mises en place par votre entreprise pour réduire les émissions de polluants atmosphériques.",
            children: [
              {
                id: "295",
                value: "Adoption de produits et procédés moins polluants",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette action si vous avez adopté des produits et procédés moins polluants.\n\nAdopter des produits et procédés moins polluants permet de réduire les émissions de polluants atmosphériques et de protéger la santé humaine et l'environnement.",
                children: [],
                type: "reponse",
              },
              {
                id: "302",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette action si vous avez mis en place d'autres mesures pour réduire les émissions de polluants atmosphériques.\n\nPréciser ces mesures permet de documenter les actions spécifiques prises par l'entreprise.",
                children: [
                  {
                    id: "303",
                    value: "Veuillez préciser :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "text",
                    id_kpis: [],
                  },
                ],
                type: "reponse",
              },
              {
                id: "305",
                value: "Aucune mesure mise en place",
                id_action: 90,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
        ],
        type: "reponse",
      },
      {
        id: "306",
        value: "Non",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
      {
        id: "307",
        value: "Ne sait pas",
        id_action: 91,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },

  {
    id: "308",
    value: "Votre entreprise génère-t-elle des pollutions aquatiques ?",
    ids_secteurs: [
      2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
      24, 25, 26, 27, 29,
    ],
    id_action: null,
    information:
      "Les polluants aquatiques incluent des détergents et agents tensioactifs tels que les alkylbenzènesulfonates linéaires (LAS), les alkylphénol éthoxylates (APEO), les polyéthylène glycols (PEG), le Sodium Lauryl Sulfate (SLS) et les ammoniums quaternaires (Quats).\n\nCes substances, couramment utilisées dans les produits de nettoyage et les soins personnels, peuvent perturber les écosystèmes aquatiques en modifiant la tension superficielle de l'eau et en facilitant la dispersion d'autres polluants.",
    children: [
      {
        id: "309",
        value: "Oui",
        id_action: 92,
        done: true,
        information: null,
        children: [
          {
            id: "310",
            value: "Lesquels :",
            id_action: null,
            information:
              "Veuillez sélectionner les types de polluants aquatiques :",
            children: [
              {
                id: "311",
                value: "Détergents et agents tensioactifs",
                id_action: null,
                done: false,
                information:
                  "Il est nécessaire de réduire les émissions de ces substances car elles peuvent perturber les écosystèmes aquatiques en réduisant la tension superficielle de l'eau et en augmentant la solubilité d'autres polluants.\n\nLes détergents et agents tensioactifs comprennent généralement plusieurs types de composés chimiques qui peuvent être classés comme polluants.\n\nVoici quelques exemples courants :\n\n• Alkylbenzènesulfonates linéaires (LAS) : composés organiques sulfonés, souvent utilisés dans les détergents à lessive et les produits de nettoyage.\n\n• Alkylphénol éthoxylates (APEO) : utilisés comme agents émulsifiants et agents de surface, ces composés peuvent être persistants et bioaccumulatifs.\n\n• Polyéthylène glycols (PEG) et Polypropylène glycols (PPG) : utilisés comme agents épaississants et solvants dans divers produits de nettoyage.\n\n• Phosphates : souvent utilisés dans les détergents pour adoucir l'eau, mais peuvent contribuer à l'eutrophisation des eaux.\n\n• Sodium Lauryl Sulfate (SLS) et Sodium Laureth Sulfate (SLES) : tensioactifs courants dans les produits de nettoyage et les soins personnels.\n\n• Quats (ammoniums quaternaires) : utilisés comme désinfectants et agents antimicrobiens dans les nettoyants.",
                children: [
                  {
                    id: "312",
                    value:
                      "L'entreprise mesure t-elle son utilisation de détergents et agents tensioactifs ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "313",
                        value: "Oui",
                        id_action: 95,
                        done: true,
                        information: null,
                        children: [
                          {
                            id: "314",
                            value:
                              "Quelles sont les quantités de détergents et agents tensioactifs utilisées annuellement par votre entreprise ?",
                            id_action: null,
                            information:
                              "L'utilisation de détergents et agents tensioactifs dans vos processus peut entraîner des émissions importantes.\n\nLes détergents et agents tensioactifs incluent :\n\n• Alkylbenzènesulfonates linéaires (LAS)\n• Alkylphénol éthoxylates (APEO)\n• Polyéthylène glycols (PEG) et Polypropylène glycols (PPG)\n• Phosphates\n• Sodium Lauryl Sulfate (SLS) et Sodium Laureth Sulfate (SLES)\n• Quats (ammoniums quaternaires)",
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [26],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "316",
                        value:
                          "Non mesuré actuellement (ou mesuré il y a plus de 1 an), mais l'entreprise souhaite mettre en place cette mesure.",
                        id_action: 96,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "317",
                        value:
                          "Non, et l'entreprise ne souhaite pas mettre en place cette mesure pour l'instant.",
                        id_action: 96,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "318",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "319",
                    value: "Veuillez préciser :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "text",
                    id_kpis: [],
                  },
                ],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
          {
            id: "321",
            value:
              "Avez-vous mis en place des mesures pour réduire les émissions de ces polluants aquatiques ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "322",
                value: "Oui",
                id_action: 103,
                done: true,
                information: null,
                children: [
                  {
                    id: "323",
                    value:
                      "Quelles mesures avez-vous mises en place pour réduire les émissions de ces polluants aquatiques ?",
                    id_action: null,
                    information:
                      "Veuillez sélectionner les mesures mises en place par votre entreprise pour réduire les émissions de polluants atmosphériques.",
                    children: [
                      {
                        id: "324",
                        value:
                          "Adoption de produits et procédés moins polluants",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous avez adopté des produits et procédés moins polluants. Adopter des produits et procédés moins polluants permet de réduire les émissions de polluants aquatiques et de protéger la santé humaine et l'environnement.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "325",
                        value:
                          "Installation de systèmes de traitement des eaux usées",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous avez installé des systèmes de traitement des eaux usées. Installer des systèmes de traitement des eaux usées aide à éliminer les polluants avant qu'ils ne soient libérés dans l'environnement aquatique.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "326",
                        value:
                          "Réduction de l'utilisation de produits chimiques dangereux",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous avez réduit l'utilisation de produits chimiques dangereux. Réduire l'utilisation de produits chimiques dangereux contribue à diminuer les émissions de polluants aquatiques nocifs pour la santé et l'environnement.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "327",
                        value:
                          "Mise en place de procédures de gestion et de traitement des déchets",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous avez mis en place des procédures de gestion et de traitement des déchets. Mettre en place des procédures de gestion et de traitement des déchets permet de minimiser les émissions de polluants aquatiques issus des déchets industriels et de protéger l'environnement.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "328",
                        value:
                          "Formation des employés sur les pratiques de réduction des polluants aquatiques",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si ou vos employés avez été formés aux pratiques de réduction des polluants aquatiques.\n\nLa formation garantit que tout le personnel comprend et applique les meilleures pratiques pour minimiser les émissions de polluants aquatiques.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "329",
                        value:
                          "Surveillance continue des niveaux de polluants aquatiques et réduction des émissions de polluants en conséquence",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous surveillez continuellement les niveaux de polluants aquatiques et si vous mettez en place des ajustements de mesures en conséquence.\n\nSurveiller les niveaux de polluants permet de réagir rapidement à toute augmentation des émissions et de maintenir des niveaux de pollution bas.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "330",
                        value: "Autre(s)",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [
                          {
                            id: "331",
                            value: "Veuillez préciser :",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "multiple",
                  },
                ],
                type: "reponse",
              },
              {
                id: "333",
                value: "Non",
                id_action: 103,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
        ],
        type: "reponse",
      },
      {
        id: "334",
        value: "Non",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
      {
        id: "335",
        value: "Ne sait pas",
        id_action: 104,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "336",
    value:
      "Avez-vous mis en place des actions pour limiter la pression de vos activités sur la biodiversité et les écosystèmes et contribuer à leur préservation ?",
    ids_secteurs: [1, 3, 9, 28],
    id_action: null,
    information: null,
    children: [
      {
        id: "337",
        value: "Oui",
        id_action: 115,
        done: true,
        information: null,
        children: [
          {
            id: "338",
            value:
              "Avez-vous mené une étude d'impact environnemental pour évaluer ou surveiller l'impact de l'entreprise sur les écosystèmes ?",
            id_action: null,
            information:
              "Sélectionnez cette option si vous réalisez des études d'impact environnemental pour évaluer ou surveiller l'impact de votre entreprise sur les écosystèmes.\n\nRéaliser des études d'impact environnemental permet d'identifier les effets négatifs potentiels de vos activités sur les écosystèmes et de mettre en place des mesures d'atténuation efficaces.\n\nCela contribue à :\n\n• Préserver la biodiversité en réduisant les impacts négatifs de vos opérations\n• Améliorer la conformité réglementaire et éviter les sanctions\n• Renforcer l'image de marque en démontrant un engagement envers la durabilité environnementale\n• Faciliter le dialogue avec les parties prenantes grâce à des données transparentes et fiables\n• Optimiser les processus internes pour une gestion plus durable des ressources naturelles",
            children: [
              {
                id: "339",
                value: "Oui",
                id_action: 105,
                done: true,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "340",
                value: "Non",
                id_action: 105,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "341",
            value:
              "Avez-vous évalué l'impact de votre chaîne d'approvisionnement sur la biodiversité ?",
            id_action: null,
            information:
              "Sélectionnez cette option si vous évaluez l'impact de votre chaîne d'approvisionnement sur la biodiversité.\nÉvaluer l'impact de la chaîne d'approvisionnement permet d'identifier et de réduire les effets négatifs potentiels sur les écosystèmes, de promouvoir des pratiques durables parmi les fournisseurs, et d'améliorer la résilience de votre chaîne d'approvisionnement.\n\nCela contribue à :\n\n• Identifier les risques environnementaux associés aux fournisseurs\n• Encourager des pratiques durables tout au long de la chaîne d'approvisionnement\n• Améliorer la transparence et la responsabilité environnementale\n• Réduire les impacts négatifs sur les écosystèmes locaux\n• Renforcer les relations avec les parties prenantes et les autorités réglementaires",
            children: [
              {
                id: "342",
                value: "Oui",
                id_action: 106,
                done: true,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "343",
                value: "Non",
                id_action: 106,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "344",
            value:
              "Avez-vous noué des partenariats avec des ONG spécialisées dans la préservation de la biodiversité ?",
            id_action: null,
            information:
              "Sélectionnez cette option si vous établissez des partenariats avec des ONG spécialisées dans la préservation de la biodiversité.\n\nÉtablir des partenariats avec des ONG permet de renforcer les actions de conservation grâce à une expertise spécialisée, de bénéficier de réseaux et de ressources additionnelles, et d'augmenter l'efficacité des programmes de préservation.\n\nCela contribue à :\n\n• Renforcer l'expertise en matière de biodiversité\n• Accroître l'impact des projets de conservation\n• Promouvoir la responsabilité sociale et environnementale\n• Améliorer les relations avec les parties prenantes et la communauté locale\n• Assurer une gestion durable des écosystèmes et des ressources naturelles",
            children: [
              {
                id: "345",
                value: "Oui",
                id_action: 107,
                done: true,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "346",
                value: "Non",
                id_action: 107,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "347",
            value:
              "Avez-vous participé à des initiatives de restauration ou de préservation de la biodiversité, telles que la plantation d'arbres ou la réhabilitation d'habitats naturels ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "348",
                value: "Oui",
                id_action: 108,
                done: true,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "349",
                value: "Non",
                id_action: 108,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "350",
            value:
              "Avez-vous lancé ou financé des projets de restauration écologique des zones impactées par votre activité ? (participation directe ou financement de projets régénératifs)",
            id_action: null,
            information:
              "Sélectionnez cette option si vous participez directement ou financez des projets de restauration écologique pour les zones impactées par vos activités.\n\nMener des projets de restauration écologique permet de rétablir les fonctions naturelles des écosystèmes endommagés, de séquestrer le CO2, et de promouvoir la biodiversité.\n\nCela contribue à :\n\n• Améliorer la qualité de l'eau et du sol dans les zones restaurées\n• Séquestrer ou réduire les émissions de CO2\n• Augmenter le taux de survie des espèces plantées ou réintroduites\n• Mobiliser des ressources humaines, matérielles et financières pour des initiatives durables\n• Accroître le nombre de projets de restauration écologique",
            children: [
              {
                id: "351",
                value: "Oui",
                id_action: 109,
                done: true,
                information: null,
                children: [
                  {
                    id: "352",
                    value:
                      "Quel est le % de votre Chiffre d'Affaire annuel attribué à des projets de restauration écologique",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [27],
                  },
                ],
                type: "reponse",
              },
              {
                id: "354",
                value: "Non",
                id_action: 109,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "355",
            value:
              "Avez-vous contribué à la conservation des habitats par la création de réserves naturelles ou de corridors pour la faune ?",
            id_action: null,
            information:
              "Sélectionnez cette option si vous avez mis en place des initiatives pour conserver les habitats en créant des réserves naturelles ou des corridors pour la faune.\n\nLa création de réserves naturelles et de corridors pour la faune permet de protéger les espèces menacées, de maintenir la connectivité des habitats, et de réduire les menaces sur la biodiversité.\n\nCela contribue à :\n\n• Préserver les habitats naturels et les écosystèmes\n• Favoriser la survie et la reproduction des espèces animales et végétales\n• Maintenir la connectivité écologique entre les habitats fragmentés\n• Réduire les impacts négatifs des activités humaines sur la faune et la flore\n• Promouvoir la participation et l'engagement des communautés locales dans la conservation des habitats",
            children: [
              {
                id: "356",
                value: "Oui",
                id_action: 110,
                done: true,
                information: null,
                children: [
                  {
                    id: "357",
                    value:
                      "Quelle superficie de zones ou d'espaces avez-vous aménagée pour soutenir la biodiversité (en m2) ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [28],
                  },
                ],
                type: "reponse",
              },
              {
                id: "359",
                value: "Non",
                id_action: 110,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "360",
            value:
              "Avez-vous élaboré une stratégie de protection des espèces, incluant la préservation et/ou l'introduction de biodiversité dans le respect de l'écosystème local ?",
            id_action: null,
            information:
              "Sélectionnez cette option si vous mettez en place des stratégies pour préserver ou introduire la biodiversité en respectant l'écosystème local.\n\nProtéger les espèces et introduire de la biodiversité de manière stratégique permet de maintenir l'équilibre écologique, de préserver les habitats naturels, et de garantir la viabilité à long terme des écosystèmes locaux.\n\nCela contribue à :\n\n• Augmenter le nombre d'espèces protégées\n• Restaurer les habitats naturels\n• Améliorer la diversité des espèces présentes\n• Assurer la réussite des projets de restauration écologique\n• Gérer durablement les ressources naturelles prélevées",
            children: [
              {
                id: "361",
                value: "Oui",
                id_action: 111,
                done: true,
                information: null,
                children: [
                  {
                    id: "362",
                    value:
                      "Veuillez préciser la stratégie de protection des espèces que vous avez mis en oeuvre :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "text",
                    id_kpis: [],
                  },
                ],
                type: "reponse",
              },
              {
                id: "364",
                value: "Non",
                id_action: 111,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "365",
            value:
              "Avez-vous suivi des formations sur l'importance de la biodiversité cette dernière année ?",
            id_action: null,
            information:
              "Sélectionnez cette option si vous organisez des sessions de formation et de sensibilisation sur l'importance de la biodiversité pour vos employés.\n\nFormer et sensibiliser les employés sur l'importance de la biodiversité permet d'améliorer la compréhension des enjeux environnementaux, de promouvoir des pratiques durables au sein de l'entreprise, et de renforcer l'engagement envers la conservation de la biodiversité.\n\nCela contribue à :\n\n• Augmenter la sensibilisation à la biodiversité parmi les employés\n• Améliorer les connaissances sur les pratiques durables\n• Renforcer l'engagement environnemental de l'entreprise\n• Promouvoir la collaboration avec des organisations spécialisées en biodiversité\n• Améliorer la performance environnementale globale de l'entreprise",
            children: [
              {
                id: "366",
                value: "Oui",
                id_action: 112,
                done: true,
                information: null,
                children: [
                  {
                    id: "367",
                    value:
                      "Combien d'heure de formations avez-vous suivies concernant l'importance de la biodiversité ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [29],
                  },
                ],
                type: "reponse",
              },
              {
                id: "369",
                value: "Non",
                id_action: 112,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "370",
            value:
              "Avez-vous mis en place des campagnes de sensibilisations sur l'importance de la biodiversité cette dernière année ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "371",
                value: "Oui",
                id_action: 84,
                done: true,
                information: null,
                children: [
                  {
                    id: "372",
                    value:
                      "Combien de personnes ont été sensibilisées par vos campagnes de sensibilisation ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [30],
                  },
                ],
                type: "reponse",
              },
              {
                id: "373",
                value: "Non",
                id_action: 84,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "374",
            value:
              "Avez-vous obtenu des certifications liées à la biodiversité (telles que le Label Signature Biodiversité ou le Label Entreprises engagées pour la nature par exemple) ?",
            id_action: null,
            information:
              "Sélectionnez cette option si vous obtenez des certifications liées à la biodiversité pour vos pratiques agricoles ou industrielles.\n\nObtenir des certifications liées à la biodiversité permet de garantir que vos pratiques respectent des normes environnementales élevées, de réduire les impacts négatifs sur les écosystèmes, et de promouvoir des pratiques durables.\n\nCela contribue à :\n\n• Protéger et restaurer les habitats naturels\n• Réduire la quantité de polluants utilisés dans les opérations\n• Adopter des pratiques agricoles ou industrielles plus durables\n• Améliorer la réputation environnementale de l'entreprise\n• Se conformer aux exigences réglementaires et des marchés",
            children: [
              {
                id: "375",
                value: "Oui",
                id_action: 113,
                done: true,
                information: null,
                children: [
                  {
                    id: "376",
                    value:
                      "Quelle(s) certification(s) liée(s) à la biodiversité avez-vous obtenue(s) ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "text",
                    id_kpis: [],
                  },
                ],
                type: "reponse",
              },
              {
                id: "378",
                value: "Non",
                id_action: 113,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "379",
            value:
              "Avez-vous réduit l'usage de produits chimiques en faveur de solutions biologiques et durables ?",
            id_action: null,
            information:
              "Sélectionnez cette option si vous réduisez l'usage des produits chimiques au profit de solutions biologiques et durables.\n\nRéduire l'usage des produits chimiques et adopter des solutions biologiques contribue à la protection de la biodiversité et à la santé des écosystèmes.\n\nCela permet de :\n\n• Diminuer les résidus chimiques dans l'environnement\n• Améliorer la qualité de l'eau et du sol\n• Promouvoir l'utilisation de produits biologiques\n• Réduire les impacts négatifs sur la faune et la flore\n• Renforcer les pratiques agricoles durables",
            children: [
              {
                id: "380",
                value: "Oui",
                id_action: 114,
                done: true,
                information: null,
                children: [
                  {
                    id: "381",
                    value:
                      "Quelle est la part de produits chimiques remplacés par des produits biologiques ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [31],
                  },
                ],
                type: "reponse",
              },
              {
                id: "383",
                value: "Non",
                id_action: 114,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "384",
            value: "Autre(s)",
            id_action: null,
            done: false,
            information:
              "Sélectionnez cette option si vous avez mis en place des actions spécifiques de protection de la biodiversité et de préservation des écosystèmes qui ne sont pas couvertes par les autres catégories.\n\nPrécisez la nature de ces actions et leurs impacts.",
            children: [
              {
                id: "385",
                value: "Veuillez préciser :",
                id_action: null,
                information: null,
                children: [],
                type: "question",
                inputType: "text",
                id_kpis: [],
              },
            ],
            type: "reponse",
          },
        ],
        type: "reponse",
      },
      {
        id: "387",
        value: "Non",
        id_action: 115,
        done: false,
        information:
          "Sélectionnez cette option si vous n'avez mis en place aucune action pour la protection de la biodiversité et la préservation des écosystèmes.",
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "388",
    value: "Votre entreprise génère-t-elle des déchets ?",
    ids_secteurs: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 29,
    ],
    id_action: null,
    information:
      "La loi anti-gaspillage (AGEC) vise à réduire le gaspillage et à promouvoir le recyclage, la revente d'occasion et le réemploi des déchets.\n\nSes objectifs incluent la réduction de l'utilisation du plastique et des emballages plastiques à usage unique de 20 %, la suppression des emballages à usage unique, et le recyclage de 100 % des emballages plastiques à usage unique d'ici 2025.\n\nElle interdit également la distribution gratuite de bouteilles en plastique en entreprise ou dans les ERP, en encourageant l'installation de fontaines à eau gratuites.\n\nLe décret d'avril 2022 fixe un objectif de 10 % d'emballages réemployés d'ici 2027 pour les entreprises mettant en circulation plus de 10 000 emballages par an, avec un pourcentage proportionnel à leur chiffre d'affaires.\n\nBon à savoir : En cas de non-respect du tri à la source, les entreprises peuvent être sanctionnées par une amende de 750 € pour les personnes physiques et 3 750 € pour les personnes morales, ainsi qu'une peine de 4 ans de prison et 150 000 € d'amende pour les personnes physiques ou 750 000 € pour les personnes morales.\n\nCochez toutes les réponses qui s'appliquent à votre entreprise :",
    children: [
      {
        id: "389",
        value: "Oui",
        id_action: null,
        done: true,
        information: null,
        children: [
          {
            id: "390",
            value: "Quels types de déchets votre entreprise génère-t-elle ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "391",
                value: "Biodéchets",
                id_action: 116,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des biodéchets tels que : restes alimentaires, déchets verts, résidus de préparation de repas, etc.\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de valoriser les matières organiques, et de réaliser des économies substantielles.\n\nDéfinition : Les biodéchets comprennent tous les déchets organiques issus des activités de restauration, de préparation de repas, ainsi que les déchets verts.\n\nExemples : Restes alimentaires, épluchures, marc de café, déchets de jardinage (herbe, feuilles, branches), résidus de préparation de repas, produits alimentaires périmés.\n\nTypes de Biodéchets :\n\nDéchets verts : Déchets de jardinage et d'entretien des espaces verts.\nDéchets alimentaires ou de cuisine : Restes de repas, épluchures, marc de café.\nProvenance :\nMénages : Restes alimentaires, déchets de cuisine, déchets verts.\nCommerces : Restes alimentaires, emballages organiques.\nIndustries : Résidus de transformation alimentaire, déchets verts industriels.\nLes biodéchets se dégradent sous l'action de bactéries et d'autres micro-organismes, fermentant et se transformant en biogaz, ce qui leur vaut également le nom de déchets fermentescibles.\n\nGestion : Collecte séparée des biodéchets, compostage, méthanisation pour produire du biogaz et du compost, réduction à la source par la prévention du gaspillage alimentaire.\n\nNote : Une gestion appropriée des biodéchets permet de réduire les déchets envoyés en décharge, de produire de l'énergie renouvelable et d'améliorer la qualité des sols par le compost.",
                children: [
                  {
                    id: "392",
                    value:
                      "Mesurez-vous les biodéchets que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "393",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mesurez les biodéchets que votre entreprise génère.\n\nMesurer le volume de biodéchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                        children: [
                          {
                            id: "394",
                            value:
                              "Veuillez indiquer le volume total de biodéchets généré (en tonnes/an)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [32],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "396",
                        value:
                          "Non mesuré actuellement mais l'entreprise souhaite commencer à mesurer les biodéchets qu'elle génère.",
                        id_action: 117,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "397",
                        value:
                          "Non mesuré actuellement et l'entreprise ne souhaite pas mesurer les biodéchets qu'elle génère.",
                        id_action: 117,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "398",
                    value: "Comment gérez-vous ces biodéchets ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "399",
                        value:
                          "Les biodéchets sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 118,
                        done: false,
                        information:
                          "Sélectionnez cette action si vos biodéchets sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "400",
                        value: "Les biodéchets sont triés pour être recyclés.",
                        id_action: 119,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des biodéchets qu'elle génère.\n\nLe tri permet de valoriser et recycler les déchets pour réduire les impacts environnementaux.",
                        children: [
                          {
                            id: "401",
                            value:
                              "Veuillez indiquer le volume total de biodéchets triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [33],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "403",
                        value:
                          "Les biodéchets sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des biodéchets qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                        children: [
                          {
                            id: "404",
                            value:
                              "Veuillez indiquer le volume total de biodéchets triés, valorisés, réemployés, réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [34],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "406",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les biodéchets qu'elle génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "407",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mettez en place des actions pour réduire les biodéchets que votre entreprise génère.\n\nLes actions de réduction des biodéchets peuvent inclure :\n\n• Tri à la source : Séparer les biodéchets des autres types de déchets pour faciliter leur collecte et leur traitement.\n• Compostage : Transformer les biodéchets en compost utilisable pour l'agriculture ou l'horticulture.\n• Méthanisation : Utiliser les biodéchets pour produire du biogaz et de l'électricité.\n• Sensibilisation des employés : Organiser des campagnes de sensibilisation pour encourager les pratiques de réduction des biodéchets.\n• Réduction à la source : Optimiser les processus de production et de consommation pour minimiser la génération de biodéchets.\n• Collaboration avec des prestataires spécialisés : Travailler avec des entreprises spécialisées dans la gestion et la valorisation des biodéchets.",
                        children: [
                          {
                            id: "408",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les biodéchets que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "409",
                        value: "Non",
                        id_action: 116,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "410",
                value: "Bois",
                id_action: 120,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des déchets de bois.\n\nLa gestion efficace des déchets de bois permet de réduire les impacts environnementaux et de réaliser des économies.\n\nCela permet de :\n• Réduire la quantité de déchets envoyés en décharge\n• Favoriser le recyclage et la réutilisation des matériaux\n• Améliorer l'efficacité des ressources\n• Diminuer les coûts de gestion des déchets",
                children: [
                  {
                    id: "411",
                    value:
                      "Mesurez-vous les déchets de bois que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "412",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mesurez le volume de déchets de bois que vous produisez annuellement.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources",
                        children: [
                          {
                            id: "413",
                            value:
                              "Veuillez indiquer le volume total de déchets de bois généré (en tonnes/an)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [35],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "415",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets de bois que nous générons.",
                        id_action: 121,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore vos déchets de bois mais que vous souhaitez commencer.\n\nCela vous permettra de :\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "416",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets de bois que nous générons pour l'instant.",
                        id_action: 121,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "417",
                    value: "Comment gérez-vous ces déchets de bois ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "418",
                        value:
                          "Nos déchets de bois sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 122,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous jetez vos déchets de bois sans tri ni réemploi.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "419",
                        value:
                          "Nos déchets de bois sont triés pour être recyclés.",
                        id_action: 123,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de bois qu'elle génère.\n\nLe tri permet de valoriser et de recycler les matériaux.",
                        children: [
                          {
                            id: "420",
                            value:
                              "Veuillez indiquer le volume total de déchets de bois triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [36],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "422",
                        value:
                          "Nos déchets de bois sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette option si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de bois qu'elle génère.\n\nElle peut le faire elle-même ou passer par des prestataires externes.",
                        children: [
                          {
                            id: "423",
                            value:
                              "Veuillez indiquer le volume total de déchets de bois triés, valorisés, réemployés, réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [37],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "425",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les déchets de bois qu'elle génère ?",
                    id_action: null,
                    information:
                      "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de bois que votre entreprise génère.\n\nLes actions de réduction des déchets de bois peuvent inclure :\n\n• Tri à la source : Séparer les déchets de bois des autres types de déchets pour faciliter leur collecte et leur traitement.\n• Réutilisation et recyclage : Transformer les déchets de bois en produits réutilisables ou en matière première pour d'autres industries.\n• Valorisation énergétique : Utiliser les déchets de bois comme source de combustible pour produire de l'énergie.\n• Sensibilisation des employés : Organiser des campagnes de sensibilisation pour encourager les pratiques de réduction des déchets de bois.\n• Réduction à la source : Optimiser les processus de production pour minimiser la génération de déchets de bois.\n• Collaboration avec des prestataires spécialisés : Travailler avec des entreprises spécialisées dans la gestion et la valorisation des déchets de bois.",
                    children: [
                      {
                        id: "426",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [
                          {
                            id: "427",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets de bois que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "428",
                        value: "Non",
                        id_action: 120,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "429",
                value: "Carton/Emballage",
                id_action: 124,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des déchets carton et d'emballage.\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de recycler les matériaux, et de réaliser des économies substantielles.\n\nLes déchets de carton et emballages incluent tous les déchets issus de l'utilisation de ces matériaux dans les activités quotidiennes et industrielles.\n\nGestion : Collecte sélective, tri, recyclage en nouveaux produits en papier/carton.\n\nTypes de Déchets Papier/Carton :\n\nCarton : Boîtes en carton, cartons d'emballage.\nEmballage : Emballages en papier et carton, cartons de boissons.\n\nNote : Une gestion appropriée des déchets carton et emballage permet de réduire les déchets envoyés en décharge et de recycler les matériaux pour de nouvelles utilisations.",
                children: [
                  {
                    id: "430",
                    value:
                      "Mesurez-vous les déchets cartons et emballages que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "431",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mesurez les déchets de carton/emballage que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                        children: [
                          {
                            id: "432",
                            value:
                              "Veuillez indiquer le volume total de déchets cartons/emballages généré (en tonnes par an)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [38],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "434",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets de carton/emballage que nous générons.",
                        id_action: 125,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore les déchets de carton/emballage que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "435",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets de carton/emballage que nous générons pour l'instant.",
                        id_action: 125,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets de carton/emballage.",
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "436",
                    value:
                      "Comment gérez-vous ces déchets de carton/emballage ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "437",
                        value:
                          "Nos déchets de carton/emballage sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 126,
                        done: false,
                        information:
                          "Sélectionnez cette action si vos déchets de carton/emballage sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "438",
                        value:
                          "Nos déchets de carton/emballage sont triés pour être recyclés.",
                        id_action: 127,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de carton/emballage qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [
                          {
                            id: "439",
                            value:
                              "Veuillez indiquer le volume total de cartons et emballages triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [39],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "441",
                        value:
                          "Nos déchets de carton/emballage sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de carton/emballage qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                        children: [
                          {
                            id: "442",
                            value:
                              "Veuillez indiquer le volume total de cartons et emballages triés, valorisés, réemployés, réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [41],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "444",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les déchets de carton/emballage qu'elle génère ?",
                    id_action: null,
                    information:
                      "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de cartons et emballages que votre entreprise génère.\n\nLes actions de réduction des déchets de cartons et emballages peuvent inclure :\n\n• Remplacer les produits en papier et emballages à usage unique par des produits réutilisables.\n• Privilégier l'achat de produits certifiés ou labellisés \"écoresponsables\".\n• Organiser des campagnes de sensibilisation pour les employés.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets.\n• Utilisation d'emballages reconditionnés ou réutilisables.\n• Audits pour cerner les principales sources de déchets et améliorer leur gestion.\n• Réduire l'épaisseur des emballages ou les remplacer par des alternatives durables (carton, papier recyclé).",
                    children: [
                      {
                        id: "445",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [
                          {
                            id: "446",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les cartons et emballages que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "447",
                        value: "Non",
                        id_action: 124,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "448",
                value:
                  "Construction/démolition\n\nInfo : hors métaux et déchets dangereux",
                id_action: 128,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des déchets de construction et de démolition tels que : béton, bois de construction, plâtre, etc.\n\nLa gestion efficace des déchets de construction permet de réduire les impacts environnementaux et de réaliser des économies.",
                children: [
                  {
                    id: "449",
                    value:
                      "Mesurez-vous les déchets de construction et démolition que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "450",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous connaissez le volume de déchets de construction/démolition que vous produisez annuellement.\n\nMesurer le volume de déchets vous permet de :\n\n• Établir une base de référence\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources",
                        children: [
                          {
                            id: "451",
                            value:
                              "Veuillez indiquer le volume de déchets de construction/démolition généré (en tonnes /an)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [42],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "453",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets de construction/démolition que nous générons.",
                        id_action: 129,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore vos déchets de construction/démolition mais que vous souhaitez commencer.\n\nCela vous permettra de :\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "454",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets de bois construction/démolition nous générons pour l'instant.",
                        id_action: 129,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "455",
                    value:
                      "Comment gérez-vous ces déchets de construction/démolition :",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "456",
                        value:
                          "Nos déchets de construction/démolition sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 130,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous jetez vos déchets de construction/démolition sans tri ni réemploi.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "457",
                        value:
                          "Nos déchets de construction/démolition sont triés pour être recyclés.",
                        id_action: 131,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de construction/démolition qu'elle génère.\n\nLe tri permet de valoriser et de recycler les matériaux.",
                        children: [
                          {
                            id: "458",
                            value:
                              "Veuillez indiquer le volume total de déchets de construction/démolition triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [43],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "460",
                        value:
                          "Nos déchets de construction/démolition sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de construction/démolition qu'elle génère.\n\nElle peut le faire elle-même ou passer par des prestataires externes.",
                        children: [
                          {
                            id: "461",
                            value:
                              "Veuillez indiquer le volume total de déchets de construction/démolition triés, valorisés, réemployés, réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [44],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "463",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les déchets de construction/démolition qu'elle génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "464",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de construction et de démolition que votre entreprise génère, hors métaux et déchets dangereux.\n\nLes actions de réduction des déchets de construction et de démolition peuvent inclure :\n\n• Réutilisation des matériaux de construction sur site.\n• Privilégier les techniques de construction modulaire pour minimiser les déchets.\n• Sélectionner des matériaux de construction recyclés et recyclables.\n• Mettre en place des pratiques de tri à la source sur les chantiers.\n• Adoption de méthodes de déconstruction sélective pour maximiser la récupération des matériaux.\n• Sensibilisation des équipes de chantier aux pratiques de réduction des déchets.\n• Collaboration avec des entreprises spécialisées dans la valorisation des déchets de construction.",
                        children: [
                          {
                            id: "465",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets de construction/démolition que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "466",
                        value: "Non",
                        id_action: 128,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "467",
                value:
                  "Dangereux (produits chimiques, solvants, huiles usagées, etc.)",
                id_action: 132,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des déchets dangereux.\n\nLes déchets dangereux incluent les produits chimiques, solvants, huiles usagées, et autres substances nocives. Une gestion efficace de ces déchets permet de minimiser les risques pour la santé humaine et l'environnement, de respecter les réglementations et de réduire les coûts liés à leur gestion.\n\nAdopter de meilleures pratiques de gestion des déchets dangereux permet de contribuer à la durabilité environnementale et à la responsabilité sociale de votre entreprise.",
                children: [
                  {
                    id: "468",
                    value:
                      "Mesurez-vous les déchets dangereux que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "469",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous connaissez le volume de déchets dangereux que vous produisez annuellement.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources",
                        children: [
                          {
                            id: "470",
                            value:
                              "Veuillez indiquer le volume total de déchets dangereux généré (en tonnes/an)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [45],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "472",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets dangereux que nous générons",
                        id_action: 133,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore vos déchets dangereux mais que vous souhaitez commencer.\n\nCela vous permettra de :\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "473",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets dangereux que nous générons pour l'instant",
                        id_action: 133,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "474",
                    value: "Comment gérez-vous ces déchets dangereux ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "475",
                        value:
                          "Nos déchets dangereux sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 134,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous jetez vos déchets dangereux sans tri ni réemploi.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "476",
                        value:
                          "Nos déchets dangereux sont triés pour être recyclés.",
                        id_action: 135,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets dangereux qu'elle génère.\n\nLe tri permet de valoriser et de recycler les matériaux.",
                        children: [
                          {
                            id: "477",
                            value:
                              "Veuillez indiquer le volume total de déchets dangereux triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [46],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "479",
                        value:
                          "Nos déchets dangereux sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets dangereux qu'elle génère.\n\nElle peut le faire elle-même ou passer par des prestataires externes.\n\nLes déchets dangereux peuvent être traités par des méthodes spécialisées pour réduire leur dangerosité avant toute forme de réutilisation ou revalorisation.\n\nVoici quelques exemples de valorisation des déchets dangereux :\n\n• Réutilisation des solvants : Les solvants usagés peuvent être purifiés et réutilisés dans des processus industriels.\n• Recyclage des huiles usagées : Les huiles usagées peuvent être retraitées pour produire du mazout, pour valorisation énergétique en cimenterie ou pour fabriquer des lubrifiants industriels.\n• Neutralisation des produits chimiques : Certains produits chimiques peuvent être neutralisés et utilisés dans d'autres applications.\n• Batteries : Vidées, dépolluées, avec recyclage du plomb et du plastique.\n• Aérosols : Dépollués, ils fournissent aluminium, acier et plastique.\n\nÀ chaque déchet dangereux sa valorisation !\n\nLa réglementation stricte s'applique pour le stockage et le traitement des déchets industriels dangereux (DID) avant leur élimination, afin d'éviter toute pollution ou contamination.\n\nLe Bordereau de Suivi des Déchets (BSD) doit systématiquement être émis au moment de la collecte. Ce document officiel (CERFA) doit être conservé pendant 5 ans et sera uniquement exigé en cas de contrôle.",
                        children: [
                          {
                            id: "480",
                            value:
                              "Veuillez indiquer le volume total de déchets dangereux triés, valorisés, réemployés, réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [47],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "482",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les déchets dangereux qu'elle génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "483",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets dangereux que votre entreprise génère.\n\nLes actions de réduction des déchets dangereux peuvent inclure :\n\n• Remplacer les substances dangereuses par des alternatives moins dangereuses.\n• Mettre en place des processus de production plus propres pour réduire la génération de déchets dangereux.\n• Utiliser des technologies de traitement pour neutraliser les déchets dangereux avant leur élimination.\n• Sensibiliser les employés aux bonnes pratiques de gestion des déchets dangereux.\n• Collaborer avec des prestataires spécialisés dans la gestion et le traitement des déchets dangereux.",
                        children: [
                          {
                            id: "484",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets dangereux que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "485",
                        value: "Non",
                        id_action: 132,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "486",
                value: "Électronique (DEEE)",
                id_action: 136,
                done: false,
                information:
                  "Choisissez cette action si vous générez des déchets électroniques.\n\nLes DEEE (Déchets d'Équipements Électriques et Électroniques) incluent tous les appareils fonctionnant à l'électricité ou avec des piles, tels que les ordinateurs, téléphones, imprimantes, et électroménagers.\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de récupérer des matériaux précieux, et de réaliser des économies substantielles.\n\nAdopter de meilleures pratiques de gestion des DEEE permet de contribuer à la durabilité environnementale et à la responsabilité sociale de votre entreprise.",
                children: [
                  {
                    id: "487",
                    value:
                      "Mesurez-vous les déchets électroniques que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "488",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous connaissez le volume de déchets électroniques que vous produisez annuellement.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources",
                        children: [
                          {
                            id: "489",
                            value:
                              "Veuillez indiquer le volume total de déchets électroniques généré (en kg/an)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [48],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "491",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets électroniques que nous générons",
                        id_action: 137,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore vos déchets électroniques mais que vous souhaitez commencer.\n\nCela vous permettra de :\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "492",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets électroniques que nous générons pour l'instant",
                        id_action: 137,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "493",
                    value: "Comment gérez-vous ces déchets électroniques ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "494",
                        value:
                          "Nos déchets électroniques sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 138,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous jetez vos déchets de électroniques sans tri ni réemploi.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "495",
                        value:
                          "Nos déchets électroniques sont triés pour être recyclés.",
                        id_action: 139,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets électroniques qu'elle génère.\n\nLe tri permet de valoriser et de recycler les matériaux.",
                        children: [
                          {
                            id: "496",
                            value:
                              "Veuillez indiquer le volume total de déchets électroniques triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [48],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "498",
                        value:
                          "Nos déchets électroniques sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets électroniques qu'elle génère.\n\nElle peut le faire elle-même ou passer par des prestataires externes.",
                        children: [
                          {
                            id: "499",
                            value:
                              "Veuillez indiquer le volume total de déchets életroniques triés, valorisés, réemployés, réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [50],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "501",
                    value:
                      "L'entreprise met en place des actions pour réduire les déchets électroniques qu'elle génère.",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "502",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets électroniques que votre entreprise génère.\n\nLes actions de réduction des déchets électroniques peuvent inclure :\n\n• Prolonger la durée de vie des équipements électroniques par la maintenance et la réparation.\n• Mettre en place des programmes de reprise et de reconditionnement des équipements électroniques.\n• Sensibiliser les employés à l'importance de la réduction des déchets électroniques.\n• Favoriser l'achat d'équipements électroniques durables et facilement réparables.\n• Recycler les équipements électroniques en fin de vie de manière appropriée.\n• Collaborer avec des prestataires spécialisés dans le recyclage et la revalorisation des déchets électroniques.",
                        children: [
                          {
                            id: "503",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets électroniques que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "504",
                        value: "Non",
                        id_action: 140,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "505",
                value:
                  "Fournitures de bureau (feuilles, papiers, consommables, etc.)",
                id_action: 141,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des déchets de fournitures de bureau.",
                children: [
                  {
                    id: "506",
                    value:
                      "Mesurez-vous les déchets de bureau que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "507",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous générez des déchets de fournitures de bureau (papiers, consommables, etc.).\n\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                        children: [
                          {
                            id: "508",
                            value:
                              "Veuillez indiquer le volume total de déchets de fournitures de bureau généré (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [51],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "510",
                        value:
                          "Non mesuré actuellement mais l'entreprise souhaite commencer à mesurer les déchets de bureau qu'elle génère.",
                        id_action: 142,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "511",
                        value:
                          "Non mesuré actuellement et l'entreprise ne souhaite pas mesurer les déchets de bureau qu'elle génère.",
                        id_action: 142,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "512",
                    value: "Comment gérez-vous ces déchets de bureau ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "513",
                        value:
                          "Les déchets de bureau sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 143,
                        done: false,
                        information:
                          "Sélectionnez cette action si vos déchets de fournitures de bureaux sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "514",
                        value:
                          "Les déchets de bureau sont triés pour être recyclés.",
                        id_action: 144,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de fournitures de bureaux qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [
                          {
                            id: "515",
                            value:
                              "Veuillez indiquer le volume total de déchets de bureau triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [52],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "517",
                        value:
                          "Les déchets de bureau sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de fournitures de bureaux qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                        children: [
                          {
                            id: "518",
                            value:
                              "Veuillez indiquer le volume total de déchets de bureau triés, valorisés, réemployés, réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [53],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "520",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les déchets de fourniture de bureau qu'elle génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "521",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de bureau que votre entreprise génère.\n\nExemples d'actions visant à la réduction des déchets de bureau :\n\n• Remplacer l'utilisation de produits jetables par des produits réutilisables.\n• Privilégier l'achat de produits certifiés ou labellisés \"écoresponsables\".\n• Organiser des campagnes de sensibilisation pour les employés.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets.\n• Audits pour cerner les principales sources de déchets et améliorer leur gestion.\n• Réduire les impressions, privilégier les impressions en recto/verso.",
                        children: [
                          {
                            id: "522",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets de bureau que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "523",
                        value: "Non",
                        id_action: 141,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "524",
                value: "Industriels (hors déchets de construction/démolition)",
                id_action: 145,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des déchets industriels (inertes, non dangereux et banals/non inertes).\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de récupérer des matériaux précieux, et de réaliser des économies substantielles.\n\n• Déchets industriels inertes :\n\nDéfinition : Les déchets inertes sont des déchets qui ne subissent aucune modification physique, chimique ou biologique importante. Ils ne se décomposent pas, ne brûlent pas, ne produisent aucune réaction physique ou chimique, ne sont pas biodégradables et ne détériorent pas les matières avec lesquelles ils entrent en contact.\nExemples : Béton, tuiles et briques, agrégats d'enrobés, déblais, vitrage, etc.\nGestion : Recyclage par réemploi direct ou transformation en granulats, traçabilité recommandée.\n\n• Déchets industriels non dangereux (banals) :\n\nDéfinition : Les déchets industriels non dangereux (banals) sont des déchets produits par les activités industrielles, mais qui ne présentent pas de danger particulier pour la santé humaine ou l'environnement.\nExemples : Cartons, plastiques, métaux, bois, résidus de processus de fabrication, etc.\nGestion : Collecte sélective, recyclage, valorisation énergétique, mise en décharge non dangereuse.",
                children: [
                  {
                    id: "525",
                    value:
                      "Mesurez-vous les déchets industriels que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "526",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise mesure la quantité de déchets industriels inertes (tels que béton, tuiles et briques, agrégats d'enrobés, déblais, vitrage, etc.) ou banals (cartons, plastiques, métaux, bois, résidus de processus de fabrication, etc.) qu'elle génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                        children: [
                          {
                            id: "527",
                            value:
                              "Veuillez indiquer le volume total de déchets industriels généré (en tonnes/an)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [54],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "529",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets industriels que nous générons.",
                        id_action: 146,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore les déchets industriels que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "530",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets industriels que nous générons pour l'instant.",
                        id_action: 146,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets industriels.",
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "531",
                    value: "Comment gérez-vous ces déchets industriels ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "532",
                        value:
                          "Nos déchets industriels sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 147,
                        done: false,
                        information:
                          "Sélectionnez cette action si vos déchets industriels sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "533",
                        value:
                          "Nos déchets industriels sont triés pour être recyclés.",
                        id_action: 148,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets industriels qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [
                          {
                            id: "534",
                            value:
                              "Veuillez indiquer le volume total de déchets industriels triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [55],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "536",
                        value:
                          "Nos déchets industriels sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets industriels qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                        children: [
                          {
                            id: "537",
                            value:
                              "Veuillez indiquer le volume total de déchets industriels triés, valorisés, réemployés, réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [56],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "539",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les déchets industriels (hors déchets de construction/démolition) qu'elle génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "540",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets industriels (hors déchets de construction/démolition) que votre entreprise génère.\n\nLes actions de réduction des déchets industriels peuvent inclure :\n\n• Optimiser les processus de production pour minimiser les déchets générés.\n• Mettre en place des pratiques de réutilisation des matériaux dans le processus de production.\n• Favoriser l'achat de matériaux recyclés et recyclables.\n• Sensibiliser les employés à l'importance de la réduction des déchets et des bonnes pratiques de gestion des déchets.\n• Utiliser des technologies de traitement des déchets pour les transformer en sous-produits réutilisables ou en matières premières pour d'autres industries.",
                        children: [
                          {
                            id: "541",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets industriels que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "542",
                        value: "Non",
                        id_action: 149,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "543",
                value: "Médicaux ou biologiques",
                id_action: 150,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des déchets médicaux ou biologiques (aiguilles, produits pharmaceutiques, équipements médicaux, etc.).\n\nUne gestion efficace de ces déchets permet de minimiser les risques pour la santé humaine et l'environnement, de respecter les réglementations, et de réduire les coûts liés à leur traitement.\n\nDéfinition : Les déchets médicaux ou biologiques sont produits par les activités du secteur de la santé, incluant les soins, traitements, diagnostics et recherches.\n\nExemples : Aiguilles, seringues, gants, produits pharmaceutiques, équipements médicaux.\n\nGestion : Tri sélectif, traitement sécurisé, recyclage ou élimination selon les réglementations en vigueur.",
                children: [
                  {
                    id: "544",
                    value:
                      "Mesurez-vous les déchets médicaux ou biologiques que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "545",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise mesure la quantité de déchets médicaux ou biologiques qu'elle génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                        children: [
                          {
                            id: "546",
                            value:
                              "Veuillez indiquer le volume total de déchets médicaux ou biologiques  généré (en tonnes/an)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [57],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "548",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets médicaux ou biologiques que nous générons.",
                        id_action: 151,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore les déchets médicaux ou biologiques que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "549",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets médicaux ou biologiques que nous générons pour l'instant.",
                        id_action: 151,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets médicaux ou biologiques.",
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "550",
                    value:
                      "Comment gérez-vous ces déchets médicaux ou biologiques ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "551",
                        value:
                          "Nos déchets médicaux ou biologiques sont jetés sans être triés ou traités.",
                        id_action: 152,
                        done: false,
                        information:
                          "Sélectionnez cette action si vos déchets médicaux ou biologiques sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "552",
                        value:
                          "Nos déchets médicaux ou biologiques sont triés pour être recyclés.",
                        id_action: 153,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets industriels qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [
                          {
                            id: "553",
                            value:
                              "Veuillez indiquer le volume total de déchets médicaux et biologiques triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [58],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "555",
                        value:
                          "Nos déchets médicaux ou biologiques sont traités de manière sécurisée pour minimiser les risques sanitaires et environnementaux.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise met en place des actions pour traiter de manière sécurisée les déchets médicaux ou biologiques qu'elle génère.\n\nLes actions peuvent inclure :\n\n• Tri des déchets pour séparer les déchets infectieux et non infectieux.\n• Utilisation de conteneurs spécifiques pour la collecte des objets tranchants et des aiguilles.\n• Désinfection et stérilisation des équipements médicaux réutilisables.\n• Revalorisation des composants non infectieux après traitement approprié.",
                        children: [
                          {
                            id: "556",
                            value:
                              "Veuillez indiquer le volume total de déchets médicaux et biologiques traités de manière sécurisée (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [59],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "558",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les déchets médicaux ou biologiques qu'elle génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "559",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets médicaux ou biologiques (aiguilles, produits pharmaceutiques, équipements médicaux, etc.) que votre entreprise génère.\n\nLes actions de réduction des déchets médicaux ou biologiques peuvent inclure :\n\n• Remplacer les produits à usage unique par des produits réutilisables.\n• Adopter des technologies de stérilisation pour prolonger la durée de vie des équipements médicaux.\n• Mettre en place des programmes de collecte sélective pour les différents types de déchets médicaux et biologiques.\n• Collaborer avec des prestataires spécialisés dans la gestion des déchets médicaux.\n• Sensibiliser les employés à l'importance de la réduction des déchets et des bonnes pratiques de gestion des déchets médicaux.\n• Optimiser les processus pour minimiser les déchets générés pendant les soins et les traitements médicaux.\n• Utiliser des matériaux moins impactants pour l'environnement pour les équipements médicaux et les produits pharmaceutiques.",
                        children: [
                          {
                            id: "560",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets médicaux et biologiques que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "561",
                        value: "Non",
                        id_action: 150,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "562",
                value: "Métaux",
                id_action: 154,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des déchets de métaux (ferraille, aluminium, cuivre, etc.).\n\nLes déchets de métaux incluent tous les résidus métalliques provenant d'activités industrielles, de construction ou de démolition.\n\nIl existe deux grandes familles de déchets métalliques :\n\n• Métaux ferreux : Correspondent aux déchets de fabrication et de transformation des métaux contenant plus de 90% de fer.\nPar exemple :\nChutes propres (sidérurgie) : Recyclées au sein de l'usine de production.\nChutes d'usines (transformation) : Transitent par le négoce de la ferraille.\nFerrailles de récupération : Issues de démolitions ou mises au rebut de produits en fin de vie (épaves automobiles, électroménager, boîtes métalliques, etc.).\n\n• Métaux non ferreux : Comprennent tous les métaux sauf le fer pur ou faiblement allié (inférieur à 10%).\n\nPar exemple :\nCuivre, aluminium, zinc, plomb, étain, chrome, nickel.\nChutes neuves de fabrication ou transformation.\nMatériels usagés et composés métalliques à traiter.\nContenants et emballages divers (canettes, etc.).\nGestion : Collecte sélective, tri par type de métal, recyclage pour réutilisation dans de nouveaux produits, valorisation énergétique pour les métaux non recyclables.\n\nNote : Les métaux souillés par des huiles ou solvants et les métaux précieux sont classés comme déchets dangereux.",
                children: [
                  {
                    id: "563",
                    value:
                      "Mesurez-vous les déchets métalliques que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "564",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mesurez les déchets de métaux (ferraille, aluminium, cuivre, etc.) que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                        children: [
                          {
                            id: "565",
                            value:
                              "Veuillez indiquer le volume total de déchets métalliques généré (en tonnes/an)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [60],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "567",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets de métaux que nous générons.",
                        id_action: 155,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore les déchets de métaux que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "568",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets de métaux que nous générons pour l'instant.",
                        id_action: 155,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets de métaux.",
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "569",
                    value: "Comment gérez-vous ces déchets de métaux ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "570",
                        value:
                          "Nos déchets métalliques sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 156,
                        done: false,
                        information:
                          "Sélectionnez cette action si vos déchets de métaux sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "571",
                        value:
                          "Nos déchets métalliques sont triés pour être recyclés.",
                        id_action: 157,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de métaux qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [
                          {
                            id: "572",
                            value:
                              "Veuillez indiquer le volume total de déchets métalliques triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [61],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "574",
                        value:
                          "Nos déchets métalliques sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de métaux qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                        children: [
                          {
                            id: "575",
                            value:
                              "Veuillez indiquer le volume total de déchets métalliques triés, valorisés, réemployés, réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [62],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "577",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les déchets métalliques qu'elle génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "578",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de métaux que votre entreprise génère.\n\nLes actions de réduction des déchets de métaux peuvent inclure :\n\n• Réutiliser les chutes de métaux pour d'autres projets ou produits.\n• Privilégier l'achat de métaux certifiés durables.\n• Organiser des campagnes de sensibilisation pour les employés.\n• Mettre en place des pratiques de réduction à la source pour minimiser la production de déchets.\n• Adopter des technologies ou des processus favorisant la valorisation des déchets (recyclage, transformation en matières premières).\n• Audits pour cerner les principales sources de déchets et améliorer leur gestion.",
                        children: [
                          {
                            id: "579",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets métaliques que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "580",
                        value: "Non",
                        id_action: 154,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "581",
                value: "Plastique",
                id_action: 158,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des déchets plastiques.\n\nExemples : Bouteilles, emballages alimentaires, films plastiques, bidons, flacons, sacs plastiques.\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de recycler les matériaux, et de réaliser des économies substantielles.\n\nLes déchets plastiques incluent tous les résidus plastiques issus des activités industrielles, de consommation et de production.\n\n• Collecte sélective : Mise en place de bacs de tri pour les différents types de plastiques directement dans les locaux de l'entreprise.\n• Recyclage : Les plastiques sont triés, compactés, broyés et nettoyés pour être transformés en granulés de plastique réutilisables.\n• Réduction à la source : Adoption de matériaux alternatifs, réduction de l'épaisseur des emballages, et utilisation de produits réutilisables au lieu de produits jetables.\n\nNote : La réglementation européenne et nationale impose des objectifs stricts de recyclage. Par exemple, la directive européenne sur les emballages et les déchets d'emballages vise à recycler au moins 50% des déchets d'emballages en plastique d'ici 2025",
                children: [
                  {
                    id: "582",
                    value:
                      "Mesurez-vous les déchets plastique que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "583",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mesurez les déchets plastiques que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                        children: [
                          {
                            id: "584",
                            value:
                              "Veuillez indiquer le volume total de déchets plastiques généré (en tonnes/an)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [63],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "586",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets plastiques que nous générons.",
                        id_action: 159,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore les déchets plastiques que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "587",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets plastiques que nous générons pour l'instant.",
                        id_action: 159,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets plastiques.",
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "588",
                    value: "Comment gérez-vous ces déchets plastiques ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "589",
                        value:
                          "Nos déchets plastiques sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 160,
                        done: false,
                        information:
                          "Sélectionnez cette action si vos déchets plastiques sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "590",
                        value:
                          "Nos déchets plastiques sont triés pour être recyclés.",
                        id_action: 161,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets plastiques qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [
                          {
                            id: "591",
                            value:
                              "Veuillez indiquer le volume total de déchets plastiques triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [64],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "593",
                        value:
                          "Nos déchets plastiques sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets plastiques qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                        children: [
                          {
                            id: "594",
                            value:
                              "Veuillez indiquer le volume total de déchets plastiques valorisés, réemployés ou réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [65],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "596",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les déchets plastiques qu'elle génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "597",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets plastiques que votre entreprise génère.\n\nLes actions de réduction des déchets plastiques peuvent inclure :\n\n• Remplacer l'utilisation de produits jetables par des produits réutilisables.\n• Privilégier l'achat de produits certifiés ou labellisés \"écoresponsables\".\n• Organiser des campagnes de sensibilisation pour les employés.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets.\n• Audits pour cerner les principales sources de déchets et améliorer leur gestion.",
                        children: [
                          {
                            id: "598",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets plastiques que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "599",
                        value: "Non",
                        id_action: 158,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "600",
                value: "Produits cosmétiques et d'hygiène",
                id_action: 162,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des déchets liés aux produits cosmétiques et d'hygiène (résidus/déchets de production, etc.).\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de recycler les matériaux, et de réaliser des économies substantielles.\n\nLes déchets liés aux produits cosmétiques et d'hygiène incluent tous les déchets générés par l'utilisation, la production et la distribution de ces produits.\n\nGestion : Tri sélectif, recyclage, réduction à la source par l'écoconception, et mise en place de systèmes de recharge et de collecte.\n\nNote : Une gestion appropriée des déchets liés aux produits cosmétiques et d'hygiène permet de réduire les déchets envoyés en décharge, de recycler les matériaux pour de nouvelles utilisations, et de diminuer l'empreinte environnementale globale de l'entreprise.",
                children: [
                  {
                    id: "601",
                    value:
                      "Mesurez-vous les déchets cosmétiques et d'hygiène que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "602",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mesurez les déchets de produits cosmétiques et d'hygiène que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                        children: [
                          {
                            id: "603",
                            value:
                              'Veuillez indiquer le volume total de déchets cosmétiques et d"hygiène généré (en tonnes/an)',
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [66],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "605",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets de produits cosmétiques et d'hygiène que nous générons.",
                        id_action: 163,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore les déchets de produits cosmétiques et d'hygiène que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "606",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets de produits cosmétiques et d'hygiène que nous générons pour l'instant.",
                        id_action: 163,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets de produits cosmétiques et d'hygiène.",
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "607",
                    value:
                      "Comment gérez-vous ces déchets de produits cosmétiques et d'hygiène ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "608",
                        value:
                          "Nos déchets de produits cosmétiques et d'hygiène sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 164,
                        done: false,
                        information:
                          "Sélectionnez cette action si vos déchets de produits cosmétiques et d'hygiène sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "609",
                        value:
                          "Nos déchets de produits cosmétiques et d'hygiène sont triés pour être recyclés.",
                        id_action: 165,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets de produits cosmétiques et d'hygiène qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [
                          {
                            id: "610",
                            value:
                              "Veuillez indiquer le volume total de déchets cosmétiques et d'hygiène triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [67],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "612",
                        value:
                          "Nos déchets plastique sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets de produits cosmétiques et d'hygiène qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                        children: [
                          {
                            id: "613",
                            value:
                              "Veuillez indiquer le volume total de déchets cosmétiques et d'hygiène valorisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [68],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "615",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les déchets de produits cosmétiques et d'hygiène qu'elle génère ?",
                    id_action: null,
                    information:
                      "Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets de produits cosmétiques et d'hygiène que votre entreprise génère.\n\nLes actions de réduction des déchets de produits cosmétiques et d'hygiène peuvent inclure :\n\n• Remplacer les produits à usage unique par des produits réutilisables.\n• Privilégier l'achat de produits certifiés ou labellisés \"écoresponsables\".\n• Organiser des campagnes de sensibilisation pour les employés et les consommateurs.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets.\n• Utilisation d'emballages reconditionnés ou réutilisables.\n• Audits pour cerner les principales sources de déchets et améliorer leur gestion.\n• Réduire le nombre de couches d'emballage et utiliser des matériaux alternatifs durables.",
                    children: [
                      {
                        id: "616",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [
                          {
                            id: "617",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets cosmétiques et d'hygiène que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "619",
                        value: "Non",
                        id_action: 162,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "620",
                value: "Textile",
                id_action: 166,
                done: false,
                information:
                  "Sélectionnez cette action si vous générez des déchets textiles.\n\nUne gestion efficace de ces déchets permet de réduire les impacts environnementaux, de récupérer des matériaux précieux, et de réaliser des économies substantielles.\n\nLes déchets textiles incluent :\n\n• Chutes de tissu : résidus de tissu provenant de la coupe et de l'assemblage des vêtements.\n• Déchets de filature : restes de fibres et de fils produits lors de la filature des matières premières.\n• Déchets de teinture et d'impression : eau usée contenant des colorants et des produits chimiques, restes de pigments et de colorants.\n• Déchets de produits chimiques : produits chimiques utilisés dans les processus de teinture, d'ennoblissement et de finition des textiles.\n• Vêtements et textiles usagés : produits textiles en fin de vie, incluant les vêtements et les textiles de maison.\n• Déchets de packaging : emballages en plastique, carton, et papier utilisés pour le conditionnement des produits textiles.\n\nGestion :\n\n• Réemploi : Encourager la revente ou le don des vêtements usagés.\n• Recyclage : Mettre en place des systèmes de collecte et de tri des textiles pour leur recyclage.\n• Éco-conception : Concevoir des textiles plus durables et facilement recyclables.\n• Réduction à la source : Optimiser les processus de production pour réduire les chutes de tissu et les déchets de production.\n• Tri sélectif : Séparer les différents types de déchets textiles pour faciliter leur recyclage et réutilisation.\n• Valorisation énergétique : Utiliser les textiles non recyclables pour produire de l'énergie.\n\nCes actions permettent de prolonger la durée de vie des textiles, de réduire les déchets envoyés en décharge, et de minimiser les impacts environnementaux associés à la production et à la gestion des textiles",
                children: [
                  {
                    id: "621",
                    value:
                      "Mesurez-vous les déchets textiles que votre entreprise génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "622",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mesurez les déchets textile que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                        children: [
                          {
                            id: "623",
                            value:
                              "Veuillez indiquer le volume total de déchets textiles généré (en tonnes/an)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [69],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "625",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets textile que nous générons.",
                        id_action: 167,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore les déchets textile que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "626",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets textile que nous générons pour l'instant.",
                        id_action: 167,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets textile.",
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "627",
                    value: "Comment gérez-vous ces déchets textile ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "628",
                        value:
                          "Nos déchets textiles sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 168,
                        done: false,
                        information:
                          "Sélectionnez cette action si vos déchets textile sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "629",
                        value:
                          "Nos déchets textiles sont triés pour être recyclés.",
                        id_action: 169,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets textiles qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [
                          {
                            id: "630",
                            value:
                              "Veuillez indiquer le volume total de déchets textiles triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [70],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "632",
                        value:
                          "Nos déchets textiles sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets textiles qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                        children: [
                          {
                            id: "633",
                            value:
                              "Veuillez indiquer le volume total de déchets textiles triés, valorisés, réemployés, réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [71],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "635",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire les déchets textiles qu'elle génère ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "636",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          'Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets textiles que votre entreprise génère.\n\nLes actions de réduction des déchets textiles peuvent inclure :\n\n• Remplacer les matériaux non durables par des matériaux recyclables ou biodégradables.\n• Privilégier l\'achat de textiles certifiés ou labellisés "écoresponsables".\n• Organiser des campagnes de sensibilisation pour les employés et les consommateurs.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets textiles.\n• Réduire les chutes de tissus en optimisant les processus de coupe et de fabrication.\n• Mettre en place des programmes de collecte et de recyclage des textiles usagés.\n• Encourager la réparation et la réutilisation des textiles.',
                        children: [
                          {
                            id: "637",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets textiles que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "639",
                        value: "Non",
                        id_action: 166,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "640",
                value:
                  "Autres types de déchets liés à votre industrie ou activité",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "641",
                    value:
                      "Veuillez préciser de quel type de déchet il s'agit :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "text",
                    id_kpis: [],
                  },
                  {
                    id: "643",
                    value: "Mesurez-vous ces déchets ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "644",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous mesurez les déchets que votre entreprise génère.\n\nMesurer le volume de déchets vous permet de :\n\n• Suivre et analyser vos déchets\n• Récupérer des matériaux précieux\n• Identifier les opportunités de réduction\n• Améliorer votre gestion des ressources\n• Réduire vos impacts environnementaux\n• Réaliser des économies substantielles",
                        children: [
                          {
                            id: "645",
                            value:
                              "Veuillez indiquer la quantité totale de déchets liés à votre activité générés (en tonnes/an)",
                            id_action: 170,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [72],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "647",
                        value:
                          "Non mesuré actuellement mais nous souhaitons commencer à mesurer les déchets que nous générons.",
                        id_action: 171,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne mesurez pas encore les déchets que vous générez mais que vous souhaitez commencer.\n\nCela vous permettra de :\n\n• Établir une base de référence\n• Identifier les points de génération de déchets\n• Mettre en place des stratégies de réduction",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "648",
                        value:
                          "Non mesuré actuellement et nous ne souhaitons pas mesurer les déchets que nous générons pour l'instant.",
                        id_action: 171,
                        done: false,
                        information:
                          "Sélectionnez cette action si vous ne souhaitez pas mesurer vos déchets.",
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "649",
                    value: "Comment gérez-vous ces déchets ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "650",
                        value:
                          "Nos déchets sont jetés sans être triés, réemployés ou valorisés.",
                        id_action: 172,
                        done: false,
                        information:
                          "Sélectionnez cette action si vos déchets sont jetés sans être triés, réemployés ou valorisés.\n\nUne meilleure gestion permettrait de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "651",
                        value: "Nos déchets sont triés pour être recyclés.",
                        id_action: 173,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise trie une partie ou la totalité des déchets qu'elle génère.\n\nLe tri permet de valoriser et recycler les matériaux pour réduire les impacts environnementaux.",
                        children: [
                          {
                            id: "652",
                            value:
                              "Veuillez indiquer le volume total de déchets triés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [73],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "654",
                        value:
                          "Nos déchets sont triés, valorisés, réemployés ou réutilisés.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez cette action si votre entreprise valorise ou réemploie une partie ou la totalité des déchets qu'elle génère.\n\nCela permet de réduire les déchets à la source et d'optimiser l'utilisation des ressources.",
                        children: [
                          {
                            id: "655",
                            value:
                              "Veuillez indiquer le volume total de déchets triés, valorisés, réemployés, réutilisés (en kg/mois)",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [74],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                  {
                    id: "657",
                    value:
                      "L'entreprise met-elle en place des actions pour réduire ces déchets ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "658",
                        value: "Oui",
                        id_action: null,
                        done: false,
                        information:
                          'Sélectionnez cette action si vous mettez en place des actions pour réduire les déchets spécifiques à votre industrie ou activité.\n\nLes actions de réduction des déchets peuvent inclure :\n\n• Remplacer les matériaux non durables par des matériaux recyclables ou biodégradables.\n• Privilégier l\'achat de produits certifiés ou labellisés "écoresponsables".\n• Organiser des campagnes de sensibilisation pour les employés et les consommateurs.\n• Mise en place de pratiques de réduction à la source pour minimiser la production de déchets.\n• Réduire les chutes et les pertes en optimisant les processus de production.\n• Mettre en place des programmes de collecte et de recyclage des déchets spécifiques.\n• Encourager la réparation et la réutilisation des produits et matériaux.',
                        children: [
                          {
                            id: "659",
                            value:
                              "Veuillez décrire les actions mises en place pour réduire les déchets que vous générez.\n\nSi vous faites appel à des partenaires (entreprises, solutions, organismes) qui vous accompagnent dans cette action, merci de les indiquer.",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "661",
                        value: "Non",
                        id_action: 170,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "multiple",
          },
        ],
        type: "reponse",
      },
      {
        id: "662",
        value: "Non",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },

  {
    id: "663",
    value:
      "Quelle proportion de matériaux recyclés, reconditionnés ou réemployés utilisez-vous dans la fabrication de vos produits ?",
    ids_secteurs: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 29,
    ],
    id_action: null,
    information:
      "Cette question vise à évaluer l'utilisation de matériaux recyclés, reconditionnés, ou de seconde main, par votre entreprise, dans ses processus de fabrication pour promouvoir une économie circulaire et réduire son impact environnemental.\n\nTypes de matériaux concernés :\n\n• Matériaux recyclés :\n\nMatériaux issus de déchets transformés pour être réintroduits dans le cycle de production.\nExemples : plastique recyclé, papier recyclé, métaux recyclés.\n\n• Matériaux reconditionnés :\n\nComposants ou matériaux ayant subi un processus de remise à neuf, vérifiés pour leur qualité, et prêts à être réutilisés.\nExemples : pièces électroniques reconditionnées, appareils électroménagers remis à neuf.\n\n• Matériaux issus de réemploi : \nMatériaux usagés encore en bon état qui sont directement réutilisés dans la fabrication de nouveaux produits, sans transformation.\nExemples : textile, bois, meubles récupérés.",
    children: [
      {
        id: "664",
        value: "0,1 à 9,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [75],
      },
      {
        id: "665",
        value: "10 à 19,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [76],
      },
      {
        id: "666",
        value: "20 à 29,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [77],
      },
      {
        id: "667",
        value: "30 à 39,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [78],
      },
      {
        id: "668",
        value: "40 à 49,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [79],
      },
      {
        id: "669",
        value: "50 à 59,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [80],
      },
      {
        id: "670",
        value: "60 à 69,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [81],
      },
      {
        id: "671",
        value: "70 à 79,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [82],
      },
      {
        id: "672",
        value: "80 à 89,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [83],
      },
      {
        id: "673",
        value: "90 à 100%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [84],
      },
      {
        id: "674",
        value: "L'entreprise ne mesure/contrôle pas cette information",
        id_action: 175,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
      {
        id: "675",
        value: "Non concerné",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "676",
    value:
      "Quelle proportion de matériaux biosourcées ou biologiques utilisez-vous dans la fabrication de vos produits ?",
    ids_secteurs: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 29,
    ],
    id_action: null,
    information:
      "Cette question vise à évaluer l'utilisation de matériaux biosourcés ou biologiques dans vos processus de fabrication, ce qui peut contribuer à réduire l'empreinte carbone de votre entreprise et promouvoir des pratiques plus durables et respectueuses de l'environnement.\n\nTypes de matériaux concernés :\n\n• Matériaux biosourcés :\n\nDéfinition : Matériaux issus de sources renouvelables d'origine biologique. Ils sont souvent produits à partir de plantes ou de matières animales et peuvent être utilisés comme alternatives aux matériaux pétrochimiques.\nExemples : Plastiques biosourcés (comme le PLA), biopolymères, fibres de bambou, huiles végétales, résines naturelles.\n\n• Matériaux biologiques :\n\nDéfinition : Matériaux d'origine organique qui peuvent être utilisés dans des produits finis ou comme matières premières dans la fabrication. Ils sont biodégradables et respectueux de l'environnement.\nExemples : Coton biologique, laine, soie, cuir végétal, bois certifié durable.",
    children: [
      {
        id: "677",
        value: "0,1 à 9,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [85],
      },
      {
        id: "678",
        value: "10 à 19,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [86],
      },
      {
        id: "679",
        value: "20 à 29,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [87],
      },
      {
        id: "680",
        value: "30 à 39,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [88],
      },
      {
        id: "681",
        value: "40 à 49,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [89],
      },
      {
        id: "682",
        value: "50 à 59,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [90],
      },
      {
        id: "683",
        value: "60 à 69,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [91],
      },
      {
        id: "684",
        value: "70 à 79,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [92],
      },
      {
        id: "685",
        value: "80 à 89,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [93],
      },
      {
        id: "686",
        value: "90 à 100%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [94],
      },
      {
        id: "687",
        value: "L'entreprise ne mesure/contrôle pas cette information",
        id_action: 177,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
      {
        id: "688",
        value: "Non concerné",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "689",
    value:
      "Quelle proportion de matériaux recyclables utilisez-vous dans la fabrication de vos produits ?",
    ids_secteurs: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 29,
    ],
    id_action: null,
    information:
      "Cette question vise à évaluer l'intégration de matériaux recyclables dans vos processus de fabrication, contribuant à la promotion d'une économie circulaire et à la réduction de l'empreinte écologique de votre entreprise. En utilisant des matériaux recyclables, vous pouvez augmenter la durabilité de vos produits et participer activement à la conservation des ressources naturelles.\n\n• Matériaux recyclables :\n\nMatériaux qui peuvent être récupérés, retraités et réintroduits dans le cycle de production après leur usage initial. Ils jouent un rôle crucial dans la réduction des déchets et la conservation des ressources naturelles.\n\nExemples : Verre, aluminium, acier, carton, plastiques recyclables (comme le PP, le PET, le PVC et le PEHD), papiers, textiles recyclables.",
    children: [
      {
        id: "690",
        value: "0,1 à 9,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [95],
      },
      {
        id: "691",
        value: "10 à 19,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [96],
      },
      {
        id: "692",
        value: "20 à 29,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [97],
      },
      {
        id: "693",
        value: "30 à 39,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [98],
      },
      {
        id: "694",
        value: "40 à 49,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [99],
      },
      {
        id: "695",
        value: "50 à 59,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [100],
      },
      {
        id: "696",
        value: "60 à 69,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [101],
      },
      {
        id: "697",
        value: "70 à 79,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [102],
      },
      {
        id: "698",
        value: "80 à 89,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [103],
      },
      {
        id: "699",
        value: "90 à 100%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [104],
      },
      {
        id: "700",
        value: "L'entreprise ne mesure/contrôle pas cette information",
        id_action: 179,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
      {
        id: "701",
        value: "Non concerné",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "702",
    value:
      "Votre entreprise a-t-elle intégré des principes d'approvisionnement durable ?",
    ids_secteurs: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 29,
    ],
    id_action: null,
    information: null,
    children: [
      {
        id: "703",
        value: "Oui",
        id_action: null,
        done: true,
        information:
          "Sélectionnez cette option si vous intégrez déjà des principes d'approvisionnement durable dans vos opérations.\n\nAdopter ces principes signifie choisir des fournisseurs en fonction de critères environnementaux et sociaux pour minimiser l'impact de votre chaîne d'approvisionnement.\n\nExemples : Utilisation de matériaux renouvelables, collaboration avec des partenaires respectant des normes éthiques, et réduction de l'empreinte carbone via des circuits courts.\n\nBénéfices :\n\n• Amélioration de l'image de marque\n• Fidélisation des clients soucieux de l'environnement\n• Réduction des risques de pénuries de ressources\n• Contribution à la durabilité environnementale et sociale",
        children: [
          {
            id: "704",
            value:
              "Avez-vous instaurés des critères sociaux/environnementaux pour sélectionner vos fournisseurs ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "705",
                value: "Oui",
                id_action: null,
                done: true,
                information:
                  "Sélectionnez cette option si vous avez mis en place des critères sociaux et environnementaux pour le choix de vos fournisseurs.\n\nCette pratique vous permet de travailler avec des partenaires qui respectent des normes éthiques et durables, renforçant la responsabilité de votre chaîne d'approvisionnement.\n\nExemples : Exiger des certifications environnementales, s'assurer du respect des normes de travail équitables, et vérifier l'empreinte carbone des fournisseurs.\n\nBénéfices :\n\n• Renforce la réputation de votre entreprise\n• Minimise les risques liés à la chaîne d'approvisionnement\n• Améliore la conformité aux réglementations\n• Contribue à la durabilité globale de vos opérations",
                children: [
                  {
                    id: "706",
                    value:
                      "Quels critères utilisez-vous pour choisir vos fournisseurs de matières ou de produits ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "707",
                        value:
                          "Critères de proximité : vous privilégiez les fournisseurs situés à moins de 250 km pour limiter votre empreinte carbone et soutenir l'économie régionale.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez les critères que vous appliquez pour choisir vos fournisseurs.\n\nUtiliser des critères précis pour sélectionner vos fournisseurs assure une chaîne d'approvisionnement durable, éthique et fiable.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "708",
                        value:
                          "Matériaux durables ou recyclables.\nEx : vous privilégiez les matériaux certifiés durables (FSC, PEFC), recyclés, recyclables, biodégradables ou biosourcés.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "709",
                        value:
                          "Élimination des substances toxiques.\nEx : vous évitez les matériaux contenant des substances toxiques (REACH, RoHS), vous collaborez pour réduire ou éliminer les substances dangereuses ou vous réalisez des audits réguliers pour vérifier votre conformité aux normes de sécurité.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "710",
                        value:
                          "Éthique du travail.\nEx : vous vérifiez que les fournisseurs respectent les droits des travailleurs ou engagés dans des pratiques durables, éthiques ou équitables.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "711",
                        value:
                          "Certifications sociales et environnementales.\nEx : vous choisissez des fournisseurs ayant des certifications (ISO 14001 par ex) ou labels.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "712",
                        value:
                          "Impact Carbone.\nVous choisissez des fournisseurs avec une politique de réduction de l'empreinte carbone.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "713",
                        value:
                          "Stabilité et fiabilité.\nEx : vous vérifiez la stabilité financière et la fiabilité de vos fournisseurs, vous privilégiez les fournisseurs avec des antécédents de livraisons fiables.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "714",
                        value: "Autre(s)",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [
                          {
                            id: "715",
                            value: "Veuillez préciser :",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "multiple",
                  },
                ],
                type: "reponse",
              },
              {
                id: "717",
                value: "Non",
                id_action: 180,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "718",
            value:
              "Votre entreprise évalue-t-elle l'impact environnemental de ses achats ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "719",
                value: "Oui",
                id_action: null,
                done: true,
                information:
                  "Sélectionnez cette option si vous mettez en place une évaluation de l'impact environnemental de vos achats, ce qui est essentiel pour adopter des pratiques plus durables.\n\nPour cela, des outils simplifiés et des guides sectoriels permettent d'effectuer ces évaluations de manière accessible et efficace :\n\n• Calculatrices environnementales :\n\nPermettent de calculer facilement l'empreinte carbone et d'autres impacts environnementaux. Exemples : Ecochain, Carbon Trust Footprint Calculator.\n\n• Bases de données de matériaux :\n\nFournissent des informations sur la durabilité des matériaux pour guider des choix responsables. Exemples : EcoInvent, Greenspec.\n\n• Outils de calcul simplifiés :\n\nOffrent une évaluation rapide des émissions de carbone et des impacts environnementaux. Exemples : Bilan Carbone Simplifié (ADEME), GHG Protocol's Calculators.\n\n• Guides par industrie :\n\nProposent des normes et des recommandations spécifiques à votre secteur. Exemples : Textile Exchange Guide, Sustainable Construction Guide.\n\n• Directives de l'ADEME :\n\nOffrent des conseils sur les achats responsables et l'intégration de la durabilité. Exemple : Guide des achats responsables.\n\n• Normes et Certifications :\n\nFournissent un cadre pour des pratiques durables. Exemples : ISO 14001, Fair Trade Certification.",
                children: [
                  {
                    id: "720",
                    value:
                      "Quelle proportion de vos achats est accompagnée d'une analyse d'impact environnemental ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "721",
                        value: "76% à 100%",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez la proportion d'achats pour lesquels vous effectuez une analyse d'impact environnemental.\n\nAnalyser l'impact environnemental de vos achats vous permet de prendre des décisions plus éclairées, de réduire votre empreinte écologique et d'améliorer la durabilité de votre chaîne d'approvisionnement.",
                        children: [],
                        type: "reponse",
                        id_kpis: [105],
                      },
                      {
                        id: "722",
                        value: "51% à 75%",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                        id_kpis: [106],
                      },
                      {
                        id: "723",
                        value: "26% à 50%",
                        id_action: 181,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                        id_kpis: [107],
                      },
                      {
                        id: "724",
                        value: "11% à 25%",
                        id_action: 181,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                        id_kpis: [108],
                      },
                      {
                        id: "725",
                        value: "0% à 10%",
                        id_action: 181,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                        id_kpis: [109],
                      },
                      {
                        id: "726",
                        value:
                          "L'entreprise ne mesure/contrôle pas cette information",
                        id_action: 182,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "727",
                value: "Non",
                id_action: 183,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "728",
            value:
              "Quel pourcentage du montant total que vous dépensez pour vos matières premières provient de fournisseurs situés à moins de 300 km de votre lieu de production ?",
            id_action: null,
            information:
              "Sélectionnez la proportion du budget total consacré aux matières premières qui provient de fournisseurs situés à moins de 300 km de votre site de production.\n\nPour calculer ce pourcentage, divisez le montant total des dépenses effectuées auprès de fournisseurs locaux (à moins de 300 km) par le montant total de vos dépenses en matières premières, puis multipliez par 100 pour obtenir le pourcentage.\n\nExemple de calcul :\nSi vous dépensez un total de 200 000 € en matières premières et que 50 000 € proviennent de fournisseurs situés à moins de 300 km, la proportion de votre budget est de 25 %.\n\nBénéfices :\n\n• Réduction de l'empreinte carbone : Moins de transport signifie moins d'émissions de gaz à effet de serre.\n• Soutien à l'économie locale : Encourager le développement économique régional en travaillant avec des fournisseurs locaux.\n• Réactivité accrue : Les fournisseurs locaux peuvent souvent offrir des délais de livraison plus courts et une meilleure flexibilité.\n• Résilience de la chaîne d'approvisionnement : Réduire la dépendance à l'égard des fournisseurs éloignés diminue les risques logistiques et de transport.",
            children: [
              {
                id: "729",
                value: "0,1% à 4,9%",
                id_action: 184,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [110],
              },
              {
                id: "730",
                value: "5% à 9,9%",
                id_action: 184,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [111],
              },
              {
                id: "731",
                value: "10% à 14,9%",
                id_action: 184,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [112],
              },
              {
                id: "732",
                value: "15% à 19,9%",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [113],
              },
              {
                id: "733",
                value: "20% à 50 %",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [114],
              },
              {
                id: "734",
                value: "Plus de 50 %",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [115],
              },
              {
                id: "735",
                value: "L'entreprise ne mesure/contrôle pas cette information",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "736",
            value:
              "Quelle part de vos fournisseurs détient des certifications/labellisations environnementales et/ou sociales (ex : ISO 14001, EMAS, 1,2,3 Environnement, Imprim'Vert, etc.) ?",
            id_action: null,
            information:
              "Sélectionnez la proportion de vos fournisseurs qui détiennent des certifications ou labellisations environnementales et/ou sociales.\n\nIntégrer des fournisseurs certifiés assure que vos partenaires respectent des normes élevées en matière de durabilité et de responsabilité sociale, ce qui peut renforcer votre chaîne d'approvisionnement et améliorer votre image de marque.\n\nCalcul :\n\nPour déterminer cette proportion, divisez le nombre de fournisseurs certifiés par le nombre total de vos fournisseurs, puis multipliez par 100 pour obtenir le pourcentage.\n\nExemple de calcul :\n\nSi vous avez 100 fournisseurs et que 30 d'entre eux possèdent des certifications environnementales ou sociales, la part de vos de fournisseurs certifiés est de 30 %\n\nBénéfices :\n\n• Amélioration de la réputation : Travailler avec des partenaires certifiés montre un engagement envers des pratiques responsables.\n• Réduction des risques : Assure la conformité avec les réglementations environnementales et sociales.\n• Avantage concurrentiel : Les certifications renforcent la confiance des clients et partenaires.",
            children: [
              {
                id: "737",
                value: "76% à 100%",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [116],
              },
              {
                id: "738",
                value: "51% à 75%",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [117],
              },
              {
                id: "739",
                value: "26% à 50%",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [118],
              },
              {
                id: "740",
                value: "11% à 25%",
                id_action: 185,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [119],
              },
              {
                id: "741",
                value: "1 % à 10 %",
                id_action: 185,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [120],
              },
              {
                id: "742",
                value: "L'entreprise ne mesure/contrôle pas cette information",
                id_action: 186,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "743",
            value:
              "Assurez-vous la traçabilité de vos approvisionnements en matières premières ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "744",
                value: "Oui",
                id_action: null,
                done: true,
                information:
                  "Sélectionnez cette option si vous avez mis en place des systèmes pour assurer la traçabilité de vos approvisionnements en matières premières.\n\nSystèmes de traçabilité :\n\n• Mise en place de systèmes internes : Pour suivre l'origine des matières premières et garantir la conformité aux normes.\n• Collaboration avec des fournisseurs certifiés : Assurez-vous que vos partenaires garantissent la traçabilité de leurs approvisionnements.\n• Certifications et labels : Utilisez des certifications telles que bio ou équitable pour assurer la traçabilité.\n• Initiatives sectorielles : Participez à des initiatives ou plateformes de traçabilité spécifiques à votre secteur.\n• Technologies avancées : Adoptez des technologies comme la blockchain pour renforcer la transparence de la chaîne d'approvisionnement.\n• Rapports de transparence : Développez des rapports ou déclarations pour démontrer votre engagement envers la traçabilité.\n\nBénéfices :\n\n• Transparence et confiance : Renforce la confiance des clients et partenaires grâce à une chaîne d'approvisionnement transparente.\n• Conformité réglementaire : Garantit le respect des normes internationales et locales.\n• Réduction des risques : Identifie rapidement les problèmes potentiels liés à la qualité ou à l'approvisionnement.\n• Image de marque améliorée : Positionne votre entreprise en tant qu'acteur responsable et engagé dans le développement durable.",
                children: [
                  {
                    id: "745",
                    value:
                      "Quels systèmes utilisez-vous pour garantir la traçabilité ?",
                    id_action: null,
                    information:
                      "Sélectionnez les systèmes que vous utilisez pour assurer la traçabilité de vos approvisionnements en matières premières.",
                    children: [
                      {
                        id: "746",
                        value:
                          "Mise en place de systèmes de traçabilité pour suivre l'origine des matières premières",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "747",
                        value:
                          "Collaboration avec des fournisseurs qui garantissent la traçabilité de leurs approvisionnements",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "748",
                        value:
                          "Utilisation de certifications ou labels garantissant la traçabilité des matières premières (ex. bio, équitable)",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "749",
                        value:
                          "Participation à des initiatives ou des plateformes de traçabilité dans votre secteur d'activité",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "750",
                        value:
                          "Développement de rapports ou de déclarations de transparence sur les approvisionnements en matières premières",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "751",
                        value:
                          "Adoption de technologies telles que la blockchain pour assurer la traçabilité des approvisionnements",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "752",
                        value:
                          "Engagement dans des programmes de suivi et de contrôle des chaînes d'approvisionnement pour garantir la transparence",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "753",
                        value: "Autre(s)",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [
                          {
                            id: "754",
                            value: "Veuillez préciser :",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "multiple",
                  },
                ],
                type: "reponse",
              },
              {
                id: "756",
                value: "Non",
                id_action: 187,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
        ],
        type: "reponse",
      },
      {
        id: "757",
        value: "Non",
        id_action: 188,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },

  {
    id: "663",
    value:
      "Quelle proportion de matériaux recyclés, reconditionnés ou réemployés utilisez-vous dans la fabrication de vos produits ?",
    ids_secteurs: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 29,
    ],
    id_action: null,
    information:
      "Cette question vise à évaluer l'utilisation de matériaux recyclés, reconditionnés, ou de seconde main, par votre entreprise, dans ses processus de fabrication pour promouvoir une économie circulaire et réduire son impact environnemental.\n\nTypes de matériaux concernés :\n\n• Matériaux recyclés :\n\nMatériaux issus de déchets transformés pour être réintroduits dans le cycle de production.\nExemples : plastique recyclé, papier recyclé, métaux recyclés.\n\n• Matériaux reconditionnés :\n\nComposants ou matériaux ayant subi un processus de remise à neuf, vérifiés pour leur qualité, et prêts à être réutilisés.\nExemples : pièces électroniques reconditionnées, appareils électroménagers remis à neuf.\n\n• Matériaux issus de réemploi : \nMatériaux usagés encore en bon état qui sont directement réutilisés dans la fabrication de nouveaux produits, sans transformation.\nExemples : textile, bois, meubles récupérés.",
    children: [
      {
        id: "664",
        value: "0,1 à 9,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [75],
      },
      {
        id: "665",
        value: "10 à 19,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [76],
      },
      {
        id: "666",
        value: "20 à 29,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [77],
      },
      {
        id: "667",
        value: "30 à 39,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [78],
      },
      {
        id: "668",
        value: "40 à 49,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [79],
      },
      {
        id: "669",
        value: "50 à 59,9%",
        id_action: 174,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [80],
      },
      {
        id: "670",
        value: "60 à 69,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [81],
      },
      {
        id: "671",
        value: "70 à 79,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [82],
      },
      {
        id: "672",
        value: "80 à 89,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [83],
      },
      {
        id: "673",
        value: "90 à 100%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [84],
      },
      {
        id: "674",
        value: "L'entreprise ne mesure/contrôle pas cette information",
        id_action: 175,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
      {
        id: "675",
        value: "Non concerné",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "676",
    value:
      "Quelle proportion de matériaux biosourcées ou biologiques utilisez-vous dans la fabrication de vos produits ?",
    ids_secteurs: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 29,
    ],
    id_action: null,
    information:
      "Cette question vise à évaluer l'utilisation de matériaux biosourcés ou biologiques dans vos processus de fabrication, ce qui peut contribuer à réduire l'empreinte carbone de votre entreprise et promouvoir des pratiques plus durables et respectueuses de l'environnement.\n\nTypes de matériaux concernés :\n\n• Matériaux biosourcés :\n\nDéfinition : Matériaux issus de sources renouvelables d'origine biologique. Ils sont souvent produits à partir de plantes ou de matières animales et peuvent être utilisés comme alternatives aux matériaux pétrochimiques.\nExemples : Plastiques biosourcés (comme le PLA), biopolymères, fibres de bambou, huiles végétales, résines naturelles.\n\n• Matériaux biologiques :\n\nDéfinition : Matériaux d'origine organique qui peuvent être utilisés dans des produits finis ou comme matières premières dans la fabrication. Ils sont biodégradables et respectueux de l'environnement.\nExemples : Coton biologique, laine, soie, cuir végétal, bois certifié durable.",
    children: [
      {
        id: "677",
        value: "0,1 à 9,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [85],
      },
      {
        id: "678",
        value: "10 à 19,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [86],
      },
      {
        id: "679",
        value: "20 à 29,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [87],
      },
      {
        id: "680",
        value: "30 à 39,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [88],
      },
      {
        id: "681",
        value: "40 à 49,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [89],
      },
      {
        id: "682",
        value: "50 à 59,9%",
        id_action: 176,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [90],
      },
      {
        id: "683",
        value: "60 à 69,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [91],
      },
      {
        id: "684",
        value: "70 à 79,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [92],
      },
      {
        id: "685",
        value: "80 à 89,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [93],
      },
      {
        id: "686",
        value: "90 à 100%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [94],
      },
      {
        id: "687",
        value: "L'entreprise ne mesure/contrôle pas cette information",
        id_action: 177,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
      {
        id: "688",
        value: "Non concerné",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "689",
    value:
      "Quelle proportion de matériaux recyclables utilisez-vous dans la fabrication de vos produits ?",
    ids_secteurs: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 29,
    ],
    id_action: null,
    information:
      "Cette question vise à évaluer l'intégration de matériaux recyclables dans vos processus de fabrication, contribuant à la promotion d'une économie circulaire et à la réduction de l'empreinte écologique de votre entreprise. En utilisant des matériaux recyclables, vous pouvez augmenter la durabilité de vos produits et participer activement à la conservation des ressources naturelles.\n\n• Matériaux recyclables :\n\nMatériaux qui peuvent être récupérés, retraités et réintroduits dans le cycle de production après leur usage initial. Ils jouent un rôle crucial dans la réduction des déchets et la conservation des ressources naturelles.\n\nExemples : Verre, aluminium, acier, carton, plastiques recyclables (comme le PP, le PET, le PVC et le PEHD), papiers, textiles recyclables.",
    children: [
      {
        id: "690",
        value: "0,1 à 9,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [95],
      },
      {
        id: "691",
        value: "10 à 19,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [96],
      },
      {
        id: "692",
        value: "20 à 29,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [97],
      },
      {
        id: "693",
        value: "30 à 39,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [98],
      },
      {
        id: "694",
        value: "40 à 49,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [99],
      },
      {
        id: "695",
        value: "50 à 59,9%",
        id_action: 178,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [100],
      },
      {
        id: "696",
        value: "60 à 69,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [101],
      },
      {
        id: "697",
        value: "70 à 79,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [102],
      },
      {
        id: "698",
        value: "80 à 89,9%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [103],
      },
      {
        id: "699",
        value: "90 à 100%",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
        id_kpis: [104],
      },
      {
        id: "700",
        value: "L'entreprise ne mesure/contrôle pas cette information",
        id_action: 179,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
      {
        id: "701",
        value: "Non concerné",
        id_action: null,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
  {
    id: "702",
    value:
      "Votre entreprise a-t-elle intégré des principes d'approvisionnement durable ?",
    ids_secteurs: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 29,
    ],
    id_action: null,
    information: null,
    children: [
      {
        id: "703",
        value: "Oui",
        id_action: null,
        done: true,
        information:
          "Sélectionnez cette option si vous intégrez déjà des principes d'approvisionnement durable dans vos opérations.\n\nAdopter ces principes signifie choisir des fournisseurs en fonction de critères environnementaux et sociaux pour minimiser l'impact de votre chaîne d'approvisionnement.\n\nExemples : Utilisation de matériaux renouvelables, collaboration avec des partenaires respectant des normes éthiques, et réduction de l'empreinte carbone via des circuits courts.\n\nBénéfices :\n\n• Amélioration de l'image de marque\n• Fidélisation des clients soucieux de l'environnement\n• Réduction des risques de pénuries de ressources\n• Contribution à la durabilité environnementale et sociale",
        children: [
          {
            id: "704",
            value:
              "Avez-vous instaurés des critères sociaux/environnementaux pour sélectionner vos fournisseurs ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "705",
                value: "Oui",
                id_action: null,
                done: true,
                information:
                  "Sélectionnez cette option si vous avez mis en place des critères sociaux et environnementaux pour le choix de vos fournisseurs.\n\nCette pratique vous permet de travailler avec des partenaires qui respectent des normes éthiques et durables, renforçant la responsabilité de votre chaîne d'approvisionnement.\n\nExemples : Exiger des certifications environnementales, s'assurer du respect des normes de travail équitables, et vérifier l'empreinte carbone des fournisseurs.\n\nBénéfices :\n\n• Renforce la réputation de votre entreprise\n• Minimise les risques liés à la chaîne d'approvisionnement\n• Améliore la conformité aux réglementations\n• Contribue à la durabilité globale de vos opérations",
                children: [
                  {
                    id: "706",
                    value:
                      "Quels critères utilisez-vous pour choisir vos fournisseurs de matières ou de produits ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "707",
                        value:
                          "Critères de proximité : vous privilégiez les fournisseurs situés à moins de 250 km pour limiter votre empreinte carbone et soutenir l'économie régionale.",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez les critères que vous appliquez pour choisir vos fournisseurs.\n\nUtiliser des critères précis pour sélectionner vos fournisseurs assure une chaîne d'approvisionnement durable, éthique et fiable.",
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "708",
                        value:
                          "Matériaux durables ou recyclables.\nEx : vous privilégiez les matériaux certifiés durables (FSC, PEFC), recyclés, recyclables, biodégradables ou biosourcés.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "709",
                        value:
                          "Élimination des substances toxiques.\nEx : vous évitez les matériaux contenant des substances toxiques (REACH, RoHS), vous collaborez pour réduire ou éliminer les substances dangereuses ou vous réalisez des audits réguliers pour vérifier votre conformité aux normes de sécurité.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "710",
                        value:
                          "Éthique du travail.\nEx : vous vérifiez que les fournisseurs respectent les droits des travailleurs ou engagés dans des pratiques durables, éthiques ou équitables.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "711",
                        value:
                          "Certifications sociales et environnementales.\nEx : vous choisissez des fournisseurs ayant des certifications (ISO 14001 par ex) ou labels.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "712",
                        value:
                          "Impact Carbone.\nVous choisissez des fournisseurs avec une politique de réduction de l'empreinte carbone.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "713",
                        value:
                          "Stabilité et fiabilité.\nEx : vous vérifiez la stabilité financière et la fiabilité de vos fournisseurs, vous privilégiez les fournisseurs avec des antécédents de livraisons fiables.",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "714",
                        value: "Autre(s)",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [
                          {
                            id: "715",
                            value: "Veuillez préciser :",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "multiple",
                  },
                ],
                type: "reponse",
              },
              {
                id: "717",
                value: "Non",
                id_action: 180,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "718",
            value:
              "Votre entreprise évalue-t-elle l'impact environnemental de ses achats ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "719",
                value: "Oui",
                id_action: null,
                done: true,
                information:
                  "Sélectionnez cette option si vous mettez en place une évaluation de l'impact environnemental de vos achats, ce qui est essentiel pour adopter des pratiques plus durables.\n\nPour cela, des outils simplifiés et des guides sectoriels permettent d'effectuer ces évaluations de manière accessible et efficace :\n\n• Calculatrices environnementales :\n\nPermettent de calculer facilement l'empreinte carbone et d'autres impacts environnementaux. Exemples : Ecochain, Carbon Trust Footprint Calculator.\n\n• Bases de données de matériaux :\n\nFournissent des informations sur la durabilité des matériaux pour guider des choix responsables. Exemples : EcoInvent, Greenspec.\n\n• Outils de calcul simplifiés :\n\nOffrent une évaluation rapide des émissions de carbone et des impacts environnementaux. Exemples : Bilan Carbone Simplifié (ADEME), GHG Protocol's Calculators.\n\n• Guides par industrie :\n\nProposent des normes et des recommandations spécifiques à votre secteur. Exemples : Textile Exchange Guide, Sustainable Construction Guide.\n\n• Directives de l'ADEME :\n\nOffrent des conseils sur les achats responsables et l'intégration de la durabilité. Exemple : Guide des achats responsables.\n\n• Normes et Certifications :\n\nFournissent un cadre pour des pratiques durables. Exemples : ISO 14001, Fair Trade Certification.",
                children: [
                  {
                    id: "720",
                    value:
                      "Quelle proportion de vos achats est accompagnée d'une analyse d'impact environnemental ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "721",
                        value: "76% à 100%",
                        id_action: null,
                        done: false,
                        information:
                          "Sélectionnez la proportion d'achats pour lesquels vous effectuez une analyse d'impact environnemental.\n\nAnalyser l'impact environnemental de vos achats vous permet de prendre des décisions plus éclairées, de réduire votre empreinte écologique et d'améliorer la durabilité de votre chaîne d'approvisionnement.",
                        children: [],
                        type: "reponse",
                        id_kpis: [105],
                      },
                      {
                        id: "722",
                        value: "51% à 75%",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                        id_kpis: [106],
                      },
                      {
                        id: "723",
                        value: "26% à 50%",
                        id_action: 181,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                        id_kpis: [107],
                      },
                      {
                        id: "724",
                        value: "11% à 25%",
                        id_action: 181,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                        id_kpis: [108],
                      },
                      {
                        id: "725",
                        value: "0% à 10%",
                        id_action: 181,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                        id_kpis: [109],
                      },
                      {
                        id: "726",
                        value:
                          "L'entreprise ne mesure/contrôle pas cette information",
                        id_action: 182,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "single",
                  },
                ],
                type: "reponse",
              },
              {
                id: "727",
                value: "Non",
                id_action: 183,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "728",
            value:
              "Quel pourcentage du montant total que vous dépensez pour vos matières premières provient de fournisseurs situés à moins de 300 km de votre lieu de production ?",
            id_action: null,
            information:
              "Sélectionnez la proportion du budget total consacré aux matières premières qui provient de fournisseurs situés à moins de 300 km de votre site de production.\n\nPour calculer ce pourcentage, divisez le montant total des dépenses effectuées auprès de fournisseurs locaux (à moins de 300 km) par le montant total de vos dépenses en matières premières, puis multipliez par 100 pour obtenir le pourcentage.\n\nExemple de calcul :\nSi vous dépensez un total de 200 000 € en matières premières et que 50 000 € proviennent de fournisseurs situés à moins de 300 km, la proportion de votre budget est de 25 %.\n\nBénéfices :\n\n• Réduction de l'empreinte carbone : Moins de transport signifie moins d'émissions de gaz à effet de serre.\n• Soutien à l'économie locale : Encourager le développement économique régional en travaillant avec des fournisseurs locaux.\n• Réactivité accrue : Les fournisseurs locaux peuvent souvent offrir des délais de livraison plus courts et une meilleure flexibilité.\n• Résilience de la chaîne d'approvisionnement : Réduire la dépendance à l'égard des fournisseurs éloignés diminue les risques logistiques et de transport.",
            children: [
              {
                id: "729",
                value: "0,1% à 4,9%",
                id_action: 184,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [110],
              },
              {
                id: "730",
                value: "5% à 9,9%",
                id_action: 184,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [111],
              },
              {
                id: "731",
                value: "10% à 14,9%",
                id_action: 184,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [112],
              },
              {
                id: "732",
                value: "15% à 19,9%",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [113],
              },
              {
                id: "733",
                value: "20% à 50 %",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [114],
              },
              {
                id: "734",
                value: "Plus de 50 %",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [115],
              },
              {
                id: "735",
                value: "L'entreprise ne mesure/contrôle pas cette information",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "736",
            value:
              "Quelle part de vos fournisseurs détient des certifications/labellisations environnementales et/ou sociales (ex : ISO 14001, EMAS, 1,2,3 Environnement, Imprim'Vert, etc.) ?",
            id_action: null,
            information:
              "Sélectionnez la proportion de vos fournisseurs qui détiennent des certifications ou labellisations environnementales et/ou sociales.\n\nIntégrer des fournisseurs certifiés assure que vos partenaires respectent des normes élevées en matière de durabilité et de responsabilité sociale, ce qui peut renforcer votre chaîne d'approvisionnement et améliorer votre image de marque.\n\nCalcul :\n\nPour déterminer cette proportion, divisez le nombre de fournisseurs certifiés par le nombre total de vos fournisseurs, puis multipliez par 100 pour obtenir le pourcentage.\n\nExemple de calcul :\n\nSi vous avez 100 fournisseurs et que 30 d'entre eux possèdent des certifications environnementales ou sociales, la part de vos de fournisseurs certifiés est de 30 %\n\nBénéfices :\n\n• Amélioration de la réputation : Travailler avec des partenaires certifiés montre un engagement envers des pratiques responsables.\n• Réduction des risques : Assure la conformité avec les réglementations environnementales et sociales.\n• Avantage concurrentiel : Les certifications renforcent la confiance des clients et partenaires.",
            children: [
              {
                id: "737",
                value: "76% à 100%",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [116],
              },
              {
                id: "738",
                value: "51% à 75%",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [117],
              },
              {
                id: "739",
                value: "26% à 50%",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [118],
              },
              {
                id: "740",
                value: "11% à 25%",
                id_action: 185,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [119],
              },
              {
                id: "741",
                value: "1 % à 10 %",
                id_action: 185,
                done: false,
                information: null,
                children: [],
                type: "reponse",
                id_kpis: [120],
              },
              {
                id: "742",
                value: "L'entreprise ne mesure/contrôle pas cette information",
                id_action: 186,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
          {
            id: "743",
            value:
              "Assurez-vous la traçabilité de vos approvisionnements en matières premières ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "744",
                value: "Oui",
                id_action: null,
                done: true,
                information:
                  "Sélectionnez cette option si vous avez mis en place des systèmes pour assurer la traçabilité de vos approvisionnements en matières premières.\n\nSystèmes de traçabilité :\n\n• Mise en place de systèmes internes : Pour suivre l'origine des matières premières et garantir la conformité aux normes.\n• Collaboration avec des fournisseurs certifiés : Assurez-vous que vos partenaires garantissent la traçabilité de leurs approvisionnements.\n• Certifications et labels : Utilisez des certifications telles que bio ou équitable pour assurer la traçabilité.\n• Initiatives sectorielles : Participez à des initiatives ou plateformes de traçabilité spécifiques à votre secteur.\n• Technologies avancées : Adoptez des technologies comme la blockchain pour renforcer la transparence de la chaîne d'approvisionnement.\n• Rapports de transparence : Développez des rapports ou déclarations pour démontrer votre engagement envers la traçabilité.\n\nBénéfices :\n\n• Transparence et confiance : Renforce la confiance des clients et partenaires grâce à une chaîne d'approvisionnement transparente.\n• Conformité réglementaire : Garantit le respect des normes internationales et locales.\n• Réduction des risques : Identifie rapidement les problèmes potentiels liés à la qualité ou à l'approvisionnement.\n• Image de marque améliorée : Positionne votre entreprise en tant qu'acteur responsable et engagé dans le développement durable.",
                children: [
                  {
                    id: "745",
                    value:
                      "Quels systèmes utilisez-vous pour garantir la traçabilité ?",
                    id_action: null,
                    information:
                      "Sélectionnez les systèmes que vous utilisez pour assurer la traçabilité de vos approvisionnements en matières premières.",
                    children: [
                      {
                        id: "746",
                        value:
                          "Mise en place de systèmes de traçabilité pour suivre l'origine des matières premières",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "747",
                        value:
                          "Collaboration avec des fournisseurs qui garantissent la traçabilité de leurs approvisionnements",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "748",
                        value:
                          "Utilisation de certifications ou labels garantissant la traçabilité des matières premières (ex. bio, équitable)",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "749",
                        value:
                          "Participation à des initiatives ou des plateformes de traçabilité dans votre secteur d'activité",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "750",
                        value:
                          "Développement de rapports ou de déclarations de transparence sur les approvisionnements en matières premières",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "751",
                        value:
                          "Adoption de technologies telles que la blockchain pour assurer la traçabilité des approvisionnements",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "752",
                        value:
                          "Engagement dans des programmes de suivi et de contrôle des chaînes d'approvisionnement pour garantir la transparence",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "753",
                        value: "Autre(s)",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [
                          {
                            id: "754",
                            value: "Veuillez préciser :",
                            id_action: null,
                            information: null,
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                    ],
                    type: "question",
                    inputType: "multiple",
                  },
                ],
                type: "reponse",
              },
              {
                id: "756",
                value: "Non",
                id_action: 187,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
            ],
            type: "question",
            inputType: "single",
          },
        ],
        type: "reponse",
      },
      {
        id: "757",
        value: "Non",
        id_action: 188,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
    ],
    type: "question",
    inputType: "single",
  },
];
