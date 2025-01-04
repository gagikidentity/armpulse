-- Create team-images bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('team-images', 'team-images', true)
ON CONFLICT (id) DO NOTHING;

-- Set up RLS policies for the bucket
CREATE POLICY "Give public read access to team-images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'team-images');

CREATE POLICY "Allow authenticated users to upload team-images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'team-images');

CREATE POLICY "Allow authenticated users to update team-images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'team-images');

CREATE POLICY "Allow authenticated users to delete team-images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'team-images');

-- Create team-photos folder
INSERT INTO storage.objects (bucket_id, name, owner, metadata)
VALUES ('team-images', 'team-photos/.keep', auth.uid(), '{"contentType": "text/plain"}')
ON CONFLICT (bucket_id, name) DO NOTHING;