import { QuestionTree } from "@/types/esg-form";

export const gi: QuestionTree = [{
    "id": "1",
    "value": "Votre organisation dispose-t-elle d'une politique de gestion pour son parc informatique ?",
    "ids_secteurs": [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    "id_action": null,
    "information": "Cette question vise à déterminer si votre entreprise a établi une politique de gestion pour son parc informatique, ce qui est essentiel pour garantir l'efficacité, la sécurité et la durabilité des systèmes informatiques. Une politique bien définie permet d'optimiser l'utilisation des ressources, d'assurer la conformité aux normes et de planifier les mises à jour ou remplacements nécessaires tout en minimisant l'impact environnemental.",
    "children": [
      {
        "id": "2",
        "value": "Oui",
        "id_action": 443,
        "done": true,
        "information": null,
        "children": [
          {
            "id": "3",
            "value": "Comment votre organisation gère-t-elle son parc informatique ?",
            "id_action": null,
            "information": null,
            "children": [
              {
                "id": "4",
                "value": "Une politique de cycle de vie des matériels informatiques est formalisée",
                "id_action": null,
                "done": false,
                "information": "Cette politique définit les étapes de gestion des matériels informatiques depuis leur acquisition jusqu'à leur élimination. Elle inclut des pratiques telles que l'évaluation des besoins, l'utilisation optimale, la maintenance, la mise à jour et le recyclage ou la réutilisation des équipements. L'objectif est de prolonger la durée de vie des matériels, de minimiser les déchets et de garantir une gestion responsable des ressources informatiques.",
                "children": [
                  {
                    "id": "5",
                    "value": "Quelle est la durée de vie moyenne de vos équipements informatiques (en années) ?",
                    "id_action": null,
                    "information": null,
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [349]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "7",
                "value": "Un inventaire du parc informatique est tenu à jour",
                "id_action": null,
                "done": false,
                "information": "Cette pratique consiste à maintenir un registre détaillé et actuel de tous les équipements informatiques de l'entreprise. Cela inclut des informations sur le type, la quantité, l'état et l'emplacement des matériels. Un inventaire à jour permet de suivre l'utilisation des ressources, de planifier les remplacements nécessaires et d'assurer une gestion efficace des actifs informatiques.",
                "children": [],
                "type": "reponse"
              },
              {
                "id": "8",
                "value": "Un processus d'acquisition est formulé afin que le matériel informatique soit dimensionné au besoin de l'utilisateur",
                "id_action": null,
                "done": false,
                "information": "Ce processus définit les étapes à suivre pour l'achat de matériel informatique, en veillant à ce que les équipements soient adaptés aux besoins spécifiques des utilisateurs. Cela implique une évaluation préalable des exigences techniques et fonctionnelles, garantissant que le matériel acquis est non seulement approprié, mais également économiquement viable, tout en minimisant le risque d'achats superflus ou inappropriés.",
                "children": [],
                "type": "reponse"
              },
              {
                "id": "9",
                "value": "Autre(s)",
                "id_action": null,
                "done": false,
                "information": null,
                "children": [
                  {
                    "id": "10",
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
        "id": "12",
        "value": "Non",
        "id_action": 443,
        "done": false,
        "information": null,
        "children": [],
        "type": "reponse"
      }
    ],
    "type": "question",
    "inputType": "single"
  }]