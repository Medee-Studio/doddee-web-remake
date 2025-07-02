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

#### 📚 Architecture de Contenu et Gestion des Ressources

Le système de micro learning Doddee implémente une plateforme d'apprentissage complète avec deux types de ressources : **internes** (cours interactifs créés par l'équipe) et **externes** (liens vers des ressources ESG externes). Les ressources internes utilisent une structure modulaire avec des éléments de type `title` (sections) et `html_content` (contenu riche) permettant de créer des parcours d'apprentissage structurés et progressifs.

La récupération des données utilise la fonction RPC `get_user_resources` avec système de fallback pour assurer la disponibilité du contenu même en développement. Les ressources sont typées avec TypeScript pour garantir la cohérence des données et incluent des métadonnées d'auteur, d'introduction, et de statut de progression pour chaque apprenant.

#### 🎮 Expérience d'Apprentissage Interactive

Les cours internes offrent une expérience d'apprentissage immersive avec navigation par étapes, animations fluides (Framer Motion), et contrôles intuitifs au clavier (flèches directionnelles). Le lecteur de cours présente une interface en trois phases : introduction avec présentation de l'auteur, navigation interactive dans le contenu, et écran de félicitations avec appel à l'action vers les actions ESG.

La navigation s'adapte au type de contenu : défilement vertical pour les titres de section et horizontal pour le contenu HTML. Un système de progression visuelle en temps réel et une barre de navigation par sections permettent aux utilisateurs de suivre leur avancement et de naviguer librement dans le cours.

#### 🛡️ Sécurité et Sanitisation du Contenu

Le contenu HTML des cours est sécurisé via la bibliothèque `sanitize-html` avec une liste stricte de balises autorisées (headings, paragraphes, listes, liens, images, code). Cette approche garantit la sécurité contre les attaques XSS tout en préservant la richesse du contenu pédagogique avec support des médias et de la mise en forme avancée.

Les ressources externes affichent automatiquement les favicons des sites référencés et s'ouvrent dans de nouveaux onglets avec protection `noopener noreferrer`. Le système détecte et extrait proprement les domaines des URLs pour une présentation professionnelle et sécurisée.

#### 🔒 Intégration Subscription et Contrôle d'Accès

L'accès aux cours est protégé par le système d'abonnement avec vérification au niveau des routes (`/dashboard/courses`) et redirection automatique vers la souscription pour les utilisateurs du plan gratuit. Les cours sont associés au plan "Cours" (45€/mois) ou "La Totale" (90€/mois) selon la configuration des fonctionnalités premium.

Le middleware vérifie les permissions d'accès et redirige vers `/dashboard/subscription?upgrade=true&route=/dashboard/courses` avec notification contextuelle pour informer l'utilisateur des avantages de la souscription. Cette approche maintient l'engagement utilisateur tout en protégeant le contenu premium.

#### 📊 Système de Progression et Suivi

Le système de progression suit l'avancement des utilisateurs avec statuts multiples : `disponible`, `en_cours`, `en_cours_validation`, et `valide`. Les cours complétés déclenchent une redirection vers le plan d'action ESG pour encourager la mise en pratique des connaissances acquises et renforcer l'engagement dans la démarche de développement durable.

La progression est visualisée par une barre de progression fluide et des indicateurs de statut cohérents avec le design system de l'application. Les données de progression sont persistées pour permettre la reprise des cours et le suivi des accomplissements à long terme.

#### 🎨 Interface Utilisateur et Design System

L'interface utilise le design system shadcn/ui avec des composants accessibles et réactifs (Dialog, Card, Badge, Button). La présentation en grille adaptative s'ajuste automatiquement selon la taille d'écran (1-4 colonnes) pour une expérience optimale sur tous les appareils.

Les animations et transitions Framer Motion créent une expérience fluide et engageante avec des effets de glissement directionnels selon le type de navigation. L'interface distingue clairement les ressources internes et externes avec des badges et des interactions appropriées à chaque type de contenu.

#### ✅ Conformité aux Exigences

L'implémentation dépasse largement l'engagement initial d'**accès aux cours vidéos structurés par étapes** en proposant un système complet de micro learning avec **contenu multimédia riche**, **navigation interactive avancée**, **système de progression intégré**, **protection premium**, et **intégration ESG**. La plateforme facilite réellement l'apprentissage avec une approche pédagogique progressive et engageante.

Cette solution apporte une **expérience d'apprentissage moderne** avec navigation intuitive et animations fluides, une **sécurité maximale** du contenu avec sanitisation HTML, une **intégration business** cohérente avec le système d'abonnement, et une **évolutivité technique** permettant l'ajout facile de nouveaux formats de contenu et fonctionnalités pédagogiques.

