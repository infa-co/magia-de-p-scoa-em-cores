import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-easter.jpg";
import { useVideo } from "@/contexts/VideoContext";

const HeroSection = () => {
  const { videoFinished } = useVideo();

  const scrollToCTA = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-block rounded-full bg-rose-soft px-4 py-1.5 font-body text-sm font-semibold text-primary">
              🐣 Especial de Páscoa
            </span>
            <h1 className="mb-6 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Aprenda a criar peças{" "}
              <span className="text-primary">encantadoras</span> para a Páscoa
            </h1>
            <p className="mb-4 font-body text-lg text-muted-foreground md:text-xl">
              Mesmo que você <strong>nunca tenha pintado antes</strong>. Um
              método simples, passo a passo, para iniciantes que querem
              transformar criatividade em peças lindas — e até uma renda extra.
            </p>
            <p className="mb-8 font-body text-base italic text-accent">
              ✨ Sem talento? Sem problema. Aqui você aprende do zero.
            </p>
            <Button
              variant="cta"
              size="xl"
              onClick={scrollToCTA}
              className={videoFinished ? "animate-pulse-soft" : ""}
              disabled={!videoFinished}
            >
              {videoFinished ? "Quero Começar Agora →" : "🔒 Assista o vídeo primeiro"}
            </Button>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={heroImg}
              alt="Peças decorativas de Páscoa pintadas à mão"
              className="w-full rounded-2xl shadow-soft"
              width={1280}
              height={720}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
