import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Gift, Lock } from "lucide-react";
import { useVideo } from "@/contexts/VideoContext";

const OfferSection = () => {
  const { videoFinished } = useVideo();

  return (
    <section id="oferta" className="bg-[image:var(--gradient-offer)] py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 font-body text-sm font-semibold text-primary">
            <Clock className="h-4 w-4" />
            Desconto por tempo limitado
          </span>

          <h2 className="mb-2 font-display text-2xl font-bold text-foreground md:text-4xl">
            Garanta seu acesso agora
          </h2>
          <p className="mb-8 font-body text-muted-foreground">
            Tudo o que você precisa para começar a pintar peças encantadoras
          </p>

          <div className="mx-auto mb-8 max-w-sm rounded-2xl bg-background p-8 shadow-soft">
            <p className="mb-1 font-body text-sm text-muted-foreground line-through">De R$ 197,00</p>
            <p className="mb-1 font-display text-5xl font-bold text-primary">R$ 67</p>
            <p className="mb-6 font-body text-sm text-muted-foreground">
              ou 12x de R$ 6,58
            </p>

            <div className="mb-6 flex items-center justify-center gap-2 rounded-lg bg-sage/50 px-4 py-2">
              <Gift className="h-4 w-4 text-primary" />
              <span className="font-body text-sm font-medium text-foreground">
                Economize R$ 130,00 hoje
              </span>
            </div>

            <Button
              variant="cta"
              size="xl"
              className={`w-full ${videoFinished ? "animate-pulse-soft" : ""}`}
              disabled={!videoFinished}
            >
              {videoFinished ? "Eu Quero! 🎨" : (
                <span className="flex items-center gap-2">
                  <Lock className="h-4 w-4" /> Assista o vídeo para liberar
                </span>
              )}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-xl bg-background/60 px-6 py-4">
            <Shield className="h-8 w-8 shrink-0 text-primary" />
            <div className="text-left">
              <p className="font-body text-sm font-semibold text-foreground">
                Garantia incondicional de 7 dias
              </p>
              <p className="font-body text-xs text-muted-foreground">
                Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