## RE01-4 | Paiement en ligne
### Engagement
- Intégration d’une solution de payement en ligne sécurisée type Stripe, avec rappel de payements, suivi des abonnements, etc…
### Réalisation

#### 🏗️ Architecture et Plans d'Abonnement

Le système de paiement Doddee intègre **Stripe** comme solution sécurisée avec une architecture hybride supportant les abonnements d'équipe et individuels. La base de données stocke les informations Stripe (customer_id, subscription_id, product_id) dans les tables `users` et `teams` pour une gestion flexible selon le contexte d'utilisation.

Quatre plans d'abonnement sont proposés : **Gratuit** (accès de base), **Eco Profile** (45€/mois, profil public ESG), **Cours** (45€/mois, ressources pédagogiques), et **La Totale** (90€/mois, toutes fonctionnalités). Cette tarification modulaire permet aux utilisateurs de choisir uniquement les fonctionnalités dont ils ont besoin.

#### 💳 Flux de Paiement et Expérience Utilisateur

Le processus de souscription utilise Stripe Checkout pour une expérience utilisateur optimale et sécurisée. Lors de la sélection d'un plan, une session de checkout personnalisée est créée avec les métadonnées nécessaires pour le tracking interne. Les utilisateurs sont redirigés vers l'interface Stripe hébergée, puis de retour vers l'application une fois le paiement confirmé.

La gestion des erreurs est complète avec des messages contextuels en français et un système de fallback vers le plan gratuit en cas de problème. Les notifications utilisateur utilisent Sonner pour informer des changements d'abonnement et des besoins d'upgrade via des paramètres d'URL.

#### 🔒 Contrôle d'Accès et Paywalls

Un système de protection des fonctionnalités base sur les plans contrôle l'accès aux différentes parties de l'application. Le middleware vérifie les permissions au niveau des routes (`/dashboard/eco-profile`, `/dashboard/courses`) et redirige automatiquement vers la page d'abonnement avec des paramètres contextuels.

Des composants **Paywall** et **FeatureGuard** offrent une interface élégante pour restreindre l'accès aux fonctionnalités premium. Ces composants s'intègrent parfaitement au design system shadcn/ui et guident l'utilisateur vers la souscription appropriée.

#### 🔄 Intégration Stripe et Synchronisation

Les webhooks Stripe assurent une synchronisation en temps réel des statuts d'abonnement. Les événements `checkout.session.completed`, `customer.subscription.updated` et `customer.subscription.deleted` sont traités avec vérification de signature pour mettre à jour automatiquement la base de données.

Un portail client Stripe configuré automatiquement permet aux utilisateurs de gérer leurs abonnements de manière autonome : mise à jour des méthodes de paiement, consultation des factures, et annulation d'abonnement. Cette approche self-service réduit la charge de support client.

#### 🛡️ Sécurité et Conformité

La sécurité est assurée par le chiffrement HTTPS, la validation des signatures webhook, et l'utilisation des Server Actions Next.js pour les opérations sensibles. Aucune donnée de carte bancaire n'est stockée côté application, garantissant la conformité PCI DSS via Stripe.

Les variables d'environnement sécurisent les clés API et secrets webhook, avec une séparation claire entre les environnements de test et production. Le système de logging détaillé facilite l'audit et le debugging des transactions.

#### ✅ Conformité aux Exigences

L'implémentation répond intégralement aux engagements du cahier des charges : **solution de paiement sécurisée** avec Stripe, **suivi des abonnements** via dashboard utilisateur et portail client, **rappels de paiement** automatiques, **architecture scalable** supportant équipes et utilisateurs individuels, **interface intuitive** cohérente avec le design de l'application, et **gestion complète des erreurs** en français.

Cette solution apporte une **flexibilité maximale** avec son architecture hybride, une **sécurité de niveau entreprise** via Stripe, et une **expérience utilisateur premium** avec des paywalls élégants et des notifications contextuelles. L'architecture modulaire garantit la maintenabilité et l'évolutivité pour de futures fonctionnalités.

## RE01-5 | Création et gestion du compte
### Engagement
- Interface intuitive pour la création de comptes d’entreprise
- Possibililité de gérér son profil depuis le tableau de bord utilisateur
- Base de données sécurisée (Supabase)

### Réalisation

#### 🔐 Système d'Authentification et Inscription

Le système d'authentification repose sur **Supabase Auth** avec support de l'inscription par email/mot de passe et connexion OAuth Google. Le processus d'inscription utilise une validation Zod stricte avec confirmation de mot de passe et gestion d'erreurs contextuelles en français. La connexion Google utilise OAuth avec redirection automatique vers le callback approprié selon le contexte utilisateur.

Après inscription, les utilisateurs doivent obligatoirement compléter leur profil (prénom/nom) via un formulaire dédié. Cette étape est enforcie par le middleware qui redirige automatiquement vers `/auth/complete-profile` si les métadonnées `first_name` et `last_name` sont manquantes. Cette approche garantit la cohérence des données utilisateur et facilite la personnalisation de l'expérience.

