
-- Create toefl_tests table to store basic test information
CREATE TABLE public.toefl_tests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  duration TEXT NOT NULL,
  description TEXT,
  students_taken TEXT DEFAULT '0',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create test_passages table to store reading/listening passages
CREATE TABLE public.test_passages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  test_id UUID REFERENCES public.toefl_tests(id) ON DELETE CASCADE NOT NULL,
  section_type TEXT NOT NULL CHECK (section_type IN ('reading', 'listening', 'speaking', 'writing')),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  order_number INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create test_questions table to store all questions
CREATE TABLE public.test_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  test_id UUID REFERENCES public.toefl_tests(id) ON DELETE CASCADE NOT NULL,
  passage_id UUID REFERENCES public.test_passages(id) ON DELETE CASCADE,
  section_type TEXT NOT NULL CHECK (section_type IN ('reading', 'listening', 'speaking', 'writing')),
  question_number INTEGER NOT NULL,
  question_type TEXT NOT NULL,
  question_text TEXT NOT NULL,
  options JSONB,
  correct_answer JSONB,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (make tables public for now since these are test materials)
ALTER TABLE public.toefl_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_passages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_questions ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access to test materials
CREATE POLICY "Public can view toefl tests" 
  ON public.toefl_tests 
  FOR SELECT 
  USING (true);

CREATE POLICY "Public can view test passages" 
  ON public.test_passages 
  FOR SELECT 
  USING (true);

CREATE POLICY "Public can view test questions" 
  ON public.test_questions 
  FOR SELECT 
  USING (true);

-- Insert sample test data from the existing hardcoded content
INSERT INTO public.toefl_tests (id, title, difficulty, duration, description, students_taken) VALUES 
('00000000-0000-0000-0000-000000000001', 'TOEFL Test 1', 'Beginner', '3 hours', 'A Sample Test is shorter than our other tests and takes around 1 hour to complete. It''ll give you a good feel for what you can expect from our full TOEFL practice tests.', '2,450'),
('00000000-0000-0000-0000-000000000002', 'TOEFL Test 2', 'Beginner', '3 hours', 'A Sample Test is shorter than our other tests and takes around 1 hour to complete. It''ll give you a good feel for what you can expect from our full TOEFL practice tests.', '1,890'),
('00000000-0000-0000-0000-000000000003', 'TOEFL Test 3', 'Intermediate', '3 hours', 'A Sample Test is shorter than our other tests and takes around 1 hour to complete. It''ll give you a good feel for what you can expect from our full TOEFL practice tests.', '2,120');

