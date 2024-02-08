import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rjmgbehtflyjndfuwicr.supabase.co";
// eslint-disable-next-line no-undef
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqbWdiZWh0Zmx5am5kZnV3aWNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyMzQ4NjksImV4cCI6MjAyMjgxMDg2OX0.cOcg-3KI7UXZNHZPhuYkGA6hEKPpjPXLr4SSfFOCxt8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
