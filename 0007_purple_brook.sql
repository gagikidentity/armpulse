/*
  # Portfolio Storage Setup

  1. Storage
    - Create new bucket 'portfolio-media' for storing portfolio images and videos
    - Set bucket as public for easy access
  
  2. Security
    - Add public read access policy
    - Add authenticated user management policies for upload/update/delete
*/

-- Create a new public bucket for portfolio media
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-media', 'portfolio-media', true)
ON CONFLICT (id) DO NOTHING;

-- Set up RLS policies for the bucket
CREATE POLICY "Allow public read access to portfolio-media"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'portfolio-media');

CREATE POLICY "Allow authenticated users to upload portfolio-media"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'portfolio-media');

CREATE POLICY "Allow authenticated users to update portfolio-media"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'portfolio-media');

CREATE POLICY "Allow authenticated users to delete portfolio-media"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'portfolio-media');