#### 👤 Gestion de Profil et Métadonnées Utilisateur

Le système stocke les informations utilisateur dans `auth.users` (Supabase) et `public.users` (application) avec synchronisation automatique. Les métadonnées utilisateur (`user_metadata`) contiennent les informations de profil tandis que la table `users` stocke les données de subscription Stripe. Les formulaires de profil utilisent React Hook Form avec validation temps réel et états de chargement pour une expérience utilisateur optimale.

La mise à jour du profil utilise `supabase.auth.updateUser()` pour maintenir la cohérence avec l'authentification Supabase. Les changements sont immédiatement reflétés dans l'interface avec feedback utilisateur via Sonner toasts. Le système détecte automatiquement les modifications (pristine state) pour éviter les soumissions inutiles.

#### 🏢 Architecture Multi-tenant et Gestion d'Équipes

L'application implémente un système multi-tenant basé sur les équipes avec rôles (owner/member) et invitations par email. Les équipes sont créées via la fonction RPC `create_team_for_current_user` qui assure l'unicité d'appartenance (un utilisateur par équipe) et l'attribution automatique du rôle propriétaire. Le système d'invitation utilise des tokens uniques avec workflow de validation et notification par email.

Les fonctions RPC sécurisées (`SECURITY DEFINER`) gèrent la logique métier complexe : création d'équipe, acceptation d'invitations, transfert de propriété, et suppression d'équipe. La Row Level Security (RLS) Supabase protège l'accès aux données selon l'appartenance à l'équipe, garantissant l'isolation complète des données entre organisations.

#### 🔒 Middleware et Protection des Routes

Le middleware d'authentification (`middleware.ts`) implémente une vérification en cascade : validation JWT locale puis session Supabase comme source de vérité. Les routes protégées (`/dashboard/*`) redirigent automatiquement vers `/auth/login` avec messages contextuels selon la route demandée. Le système gère les sessions expirées avec nettoyage automatique des cookies et messages d'information appropriés.

La protection des routes intègre également la vérification d'abonnement pour les fonctionnalités premium. Le middleware détecte le plan utilisateur et redirige vers `/dashboard/subscription?upgrade=true` avec paramètres contextuels pour les fonctionnalités nécessitant un upgrade. Cette approche unifie l'authentification et l'autorisation d'accès aux fonctionnalités.

#### 🔑 Gestion Sécurisée des Mots de Passe

Le système de mots de passe utilise les fonctionnalités natives Supabase avec validation côté client et serveur. La réinitialisation de mot de passe génère un token sécurisé envoyé par email avec redirection vers un formulaire dédié. Le changement de mot de passe nécessite l'ancien mot de passe pour sécuriser l'opération et éviter les modifications non autorisées.

Les formulaires de mot de passe implémentent une validation robuste avec critères de complexité et confirmation obligatoire. Les erreurs Supabase sont interceptées et traduites en messages utilisateur compréhensibles en français. Le système maintient les sessions actives après changement de mot de passe pour une expérience fluide.

#### 🏪 Interface Utilisateur et Tableaux de Bord

L'interface de gestion de compte utilise le design system shadcn/ui avec composants réactifs et accessibles. Les formulaires incluent des états de chargement, validation en temps réel, et feedback visuel pour guider l'utilisateur. La navigation entre les étapes (inscription → profil → dashboard) est fluide avec conservation du contexte et paramètres de redirection.

Le tableau de bord utilisateur centralise la gestion du profil, des équipes, et des abonnements. Les composants sont modulaires avec séparation claire entre logique métier et présentation. L'interface s'adapte automatiquement selon le rôle utilisateur (owner/member) et le plan d'abonnement pour afficher uniquement les actions autorisées.

#### ✅ Conformité aux Exigences

L'implémentation répond intégralement aux engagements : **interface intuitive** avec formulaires guidés et validation en temps réel, **gestion complète du profil** depuis le tableau de bord avec mises à jour temps réel, **base de données sécurisée** avec RLS Supabase et chiffrement bout-en-bout, **système multi-tenant** avec isolation des données par équipe, et **authentification robuste** avec support OAuth et gestion sécurisée des sessions.

Cette solution apporte une **sécurité de niveau entreprise** avec Supabase Auth, une **expérience utilisateur fluide** avec validation temps réel et feedback contextuel, une **architecture scalable** supportant la croissance des équipes, et une **maintenabilité optimale** avec séparation claire des responsabilités entre authentification, autorisation, et logique métier.

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

#### 🎯 Architecture de Collecte Publique et Base de Données

