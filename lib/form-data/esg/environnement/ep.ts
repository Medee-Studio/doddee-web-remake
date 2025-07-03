import { QuestionTree } from "@/types/esg-form";

export const ep: QuestionTree = [
    {
      "id": "1",
      "value": "Votre entreprise a-t-elle mis en place une stratégie de gestion des déchets sur ses sites de production internes ?",
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
      "information": "Cette question vise à comprendre si votre entreprise a développé et mis en œuvre une stratégie de gestion des déchets sur ses propres sites de production.\n\nUne stratégie de gestion des déchets inclut des mesures visant à réduire, trier, recycler ou réutiliser les déchets générés lors des activités de production.\nCela peut comprendre des actions pour minimiser les déchets à la source, l'installation de systèmes de tri sélectif, le recyclage des matériaux usagés ou l'utilisation de procédés de production plus durables. Votre réponse doit expliquer les initiatives que votre entreprise a adoptées pour gérer efficacement les déchets sur ses sites de production et ainsi réduire l'impact environnemental de ses activités.",
      "children": [
        {
          "id": "2",
          "value": "Oui",
          "id_action": 247,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "3",
              "value": "Quelle est cette stratégie ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "4",
                  "value": "Vérification du traitement des déchets dans une installation agréée, avec un certificat d'acceptation préalable (CAP) si nécessaire",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "5",
                  "value": "Tenue d'un registre détaillé des déchets, incluant tous les types de déchets produits et leur destination finale",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "6",
                  "value": "Mise en place de zones spécifiques pour le stockage des déchets, clairement définies et délimitées au sein des sites de production",
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
          "id_action": 247,
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
      "value": "Votre entreprise possède-t-elle un site de production éloigné de plus de 300 km de sa principale zone de commercialisation ?",
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
      "information": "L'éloignement entre le lieu de production et la zone de vente peut avoir un impact significatif sur les coûts et l'empreinte carbone liés au transport des marchandises.\n\nLa réponse à cette question permettra de mieux comprendre la manière dont la localisation géographique de vos sites de production influence votre logistique de distribution, notamment en termes de distances parcourues, d'émissions de gaz à effet de serre et d'efficacité énergétique.",
      "children": [
        {
          "id": "12",
          "value": "Oui",
          "id_action": 248,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "13",
              "value": "Envisagez-vous de localiser ou relocaliser votre site de production proche de votre zone de commercialisation pour réduire vos coûts logistiques et votre empreinte carbone ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "14",
                  "value": "Oui",
                  "id_action": 248,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "15",
                  "value": "Non",
                  "id_action": 248,
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
          "id": "16",
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
    }
  ]