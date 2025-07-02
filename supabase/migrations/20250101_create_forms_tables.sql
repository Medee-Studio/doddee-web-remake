-- Create forms table
CREATE TABLE IF NOT EXISTS forms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  schema JSONB NOT NULL,
  settings JSONB DEFAULT '{}',
  is_public BOOLEAN DEFAULT false,
  public_id UUID UNIQUE DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create form_responses table
CREATE TABLE IF NOT EXISTS form_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_id UUID NOT NULL REFERENCES forms(id) ON DELETE CASCADE,
  respondent_email VARCHAR(255),
  respondent_name VARCHAR(255),
  response_data JSONB NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes
CREATE INDEX idx_forms_created_by ON forms(created_by);
CREATE INDEX idx_forms_public_id ON forms(public_id) WHERE is_public = true;
CREATE INDEX idx_form_responses_form_id ON form_responses(form_id);
CREATE INDEX idx_form_responses_submitted_at ON form_responses(submitted_at);

-- Enable Row Level Security
ALTER TABLE forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_responses ENABLE ROW LEVEL SECURITY;

-- RLS Policies for forms table
-- Users can view their own forms
CREATE POLICY "Users can view their own forms" ON forms
  FOR SELECT USING (auth.uid() = created_by);

-- Users can create forms
CREATE POLICY "Users can create forms" ON forms
  FOR INSERT WITH CHECK (auth.uid() = created_by);

-- Users can update their own forms
CREATE POLICY "Users can update their own forms" ON forms
  FOR UPDATE USING (auth.uid() = created_by);

-- Users can delete their own forms
CREATE POLICY "Users can delete their own forms" ON forms
  FOR DELETE USING (auth.uid() = created_by);

-- Public forms can be viewed by anyone
CREATE POLICY "Public forms can be viewed by anyone" ON forms
  FOR SELECT USING (is_public = true);

-- RLS Policies for form_responses table
-- Form owners can view responses to their forms
CREATE POLICY "Form owners can view responses" ON form_responses
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM forms
      WHERE forms.id = form_responses.form_id
      AND forms.created_by = auth.uid()
    )
  );

-- Anyone can submit a response to a public form
CREATE POLICY "Anyone can submit to public forms" ON form_responses
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM forms
      WHERE forms.id = form_responses.form_id
      AND forms.is_public = true
    )
  );

-- Form owners can delete responses
CREATE POLICY "Form owners can delete responses" ON form_responses
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM forms
      WHERE forms.id = form_responses.form_id
      AND forms.created_by = auth.uid()
    )
  );

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on forms table
CREATE TRIGGER update_forms_updated_at BEFORE UPDATE ON forms
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RPC function to get form with responses count
CREATE OR REPLACE FUNCTION get_form_with_stats(p_form_id UUID)
RETURNS TABLE (
  id UUID,
  created_by UUID,
  name VARCHAR,
  description TEXT,
  schema JSONB,
  settings JSONB,
  is_public BOOLEAN,
  public_id UUID,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE,
  responses_count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    f.id,
    f.created_by,
    f.name,
    f.description,
    f.schema,
    f.settings,
    f.is_public,
    f.public_id,
    f.created_at,
    f.updated_at,
    COUNT(fr.id) as responses_count
  FROM forms f
  LEFT JOIN form_responses fr ON f.id = fr.form_id
  WHERE f.id = p_form_id
  GROUP BY f.id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RPC function to get user's forms with response counts
CREATE OR REPLACE FUNCTION get_user_forms_with_stats()
RETURNS TABLE (
  id UUID,
  name VARCHAR,
  description TEXT,
  is_public BOOLEAN,
  public_id UUID,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE,
  responses_count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    f.id,
    f.name,
    f.description,
    f.is_public,
    f.public_id,
    f.created_at,
    f.updated_at,
    COUNT(fr.id) as responses_count
  FROM forms f
  LEFT JOIN form_responses fr ON f.id = fr.form_id
  WHERE f.created_by = auth.uid()
  GROUP BY f.id
  ORDER BY f.created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;