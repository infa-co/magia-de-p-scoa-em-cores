import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useVideo } from "@/contexts/VideoContext";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const VSLSection = () => {
  const [playing, setPlaying] = useState(false);
  const { videoFinished, unlockProgress } = useVideo();
  const iframeRef = useRef<HTMLIFrameElement>(null);


  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <motion.h1
          className="mb-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Descubra o segredo que está fazendo artesãs a pintarem{" "}
          <span className="text-primary">panos pela primeira vez.</span>
        </motion.h1>

        <motion.p
          className="mb-8 font-body text-base text-muted-foreground md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Assista agora e descubra o método que está fazendo milhares de artesãs
          pintarem panos pela primeira vez.{" "}
          <strong>Em menos de 30 dias suas pinturas vão dar um salto de qualidade.</strong>
        </motion.p>

        <motion.div
          className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl bg-card shadow-soft"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {!playing ? (
            <button
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 flex cursor-pointer items-center justify-center bg-foreground/5 transition-colors hover:bg-foreground/10"
              aria-label="Reproduzir vídeo"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-cta transition-transform group-hover:scale-110">
                <Play className="ml-1 h-8 w-8 text-primary-foreground" fill="currentColor" />
              </div>
            </button>
          ) : (
            <iframe
              ref={iframeRef}
              className="absolute inset-0 h-full w-full"
              src="https://youtu.be/iFWIR9TAj3w?si=qM61obORj5R8yWeQ"
              title="Pintura Encanta - VSL"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-xl">
            <Button
              variant="cta"
              size="xl"
              className={`w-full ${videoFinished ? "animate-pulse-soft" : ""}`}
              disabled={!videoFinished}
              onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
            >
              Eu Quero!
            </Button>
            {!videoFinished && (
              <div
                className="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-100"
                style={{ width: `${unlockProgress * 100}%` }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSLSection;
