import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ojhyoprgrmmnpiaavsiq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaHlvcHJncm1tbnBpYWF2c2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0NjcyMzYsImV4cCI6MjA0MjA0MzIzNn0.lK6ZuAa1ief6QdDd6aatGjLGilQEI-WKyXeBHPVI714";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
