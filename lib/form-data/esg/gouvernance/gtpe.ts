import { QuestionTree } from "@/types/esg-form";

export const gtpe: QuestionTree = [
    {
      "id": "1",
      "value": "Votre entreprise dispose t-elle d'organes de gouvernance ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 22, 23, 24, 25, 26, 28, 29],
      "id_action": null,
      "information": "Cette question vise à déterminer si votre entreprise a établi des structures formelles de gouvernance, telles que des conseils d'administration, des comités ou d'autres instances de décision. La présence d'organes de gouvernance est essentielle pour assurer une direction stratégique, une responsabilité et une transparence au sein de l'organisation. Ces structures aident à guider les décisions, à évaluer les performances et à veiller à ce que les intérêts des parties prenantes soient pris en compte dans le fonctionnement de l'entreprise.",
      "children": [
        {
          "id": "2",
          "value": "Oui",
          "id_action": 428,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "3",
              "value": "La mixité est-elle respectée au sein de ces organes ?",
              "id_action": null,
              "information": "Cette question évalue si la représentation des genres est équilibrée au sein des instances décisionnelles de votre entreprise, ce qui est essentiel pour promouvoir la diversité et l'inclusion dans la gouvernance.",
              "children": [
                {
                  "id": "4",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "5",
                      "value": "Quelle est la part de femmes dans les instances dirigeantes de votre organisation, notamment au sein du Comité de Direction, du Comité Exécutif et du Conseil d'Administration ?",
                      "id_action": null,
                      "information": "Cette question vise à déterminer le pourcentage de femmes au sein des principales instances décisionnelles de votre organisation.calculé comme suit.\n\n👉 Méthode de calcul :\n(Nombre de femmes dans les instances / Nombre total de membres) × 100.",
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [343]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "7",
                  "value": "Non",
                  "id_action": 426,
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
              "id": "8",
              "value": "Des salariés sont-ils présents au sein de vos organses de gouvernance ?",
              "id_action": null,
              "information": "Cette question vise à déterminer si des employés de votre entreprise occupent des sièges dans l'organe de gouvernance, tel que le conseil d'administration ou le comité exécutif. La présence de salariés au sein de ces instances décisionnelles peut refléter un engagement envers la participation des employés dans le processus de prise de décision et contribuer à une culture d'entreprise plus inclusive et transparente.",
              "children": [
                {
                  "id": "9",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "10",
                      "value": "Quelle part des sièges de votre organe de gouvernance est occupée par des salariés ?",
                      "id_action": null,
                      "information": "Cette question évalue le pourcentage de sièges occupés par des salariés dans l'organe de gouvernance principal de votre entreprise.\n\n👉 Méthode de calcul :\n(Nombre de sièges occupés par des salariés / Nombre total de sièges) × 100.",
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [344]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "12",
                  "value": "Non",
                  "id_action": 427,
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
              "value": "Quelle est la part de travailleurs en situation de handicap au sein des organes de gouvernance de l'entreprise ?",
              "id_action": null,
              "information": "Cette question évalue le pourcentage de sièges occupés par des travailleurs en situation de handicap dans l'organe de gouvernance principal de votre entreprise.\n\n👉 Méthode de calcul :\n(Nombre de sièges occupés par des travailleurs en situation de handicap / Nombre total de sièges) × 100.",
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [345]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "15",
          "value": "Non, en raison du statut juridique de l'entreprise ou parce que la société a des salariés depuis moins d'un an",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "16",
          "value": "Non",
          "id_action": 428,
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
      "value": "Quelle est la part du capital de votre entreprise qui est détenue par des salariés (hors dirigeants) ?",
      "ids_secteurs": [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Cette question vise à déterminer la proportion de salariés (hors dirigeants) qui détiennent des parts du capital de l'entreprise. L'actionnariat salarié peut favoriser un engagement plus fort des employés dans la réussite de l'entreprise, renforçant ainsi leur sentiment d'appartenance et leur implication dans le fonctionnement de l'organisation. Cela peut également influencer positivement la culture d'entreprise, la motivation des employés et la qualité des décisions prises au sein de l'entreprise.\n\n👉 Méthode de calcul :\n(Nombre de parts détenues par les salariés / Nombre total de parts) × 100.",
      "children": [
        {
          "id": "18",
          "value": "0 %",
          "id_action": 429,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "19",
          "value": "Moins de 5%",
          "id_action": 429,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "20",
          "value": "Entre 5 et 10%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "21",
          "value": "Entre 11 et 20%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "22",
          "value": "Plus de 21%",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "23",
          "value": "Le statut juridique de l'entreprise ne permet pas l'actionnariat salarié",
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
      "id": "24",
      "value": "Avez-vous mis en place des dispositifs pour partager la valeur créée avec vos salariés ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 22, 23, 24, 25, 26, 28, 29],
      "id_action": null,
      "information": "Cette question vise à identifier les dispositifs de partage de la valeur que votre entreprise a mis en place pour ses salariés. Le partage de la valeur peut renforcer l'engagement des employés, améliorer leur motivation et favoriser une culture d'entreprise collaborative. Ces dispositifs peuvent également contribuer à une meilleure performance globale de l'organisation en alignant les intérêts des employés avec ceux de l'entreprise.",
      "children": [
        {
          "id": "25",
          "value": "Oui",
          "id_action": 430,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "26",
              "value": "Quels sont ces dispositifs ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "27",
                  "value": "Plan d'épargne salariale (intéressement ou participation)",
                  "id_action": null,
                  "done": false,
                  "information": "Votre entreprise propose des mécanismes d'épargne qui permettent aux salariés de bénéficier directement des résultats financiers, souvent sous forme de primes ou de contributions à des fonds d'épargne.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "28",
                  "value": "Prime de partage de la valeur",
                  "id_action": null,
                  "done": false,
                  "information": "Il s'agit d'une prime versée aux salariés, généralement liée à la performance de l'entreprise, pour partager les bénéfices réalisés.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "29",
                  "value": "Prime ou bonus exceptionnel",
                  "id_action": null,
                  "done": false,
                  "information": "Ce type de prime est attribué ponctuellement, souvent en reconnaissance d'une performance exceptionnelle ou d'un effort supplémentaire fourni par les employés.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "30",
                  "value": "Options d'achat d'actions",
                  "id_action": null,
                  "done": false,
                  "information": "Ce dispositif permet aux employés d'acheter des actions de l'entreprise à un prix fixé, favorisant ainsi leur implication dans le succès financier de l'organisation.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "31",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "32",
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
          "id": "34",
          "value": "Non",
          "id_action": 430,
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
      "id": "35",
      "value": "Avez-vous mis en place des mesures pour améliorer la gouvernance et la transparence dans votre entreprises ?",
      "ids_secteurs": [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "36",
          "value": "Oui",
          "id_action": 431,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "37",
              "value": "Quelles sont ces actions ?",
              "id_action": null,
              "information": "Cette question vise à comprendre les initiatives prises par votre entreprise pour renforcer la bonne gouvernance et assurer une transparence accrue dans ses opérations. Une gouvernance efficace est essentielle pour établir des mécanismes de responsabilité, de prise de décision et de communication, qui sont tous cruciaux pour le bon fonctionnement de l'organisation. En mettant en œuvre des actions concrètes dans ces domaines, votre entreprise peut non seulement améliorer sa performance interne, mais aussi renforcer la confiance de ses parties prenantes, y compris les employés, les clients et les investisseurs.",
              "children": [
                {
                  "id": "38",
                  "value": "Manuel du Conseil d'Administration",
                  "id_action": null,
                  "done": false,
                  "information": "Un manuel du Conseil d'Administration établit des lignes directrices claires sur les rôles et les responsabilités des membres.\n\n👉 Exemple : Une entreprise peut créer un document qui précise que les membres doivent se rencontrer au moins une fois par trimestre pour discuter de la stratégie et de la gestion des risques.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "39",
                  "value": "Processus de nomination clair",
                  "id_action": null,
                  "done": false,
                  "information": "Avoir un processus de nomination bien défini assure que les membres du Conseil sont choisis sur la base de critères transparents.\n\n👉 Exemple : Une entreprise pourrait utiliser un tableau de critères de sélection, tel que l'expérience en gestion, la diversité de pensée, et les compétences sectorielles, pour guider les nominations.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "40",
                  "value": "Évaluation des performances",
                  "id_action": null,
                  "done": false,
                  "information": "Cette action vise à s'assurer que l'entreprise suit des indicateurs de performance clairs et mesurables, permettant d'évaluer son efficacité globale et d'apporter des ajustements lorsque nécessaire.\n\n👉 Exemple : Une entreprise peut établir des KPI (indicateurs clés de performance) pour des aspects tels que la satisfaction des clients ou la productivité des employés, et effectuer des évaluations trimestrielles pour examiner les résultats et ajuster les stratégies.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "41",
                  "value": "Politique de rémunération équitable",
                  "id_action": null,
                  "done": false,
                  "information": "Adopter une politique de rémunération transparente garantit que les salaires sont justes.\n\n👉 Exemple : Une entreprise peut publier un rapport annuel sur les rémunérations des dirigeants, détaillant les critères utilisés pour déterminer les augmentations et les primes.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "42",
                  "value": "Culture de la communication ouverte",
                  "id_action": null,
                  "done": false,
                  "information": "Favoriser une culture où les employés peuvent partager leurs préoccupations est crucial.\n\n👉 Exemple : Une entreprise pourrait mettre en place des \"cafés de la parole\" mensuels, où les employés peuvent discuter librement avec la direction dans un cadre informel.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "43",
                  "value": "Réunions avec les parties prenantes",
                  "id_action": null,
                  "done": false,
                  "information": "Organiser des réunions régulières permet de discuter des orientations stratégiques.\n\n👉 Exemple : Une entreprise peut tenir des forums annuels avec ses employés et clients pour recueillir des retours sur les décisions clés, en intégrant ces feedbacks dans sa stratégie future.",
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
          "id": "44",
          "value": "Non",
          "id_action": 431,
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
      "value": "Avez-vous mis en place des actions pour garantir une rémunération équitable et réduire les inégalités salariales au sein de votre entreprise ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 22, 23, 24, 25, 26, 28, 29],
      "id_action": null,
      "information": "Cette question vise à comprendre les mesures que votre entreprise met en œuvre pour garantir une répartition juste des bénéfices générés et limiter les inégalités salariales. Dans un contexte où les attentes en matière d'équité et de justice sociale sont en forte hausse, il est essentiel d'adopter des pratiques qui favorisent la transparence et la responsabilité. En assurant un partage équitable de la valeur créée, votre entreprise contribue non seulement à renforcer la motivation et l'engagement des employés, mais également à améliorer sa réputation et sa performance globale.",
      "children": [
        {
          "id": "46",
          "value": "Oui",
          "id_action": 432,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "47",
              "value": "Quelles sont ces actions ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "48",
                  "value": "Salaire minimum supérieur aux normes",
                  "id_action": null,
                  "done": false,
                  "information": "Garantir un salaire de base qui dépasse les exigences légales et conventionnelles. Cela témoigne de l'engagement de l'entreprise à rémunérer équitablement ses employés.\n\n👉 Exemple : Offrir un salaire minimum qui est au moins 10 % supérieur au salaire minimum légal afin de valoriser le travail des employés.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "49",
                  "value": "Revue annuelle des salaires",
                  "id_action": null,
                  "done": false,
                  "information": "Organiser une évaluation des salaires chaque année pour ajuster les rémunérations en fonction des performances et des évolutions du marché. Cela permet de maintenir des pratiques de rémunération justes et compétitives.\n\n👉 Exemple : Analyser les performances des employés et les tendances du marché pour déterminer les augmentations salariales.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "50",
                  "value": "Politique de rémunération accessible",
                  "id_action": null,
                  "done": false,
                  "information": "Rendre la politique salariale claire et disponible à tous les employés. Cela favorise la transparence et aide les employés à comprendre les critères de rémunération.\n\n👉 Exemple : Publier la politique de rémunération sur l'intranet de l'entreprise et organiser des sessions d'information pour expliquer son contenu.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "51",
                  "value": "Ratio d'équité salariale",
                  "id_action": null,
                  "done": false,
                  "information": "Définir un ratio ou un plafond salarial pour limiter les écarts entre les salaires les plus élevés et les salaires les plus bas. Cela contribue à une rémunération plus équitable au sein de l'entreprise.\n\n👉 Exemple : Établir une règle selon laquelle le salaire le plus élevé ne doit pas dépasser cinq fois le salaire le plus bas dans l'entreprise.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "52",
                  "value": "Partage des résultats financiers",
                  "id_action": null,
                  "done": false,
                  "information": "Informer les employés des performances financières de l'entreprise et des bénéfices générés. Cela inclut des mécanismes de partage des résultats, comme des primes ou des participations.\n\n👉 Exemple : Distribuer des primes en fin d'année basées sur les résultats financiers pour récompenser les efforts des employés et les impliquer dans le succès de l'entreprise.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "53",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "54",
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
          "id": "56",
          "value": "Non",
          "id_action": 432,
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
      "id": "57",
      "value": "Les rémunérations variables (primes, bonus) prennent-elles en compte des critères autres que financiers, tels que des aspects environnementaux ou sociaux ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 22, 23, 24, 25, 26, 28, 29],
      "id_action": null,
      "information": "Cette question vise à évaluer si votre entreprise intègre des critères non financiers, comme les performances environnementales et sociales, dans la détermination des rémunérations variables telles que les primes ou bonus. Cela peut inclure des primes basées sur des objectifs liés à la durabilité, à la responsabilité sociale ou à d'autres engagements éthiques. L'intégration de ces critères dans les pratiques de rémunération peut non seulement renforcer l'engagement des employés envers les valeurs de l'entreprise, mais également démontrer une volonté de contribuer positivement à la société et à l'environnement.\n\n👉 Exemple : Par exemple, si une entreprise accorde des primes aux employés qui atteignent des objectifs de réduction des déchets ou qui participent à des initiatives de bénévolat, cela reflète un engagement envers des critères sociaux et environnementaux dans son système de rémunération.",
      "children": [
        {
          "id": "58",
          "value": "Oui, pour tous les employés",
          "id_action": null,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "59",
          "value": "Oui, pour les cadres et dirigeants",
          "id_action": 433,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "60",
          "value": "Oui, pour certains employés",
          "id_action": 433,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "61",
          "value": "Non, aucune rémunération basée sur des critères non financiers",
          "id_action": 433,
          "done": false,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "62",
          "value": "Autre(s)",
          "id_action": null,
          "done": false,
          "information": null,
          "children": [
            {
              "id": "63",
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
      "inputType": "single"
    },
    {
      "id": "65",
      "value": "Votre entreprise dispose-t-elle d'un comité de mission ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 22, 23, 24, 25, 26, 28, 29],
      "id_action": null,
      "information": "Cette question vise à déterminer si votre entreprise a mis en place un comité de mission, qui est un organe distinct du Conseil d'administration et de la direction. Ce comité, pouvant être désigné comme comité des parties prenantes ou comité d'impact, est chargé d'évaluer et de superviser la performance sociale et environnementale de l'entreprise. Sa présence témoigne d'un engagement formel à intégrer les enjeux de durabilité et de responsabilité sociale dans les processus décisionnels de l'organisation.",
      "children": [
        {
          "id": "66",
          "value": "Oui",
          "id_action": 416,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "67",
          "value": "Non",
          "id_action": 416,
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
      "id": "68",
      "value": "Votre entreprise a-t-elle mis en place un code de conduite pour encourager des comportements éthiques ?",
      "ids_secteurs": [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Cette question vise à évaluer si votre entreprise a établi un code de conduite pour promouvoir des comportements éthiques parmi vos employés ou les travailleurs de votre chaîne de valeur. Un code de conduite bien défini sert de référence pour les valeurs et les normes attendues au sein de l'organisation, renforçant ainsi la culture d'intégrité et de responsabilité.\n\n👉 Exemple : Un code de conduite peut inclure des principes sur la lutte contre la discrimination, la protection des données ou encore les attentes en matière de transparence et d'honnêteté dans les interactions professionnelles.",
      "children": [
        {
          "id": "69",
          "value": "Oui",
          "id_action": 444,
          "done": true,
          "information": null,
          "children": [],
          "type": "reponse"
        },
        {
          "id": "70",
          "value": "Non",
          "id_action": 444,
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