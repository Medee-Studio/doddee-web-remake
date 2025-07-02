import { QuestionTree } from "@/types/esg-form";

export const etpe : QuestionTree = [
  {
    "id": "1",
    "value": "Votre entreprise a-t-elle mis en place des mesures en faveur de la mobilité durable ?",
    "ids_secteurs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
    "id_action": null,
    "information": null,
    "children": [
      {
        "id": "2",
        "value": "Oui",
        "id_action": 292,
        "done": true,
        "information": null,
        "children": [
          {
            "id": "3",
            "value": "L'entreprise favorise t-elle le télétravail quand cela est possible ?",
            "id_action": null,
            "information": "Cette question évalue si votre entreprise permet aux salariés de travailler à distance lorsque les tâches le permettent.\n\nPourquoi cette action est importante ?\n\n• La réduction des déplacements domicile-travail diminue les émissions de CO₂ et améliore la qualité de vie des employés.\n• Cela peut également réduire les coûts liés à l'espace de bureau.\n\n• Réglementation en France : Le télétravail est encadré par le Code du travail (articles L1222-9 à L1222-11).",
            "children": [
              {
                "id": "4",
                "value": "Oui",
                "id_action": 279,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "5",
                    "value": "Quel est le pourcentage d'employés éligibles au télétravail travaillant à distance au moins 2 jours par semaine ?",
                    "id_action": null,
                    "information": null,
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [154]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "7",
                "value": "Non",
                "id_action": 279,
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
            "value": "L'entreprise incite t-elle au covoiturage ou a t-elle mis en place des programmes de mobilité partagée ?",
            "id_action": null,
            "information": "Cette question évalue si l'entreprise encourage ses employés à partager leurs trajets via le covoiturage ou d'autres solutions de mobilité partagée.\n\nPourquoi cette action est importante ?\n\n• Réduction des émissions de CO₂, diminution du trafic et amélioration de la cohésion sociale.\n• Réduit les coûts de transport pour l'entreprise et les employés.\n\nRéglementation en France : Le Plan de mobilité en entreprise (PDE) est obligatoire pour les entreprises de plus de 100 employés sur un même site (loi LOM).",
            "children": [
              {
                "id": "9",
                "value": "Oui",
                "id_action": 280,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "10",
                    "value": "Quel est le pourcentage d'employés utilisant activement des solutions de mobilité durable, telles que le covoiturage, les navettes d'entreprise, les vélos partagés ou autres initiatives de mobilité partagée mises en place par l'entreprise ?",
                    "id_action": null,
                    "information": null,
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [155]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "12",
                "value": "Non",
                "id_action": 280,
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
            "value": "L'entreprise encourage t-elle ses salariés à utiliser la mobilité douce pour se rendre au travail (transports en commun, marche, vélo, covoiturage, etc.) ?",
            "id_action": null,
            "information": "Réduire l'utilisation de la voiture personnelle en encourageant vos employés à utiliser les transports en commun peut aider à diminuer la circulation aux heures de pointe et, par conséquent, à réduire la pollution. Pour répondre aux besoins de votre personnel, vous pouvez envisager plusieurs solutions :\n\n• Mettre en place un partenariat avec les compagnies de transport pour optimiser les emplacements et la fréquence des dessertes.\n• Financer une partie des abonnements de transport de vos employés.\n• Proposer des horaires de travail plus flexibles afin de faciliter l'utilisation des transports en commun et permettre à votre personnel d'éviter les heures de pointe.\n\nAvantages Sociaux : \n- Amélioration du bien-être des employés car ces subventions réduisent les coûts de déplacement ainsi que le stress lié aux trajets\n-Attraction et rétention des talents en particulier ceux qui valorisent les pratiques durables et augmenter la satisfaction et la fidélité des employés actuels, réduisant ainsi le turnover\n-Promotion de la diversité et de l'inclusion en rendant les déplacements plus abordables, l'entreprise peut attirer une main-d'œuvre plus diversifiée, incluant des employés de différents horizons socio-économiques\nAvantages Environnementaux :\n-Réduction de l'empreinte carbone\n-Contribution à la mobilité durable\nAvantages Economiques :\n-Réduction des coûts de stationnement et des infrastructure\n-Augmentation de la productivité en réduisant le stress lié aux déplacements\nAvantages légaux et conformité : \n-Certaines régions offrent des incitations fiscales ou des subventions pour les entreprises qui encouragent l'utilisation des transports en commun\n-Eviter les sanctions et bénéficier des avantages fiscaux",
            "children": [
              {
                "id": "14",
                "value": "Oui",
                "id_action": 281,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "15",
                    "value": "Quelle part de vos salariés utilise, au moins une fois par semaine, des moyens de mobilité douce pour se rendre au travail ?",
                    "id_action": null,
                    "information": null,
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [166]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "16",
                "value": "Non",
                "id_action": 281,
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
            "value": "L'entreprise dispose t-elle d'une flotte de véhicules électriques ou à faible émission (hybrides) ?",
            "id_action": null,
            "information": "Cette question vérifie si votre entreprise utilise des véhicules électriques ou hybrides pour ses déplacements professionnels.\n\nPourquoi cette action est importante ?\n\n• Réduction des émissions de CO₂ et des coûts de carburant.\n\nRéglementation en France : Depuis la loi d'orientation des mobilités (LOM) de 2019, les entreprises possédant plus de 100 véhicules doivent renouveler leur parc avec des voitures à faible émission de CO₂. En 2022, 10 % des véhicules doivent être à faible émission, ce chiffre passant à 20 % en 2024 et 35 % en 2027.",
            "children": [
              {
                "id": "18",
                "value": "Oui",
                "id_action": 282,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "19",
                    "value": "Quelle est la part de véhicules électriques (ou hybrides) dans la flotte de l'entreprise ?",
                    "id_action": null,
                    "information": null,
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [156]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "21",
                "value": "Non",
                "id_action": 282,
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
            "value": "L'entreprise a-t-elle mis en place des infrastructures pour le stationnement des vélos ?",
            "id_action": null,
            "information": "Cette question évalue si votre entreprise met à disposition des infrastructures pour le stationnement sécurisé des vélos.\n\nPourquoi cette action est importante ?\n\n• Encourage l'usage du vélo pour les trajets domicile-travail, réduisant les émissions de CO₂.\n• Améliore la santé des employés.\n\nRéglementation en France : Le décret n° 2022-930 impose la mise en place d'infrastructures de stationnement sécurisées pour les vélos dans certains bâtiments, notamment les entreprises avec plus de 100 salariés lors de la construction ou la rénovation de bâtiments.",
            "children": [
              {
                "id": "23",
                "value": "Oui",
                "id_action": 283,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "24",
                    "value": "Quel est le pourcentage de salariés cyclistes bénéficiant d'une place de stationnement pour vélos ?",
                    "id_action": null,
                    "information": null,
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [157]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "26",
                "value": "Non",
                "id_action": 283,
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
            "id": "27",
            "value": "L'entreprise a-t-elle formé ses salariés à l'écoconduite au cours des 3 dernières années ?",
            "id_action": null,
            "information": "Cette question évalue si votre entreprise a proposé des formations à l'écoconduite à ses salariés pour les sensibiliser à des pratiques de conduite plus respectueuses de l'environnement.\n\nPourquoi cette action est importante ?\n\n• Réduit la consommation de carburant, les émissions de CO₂, et améliore la sécurité routière.",
            "children": [
              {
                "id": "28",
                "value": "Oui",
                "id_action": 284,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "29",
                    "value": "Quelle est la part des salariés ayant suivi une formation à l'écoconduite au cours des trois dernières années ?",
                    "id_action": null,
                    "information": null,
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [158]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "30",
                "value": "Non",
                "id_action": 284,
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
            "value": "L'entreprise a-t-elle instauré une politique de voyage d'affaires \"verte\", incluant des mesures comme la réduction des trajets en avion, la compensation des émissions de carbone ou la promotion des réunions virtuelles ?",
            "id_action": null,
            "information": "Une politique de voyage d'affaires verte est une stratégie mise en place par une entreprise pour réduire l'empreinte carbone et l'impact environnemental de ses déplacements professionnels. \n\nCette politique fait partie intégrante des initiatives de responsabilité sociétale des entreprises (RSE) et vise à promouvoir la durabilité dans les pratiques de mobilité.\n\nVoici une explication détaillée des éléments qu'une telle politique pourrait inclure :\n\n1. Réduction des voyages en avion :\nPrioriser les alternatives au voyage en avion pour les trajets courts, comme le train ou les transports en commun. Les voyages en avion, particulièrement sur de courtes distances, ont une empreinte carbone beaucoup plus élevée comparée à d'autres modes de transport.\nLimiter les vols internes et encourager les voyages en train pour les distances où cela est faisable. Par exemple, en Europe, beaucoup d'entreprises privilégient le train pour des trajets inférieurs à 4 heures.\n\n2. Promotion des réunions virtuelles :\nUtiliser des technologies de communication virtuelle (comme les vidéoconférences, les appels vidéo, et les plateformes de collaboration en ligne) pour remplacer les voyages d'affaires lorsque cela est possible. Cette pratique permet non seulement de réduire les émissions de CO2 mais également de réaliser des économies financières.\nFormer et sensibiliser les employés à l'utilisation efficace de ces outils pour minimiser le besoin de déplacement.\n\n3. Contribution carbone :\nIntégrer des programmes de compensation carbone pour les émissions de gaz à effet de serre inévitables dues aux voyages d'affaires. Cela peut inclure l'achat de crédits carbone certifiés qui financent des projets écologiques comme la reforestation, l'énergie renouvelable, ou l'amélioration de l'efficacité énergétique.\nMesurer et suivre les émissions de carbone liées aux voyages d'affaires et compenser ces émissions par des actions concrètes.\n\n4. Promotion de moyens de transport durables :\nEncourager l'utilisation des transports en commun, du covoiturage, ou des véhicules électriques et hybrides pour les déplacements professionnels locaux ou intra-urbains. Des incitations, comme le remboursement des frais de transport en commun ou des subventions pour l'utilisation de voitures partagées à faible émission, peuvent être mises en place.\nMettre à disposition des flottes de vélos ou de véhicules électriques pour les déplacements de courte distance, particulièrement dans les grandes villes ou les campus d'entreprise.\n\n5. Politiques de voyage stratégique :\nMettre en place des directives claires sur quand un voyage d'affaires est justifié, avec des critères basés sur la nécessité du déplacement, la distance, et l'impact environnemental.\nRepenser la fréquence des voyages en adoptant une approche plus stratégique et en encourageant une culture d'approbation basée sur les besoins essentiels.",
            "children": [
              {
                "id": "32",
                "value": "Oui",
                "id_action": 285,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "33",
                    "value": "Quelle est la quantité totale de tonnes équivalent CO2 (tCO2eq) émise par les voyages d'affaires de l'entreprise sur une base annuelle ?",
                    "id_action": null,
                    "information": null,
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [159]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "35",
                "value": "Non",
                "id_action": 285,
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
            "id": "36",
            "value": "L'entreprise a-t-elle déjà réalisé un audit (interne ou externe) et/ou un suivi régulier des déplacements professionnels pour évaluer en vue de réduire leur impact environnemental ?",
            "id_action": null,
            "information": "Cette question vise à savoir si votre entreprise a mis en place des processus formels pour surveiller et analyser ses pratiques de déplacement professionnel.\n\nElle aborde plusieurs aspects importants :\n\n• Audit des déplacements : L'entreprise réalise-t-elle un audit périodique des déplacements professionnels pour évaluer les modes de transport utilisés, les distances parcourues, et les émissions de gaz à effet de serre associées ?\n\n• Suivi régulier : L'entreprise suit-elle de manière continue les déplacements afin de détecter des tendances, des comportements, et des opportunités pour passer à des options de transport plus durables ?\n\n• Impact environnemental : L'audit et le suivi permettent-ils de calculer les émissions de CO2 ou de suivre d'autres indicateurs de durabilité ?\n\n• Opportunités d'amélioration : Les résultats de l'audit et du suivi sont-ils utilisés pour mettre en œuvre des politiques visant à réduire l'empreinte carbone des déplacements professionnels, comme encourager l'utilisation de transports à faible émission de carbone ou la visioconférence ?\n\nPourquoi cette action est importante ?\n\n• Mesure et gestion de l'impact : Cela permet à l'entreprise de comprendre précisément l'impact de ses déplacements sur l'environnement et de gérer cet impact de manière proactive.\n• Amélioration continue : Aide à identifier des opportunités d'amélioration pour la mobilité durable, telles que la réduction des déplacements non essentiels ou l'optimisation des modes de transport.\n• Transparence et responsabilité : La mise en place d'un audit et d'un suivi démontre un engagement clair envers la transparence et la responsabilité environnementale.",
            "children": [
              {
                "id": "37",
                "value": "Oui",
                "id_action": 286,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "38",
                    "value": "Quel pourcentage de déplacements non essentiels a été réduit suite aux audits menés par l'entreprise pour optimiser la mobilité durable ?",
                    "id_action": null,
                    "information": "Ce KPI mesure la proportion de déplacements non essentiels (comme les réunions ou formations qui pourraient être tenues en visioconférence ou en ligne) qui ont été annulés ou remplacés par des alternatives virtuelles, suite aux recommandations des audits menés, par rapport au nombre total de déplacements professionnels initialement planifiés.\n\nFormule pour calculer ce KPI :\n\nPourcentage de déplacements non essentiels optimisés suite aux audits =(Nombre total de déplacements initialement planifiés = (Nombre de déplacements non essentiels annulés ou remplacés après audits / Nombre total de déplacements initialement planifiés)) x 100\n\nDéfinition des composants de la formule :\n\n1. Nombre de déplacements non essentiels annulés ou remplacés après audits:\n\n• Description : C'est le nombre total de déplacements professionnels que l'entreprise avait initialement planifiés mais qui ont été identifiés comme non essentiels lors des audits. Ces déplacements ont été soit annulés complètement, soit remplacés par des alternatives virtuelles telles que des visioconférences ou des formations en ligne.\n• Comment le calculer :\n1. Conduire un audit : Réaliser un audit des déplacements professionnels pour déterminer quels voyages sont jugés non essentiels et pourraient être évités ou remplacés.\n2. Mettre en œuvre des recommandations d'audit : Après l'audit, identifier combien de ces déplacements non essentiels ont effectivement été annulés ou convertis en alternatives virtuelles.\n3. Enregistrer les ajustements : Tenir un registre des déplacements annulés ou remplacés suite aux audits pour avoir un total précis.\n\n2. Nombre total de déplacements initialement planifiés :\n\n• Description : Le nombre total de déplacements professionnels que l'entreprise avait prévu de réaliser au cours de la période d'audit (par exemple, trimestriellement ou annuellement).\n• Comment le calculer:\n1. Recueillir les données des plans de voyage : Utiliser les systèmes de réservation de voyages ou les feuilles de route internes pour obtenir un compte total de tous les déplacements prévus.\n2. Inclure toutes les catégories de déplacements : Assurer que toutes les catégories de déplacements professionnels (réunions, formations, visites clients, etc.) sont incluses dans ce total.\n\nMultiplier par 100 :\nLa multiplication par 100 permet de convertir le ratio en pourcentage, ce qui est plus intuitif à comprendre et à communiquer.\n\nExemple de calcul :\nSupposons que, après un audit des déplacements professionnels sur une période donnée, une entreprise découvre que sur 200 déplacements initialement planifiés, 80 déplacements sont jugés non essentiels et pourraient être annulés ou remplacés par des visioconférences. Après l'audit, l'entreprise réussit à annuler ou remplacer 60 de ces déplacements.\n\n• Nombre de déplacements non essentiels annulés ou remplacés après audits = 60\n• Nombre total de déplacements initialement planifiés = 200\n\nLe calcul du KPI serait :\n\nPourcentage de déplacements non essentiels optimisés\n= (60 / 200) x 100\n= 30 %",
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [160]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "39",
                "value": "Non",
                "id_action": 286,
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
            "value": "L'entreprise a-t-elle mis en place des plans de mobilité flexibles, tels que des horaires de travail flexibles ou décalés, pour réduire les pics de circulation et favoriser une mobilité plus durable ?",
            "id_action": null,
            "information": "Cette question vise à évaluer si l'entreprise a adopté des stratégies de mobilité flexible, comme des horaires de travail décalés ou flexibles, pour éviter les heures de pointe. L'objectif est de réduire la congestion routière, de diminuer l'empreinte carbone des trajets domicile-travail, et d'améliorer la qualité de vie des employés tout en soutenant des pratiques de mobilité durable.",
            "children": [
              {
                "id": "41",
                "value": "Oui",
                "id_action": 287,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "42",
                    "value": "Quel est le pourcentage d'employés utilisant des horaires de travail flexibles ou décalés ?",
                    "id_action": null,
                    "information": "Ce KPI mesure la proportion d'employés qui adoptent des horaires de travail flexibles pour éviter les heures de pointe et réduire la congestion routière par rapport au nombre total d'employés de l'entreprise.\n\nComment mesurer ce KPI :\n\n1. Collecter les données sur les horaires de travail : Utiliser les systèmes de gestion du personnel pour suivre les employés qui utilisent des horaires flexibles (heures d'arrivée et de départ hors des pics de circulation).\n\n2. Analyser les tendances : Examiner les données pour identifier les tendances d'adoption des horaires flexibles et évaluer leur impact sur la réduction des pics de circulation.\n\n3. Communiquer les résultats et ajuster les stratégies : Partager les résultats avec les employés pour les sensibiliser à l'impact positif de ces mesures et ajuster les stratégies si nécessaire pour atteindre l'objectif.\n\nFormule pour calculer ce KPI :\n\n(Nombre d'employés utilisant des horaires flexibles / Nombre total d'employés) x 100",
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [161]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "44",
                "value": "Non",
                "id_action": 287,
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
            "value": "L'entreprise a-t-elle mis en place une politique de contribution carbone pour neutraliser les émissions de gaz à effet de serre incompressibles générées par les déplacements professionnels ?",
            "id_action": null,
            "information": "Cette question vise à déterminer si l'entreprise a mis en place une politique de contribution carbone pour compenser les émissions de gaz à effet de serre jugées incompressibles, c'est-à-dire celles qui ne peuvent pas être évitées malgré des efforts de réduction. Ces émissions proviennent principalement des déplacements professionnels, qui sont souvent inévitables pour le fonctionnement de l'entreprise.\n\nLa question cherche à évaluer si l'entreprise adopte des pratiques de durabilité, telles que l'achat de crédits carbone ou le soutien à des initiatives environnementales (comme la reforestation, les projets d'énergies renouvelables, ou l'amélioration de l'efficacité énergétique), afin de neutraliser l'empreinte carbone résultant de ses déplacements professionnels.",
            "children": [
              {
                "id": "46",
                "value": "Oui",
                "id_action": 288,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "47",
                    "value": "Quel est le pourcentage des émissions de CO2 incompressibles compensées après réduction des déplacements professionnels ?",
                    "id_action": null,
                    "information": "Ce KPI mesure la proportion des émissions de CO2 générées par les déplacements professionnels de l'entreprise qui sont compensées après avoir mis en œuvre toutes les mesures possibles pour réduire ces émissions (par exemple, réduction du nombre de voyages, utilisation de modes de transport à faible émission de carbone, ou adoption de la visioconférence). Ce KPI permet d'évaluer l'efficacité de l'approche de l'entreprise pour atteindre la neutralité carbone dans ses activités de mobilité.\n\nComment mesurer ce KPI :\n\n1. Calculer les émissions de CO2 avant réduction :\n\n• Utiliser des outils de calcul d'émissions basés sur les données de voyage (distances parcourues, modes de transport utilisés) pour obtenir le total des émissions de CO2 générées par les déplacements professionnels avant la mise en place des mesures de réduction.\n\n2. Déterminer les émissions de CO2 après réduction :\n\n• Appliquer des mesures de réduction (telles que la diminution du nombre de voyages, la substitution de réunions physiques par des visioconférences, l'encouragement à utiliser des transports durables).\n• Calculer les émissions de CO2 restantes après la mise en œuvre de ces mesures de réduction.\n\n3. Calculer les émissions de CO2 compensées :\n\n• Identifier les émissions de CO2 qui sont incompressibles après les réductions et comptabiliser les actions de compensation effectuées (achat de crédits carbone, soutien à des projets environnementaux).\n• Enregistrer le nombre total de tonnes de CO2 compensées.\n\n4. Calculer le KPI régulièrement :\n\n• Calculer le pourcentage des émissions de CO2 incompressibles compensées à intervalles réguliers (par exemple, trimestriellement ou annuellement) pour suivre les progrès vers l'objectif de neutralité carbone.\n\n5. Communiquer les résultats et ajuster les stratégies :\n\n• Partager les résultats avec les parties prenantes internes et externes pour démontrer l'engagement envers la durabilité.\n• Ajuster les stratégies de réduction et de compensation en fonction des résultats obtenus pour améliorer continuellement l'efficacité.\n\nFormule pour calculer ce KPI :\n(Total des émissions de CO2 compensées après réduction / Total des émissions de CO2 restantes après réduction) x 100\n\nEn utilisant cette formule, votre entreprise peut facilement mesurer le pourcentage d'émissions de CO2 compensées après avoir optimisé les déplacements professionnels. Ce KPI permettra à votre entreprise de suivre ses efforts pour minimiser son impact environnemental et s'engager vers la neutralité carbone.",
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [162]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "49",
                "value": "Non",
                "id_action": 288,
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
            "value": "L'entreprise a-t-elle analysé les moyens de mobilité utilisés par ses salariés et mis en place des solutions adaptées pour répondre à leurs besoins spécifiques en matière de transport ?",
            "id_action": null,
            "information": "L'analyse des moyens de mobilité des salariés est une évaluation des différents modes de transport utilisés par les employés pour se rendre au travail et se déplacer dans le cadre de leurs missions professionnelles. Cette analyse prend en compte plusieurs aspects, tels que les types de véhicules utilisés (voitures, transports en commun, vélos, etc.), les distances parcourues, les émissions de gaz à effet de serre associées, les coûts de transport, et les alternatives possibles pour une mobilité plus durable.\n\nCette question évalue si l'entreprise a pris des mesures pour comprendre les besoins de mobilité de ses employés (par exemple, leurs habitudes de transport, les distances parcourues, les défis rencontrés) et si elle a mis en place des solutions de mobilité (comme des subventions pour les transports en commun, le covoiturage, des navettes d'entreprise, des stations de recharge pour vélos électriques) qui sont adaptées à ces besoins identifiés.",
            "children": [
              {
                "id": "51",
                "value": "Oui",
                "id_action": 289,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "52",
                    "value": "Quel est le taux de satisfaction des salariés concernant les solutions de mobilité mises en place par l'entreprise pour répondre à leurs besoins en matière de transport ?",
                    "id_action": null,
                    "information": "Ce KPI mesure le pourcentage de salariés qui se déclarent satisfaits des solutions de mobilité proposées par l'entreprise, telles que les subventions pour les transports en commun, les navettes d'entreprise, le covoiturage, ou les installations pour vélos. Ce KPI permet de suivre l'efficacité des initiatives de mobilité durable et de vérifier si elles répondent bien aux besoins et attentes des employés.\n\nComment mesurer ce KPI :\n\n• Réaliser une enquête de satisfaction des salariés : Utiliser des enquêtes internes ou des sondages via votre logiciel Doddee pour recueillir des commentaires et des évaluations de la part des employés concernant les solutions de mobilité offertes.\n\n• Analyser les résultats de l'enquête : Calculer le pourcentage de salariés satisfaits ou non satisfaits par rapport au nombre total de répondants.\n\n• Communiquer les résultats et ajuster les stratégies : Partager les résultats avec les parties prenantes internes et ajuster les stratégies de mobilité en fonction des commentaires et des niveaux de satisfaction.\n\nFormule pour calculer ce KPI :\n(Nombre de salariés satisfaits des solutions de mobilité / Nombre total de salariés répondants) * 100",
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [163]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "54",
                "value": "Non",
                "id_action": 289,
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
            "value": "L'entreprise a-t-elle formalisé une hiérarchie des modes de transport à utiliser en fonction de la distance à parcourir pour les déplacements professionnels (par exemple, privilégier le train pour les trajets courts et moyens, l'avion pour les trajets longs) ?",
            "id_action": null,
            "information": "Cette question évalue si l'entreprise a établi des lignes directrices claires ou une politique interne qui hiérarchise les modes de transport en fonction de la distance des déplacements professionnels. L'objectif est de réduire l'empreinte carbone des voyages d'affaires en choisissant les moyens de transport les plus durables et appropriés selon la distance parcourue (par exemple, utiliser le train plutôt que l'avion pour des trajets inférieurs à 500 km).",
            "children": [
              {
                "id": "56",
                "value": "Oui",
                "id_action": 290,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "57",
                    "value": "Quel est le pourcentage de déplacements professionnels respectant la hiérarchie des modes de transport ?",
                    "id_action": null,
                    "information": "Ce KPI mesure la proportion de déplacements professionnels qui respectent la hiérarchie des modes de transport définie par l'entreprise (par exemple, train pour les trajets de courte et moyenne distance, avion uniquement pour les trajets longs) par rapport au nombre total de déplacements effectués. Cela permet d'évaluer la conformité des pratiques de voyage aux politiques internes de mobilité durable.\n\nComment mesurer ce KPI ? \n\n1. Collecter les données de déplacement : Utiliser les systèmes de réservation de voyages pour obtenir des informations détaillées sur chaque déplacement (modes de transport, distances parcourues).\n\n2. Analyser la conformité des déplacements : Comparer les données collectées avec la hiérarchie des modes de transport définie par l'entreprise pour identifier les déplacements conformes et non conformes.\n\n3. Calculer le KPI régulièrement : Mettre à jour le calcul à intervalles réguliers (par exemple, trimestriellement ou annuellement) pour suivre la conformité et ajuster les politiques si nécessaire.\n\nFormule pour calculer ce KPI :\n\nPourcentage de déplacements respectant la hiérarchie des modes de transport = (Nombre de déplacements conformes à la hiérarchie / Nombre total de déplacements professionnels) * 100",
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [164]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "59",
                "value": "Non",
                "id_action": 290,
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
            "value": "L'entreprise a-t-elle mis en place un remboursement total ou partiel des frais liés aux mobilités douces (par exemple, transport collectif, location de vélos, etc.)",
            "id_action": null,
            "information": "Cette question évalue si votre entreprise soutient les mobilités douces en remboursant les frais de transport collectif ou la location de vélos, trottinettes, etc.\n\nPourquoi cette action est importante ?\n\n• Réduction de l'empreinte carbone liée aux déplacements quotidiens ;\n• Bien-être des employés ;\n• Conformité légale : En France, toutes les entreprises de plus de 11 salariés doivent rembourser 50 % des abonnements de transport en commun.",
            "children": [
              {
                "id": "65",
                "value": "Oui",
                "id_action": 291,
                "done": true,
                "information": null,
                "children": [
                  {
                    "id": "66",
                    "value": "Quelle est la part des dépenses liées aux mobilités douces (comme le transport collectif, la location de vélos, etc.) qui sont remboursées par l'entreprise, exprimée en pourcentage par rapport aux frais totaux engagés par les employés pour ces modes de transport ?",
                    "id_action": null,
                    "information": null,
                    "children": [],
                    "type": "question",
                    "inputType": "numeric",
                    "id_kpis": [165]
                  }
                ],
                "type": "reponse"
              },
              {
                "id": "68",
                "value": "Non",
                "id_action": 291,
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
        "value": "Non",
        "id_action": 292,
        "done": false,
        "information": null,
        "children": [],
        "type": "reponse"
      }
    ],
    "type": "question",
    "inputType": "single"
  },

  ]