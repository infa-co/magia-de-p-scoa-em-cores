import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useVideo } from "@/contexts/VideoContext";

const FinalCTASection = () => {
  const { videoFinished } = useVideo();

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
            Não deixe essa oportunidade passar 🌸
          </h2>
          <p className="mb-8 font-body text-muted-foreground">
            A Páscoa está chegando e suas peças podem estar prontas para encantar
            — ou para vender. A escolha é sua.
          </p>
          <Button
            variant="cta"
            size="xl"
            className={videoFinished ? "animate-pulse-soft" : ""}
            disabled={!videoFinished}
            onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Eu Quero!
          </Button>
          <p className="mt-4 font-body text-xs text-muted-foreground">
            Acesso imediato • Garantia de 7 dias • Pagamento seguro
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
