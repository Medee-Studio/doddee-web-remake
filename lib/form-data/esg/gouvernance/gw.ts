import { QuestionTree } from "@/types/esg-form";

export const gw: QuestionTree = [
    {
      "id": "1",
      "value": "Avez-vous mis en place des actions pour assurer la conformité de votre entreprise avec le RGPD ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 22, 23, 24, 25, 26, 28, 29],
      "id_action": null,
      "information": "Cette question évalue si votre entreprise a mis en place des actions spécifiques pour se conformer au Règlement Général sur la Protection des Données (RGPD). Le RGPD impose des obligations strictes concernant la collecte, le traitement et la protection des données personnelles des utilisateurs. En intégrant des mesures de conformité, votre entreprise démontre son engagement envers la protection des données et le respect des droits des individus.\n\n👉 Exemple : Une entreprise peut établir une politique de confidentialité claire et accessible, informer ses clients des mesures prises pour protéger leurs données personnelles et désigner un Délégué à la Protection des Données (DPO) pour superviser la conformité.",
      "children": [
        {
          "id": "2",
          "value": "Oui",
          "id_action": 434,
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
                  "value": "Politique de confidentialité claire et accessible aux utilisateurs",
                  "id_action": null,
                  "done": false,
                  "information": "Une politique de confidentialité bien rédigée et facilement accessible informe les utilisateurs sur la manière dont leurs données personnelles sont collectées, utilisées et protégées. Elle doit détailler les types de données collectées, les finalités de leur traitement, ainsi que les droits des utilisateurs concernant leurs informations. Une communication transparente renforce la confiance des clients et assure qu'ils sont pleinement conscients de leurs droits en matière de protection des données.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "5",
                  "value": "Processus de consentement explicite pour l'utilisation des données personnelles",
                  "id_action": null,
                  "done": false,
                  "information": "Le processus de consentement explicite est essentiel pour garantir que les utilisateurs donnent leur accord éclairé avant que leurs données personnelles ne soient collectées ou traitées. Ce processus doit être clair, sans ambiguïté, et permettre aux utilisateurs de choisir librement s'ils souhaitent consentir à l'utilisation de leurs données. En fournissant des options claires et un accès facile à la gestion de leurs préférences de consentement, les entreprises respectent les exigences du RGPD.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "6",
                  "value": "Formation régulière du personnel sur la protection des données",
                  "id_action": null,
                  "done": false,
                  "information": "La formation régulière du personnel sur la protection des données est cruciale pour sensibiliser les employés aux obligations légales et aux meilleures pratiques en matière de gestion des informations sensibles. Ces formations doivent inclure des informations sur les principes du RGPD, les techniques de sécurité des données, ainsi que les procédures à suivre en cas de violation de données. En formant les employés, l'entreprise réduit le risque d'erreurs humaines et assure une culture de protection des données au sein de l'organisation.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "7",
                  "value": "Mécanismes de sécurité des données conformes aux normes de confidentialité",
                  "id_action": null,
                  "done": false,
                  "information": "La mise en place de mécanismes de sécurité robustes est fondamentale pour protéger les données personnelles contre les accès non autorisés, les pertes ou les violations. Ces mesures peuvent inclure des solutions techniques comme le cryptage des données, des pare-feu, et des systèmes d'authentification multi-facteurs. En garantissant que ces mesures sont conformes aux normes de confidentialité, l'entreprise démontre son engagement à protéger les informations des utilisateurs et à respecter les exigences réglementaires.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "8",
                  "value": "Gestion simplifiée des demandes d'accès et de suppression des données personnelles",
                  "id_action": null,
                  "done": false,
                  "information": "Une gestion efficace des demandes d'accès et de suppression des données personnelles permet aux utilisateurs d'exercer leurs droits de manière rapide et transparente. Cela inclut des procédures claires pour que les utilisateurs puissent demander l'accès à leurs données, les corriger, ou les supprimer. En simplifiant ces processus, l'entreprise assure une conformité avec le RGPD et renforce la confiance des utilisateurs dans sa capacité à gérer leurs informations.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "9",
                  "value": "Collaboration avec un DPO chargé de superviser la conformité à la protection des données",
                  "id_action": null,
                  "done": false,
                  "information": "La désignation d'un Délégué à la Protection des Données (DPO) est une exigence pour de nombreuses entreprises sous le RGPD. Le DPO est responsable de veiller à ce que l'entreprise respecte les lois sur la protection des données, de conseiller sur les meilleures pratiques et d'être le point de contact pour les utilisateurs concernant leurs droits. Une collaboration efficace avec le DPO assure une approche proactive et structurée pour gérer la conformité.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "10",
                  "value": "Tenue d'un registre des données et suivi des demandes de droit à l'oubli / anonymisation",
                  "id_action": null,
                  "done": false,
                  "information": "Tenir un registre des données est essentiel pour avoir une vue d'ensemble des types de données collectées, de leurs finalités, et des traitements effectués. Ce registre doit également inclure le suivi des demandes de droit à l'oubli, permettant aux utilisateurs de demander la suppression de leurs données. En documentant ces processus, l'entreprise peut démontrer sa conformité au RGPD et garantir que les droits des utilisateurs sont respectés.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "11",
                  "value": "Durée de conservation des données conforme à la réglementation",
                  "id_action": null,
                  "done": false,
                  "information": "La durée de conservation des données personnelles doit être définie clairement et respecter les exigences légales. Les données ne doivent être conservées que le temps nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées. En appliquant des politiques de conservation rigoureuses, l'entreprise protège la vie privée des utilisateurs et minimise les risques de violations de données.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "12",
                  "value": "Politiques de suppression et d'archivage des données après expiration des délais légaux",
                  "id_action": null,
                  "done": false,
                  "information": "Les politiques de suppression et d'archivage des données sont essentielles pour garantir que les données personnelles sont éliminées de manière sécurisée une fois qu'elles ne sont plus nécessaires ou après l'expiration des délais légaux. Cela inclut des procédures pour assurer une destruction appropriée des données et un archivage sécurisé lorsque la conservation est requise. En mettant en œuvre ces politiques, l'entreprise protège les informations sensibles et respecte ses obligations réglementaires.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "13",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
                  "information": null,
                  "children": [
                    {
                      "id": "14",
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
          "id": "16",
          "value": "Non",
          "id_action": 434,
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
      "value": "Avez-vous pris des mesures en matière de cybersécurité ?",
      "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 22, 23, 24, 25, 26, 28, 29],
      "id_action": null,
      "information": "Cette question évalue les actions mises en place par votre entreprise pour protéger ses systèmes d'information contre les menaces numériques. La cybersécurité est essentielle pour prévenir les violations de données, garantir la confidentialité des informations sensibles et assurer la continuité des opérations. En mettant en œuvre des mesures de cybersécurité, votre entreprise démontre son engagement à protéger ses actifs numériques et à respecter les obligations légales en matière de sécurité des données.\n\n👉 Exemple : Une entreprise peut installer des systèmes de sécurité, tels que des antivirus et des pare-feu, tout en formant ses employés aux meilleures pratiques en matière de cybersécurité pour réduire les risques.",
      "children": [
        {
          "id": "18",
          "value": "Oui",
          "id_action": 435,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "19",
              "value": "Quelles sont ces mesures ?",
              "id_action": null,
              "information": null,
              "children": [
                {
                  "id": "20",
                  "value": "Installation d'un antivirus et d'un pare-feu de base pour sécuriser les systèmes",
                  "id_action": null,
                  "done": false,
                  "information": "L'installation d'un antivirus et d'un pare-feu constitue une première ligne de défense essentielle pour protéger les systèmes contre les malwares et les intrusions. Ces outils surveillent et filtrent le trafic entrant et sortant, contribuant ainsi à prévenir les attaques avant qu'elles n'affectent les données ou les systèmes.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "21",
                  "value": "Utilisation de mots de passe robustes et changement régulier",
                  "id_action": null,
                  "done": false,
                  "information": "L'utilisation de mots de passe robustes, combinée à des changements réguliers, renforce la sécurité des comptes utilisateurs. Des mots de passe complexes réduisent les risques d'accès non autorisés, tandis qu'un renouvellement fréquent limite la durée pendant laquelle un mot de passe compromis peut être utilisé.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "22",
                  "value": "Sauvegardes régulières des données critiques sur des supports sécurisés (cloud ou disques durs externes)",
                  "id_action": null,
                  "done": false,
                  "information": "Effectuer des sauvegardes régulières des données critiques sur des supports sécurisés, tels que le cloud ou des disques durs externes, est crucial pour la récupération en cas de perte de données. Cela garantit que les informations importantes peuvent être restaurées rapidement après un incident, comme une attaque par ransomware ou une défaillance système.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "23",
                  "value": "Authentification à deux facteurs (2FA) pour les accès aux comptes sensibles",
                  "id_action": null,
                  "done": false,
                  "information": "L'authentification à deux facteurs (2FA) ajoute une couche de sécurité supplémentaire en exigeant non seulement un mot de passe, mais aussi un second élément d'identification, comme un code envoyé par SMS. Cela réduit considérablement le risque d'accès non autorisé, même si le mot de passe est compromis.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "24",
                  "value": "Mises à jour automatiques des logiciels pour assurer la sécurité",
                  "id_action": null,
                  "done": false,
                  "information": "Les mises à jour automatiques des logiciels permettent de corriger rapidement les vulnérabilités de sécurité et d'améliorer les fonctionnalités. En s'assurant que tous les systèmes et applications sont à jour, votre entreprise peut se protéger contre les menaces récentes et les failles de sécurité.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "25",
                  "value": "Sensibilisation des salariés à la cybersécurité (formations courtes ou ateliers)",
                  "id_action": null,
                  "done": false,
                  "information": "La sensibilisation des salariés à la cybersécurité par le biais de formations courtes ou d'ateliers est essentielle pour créer une culture de sécurité au sein de l'entreprise. Cela permet aux employés de reconnaître les menaces potentielles, de comprendre les politiques de sécurité et de suivre les meilleures pratiques pour protéger les informations sensibles.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "26",
                  "value": "Procédure simple de signalement en cas de violation de données",
                  "id_action": null,
                  "done": false,
                  "information": "Établir une procédure simple pour signaler les violations de données permet une réaction rapide en cas d'incident. Cela garantit que les employés savent comment réagir et à qui s'adresser, ce qui peut minimiser les dommages et faciliter la conformité aux réglementations en matière de protection des données.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "27",
                  "value": "Cryptage des données sensibles",
                  "id_action": null,
                  "done": false,
                  "information": "Le cryptage des données sensibles est une mesure essentielle pour protéger les informations confidentielles contre l'accès non autorisé. En chiffrant les données, même en cas de violation, les informations restent illisibles pour quiconque ne possède pas la clé de déchiffrement, renforçant ainsi la sécurité globale.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "28",
                  "value": "Sécurisation renforcée des serveurs et des bases de données",
                  "id_action": null,
                  "done": false,
                  "information": "La sécurisation renforcée des serveurs et des bases de données inclut des mesures comme des configurations de sécurité, des contrôles d'accès rigoureux et des audits réguliers. Cela protège les systèmes critiques contre les attaques et garantit l'intégrité des données stockées.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "29",
                  "value": "Accès restreint aux données sensibles selon les besoins (principe du moindre privilège)",
                  "id_action": null,
                  "done": false,
                  "information": "Le principe du moindre privilège stipule que les utilisateurs ne doivent avoir accès qu'aux données et systèmes nécessaires à leurs fonctions. En limitant l'accès, votre entreprise réduit le risque de fuites de données et d'abus, tout en améliorant la sécurité globale.",
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "30",
                  "value": "Autre(s)",
                  "id_action": null,
                  "done": false,
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
                }
              ],
              "type": "question",
              "inputType": "multiple"
            }
          ],
          "type": "reponse"
        },
        {
          "id": "33",
          "value": "Non",
          "id_action": 435,
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
      "value": "Avez-vous mis en place une stratégie concernant le numérique responsable ?",
      "ids_secteurs": [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      "id_action": null,
      "information": "Le numérique responsable englobe l'ensemble des pratiques visant à réduire l'impact environnemental et social des technologies numériques, tout en maximisant leur efficacité et leur utilité. Une stratégie de numérique responsable peut inclure des actions pour réduire la consommation d'énergie des systèmes informatiques, adopter des pratiques de gestion durable des équipements, assurer l'accessibilité et l'inclusivité des outils numériques, et promouvoir l'éthique dans l'utilisation des données et des technologies.",
      "children": [
        {
          "id": "35",
          "value": "Oui",
          "id_action": 442,
          "done": true,
          "information": null,
          "children": [
            {
              "id": "36",
              "value": "Avez-vous coordonné et formalisé un plan d'action numérique responsable ?",
              "id_action": null,
              "information": "Cela consiste à organiser et structurer les actions visant à rendre l'usage du numérique plus respectueux de l'environnement et de l'éthique au sein de l'entreprise. Cette démarche implique la mise en place d'une approche collaborative pour identifier les enjeux, définir des priorités et établir des actions concrètes à mener dans le temps pour intégrer une dimension responsable dans toutes les activités numériques.",
              "children": [
                {
                  "id": "37",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "38",
                      "value": "La démarche numérique responsable a t-elle été formalisée dans une charte ou un manifeste ?",
                      "id_action": null,
                      "information": "Cette action consiste à officialiser l'engagement de l'entreprise en matière de numérique responsable en rédigeant une charte ou un manifeste. Ce document formalise les principes, valeurs et engagements de l'entreprise en faveur d'un numérique plus respectueux de l'environnement et de la société et sert de guide pour l'ensemble des parties prenantes.",
                      "children": [
                        {
                          "id": "39",
                          "value": "Oui",
                          "id_action": null,
                          "done": true,
                          "information": null,
                          "children": [
                            {
                              "id": "40",
                              "value": "Quelle est la part d'employés ayant signé la charte numérique responsable ?",
                              "id_action": null,
                              "information": null,
                              "children": [],
                              "type": "question",
                              "inputType": "numeric",
                              "id_kpis": [346]
                            }
                          ],
                          "type": "reponse"
                        },
                        {
                          "id": "42",
                          "value": "Non",
                          "id_action": 436,
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
                      "id": "43",
                      "value": "Avez-vous mis en place des indicateurs pour suivre le pilotage de votre démarche numérique responsable ?",
                      "id_action": null,
                      "information": "Il s'agit de définir et d'implémenter des indicateurs clés de performance (KPI) pour mesurer l'impact des actions entreprises dans le cadre de la démarche numérique responsable. Ces indicateurs permettent de suivre les progrès réalisés, d'évaluer l'efficacité des actions et d'ajuster les stratégies si nécessaire.",
                      "children": [
                        {
                          "id": "44",
                          "value": "Oui",
                          "id_action": null,
                          "done": true,
                          "information": null,
                          "children": [],
                          "type": "reponse"
                        },
                        {
                          "id": "45",
                          "value": "Non",
                          "id_action": 437,
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
                  "id": "46",
                  "value": "Non",
                  "id_action": 438,
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
              "id": "47",
              "value": "Avez-vous mis en place un ambassadeur ou un réseau de référents pour piloter la démarche numérique responsable et l'inscrire dans la durée ?",
              "id_action": null,
              "information": "Cette action consiste à désigner des personnes au sein de l'entreprise pour devenir des référents ou des ambassadeurs de la démarche numérique responsable. Ces référents sont chargés de promouvoir les bonnes pratiques, de sensibiliser les collaborateurs et de s'assurer que la démarche reste active et pérenne dans le temps.",
              "children": [
                {
                  "id": "48",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "49",
                  "value": "Non",
                  "id_action": 439,
                  "done": false,
                  "information": null,
                  "children": [],
                  "type": "reponse"
                },
                {
                  "id": "50",
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
              "id": "51",
              "value": "Avez-vous alloué un budget spécifique à votre démarche numérique responsable ?",
              "id_action": null,
              "information": "L'entreprise alloue un budget dédié à la mise en œuvre de sa stratégie numérique responsable. Ce budget peut servir à financer des actions spécifiques, telles que l'acquisition de matériel plus durable, la formation des collaborateurs ou encore l'implémentation de logiciels visant à réduire l'empreinte écologique des activités numériques.",
              "children": [
                {
                  "id": "52",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "53",
                      "value": "Veuillez indiquer le budget que l'entreprise a alloué au numérique responsable (en % du CA) au cours des 12 derniers mois :",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                      "inputType": "numeric",
                      "id_kpis": [347]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "55",
                  "value": "Non",
                  "id_action": 440,
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
              "id": "56",
              "value": "Évaluez-vous les besoins et la pertinence d'une nouvelle technologie avant de la déployer dans votre entreprise ?",
              "id_action": null,
              "information": "Cette action consiste d'abord à analyser si une nouvelle technologie répond à un besoin réel au sein de l'entreprise. Cela inclut par exemple la consultation des parties prenantes, une analyse des besoins opérationnels, une étude des coûts et bénéfices, une évaluation de la consommation énergétique et du cycle de vie de la technologie, etc.)\nDes outils d'aide à la décision, tels que l'analyse SWOT (forces, faiblesses, opportunités, menaces) ou des évaluations du cycle de vie, peuvent être utilisés pour mesurer les coûts, les avantages ou l'empreinte écologique.\n\nCette évaluation permet de s'assurer que les technologies émergentes adoptées par l'entreprise répondent à un réel besoin et si elles sont en adéquation avec les objectifs de durabilité et de responsabilité sociale de l'entreprise.\n\nExemples de technologies : systèmes d'exploitation, logiciels de gestion, solutions cloud, équipements IoT, outils d'intelligence artificielle, applications de cybersécurité, et systèmes de gestion de parc informatique.",
              "children": [
                {
                  "id": "57",
                  "value": "Oui",
                  "id_action": null,
                  "done": true,
                  "information": null,
                  "children": [
                    {
                      "id": "58",
                      "value": "Veuillez préciser la part de technologies émergentes évaluées avant leur déploiement :",
                      "id_action": null,
                      "information": null,
                      "children": [],
                      "type": "question",
                    "inputType": "numeric",
                      "id_kpis": [348]
                    }
                  ],
                  "type": "reponse"
                },
                {
                  "id": "60",
                  "value": "Non",
                  "id_action": 441,
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
              "id": "61",
              "value": "Autre(s)",
              "id_action": null,
              "done": false,
              "information": null,
              "children": [
                {
                  "id": "62",
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
          "id": "64",
          "value": "Non",
          "id_action": 442,
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