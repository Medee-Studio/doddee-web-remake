
// Static data
export const labels = [
  "1 % for the Planet", "Approvisionnement Responsable (UEBT)", "Artisan Socialement Responsable",
  "B Corp", "Bas Carbone", "Bâtiment BREEAM", "Bâtiment HQE", "Bâtiment LEED", "Bee Friendly",
  "Biodiversity Progress (LUCIE)", "Carbon Trust Standard", "Certificat EcoEntreprise",
  "Choose My Company", "Clef Verte", "Climate Neutral Certified", "Coopératives So Responsables",
  "Coq Vert", "Cradle to Cradle", "Diversité (AFNOR)", "Ecodynamic Company", "Écogîte",
  "Écotable", "EcoVadis", "Égalité (AFNOR)", "Empl'itude", "Engagé RSE",
  "Entreprise / Territoire Engagé pour la Nature", "Entreprise du Patrimoine Vivant",
  "Entreprise socialement responsable", "EnVol (Agence LUCIE)", "ESS ADN", "Ethibel",
  "European Plastics Pact", "Food Index for Good", "France Terre Textile", "Gîtes Panda",
  "GLOBALG.A.P", "Great Place to Work France", "Green Key", "Greenfin", "Greentech Innovation",
  "Haute Valeur Environnementale", "Human for Client", "Initiative Remarquable", "ISO 14001",
  "ISO 50001", "ISO 9001", "ISR", "Le Lion Bleu", "LEAF Marque", "LUCIE 26000", "LUCIE Positive",
  "LUCIE Progress", "Made in Respect", "Mon coiffeur s'engage", "Numérique Responsable (Lucie)",
  "Optic for Good", "Pêche Durable", "PME+", "Positive Company", "Prestadd", "Print'Ethic",
  "Production 100 % Locale", "Proprement Engagés", "Responsabilité et Santé", "Responsible Care",
  "RGE", "RSE Agences Actives", "RSE de la FNB", "RSEi", "SBTI", "SCOP BTP RSE", "SloWeAre",
  "Solar Impulse", "Startup Engagée", "Terra Vitis", "Territoires Engagés pour la Nature",
  "THQSE", "TopSite", "Tourisme & Handicap", "Tourisme Équitable", "United Nations Global Compact",
  "Vergers Écoresponsables", "Vignerons Engagés", "Votre Institut Responsable pour une Beauté Durable",
  "WFTO", "World's Most Ethical Companies", "Zéro Déforestation"
];

export const secteurs = [
  { value: "1", label: "Alimentation, agriculture et élevage" },
  { value: "2", label: "Arts, cinéma, culture" },
  { value: "4", label: "Audit, gestion, conseil, droit" },
  { value: "5", label: "Automobiles, véhicules" },
  { value: "6", label: "Banque, assurance, finance, fintech" },
  { value: "7", label: "Commerce, distribution, négoce" },
  { value: "8", label: "Communication, marketing et audiovisuel" },
  { value: "9", label: "Construction, travaux publics, immobilier, architecture" },
  { value: "10", label: "Cosmétique, hygiène, bien-être" },
  { value: "11", label: "Digital, internet, logiciels" },
  { value: "12", label: "Édition, médias" },
  { value: "13", label: "Enseignement, formation" },
];

