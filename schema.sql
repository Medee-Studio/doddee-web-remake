CREATE TABLE IF NOT EXISTS "invitations" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_id" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	"role" varchar(50) NOT NULL,
	"invited_by" uuid NOT NULL,
	"invited_at" timestamp DEFAULT now() NOT NULL,
	"status" varchar(20) DEFAULT 'pending' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "team_members" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"team_id" integer NOT NULL,
	"role" varchar(50) NOT NULL,
	"joined_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teams" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"stripe_customer_id" text,
	"stripe_subscription_id" text,
	"stripe_product_id" text,
	"plan_name" varchar(50),
	"subscription_status" varchar(20),
	CONSTRAINT "teams_stripe_customer_id_unique" UNIQUE("stripe_customer_id"),
	CONSTRAINT "teams_stripe_subscription_id_unique" UNIQUE("stripe_subscription_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
	"email" varchar(255) NOT NULL
);

create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "invitations" ADD CONSTRAINT "invitations_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "invitations" ADD CONSTRAINT "invitations_invited_by_users_id_fk" FOREIGN KEY ("invited_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "team_members" ADD CONSTRAINT "team_members_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "team_members" ADD CONSTRAINT "team_members_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

-- Helper functions
CREATE OR REPLACE FUNCTION public.check_user_team_membership(user_id uuid, check_team_id int)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.team_members
    WHERE user_id = $1 AND team_id = $2
  );
$$;

CREATE OR REPLACE FUNCTION public.check_user_is_team_owner(user_id uuid, check_team_id int)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.team_members
    WHERE user_id = $1 AND team_id = $2 AND role = 'owner'
  );
$$;

-- Add RLS Policies
-- Enable RLS and define policies for the users table
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own data"
ON public.users FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update their own data"
ON public.users FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Enable RLS and define policies for the invitations table
ALTER TABLE public.invitations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Team admins/owners can create invitations for their team"
ON public.invitations FOR INSERT
WITH CHECK (
    public.check_user_is_team_owner(auth.uid(), team_id)
    AND invitations.invited_by = auth.uid()
);

CREATE POLICY "Invited users and team members can see relevant invitations"
ON public.invitations FOR SELECT
USING (
    (LOWER(email) = LOWER(auth.jwt()->>'email')) OR
    (public.check_user_team_membership(auth.uid(), team_id))
);

CREATE POLICY "Invited users can update their own invitations"
ON public.invitations FOR UPDATE
USING (LOWER(email) = LOWER(auth.jwt()->>'email'))
WITH CHECK (LOWER(email) = LOWER(auth.jwt()->>'email'));

CREATE POLICY "Team admins/owners can delete pending invitations for their team"
ON public.invitations FOR DELETE
USING (
    public.check_user_is_team_owner(auth.uid(), team_id)
    AND invitations.status = 'pending'
);

-- Enable RLS and define policies for the teams table
ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Team members can view their own team"
ON public.teams FOR SELECT
USING (public.check_user_team_membership(auth.uid(), id));

CREATE POLICY "Team owners can update their team"
ON public.teams FOR UPDATE
USING (public.check_user_is_team_owner(auth.uid(), id))
WITH CHECK (public.check_user_is_team_owner(auth.uid(), id));

CREATE POLICY "Authenticated users can create teams"
ON public.teams FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Team owners can delete their team"
ON public.teams FOR DELETE
USING (public.check_user_is_team_owner(auth.uid(), id));

-- Enable RLS and define policies for the team_members table
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Team members can view memberships of their team"
ON public.team_members FOR SELECT
USING (public.check_user_team_membership(auth.uid(), team_id));

CREATE POLICY "Users can be added to teams (self or by owner)"
ON public.team_members FOR INSERT
WITH CHECK (
    (team_members.user_id = auth.uid()) OR
    (EXISTS (
        SELECT 1
        FROM public.team_members tm_owner
        WHERE tm_owner.team_id = team_members.team_id
        AND tm_owner.user_id = auth.uid()
        AND tm_owner.role = 'owner'
    ))
);

CREATE POLICY "Team owners can update member roles in their team"
ON public.team_members FOR UPDATE
USING (public.check_user_is_team_owner(auth.uid(), team_id))
WITH CHECK (public.check_user_is_team_owner(auth.uid(), team_id));

CREATE POLICY "Team owners can remove other members from their team"
ON public.team_members FOR DELETE
USING (
    team_members.user_id != auth.uid() AND
    public.check_user_is_team_owner(auth.uid(), team_id)
);

CREATE POLICY "Users can leave a team (remove themselves), unless they are the last owner"
ON public.team_members FOR DELETE
USING (
    team_members.user_id = auth.uid() AND
    NOT (
        team_members.role = 'owner' AND
        (SELECT COUNT(*) FROM public.team_members tm_check
         WHERE tm_check.team_id = team_members.team_id AND tm_check.role = 'owner' AND tm_check.user_id != team_members.user_id) = 0
    )
);

