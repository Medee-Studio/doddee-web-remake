import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  uuid, // Added for UUID type
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export type ActionResult = { success: string } | { error: string };
export type TeamMemberRole = 'member' | 'owner';

const authUsers = pgTable('users', { id: uuid('id').primaryKey() }, () => {
  return { schema: 'auth' }; // Specify the schema for auth.users
});

export const users = pgTable('users', {
  id: uuid('id').primaryKey().references(() => authUsers.id, { onDelete: 'cascade' }),
  email: varchar('email', { length: 255 }).notNull(),
  stripeCustomerId: text('stripe_customer_id').unique(),
  stripeSubscriptionId: text('stripe_subscription_id').unique(),
  stripeProductId: text('stripe_product_id'),
  planName: varchar('plan_name', { length: 50 }).default('gratuit'),
  subscriptionStatus: varchar('subscription_status', { length: 20 }).default('active'),
});

export const teams = pgTable('teams', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  stripeCustomerId: text('stripe_customer_id').unique(),
  stripeSubscriptionId: text('stripe_subscription_id').unique(),
  stripeProductId: text('stripe_product_id'),
  planName: varchar('plan_name', { length: 50 }),
  subscriptionStatus: varchar('subscription_status', { length: 20 }),
});

export const teamMembers = pgTable('team_members', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id') // Changed from integer to uuid
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }), // Reference public.users
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id, { onDelete: 'cascade' }),
  role: varchar('role', { length: 50 }).notNull(),
  joinedAt: timestamp('joined_at').notNull().defaultNow(),
});

export const invitations = pgTable('invitations', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id, { onDelete: 'cascade' }),
  email: varchar('email', { length: 255 }).notNull(), // This is the invited email, not a FK to users.email
  role: varchar('role', { length: 50 }).notNull(),
  invitedBy: uuid('invited_by') // Changed from integer to uuid
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }), // Reference public.users
  invitedAt: timestamp('invited_at').notNull().defaultNow(),
  status: varchar('status', { length: 20 }).notNull().default('pending'),
});

export const npsResponses = pgTable('nps_responses', {
  id: serial('id').primaryKey(),
  ecoProfileId: varchar('eco_profile_id', { length: 255 }).notNull(),
  score: integer('score').notNull(),
  ipAddress: varchar('ip_address', { length: 45 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// RELATIONS

export const usersRelations = relations(users, ({ many }) => ({
  teamMemberships: many(teamMembers, { relationName: 'UserTeamMembers' }),
  invitationsSent: many(invitations, { relationName: 'UserInvitationsSent' }),  
}));

export const teamsRelations = relations(teams, ({ many }) => ({
  teamMembers: many(teamMembers, { relationName: 'TeamTeamMembers' }),
  invitations: many(invitations, { relationName: 'TeamInvitations' }),
}));

export const teamMembersRelations = relations(teamMembers, ({ one }) => ({
  user: one(users, {
    fields: [teamMembers.userId],
    references: [users.id],
    relationName: 'TeamMemberUser',
  }),
  team: one(teams, {
    fields: [teamMembers.teamId],
    references: [teams.id],
    relationName: 'TeamMemberTeam',
  }),
}));

export const invitationsRelations = relations(invitations, ({ one }) => ({
  team: one(teams, {
    fields: [invitations.teamId],
    references: [teams.id],
    relationName: 'InvitationTeam',
  }),
  invitedByUser: one(users, {
    fields: [invitations.invitedBy],
    references: [users.id],
    relationName: 'InvitationInvitedBy',
  }),
}));

// INFERED TYPES
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Team = typeof teams.$inferSelect;
export type NewTeam = typeof teams.$inferInsert;
export type TeamMember = typeof teamMembers.$inferSelect;
export type NewTeamMember = typeof teamMembers.$inferInsert;
export type Invitation = typeof invitations.$inferSelect;
export type NewInvitation = typeof invitations.$inferInsert;
export type NpsResponse = typeof npsResponses.$inferSelect;
export type NewNpsResponse = typeof npsResponses.$inferInsert;



// CUSTOM TYPES (if needed)
export type TeamDataWithMembers = Team & {
  teamMembers: (TeamMember & {
    user: Pick<User, 'id' | 'email'>; // Removed 'role' from Pick
  })[];
};
