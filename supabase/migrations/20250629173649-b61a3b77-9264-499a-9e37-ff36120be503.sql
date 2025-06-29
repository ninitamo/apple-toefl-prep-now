
-- Create institutions table
CREATE TABLE public.institutions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  min_score INTEGER,
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert sample institutions data
INSERT INTO public.institutions (name, country, min_score, website) VALUES
('University of Amsterdam', 'Netherlands', 90, 'https://www.uva.nl'),
('Ludwig Maximilian University', 'Germany', 80, 'https://www.uni-muenchen.de'),
('University of Oxford', 'United Kingdom', 100, 'https://www.ox.ac.uk'),
('Sorbonne University', 'France', 85, 'https://www.sorbonne-universite.fr'),
('University of Copenhagen', 'Denmark', 83, 'https://www.ku.dk'),
('ETH Zurich', 'Switzerland', 95, 'https://ethz.ch'),
('University of Warsaw', 'Poland', 72, 'https://www.uw.edu.pl'),
('University of Barcelona', 'Spain', 80, 'https://www.ub.edu'),
('KU Leuven', 'Belgium', 79, 'https://www.kuleuven.be'),
('Charles University', 'Czech Republic', 75, 'https://www.cuni.cz');

-- Enable Row Level Security (institutions are public data, so allow read access to everyone)
ALTER TABLE public.institutions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read institutions
CREATE POLICY "Anyone can view institutions" 
  ON public.institutions 
  FOR SELECT 
  USING (true);
