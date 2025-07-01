
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PracticeSelector from '@/components/PracticeSelector';
import StudyMaterials from '@/components/StudyMaterials';
import FAQSection from '@/components/FAQSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import WorldMapSection from '@/components/WorldMapSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <HeroSection />
      <PracticeSelector />
      <WhyChooseSection />
      {/* <StudyMaterials /> */}
      <WorldMapSection />
      <FAQSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