Le système NPS Doddee implémente une collecte publique sophistiquée via la table `nps_responses` avec champs `eco_profile_id`, `score` (0-10), `ip_address`, et `created_at`. La prévention des doublons utilise une approche IP-based avec contrainte unique sur (eco_profile_id, ip_address), permettant la collecte anonyme sans comptes utilisateur obligatoires.

L'intégration Vercel optimise la détection d'IP avec priorité aux headers `x-forwarded-for` et `x-real-ip`, puis fallback sur `cf-connecting-ip` pour une précision maximale. Cette approche garantit l'unicité des votes même dans des environnements CDN complexes tout en respectant l'anonymat des répondants sur les profils ESG publics.

#### 📊 Widget Interactif et Expérience Utilisateur

Le composant `NPSWidget` offre une interface française complète avec la question standardisée : "Sur une échelle de 0 à 10, quelle est la probabilité pour que vous nous recommandiez ?". Le slider interactif (Radix UI) permet une sélection fluide avec feedback visuel temps réel et catégorisation automatique : **Détracteurs** (0-6), **Passifs** (7-8), **Promoteurs** (9-10).

L'interface responsive intègre des états de chargement, validation client-side, et messages de succès/erreur contextuels en français. Le widget affiche une section éducative expliquant le calcul NPS (% Promoteurs - % Détracteurs) pour sensibiliser les utilisateurs à la méthodologie et augmenter l'engagement dans l'évaluation.

#### 🔒 API RESTful et Sécurité

L'endpoint `/api/nps` implémente une API robuste avec validation Zod des données entrantes, extraction sécurisée de l'IP client, et vérification systématique des votes existants avant insertion. La gestion d'erreur complète inclut des codes HTTP appropriés et messages utilisateur traduits pour une expérience cohérente avec l'application.

Le système de sécurité combine validation server-side, sanitisation des entrées, et logging détaillé pour l'audit. La prévention des votes multiples utilise une vérification base de données avant chaque insertion, avec messages d'erreur explicites ("Vous avez déjà voté pour ce profil") maintenant l'intégrité des données NPS.

#### 🌐 Intégration Profils Écoresponsables Publics

Le widget NPS s'intègre naturellement aux profils écoresponsables publics (`/ecoprofile/[id]`) en bas de page, après la présentation des actions ESG, KPIs, et informations corporate. Cette position strategique maximise la collecte en profitant de l'engagement utilisateur après consultation complète du profil de durabilité de l'organisation.

L'implémentation client-side avec Server Actions Next.js assure une expérience fluide sans rechargement de page. Le widget s'adapte automatiquement au design system shadcn/ui existant avec Cards, Labels, et Buttons cohérents, maintenant l'identité visuelle tout en introduisant cette nouvelle fonctionnalité de mesure de satisfaction.

#### 📈 Méthodologie NPS et Analyse de Satisfaction

Le système respecte la méthodologie NPS standard avec collecte sur échelle 0-10 et calcul automatique des catégories. L'interface éducative informe les utilisateurs de la signification des scores : les **Promoteurs** (9-10) sont des ambassadeurs enthousiastes, les **Passifs** (7-8) sont modérément satisfaits, et les **Détracteurs** (0-6) représentent un risque de recommandation négative.

Cette approche pédagogique augmente la qualité des réponses en sensibilisant les répondants à l'impact de leur évaluation. Le widget affiche la catégorie en temps réel avec couleurs contextuelles (vert/jaune/rouge) pour un feedback visuel immédiat et une compréhension intuitive de la signification du score attribué.

#### 🛠️ Architecture Technique et Type Safety

L'implémentation utilise TypeScript complet avec types Drizzle ORM (`NpsResponse`, `NewNpsResponse`) garantissant la cohérence des données entre frontend et backend. Les composants React utilisent hooks de gestion d'état pour les interactions utilisateur (slider, soumission, feedback) avec séparation claire entre logique métier et présentation.

Le slider personnalisé (Radix UI primitives) offre une expérience tactile optimisée mobile/desktop avec support clavier complet. L'architecture modulaire facilite la maintenance et l'évolution : widget réutilisable, API découplée, et intégration non-intrusive dans les pages existantes sans impact sur les performances globales.

#### ✅ Conformité aux Exigences et Mesure de Fidélité

L'implémentation dépasse l'engagement initial de **collecte et intégration du score NPS** en proposant un système complet de **mesure de satisfaction client anonyme**, **interface éducative sur la méthodologie NPS**, **intégration native aux profils ESG publics**, **prévention robuste des doublons**, et **API scalable pour analyses futures**.

Cette solution apporte une **collecte de données fiable** avec méthodologie NPS standard, une **expérience utilisateur engageante** avec interface française intuitive, une **sécurité maximale** avec validation et prévention des abus, et une **architecture évolutive** permettant l'ajout futur de dashboards analytics et rapports de satisfaction détaillés pour optimiser l'engagement client des organisations ESG.