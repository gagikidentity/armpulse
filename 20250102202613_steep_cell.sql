-- Drop existing policies to recreate them properly
DROP POLICY IF EXISTS "Give public read access to team-images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to upload team-images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to update team-images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to delete team-images" ON storage.objects;

-- Create more permissive policies
CREATE POLICY "Allow public access to team-images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'team-images');

CREATE POLICY "Allow anyone to upload to team-images"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'team-images');

CREATE POLICY "Allow anyone to update team-images"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'team-images');

CREATE POLICY "Allow anyone to delete from team-images"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'team-images');

-- Ensure the bucket exists and is public
INSERT INTO storage.buckets (id, name, public)
VALUES ('team-images', 'team-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;