-- Insert reading passages for Test 1
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number) VALUES 
('00000000-0000-0000-0000-000000000001', 'reading', 'The Cambrian Explosion', '[1] The Cambrian Explosion refers to a relatively brief period in Earth''s history, roughly 541 million years ago, during which a vast number of complex, multicellular organisms rapidly appeared in the fossil record. Prior to this event, most organisms were simple, composed mostly of individual cells or small multicellular structures. Within just a few tens of millions of years, nearly all the major groups of animals known today had appeared, including early arthropods, mollusks, and chordates. This evolutionary burst is one of the most significant biological events in Earth''s history.

[2] Scientists continue to debate the causes of the Cambrian Explosion, as the precise factors remain uncertain. Some suggest it was triggered by environmental changes, such as a rise in atmospheric oxygen, which could have supported more complex body structures and higher metabolic rates. Others point to ecological interactions, such as predator-prey relationships, as a catalyst for evolutionary innovation. These interactions may have driven the development of hard shells and complex movement as organisms adapted for survival.

[3] Another possible explanation involves the evolution of genetic mechanisms, such as the development of Hox genes, which control the body plan of animals. These genes could have provided the flexibility needed to create a wide variety of body forms in a relatively short geological period. In addition, geological evidence indicates that the seafloor during the Cambrian period was rich in nutrients, potentially supporting rapid population growth and diversification.

[4] The fossil evidence from sites like the Burgess Shale in Canada and the Chengjiang formation in China provides an extraordinary window into this pivotal time. These sites preserve soft-bodied organisms in remarkable detail, offering insights into the diversity and complexity of early animal life. Some fossils from these deposits resemble modern animals, while others are so bizarre that scientists struggle to classify them within known taxonomic groups.

[5] Despite its name, the Cambrian Explosion did not happen overnight. It unfolded over about 20 to 25 million years, a short time on a geological scale but still substantial in evolutionary terms. Some researchers argue that the apparent suddenness of the explosion is partly a result of improved fossil preservation during the Cambrian, rather than an actual acceleration in the rate of evolution. In this view, many animal lineages may have originated earlier but left no fossil record due to their soft bodies.

[6] Regardless of the specific causes, the Cambrian Explosion marks a critical juncture in the history of life on Earth. It set the stage for the rise of complex ecosystems and paved the way for future evolutionary developments. Without it, the diversity of life forms that populate the planet today might never have emerged. The event continues to be a focal point for scientists studying the origins and evolution of animal life.', 1),

('00000000-0000-0000-0000-000000000001', 'reading', 'Trade Along the Silk Road', '[1] The Silk Road was not a single road but a vast network of trade routes that connected China with the Mediterranean world. Spanning over 6,000 kilometers, this network enabled the exchange of goods, ideas, technologies, and cultures for more than a thousand years. These routes played a crucial role in the development of early international commerce. The term "Silk Road" was coined in the 19th century by the German geographer Ferdinand von Richthofen, referring to the lucrative trade in silk that was carried out along these routes. Although silk was a major commodity, traders also dealt in spices, glassware, paper, precious metals, and other goods. The Silk Road reached its height during the Tang and Yuan dynasties in China, facilitating interaction between East and West.

[2] One of the critical features of Silk Road commerce was its relay-trade nature. Rather than having goods transported by a single trader along the entire route, merchandise often passed through the hands of many different traders and middlemen. For example, Chinese silk might be traded to Central Asian merchants, who then exchanged it with Persian or Arab traders, eventually reaching the markets of Rome or Constantinople. This system allowed local traders to specialize in certain segments of the route, making the entire operation more efficient and adaptable to political or environmental changes.

[3] The Silk Road also facilitated the transmission of culture and religion. As merchants and pilgrims moved across vast distances, they carried with them not just goods but also stories, beliefs, and technologies. Buddhism, for instance, spread from India to China largely through the efforts of monks traveling along these trade routes. Similarly, artistic styles, architectural motifs, and even culinary practices were shared and adapted by the various civilizations connected by the Silk Road.

[4] Political stability was crucial for the prosperity of the Silk Road. When strong empires such as the Tang dynasty in China or the Mongol Empire under Genghis Khan provided security, trade flourished. These empires maintained roads, suppressed banditry, and established relay stations, which ensured that goods and people could move with relative safety. In contrast, periods of fragmentation or warfare often disrupted trade, causing some routes to become impassable or unsafe. Traders would then divert their goods through alternate paths or switch to maritime trade.

[5] While the overland Silk Road was vital for centuries, maritime trade routes eventually began to rival and, in some areas, surpass it in importance. The rise of naval technology and the exploration of sea routes by Arab, Indian, and later European merchants allowed for the transport of larger quantities of goods at a lower cost. By the 15th century, the maritime Silk Road, connecting China through the South China Sea and Indian Ocean to Africa and Europe, became the dominant channel for trade.

[6] Despite its decline in the early modern period, the Silk Road had a lasting impact on world history. It was instrumental in shaping early globalization by linking distant regions and fostering intercultural exchange. Many of the ideas, inventions, and commodities that moved along the Silk Road influenced societies far from their origin. Today, the legacy of the Silk Road is remembered not only in museums and historical texts but also in modern initiatives aimed at reviving trade connectivity across Eurasia.', 2);
