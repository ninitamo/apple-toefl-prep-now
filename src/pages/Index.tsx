
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/30 transition-colors duration-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

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
