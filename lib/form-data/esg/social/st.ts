import { QuestionTree } from "@/types/esg-form";

export const st: QuestionTree = [
  {
    id: "1",
    value:
      "Votre entreprise partage-t-elle, annuellement, des informations publiques sur ses performances sociales ou environnementales ?",
    ids_secteurs: [1, 2, 3, 4, 5, 6, 8, 9, 13, 16, 18, 19, 26, 27, 28, 29],
    id_action: null,
    information:
      'Cette question vous demande si votre entreprise publie régulièrement des informations sur ses performances sociales et environnementales, comme des rapports ou des indicateurs. Cela peut inclure des données sur les émissions de CO2, la gestion des déchets, ou encore les conditions de travail.\nRépondre "oui" signifie que votre entreprise partage déjà ces données, tandis qu\'un "non" indique qu\'elle pourrait améliorer sa transparence dans ce domaine.',
    children: [
      {
        id: "2",
        value: "Oui",
        id_action: 327,
        done: true,
        information: null,
        children: [
          {
            id: "3",
            value:
              "De quelle(s) façon(s) votre entreprise partage-t-elle ces informations ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "4",
                value: "Publication d'un rapport RSE",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "5",
                value:
                  "Communication à travers un rapport annuel d'entreprise incluant des sections dédiées aux performances sociales, environnementales, de gouvernance.",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "6",
                value:
                  "Publication de données sur le site web de l'entreprise ou dans des documents accessibles au public.",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "7",
                value:
                  "Participation à des événements ou forums dédiés à la responsabilité sociale et environnementale.",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "8",
                value:
                  "Collaboration avec des partenaires externes pour des initiatives de transparence et de communication.",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "9",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "10",
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
        id: "12",
        value: "Non",
        id_action: 327,
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
    id: "13",
    value:
      "Avez-vous mis en place des mesures pour assurer la santé et la sécurité de vos intervenants externes (ex : stagiaire, intérimaire, etc.) lorsqu'ils interagissent avec votre entreprise ?",
    ids_secteurs: [7, 9, 10, 11, 12, 14, 15, 17, 21, 22, 23, 24],
    id_action: null,
    information:
      "Cette question vous demande si votre entreprise a mis en place des mesures spécifiques pour assurer la santé et la sécurité des intervenants externes (comme les stagiaires, intérimaires, ou sous-traitants) lorsqu'ils travaillent avec vous. Cela inclut des procédures, des formations ou des équipements de protection visant à prévenir les risques professionnels.",
    children: [
      {
        id: "14",
        value: "Oui",
        id_action: 328,
        done: true,
        information: null,
        children: [
          {
            id: "15",
            value: "Quelle(s) mesure(s) avez-vous mise(s) en place ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "16",
                value:
                  "Partage de documentation sur les protocoles de sécurité",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "17",
                value: "Affiches et politiques de sécurité visibles",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "18",
                value: "Formations sur la sécurité dispensées",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "19",
                value:
                  "Fourniture d'équipements de protection individuelle (EPI)",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "20",
                value:
                  "Contrats ou accords confirmant que les intervenants externes sont informés aux normes de travail et qu'ils acceptent de s'y conformer",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "21",
                value:
                  "Réunions d'orientation et de sensibilisation à la sécurité",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "22",
                value: "Accès à des formations en ligne sur la sécurité",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "23",
                value: "Mise à disposition de guides ou de manuels de sécurité",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "24",
                value:
                  "Évaluation régulière des risques sur le lieu de travail",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "25",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "26",
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
        id: "28",
        value: "Non",
        id_action: 328,
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
    id: "29",
    value:
      "Le dirigeant de l'entreprise a t-il mis en place des mesures pour assurer sa santé et sa sécurité au travail ?",
    ids_secteurs: [1, 2, 3, 4, 5, 6, 8, 9, 13, 16, 18, 19, 26, 27, 28, 29],
    id_action: null,
    information:
      "Cela peut inclure des actions comme la gestion du stress, des pauses régulières, l'ergonomie de votre poste de travail ou des formations spécifiques sur les risques professionnels.",
    children: [
      {
        id: "30",
        value: "Oui",
        id_action: 329,
        done: true,
        information: null,
        children: [
          {
            id: "31",
            value: "Quelle(s) mesure(s) avez-vous mise(s) en place ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "32",
                value: "Participation à des programmes de santé/bien-être",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "33",
                value: "Mises en place de pauses actives quotidiennes",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "34",
                value: "Formation continue annuelle",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "35",
                value: "Télétravail quand cela est possible",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "36",
                value: "MOOCS, webinaires",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "37",
                value:
                  "Gestion de l'équilibre vie pro/perso (fermetures Annuels, congés annuels, pas de travail le weekend, etc.)",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "38",
                value: 'Assurance "Homme clé"',
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "39",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "40",
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
        id: "42",
        value: "Non",
        id_action: 329,
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
    id: "44",
    value:
      "Votre entreprise a-t-elle mis en place des actions pour prévenir la délocalisation ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 8, 9, 13, 15, 16, 17, 19, 20, 21, 23, 25, 28, 29,
    ],
    id_action: null,
    information: null,
    children: [
      {
        id: "45",
        value: "Oui",
        id_action: 330,
        done: true,
        information:
          "Cette question cherche à savoir si votre entreprise a mis en place des actions pour prévenir la délocalisation, c'est-à-dire le transfert d'activités vers un autre pays, souvent pour des raisons de réduction des coûts.\nCes actions peuvent inclure des initiatives pour renforcer la compétitivité locale, améliorer les conditions de travail ou soutenir l'économie régionale.",
        children: [
          {
            id: "46",
            value: "Quelle(s) action(s) a-t-elle développée(s) ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "47",
                value:
                  "Renforcement des relations avec les fournisseurs locaux",
                id_action: null,
                done: false,
                information:
                  "En renforçant les relations avec les fournisseurs locaux, l'entreprise favorise les circuits courts et renforce l'économie locale, réduisant ainsi la dépendance aux fournisseurs étrangers et limitant les risques de délocalisation. Cela s'inscrit dans une stratégie de soutien aux acteurs régionaux et peut avoir un impact positif sur la résilience économique de la région.\n\nExemples :\n\n• Fournitures régulières : Collaborer avec des fournisseurs locaux pour obtenir des matières premières ou des services de manière récurrente, assurant ainsi une chaîne d'approvisionnement locale stable.\n\n• Soutien à l'économie locale : Établir des contrats durables avec des entreprises locales pour renforcer l'activité régionale et minimiser les risques de délocalisation à cause des fluctuations des marchés internationaux.",
                children: [],
                type: "reponse",
              },
              {
                id: "48",
                value:
                  "Création de partenariats commerciaux stratégiques avec des acteurs régionaux (université, laboratoire de recherche, partenaires commerciaux, associations, etc.)",
                id_action: null,
                done: false,
                information:
                  "Les partenariats stratégiques régionaux sont essentiels pour créer des synergies locales qui soutiennent la croissance et la stabilité des entreprises dans une région spécifique. Cela permet également de créer des écosystèmes locaux qui réduisent la dépendance aux marchés internationaux et par conséquent, les risques de délocalisation.\nCette action se concentre sur la collaboration avec des partenaires spécifiques (universités, laboratoires de recherche, associations) dans le cadre de projets ou d'activités communes. Il s'agit souvent de partenariats de nature commerciale ou technologique qui favorisent l'innovation, la R&D ou le développement de produits et services.\n\nCe choix est un levier fort pour renforcer les ancrages territoriaux et limiter les tentations de délocaliser certaines opérations.\n\nCette action se porte sur des accords pour co-développer une technologie avec un laboratoire local ou une université afin de mutualiser les compétences et d'accélérer l'innovation au sein d'un réseau régional.\n\nExemples :\n\n• Accords avec des entreprises locales : Collaborer avec d'autres entreprises locales pour créer des synergies dans la gestion des ressources ou le développement de produits.\n\n• Initiatives avec des institutions locales : Travailler avec des chambres de commerce, des universités ou des centres d'innovation locaux pour développer des projets communs ou des programmes de R&D partagés.",
                children: [
                  {
                    id: "49",
                    value:
                      "Quel est le nombre de collaborations avec des institutions de recherche ou des universités pour des projets d'innovation locale ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [199],
                  },
                ],
                type: "reponse",
              },
              {
                id: "51",
                value: "Investissement dans des infrastructures locales",
                id_action: null,
                done: false,
                information:
                  "L'investissement dans les infrastructures locales démontre un engagement à long terme dans la région. Cet engagement peut inclure des investissements dans des installations de production, des espaces de travail ou des bureaux qui encouragent l'ancrage local. Cela permet de soutenir l'économie locale tout en créant des opportunités d'emploi.\n\nExemple : \n\nLes TPE/PME peuvent s'associer pour partager des espaces ou des équipements, comme des entrepôts ou des machines, via des initiatives locales comme des centres d'affaires partagés, des fab labs ou des espaces de coworking, ce qui leur permet de bénéficier d'infrastructures à moindre coût tout en soutenant l'économie locale.",
                children: [
                  {
                    id: "52",
                    value:
                      "Quel est le montant investi dans des infrastructures locale (en % de votre CA) ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [200],
                  },
                ],
                type: "reponse",
              },
              {
                id: "54",
                value:
                  "Participation à des initiatives de développement économique local",
                id_action: null,
                done: false,
                information:
                  "En participant à des initiatives locales, l'entreprise montre son engagement envers la croissance économique régionale, ce qui renforce sa position locale tout en minimisant les pressions pour délocaliser. Avec cette action, l'entreprise joue un  rôle actif dans la structuration économique de son territoire.\nCette action se concentre sur la contribution au développement économique général d'une région. Cela peut inclure des initiatives communautaires ou des programmes de développement durable qui bénéficient non seulement à l'entreprise mais à l'ensemble de l'écosystème local.\nPar exemple, participer à un projet de création d'une zone industrielle locale pour attirer d'autres entreprises ou à un programme de soutien aux start-ups locales.\n\nExemples :\n\n• Implication dans des projets locaux : Soutenir des projets régionaux de développement économique, comme des zones industrielles ou des projets écologiques, afin de stimuler l'activité économique locale.\n\n• Adhésion à des programmes locaux : Participer à des programmes régionaux pour promouvoir le développement durable, l'innovation ou l'entrepreneuriat local, renforçant ainsi l'ancrage de l'entreprise dans la région.",
                children: [
                  {
                    id: "55",
                    value:
                      "Quel est le nombre de partenariats ou initiatives locales soutenues par l'entreprise au cours des 12 derniers mois ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [201],
                  },
                ],
                type: "reponse",
              },
              {
                id: "57",
                value:
                  "Promotion de la qualité, du savoir faire, de l'expertise locale",
                id_action: null,
                done: false,
                information:
                  "La promotion du savoir-faire et de l'expertise locale est un moyen efficace de différencier l'offre de l'entreprise tout en valorisant ses racines régionales. Cela permet de justifier des coûts potentiellement plus élevés par rapport aux marchés internationaux et de promouvoir une image de marque authentique et locale.\nCette action est idéale pour les entreprises dont la qualité de production ou le savoir-faire local fait partie intégrante de la proposition de valeur, par exemple dans l'artisanat, l'agroalimentaire, le textile ou le luxe.\n\nExemples :\n• Mise en avant du savoir-faire local : Promouvoir la qualité et l'expertise de la main-d'œuvre et des produits locaux dans les communications et sur les marchés nationaux et internationaux pour renforcer la demande locale.\n\n• Certifications locales : Mettre en avant des certifications ou labels locaux pour valoriser les produits ou services issus de la région et augmenter leur compétitivité face à des alternatives internationales.",
                children: [
                  {
                    id: "58",
                    value:
                      "Combien de fois l'entreprise a-t-elle promu la qualité, le savoir-faire ou l'expertise locales au cours des 12 derniers mois ?",
                    id_action: null,
                    information:
                      "Le nombre de mentions de la qualité ou du savoir-faire local peut être mesuré à travers plusieurs canaux et actions :\n\n• Mentions sur le site internet : Mesure combien de fois le savoir-faire ou la qualité locale est mis en avant dans des pages produits, sections spécifiques du site, ou des articles de blog. Cela pourrait être compté à chaque ajout ou mise à jour de contenu soulignant ce savoir-faire.\n\n• Publications sur les réseaux sociaux : Suivre combien de posts ou de stories sur des plateformes comme Instagram, LinkedIn, ou Twitter mettent en avant la dimension locale. Ici, chaque post ou légende promouvant l'expertise locale représente une mention.\n\n• Campagnes marketing : Mesurer combien de fois cette thématique est intégrée dans des emailings, newsletters, ou campagnes publicitaires. Chaque campagne qui utilise ce thème compte comme une mention.\n\n• Événements ou partenariats locaux : Participations à des événements régionaux, salons ou collaborations avec des acteurs locaux qui mettent en avant le savoir-faire de l'entreprise. Chaque participation ou événement représente une mention.\n\n• Presse ou influenceurs : Suivre le nombre d'articles dans lesquels des journalistes, blogueurs ou influenceurs mentionnent explicitement l'ancrage local ou le savoir-faire de l'entreprise.",
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [202],
                  },
                ],
                type: "reponse",
              },
              {
                id: "60",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "61",
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
        id: "63",
        value: "Non",
        id_action: 330,
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
      "L'entreprise a-t-elle mis en place des actions pour promouvoir l'art et la culture ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 8, 9, 13, 15, 16, 17, 19, 20, 21, 23, 25, 28, 29,
    ],
    id_action: null,
    information: null,
    children: [
      {
        id: "65",
        value: "Oui",
        id_action: 331,
        done: true,
        information:
          "Cette question vous demande si votre entreprise a mis en place des actions visant à protéger le patrimoine culturel, que ce soit à travers la préservation des traditions locales, le soutien à des initiatives culturelles ou la valorisation du patrimoine dans vos activités.",
        children: [
          {
            id: "66",
            value: "Quelles sont ces actions ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "67",
                value:
                  "Soutien financier à des programmes culturels ou artistiques ou mécénat culturel et artistique",
                id_action: null,
                done: false,
                information:
                  "Cette action consiste à offrir un soutien financier direct à des initiatives locales ou régionales, comme des expositions, des festivals ou des projets artistiques. Le mécénat culturel peut renforcer la visibilité de l'entreprise en tant qu'acteur engagé dans la préservation et la promotion du patrimoine culturel local, tout en aidant à la préservation d'initiatives culturelles importantes.\n\nExemples :\n\n• Financer des expositions ou des festivals artistiques locaux.\n• Offrir des bourses à des jeunes artistes ou soutenir des résidences artistiques.",
                children: [
                  {
                    id: "68",
                    value:
                      "Quel est le montant investi par l'entreprise pour soutenir des programmes culturels ou artistiques (en % de votre CA) ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [203],
                  },
                ],
                type: "reponse",
              },
              {
                id: "70",
                value:
                  "Partenariats avec des institutions culturelles ou artistiques locales",
                id_action: null,
                done: false,
                information:
                  "Les partenariats avec des institutions culturelles ou artistiques locales permettent à l'entreprise de collaborer étroitement avec des musées, écoles d'arts, théâtres ou centres culturels pour soutenir des projets liés à la culture et au patrimoine. Ces partenariats peuvent renforcer la présence locale de l'entreprise tout en facilitant l'accès à la culture pour les communautés locales.\n\nExemples :\n\n• Collaborer avec un musée pour organiser une exposition mettant en valeur l'histoire locale.\n• S'associer avec un théâtre local pour soutenir des représentations de pièces de théâtre.",
                children: [
                  {
                    id: "71",
                    value:
                      "Quel est le nombre de partenariats formalisés avec des institutions culturelles ou artistiques sur une période de 1 an ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [204],
                  },
                ],
                type: "reponse",
              },
              {
                id: "73",
                value:
                  "Organisation ou participation à des ateliers ou événements culturels",
                id_action: null,
                done: false,
                information:
                  "En organisant ou en participant à des événements culturels, l'entreprise joue un rôle actif dans la promotion et la diffusion du patrimoine culturel. Ces initiatives peuvent inclure des ateliers, des conférences, ou des journées portes ouvertes dédiées à la découverte de la culture locale.\n\nExemples :\n\n• Organiser des ateliers sur l'artisanat local ou des techniques traditionnelles.\n• Participer à des événements locaux célébrant la culture et les traditions de la région.",
                children: [
                  {
                    id: "74",
                    value:
                      "Quel est le nombre d'ateliers ou d'événements organisés ou auxquels l'entreprise a participé ces 12 derniers mois ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [205],
                  },
                ],
                type: "reponse",
              },
              {
                id: "76",
                value:
                  "Collaboration avec des écoles ou associations pour promouvoir l'éducation artistique et culturelle",
                id_action: null,
                done: false,
                information:
                  "Cette action consiste à collaborer avec des établissements scolaires ou des associations locales pour offrir aux jeunes des opportunités d'apprendre et de découvrir la culture et les arts. En renforçant l'éducation artistique, l'entreprise contribue au développement des talents locaux tout en sensibilisant les jeunes à l'importance du patrimoine culturel.\n\nExemples :\n\n• Créer des programmes éducatifs en partenariat avec des écoles pour promouvoir les arts visuels, la musique ou le théâtre.\n• Travailler avec des associations pour organiser des sorties scolaires dans des musées ou des événements culturels locaux.",
                children: [
                  {
                    id: "77",
                    value:
                      "Combien d'élèves ou de participants ont bénéficié des programmes éducatifs ou artistiques co-développés par l'entreprise ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [206],
                  },
                ],
                type: "reponse",
              },
              {
                id: "79",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "80",
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
        id: "82",
        value: "Non",
        id_action: 331,
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
    id: "83",
    value: "Avez-vous des fournisseurs ?",
    ids_secteurs: [7, 9, 10, 11, 12, 14, 15, 17, 21, 22, 23, 24],
    id_action: null,
    information: null,
    children: [
      {
        id: "84",
        value: "Oui",
        id_action: 332,
        done: true,
        information: null,
        children: [
          {
            id: "85",
            value:
              "L'entreprise réalise-t-elle des processus réguliers de contrôle qualité ou d'évaluation de ses fournisseurs ?",
            id_action: null,
            information:
              "Cette question vise à comprendre si votre entreprise met en place des contrôles réguliers pour garantir la qualité de ses fournisseurs.\nUn contrôle qualité peut prendre différentes formes : il ne s'agit pas nécessairement d'audits formels, mais cela peut inclure des revues de performance, des visites sur site ou des évaluations des fournisseurs en fonction de critères prédéfinis.\nCes contrôles permettent aux entreprises de s'assurer que leurs fournisseurs respectent les normes de qualité requises, sans forcément déployer des ressources importantes pour des audits complets.\n\nPar exemple, des audits plus fréquents pourraient être effectués pour des fournisseurs critiques, tandis que des évaluations moins fréquentes pourraient suffire pour des fournisseurs à moindre risque.\nCela permet de garantir la qualité tout en optimisant les ressources.",
            children: [
              {
                id: "86",
                value: "Oui",
                id_action: 332,
                done: true,
                information: null,
                children: [
                  {
                    id: "87",
                    value:
                      "Quel pourcentage de vos fournisseur est soumis à des examens/audits qualité ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "88",
                        value: "Moins de 25%",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "89",
                        value: "Entre 25% et 50%",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "90",
                        value: "Entre 50% et 75%",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "91",
                        value: "Plus de 75%",
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
                    id: "92",
                    value: "À quelle fréquence ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "93",
                        value:
                          "Lors de l'incorporation d'un nouveau fournisseur",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "94",
                        value: "Annuellement",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "95",
                        value: "Tous les 1 à 2 ans",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "96",
                        value: "Tous les 2 à 3 ans",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [],
                        type: "reponse",
                      },
                      {
                        id: "97",
                        value: "Rarement (supérieure à 3 ans)",
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
                ],
                type: "reponse",
              },
              {
                id: "98",
                value: "Non",
                id_action: 332,
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
        id: "99",
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
    id: "100",
    value:
      "Votre entreprise at-elle une politique qui vise à soutenir son territoire ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 8, 9, 13, 15, 16, 17, 19, 20, 21, 23, 25, 28, 29,
    ],
    id_action: null,
    information: null,
    children: [
      {
        id: "101",
        value: "Oui",
        id_action: 333,
        done: true,
        information:
          "Pour une entreprise, soutenir son territoire signifie contribuer positivement au développement économique, social et environnemental de la région ou de la communauté dans laquelle elle opère.\nCela peut inclure plusieurs dimensions, telles que : favoriser l'économie locale en travaillant avec des acteurs régionaux, s'engager socialement par des actions locales, participer à la préservation de l'environnement local, soutenir des initiatives culturelles, sociales ou économiques ayant un impact positif pour la communauté.",
        children: [
          {
            id: "102",
            value:
              "De quelle façon votre entreprise soutient-elle son territoire et les communautés ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "103",
                value:
                  "Organisation ou participation à des événements communautaires ou régionaux, sponsoring",
                id_action: null,
                done: false,
                information:
                  "Participer à des événements régionaux, soutenir des initiatives locales ou mettre en place du sponsoring permet de renforcer les liens avec la communauté. Ces actions peuvent inclure des festivals, des événements sportifs, le soutien à des actions sportives, éducatives ou environnementales par exemple ou encore des conférences locales.\nCela permet également à l'entreprise d'accroître sa visibilité et son engagement sur son territoire.\n\nExemple : Sponsorer une équipe sportive locale, collecter des vêtements pour une association, participer à une foire régionale ou soutenir des événements communautaires.",
                children: [
                  {
                    id: "104",
                    value:
                      "Quel est le nombre d'événements locaux ou régionaux auxquels l'entreprise a participé ou qu'elle a sponsorisés dans l'année ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [216],
                  },
                ],
                type: "reponse",
              },
              {
                id: "106",
                value:
                  "Participation à des initiatives écologiques/sociales locales",
                id_action: null,
                done: false,
                information:
                  "Contribuer à des projets locaux pour la protection de l'environnement ou l'amélioration du bien-être social. Il peut s'agir de soutenir des campagnes de nettoyage, de participer à des projets de réduction des déchets ou de collaborer avec des associations locales pour des causes sociales.\n\nExemple : Organiser ou participer à une journée de nettoyage d'un parc local, soutenir des projets de compostage communautaire ou collaborer avec des associations locales pour l'inclusion sociale.",
                children: [
                  {
                    id: "107",
                    value:
                      "Quel est le nombre de projets écologiques ou sociaux locaux soutenus par l'entreprise au cours des 12 derniers mois (par exemple, journées de nettoyage, programmes de compostage) ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [217],
                  },
                ],
                type: "reponse",
              },
              {
                id: "109",
                value: "Dons financiers versés à des ONG nationales",
                id_action: null,
                done: false,
                information:
                  "Cette action consiste à allouer une partie du chiffre d'affaires de l'entreprise à des organisations non gouvernementales (ONG) qui œuvrent pour des causes d'intérêt général, telles que la protection de l'environnement, l'éducation, la santé ou l'inclusion sociale par exemple. Contribuer à des ONG nationales permet à l'entreprise d'amplifier son impact social à une échelle plus large tout en renforçant son engagement éthique. Le pourcentage du chiffre d'affaires alloué peut varier selon les objectifs et la capacité financière de l'entreprise.\n\nExemple :\n\n• Verser 0,5 % du chiffre d'affaires annuel à une ONG de protection de l'environnement.\n• Soutenir financièrement des associations nationales qui luttent contre l'exclusion sociale.",
                children: [
                  {
                    id: "110",
                    value:
                      "Quel est le montant de dons financiers versés à des ONG lors de la dernière année (en % du CA) ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [218],
                  },
                ],
                type: "reponse",
              },
              {
                id: "112",
                value:
                  "Heures de bénévolats, volontariats, mécénats de compétences",
                id_action: null,
                done: false,
                information:
                  "Encourager les employés à participer à des activités bénévoles ou à offrir leurs compétences au service de la communauté.\nLe mécénat de compétences consiste à mettre à disposition des compétences spécifiques de l'entreprise pour soutenir des projets sociaux ou écologiques.\n\nExemple : Offrir des conseils en gestion à une association locale, participer activement à la vie associative ou organiser des journées de bénévolat pour aider une banque alimentaire.",
                children: [
                  {
                    id: "113",
                    value:
                      "Quel est le nombre total d'heures de bénévolat, de volontariat ou de mécénat de compétences réalisées par les employés de l'entreprise sur leur temps de travail au cours des 12 derniers mois ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [219],
                  },
                ],
                type: "reponse",
              },
              {
                id: "115",
                value:
                  "Organisation d'interventions éducatives ou de sensibilisation",
                id_action: null,
                done: false,
                information:
                  "Organiser des ateliers ou des sessions de sensibilisation sur des sujets importants, tels que l'éducation à l'environnement ou l'inclusion sociale. Ces actions permettent de sensibiliser la population locale ou les employés à des enjeux sociétaux.\n\nExemple : Animer des ateliers sur l'économie circulaire dans les écoles locales ou organiser des sessions de sensibilisation au handicap dans le milieu professionnel.",
                children: [
                  {
                    id: "116",
                    value:
                      "Quel est le nombre d'interventions éducatives ou de sessions de sensibilisation organisées ou soutenues par l'entreprise dans l'année ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [220],
                  },
                ],
                type: "reponse",
              },
              {
                id: "118",
                value: "Support aux entreprises d'insertion/adaptées",
                id_action: null,
                done: false,
                information:
                  "Soutenir des entreprises locales qui offrent des opportunités aux personnes éloignées du marché du travail. Cela peut inclure le recours à des prestataires qui emploient des travailleurs en situation d'insertion ou à des entreprises adaptées.\n\nExemple : Acheter des services de nettoyage auprès d'une entreprise d'insertion ou faire appel à des prestataires locaux employant des personnes en situation de handicap ou en réinsertion.",
                children: [
                  {
                    id: "119",
                    value:
                      "Avec combien d'entreprises d'insertion ou d'entreprises adaptées l'entreprise a-t-elle travaillé au cours des 12 derniers mois ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [221],
                  },
                ],
                type: "reponse",
              },
              {
                id: "121",
                value:
                  "Interaction avec les acteurs économiques locaux (clubs, clusters, CCI, syndicats professionnels, associations d'entrepreneurs)",
                id_action: null,
                done: false,
                information:
                  "Collaborer avec des organisations économiques locales pour renforcer les réseaux d'affaires, échanger des bonnes pratiques et participer au développement économique régional. Cela peut inclure la participation à des clubs d'entrepreneurs ou des initiatives de clusters régionaux.\n\nExemple : Participer à des réunions de la CCI ou intégrer une association d'entrepreneurs.",
                children: [
                  {
                    id: "122",
                    value:
                      "Combien d'interactions (visites, interventions, participations, etc.) l'entreprise a-t-elle eu avec des acteurs économiques locaux au cours des 12 derniers mois ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [222],
                  },
                ],
                type: "reponse",
              },
              {
                id: "124",
                value: "Soutien aux start-ups ou entrepreneurs locaux",
                id_action: null,
                done: false,
                information:
                  "Soutenir l'innovation en collaborant avec de jeunes entreprises locales. Cela peut inclure un soutien financier ou des conseils pour aider les start-ups à croître et à se développer sur le territoire.\n\nExemple : Offrir du mentorat à des start-ups locales ou participer à des programmes de financement régional pour les jeunes entreprises.",
                children: [
                  {
                    id: "125",
                    value:
                      "Quel est le nombre de start-ups ou d'entrepreneurs locaux soutenus par l'entreprise (par du mentorat, du financement ou autre type de soutien) ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [223],
                  },
                ],
                type: "reponse",
              },
              {
                id: "127",
                value:
                  "Développement de produits ou services adaptés aux besoins locaux",
                id_action: null,
                done: false,
                information:
                  "Cette action consiste à concevoir des produits ou des services qui répondent spécifiquement aux besoins et attentes des communautés locales. En tant qu'initiative RSE, elle permet de renforcer l'ancrage territorial de l'entreprise en offrant des solutions sur mesure, tout en prenant en compte les spécificités culturelles, économiques et environnementales de la région. Pour les TPME, cette action est particulièrement pertinente car elle valorise l'écoute active des consommateurs locaux et soutient l'économie régionale.\n\nExemple :\n\n• Produits adaptés : Une boulangerie locale peut lancer une gamme de produits qui répond aux préférences régionales, comme des recettes traditionnelles ou l'intégration d'ingrédients issus de l'agriculture locale, favorisant ainsi les circuits courts et réduisant l'empreinte carbone.\n\n• Services sur mesure pour entreprises locales : Une entreprise de maintenance informatique pourrait proposer des services spécifiques aux petites entreprises locales, comme des forfaits de maintenance adaptés aux besoins des commerçants ou artisans, renforçant ainsi son soutien à l'économie régionale.",
                children: [
                  {
                    id: "128",
                    value:
                      "Quel est le nombre de produits ou services spécifiques développés pour répondre aux besoins de votre communauté locale ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [224],
                  },
                ],
                type: "reponse",
              },
              {
                id: "130",
                value:
                  "Organisation de collecte de dons (arrondi sur ticket de caisse, micro dons, etc.)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "131",
                    value:
                      "Quel montant avez-vous récolté lors de ces collectes de dons au cours des 12 derniers mois ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [225],
                  },
                ],
                type: "reponse",
              },
              {
                id: "133",
                value:
                  "Produits ou services à prix réduit destinés aux publics en difficulté ou aux associations",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "134",
                    value:
                      "Quel est le nombre total d'unités (produits/services) vendues à prix réduit au cours des 12 derniers mois ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [226],
                  },
                ],
                type: "reponse",
              },
              {
                id: "136",
                value:
                  "Dons en nature (meubles, matériel informatique, invendus, etc.)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "137",
                    value:
                      "Combien d'unités de biens ont été données au cours de la période spécifiée ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [227],
                  },
                ],
                type: "reponse",
              },
              {
                id: "139",
                value:
                  "Mise à disposition gratuite des infrastructures ou du matériel de l'organisation",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "140",
                    value:
                      " À combien d'organisations ou de groupes la mise à disposition a-t-elle profité ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [228],
                  },
                ],
                type: "reponse",
              },
              {
                id: "142",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "143",
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
        id: "145",
        value: "Non",
        id_action: 333,
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
    id: "146",
    value:
      "Votre organisation utilise t-elle des solutions techniques/technologiques visant à rationaliser et/ou améliorer les impacts sociaux de son activité ?",
    ids_secteurs: [1, 2, 3, 4, 5, 6, 8, 9, 13, 16, 18, 19, 26, 27, 28, 29],
    id_action: null,
    information:
      "Les solutions techniques et technologiques visant à rationaliser et améliorer les impacts sociaux d'une entreprise sont des outils et pratiques qui permettent à l'entreprise de mieux gérer et réduire ses externalités négatives tout en optimisant les effets positifs sur la société.\n\nVoici quelques exemples : automatisation des processus RH, plateformes de communication interne, etc.\n\nCes outils permettent à une entreprise d'identifier les axes d'amélioration en matière d'impact social, de suivre ses progrès et d'adopter des actions correctives pour mieux répondre aux enjeux sociaux et sociétaux.",
    children: [
      {
        id: "147",
        value: "Oui",
        id_action: 334,
        done: true,
        information: null,
        children: [
          {
            id: "148",
            value:
              "Quelles solutions techniques/technologiques l'entreprise utilise t-elle pour améliorer les impacts sociaux de son activité ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "149",
                value:
                  "Outils de sécurité connectés pour protéger les travailleurs",
                id_action: null,
                done: false,
                information:
                  "Les entreprises peuvent adopter des dispositifs connectés et des applications mobiles pour assurer la sécurité des travailleurs. Ces technologies permettent de suivre les conditions de travail en temps réel, de signaler les dangers potentiels et de réagir rapidement en cas d'incidents.\n\nExemple :\n\n• Des capteurs portables pour détecter des environnements dangereux (gaz, température élevée, etc.).\n• Applications pour signaler les incidents ou dangers directement depuis un smartphone.\n• Outils de surveillance en temps réel pour prévenir les risques dans les chantiers ou les zones à risque.",
                children: [],
                type: "reponse",
              },
              {
                id: "150",
                value:
                  "Plateformes de formation en ligne pour améliorer les compétences des employés",
                id_action: null,
                done: false,
                information:
                  "Les entreprises peuvent former leurs employés à moindre coût grâce à des solutions d'e-learning.\nCela permet de développer de nouvelles compétences ou d'améliorer les connaissances des équipes sans nécessiter de déplacements ou des formateurs sur site.\n\nExemple :\n\n• Utilisation de plateformes comme Coursera ou LinkedIn Learning pour offrir des modules de formation en ligne.\n• Formation sur des logiciels spécifiques ou sur des compétences techniques directement depuis des plateformes internes.",
                children: [],
                type: "reponse",
              },
              {
                id: "151",
                value: "Technologies de bien-être au travail",
                id_action: null,
                done: false,
                information:
                  "Pour soutenir le bien-être des employés, les entreprises peuvent mettre en place des technologies pour suivre la santé mentale et physique des travailleurs. Cela peut inclure des plateformes de feedback anonymes ou des programmes de gestion du stress.\n\nExemple :\n\n• Utilisation d'applications comme Officevibe pour mesurer le bien-être et recueillir des feedbacks anonymes.\n• Programmes de gestion du stress ou de suivi de la santé via des applications mobiles comme Mü.\n• Plateformes permettant des évaluations régulières du climat social de l'entreprise.",
                children: [],
                type: "reponse",
              },
              {
                id: "152",
                value:
                  "Outils technologiques pour favoriser l'inclusion sociale et la diversité",
                id_action: null,
                done: false,
                information:
                  "Les technologies d'inclusion sociale et de diversité permettent aux entreprises d'améliorer leurs processus de recrutement et de gestion des talents tout en favorisant un environnement de travail plus inclusif. Elles sont particulièrement utiles pour les entreprises qui cherchent à réduire les biais dans le recrutement et à intégrer des personnes de différentes origines sociales, ethniques ou en situation de handicap.\n\nExemple :\n\nUne entreprise peut utiliser une solution comme AssessFirst pour recruter de manière plus inclusive, en focalisant sur les compétences comportementales plutôt que les diplômes. Ou travailler avec JobinLive pour diversifier ses recrutements en intégrant des travailleurs en situation de handicap.",
                children: [],
                type: "reponse",
              },
              {
                id: "153",
                value:
                  "Logiciels de gestion de la qualité pour garantir la conformité aux normes",
                id_action: null,
                done: false,
                information:
                  "Les solutions de gestion de la qualité permettent de suivre la conformité aux normes et régulations dans des secteurs où les exigences sont élevées, comme l'agroalimentaire ou l'industrie.\n\nExemple :\n\n• Utilisation de logiciels pour suivre les certifications et audits.\n• Systèmes pour automatiser les processus de conformité et garantir que toutes les opérations respectent les normes réglementaires.\n• Centralisation des audits de qualité dans un seul logiciel pour en assurer le suivi.",
                children: [],
                type: "reponse",
              },
              {
                id: "154",
                value:
                  "Utilisation de plateformes numériques pour soutenir l'innovation sociale et économique locale",
                id_action: null,
                done: false,
                information:
                  "Les entreprises peuvent s'appuyer sur des technologies accessibles pour soutenir des initiatives locales ou régionales qui favorisent l'innovation sociale et économique. Ces outils permettent de créer des réseaux collaboratifs, de renforcer les partenariats locaux et de financer des projets ayant un impact positif sur la communauté.\n\nExemple :\n\n• Crowdfunding local : Utiliser des plateformes comme Ulule pour collecter des fonds destinés à des projets communautaires tels que la rénovation d'infrastructures locales ou l'organisation d'événements à vocation sociale.\n\n• Plateformes collaboratives : Participer à des projets d'entrepreneuriat social via des outils comme Slack ou Teams, facilitant la collaboration entre acteurs locaux (entreprises, associations) pour des initiatives régionales.\n\n• Soutien numérique à l'économie locale : Utiliser des plateformes comme LinkedIn pour tisser des partenariats avec des acteurs de l'économie sociale et promouvoir des actions conjointes au sein de la communauté locale.",
                children: [],
                type: "reponse",
              },
              {
                id: "155",
                value:
                  "Solutions d'accessibilité numérique pour améliorer l'accès aux produits et services",
                id_action: null,
                done: false,
                information:
                  "Les entreprises peuvent intégrer des outils d'accessibilité numérique pour garantir que leurs produits ou services sont utilisables par des personnes en situation de handicap. Cela peut inclure des ajustements de sites web ou d'applications pour les rendre accessibles à tous.\n\nExemple :\n\n• Ajouter des plugins comme UserWay pour améliorer l'accessibilité des sites web (contraste, lecture vocale, etc.).\n• Adapter des applications pour les rendre accessibles aux personnes malvoyantes ou malentendantes.\n• Développer des outils numériques compatibles avec les aides techniques (comme les lecteurs d'écran).",
                children: [],
                type: "reponse",
              },
              {
                id: "156",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "157",
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
        id: "159",
        value: "Non",
        id_action: 334,
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
    id: "160",
    value:
      "Votre entreprise utilise-t-elle des processus ou méthodologies établis pour garantir la qualité des produits/services qu'elle commercialise ?",
    ids_secteurs: [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
    id_action: null,
    information:
      "Une méthodologie pour gérer l'assurance qualité des produits et services d'une entreprise est un cadre structuré qui vise à garantir que les produits ou services répondent aux normes de qualité prédéfinies, satisfont aux attentes des clients et respectent les réglementations. Cette méthodologie repose sur plusieurs étapes et outils pour assurer une gestion rigoureuse de la qualité tout au long du cycle de vie des produits ou services (ex : Six sigma, ISO 9001...).",
    children: [
      {
        id: "161",
        value: "Oui",
        id_action: 336,
        done: true,
        information: null,
        children: [
          {
            id: "162",
            value: "Quelle méthodologie utilisez-vous ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "163",
                value: "Méthodologie certifiée (ex. ISO 9001, Six Sigma)",
                id_action: null,
                done: false,
                information:
                  "Utiliser une méthodologie certifiée signifie que l'entreprise s'appuie sur un cadre reconnu pour la gestion de la qualité, garantissant ainsi des processus standardisés et éprouvés. Par exemple, la certification ISO 9001 assure que les systèmes de management de la qualité respectent des normes internationales, tandis que Six Sigma vise à réduire les défauts et à optimiser l'efficacité.",
                children: [],
                type: "reponse",
              },
              {
                id: "164",
                value: "Normes spécifiques à l'industrie ou au secteur",
                id_action: null,
                done: false,
                information:
                  "Certaines industries ont des normes particulières qui régissent la qualité des produits et services. Respecter ces normes garantit que l'entreprise opère conformément aux exigences légales et aux attentes du marché.",
                children: [],
                type: "reponse",
              },
              {
                id: "165",
                value: "Audits externes par des organismes indépendants",
                id_action: null,
                done: false,
                information:
                  "Les audits externes permettent à une organisation de faire vérifier ses processus de gestion de la qualité par une tierce partie. Cela offre une validation objective et renforce la crédibilité de l'entreprise auprès des clients et partenaires.",
                children: [],
                type: "reponse",
              },
              {
                id: "166",
                value: "Collaboration avec des consultants en qualité",
                id_action: null,
                done: false,
                information:
                  "Faire appel à des consultants en qualité permet aux entreprises de bénéficier d'une expertise spécialisée dans la gestion et l'optimisation des processus qualité. Cela peut être particulièrement utile pour les entreprises qui n'ont pas de département qualité en interne.",
                children: [],
                type: "reponse",
              },
              {
                id: "167",
                value: "Utilisation de logiciels de gestion de la qualité",
                id_action: null,
                done: false,
                information:
                  "Les logiciels de gestion de la qualité permettent de centraliser les audits, la documentation et les processus qualité dans un système unique, facilitant ainsi le suivi et l'amélioration continue. Ils offrent des outils de contrôle, de gestion des non-conformités et d'amélioration des processus.",
                children: [],
                type: "reponse",
              },
              {
                id: "168",
                value: "Processus internes de contrôle qualité",
                id_action: null,
                done: false,
                information:
                  "Mettre en place des processus internes pour contrôler la qualité signifie que l'entreprise a développé ses propres méthodes et outils pour surveiller et améliorer la qualité de ses produits et services, sans faire appel à des méthodologies externes.\n\nExemple :\n\n• Suivi interne des performances de production pour identifier les défauts et corriger les processus.\n• Mise en place de points de contrôle à différentes étapes de la production pour garantir la qualité.",
                children: [],
                type: "reponse",
              },
              {
                id: "169",
                value:
                  "Recueill et analyse des avis clients concernant la qualité des produits/services",
                id_action: null,
                done: false,
                information:
                  "Le recueil et l'analyse des avis clients permettent de suivre la perception de la qualité par les utilisateurs finaux. Cela donne à l'entreprise un retour direct sur les améliorations à apporter et peut devenir un indicateur clé de performance (KPI) pour la gestion de la qualité.\n\nExemple :\n\n• Utilisation de sondages en ligne ou d'enquêtes de satisfaction après chaque vente pour recueillir des retours sur la qualité des produits.\n• Analyse des commentaires sur des plateformes comme Google Reviews ou Trustpilot pour identifier des tendances récurrentes de satisfaction ou d'insatisfaction.",
                children: [],
                type: "reponse",
              },
              {
                id: "170",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "171",
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
        id: "173",
        value: "Non",
        id_action: 336,
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
    id: "174",
    value:
      "Avez-vous pris des mesures pour garantir la qualité et la sécurité de vos produits/services ?",
    ids_secteurs: [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
    id_action: null,
    information: null,
    children: [
      {
        id: "175",
        value: "Oui",
        id_action: 337,
        done: true,
        information:
          "Cette question vous demande si votre entreprise a mis en place des mesures pour assurer la qualité et la sécurité de vos produits. Cela peut inclure des contrôles qualité, des certifications, des tests de sécurité ou des procédures spécifiques pour garantir que vos produits répondent aux normes et attentes des clients.",
        children: [
          {
            id: "176",
            value: "Quelles sont ces mesures ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "177",
                value:
                  "Labels/certifications qualité et sécurité des produits/services",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "178",
                    value: " Veuillez préciser lesquels :",
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
                id: "180",
                value:
                  "Cahier des charges fournisseurs strict afin d'assurer la qualité et la sécurité des matières premières et des produits",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "181",
                value:
                  "Traçabilité des matières assurées sur toute la chaîne d'approvisionnement",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "182",
                value:
                  "Suivi de l'après-vente et mesure en cas de problèmes identifiés. Ex : tenue d'un registre de réclamations, historique des actions prises, enquêtes de satisfaction post-traitement de réclamation, registre des produits/services retournés/suspendu, documentation de suspension",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "183",
                value:
                  "Tests réguliers en interne ou par des laboratoires externes pour garantir la conformité aux normes de sécurité.",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "184",
                value:
                  "Collaboration avec des organismes de réglementation ou des associations sectorielles pour suivre les meilleures pratiques en matière de sécurité des produits.",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "185",
                value:
                  "Participation à des programmes de rappel de produits en cas de problèmes de sécurité identifiés.",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "186",
                value:
                  "Évaluation continue des risques liés aux produits et mise en œuvre de mesures correctives.",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "187",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "188",
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
        id: "190",
        value: "Non",
        id_action: 337,
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
    id: "191",
    value:
      "Avez-vous mis en place des systèmes permettant aux clients de fournir des commentaires, de poser des questions ou de déposer des réclamations?",
    ids_secteurs: [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
    id_action: null,
    information:
      "Les systèmes permettant aux clients de fournir des commentaires, de poser des questions ou de déposer des plaintes sont des outils et plateformes mis en place par les entreprises pour faciliter la communication entre elles et leurs clients. Ces systèmes jouent un rôle essentiel dans l'amélioration continue des produits et services, en donnant aux clients la possibilité d'exprimer leurs opinions, de signaler des problèmes ou de poser des questions.",
    children: [
      {
        id: "192",
        value: "Oui",
        id_action: 338,
        done: true,
        information: null,
        children: [
          {
            id: "193",
            value: "Quels systèmes avez-vous mis en place ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "194",
                value: "Service client dédié",
                id_action: null,
                done: false,
                information:
                  "Une équipe ou un service spécialement désigné pour gérer les demandes des clients, offrant des réponses personnalisées et rapides. Cela permet aux clients de contacter directement l'entreprise pour poser des questions, demander des informations ou résoudre des problèmes liés aux produits ou services.",
                children: [],
                type: "reponse",
              },
              {
                id: "195",
                value: "Plateforme en ligne pour commentaires et les questions",
                id_action: null,
                done: false,
                information:
                  "Un espace dédié sur le site web de l'entreprise où les clients peuvent partager leurs avis, poser des questions ou donner des suggestions sur les produits ou services. Cette plateforme est souvent intégrée dans l'espace client ou dans une section feedback du site.",
                children: [],
                type: "reponse",
              },
              {
                id: "196",
                value: "Suivi des réclamations",
                id_action: null,
                done: false,
                information:
                  "Un système structuré qui permet à l'entreprise de suivre l'évolution des réclamations depuis leur soumission jusqu'à leur résolution. Les clients peuvent recevoir des mises à jour régulières sur l'état de leur réclamation, garantissant une transparence et une gestion efficace des problèmes.",
                children: [],
                type: "reponse",
              },
              {
                id: "197",
                value: "Email dédié aux retours clients",
                id_action: null,
                done: false,
                information:
                  "Une adresse email spécifique où les clients peuvent envoyer leurs retours d'expérience, questions ou plaintes. Ce canal permet un suivi des échanges écrit et centralisé, facilitant ainsi la gestion des retours.",
                children: [],
                type: "reponse",
              },
              {
                id: "198",
                value: "Sondages de satisfaction",
                id_action: null,
                done: false,
                information:
                  "Des questionnaires envoyés régulièrement aux clients pour évaluer leur niveau de satisfaction vis-à-vis des produits ou services de l'entreprise. Ces sondages permettent de recueillir des informations précieuses pour améliorer la qualité des offres.",
                children: [],
                type: "reponse",
              },
              {
                id: "199",
                value: "Chat en ligne",
                id_action: null,
                done: false,
                information:
                  "Un outil de messagerie instantanée disponible sur le site web de l'entreprise pour permettre aux clients d'interagir en temps réel avec un représentant. Ce service aide à résoudre rapidement les questions ou problèmes mineurs et améliore l'expérience client en offrant une assistance immédiate.",
                children: [],
                type: "reponse",
              },
              {
                id: "200",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "201",
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
        id: "203",
        value: "Non",
        id_action: 338,
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
    id: "204",
    value:
      "Votre entreprise mène-t-elle des actions pour favoriser la satisfaction/fidélisation de sa clientèle ?",
    ids_secteurs: [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
    id_action: null,
    information:
      "Ces actions visent non seulement à satisfaire les besoins des clients mais aussi à créer un lien émotionnel avec eux, augmentant ainsi la probabilité qu'ils continuent de choisir les produits ou services de l'entreprise à long terme. La satisfaction concerne le fait de répondre aux attentes immédiates des clients, tandis que la fidélisation se concentre sur la création d'une relation durable basée sur la confiance, l'engagement, et la valeur ajoutée.",
    children: [
      {
        id: "205",
        value: "Oui",
        id_action: 339,
        done: true,
        information: null,
        children: [
          {
            id: "206",
            value: "Quelles sont ces actions ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "207",
                value:
                  "Programme de fidélité pour récompenser les clients réguliers",
                id_action: null,
                done: false,
                information:
                  "Les programmes de fidélité peuvent être conçus pour encourager un comportement responsable plutôt que simplement l'achat. Par exemple, une entreprise peut offrir des points de fidélité pour l'utilisation ou le retour de produits recyclés, ou accorder des avantages aux clients qui choisissent des produits éco-conçus. Cela permet de récompenser les clients tout en alignant la stratégie de fidélisation avec les objectifs RSE.\n\nExemple : Offrir des points supplémentaires pour les achats de produits durables ou permettre aux clients d'échanger leurs points contre des actions caritatives, comme un don à une association.",
                children: [],
                type: "reponse",
              },
              {
                id: "208",
                value:
                  "Offres promotionnelles spéciales pour les clients fidèles",
                id_action: null,
                done: false,
                information:
                  "Les offres promotionnelles peuvent être orientées vers des comportements responsables, comme inciter à l'achat de produits plus durables, à la réduction de l'empreinte carbone ou à l'utilisation de produits/services réparables et réutilisables. L'objectif est de favoriser des comportements écoresponsables plutôt que la simple consommation accrue.\n\nExemple : Proposer des réductions sur les produits éco-conçus ou offrir des remises sur les services de réparation et de réutilisation de produits.",
                children: [],
                type: "reponse",
              },
              {
                id: "209",
                value: "Organisation d'événements clients",
                id_action: null,
                done: false,
                information:
                  "Organiser des événements pour les clients est une excellente occasion de renforcer les liens avec la communauté tout en promouvant des valeurs responsables. Ces événements peuvent inclure des ateliers sur la durabilité, des rencontres avec des fournisseurs locaux ou des sessions de sensibilisation aux pratiques RSE. Cela encourage les clients à s'engager de manière plus active dans la démarche éthique de l'entreprise.\n\nExemple : Organiser un atelier de réparation pour encourager la prolongation de la durée de vie des produits ou une conférence sur les pratiques écoresponsables.",
                children: [],
                type: "reponse",
              },
              {
                id: "210",
                value: "Communauté de clients engagée",
                id_action: null,
                done: false,
                information:
                  "Créer une communauté autour des valeurs de l'entreprise en invitant les clients à rejoindre des groupes ou forums dédiés où ils peuvent partager leurs expériences, donner des conseils ou des idées pour améliorer les produits/services.\n\nExemple : Créer un groupe en ligne où les clients peuvent échanger sur les produits et suggérer des améliorations ou de nouvelles fonctionnalités, en mettant un accent sur les solutions durables.",
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
        id: "213",
        value: "Non",
        id_action: 339,
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
    id: "214",
    value:
      "Avez-vous mis en place une démarche de conception universelle pour certains de vos produits/services ?",
    ids_secteurs: [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
    id_action: null,
    information:
      "Cette question vise à savoir si votre entreprise adopte une approche proactive en matière de design inclusif. La conception universelle, aussi appelée design pour tous, intègre dès le départ des caractéristiques permettant à chacun, indépendamment de ses limitations, d'utiliser les produits ou services.\n\nCela peut concerner :\n\n• Les produits physiques : Par exemple, des emballages faciles à ouvrir, des appareils électroniques avec des boutons tactiles ou des instructions en braille.\n• Les services numériques : Par exemple, des sites web optimisés pour les lecteurs d'écran, des sous-titres pour les vidéos ou des commandes vocales pour faciliter l'accès aux services pour les personnes malvoyantes ou malentendantes.\n\nLa conception universelle n'est pas seulement bénéfique pour les personnes en situation de handicap, mais elle améliore aussi l'expérience utilisateur pour tous.",
    children: [
      {
        id: "215",
        value: "Oui",
        id_action: 340,
        done: true,
        information: null,
        children: [
          {
            id: "216",
            value:
              "Quelle(s) action(s) liées à la conception universelle avez-vous mises en place ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "217",
                value:
                  "Intégration de technologies d'accessibilité (web et produits)",
                id_action: null,
                done: false,
                information:
                  "Rendre un site web ou un produit accessible à tous consiste à intégrer des technologies qui permettent aux personnes ayant des handicaps de l'utiliser sans difficulté. Cela peut être des boutons plus faciles à appuyer, des interfaces simplifiées ou des informations plus claires.\n\nExemple :\n\n• Pour un site web : S'assurer que les couleurs utilisées offrent un bon contraste pour les personnes malvoyantes ou que les polices soient faciles à lire.\n• Pour une marque de vêtements : Proposer des vêtements avec des fermetures plus simples (boutons-pression, velcro) pour les personnes ayant des difficultés motrices.",
                children: [
                  {
                    id: "218",
                    value:
                      "Quel est le pourcentage de produits/services intégrant des fonctionnalités d'accessibilité?",
                    id_action: null,
                    information:
                      "Il s'agit ici de compter les produits ou services qui incluent des éléments d'accessibilité, même partiels, comme des interfaces simplifiées ou des options d'accessibilité (par exemple, fermetures faciles sur des vêtements, fonctionnalités de lecture d'écran sur un site web).",
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [229],
                  },
                ],
                type: "reponse",
              },
              {
                id: "220",
                value: "Packaging accessible et ergonomique",
                id_action: null,
                done: false,
                information:
                  "Le packaging accessible est facile à manipuler pour tout le monde, même ceux qui ont des difficultés avec leurs mains (arthrite, faiblesse musculaire). Il doit être simple à ouvrir, lisible et intuitif.\n\nExemple :\n\n• Secteur alimentaire : Emballage avec une languette ou une ouverture facile pour que le produit soit accessible sans avoir besoin de force.\n• Mode : Étiquettes en braille ou avec des informations écrites en gros caractères pour les personnes malvoyantes.",
                children: [
                  {
                    id: "221",
                    value:
                      "Quel est le pourcentage de packagings ayant été conçus de manière à être accessibles à tous et ergonomiques ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [230],
                  },
                ],
                type: "reponse",
              },
              {
                id: "223",
                value: "Tests d'accessibilité avec des utilisateurs divers",
                id_action: null,
                done: false,
                information:
                  "Faire tester les produits ou services par différentes personnes, y compris celles ayant des handicaps, garantit qu'ils sont réellement utilisables par tous.\n\nExemple :\n\n• Design produit : Organiser des tests avec des personnes âgées pour s'assurer que les produits sont faciles à manipuler et utiliser.\n• Alimentaire : Tester les emballages alimentaires avec différents consommateurs pour valider la facilité d'ouverture.",
                children: [
                  {
                    id: "224",
                    value:
                      "Quel est le nombre de tests effectués avec des groupes représentatifs ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [231],
                  },
                ],
                type: "reponse",
              },
              {
                id: "226",
                value:
                  "Formation des équipes de conceptiionsur les principes de conception universelle",
                id_action: null,
                done: false,
                information:
                  "Enseigner aux équipes de conception les bonnes pratiques pour rendre les produits et services accessibles à tous.\n\nExemple :\n\n• Mode : Former les créateurs pour intégrer des éléments comme des fermetures magnétiques ou élastiques.\n• Design : Apprendre aux designers à intégrer des concepts ergonomiques dans les objets de tous les jours (par exemple, des poignées faciles à saisir).",
                children: [
                  {
                    id: "227",
                    value:
                      "Quelle est la part du personnel des équipes de conception ayant été formé aux pratiques de conception universelle (MOOC, formations à distance/présentiel) ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [232],
                  },
                ],
                type: "reponse",
              },
              {
                id: "229",
                value:
                  "Collaboration avec des associations ou partenaires spécialisées",
                id_action: null,
                done: false,
                information:
                  "Travailler avec des experts de l'accessibilité permet de concevoir des produits qui respectent les besoins des utilisateurs avec des limitations.\n\nExemple :\n\n• Alimentaire : Collaborer avec des associations spécialisées dans l'accessibilité pour s'assurer que les produits répondent aux besoins des personnes ayant des allergies ou intolérances.\n• Mode : Travailler avec des associations pour intégrer des vêtements adaptés aux personnes en fauteuil roulant.",
                children: [
                  {
                    id: "230",
                    value:
                      "Quel est le nombre d'échanges ou de sessions de travail avec des associations ou partenaires spécialisés en conception inclusive/universelle ?",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [233],
                  },
                ],
                type: "reponse",
              },
              {
                id: "232",
                value:
                  "Sensibilisation des clients sur les caractéristiques d'accessibilité des produits/services",
                id_action: null,
                done: false,
                information:
                  "Informer les clients sur les fonctionnalités d'accessibilité des produits afin qu'ils puissent choisir ce qui leur convient le mieux.\n\nExemple :\n\n• Produits alimentaires : Mettre en avant sur l'emballage que le produit est facile à ouvrir ou qu'il utilise des ingrédients hypoallergéniques.\n• Mode : Expliquer que certains vêtements sont adaptés pour les personnes ayant des difficultés à manipuler des fermetures.",
                children: [
                  {
                    id: "233",
                    value:
                      "Quel est le nombre de canaux de communication utilisés pour sensibiliser à l'accessibilité des produits/services ?",
                    id_action: null,
                    information:
                      "Pour mesurer efficacement ce KPI, voici une méthode simple :\n\n1. Identification des canaux de communication :\nListez les différents types de canaux utilisés par l'entreprise pour communiquer sur l'accessibilité.\n\nCes canaux peuvent inclure :\n\n• Site web : Section ou page dédiée à l'accessibilité.\n• Réseaux sociaux : Canaux comme Facebook, LinkedIn, Instagram, etc.\n• Newsletters : Envoi d'emails contenant des informations sur l'accessibilité.\n• Supports physiques : Brochures, affiches, ou étiquettes en magasin.\n• Étiquetage et packaging : Informations mentionnées sur l'emballage des produits.\n\n2. Collecte des données par type de canal :\n\nComptez chaque type de canal distinct utilisé pour sensibiliser. Un canal est compté une seule fois, peu importe le nombre de publications ou mentions sur ce canal.\n\nPar exemple :\n\n• Si vous avez une page sur votre site web, cela compte pour 1 canal.\n• Si vous publiez sur trois réseaux sociaux différents (Facebook, Instagram, LinkedIn), cela compte pour 1 canal (réseaux sociaux).\n• Si vous incluez l'accessibilité dans vos newsletters, cela compte pour 1 canal.\n• Si vous mentionnez l'accessibilité sur les packagings, cela compte pour 1 canal.\n\nSynthèse : Totalisez le nombre de canaux distincts utilisés pour sensibiliser à l'accessibilité. Par exemple, si vous avez utilisé votre site web, trois réseaux sociaux, une newsletter et des packagings, cela donne un KPI de 4 canaux de communication.",
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [234],
                  },
                ],
                type: "reponse",
              },
              {
                id: "235",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "236",
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
        id: "238",
        value: "Non",
        id_action: 340,
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
    id: "239",
    value: "Mesurez-vous la satisfaction de vos clients ?",
    ids_secteurs: [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
    id_action: null,
    information:
      "Mesurer la satisfaction client consiste à évaluer dans quelle mesure l'entreprise ou ses produits/services répondent aux attentes et aux besoins des clients. Cette mesure permet de comprendre la perception des clients et de détecter les points forts ainsi que les axes d'amélioration de l'offre de l'entreprise.",
    children: [
      {
        id: "240",
        value: "Oui",
        id_action: 341,
        done: true,
        information: null,
        children: [
          {
            id: "241",
            value: "Cette mesure concerne-t-elle :",
            id_action: null,
            information: null,
            children: [
              {
                id: "242",
                value: "L'entreprise dans son ensemble",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "243",
                    value: "Comment mesurez-vous cette satisfaction ?",
                    id_action: null,
                    information: null,
                    children: [
                      {
                        id: "244",
                        value: "Score NPS de l'entreprise",
                        id_action: null,
                        done: false,
                        information:
                          "Le Net Promoter Score (NPS) est un indicateur de fidélité client basé sur la probabilité qu'un client recommande votre entreprise à son entourage. Il est mesuré en posant une question simple : \"Sur une échelle de 0 à 10, quelle est la probabilité que vous recommandiez notre entreprise à un ami ou collègue ?\". Les scores de 9 à 10 sont des promoteurs, 7 à 8 sont des passifs, et 0 à 6 sont des détracteurs. Le NPS est obtenu en soustrayant le pourcentage de détracteurs de celui des promoteurs. C'est un indicateur clé utilisé pour évaluer le niveau de satisfaction globale et la fidélité envers votre entreprise.\n\nExemple :\n\nUtiliser le score NPS pour identifier des clients fidèles et des ambassadeurs potentiels, ou pour améliorer les points de friction qui génèrent des détracteurs.",
                        children: [
                          {
                            id: "245",
                            value:
                              "Veuillez préciser le dernier score NPS obtenu :",
                            id_action: null,
                            information:
                              "Veuillez entrer votre dernier score NPS (entre -100 et +100)",
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [235],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "247",
                        value: "Enquêtes/sondages de satisfaction",
                        id_action: null,
                        done: false,
                        information:
                          "Les enquêtes ou sondages de satisfaction vous permettent de mesurer le niveau de satisfaction de vos clients en leur posant des questions sur différents aspects de votre entreprise, tels que la qualité des produits ou services, le service client ou l'expérience globale.\n\nExemple :\n\nUtiliser les résultats des enquêtes pour identifier les points forts à valoriser et les axes d'amélioration à travailler, afin d'augmenter la satisfaction et la fidélité de vos clients.",
                        children: [
                          {
                            id: "248",
                            value:
                              "Veuillez préciser les résultats de vos derniers sondages/enquêtes de satisfaction :",
                            id_action: null,
                            information:
                              '👉 Veuillez soit :\n\n• Donner votre note moyenne de satisfaction, en la convertissant sur une échelle de 0 à 100 pour standardiser les données.\n\nPar exemple, une note moyenne de 4 sur 5 correspond à 80 sur 100.\n\n• Ou résumer les principaux enseignements de vos enquêtes si vous n\'avez pas de note moyenne.\n\nPar exemple : "Les clients apprécient notre service après-vente réactif, mais souhaitent une livraison plus rapide."',
                            children: [],
                            type: "question",
                            inputType: "text",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "250",
                        value: "Avis/Réseaux sociaux",
                        id_action: null,
                        done: false,
                        information:
                          "Les avis laissés par vos clients sur les plateformes en ligne (telles que Google, Facebook, TripAdvisor, etc.) et les réseaux sociaux sont une source précieuse de feedback sur votre entreprise. Ces avis incluent généralement une note (souvent sous forme d'étoiles) et des commentaires.\n\nUtiliser cette note moyenne pour surveiller votre réputation en ligne, identifier les domaines d'amélioration, et mettre en place des actions pour augmenter la satisfaction client. Les avis en ligne influencent fortement la perception de votre entreprise par de nouveaux clients potentiels.",
                        children: [
                          {
                            id: "251",
                            value: "Quelle est la note moyenne obtenue ?",
                            id_action: null,
                            information:
                              "Les avis en ligne proviennent souvent de différentes plateformes qui peuvent utiliser des échelles de notation différentes (par exemple, sur 5 étoiles, sur 10 points).\n\nNe vous inquiétez pas si vous n'êtes pas à l'aise avec les calculs, suivez simplement ces étapes :\n\n👉 Comment calculer votre note moyenne :\n\n1. Recueillez les notes moyennes de chaque plateforme, en notant l'échelle utilisée.\n\n2. Convertissez toutes les notes sur une échelle commune de 10.\n\nExemple :\n\n• Google : 4,5 sur 5\nConversion : 4,5x2 = 9 sur 10\n\n• Trustpilot : 8 sur 10\n\n• Autre plateforme : 2 sur 7\nConversion : (2/7)x10 = 2,86\n\n\n3. Calcul de la moyenne :\n\n9+8+2,86 = 19,86\n19,86/3\nIci, la note sur 10 à écrire serait : 6,62\n\n👉 Veuillez indiquer votre note moyenne sur 10 points.",
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [236],
                          },
                          {
                            id: "253",
                            value:
                              "Quel est le nombre d'avis total sur l'ensemble des plateformes de notation ?",
                            id_action: null,
                            information:
                              "👉 Recueillez le nombre d'avis sur chaque plateforme où votre entreprise est présente.\n\nAdditionnez les nombres d'avis pour obtenir le total.\n\nExemple :\n\nGoogle : 100 avis\nTrustpilot : 50 avis\nYelp : 30 avis\nTotal des avis : 180 avis\n\n👉 Veuillez indiquer le nombre total d'avis obtenus sur l'ensemble des plateformes.",
                            children: [],
                            type: "question",
                            inputType: "numeric",
                            id_kpis: [],
                          },
                        ],
                        type: "reponse",
                      },
                      {
                        id: "255",
                        value: "Autre(s) méthode(s)",
                        id_action: null,
                        done: false,
                        information: null,
                        children: [
                          {
                            id: "256",
                            value:
                              "Veuillez préciser la méthode utilisée et les résultats obtenus :",
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
                id: "258",
                value: "Des produits ou services spécifiques",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "259",
                    value: "Score NPS des produits/services",
                    id_action: null,
                    done: false,
                    information:
                      "Le Net Promoter Score (NPS) est un indicateur de fidélité client basé sur la probabilité qu'un client recommande un produit ou service spécifique à son entourage. Il est mesuré en posant une question simple : \"Sur une échelle de 0 à 10, quelle est la probabilité que vous recommandiez ce produit/service à un ami ou collègue ?\". Les scores de 9 à 10 sont des promoteurs, 7 à 8 sont des passifs, et 0 à 6 sont des détracteurs. Le NPS est obtenu en soustrayant le pourcentage de détracteurs de celui des promoteurs. C'est un indicateur clé utilisé pour évaluer le niveau de satisfaction et la fidélité envers un produit ou service particulier.\n\nExemple :\n\nUtiliser le score NPS pour identifier les produits ou services qui génèrent une forte satisfaction client, afin de les promouvoir davantage, ou pour améliorer ceux qui obtiennent un score faible en ciblant les points de friction qui génèrent des détracteurs.",
                    children: [
                      {
                        id: "260",
                        value:
                          "Veuillez indiquer le dernier score NPS obtenu pour vos produits/services :",
                        id_action: null,
                        information:
                          "👉 Si vous avez mesuré le NPS pour un seul produit ou service, veuillez indiquer ce score (entre -100 et +100).\n\n👉 Si vous avez mesuré le NPS pour plusieurs produits ou services, veuillez calculer et indiquer la moyenne de ces scores NPS.",
                        children: [],
                        type: "question",
                        inputType: "text",
                        id_kpis: [237],
                      },
                    ],
                    type: "reponse",
                  },
                  {
                    id: "262",
                    value:
                      "Enquêtes/sondages de satisfaction liés aux produits/services",
                    id_action: null,
                    done: false,
                    information:
                      "Les enquêtes ou sondages de satisfaction vous permettent de mesurer le niveau de satisfaction de vos clients en leur posant des questions spécifiques sur vos produits ou services. Ces enquêtes peuvent couvrir divers aspects tels que la qualité, la performance, le rapport qualité-prix, ou toute autre caractéristique pertinente de vos offres.\n\nExemple :\n\nUtiliser les résultats des enquêtes pour identifier les points forts de vos produits/services à valoriser et les axes d'amélioration à travailler, afin d'augmenter la satisfaction et la fidélité de vos clients.",
                    children: [
                      {
                        id: "263",
                        value:
                          "Veuillez préciser les résultats des sondages/enquêtes de satisfaction liés à vos produits/services :",
                        id_action: null,
                        information:
                          '👉 Veuillez soit :\n\n• Donner votre note moyenne de satisfaction, en la convertissant sur une échelle de 0 à 100 pour standardiser les données.\n\nPar exemple, une note moyenne de 4 sur 5 correspond à 80 sur 100.\n\n• Si vous avez évalué plusieurs produits/services, veuillez calculer la moyenne générale des notes de satisfaction.\n\nAdditionnez les notes moyennes de chaque produit/service (après conversion sur 100 si nécessaire) et divisez par le nombre total de produits/services évalués.\n\nPar exemple : Si vous avez trois produits avec des notes de 80, 90 et 70 sur 100, la moyenne générale est (80 + 90 + 70) / 3 = 80 sur 100.\n\n👉 Ou résumer les principaux enseignements de vos enquêtes si vous n\'avez pas de note moyenne et que les données sont qualitatives.\n\nPar exemple : "Les clients apprécient la durabilité de notre produit A, mais souhaitent une interface plus intuitive pour notre service B."',
                        children: [],
                        type: "question",
                        inputType: "text",
                        id_kpis: [],
                      },
                    ],
                    type: "reponse",
                  },
                  {
                    id: "265",
                    value: "Autre(s) méthode(s)",
                    id_action: null,
                    done: false,
                    information: null,
                    children: [
                      {
                        id: "266",
                        value:
                          "Veuillez préciser la méthode utilisée et les résultats obtenus :",
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
            ],
            type: "question",
            inputType: "multiple",
          },
        ],
        type: "reponse",
      },
      {
        id: "268",
        value: "Non",
        id_action: 341,
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
    id: "269",
    value:
      "Informez-vous et éduquez-vous les consommateurs sur l'utilisation sûre, durable et appropriée de vos produits/services ?",
    ids_secteurs: [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
    id_action: null,
    information:
      "Cette question cherche à savoir si votre entreprise informe et éduque activement les consommateurs sur la manière d'utiliser vos produits ou services de manière sûre, durable et appropriée.\nCela peut inclure des guides d'utilisation, des conseils de durabilité ou des mises en garde sur les risques potentiels.",
    children: [
      {
        id: "270",
        value: "Oui",
        id_action: 342,
        done: true,
        information: null,
        children: [
          {
            id: "271",
            value:
              "De quelle(s) façon(s) informez-vous et éduquez-vous les consommateurs sur l'utilisation sûre, durable et appropriée de vos produits/services ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "272",
                value: "Étiquetage clair et informatif sur les emballages",
                id_action: null,
                done: false,
                information:
                  "Fournir des étiquettes claires et informatives sur vos emballages qui détaillent les instructions d'utilisation, les précautions de sécurité, les informations environnementales et tout autre renseignement pertinent. Un étiquetage efficace aide les consommateurs à utiliser vos produits de manière sûre, durable et appropriée, tout en respectant les réglementations en vigueur.\n\nExemple :\n\nInclure des pictogrammes de sécurité, des consignes de recyclage ou des conseils d'entretien directement sur l'emballage pour guider les clients dans une utilisation responsable de vos produits.",
                children: [],
                type: "reponse",
              },
              {
                id: "273",
                value:
                  "Supports éducatifs accessibles (guides, tutoriels, vidéos)",
                id_action: null,
                done: false,
                information:
                  "Mettre à disposition des clients des supports éducatifs tels que des guides d'utilisation, des tutoriels pas à pas, des vidéos explicatives ou des FAQ. Ces ressources peuvent être disponibles en ligne sur votre site web, sur vos réseaux sociaux,ou fournies avec le produit. Elles visent à aider les clients à comprendre comment utiliser et entretenir vos produits/services efficacement et en toute sécurité.\n\nExemple :\n\nCréer une série de vidéos tutoriels sur votre chaîne YouTube pour démontrer les meilleures pratiques d'utilisation ou d'entretien de vos produits, facilitant ainsi l'expérience client et prolongeant la durée de vie du produit.",
                children: [],
                type: "reponse",
              },
              {
                id: "274",
                value:
                  "Messages éducatifs dans les communications marketing et en ligne",
                id_action: null,
                done: false,
                information:
                  "Intégrer des informations éducatives et des conseils pratiques dans vos campagnes marketing, publicités, newsletters ou publications sur les réseaux sociaux. Cela permet de sensibiliser les clients à l'utilisation responsable de vos produits/services tout en renforçant votre engagement en matière de responsabilité sociale et environnementale.\n\nExemple :\n\nPublier régulièrement des astuces écologiques sur vos réseaux sociaux, comme des conseils pour réduire la consommation d'énergie lors de l'utilisation de vos produits ou des informations sur les matériaux durables que vous utilisez.",
                children: [],
                type: "reponse",
              },
              {
                id: "275",
                value:
                  "Ateliers ou formations clients (seul ou en partenariat)",
                id_action: null,
                done: false,
                information:
                  "Organiser des ateliers, des webinaires ou des formations pour vos clients afin de leur fournir des informations approfondies sur l'utilisation sûre, durable et appropriée de vos produits/services. Ces événements peuvent être organisés par votre entreprise seule ou en partenariat avec des associations, des organisations locales ou d'autres entreprises pour maximiser l'impact.\n\nExemple :\n\nProposer des sessions de formation gratuites pour montrer aux clients comment optimiser l'utilisation de vos produits, ou collaborer avec une association locale pour animer un atelier sur les pratiques durables dans votre secteur d'activité.",
                children: [],
                type: "reponse",
              },
              {
                id: "276",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "277",
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
        id: "279",
        value: "Non",
        id_action: 342,
        done: false,
        information: null,
        children: [],
        type: "reponse",
      },
      {
        id: "280",
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
    id: "281",
    value: "Votre entreprise est-elle émettrice de nuisances sonores ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 8, 9, 13, 15, 16, 17, 19, 20, 21, 23, 25, 28, 29,
    ],
    id_action: null,
    information:
      "Cette question vise à déterminer si les activités de votre entreprise génèrent des nuisances sonores susceptibles d'affecter vos collaborateurs internes, les communautés avoisinantes, ou les deux. Les nuisances sonores peuvent provenir de diverses sources telles que les machines industrielles, le transport et la logistique, les travaux de construction, les systèmes de ventilation et de climatisation, ou l'utilisation d'outils électriques ou mécaniques.",
    children: [
      {
        id: "282",
        value: "Oui",
        id_action: 343,
        done: true,
        information: null,
        children: [
          {
            id: "283",
            value: "Lesquelles ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "284",
                value: "Machines industrielles",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si votre entreprise émet des nuisances sonores causées par des machines industrielles.",
                children: [],
                type: "reponse",
              },
              {
                id: "285",
                value: "Transport et logistique",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si votre activité génère des nuisances sonores causées par des activités de transport et logistique",
                children: [],
                type: "reponse",
              },
              {
                id: "286",
                value: "Travaux de construction",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si votre activité génère des nuisances sonores causées par des travaux de construction",
                children: [],
                type: "reponse",
              },
              {
                id: "287",
                value: "Systèmes de ventilation et de climatisation",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si votre activité génère des nuisances sonores causées par des systèmes de ventilation et de climatisation",
                children: [],
                type: "reponse",
              },
              {
                id: "288",
                value: "Activités de production",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si votre activité génère des nuisances sonores causées par vos activités de production",
                children: [],
                type: "reponse",
              },
              {
                id: "289",
                value: "Activités de manutention ou de logistique interne",
                id_action: null,
                done: false,
                information:
                  "Votre entreprise génère des nuisances sonores liées aux activités de manutention ou de logistique interne. Cela inclut le déplacement de marchandises, l'utilisation de chariots élévateurs, de convoyeurs, de transpalettes ou d'autres équipements de manutention qui peuvent produire du bruit lors de leur fonctionnement.",
                children: [],
                type: "reponse",
              },
              {
                id: "290",
                value: "Systèmes d'alarme ou de sécurité",
                id_action: null,
                done: false,
                information:
                  "Votre entreprise génère des nuisances sonores causées par des systèmes d'alarme ou de sécurité. Cela englobe les alarmes sonores, les sirènes, les avertisseurs de recul, les détecteurs de fumée ou tout autre dispositif de sécurité émettant des signaux sonores fréquents ou prolongés pouvant perturber le voisinage ou l'environnement de travail.",
                children: [],
                type: "reponse",
              },
              {
                id: "291",
                value: "Utilisation d'outils électriques ou mécaniques",
                id_action: null,
                done: false,
                information:
                  "Votre entreprise génère des nuisances sonores dues à l'utilisation d'outils électriques ou mécaniques. Cela concerne l'emploi de perceuses, scies, ponceuses, marteaux-piqueurs, compresseurs ou tout autre équipement manuel ou portatif bruyant utilisé dans le cadre de vos activités quotidiennes.",
                children: [],
                type: "reponse",
              },
              {
                id: "292",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si votre activité génère des nuisances sonores causées par d'autres sources et précisez la source de ces nuisances sonores",
                children: [
                  {
                    id: "293",
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
            id: "295",
            value:
              "Quelles mesures avez-vous mises en place pour réduire ces nuisances sonores ?",
            id_action: null,
            information:
              "Veuillez sélectionner les mesures mises en place par votre entreprise pour réduire ses nuisances sonores.",
            children: [
              {
                id: "296",
                value: "Installation de barrières acoustiques",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette action si vous avez installé des barrières acoustiques pour réduire les nuisances sonores.\n \nLes barrières acoustiques aident à diminuer la propagation du bruit en bloquant ou en absorbant les sons indésirables.",
                children: [],
                type: "reponse",
              },
              {
                id: "297",
                value: "Utilisation d'équipements moins bruyants",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette action si vous avez adopté des équipements moins bruyants.\n \nL'utilisation d'équipements moins bruyants permet de réduire directement les émissions sonores à la source.",
                children: [],
                type: "reponse",
              },
              {
                id: "298",
                value: "Isolation phonique des bâtiments",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette action si vous avez mis en place une isolation phonique des bâtiments pour réduire les nuisances sonores.\n \nL'isolation phonique aide à empêcher la propagation du bruit en dehors des bâtiments.",
                children: [],
                type: "reponse",
              },
              {
                id: "299",
                value:
                  "Réduction des heures de fonctionnement des équipements bruyants",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette action si vous avez réduit les heures de fonctionnement des équipements bruyants.\n \nLimiter les heures d'utilisation des équipements bruyants peut réduire les nuisances sonores pendant les périodes sensibles.",
                children: [],
                type: "reponse",
              },
              {
                id: "300",
                value:
                  "Surveillance continue des niveaux de bruit et ajustement en conséquence / Planification des activités bruyantes en dehors des heures sensibles",
                id_action: null,
                done: false,
                information:
                  "Vous surveillez les niveaux de bruit et ajustez vos activités en conséquence, notamment en planifiant les activités bruyantes en dehors des heures sensibles pour minimiser les nuisances sonores.\n \nSurveiller les niveaux de bruit permet de réagir rapidement à toute augmentation des nuisances et de maintenir des niveaux de bruit acceptables.",
                children: [],
                type: "reponse",
              },
              {
                id: "301",
                value:
                  "Collaboration proactive avec les autorités locales ou les communautés pour développer des initiatives de réduction du bruit",
                id_action: null,
                done: false,
                information:
                  "Engager activement votre entreprise dans des partenariats avec les autorités locales, les collectivités ou les communautés environnantes pour élaborer et mettre en œuvre des initiatives visant à réduire les nuisances sonores. Cette collaboration peut prendre la forme de réunions, de projets communs ou de consultations régulières pour adapter vos pratiques en fonction des besoins locaux et améliorer la qualité de vie des riverains.",
                children: [],
                type: "reponse",
              },
              {
                id: "302",
                value:
                  "Maintenance régulière des équipements pour réduire les bruits dus à l'usure",
                id_action: null,
                done: false,
                information:
                  "Effectuer une maintenance régulière de vos équipements pour assurer leur bon fonctionnement et prévenir les bruits excessifs causés par l'usure ou le dysfonctionnement des machines. Un entretien préventif permet non seulement de réduire les nuisances sonores, mais aussi de prolonger la durée de vie de vos équipements et d'améliorer la sécurité au travail.\n\nExemple :\n\nProgrammer des inspections et des opérations de maintenance périodiques pour vos machines industrielles, comme la lubrification des pièces mobiles, le remplacement des composants usés ou la calibration des équipements pour qu'ils fonctionnent de manière optimale et silencieuse.",
                children: [],
                type: "reponse",
              },
              {
                id: "303",
                value:
                  "Formation du personnel à des pratiques de travail moins bruyantes",
                id_action: null,
                done: false,
                information:
                  "Former vos employés à adopter des méthodes de travail qui réduisent les nuisances sonores, en leur enseignant les bonnes pratiques et techniques pour minimiser le bruit pendant leurs activités. Sensibiliser le personnel à l'importance de réduire le bruit contribue à créer un environnement de travail plus agréable et à limiter l'impact sonore sur l'environnement extérieur.\n\nExemple :\n\nOrganiser des sessions de formation pour montrer aux employés comment manipuler les équipements de manière plus silencieuse, comme éviter de laisser tomber des objets lourds, utiliser des équipements d'insonorisation personnelle ou adopter des méthodes de travail alternatives moins bruyantes. Encourager le personnel à signaler les sources de bruit excessif pour que des mesures correctives puissent être prises.",
                children: [],
                type: "reponse",
              },
              {
                id: "304",
                value: "Aucunes mesures",
                id_action: 343,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "305",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette action si vous avez mis en place d'autres mesures pour réduire les nuisances sonores.",
                children: [
                  {
                    id: "306",
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
        id: "308",
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
    id: "309",
    value: "Votre activité est-elle émettrice de nuisances olfactives ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 8, 9, 13, 15, 16, 17, 19, 20, 21, 23, 25, 28, 29,
    ],
    id_action: null,
    information:
      "Cette question vise à déterminer si votre activité génère des odeurs pouvant affecter vos employés, les communautés avoisinantes ou les deux.",
    children: [
      {
        id: "310",
        value: "Oui",
        id_action: 344,
        done: true,
        information: null,
        children: [
          {
            id: "311",
            value: "Si oui, lesquelles ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "313",
                value: "Processus de production",
                id_action: null,
                done: false,
                information:
                  "Les activités liées aux procédés de fabrication ou de transformation peuvent générer des odeurs désagréables. Cela inclut toute étape où des substances sont manipulées, transformées ou traitées, entraînant ainsi la libération de composés odorants dans l'environnement.",
                children: [],
                type: "reponse",
              },
              {
                id: "314",
                value: "Stockage de déchets",
                id_action: null,
                done: false,
                information:
                  "Le stockage inapproprié des déchets peut entraîner la diffusion d'odeurs désagréables. Cela concerne la manière dont les déchets sont entreposés, la durée de stockage et les conditions environnementales autour des zones de stockage.\n\nExemple :\n\nUtiliser des conteneurs hermétiques pour le stockage des déchets organiques et programmer des collectes régulières pour éviter l'accumulation et la dispersion des odeurs. Par exemple, installer des bacs fermés pour les déchets alimentaires afin de limiter les émissions odorantes.",
                children: [],
                type: "reponse",
              },
              {
                id: "315",
                value: "Utilisation de produits chimiques",
                id_action: null,
                done: false,
                information:
                  "L'emploi de substances chimiques dans les opérations quotidiennes peut être une source significative d'odeurs. Cela inclut l'utilisation, le mélange ou le stockage de produits chimiques qui dégagent des composés odorants lors de leur manipulation ou de leur utilisation.\n\nExemple :\n\nRemplacer les solvants traditionnels par des alternatives écologiques et moins odorantes dans vos processus de nettoyage ou de fabrication. Par exemple, adopter des détergents biodégradables qui émettent moins de vapeurs odorantes.",
                children: [],
                type: "reponse",
              },
              {
                id: "316",
                value: "Activités de cuisson ou de transformation alimentaire",
                id_action: null,
                done: false,
                information:
                  "Les opérations de cuisson, de fermentation ou de transformation des aliments peuvent produire des odeurs fortes et persistantes. Ces activités sont courantes dans les secteurs alimentaires et peuvent affecter à la fois les employés et les environs.\n\nExemple :\n\nInstaller des hottes aspirantes efficaces dans les cuisines industrielles pour capter et filtrer les odeurs de cuisson. Par exemple, utiliser des systèmes de ventilation avancés dans une boulangerie pour éliminer les odeurs de cuisson des fours.",
                children: [],
                type: "reponse",
              },
              {
                id: "317",
                value: "Stations de traitement des eaux usées",
                id_action: null,
                done: false,
                information:
                  "Les installations dédiées au traitement des eaux usées peuvent émettre des odeurs désagréables en raison de la décomposition des matières organiques et de l'utilisation de procédés chimiques. Ces odeurs peuvent affecter l'environnement immédiat et les communautés avoisinantes.",
                children: [],
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
              "Quelles mesures avez-vous mises en place pour réduire ces nuisances olfactives ?",
            id_action: null,
            information:
              "Veuillez sélectionner les mesures mises en place par votre entreprise pour réduire vos nuisances olfactives.",
            children: [
              {
                id: "322",
                value: "Réduction des émissions à la source",
                id_action: null,
                done: false,
                information:
                  "Adopter des pratiques visant à diminuer les émissions d'odeurs dès leur origine en utilisant des produits moins odorants et en optimisant les processus de production. Cela implique de sélectionner des matières premières et des substances chimiques qui émettent moins d'odeurs et de modifier les procédés industriels pour réduire la génération d'odeurs indésirables. En réduisant les émissions à la source, votre entreprise contribue à minimiser l'impact olfactif sur les employés et les communautés avoisinantes.\n\nExemple :\n\nRemplacer les solvants traditionnels par des alternatives écologiques et moins odorantes dans vos processus de fabrication.",
                children: [],
                type: "reponse",
              },
              {
                id: "323",
                value: "Isolation des zones émettrices d'odeurs",
                id_action: null,
                done: false,
                information:
                  "Confinement des zones de production ou d'activités générant des odeurs afin de limiter leur dispersion dans l'environnement. Cette isolation peut être réalisée par des structures physiques telles que des enceintes isolantes ou des systèmes de ventilation spécifiques. L'objectif est de réduire la propagation des odeurs vers les espaces de travail internes et les zones environnantes, améliorant ainsi le confort des employés et réduisant les nuisances pour les riverains.\n\nExemple :\n\nInstaller des cloisons étanches autour des machines de production odorantes et mettre en place un système de ventilation dédié avec filtres à charbon actif pour capter et neutraliser les odeurs avant qu'elles ne se propagent à l'extérieur de la zone de production.",
                children: [],
                type: "reponse",
              },
              {
                id: "324",
                value:
                  "Traitement efficace des déchets pour réduire les odeurs",
                id_action: null,
                done: false,
                information:
                  "Mise en place de systèmes et de procédés de traitement et de gestion des déchets visant à diminuer la production de composés odorants.\n\nExemple :\n\nInstaller un biofiltre pour traiter les émissions odorantes provenant du stockage des déchets organiques. Adopter des méthodes de compostage aérobie qui favorisent la décomposition des déchets avec une production minimale d'odeurs fortes. Utiliser des conteneurs fermés pour le stockage des déchets et assurer une collecte régulière pour éviter l'accumulation et la dispersion des odeurs.",
                children: [],
                type: "reponse",
              },
              {
                id: "325",
                value: "Aucunes mesures",
                id_action: 344,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "326",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette action si vous avez mis en place d'autres mesures pour réduire les nuisances olfactives.",
                children: [
                  {
                    id: "327",
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
        id: "329",
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
    id: "330",
    value: "Votre activité est-elle émettrice de nuisances visuelles ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 8, 9, 13, 15, 16, 17, 19, 20, 21, 23, 25, 28, 29,
    ],
    id_action: null,
    information:
      "Cette question vise à déterminer si votre activité génère des nuisances visuelles susceptibles d'affecter vos employés, les communautés avoisinantes ou les deux. Les nuisances visuelles peuvent inclure divers éléments tels que l'apparence des bâtiments et structures, la gestion des déchets visibles, l'organisation des véhicules et équipements, la pollution lumineuse, la signalétique excessive, l'aménagement paysager, les émissions visibles de fumées ou de particules, ainsi que d'autres aspects pouvant nuire à l'esthétique et au bien-être visuel de l'environnement.",
    children: [
      {
        id: "331",
        value: "Oui",
        id_action: 345,
        done: true,
        information: null,
        children: [
          {
            id: "332",
            value: "Si oui, lesquelles ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "333",
                value: "Nuisances architecturales",
                id_action: null,
                done: false,
                information:
                  "Les bâtiments et structures peuvent devenir une source de nuisances visuelles si leur intégration paysagère est insuffisante, s'ils sont dégradés ou si des graffitis non maîtrisés sont présents.",
                children: [],
                type: "reponse",
              },
              {
                id: "334",
                value: "Nuisances liées à la gestion des déchets",
                id_action: null,
                done: false,
                information:
                  "Le stockage inapproprié des déchets peut entraîner la diffusion d'odeurs désagréables et créer un environnement visuellement peu attrayant.",
                children: [],
                type: "reponse",
              },
              {
                id: "335",
                value: "Nuisances liées aux véhicules/équipements industriels",
                id_action: null,
                done: false,
                information:
                  "Une organisation inefficace du stationnement ou des équipements industriels non dissimulés peuvent nuire à l'apparence générale de l'environnement.",
                children: [],
                type: "reponse",
              },
              {
                id: "336",
                value: "Pollution lumineuse",
                id_action: null,
                done: false,
                information:
                  "La pollution lumineuse nocturne ou l'utilisation de lumières clignotantes ou à forte intensité peuvent perturber l'esthétique et le confort visuel.",
                children: [],
                type: "reponse",
              },
              {
                id: "337",
                value: "Signalisation et affichage publicitaire",
                id_action: null,
                done: false,
                information:
                  "Un excès de panneaux ou la présence de graffitis non maîtrisés peuvent dégrader l'apparence visuelle des lieux.",
                children: [],
                type: "reponse",
              },
              {
                id: "338",
                value: "Mauvais aménagement paysager",
                id_action: null,
                done: false,
                information:
                  "L'absence de végétation ou un entretien insuffisant des espaces verts peuvent nuire à l'esthétique et au bien-être visuel.",
                children: [],
                type: "reponse",
              },
              {
                id: "339",
                value: "Nuisances visuelles liées aux activités de production",
                id_action: null,
                done: false,
                information:
                  "Les émissions visibles de fumées, vapeurs ou particules issues des activités de production peuvent affecter l'apparence visuelle et la qualité de l'environnement.",
                children: [],
                type: "reponse",
              },
              {
                id: "340",
                value: "Nuisances des infrastructures temporaires",
                id_action: null,
                done: false,
                information:
                  "Les chantiers non conformes ou les structures temporaires non esthétiques peuvent créer un impact visuel négatif.",
                children: [],
                type: "reponse",
              },
              {
                id: "341",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information:
                  "Si votre activité dégage des nuisances visuelles provenant d'autres sources, veuillez préciser les sources et le type de nuisances créées.",
                children: [
                  {
                    id: "342",
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
            id: "344",
            value:
              "Quelles mesures avez-vous mises en place pour réduire ces nuisances visuelles ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "345",
                value: "Adoption de normes architecturales adaptées",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si vous avez adopté des normes architecturales pour améliorer l'intégration paysagère des bâtiments et structures.\n \nExemple :\n\nIntégrer des éléments naturels tels que des murs végétalisés ou des toitures vertes pour améliorer l'esthétique des bâtiments et favoriser une meilleure intégration paysagère.",
                children: [],
                type: "reponse",
              },
              {
                id: "346",
                value: "Gestion des déchets visibles",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si vous avez mis en place des procédures de gestion et d'élimination des déchets visibles.\n \nMettre en place des procédures de gestion des déchets permet de minimiser les impacts visuels des déchets visibles et de maintenir un environnement propre et esthétique.\n\nExemple :\n\nInstaller des conteneurs fermés pour le tri sélectif des déchets et assurer une collecte régulière pour éviter l'accumulation et la dispersion des déchets visibles.",
                children: [],
                type: "reponse",
              },
              {
                id: "347",
                value: "Camouflage des véhicules et équipements industriels",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si vous avez organisé et camouflé efficacement les stationnements et équipements industriels.\n \nOrganiser et camoufler les stationnements et équipements industriels permet de réduire leur impact visuel et de maintenir un environnement esthétique.\n\nExemple :\n\nUtiliser des abris pour véhicules et camoufler les équipements industriels avec des matériaux ou des structures esthétiques afin de les rendre moins visibles.",
                children: [],
                type: "reponse",
              },
              {
                id: "348",
                value: "Réduction de la pollution lumineuse",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si vous avez réduit la pollution lumineuse ou si vous avez mis en œuvre des systèmes d'éclairage qui réduisent la pollution lumineuse, notamment en contrôlant l'intensité, la direction des lumières et en éteignant les éclairages inutiles, surtout durant la nuit.\nCela comprend également la réduction de l'utilisation des enseignes lumineuses permettant de réduire les nuisances visuelles et de maintenir un environnement visuel harmonieux.\n\nExemple :\n\nLimiter l'emploi, la taille et la luminosité des enseignes lumineuses et choisir des designs qui complètent l'architecture locale plutôt que de la dominer.\nInstaller des luminaires équipés de capteurs de mouvement et de minuteries pour éteindre automatiquement les éclairages lorsqu'ils ne sont pas nécessaires, et utiliser des ampoules LED à faible intensité pour minimiser la pollution lumineuse.\nRéduire la pollution lumineuse permet de minimiser les impacts visuels des lumières excessives et de protéger la faune nocturne.",
                children: [],
                type: "reponse",
              },
              {
                id: "349",
                value:
                  "Régulation de la signalisation et de l'affichage publicitaire",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si vous avez régulé la signalétique et les affichages pour minimiser les excès et les impacts visuels négatifs.\n \nRéguler la signalétique et les affichages permet de maintenir un environnement visuel harmonieux et de réduire les nuisances visuelles.\n\nExemple :\n\nLimiter le nombre de panneaux publicitaires sur les façades des bâtiments et choisir des designs sobres et harmonieux qui s'intègrent bien dans le paysage environnant.",
                children: [],
                type: "reponse",
              },
              {
                id: "350",
                value: "Aménagement paysager",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si vous avez aménagé le paysage avec une végétation adéquate et entretenu régulièrement les espaces verts. \n \nAménager le paysage avec une végétation adéquate permet de réduire les impacts visuels des structures et de maintenir un environnement esthétique.\n\nExemple :\n\nPlanter des arbres et des arbustes autour des bâtiments et des espaces de stationnement et assurer un entretien régulier pour maintenir une apparence soignée et attrayante.",
                children: [],
                type: "reponse",
              },
              {
                id: "351",
                value: "Filtration des émissions",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si vous avez installé des systèmes de filtration et de traitement pour réduire les émissions visibles de fumées, vapeurs ou particules.\n \nInstaller des systèmes de filtration et de traitement permet de capturer et d'éliminer les polluants visibles avant qu'ils ne soient libérés dans l'atmosphère.",
                children: [],
                type: "reponse",
              },
              {
                id: "352",
                value: "Gestion des infrastructures temporaires",
                id_action: null,
                done: false,
                information:
                  "Sélectionnez cette option si vous avez mis en place des mesures pour gérer les chantiers de construction et les infrastructures temporaires afin de minimiser leur impact visuel.\n \nGérer efficacement ces aspects permet de réduire les nuisances visuelles temporaires et de maintenir un environnement esthétique.\n\nExemple :\n\nUtiliser des bâches de camouflage pour couvrir les structures temporaires sur les chantiers et assurer un entretien régulier des sites pour éviter les accumulations de matériaux visibles.",
                children: [],
                type: "reponse",
              },
              {
                id: "353",
                value: "Aucunes mesures",
                id_action: 345,
                done: false,
                information:
                  "Sélectionnez cette option si vous n'avez mis en place aucune mesure pour réduire les nuisances visuelles émises par votre entreprise.",
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
        id: "354",
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
    id: "355",
    value:
      "Votre entreprise (dirigeant(s) et/ou employés) a-t-elle déjà participé à une formation à la transition énergétique, au bilan carbone ou à d'autres sujets liés à la lutte/l'adaptation au changement climatique ?",
    ids_secteurs: [1, 2, 3, 4, 5, 6, 8, 9, 13, 16, 18, 19, 26, 27, 28, 29],
    id_action: null,
    information: null,
    children: [
      {
        id: "356",
        value: "Oui",
        id_action: 400,
        done: true,
        information:
          "Sélectionnez cette option si votre entreprise, ou vous en tant que dirigeant, avez déjà participé à une formation sur la transition énergétique, au bilan carbone, ou à d'autres sujets liés à la gestion environnementale.\n \n Cela inclut des sessions de formation, des ateliers et des MOOC visant à améliorer la compréhension et la gestion liée au changement climatique.",
        children: [],
        type: "reponse",
      },
      {
        id: "357",
        value: "Non",
        id_action: 400,
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
    id: "358",
    value:
      "Votre entreprise communique-t-elle sur la consommation responsable ?",
    ids_secteurs: [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
    id_action: null,
    information: null,
    children: [
      {
        id: "359",
        value: "Oui",
        id_action: 346,
        done: true,
        information: null,
        children: [
          {
            id: "360",
            value: "Quelles actions avez-vous mises en place ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "361",
                value:
                  "Campagnes publicitaires ou collaboration avec des influenceurs",
                id_action: null,
                done: false,
                information:
                  "Mise en place de campagnes publicitaires simples axées sur la consommation responsable ou collaboration avec des influenceurs locaux pour promouvoir des messages durables.\n\nExemple : Créer des annonces sur les réseaux sociaux mettant en avant les produits écoresponsables de l'entreprise ou collaborer avec un influenceur local qui partage des valeurs similaires pour atteindre un public plus large.",
                children: [],
                type: "reponse",
              },
              {
                id: "362",
                value: "Communication éducative ou ressources en ligne",
                id_action: null,
                done: false,
                information:
                  "Diffusion d'informations éducatives via le site web de l'entreprise, les réseaux sociaux ou l'envoi de newsletters pour encourager des choix de consommation responsables.\n\nExemple : Publier des articles de blog sur des pratiques de consommation durable, partager des conseils écologiques sur Instagram ou envoyer une newsletter mensuelle avec des astuces pour réduire les déchets.",
                children: [],
                type: "reponse",
              },
              {
                id: "363",
                value:
                  "Événements éducatifs ou sensibilisation en points de vente",
                id_action: null,
                done: false,
                information:
                  "Organisation de petits événements locaux ou mise en place de supports éducatifs directement dans les points de vente pour informer les clients sur la consommation responsable.\n\nExemple : Organiser une journée portes ouvertes avec des démonstrations sur le recyclage ou installer des affiches informatives dans le magasin pour sensibiliser les clients à l'importance de choisir des produits durables.",
                children: [],
                type: "reponse",
              },
              {
                id: "364",
                value: "Partenariats avec des organisations environnementales",
                id_action: null,
                done: false,
                information:
                  "Collaboration avec des associations locales ou des organisations environnementales pour diffuser des messages de sensibilisation et participer à des initiatives communes.\n\nExemple : Travailler avec une ONG locale pour organiser une campagne de nettoyage communautaire ou sponsoriser des événements écologiques pour montrer l'engagement de l'entreprise envers la durabilité.",
                children: [],
                type: "reponse",
              },
              {
                id: "365",
                value: "Formation interne des employés",
                id_action: null,
                done: false,
                information:
                  "Formation des employés sur les pratiques durables afin qu'ils puissent mieux conseiller et informer les clients sur les choix de consommation responsable.\n\nExemple : Organiser des sessions de formation internes sur l'utilisation de produits écologiques ou sur les avantages de la consommation responsable, permettant aux employés de partager ces connaissances avec les clients.",
                children: [],
                type: "reponse",
              },
              {
                id: "366",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "367",
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
        id: "369",
        value: "Non",
        id_action: 346,
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
      "Votre entreprise communique-t-elle ses pratiques durables sur ses plateformes de communication ?",
    ids_secteurs: [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
    id_action: null,
    information: null,
    children: [
      {
        id: "371",
        value: "Oui",
        id_action: 347,
        done: true,
        information: null,
        children: [
          {
            id: "372",
            value: "Sur quelles plateformes communiquez-vous ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "373",
                value: "Site web de l'entreprise",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "374",
                value: "Réseaux sociaux",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "375",
                value: "Newsletters",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "376",
                value: "Blogs d'entreprise",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "377",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "378",
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
        id: "377",
        value: "Non",
        id_action: 347,
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
    id: "380",
    value:
      "Avez-vous obtenu des certifications/labellisations écologiques pour certains de vos produits/services ?",
    ids_secteurs: [1, 4, 6, 7, 10, 11, 12, 14, 20, 22, 23, 24, 25, 26, 27, 28],
    id_action: null,
    information: null,
    children: [
      {
        id: "381",
        value: "Oui",
        id_action: 335,
        done: true,
        information: null,
        children: [
          {
            id: "382",
            value:
              "Quelle part de vos produits/services possède une certification/labellisation écologique ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "383",
                value: "Plus de 75%",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "384",
                value: "Entre 51% et 75%",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "385",
                value: "Entre 26% et 50%",
                id_action: null,
                done: false,
                information: null,
                children: [],
                type: "reponse",
              },
              {
                id: "386",
                value: "Entre 1% et 25%",
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
        ],
        type: "reponse",
      },
      {
        id: "387",
        value: "Non",
        id_action: 335,
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
    id: "388",
    value:
      "Votre entreprise met-elle en place des actions pour promouvoir son savoir-faire et valoriser son patrimoine immatériel ?",
    ids_secteurs: [
      1, 2, 3, 4, 5, 8, 9, 13, 15, 16, 17, 19, 20, 21, 23, 25, 28, 29,
    ],
    id_action: null,
    information:
      "Cette question vise à évaluer les initiatives de votre entreprise pour mettre en avant son expertise et renforcer ses relations avec ses parties prenantes à travers divers formats d'événements et de contenus informatifs.",
    children: [
      {
        id: "389",
        value: "Oui",
        id_action: 348,
        done: true,
        information: null,
        children: [
          {
            id: "390",
            value: "Quelles actions avez-vous mises en place ?",
            id_action: null,
            information: null,
            children: [
              {
                id: "391",
                value: "Portes ouvertes",
                id_action: null,
                done: false,
                information:
                  "Organisation de journées portes ouvertes permettant aux clients, partenaires et parties prenantes de découvrir les installations, les processus de production et le savoir-faire de l'entreprise.\n\nExemple : Inviter les clients et partenaires à une journée spéciale pour visiter l'atelier de fabrication, observer les techniques artisanales utilisées et échanger directement avec les employés sur les méthodes durables de production.",
                children: [
                  {
                    id: "392",
                    value:
                      "Veuillez préciser le nombre de portes ouvertes organisées dans vos locaux au cours de 12 derniers mois :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [238],
                  },
                ],
                type: "reponse",
              },
              {
                id: "394",
                value: "Ateliers pratiques et démonstration",
                id_action: null,
                done: false,
                information:
                  "Mise en place d'ateliers pratiques ou de démonstrations pour partager des compétences spécifiques et illustrer le savoir-faire unique de l'entreprise.\n\nExemple : Organiser des sessions de formation sur l'utilisation optimale des produits de l'entreprise ou réaliser des démonstrations en direct des techniques de fabrication artisanale lors d'événements locaux.",
                children: [
                  {
                    id: "395",
                    value:
                      "Veuillez préciser le nombre d'ateliers pratiques et/ou démonstration organisées au cours de 12 derniers mois :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [239],
                  },
                ],
                type: "reponse",
              },
              {
                id: "397",
                value: "Conférences et séminaires",
                id_action: null,
                done: false,
                information:
                  "Organisation de conférences ou de séminaires sur des sujets liés à l'expertise de l'entreprise et à son domaine d'activité, visant à partager des connaissances et à renforcer la réputation de l'entreprise.\n\nExemple : Tenir une conférence annuelle sur les innovations dans votre secteur d'activité, en invitant des experts de l'industrie à partager leurs connaissances et à discuter des tendances émergentes.",
                children: [
                  {
                    id: "398",
                    value:
                      "Veuillez préciser le nombre de conférences/séminaires organisés ou durant lequel l'entreprise est intervenue au cours de 12 derniers mois :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [240],
                  },
                ],
                type: "reponse",
              },
              {
                id: "400",
                value: "Webinaires et sessions en ligne",
                id_action: null,
                done: false,
                information:
                  "Organisation de webinaires interactifs et de sessions en ligne pour diffuser des connaissances, engager les participants et promouvoir le savoir-faire de l'entreprise à un public plus large.\n\nExemple : Héberger un webinaire mensuel présentant de nouvelles techniques de production durable ou des études de cas sur les succès de l'entreprise, permettant ainsi d'atteindre des participants au-delà de la localisation géographique de l'entreprise.",
                children: [
                  {
                    id: "401",
                    value:
                      "Veuillez préciser le nombre de webinaires ou sessions en lignes organisés ou durant lequel l'entreprise est intervenue au cours de 12 derniers mois :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [241],
                  },
                ],
                type: "reponse",
              },
              {
                id: "403",
                value: "Partenariats avec des institutions éducatives",
                id_action: null,
                done: false,
                information:
                  "Établissement de collaborations avec des écoles, universités ou centres de formation pour partager le savoir-faire de l'entreprise, offrir des stages et soutenir l'éducation dans le domaine d'activité de l'entreprise.\n\nExemple : Collaborer avec une école de commerce locale pour offrir des stages pratiques ou des projets de fin d'études aux étudiants, permettant ainsi de transmettre les compétences et les connaissances spécifiques de l'entreprise.",
                children: [
                  {
                    id: "404",
                    value:
                      "Veuillez préciser le nombre de partenariats avec des institutions éducatives au cours de 12 derniers mois :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [242],
                  },
                ],
                type: "reponse",
              },
              {
                id: "406",
                value: "Publication de contenus spécialisés",
                id_action: null,
                done: false,
                information:
                  "Création et diffusion de contenus informatifs et spécialisés tels que des articles, des études de cas, des livres blancs, des vidéos explicatives ou des guides techniques sur le site web de l'entreprise et sur d'autres canaux de communication (print, plateformes en ligne, etc.).\n\nExemple : Publier des articles détaillés sur les processus de fabrication innovants de l'entreprise dans le blog de son site web, créer des vidéos tutoriels montrant les meilleures pratiques de durabilité ou diffuser des infographies explicatives sur les bénéfices des produits écoresponsables.",
                children: [
                  {
                    id: "407",
                    value:
                      "Veuillez préciser le nombre de publications de contenus spécialisés publiés au cours de 12 derniers mois :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [243],
                  },
                ],
                type: "reponse",
              },
              {
                id: "409",
                value:
                  "Participation à des salons professionnels et expositions",
                id_action: null,
                done: false,
                information:
                  "Participation à des salons professionnels, expositions ou foires commerciales pour présenter le savoir-faire de l'entreprise, rencontrer de nouveaux clients et partenaires et renforcer la visibilité de l'entreprise sur le marché.\n\nExemple : Exposer les produits et les techniques de fabrication de l'entreprise lors d'un salon industriel local, organiser des démonstrations en direct pour attirer l'attention des visiteurs et établir des contacts avec des partenaires potentiels.",
                children: [
                  {
                    id: "410",
                    value:
                      "Veuillez préciser le nombre de fois où vous avez participé à des salons professionnels au cours des 12 derniers mois :",
                    id_action: null,
                    information: null,
                    children: [],
                    type: "question",
                    inputType: "numeric",
                    id_kpis: [244],
                  },
                ],
                type: "reponse",
              },
              {
                id: "412",
                value: "Autre(s)",
                id_action: null,
                done: false,
                information: null,
                children: [
                  {
                    id: "413",
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
        id: "415",
        value: "Non",
        id_action: 348,
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
