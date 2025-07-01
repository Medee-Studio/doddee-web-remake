# Doddee

1. Vu que nous n'avons pas pour le moment la clé pour vérifier les JWT, je l'ai commenté dans le middleware, il faudra le remettre en place pour la prod.
2. La connexion avec google est prête, il ne reste qu'à configurer dans le dashboard Supabase (pas d'accès pour le moment).

# Implémentation

## RE01-1 | Questionnaire d’audit
### Engagement
- Interface intuitive
- Upload de pièces justificatives

### Réalisation


## RE01-2 | Rapports d’audits automatisés
### Engagement
- Création du système de génération
des audits automatisés
- Intégration à la webapp
(graphiques, chiffres, etc…)

### Réalisation

## RE01-3 | Micro learning
### Engagement
- Accès aux cours vidéos structurés par étapes pour faciliter l’apprentissage des utilisateurs

### Réalisation

## RE01-4 | Paiement en ligne
### Engagement
- Intégration d’une solution de payement en ligne sécurisée type Stripe, avec rappel de payements, suivi des abonnements, etc…
### Réalisation

#### 🏗️ Architecture du Système de Paiement

L'implémentation du système de paiement Doddee utilise **Stripe** comme solution de paiement sécurisée avec une architecture hybride supportant deux modèles de souscription :

##### 1. **Modèle d'Abonnement Dual** 
- **Abonnements d'équipe** (`teams` table) : Pour les organisations multi-utilisateurs
- **Abonnements individuels** (`users` table) : Pour les utilisateurs personnels
- Migration transparente entre les deux modèles selon les besoins

##### 2. **Structure de Base de Données** (`lib/supabase/schema.ts`)
```sql
-- Table users avec champs Stripe
users:
  - stripe_customer_id (text, unique)
  - stripe_subscription_id (text, unique) 
  - stripe_product_id (text)
  - plan_name (varchar, default: 'gratuit')
  - subscription_status (varchar, default: 'active')

-- Table teams avec champs Stripe identiques
teams:
  - stripe_customer_id (text, unique)
  - stripe_subscription_id (text, unique)
  - stripe_product_id (text)
  - plan_name (varchar)
  - subscription_status (varchar)
```

#### 💰 Plans d'Abonnement et Tarification

##### Plans Disponibles (`components/subscription/subscription-plans.tsx`)
1. **Gratuit** (0€/mois)
   - Reporting de base
   - Tableau de bord
   - Suivi du plan d'action

2. **Eco Profile** (45€/mois)
   - Toutes les fonctionnalités gratuites
   - Création et gestion de l'éco-profil public
   - Partage des engagements ESG

3. **Cours** (45€/mois)
   - Toutes les fonctionnalités gratuites
   - Accès aux ressources pédagogiques internes
   - Cours vidéo structurés par étapes

4. **La Totale** (90€/mois)
   - Toutes les fonctionnalités premium
   - Éco-profil + Cours + fonctionnalités avancées
   - Support prioritaire

##### Configuration des Prix Stripe
```bash
# Variables d'environnement requises
STRIPE_ECO_PROFILE_PRICE_ID   # Plan Eco Profile (45€/mois)
STRIPE_COURS_PRICE_ID         # Plan Cours (45€/mois) 
STRIPE_LA_TOTALE_PRICE_ID     # Plan La Totale (90€/mois)
```

#### 🔄 Flux de Paiement et Expérience Utilisateur

##### 1. **Processus de Souscription** (`lib/payments/stripe.ts`)
```typescript
// Création de session de checkout Stripe
createUserCheckoutSession() → 
  Validation du plan →
  Création session Stripe →
  Redirection vers Stripe Checkout →
  Confirmation paiement →
  Webhook processing →
  Mise à jour base de données
```

##### 2. **Gestion des Erreurs** (`components/subscription/subscription-plans.tsx:89-102`)
- Messages d'erreur contextuels en français
- Logging détaillé pour debugging
- Fallback gracieux vers plan gratuit
- Interface utilisateur responsive avec états de chargement

##### 3. **Notifications Utilisateur** (`components/subscription/upgrade-notification.tsx`)
- Toast Sonner pour confirmations de paiement
- Notifications d'upgrade requises via URL params
- Messages contextuels selon la fonctionnalité demandée

#### 🔒 Contrôle d'Accès et Paywalls

##### 1. **Système de Protection des Fonctionnalités** (`lib/subscription/utils.ts`)
```typescript
// Configuration des accès par plan
PLAN_FEATURES = {
  'gratuit': { reporting: true, dashboard: true, actionPlan: true },
  'eco-profile': { ...gratuit, ecoProfile: true },
  'cours': { ...gratuit, courses: true },
  'la-totale': { reporting: true, dashboard: true, actionPlan: true, ecoProfile: true, courses: true }
}

// Routes protégées
PROTECTED_ROUTES = {
  '/dashboard/eco-profile': ['eco-profile', 'la-totale'],
  '/dashboard/courses': ['cours', 'la-totale']
}
```

##### 2. **Composants de Restriction d'Accès** (`components/subscription/paywall.tsx`)
- **Paywall Component** : Interface élégante pour fonctionnalités premium
- **FeatureGuard Component** : Contrôle conditionnel d'affichage
- Design cohérent avec système de design shadcn/ui
- Redirection intelligente vers page d'abonnement

