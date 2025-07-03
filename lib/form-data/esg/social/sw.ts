import { QuestionTree } from "@/types/esg-form";

export const sw: QuestionTree = [
    {
      "id": "1",
      "value": "Avez-vous pris des mesures pour garantir que vos services numériques soient accessibles à tous, y compris aux personnes en situation de handicap ?",
      "ids_secteurs": [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
      "id_action": null,
      "information": "Veiller à l'accessibilité de vos services numériques est essentiel pour garantir une expérience utilisateur inclusive, conformément aux principes des WCAG (Web Content Accessibility Guidelines) et au RGAA (Référentiel Général d'Accessibilité pour les Administrations). Ces standards visent à rendre les contenus web accessibles à tous, y compris aux personnes en situation de handicap.\n\nDes actions concrètes pour atteindre cet objectif peuvent inclure la mise en place de balises ARIA (Accessible Rich Internet Applications) pour améliorer l'accessibilité des applications web, l'utilisation de textes alternatifs pour toutes les images et graphiques, ainsi que des contrastes de couleur appropriés pour garantir une lisibilité optimale. De plus, il est important d'assurer la navigation au clavier et la compatibilité avec les lecteurs d'écran, de réaliser des tests d'accessibilité avec des utilisateurs en situation de handicap et de former le personnel sur les meilleures pratiques en matière d'accessibilité numérique.\n\n👉 Exemple : Mettre en œuvre une politique d'accessibilité numérique qui inclut des formations régulières pour le personnel et un suivi des performances d'accessibilité des services numériques.",
      "children": [
        {
          "id": "2",
          "value": "Oui",
          "id_action": 395,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "3",
          "value": "Non",
          "id_action": 395,
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
      "id": "4",
      "value": "Quelles pratiques avez-vous mises en place pour minimiser les impacts négatifs du numérique sur vos collaborateurs ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 8, 9, 13, 16, 18, 19, 26, 27, 28, 29],
      "id_action": null,
      "information": "Mettre en œuvre des mesures visant à réduire les effets néfastes des technologies numériques sur les employés est essentiel. Ces pratiques englobent divers aspects, allant de l'aménagement du temps de travail derrière les écrans à la sensibilisation des équipes sur les enjeux liés à l'utilisation des outils numériques. En prenant ces mesures, l'entreprise protège le bien-être de ses collaborateurs, mais elle favorise également une utilisation responsable des technologies.\n\n👉 Exemple : Organiser des sessions de sensibilisation sur la gestion du temps d'écran et les méthodes pour déconnecter régulièrement, afin de préserver la santé mentale des employés.",
      "children": [
        {
          "id": "5",
          "value": "Aménagement et gestion du temps de travail sur écran, sensibilisation à la surcharge d'information",
          "id_action": null,
          "done": false,
          "information": "Adapter les espaces de travail et établir des routines pour gérer le temps passé devant les écrans contribue à réduire la fatigue visuelle et les troubles musculo-squelettiques. Cela implique d'encourager des pauses régulières et de repenser l'organisation du travail pour inclure des activités variées.\nÉduquer les employés sur les risques liés à la surcharge d'informations aide à réduire le stress et à améliorer la productivité. En sensibilisant sur l'importance de se déconnecter, les entreprises favorisent un meilleur équilibre entre vie professionnelle et personnelle.\n\n👉 Exemple : Mettre en place des horaires flexibles permettant aux employés de prendre des pauses de cinq minutes toutes les heures pour se lever et s'étirer ou proposer des ateliers sur les stratégies de gestion du temps et la mise en place de périodes de déconnexion quotidienne pour éviter le surmenage.",
          "children": [],
          "type": "reponse"
        },
        {
          "id": "6",
          "value": "Gestion des notifications et des distractions numériques",
          "id_action": null,
          "done": false,
          "information": "Mettre en place des stratégies pour gérer les notifications et réduire les distractions numériques est essentiel pour permettre aux employés de rester concentrés et productifs.\n\n👉 Exemple : Sensibiliser les employés à l'importance de gérer leurs notifications et définir des plages horaires pour vérifier les emails peut contribuer à améliorer la concentration et le bien-être au travail.",
          "children": [],
          "type": "reponse"
        },
        {
          "id": "7",
          "value": "Promotion de l'inclusion numérique",
          "id_action": null,
          "done": false,
          "information": "S'assurer que tous les employés ont accès aux outils technologiques et à la formation nécessaire favorise une culture d'inclusion. Cela permet également de maximiser le potentiel de chaque employé, indépendamment de son niveau de compétence initial.\n\n👉 Exemple : Offrir des sessions de formation sur l'utilisation des nouveaux outils numériques pour garantir que tout le personnel soit à l'aise avec la technologie.",
          "children": [],
          "type": "reponse"
        },
        {
          "id": "8",
          "value": "Identification et gestion des impacts sociaux des technologies",
          "id_action": null,
          "done": false,
          "information": "Évaluer les effets sociaux des technologies, comme l'isolement ou la dépendance, est essentiel pour mettre en place des stratégies d'intervention appropriées. Cela implique de reconnaître les défis posés par les outils numériques et d'agir pour atténuer leurs conséquences.\n\n👉 Exemple : Réaliser des enquêtes régulières pour évaluer le bien-être des employés et identifier les problèmes potentiels liés à l'utilisation des technologies.",
          "children": [],
          "type": "reponse"
        },
        {
          "id": "9",
          "value": "Aucune pratique",
          "id_action": 396,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        }
      ],
      "type": "question",
      "inputType": "multiple"
    },
    {
      "id": "10",
      "value": "Vos services numériques (logiciel, application mobile) envoient-ils des notifications aux utilisateurs ?",
      "ids_secteurs": [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
      "id_action": null,
      "information": "Mettre en place un système de notifications permet d'informer les utilisateurs des mises à jour, rappels ou événements importants liés à leurs activités sur la plateforme. Cependant, il est essentiel de veiller à ce que ces notifications soient pertinentes et non intrusives afin de garantir une expérience utilisateur positive. Une gestion efficace des notifications contribue à renforcer l'engagement des utilisateurs tout en minimisant le risque de surcharge d'informations.\n\n👉 Exemple : Envoyer des notifications uniquement pour des mises à jour importantes ou des alertes concernant les activités de l'utilisateur.",
      "children": [
        {
          "id": "11",
          "value": "Oui",
          "id_action": null,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "12",
              "value": "Les notifications ne sont-elles envoyées qu'en cas de réelle nécessité ?",
              "id_action": null,
              "information": "Limiter l'envoi de notifications aux situations réellement nécessaires aide à maintenir l'attention des utilisateurs sur des informations pertinentes. Cela évite les distractions inutiles et contribue à une utilisation plus sereine des services numériques. En adoptant cette approche, les entreprises peuvent améliorer la satisfaction des utilisateurs et réduire le taux de désengagement.\n\n👉 Exemple : Établir des critères clairs pour déterminer quand une notification doit être envoyée, comme des événements critiques ou des rappels d'action.",
              "children": [
                {
                  "id": "13",
                  "value": "Oui",
                  "id_action": 397,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "14",
                  "value": "Non",
                  "id_action": 397,
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
              "value": "Le service numérique permet-il à l'utilisateur de contrôler les notifications qu'il reçoit ?",
              "id_action": null,
              "information": "Offrir aux utilisateurs la possibilité de personnaliser leurs préférences de notifications renforce leur autonomie et leur satisfaction. En permettant aux utilisateurs de choisir le type et la fréquence des notifications qu'ils reçoivent, les entreprises peuvent créer une expérience utilisateur plus adaptée et respectueuse des besoins individuels. Cela contribue également à réduire le risque de désengagement dû à une surcharge d'informations.\n\n👉 Exemple : Intégrer une fonctionnalité dans les paramètres de l'application où les utilisateurs peuvent activer ou désactiver des notifications spécifiques selon leurs préférences.",
              "children": [
                {
                  "id": "16",
                  "value": "Oui",
                  "id_action": 398,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "17",
                  "value": "Non",
                  "id_action": 398,
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
          "id": "18",
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
      "id": "19",
      "value": "Vos services numériques informent-ils les utilisateurs sur les impacts environnementaux significatifs liés à l'utilisation de certaines fonctionnalités ?",
      "ids_secteurs": [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
      "id_action": null,
      "information": "Assurer que les utilisateurs soient conscients des impacts environnementaux des fonctionnalités de vos services numériques est essentiel pour promouvoir une utilisation responsable des technologies. Informer sur les conséquences écologiques de certaines actions, telles que l'utilisation intensive des ressources ou l'empreinte carbone des opérations, permet aux utilisateurs de prendre des décisions éclairées. Cette transparence contribue à sensibiliser les utilisateurs à leur rôle dans la durabilité et à encourager des pratiques numériques plus respectueuses de l'environnement.\n\n👉 Exemple : Afficher un message lors de l'utilisation d'une fonctionnalité gourmande en ressources, indiquant les impacts environnementaux associés, comme l'augmentation de la consommation d'énergie ou des ressources.",
      "children": [
        {
          "id": "20",
          "value": "Oui",
          "id_action": 399,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "21",
          "value": "Non",
          "id_action": 399,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "22",
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
      "id": "23",
      "value": "Au sein de votre entreprise, vous ou vos collaborateurs avez-vous été sensibilisés au numérique responsable ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 8, 9, 13, 16, 18, 19, 26, 27, 28, 29],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "24",
          "value": "Oui",
          "id_action": 400,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "25",
              "value": "Par quel(s) moyen(s) ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "26",
                  "value": "Fresque, Webinaire, Sensibilisation, E-learning ou MOOC dédié au sujet du numérique responsable",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "27",
                  "value": "Affichage ou communication interne visant à sensibiliser sur les impacts du numérique",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "28",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "29",
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
              "id": "31",
              "value": "Quel pourcentage de vos collaborateurs a été sensibilisé au numérique responsable au cours des 12 derniers mois (par MOOC, formation ou autre action) ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [340]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "33",
          "value": "Non",
          "id_action": 400,
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