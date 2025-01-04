/*
  # Portfolio Tables Setup

  1. New Tables
    - `portfolio_categories`
      - `id` (uuid, primary key)
      - `title` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `portfolio_items`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key)
      - `title` (text)
      - `description` (text)
      - `video_url` (text)
      - `thumbnail_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add public read access policies
    - Add authenticated user management policies
*/

-- Create portfolio_categories table
CREATE TABLE IF NOT EXISTS portfolio_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create portfolio_items table
CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES portfolio_categories(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  video_url text,
  thumbnail_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE portfolio_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;

-- Create policies for portfolio_categories
CREATE POLICY "Allow public read access to portfolio_categories"
  ON portfolio_categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage portfolio_categories"
  ON portfolio_categories
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policies for portfolio_items
CREATE POLICY "Allow public read access to portfolio_items"
  ON portfolio_items
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage portfolio_items"
  ON portfolio_items
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial categories
INSERT INTO portfolio_categories (title)
VALUES 
  ('Դասընթացներ'),
  ('Ռիլեր'),
  ('Հոլովակներ'),
  ('Նկարներ')
ON CONFLICT DO NOTHING;