-- RPC Functions

-- RPC Function 1: create_team_for_current_user
CREATE OR REPLACE FUNCTION public.create_team_for_current_user(
    p_team_name text
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id uuid := auth.uid();
  v_new_team_id int;
  v_user_team_id int;
BEGIN
  -- Check if user is already in a team
  SELECT team_id INTO v_user_team_id
  FROM public.team_members tm
  WHERE tm.user_id = v_user_id
  LIMIT 1;

  IF v_user_team_id IS NOT NULL THEN
    RETURN json_build_object('error', 'Vous êtes déjà membre d&apos;une équipe.');
  END IF;

  -- Create new team
  INSERT INTO public.teams (name) VALUES (p_team_name) RETURNING id INTO v_new_team_id;

  -- Add user as owner
  INSERT INTO public.team_members (user_id, team_id, role)
  VALUES (v_user_id, v_new_team_id, 'owner');

  RETURN json_build_object('success', 'Équipe créée avec succès.', 'team_id', v_new_team_id);
EXCEPTION
  WHEN OTHERS THEN
    RETURN json_build_object('error', 'Erreur lors de la création de l&apos;équipe: ' || SQLERRM);
END;
$$;

-- RPC Function 2: accept_team_invite_for_current_user
CREATE OR REPLACE FUNCTION public.accept_team_invite_for_current_user(
    p_invitation_id int
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id uuid := auth.uid();
  v_user_email text;
  v_invitation record;
  v_user_team_id int;
BEGIN
  -- Check if user already has a team
  SELECT team_id INTO v_user_team_id
  FROM public.team_members tm
  WHERE tm.user_id = v_user_id
  LIMIT 1;

  IF v_user_team_id IS NOT NULL THEN
    RETURN json_build_object('error', 'Vous êtes déjà membre d&apos;une équipe.');
  END IF;

  -- Get invitation details
  SELECT * INTO v_invitation
  FROM public.invitations
  WHERE id = p_invitation_id;

  IF NOT FOUND THEN
    RETURN json_build_object('error', 'Invitation non trouvée.');
  END IF;

  IF v_invitation.status <> 'pending' THEN
    RETURN json_build_object('error', 'Cette invitation n&apos;est plus valide.');
  END IF;

  -- Verify user email matches invitation email
  SELECT email INTO v_user_email FROM public.users WHERE id = v_user_id;
  IF NOT FOUND THEN
    RETURN json_build_object('error', 'Profil d&apos;utilisateur non trouvé.');
  END IF;

  IF LOWER(v_user_email) <> LOWER(v_invitation.email) THEN
    RETURN json_build_object('error', 'Cette invitation n&apos;est pas pour votre adresse email.');
  END IF;

  -- Add user to the team
  INSERT INTO public.team_members (user_id, team_id, role)
  VALUES (v_user_id, v_invitation.team_id, v_invitation.role);

  -- Update invitation status to accepted
  UPDATE public.invitations
  SET status = 'accepted'
  WHERE id = p_invitation_id;

  RETURN json_build_object('success', 'Vous avez rejoint l&apos;équipe avec succès.');
EXCEPTION
  WHEN OTHERS THEN
    RETURN json_build_object('error', 'Erreur lors de l&apos;acceptation de l&apos;invitation: ' || SQLERRM);
END;
$$;

-- RPC Function 3: invite_member_to_current_user_team
CREATE OR REPLACE FUNCTION public.invite_member_to_current_user_team(
    p_invitee_email text,
    p_invitee_role text
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_inviter_id uuid := auth.uid();
  v_inviter_team_id int;
  v_target_user_id uuid;
  v_existing_invitation_id int;
BEGIN
  -- Get inviter's team_id
  SELECT tm.team_id INTO v_inviter_team_id
  FROM public.team_members tm
  WHERE tm.user_id = v_inviter_id
  LIMIT 1;

  IF v_inviter_team_id IS NULL THEN
    RETURN json_build_object('error', 'L&apos;utilisateur n&apos;est pas membre d&apos;une équipe ou n&apos;est pas un propriétaire capable d&apos;envoyer des invitations.');
  END IF;

  -- Also verify that the user is actually an owner (RLS check is bypassed due to SECURITY DEFINER)
  IF NOT public.check_user_is_team_owner(v_inviter_id, v_inviter_team_id) THEN
    RETURN json_build_object('error', 'Seuls les propriétaires d&apos;équipe peuvent envoyer des invitations.');
  END IF;

  -- Check if a user account with this email exists
  SELECT id INTO v_target_user_id FROM public.users WHERE email = p_invitee_email LIMIT 1;

  IF v_target_user_id IS NOT NULL THEN
    -- Check if this existing user is already in the team
    IF EXISTS(
      SELECT 1 FROM public.team_members
      WHERE user_id = v_target_user_id AND team_id = v_inviter_team_id
    ) THEN
      RETURN json_build_object('error', 'L&apos;utilisateur est déjà membre de cette équipe.');
    END IF;
  END IF;

  -- Check for an existing PENDING invitation for this email and team
  SELECT id INTO v_existing_invitation_id
  FROM public.invitations
  WHERE email = p_invitee_email
    AND team_id = v_inviter_team_id
    AND status = 'pending'
  LIMIT 1;

  IF v_existing_invitation_id IS NOT NULL THEN
    RETURN json_build_object('error', 'Une invitation a déjà été envoyée à cet email pour cette équipe.');
  END IF;

  INSERT INTO public.invitations (team_id, email, role, invited_by, status)
  VALUES (v_inviter_team_id, p_invitee_email, p_invitee_role, v_inviter_id, 'pending');

  RETURN json_build_object('success', 'Invitation envoyée avec succès.');
EXCEPTION
  WHEN OTHERS THEN
    RETURN json_build_object('error', 'Erreur lors de l&apos;envoi de l&apos;invitation: ' || SQLERRM);
END;
$$;

-- RPC Function 4: get_team_details_for_current_user
CREATE OR REPLACE FUNCTION public.get_team_details_for_current_user()
RETURNS json
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
AS $$
  DECLARE
    v_user_id uuid := auth.uid();
  BEGIN
    RETURN (
      SELECT
        json_build_object(
          'id', t.id,
          'name', t.name,
          'created_at', t.created_at,
          'updated_at', t.updated_at,
          'stripe_customer_id', t.stripe_customer_id,
          'stripe_subscription_id', t.stripe_subscription_id,
          'stripe_product_id', t.stripe_product_id,
          'plan_name', t.plan_name,
          'subscription_status', t.subscription_status,
          'team_members', (
            SELECT coalesce(json_agg(
              json_build_object(
                'id', tm_inner.id,
                'user_id', tm_inner.user_id,
                'team_id', tm_inner.team_id,
                'role', tm_inner.role,
                'joined_at', tm_inner.joined_at,
                'user', json_build_object(
                  'id', u.id,
                  'email', u.email
                )
              )
            ), '[]'::json)
            FROM public.team_members tm_inner
            JOIN public.users u ON tm_inner.user_id = u.id
            WHERE tm_inner.team_id = t.id
          )
        )
      FROM public.teams t
      JOIN public.team_members tm_outer ON t.id = tm_outer.team_id
      WHERE tm_outer.user_id = v_user_id
      LIMIT 1
    );
  END;
$$;

-- RPC Function 5: get_current_user_profile_and_team_id
CREATE OR REPLACE FUNCTION public.get_current_user_profile_and_team_id()
RETURNS json
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT
    json_build_object(
      'user', (
        SELECT row_to_json(up.*) FROM public.users up WHERE up.id = auth.uid()
      ),
      'teamId', (
        SELECT tm.team_id FROM public.team_members tm WHERE tm.user_id = auth.uid() LIMIT 1
      )
    );
$$;

-- RPC Function 6: update_team_subscription_details
CREATE OR REPLACE FUNCTION public.update_team_subscription_details(
    p_user_id uuid,
    p_stripe_customer_id text,
    p_stripe_subscription_id text,
    p_stripe_product_id text,
    p_plan_name varchar(50),
    p_subscription_status varchar(20)
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_team_id int;
  v_user_exists boolean;
BEGIN
  -- Check if user exists
  SELECT EXISTS (SELECT 1 FROM public.users WHERE id = p_user_id) INTO v_user_exists;
  IF NOT v_user_exists THEN
    RETURN json_build_object('error', 'Utilisateur non trouvé dans la base de données.');
  END IF;

  -- Get team_id for the user
  SELECT team_id INTO v_team_id
  FROM public.team_members tm
  WHERE tm.user_id = p_user_id
  LIMIT 1;

  IF v_team_id IS NULL THEN
    RETURN json_build_object('error', 'Utilisateur non associé à aucune équipe.');
  END IF;

  -- Update team with Stripe details
  UPDATE public.teams
  SET
    stripe_customer_id = p_stripe_customer_id,
    stripe_subscription_id = p_stripe_subscription_id,
    stripe_product_id = p_stripe_product_id,
    plan_name = p_plan_name,
    subscription_status = p_subscription_status,
    updated_at = now()
  WHERE id = v_team_id;

  IF NOT FOUND THEN
    RETURN json_build_object('error', 'Équipe non trouvée ou mise à jour échouée.');
  END IF;

  RETURN json_build_object('success', 'Informations de l&apos;équipe mises à jour avec succès.');
EXCEPTION
  WHEN OTHERS THEN
    RETURN json_build_object('error', 'Erreur lors de la mise à jour des informations de l&apos;équipe: ' || SQLERRM);
END;
$$;

