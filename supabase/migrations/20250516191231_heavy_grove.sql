/*
  # Update registrations table schema

  1. Changes
    - Add status column
    - Add payment_status column
    - Add registration_type column

  2. Security
    - Update RLS policies
*/

-- Add new columns
ALTER TABLE registrations
ADD COLUMN status text NOT NULL DEFAULT 'pending',
ADD COLUMN payment_status text NOT NULL DEFAULT 'pending',
ADD COLUMN registration_type text NOT NULL DEFAULT 'regular';

-- Add check constraints
ALTER TABLE registrations
ADD CONSTRAINT valid_status CHECK (status IN ('pending', 'confirmed', 'cancelled')),
ADD CONSTRAINT valid_payment_status CHECK (payment_status IN ('pending', 'paid', 'refunded')),
ADD CONSTRAINT valid_registration_type CHECK (registration_type IN ('regular', 'student', 'professional'));