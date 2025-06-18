
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TestSections from '@/components/TestSections';
import ProgressDashboard from '@/components/ProgressDashboard';
import StudyMaterials from '@/components/StudyMaterials';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TestSections />
      <ProgressDashboard />
      <StudyMaterials />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
