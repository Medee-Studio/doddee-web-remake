import { QuestionTree } from "@/types/esg-form";

export const ew: QuestionTree = [
    {
      "id": "1",
      "value": "Votre hébergeur est-il signataire du Code de Conduite européen des centres de données ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "La question de l'adhésion au Code de Conduite européen des centres de données (CCED) soulève des enjeux importants en matière de durabilité et d'efficacité énergétique. Ce code, établi par la Commission Européenne, vise à encourager les opérateurs de datacentres à adopter des pratiques plus respectueuses de l'environnement. Il couvre divers aspects, tels que l'utilisation d'équipements économes en énergie, la gestion des systèmes de refroidissement et l'optimisation de l'alimentation électrique.\n\nEn choisissant un hébergeur signataire du CCED, vous soutenez des entreprises qui s'engagent à réduire leur empreinte carbone et à améliorer la durabilité de leurs opérations. Cela peut inclure des mesures telles que la récupération de chaleur et l'utilisation d'énergies renouvelables. En intégrant ces critères dans votre sélection d'hébergeurs, vous contribuez à un environnement numérique plus responsable et durable.",
      "children": [
        {
          "id": "2",
          "value": "Oui",
          "id_action": 359,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "3",
          "value": "Non",
          "id_action": 359,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "4",
          "value": "Ne sait pas (ou information indisponible)",
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
      "id": "5",
      "value": "Votre hébergeur suit-il une démarche de réduction de son impact écologique ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "La réduction de l'impact écologique par les hébergeurs de données devient un critère clé dans le choix d'un partenaire numérique durable.\nCette démarche inclut des pratiques visant à limiter la consommation d'énergie, à optimiser le refroidissement des serveurs et à utiliser des sources d'énergie renouvelables.\nEn optant pour un hébergeur engagé dans une telle initiative, vous soutenez des efforts concrets de réduction des émissions de gaz à effet de serre, d'optimisation de l'efficacité énergétique et de gestion responsable des ressources.\n\nVous pouvez vérifier cela en consultant les rapports de développement durable de l'hébergeur ou en demandant des certifications environnementales spécifiques comme ISO 14001 ou des indicateurs de performance énergétique.",
      "children": [
        {
          "id": "6",
          "value": "Oui",
          "id_action": 360,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "7",
          "value": "Non",
          "id_action": 360,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "8",
          "value": "Ne sait pas (ou information indisponible)",
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
      "id": "9",
      "value": "Votre hébergeur fournit-il des indicateurs liés à son empreinte carbone ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Un hébergeur engagé dans une démarche de réduction de son empreinte carbone fournit des indicateurs transparents sur ses émissions de gaz à effet de serre (GES).\nCes indicateurs peuvent inclure les émissions directes (scope 1), les émissions indirectes liées à l'énergie consommée (scope 2) et d'autres émissions indirectes provenant de la chaîne de valeur (scope 3). En recevant ces informations, vous pouvez évaluer les efforts de votre hébergeur pour réduire son impact climatique et soutenir la transition vers une économie à faible émission de carbone.\n\nVous pouvez accéder à ces indicateurs via des rapports de durabilité ou des audits carbone réalisés par des tiers certifiés.",
      "children": [
        {
          "id": "10",
          "value": "Oui",
          "id_action": 361,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "11",
          "value": "Non",
          "id_action": 361,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "12",
          "value": "Ne sait pas (ou information indisponible)",
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
      "id": "13",
      "value": "Votre hébergeur communique t-il son PUE (Power Usage Effectiveness) ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Le Power Usage Effectiveness (PUE) est un indicateur clé pour mesurer l'efficacité énergétique d'un centre de données. Il compare l'énergie totale consommée par un data center à l'énergie utilisée spécifiquement pour faire fonctionner les équipements informatiques.\nPlus le PUE est bas, plus l'infrastructure est économe en énergie. Un hébergeur qui communique son PUE montre une transparence quant à ses efforts pour améliorer l'efficacité énergétique et réduire l'empreinte environnementale.\nCela permet de mesurer directement l'efficacité de ses opérations par rapport à ses besoins énergétiques.\n\nVous pouvez généralement obtenir cette information sur le site web de l'hébergeur, dans leurs rapports de durabilité ou en trouvant leur documentation technique ou environnementale sur le web.",
      "children": [
        {
          "id": "14",
          "value": "Oui",
          "id_action": 362,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "15",
          "value": "Non",
          "id_action": 362,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "16",
          "value": "Ne sait pas (ou information indisponible)",
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
      "id": "17",
      "value": "Votre hébergeur communique t-il son WUE (Water Usage Effectiveness) ?",
      "ids_secteurs": [1, 23, 28],
      "id_action": null,
      "information": "Le Water Usage Effectiveness (WUE) est un indicateur utilisé pour mesurer l'efficacité de la gestion de l'eau dans un centre de données. Cet indicateur est particulièrement pertinent pour les infrastructures nécessitant des systèmes de refroidissement à base d'eau.\nPlus le WUE est faible, plus l'utilisation de l'eau est optimisée, réduisant ainsi l'impact environnemental lié à la consommation d'eau.\nUn hébergeur qui communique son WUE montre son engagement à utiliser les ressources en eau de manière responsable et à limiter son impact sur l'environnement.\n\nCette information est souvent accessible via les rapports de durabilité ou de responsabilité sociale des entreprises (RSE) ou en consultant la documentation technique de ses centres de données trouvables sur le net.",
      "children": [
        {
          "id": "18",
          "value": "Oui",
          "id_action": 363,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "19",
          "value": "Non",
          "id_action": 363,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "20",
          "value": "Ne sait pas (ou information indisponible)",
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
      "value": "Votre hébergeur a t-il une consommation d'électricité majoritairement d'origine renouvelable ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "L'origine de l'électricité utilisée par un hébergeur est un indicateur important de son engagement en matière de durabilité environnementale.\nUn hébergeur qui s'approvisionne en électricité provenant majoritairement de sources renouvelables, comme l'énergie solaire, éolienne ou hydraulique, contribue à la réduction des émissions de gaz à effet de serre et à la transition vers un modèle énergétique plus propre.\nCela démontre son engagement à limiter son impact sur le climat en diminuant sa dépendance aux énergies fossiles.\n\nCette information peut être obtenue en consultant les certifications environnementales de l'hébergeur ou ses rapports de durabilité, où la provenance de l'électricité est généralement indiquée.",
      "children": [
        {
          "id": "22",
          "value": "Oui",
          "id_action": 364,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "23",
          "value": "Non",
          "id_action": 364,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "24",
          "value": "Ne sait pas (ou information indisponible)",
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
      "id": "25",
      "value": "Votre hébergeur a t-il une localisation géographique en cohérence avec celle de ses utilisateurs et de ses activités ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Un hébergeur situé à proximité des utilisateurs et des activités de votre entreprise permet de réduire la latence des services et de limiter l'impact environnemental lié à la transmission de données sur de longues distances. Cela améliore également l'efficacité des opérations numériques.",
      "children": [
        {
          "id": "26",
          "value": "Oui",
          "id_action": 365,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "27",
          "value": "Non",
          "id_action": 365,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "28",
          "value": "Ne sait pas (ou information indisponible)",
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
      "id": "29",
      "value": "Vos services numériques (site web, application, logiciel) sont-ils utilisables sur des terminaux âgés de 5 ans ou plus ?",
      "ids_secteurs": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 29],
      "id_action": null,
      "information": "Concevoir des services compatibles avec des terminaux plus anciens permet de prolonger la durée de vie des équipements, de limiter l'obsolescence programmée et de favoriser une démarche numérique plus inclusive et responsable.",
      "children": [
        {
          "id": "30",
          "value": "Oui",
          "id_action": 367,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "31",
          "value": "Non",
          "id_action": 367,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "32",
          "value": "Ne sait pas (ou information indisponible)",
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
      "id": "33",
      "value": "Vos services numériques (site web, application, logiciel) s'adaptent-t-il à différents types de terminaux d'affichage (responsive) ?",
      "ids_secteurs": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 29],
      "id_action": null,
      "information": "Le responsive design optimise l'utilisation des ressources numériques en adaptant les services à une large gamme de terminaux, qu'ils soient récents ou plus anciens.\nCette approche permet de réduire la consommation de ressources nécessaire au développement et à l'utilisation d'applications lourdes, optimisant ainsi l'efficacité énergétique des appareils et des serveurs.\nEn allégeant les applications et en limitant la demande en puissance de calcul et en énergie, le responsive design contribue à réduire l'empreinte numérique globale. Il favorise une utilisation plus durable des ressources numériques, en minimisant les impacts environnementaux liés à l'exécution des services sur différents types d'équipements.",
      "children": [
        {
          "id": "34",
          "value": "Oui",
          "id_action": 368,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "35",
          "value": "Non",
          "id_action": 368,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "36",
          "value": "Ne sait pas (ou information indisponible)",
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
      "id": "37",
      "value": "Vos services numériques (site web, application, logiciel) favorisent-ils un design simple, épuré, sobre, adapté au web ?",
      "ids_secteurs": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 29],
      "id_action": null,
      "information": "Un design simple et épuré permet de réduire la consommation d'énergie en diminuant les ressources nécessaires au chargement des pages. Il favorise également une meilleure expérience utilisateur, tout en limitant l'impact environnemental.",
      "children": [
        {
          "id": "38",
          "value": "Oui",
          "id_action": 369,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "39",
          "value": "Non",
          "id_action": 369,
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
      "id": "40",
      "value": "Vos services numériques incluent-ils des éléments animés, sons ou vidéos ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "L'intégration d'éléments multimédias tels que des animations, vidéos ou sons peut augmenter la consommation de bande passante et d'énergie. Leur usage devrait être limité aux cas où ces éléments apportent une réelle valeur ajoutée pour l'utilisateur.",
      "children": [
        {
          "id": "41",
          "value": "Oui",
          "id_action": 370,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "42",
              "value": "La lecture automatique est-elle désactivée ?",
              "id_action": null,
              "information": "Désactiver la lecture automatique des vidéos et sons permet de réduire la consommation de données et d'énergie inutilement.",
              "children": [
                {
                  "id": "43",
                  "value": "Oui",
                  "id_action": 371,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "44",
                  "value": "Non",
                  "id_action": 371,
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
              "id": "45",
              "value": "Les éléments animés, vidéos ou sons sont-ils porteurs d'informations ?",
              "id_action": null,
              "information": "Les animations, vidéos ou sons doivent être utilisés uniquement lorsqu'ils apportent une information essentielle ou complémentaire pour éviter une surcharge inutile.",
              "children": [
                {
                  "id": "46",
                  "value": "Oui",
                  "id_action": 372,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "47",
                  "value": "Non",
                  "id_action": 372,
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
              "id": "48",
              "value": "Privilégiez-vous le texte ou l'image au lieu du contenu vidéo, audio ou animé lorsque cela est possible ?",
              "id_action": null,
              "information": "Privilégier le texte ou les images statiques permet de minimiser la consommation de ressources tout en maintenant une expérience utilisateur efficace et responsable.",
              "children": [
                {
                  "id": "49",
                  "value": "Oui",
                  "id_action": 378,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "50",
                  "value": "Non",
                  "id_action": 378,
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
  ]