# Doddee
## Stack technique
- Frontend : Next.js 15 (App Router), TypeScript, Tailwind CSS
- UI Components : Shadcn/ui, Radix UI
- Authentification : Supabase Auth
- Base de données : Supabase (PostgreSQL)
- Paiements : Stripe
- Cartes : Leaflet + React-Leaflet
- Graphiques : Recharts
- Animations : Framer Motion
- Formulaires : React Hook Form + Zod

## Architecture des dossiers
```
doddee-web-remake/
├── app/                    # Pages et API routes (App Router)
├── components/             # Composants React réutilisables
├── lib/                   # Utilitaires et configurations
├── hooks/                 # Hooks React personnalisés
├── types/                 # Types TypeScript
└── utils/                 # Fonctions utilitaires
```
## Prérequis
- Node.js 18+
- npm ou yarn
- Compte Supabase
- Compte Stripe (pour les paiements)

## Variables d'environnement
Créer un fichier .env.local :
### Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

### Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

### App
NEXT_PUBLIC_APP_NAME=Doddee
NEXT_PUBLIC_APP_ICON=leaf
NEXT_PUBLIC_APP_METADATA_TITLE=Doddee - Plateforme ESG
NEXT_PUBLIC_APP_METADATA_DESCRIPTION=Votre plateforme d'accompagnement RSE

## Structure du projet
### App Router (app/)
```
app/
├── globals.css            # Styles globaux
├── layout.tsx            # Layout racine
├── page.tsx              # Page d'accueil (redirect vers dashboard)
├── api/                  # API Routes
│   ├── nps/             # Gestion NPS
│   └── stripe/          # Webhooks et checkout Stripe
├── auth/                # Pages d'authentification
├── dashboard/           # Pages du tableau de bord
├── ecoprofile/         # Profils publics des entreprises
├── form/               # Formulaires publics
├── legal/              # Pages légales
└── pricing/            # Page de tarification
```
### Composants (components/)
```
components/
├── auth/               # Composants d'authentification
├── charts/            # Graphiques et visualisations
├── common/            # Composants communs
├── dashboard/         # Composants du dashboard
├── forms/             # Gestion de formulaires
├── pricing/           # Composants de tarification
├── reports/           # Génération de rapports PDF
├── sidebar/           # Navigation latérale
├── subscription/      # Gestion des abonnements
└── ui/                # Composants UI de base (shadcn/ui)
```

### Bibliothèques (lib/)
```
lib/
├── auth/              # Gestion de l'authentification
├── form-data/         # Données des formulaires ESG
├── payments/          # Intégration Stripe
├── subscription/      # Logique des abonnements
└── supabase/          # Client et requêtes Supabase
```

## Fonctionnalités
1. Authentification
Fichiers principaux :
- app/auth/ - Pages d'authentification
- components/auth/ - Composants d'authentification
- lib/auth/ - Logique d'authentification

Fonctionnalités :
- Inscription/connexion par email/mot de passe
- Authentification OAuth (Google)
- Réinitialisation de mot de passe
- Middleware de protection des routes
- Gestion des profils utilisateur

2. Dashboard ESG
Fichiers principaux :
- app/dashboard/ - Pages du tableau de bord
- components/dashboard/ - Composants du dashboard

Fonctionnalités :
- Vue d'ensemble des métriques ESG
- Graphiques en secteurs et radar
- Indicateurs de performance (KPIs)
- Actions en cours et à venir
- Score NPS

3. Questionnaires ESG
Fichiers principaux :
- app/dashboard/questionnaire/ - Pages des questionnaires
- lib/form-data/esg/ - Données des questionnaires

Catégories :
- Environnement : Impact environnemental
- Social : Aspects sociaux et RH
- Gouvernance : Gouvernance d'entreprise

4. Gestion des actions
Fichiers principaux :
- app/dashboard/actions/ - Page de gestion des actions
- components/dashboard/actions/ - Composants des actions

Fonctionnalités :
- Catalogue d'actions RSE
- Sélection et planification d'actions
- Suivi des deadlines
- Système de justification avec pièces jointes

5. Plan d'action
Fichiers principaux :
- app/dashboard/action-plan/ - Page du plan d'action
- components/dashboard/action-plan/ - Timeline des actions

Fonctionnalités :
- Visualisation chronologique des actions
- Gestion des échéances
- Suivi de l'avancement

6. Cours et ressources
Fichiers principaux :
- app/dashboard/courses/ - Page des cours
- components/dashboard/courses/ - Composants pédagogiques

Types de ressources :
- Cours interactifs internes
- Ressources externes
- Contenu multimédia

7. Formulaires personnalisés
Fichiers principaux :
- app/dashboard/forms/ - Gestion des formulaires
- app/form/[publicId]/ - Formulaires publics
- components/dashboard/forms/ - Builder de formulaires

Fonctionnalités :
- Création de formulaires personnalisés
- Partage via URL publique
- Collecte et analyse des réponses

8. Éco-profils publics
Fichiers principaux :
- app/ecoprofile/[id]/ - Profils publics des entreprises
- components/auth/companies-map.tsx - Carte des entreprises

Fonctionnalités :
- Profils publics des entreprises
- Carte interactive des entreprises engagées
- Système de notation NPS public

9. Abonnements et paiements
Fichiers principaux :
- app/dashboard/subscription/ - Gestion des abonnements
- app/pricing/ - Page de tarification
- lib/payments/ - Intégration Stripe

Plans disponibles :
- Gratuit : Fonctionnalités de base
- Eco Profile : Profil public
- Cours : Accès aux formations
- La Totale : Toutes les fonctionnalités

## API et intégrations
Routes API (app/api/)
```
// app/api/nps/route.ts
POST /api/nps
```
- Enregistrement des scores NPS
- Validation IP pour éviter les doublons

```
// app/api/stripe/checkout/route.ts
GET /api/stripe/checkout
```
- Traitement des retours de paiement Stripe
- Mise à jour des abonnements

```
// app/api/stripe/webhook/route.ts
POST /api/stripe/webhook
```
- Webhooks Stripe pour les événements de paiement
- Gestion des changements d'abonnement

## Webhooks Stripe
Événements à écouter :
- checkout.session.completed
- customer.subscription.updated
- customer.subscription.deleted

## Hooks personnalisés
hooks/
- useDebounce: Débounce pour les recherches
- useMobile: Détection mobile
- useUrlStatus: Gestion des messages d'état via URL

## Types TypeScript
types/
- Action, UserAction: Types pour les actions
- FormData: Types pour les formulaires
- UserMoralData: Données utilisateur complètes
- SubscriptionPlan: Plans d'abonnement

Cette documentation couvre les aspects principaux du projet Doddee. Pour des détails spécifiques sur l'implémentation, référez-vous aux commentaires dans le code source.
