/*
  # Create event_info table

  1. New Tables
    - `event_info`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `start_date` (date)
      - `end_date` (date)
      - `location` (text)
      - `registration_deadline` (date)
      - `logo` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `event_info` table
    - Add policy for public read access
*/

CREATE TABLE event_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  location text NOT NULL,
  registration_deadline date NOT NULL,
  logo text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE event_info ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON event_info
  FOR SELECT
  TO public
  USING (true);

-- Insert initial event data
INSERT INTO event_info (
  name,
  description,
  start_date,
  end_date,
  location,
  registration_deadline,
  logo
) VALUES (
  'TechFest 2025',
  'Join us for the biggest tech event of the year! Featuring workshops, hackathons, tech talks, and networking opportunities.',
  '2025-03-15',
  '2025-03-17',
  'University Tech Center',
  '2025-02-28',
  'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
);