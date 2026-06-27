-- =====================================================
-- AnyTechPros Database Setup for Supabase
-- =====================================================
-- Run this SQL in Supabase SQL Editor
-- Copy and paste each section and click RUN
-- =====================================================

-- =====================================================
-- OPTIONAL: Drop existing tables (if you want to start fresh)
-- =====================================================
-- Uncomment these lines ONLY if you want to delete existing data:
-- DROP TABLE IF EXISTS applications CASCADE;
-- DROP TABLE IF EXISTS jobs CASCADE;

-- =====================================================
-- STEP 1: Create Jobs Table
-- =====================================================

CREATE TABLE IF NOT EXISTS jobs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT[] NOT NULL DEFAULT '{}',
  responsibilities TEXT[] NOT NULL DEFAULT '{}',
  include_github BOOLEAN DEFAULT false,
  posted_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read jobs
DROP POLICY IF EXISTS "Anyone can read jobs" ON jobs;
CREATE POLICY "Anyone can read jobs"
  ON jobs FOR SELECT
  USING (true);

-- Policy: Anyone can insert jobs
DROP POLICY IF EXISTS "Anyone can insert jobs" ON jobs;
CREATE POLICY "Anyone can insert jobs"
  ON jobs FOR INSERT
  WITH CHECK (true);

-- Policy: Anyone can update jobs
DROP POLICY IF EXISTS "Anyone can update jobs" ON jobs;
CREATE POLICY "Anyone can update jobs"
  ON jobs FOR UPDATE
  USING (true);

-- Policy: Anyone can delete jobs
DROP POLICY IF EXISTS "Anyone can delete jobs" ON jobs;
CREATE POLICY "Anyone can delete jobs"
  ON jobs FOR DELETE
  USING (true);


-- =====================================================
-- STEP 2: Create Applications Table
-- =====================================================

CREATE TABLE IF NOT EXISTS applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  job_title TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  experience TEXT NOT NULL,
  degree TEXT NOT NULL,
  linkedin TEXT,
  github TEXT,
  resume_url TEXT,
  applied_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read applications
DROP POLICY IF EXISTS "Anyone can read applications" ON applications;
CREATE POLICY "Anyone can read applications"
  ON applications FOR SELECT
  USING (true);

-- Policy: Anyone can submit applications
DROP POLICY IF EXISTS "Anyone can insert applications" ON applications;
CREATE POLICY "Anyone can insert applications"
  ON applications FOR INSERT
  WITH CHECK (true);

-- Policy: Anyone can update applications
DROP POLICY IF EXISTS "Anyone can update applications" ON applications;
CREATE POLICY "Anyone can update applications"
  ON applications FOR UPDATE
  USING (true);

-- Policy: Anyone can delete applications
DROP POLICY IF EXISTS "Anyone can delete applications" ON applications;
CREATE POLICY "Anyone can delete applications"
  ON applications FOR DELETE
  USING (true);


-- =====================================================
-- STEP 3: Create Storage Bucket Policies
-- =====================================================
-- NOTE: First create the 'resumes' bucket manually in Supabase Storage UI
-- Then run these policies in the SQL Editor:

-- Policy: Anyone can upload resumes
DROP POLICY IF EXISTS "Anyone can upload resumes" ON storage.objects;
CREATE POLICY "Anyone can upload resumes"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'resumes');

-- Policy: Anyone can read resumes
DROP POLICY IF EXISTS "Anyone can read resumes" ON storage.objects;
CREATE POLICY "Anyone can read resumes"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'resumes');


-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================
-- Run these to verify everything was created successfully:

-- Check if tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('jobs', 'applications');

-- Check jobs table structure
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'jobs';

-- Check applications table structure
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'applications';

-- Check RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('jobs', 'applications');


-- =====================================================
-- STEP 4: Create Demo Bookings Table
-- =====================================================

CREATE TABLE IF NOT EXISTS demo_bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  organization TEXT NOT NULL,
  hiring_volume TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE demo_bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can submit demo bookings
DROP POLICY IF EXISTS "Anyone can insert demo bookings" ON demo_bookings;
CREATE POLICY "Anyone can insert demo bookings"
  ON demo_bookings FOR INSERT
  WITH CHECK (true);

-- Policy: Anyone can read demo bookings (Admin dashboard retrieves this)
DROP POLICY IF EXISTS "Anyone can read demo bookings" ON demo_bookings;
CREATE POLICY "Anyone can read demo bookings"
  ON demo_bookings FOR SELECT
  USING (true);

-- Policy: Anyone can delete demo bookings (Admin dashboard deletes this)
DROP POLICY IF EXISTS "Anyone can delete demo bookings" ON demo_bookings;
CREATE POLICY "Anyone can delete demo bookings"
  ON demo_bookings FOR DELETE
  USING (true);

