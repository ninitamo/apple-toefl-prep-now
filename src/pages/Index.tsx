
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ToeflTestsList from '@/components/ToeflTestsList';
import StudyMaterials from '@/components/StudyMaterials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ToeflTestsList />
      <StudyMaterials />
      <Footer />
    </div>
  );
};

export default Index;
