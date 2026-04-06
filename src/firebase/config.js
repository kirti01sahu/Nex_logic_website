// Supabase configuration
// Replace these values with your actual Supabase project configuration
// You can find these values in your Supabase Dashboard -> Project Settings -> API

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ctxdkdcojofxjpawciug.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0eGRrZGNvam9meGpwYXdjaXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMjM0ODksImV4cCI6MjA4NTc5OTQ4OX0.FJTySUOUU-PQQ6Rc2alwGWjzrdXLvXGTCdp_f39xON8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin credentials (hardcoded for security - only for admin login)
export const ADMIN_CREDENTIALS = {
  userId: 'Nexlogic19',
  password: '@#!Nexlogic26'
};

export default supabase;
