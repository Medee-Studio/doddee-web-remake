import { QuestionTree } from "@/types/esg-form";

export const ei: QuestionTree = [
    {
      "id": "1",
      "value": "Avez-vous inclus l'achat d'outils IT reconditionnés dans vos pratiques d'approvisionnement IT lors de ces 12 derniers mois ?",
      "ids_secteurs": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 29],
      "id_action": null,
      "information": "L'achat de matériel reconditionné consiste à se procurer des équipements qui ont été remis à neuf et testés pour assurer leur bon fonctionnement, offrant ainsi une alternative durable et souvent plus économique aux équipements neufs.\n\nCette pratique contribue à réduire les déchets électroniques, à limiter l'empreinte carbone associée à la production de nouveaux appareils et à promouvoir une économie circulaire.",
      "children": [
        {
          "id": "2",
          "value": "Oui",
          "id_action": 341,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "3",
              "value": "Quel pourcentage de votre parc informatique est composé d'équipements reconditionnés ?",
              "id_action": null,
              "information": null,
              "children": [],
              "type": "question",
              "inputType": "numeric",
              "id_kpis": [200]
            }
          ],
          "type": "reponse"
        },
        {
          "id": "5",
          "value": "Non",
          "id_action": 341,
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
      "id": "6",
      "value": "Utilisez-vous des équipements numériques écoénergétiques ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Cette question vise à savoir si votre entreprise utilise des équipements numériques écoénergétiques, c'est-à-dire des appareils conçus pour consommer moins d'énergie tout en offrant des performances optimales.\nLes équipements écoénergétiques peuvent inclure des ordinateurs, serveurs, moniteurs, imprimantes et autres périphériques qui sont certifiés par des labels tels que Energy Star ou équivalents, indiquant qu'ils respectent des normes strictes d'efficacité énergétique.\nL'utilisation de tels équipements contribue à réduire la consommation d'énergie, à diminuer les coûts opérationnels et à minimiser l'empreinte carbone de votre entreprise.",
      "children": [
        {
          "id": "7",
          "value": "Oui",
          "id_action": 342,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "8",
              "value": "Quels équipements numériques écoénergétiques utilisez-vous ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "9",
                  "value": "Ordinateurs (fixes et portables) à faible consommation énergétique",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "10",
                      "value": "Quelle est la part des ordinateurs à faible consommation par rapport au total des ordinateurs portables de votre entreprise ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [201]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "12",
                  "value": "Écrans LCD à efficacité énergétique",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "13",
                      "value": "Quelle est la part des écrans LCD à efficacité énergétique par rapport au total des écrans de votre entreprise ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [202]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "15",
                  "value": "Des serveurs à haute efficacité énergétique",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "16",
                      "value": "Quelle est la part des serveurs à haute efficacité énergétique par rapport au total des serveurs de votre entreprise ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [203]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "18",
                  "value": "Imprimantes écoénergétiques",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "19",
                      "value": "Quelle est la part des imprimantes écoénergétiques par rapport au total des imprimantes de votre entreprise ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [204]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "21",
                  "value": "Équipements de réseau à faible consommation",
                  "id_action": null,
                  "done": false,
                  "information": "Les équipements de réseau à faible consommation d'énergie sont conçus pour optimiser l'efficacité énergétique tout en garantissant des performances élevées.\nIls incluent des routeurs, commutateurs, points d'accès Wi-Fi et autres dispositifs de réseau dotés de fonctionnalités telles que la gestion intelligente de l'énergie, les modes veille automatiques ou l'optimisation des performances selon la charge de travail. En intégrant ces équipements, votre entreprise peut réduire sa consommation d'énergie, diminuer ses coûts opérationnels et améliorer son impact environnemental.",
                  "children": [
                    {
                      "id": "22",
                      "value": "Quelle est la part des équipements de réseau à faible consommation par rapport au total des équipements réseau de votre entreprise ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [205]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "24",
                  "value": "Solutions de refroidissement économes en énergie",
                  "id_action": null,
                  "done": false,
                  "information": "Les solutions de refroidissement économes en énergie permettent de maintenir une température optimale tout en réduisant la consommation énergétique. Elles sont souvent utilisées dans les centres de données, les bureaux ou les industries qui nécessitent un contrôle thermique efficace.\nCes technologies incluent des systèmes comme le free cooling, des climatiseurs à haute efficacité ou encore des échangeurs de chaleur. En adoptant ces solutions, les entreprises peuvent à la fois diminuer leurs coûts énergétiques et réduire leur impact environnemental, tout en garantissant un refroidissement efficace de leurs installations.",
                  "children": [
                    {
                      "id": "25",
                      "value": "Quelle est la part des solutions de refroidissement économes en énergie par rapport au total des équipements de refroidissement de votre entreprise ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [206]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "27",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "28",
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
          "id": "30",
          "value": "Non",
          "id_action": 342,
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
      "id": "31",
      "value": "Avez-vous mis en place des actions pour réduire la consommation énergétique liée à vos activités numériques ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Les activités numériques englobent l'utilisation de serveurs, d'ordinateurs, de centres de données et d'autres équipements informatiques qui peuvent consommer une quantité significative d'énergie.",
      "children": [
        {
          "id": "32",
          "value": "Oui",
          "id_action": 343,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "33",
              "value": "Quelle(s) action(s) avez-vous mises en place pour réduire la consommation énergétique liée à vos activités numériques ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "34",
                  "value": "Optimisation des paramètres de veille ou désactivation des appareils non utilisés",
                  "id_action": null,
                  "done": false,
                  "information": "Cette action consiste à optimiser les réglages de veille des appareils numériques ou à programmer l'arrêt automatique des appareils non utilisés, afin de minimiser la consommation d'énergie lorsqu'ils sont inactifs.\nLa mise en place de ces fonctionnalités permet de réduire les gaspillages énergétiques dus aux appareils laissés en marche inutilement.",
                  "children": [
                    {
                      "id": "35",
                      "value": "Quelle est la part des appareils ayant des paramètres de veille ou des arrêts automatiques programmés, par rapport au total des appareils numériques de votre entreprise ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [207]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "37",
                  "value": "Gestion des mises à jour pour optimiser la performance énergétique des systèmes",
                  "id_action": null,
                  "done": false,
                  "information": "Cette action consiste à s'assurer que les mises à jour des systèmes d'exploitation et des logiciels sont effectuées régulièrement, idéalement selon un cycle prédéfini (par exemple, mensuel ou trimestriel), pour garantir l'efficacité énergétique des appareils.\nLes mises à jour permettent de corriger des failles de sécurité, d'optimiser la performance des systèmes et d'ajouter des fonctionnalités qui réduisent la consommation d'énergie. Une gestion régulière et bien planifiée des mises à jour prolonge la durée de vie des équipements tout en réduisant leur impact environnemental, en minimisant la consommation d'énergie inutile due à des logiciels obsolètes ou inefficaces.",
                  "children": [
                    {
                      "id": "38",
                      "value": "Quel pourcentage de vos appareils est régulièrement mis à jour pour améliorer leur performance ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [208]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "40",
                  "value": "Serveurs virtuels pour optimiser l'utilisation des ressources",
                  "id_action": null,
                  "done": false,
                  "information": "Cette action à trait à l'utilisation de serveurs virtuels, qui permettent de faire fonctionner plusieurs environnements virtuels sur un même serveur physique.\nLa virtualisation optimise l'utilisation des ressources matérielles, réduit le nombre de serveurs physiques nécessaires et diminue la consommation d'énergie globale. En consolidant plusieurs serveurs sur un même appareil, l'entreprise peut non seulement réduire ses coûts d'exploitation (énergie, maintenance), mais également limiter son impact environnemental en diminuant le nombre de machines actives et, par conséquent, la consommation d'énergie associée à leur fonctionnement et à leur refroidissement.",
                  "children": [
                    {
                      "id": "41",
                      "value": "Quelle est la part de serveurs virtualisés par rapport à l'ensemble des serveurs utilisés dans votre entreprise ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [209]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "43",
                  "value": "Partage de ressources numériques en interne pour éviter la duplication de fichiers",
                  "id_action": null,
                  "done": false,
                  "information": "Cette action consiste à centraliser les fichiers et documents numériques au sein de votre organisation pour éviter les duplications inutiles, optimisant ainsi l'utilisation des ressources de stockage et réduisant la consommation d'énergie. Un rapport publié par The Shift Project (\"Lean ICT - Pour une sobriété numérique\") met en lumière l'impact énergétique de la gestion des données et souligne l'importance de limiter les duplications pour réduire l'empreinte carbone numérique.",
                  "children": [
                    {
                      "id": "44",
                      "value": "Veuillez décrire comment vous gérez le partage de fichiers pour éviter les duplications. Par exemple, utilisez-vous des serveurs partagés, des systèmes de gestion de documents ou des plateformes collaboratives comme des intranets ou des outils cloud ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "text",
                      "id_kpis": [210]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "46",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "47",
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
          "id": "49",
          "value": "Non",
          "id_action": 343,
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
      "id": "50",
      "value": "Avez-vous dématérialisé certaines procédures consommatrices de ressources ?",
      "ids_secteurs": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 29],
      "id_action": null,
      "information": "Cette question explore comment votre organisation numérise ses opérations pour réduire l'utilisation de ressources physiques comme le papier ou les consommables par exemple.\nElle couvre les processus tels que la facturation électronique, la gestion RH en ligne ou l'optimisation des flux de travail à travers des outils numériques.\nCes actions visent à rendre les opérations plus efficaces tout en réduisant l'impact environnemental lié à l'utilisation de supports physiques.",
      "children": [
        {
          "id": "51",
          "value": "Oui",
          "id_action": 344,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "52",
              "value": "Avez-vous dématérialisé vos processus papier, tels que les factures, documents administratifs ou autres processus opérationnels, en passant à des solutions numériques comme la facturation électronique, la gestion électronique des documents ou l'envoie de formulaires en ligne ?",
              "id_action": null,
              "information": "Passer à la facturation électronique et à la gestion numérique des documents permet de réduire l'utilisation de papier, d'améliorer l'efficacité des processus administratifs et de faciliter le stockage et l'accès aux informations.\n\n",
              "children": [
                {
                  "id": "53",
                  "value": "Oui",
                  "id_action": 351,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "54",
                  "value": "Non",
                  "id_action": 351,
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
              "id": "55",
              "value": "Avez-vous dématérialisé vos processus de recrutement et de gestion des ressources humaines, par exemple en utilisant des candidatures en ligne et une gestion électronique des dossiers du personnel",
              "id_action": null,
              "information": "La gestion en ligne des candidatures, des dossiers du personnel et des autres processus RH améliore l'efficacité et réduit l'utilisation de papier.",
              "children": [
                {
                  "id": "56",
                  "value": "Oui",
                  "id_action": 350,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "57",
                  "value": "Non",
                  "id_action": 350,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "58",
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
              "id": "64",
              "value": "Utilisez-vous des plateformes de stockage en ligne et de partage de fichiers pour réduire l'utilisation de supports physiques ?",
              "id_action": null,
              "information": "Les plateformes en ligne permettent de centraliser les données, réduisant le besoin de supports physiques et facilitant l'accès aux documents en temps réel.",
              "children": [
                {
                  "id": "65",
                  "value": "Oui",
                  "id_action": 349,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "66",
                  "value": "Non",
                  "id_action": 349,
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
              "value": "Avez-vous converti vos supports de communication traditionnels, comme les brochures et catalogues, en versions numériques consultables en ligne ?",
              "id_action": null,
              "information": "Remplacer les brochures et catalogues imprimés par des versions numériques réduit les coûts d'impression et l'empreinte écologique de l'entreprise.",
              "children": [
                {
                  "id": "68",
                  "value": "Oui",
                  "id_action": 348,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "69",
                  "value": "Non",
                  "id_action": 348,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "70",
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
              "id": "71",
              "value": "Avez-vous dématérialisé vos processus de commande et de gestion des stocks, par exemple par le biais de commandes en ligne et d'un suivi électronique des stocks ?",
              "id_action": null,
              "information": "Automatiser les commandes et suivre les stocks en ligne permet de gagner en efficacité et d'éliminer les supports papier associés à ces processus.",
              "children": [
                {
                  "id": "72",
                  "value": "Oui",
                  "id_action": 347,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "73",
                  "value": "Non",
                  "id_action": 347,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "74",
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
              "id": "75",
              "value": "Avez-vous mis en place des systèmes de Gestion des Processus Métier (BPM) pour automatiser et optimiser vos workflows ?",
              "id_action": null,
              "information": "La mise en place de de systèmes de Gestion des Processus Métier (BPM) permet d'automatiser et d'optimiser les workflows, réduisant ainsi la consommation de ressources physiques, comme le papier et améliorant l'efficacité opérationnelle.\nBien que principalement liée à l'optimisation des processus internes, cette action peut également avoir un impact positif sur la gestion énergétique en réduisant l'utilisation de dispositifs énergivores et en limitant la sollicitation des serveurs et équipements informatiques.\nCela fait partie d'une approche RSE visant à dématérialiser et à améliorer la durabilité des opérations.",
              "children": [
                {
                  "id": "76",
                  "value": "Oui",
                  "id_action": 346,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "77",
                  "value": "Non",
                  "id_action": 346,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "78",
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
              "id": "79",
              "value": "Autre(s)",
              "id_action": null,
              "done": false,
              "information": null,
              "children": [
                {
                  "id": "80",
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
          "id": "82",
          "value": "Non",
          "id_action": 344,
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
      "value": "Avez-vous mis en place des pratiques visant à réduire l'impact environnemental de l'utilisation des emails au sein de votre entreprise ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Cette question s'intéresse à la gestion des communications numériques pour limiter leur empreinte énergétique.\nElle vise à optimiser l'utilisation des emails et des outils de collaboration, afin de réduire la consommation énergétique liée à ces pratiques.\nLes actions incluent la limitation des pièces jointes volumineuses, l'adoption de signatures électroniques et l'usage de plateformes collaboratives pour diminuer les échanges d'emails.",
      "children": [
        {
          "id": "84",
          "value": "Oui",
          "id_action": 352,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "85",
              "value": "Utilisez-vous des signatures électroniques pour éviter l'impression de documents, pour vos contrats et documents officiels par exemple ?",
              "id_action": null,
              "information": "Cela consiste à remplacer les signatures manuscrites sur des documents imprimés par des signatures électroniques. Par exemple, pour les contrats ou les documents officiels, l'entreprise utilise des services de signature électronique, ce qui permet de réduire la consommation de papier et les coûts d'impression tout en accélérant les processus administratifs.",
              "children": [
                {
                  "id": "86",
                  "value": "Oui",
                  "id_action": 358,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "87",
                  "value": "Non",
                  "id_action": 358,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "88",
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
              "id": "89",
              "value": "Limitez-vous l'utilisation de pièces jointes volumineuses pour réduire la consommation de bande passante, par exemple en envoyant des liens vers des plateformes de stockage cloud plutôt que des pièces jointes ?",
              "id_action": null,
              "information": "Il s'agit de privilégier l'envoi de liens vers des plateformes de stockage cloud plutôt que d'envoyer directement des pièces jointes volumineuses. Cela permet de réduire la consommation de bande passante et d'optimiser les performances des réseaux tout en facilitant l'accès aux fichiers pour les destinataires.",
              "children": [
                {
                  "id": "90",
                  "value": "Oui",
                  "id_action": 357,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "91",
                  "value": "Non",
                  "id_action": 357,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "92",
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
              "id": "93",
              "value": "Avez-vous recours à des listes de diffusion ciblées pour éviter l'envoi massif d'emails, par exemple en créant des listes pour des groupes spécifiques plutôt qu'une liste générale ?",
              "id_action": null,
              "information": "Cette pratique consiste à segmenter les destinataires en groupes spécifiques afin de ne pas envoyer des e-mails à des personnes non concernées. Par exemple, créer des listes de diffusion pour des projets ou des départements particuliers permet d'éviter l'envoi massif d'e-mails, réduisant ainsi la surcharge des serveurs de messagerie et l'empreinte carbone numérique.",
              "children": [
                {
                  "id": "94",
                  "value": "Oui",
                  "id_action": 356,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "95",
                  "value": "Non",
                  "id_action": 356,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "96",
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
              "id": "97",
              "value": "Mettez-vous en place des pratiques pour supprimer les emails inutiles et effectuer un nettoyage régulier de votre boîte mail, par exemple par des formations sur la gestion des e-mails ?",
              "id_action": null,
              "information": "Cela implique de mettre en place des bonnes pratiques pour gérer les e-mails en supprimant régulièrement les e-mails inutiles ou obsolètes. Cela allège la boîte de réception, libère de l'espace sur les serveurs et réduit indirectement la consommation d'énergie liée au stockage des données.",
              "children": [
                {
                  "id": "98",
                  "value": "Oui",
                  "id_action": 355,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "99",
                  "value": "Non",
                  "id_action": 355,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "100",
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
              "id": "101",
              "value": "Utilisez-vous des plateformes de collaboration, par exemple des outils de messagerie instantanée et des plateformes de partage de documents ?",
              "id_action": null,
              "information": "Il s'agit d'utiliser des outils de collaboration en ligne comme des messageries instantanées ou des plateformes de partage de documents pour minimiser les échanges d'e-mails.\nPar exemple, Slack, Microsoft Teams, Google Drive ou Zoom.\nCes solutions permettent un travail en temps réel, évitant l'envoi répété de courriels et réduisant ainsi la surcharge numérique.",
              "children": [
                {
                  "id": "102",
                  "value": "Oui",
                  "id_action": 354,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "103",
                  "value": "Non",
                  "id_action": 354,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "104",
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
              "id": "105",
              "value": "Recourez-vous à des applications de gestion de projet pour minimiser les échanges d'emails, par exemple en utilisant une application pour organiser des tâches et discussions ?",
              "id_action": null,
              "information": "Cela consiste à utiliser des outils de gestion de projet pour organiser les tâches, les discussions et les fichiers au sein d'une plateforme unique, réduisant ainsi la nécessité d'envoyer de nombreux e-mails.\nPar exemple, Trello, Asana, Monday.\nCela simplifie la communication et permet une meilleure traçabilité des informations.",
              "children": [
                {
                  "id": "106",
                  "value": "Oui",
                  "id_action": 353,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "107",
                  "value": "Non",
                  "id_action": 353,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "108",
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
              "id": "109",
              "value": "Autre(s)",
              "id_action": null,
              "done": false,
              "information": null,
              "children": [
                {
                  "id": "110",
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
          "id": "112",
          "value": "Non",
          "id_action": 352,
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
      "id": "113",
      "value": "Avez-vous mis en place des actions pour rationaliser le nombre d'équipements IT ?",
      "ids_secteurs": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 29],
      "id_action": null,
      "information": "Une gestion responsable des ressources informatiques consiste à optimiser l'utilisation des équipements, à réduire le gaspillage et à adopter des pratiques de recyclage ou de reconditionnement.",
      "children": [
        {
          "id": "114",
          "value": "Oui",
          "id_action": 366,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "115",
              "value": "Quelles sont ces actions ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "116",
                  "value": "Réduction du nombre d'écran par utilisateur",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "117",
                      "value": "Quel est le nombre d'écran (hors téléphone) par utilisateur d'écran (pc fixe et portable) ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [211]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "119",
                  "value": "Réduction du nombre de téléphone professionnel",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "120",
                      "value": "Quel est le pourcentage de collaborateurs équipés d'un smartphone professionnel ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [212]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "122",
                  "value": "Réduction du nombre d'équipements IT achetés",
                  "id_action": null,
                  "done": false,
                  "information": "Cette action consiste à limiter l'acquisition d'équipements informatiques afin de réduire l'empreinte environnementale liée à leur production, leur transport et leur mise au rebut. Il s'agit d'optimiser l'usage du parc informatique existant en attribuant les ressources là où elles sont vraiment nécessaires.",
                  "children": [
                    {
                      "id": "123",
                      "value": "Quel est le nombre total d'équipements informatiques achetés par votre entreprise au cours des 12 derniers mois (incluant ordinateurs, imprimantes, serveurs et autres équipements) ?",
                      "id_action": null,
                      "information": "Cette question vise à comprendre le volume d'équipements informatiques que votre entreprise achète chaque année. En prenant en compte une large gamme d'équipements, comme les ordinateurs (de bureau, portables, serveurs), imprimantes, moniteurs, claviers, périphériques de stockage, routeurs, équipements audiovisuels (comme les projecteurs et systèmes de visioconférence), ainsi que les tablettes et smartphones utilisés pour les activités professionnelles, l'objectif est de suivre l'évolution des achats d'équipements dans le temps.\n\nLe suivi annuel du nombre d'équipements achetés permet d'évaluer si des actions visant à réduire les achats ou à prolonger la durée de vie des équipements ont été mises en place, contribuant ainsi à une gestion plus responsable des ressources.",
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [213]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "125",
                  "value": "Mise à jour/réparation des équipements informatiques plutôt que leur remplacement",
                  "id_action": null,
                  "done": false,
                  "information": "Plutôt que de remplacer systématiquement les équipements, cette action vise à prolonger leur durée de vie en procédant à des mises à jour logicielles ou matérielles (comme le remplacement de la mémoire vive ou des disques durs), ce qui permet de réduire les déchets électroniques et de diminuer la consommation de ressources pour la fabrication de nouveaux appareils.",
                  "children": [
                    {
                      "id": "126",
                      "value": "Quel pourcentage de vos équipements informatiques défaillants ou obsolètes a été mis à jour ou réparés (plutôt que remplacé) au cours des 12 derniers mois ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [214]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "128",
                  "value": "Réaffection des équipements en interne lorsque cela est possible",
                  "id_action": null,
                  "done": false,
                  "information": "Redistribuer les équipements informatiques inutilisés ou obsolètes à d'autres départements ou collaborateurs qui en ont besoin. Cela permet de maximiser l'utilisation des équipements avant de décider de les remplacer ou de les recycler, réduisant ainsi le gaspillage de ressources.",
                  "children": [
                    {
                      "id": "129",
                      "value": "Quel pourcentage de vos équipements informatiques obsolètes ou inutilisés a été réaffecté en interne au cours des 12 derniers mois ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [215]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "131",
                  "value": "Séparation et échelonnement des achats d'équipements informatiques pour une gestion plus responsable",
                  "id_action": null,
                  "done": false,
                  "information": "Au lieu de réaliser des achats en masse, cette action consiste à acheter les équipements de manière plus réfléchie, en fonction des besoins spécifiques de chaque collaborateur ou service. Cela permet d'éviter les excédents de matériel et de mieux gérer les stocks tout en limitant l'impact environnemental.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "132",
                  "value": "Location fonctionnelle d'équipements",
                  "id_action": null,
                  "done": false,
                  "information": "L'option de location fonctionnelle permet à une entreprise de louer des équipements informatiques pour une période donnée au lieu de les acheter. Cela favorise une utilisation optimisée et la réutilisation des équipements, tout en réduisant les coûts et l'impact environnemental liés à la fabrication et au recyclage des équipements.",
                  "children": [
                    {
                      "id": "133",
                      "value": "Quelle est la part des équipements informatiques loués par rapport au total des équipements informatiques utilisés dans votre entreprise ?",
                      "id_action": null,
                      "information": "% d'équipements informatiques loués par rapport au total des équipements informatiques utilisés dans votre entreprise (loués + achetés)",
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [216]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "135",
                  "value": "Mise en place de mesures de protection, d'entretien et de soin des équipements",
                  "id_action": null,
                  "done": false,
                  "information": "Sensibiliser les employés à l'entretien des équipements informatiques, en leur fournissant des instructions pour une utilisation adéquate, comme la protection contre les surtensions, la bonne ventilation et le nettoyage régulier. Cela permet de prolonger la durée de vie des appareils et de limiter les pannes ou la casse.",
                  "children": [
                    {
                      "id": "136",
                      "value": "Veuillez préciser les mesures en place :",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "text",
                      "id_kpis": [217]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "138",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "139",
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
          "id": "141",
          "value": "Non",
          "id_action": 366,
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
      "id": "142",
      "value": "Avez-vous mis en place des actions visant à favoriser le réemploi de vos matériels informatiques ?",
      "ids_secteurs": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 29],
      "id_action": null,
      "information": null,
      "children": [
        {
          "id": "143",
          "value": "Oui",
          "id_action": 373,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "144",
              "value": "Quelles actions avez-vous mises en place ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "145",
                  "value": "Dons de vos anciens équipements informatiques fonctionnels",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "146",
                      "value": "Quel est le pourcentage d'équipements informatiques donnés par rapport au total des équipements informatiques sortants ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [218]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "148",
                  "value": "Ventes de vos anciens équipements informatiques fonctionnels",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "149",
                      "value": "Quel est le pourcentage d'équipements informatiques vendus par rapport au total des équipements informatiques sortants ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [219]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "151",
                  "value": "Mise en place d'un programme de reprise des anciens équipements informatiques",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "152",
                      "value": "Quel est le pourcentage d'équipements récupérés dans le cadre du programme de reprise par rapport au total des équipements informatiques sortants ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [220]
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
          "id": "153",
          "value": "Non",
          "id_action": 373,
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
      "id": "154",
      "value": "Avez-vous mis en place des critères spécifiques pour rendre vos achats d'équipements informatiques plus durables et responsables ?",
      "ids_secteurs": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 29],
      "id_action": null,
      "information": "Les achats durables et responsables consistent à sélectionner des équipements informatiques qui ont un impact environnemental réduit tout au long de leur cycle de vie, depuis leur production jusqu'à leur élimination. Cela peut inclure l'achat d'équipements certifiés écoénergétiques, la préférence pour des produits fabriqués avec des matériaux recyclés, l'adoption de critères éthiques dans le choix des fournisseurs ou encore la mise en place de politiques de recyclage ou de reprise des anciens équipements.",
      "children": [
        {
          "id": "155",
          "value": "Oui",
          "id_action": 374,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "156",
              "value": "Privilégiez-vous l'achat d'équipements IT écoresponsables ?",
              "id_action": null,
              "information": "Cela peut inclure l'acquisition d'équipements issus du réemploi, contenant des matériaux recyclés, écolabellisés, réparables ou à faible impact environnemental. En intégrant ces critères dans vos décisions d'achat, vous contribuez à la réduction des déchets électroniques et à la préservation des ressources naturelles.",
              "children": [
                {
                  "id": "157",
                  "value": "Oui",
                  "id_action": 376,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "158",
                      "value": "Quel est le pourcentage du montant total des achats IT attribué aux équipements écoresponsables au cours des 12 derniers mois ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [221]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "160",
                  "value": "Non",
                  "id_action": 376,
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
              "id": "161",
              "value": "Favorisez-vous les fournisseurs engagés dans des pratiques RSE ?",
              "id_action": null,
              "information": "Privilégier des fournisseurs engagés dans des pratiques RSE signifie non seulement soutenir des entreprises qui partagent vos valeurs, mais aussi effectuer des vérifications régulières pour s'assurer qu'ils respectent des normes sociales (comme les droits des travailleurs) et environnementales (comme la gestion des déchets ou l'empreinte carbone). Cette approche contribue à promouvoir un commerce responsable et durable, tout en réduisant les risques associés à votre chaîne d'approvisionnement.",
              "children": [
                {
                  "id": "162",
                  "value": "Oui",
                  "id_action": 375,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "163",
                      "value": "Quelle est la part de fournisseurs, chez lesquels des achats ont été effectués au cours des 12 derniers mois, qui ont mis en place des pratiques RSE ?",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [222]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "165",
                  "value": "Non",
                  "id_action": 375,
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
              "id": "166",
              "value": "Autre(s)",
              "id_action": null,
              "done": false,
              "information": null,
              "children": [
                {
                  "id": "167",
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
          "id": "169",
          "value": "Non",
          "id_action": 374,
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