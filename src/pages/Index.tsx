import HeroSection from "@/components/HeroSection";
import VSLSection from "@/components/VSLSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import CourseContentSection from "@/components/CourseContentSection";
import OfferSection from "@/components/OfferSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => (
  <main>
    <HeroSection />
    <VSLSection />
    <BenefitsSection />
    <SocialProofSection />
    <CourseContentSection />
    <OfferSection />
    <FinalCTASection />
    <footer className="bg-card py-8 text-center font-body text-xs text-muted-foreground">
      <p>© 2025 Pintura Encanta. Todos os direitos reservados.</p>
      <p className="mt-1">Este site não é afiliado ao Facebook ou Google.</p>
    </footer>
  </main>
);

export default Index;