export const sous_secteurs: { [key: string]: { value: string; label: string }[] } = {
  "1": [
              { value: "1", label: "Agriculture & production agricole" },
              { value: "2", label: "Agriculture urbaine" },
              { value: "3", label: "Alimentation pour animaux" },
              { value: "4", label: "Bières & brasseries" },
              { value: "5", label: "Boissons, sodas, jus & fontaines" },
              { value: "6", label: "Cafés, infusions & herboristerie" },
              { value: "7", label: "Céréales & produits céréaliers" },
              { value: "8", label: "Commerce alimentaire" },
              { value: "9", label: "Fruits, légumes & fruits secs" },
              { value: "10", label: "Grossiste alimentaire" },
  ],
  "2": [
              { value: "16", label: "Centres culturels" },
              { value: "17", label: "Librairies & librairies en ligne" },
              { value: "18", label: "Salles de spectacle & théâtres" },
            ],
  "4": [
              { value: "20", label: "Cabinet comptable et d'audit" },
              { value: "21", label: "Cabinet de conseil" },
              { value: "22", label: "Cabinet juridique" },
            ],
  "5": [
              { value: "23", label: "Concession automobile, réparation véhicule et pneumatiques" },
              { value: "24", label: "Deux-roues & véhicules légers" },
              { value: "25", label: "Location & vente de bateaux" },
              { value: "26", label: "Location & vente de scooters et motos" },
              { value: "27", label: "Location & vente de vélos et trottinettes" },
  ],
  "6": [
              { value: "32", label: "Agent général d'assurance" },
              { value: "33", label: "Assurance & Mutuelle" },
              { value: "34", label: "Courtage bancaire et d'assurance" },
              { value: "35", label: "Plateforme de financement" },
            ],
  "7": [
              { value: "36", label: "Centrale d'achat et de référencement" },
              { value: "37", label: "Commerce divers" },
              { value: "38", label: "Gestion de distributeurs automatiques" },
              { value: "39", label: "Import-export & négoce" },
              { value: "40", label: "Marketplace & plateforme de e-commerce" },
  ],
  "8": [
              { value: "42", label: "Agence de communication & marketing" },
              { value: "43", label: "Agence de relation publique et de lobbying" },
              { value: "44", label: "Agence de relations presse & régies publicitaires" },
              { value: "45", label: "Objets promotionnels & cadeaux d'entreprise" },
              { value: "46", label: "Production audiovisuelle & graphisme" },
            ],
  "9": [
              { value: "47", label: "Agent immobilier" },
              { value: "48", label: "Aménagement & entretien d'extérieur" },
              { value: "49", label: "Aménagement & entretien d'intérieur" },
              { value: "50", label: "Bureau d'étude immobilier" },
              { value: "51", label: "Construction & Travaux publics" },
  ],
  "10": [
              { value: "58", label: "Coiffeurs & Barbiers" },
              { value: "59", label: "Cosmétiques, soins & parfums" },
              { value: "60", label: "Instituts de beauté & de bien-être" },
              { value: "61", label: "Produits d'hygiène" },
            ],
  "11": [
              { value: "62", label: "Agence de création digitale & SSII" },
              { value: "63", label: "Blogs & sites internet" },
              { value: "64", label: "Plateformes, logiciels et applications" },
              { value: "65", label: "Service IT & E-commerce numérique" },
            ],
  "12": [
              { value: "66", label: "Édition" },
              { value: "67", label: "Médias numériques & papiers" },
            ],
  "13": [
              { value: "68", label: "Organismes de formation" },
              { value: "69", label: "Universités & grandes écoles" },
            ],
};

export const fonctions = [
          { value: "Directeur général", label: "Directeur général" },
          { value: "Président", label: "Président" },
          { value: "Salarié", label: "Salarié" },
];

export const categoryQuestions = [
  { name: "flotte_vehicule" as const, label: "Avez-vous une flotte de véhicules ?" },
  { name: "plus_de_un_salarie" as const, label: "Votre entreprise compte-t-elle d'autres salariés que le dirigeant ?" },
  { name: "locaux" as const, label: "Êtes-vous propriétaires de vos locaux ?" },
  { name: "parc_informatique" as const, label: "Avez-vous un parc informatique ?" },
  { name: "site_web" as const, label: "Votre entreprise a-t-elle un site web ?" },
  { name: "site_de_production" as const, label: "Avez-vous un site de production ?" },
  { name: "approvisionnement" as const, label: "Votre entreprise s'approvisionne-t-elle en matières premières ou produits ?" },
  { name: "distribution" as const, label: "Votre entreprise assure-t-elle la distribution de ses produits ?" },
  { name: "stock" as const, label: "Gérez-vous des stocks ?" },
];

export const steps = [
  { id: 1, title: "Votre entreprise", description: "Précisez les informations de votre entreprise" },
  { id: 2, title: "Vos pratiques actuelles", description: "Indiquez nous vos labels et certifications" },
  { id: 3, title: "Secteur et fonction", description: "Précisez votre secteur d'activité et votre rôle dans l'entreprise" },
  { id: 4, title: "Votre catégorie", description: "Caractéristiques de votre entreprise" },
];
