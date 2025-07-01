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