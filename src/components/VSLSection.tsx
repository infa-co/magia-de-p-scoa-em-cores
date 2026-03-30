import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useVideo } from "@/contexts/VideoContext";

const VSLSection = () => {
  const [playing, setPlaying] = useState(false);
  const { setVideoFinished } = useVideo();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Listen for YouTube API messages to detect video end
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        // YouTube iframe API sends playerState 0 when video ends
        if (data.event === "onStateChange" && data.info === 0) {
          setVideoFinished(true);
        }
      } catch {
        // ignore non-JSON messages
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [setVideoFinished]);

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <motion.h2
          className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Assista e descubra como é simples
        </motion.h2>
        <p className="mb-8 font-body text-muted-foreground">
          Em poucos minutos, você vai ver que pintar peças lindas está ao seu
          alcance — mesmo começando do absoluto zero.
        </p>

        <motion.div
          className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl bg-card shadow-soft"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&enablejsapi=1"
              title="Pintura Encanta - VSL"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </motion.div>

        <p className="mt-6 font-body text-sm text-muted-foreground">
          🎨 Mais de <strong>2.000 alunas</strong> já transformaram suas vidas
          com a pintura decorativa
        </p>
      </div>
    </section>
  );
};

export default VSLSection;
