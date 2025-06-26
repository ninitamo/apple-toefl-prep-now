
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PracticeSelector from '@/components/PracticeSelector';
import StudyMaterials from '@/components/StudyMaterials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PracticeSelector />
      <StudyMaterials />
      <Footer />
    </div>
  );
};

export default Index;
