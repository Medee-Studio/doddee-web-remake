import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  uuid, // Added for UUID type
  boolean,
  jsonb,
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


export const forms = pgTable('forms', {
  id: uuid('id').primaryKey().defaultRandom(),
  createdBy: uuid('created_by')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  schema: jsonb('schema').notNull(),
  settings: jsonb('settings').default({}),
  isPublic: boolean('is_public').default(false),
  publicId: uuid('public_id').unique().defaultRandom(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const formResponses = pgTable('form_responses', {
  id: uuid('id').primaryKey().defaultRandom(),
  formId: uuid('form_id')
    .notNull()
    .references(() => forms.id, { onDelete: 'cascade' }),
  respondentEmail: varchar('respondent_email', { length: 255 }),
  respondentName: varchar('respondent_name', { length: 255 }),
  responseData: jsonb('response_data').notNull(),
  submittedAt: timestamp('submitted_at').notNull().defaultNow(),
});


// RELATIONS

export const usersRelations = relations(users, ({ many }) => ({
  teamMemberships: many(teamMembers, { relationName: 'UserTeamMembers' }),
  invitationsSent: many(invitations, { relationName: 'UserInvitationsSent' }),
  forms: many(forms, { relationName: 'UserForms' }),
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

export const formsRelations = relations(forms, ({ one, many }) => ({
  createdBy: one(users, {
    fields: [forms.createdBy],
    references: [users.id],
    relationName: 'FormCreatedBy',
  }),
  responses: many(formResponses, { relationName: 'FormResponses' }),
}));

export const formResponsesRelations = relations(formResponses, ({ one }) => ({
  form: one(forms, {
    fields: [formResponses.formId],
    references: [forms.id],
    relationName: 'FormResponseForm',
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

export type Form = typeof forms.$inferSelect;
export type NewForm = typeof forms.$inferInsert;
export type FormResponse = typeof formResponses.$inferSelect;
export type NewFormResponse = typeof formResponses.$inferInsert;




// CUSTOM TYPES (if needed)
export type TeamDataWithMembers = Team & {
  teamMembers: (TeamMember & {
    user: Pick<User, 'id' | 'email'>; // Removed 'role' from Pick
  })[];
};
