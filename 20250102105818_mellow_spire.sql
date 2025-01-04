/*
  # Add initial team members

  1. Changes
    - Insert initial team members with UUIDs
    - Insert initial team member images
*/

-- Insert initial team members
INSERT INTO team_members (id, name, role)
VALUES 
  ('550e8400-e29b-41d4-a716-446655440000', 'Գագիկ Հարությունյան', 'Հիմնադիր'),
  ('550e8400-e29b-41d4-a716-446655440001', 'Նոննա Ալավերդյան', 'Դիզայներ'),
  ('550e8400-e29b-41d4-a716-446655440002', 'Պավել Տերտերյան', 'Ռիլմեյքեր')
ON CONFLICT (id) DO UPDATE 
SET 
  name = EXCLUDED.name,
  role = EXCLUDED.role;

-- Insert initial team member images
INSERT INTO team_member_images (member_id, image_url)
VALUES 
  ('550e8400-e29b-41d4-a716-446655440000', 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=800&q=80'),
  ('550e8400-e29b-41d4-a716-446655440001', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80'),
  ('550e8400-e29b-41d4-a716-446655440002', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80')
ON CONFLICT DO NOTHING;