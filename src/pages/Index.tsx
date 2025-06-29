
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PracticeSelector from '@/components/PracticeSelector';
import StudyMaterials from '@/components/StudyMaterials';
import FAQSection from '@/components/FAQSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PracticeSelector />
      <WhyChooseSection />
      <StudyMaterials />
      <FAQSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
