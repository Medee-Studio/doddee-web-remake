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