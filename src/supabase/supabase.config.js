import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ejfowymhmuuwzsuwytbr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZm93eW1obXV1d3pzdXd5dGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3ODA4NzMsImV4cCI6MjA0ODM1Njg3M30.tlf4tLLf6fwOehx4U8j3fiLXAPgMv933ofmUrSIfu0M';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;