##### 3. **Middleware de Protection** (`middleware.ts`)
- Vérification d'accès au niveau des routes
- Redirection automatique avec paramètres contextuels
- Integration avec authentification Supabase

#### 🎯 Intégration Stripe Avancée

##### 1. **Gestion des Webhooks** (`app/api/stripe/webhook/route.ts`)
```typescript
// Événements traités
- checkout.session.completed    → Finalisation abonnement
- customer.subscription.updated → Mise à jour statut
- customer.subscription.deleted → Annulation abonnement

// Processing sécurisé
- Vérification signature Stripe
- Distinction abonnements équipe/utilisateur via metadata
- Mise à jour base de données en temps réel
```

##### 2. **Portail Client Stripe** (`lib/payments/stripe.ts:298-310`)
- Configuration automatique du portail billing
- Gestion self-service des abonnements
- Mise à jour méthodes de paiement
- Historique des factures
- Annulation d'abonnement avec options de rétention

##### 3. **Session de Checkout Personnalisée** (`lib/payments/stripe.ts:200-296`)
- Metadata enrichie pour tracking interne
- Support des codes promotionnels
- URLs de retour contextuelles avec paramètres de succès/échec
- Gestion des clients existants vs nouveaux

#### 🛡️ Sécurité et Conformité

##### 1. **Sécurisation des Paiements**
- Chiffrement des données sensibles via HTTPS
- Validation des signatures webhook Stripe
- Séparation des clés API (test/production)
- Aucun stockage de données de carte bancaire côté application

##### 2. **Variables d'Environnement Sécurisées**
```bash
STRIPE_SECRET_KEY          # Clé API secrète (serveur uniquement)
STRIPE_WEBHOOK_SECRET      # Secret de validation webhook
BASE_URL                   # URL de redirection sécurisée
```

##### 3. **Gestion des Sessions** (`lib/payments/actions.ts`)
- Server Actions Next.js pour sécurité maximale
- Validation côté serveur des paramètres de paiement
- Logging détaillé pour audit et debugging
- Protection CSRF intégrée

#### 📊 Suivi et Analytics

##### 1. **Monitoring des Abonnements**
- Status en temps réel via webhooks Stripe
- Historique des changements d'abonnement
- Métriques de conversion et churn
- Rapports financiers via dashboard Stripe

##### 2. **Gestion des États d'Abonnement**
```typescript
// États supportés
- active     → Abonnement actif et payé
- trialing   → Période d'essai (supprimée récemment)
- canceled   → Abonnement annulé
- unpaid     → Échec de paiement
```

#### 🔧 Configuration et Déploiement

##### 1. **Variables d'Environnement Requises**
```bash
# Production Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_ECO_PROFILE_PRICE_ID=price_...
STRIPE_COURS_PRICE_ID=price_...
STRIPE_LA_TOTALE_PRICE_ID=price_...
BASE_URL=https://app.doddee.com
```

##### 2. **Configuration Stripe Dashboard**
- Création des produits et prix récurrents
- Configuration des webhooks endpoints
- Paramétrage du portail client
- Tests avec cartes de test

#### ✅ Conformité aux Exigences

L'implémentation répond intégralement aux engagements du cahier des charges :

✅ **Solution de paiement sécurisée** : Integration Stripe avec chiffrement bout-en-bout  
✅ **Suivi des abonnements** : Dashboard utilisateur + portail client self-service  
✅ **Rappels de paiement** : Gestion automatique via Stripe (emails, retry logic)  
✅ **Architecture scalable** : Support équipes + utilisateurs individuels  
✅ **Interface intuitive** : UX/UI cohérente avec design system de l'application  
✅ **Gestion des erreurs** : Feedback utilisateur complet en français  
✅ **Webhooks temps réel** : Synchronisation instantanée des statuts d'abonnement  

#### 🎯 Valeur Ajoutée

- **Flexibilité** : Architecture hybride équipe/utilisateur selon besoins business
- **Sécurité** : Conformité PCI DSS via Stripe, aucune donnée sensible stockée
- **UX Premium** : Paywalls élégants et notifications contextuelles
- **Maintenabilité** : Code modulaire avec separation of concerns claire
- **Évolutivité** : Structure extensible pour futurs plans et fonctionnalités

## RE01-5 | Création et gestion du compte
### Engagement
- Interface intuitive pour la création de comptes d’entreprise
- Possibililité de gérér son profil depuis le tableau de bord utilisateur
- Base de données sécurisée (Supabase)

### Réalisation


## RE01-6 | Calendrier et roadmap
### Engagement
- Calendrier intégré pour planifier les actions RSE et suivre ses échéances

### Réalisation


## RE01-7 | Dashboard
### Engagement
- Tableau de bord affichant les progrés RSE, le score NPS, les
objectifs atteints, les KPIs et des données globales d’évolution
- Profil écoresponsable public pour partager les engagements, les réalisations et les évolutions de l’entreprise

### Réalisation

## RE01-8 | Score NPS
### Engagement
- Collecte et intégration sur la plateforme du score NPS pour mesurer la satifaction et la fidélité des clients

### Réalisation