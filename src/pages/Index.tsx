import { VideoProvider } from "@/contexts/VideoContext";
import VSLSection from "@/components/VSLSection";
import CourseContentSection from "@/components/CourseContentSection";
import OfferSection from "@/components/OfferSection";

const Index = () => (
  <VideoProvider>
    <main>
      <VSLSection />
      <CourseContentSection />
      <OfferSection />
      <footer className="bg-card py-8 text-center font-body text-xs text-muted-foreground">
        <p>© 2025 Pintura Encanta. Todos os direitos reservados.</p>
        <p className="mt-1">Este site não é afiliado ao Facebook ou Google.</p>
      </footer>
    </main>
  </VideoProvider>
);

export default Index;
