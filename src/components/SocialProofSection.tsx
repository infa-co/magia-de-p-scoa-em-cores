import { motion } from "framer-motion";
import { Star } from "lucide-react";
import beforeAfterImg from "@/assets/before-after.jpg";

const testimonials = [
  {
    name: "Mariana S.",
    text: "Eu achava que não levava jeito pra nada. Depois do curso, já vendi 30 peças na primeira Páscoa! Incrível.",
    stars: 5,
  },
  {
    name: "Cláudia R.",
    text: "As aulas são tão claras que até minha filha de 12 anos conseguiu acompanhar. Amamos pintar juntas!",
    stars: 5,
  },
  {
    name: "Fernanda L.",
    text: "O curso mudou minha vida. Encontrei uma atividade que me relaxa e ainda gera uma renda extra maravilhosa.",
    stars: 5,
  },
];

const SocialProofSection = () => (
  <section className="bg-background py-16 md:py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        className="mb-4 text-center font-display text-2xl font-bold text-foreground md:text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Veja o que nossas alunas dizem
      </motion.h2>
      <p className="mb-12 text-center font-body text-muted-foreground">
        Resultados reais de mulheres que começaram do zero
      </p>

      {/* Before/After */}
      <motion.div
        className="mx-auto mb-14 max-w-xl overflow-hidden rounded-2xl shadow-soft"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={beforeAfterImg}
          alt="Antes e depois: peça sem pintura e depois pintada"
          className="w-full"
          loading="lazy"
          width={1024}
          height={576}
        />
        <div className="flex bg-card">
          <span className="flex-1 py-3 text-center font-body text-sm font-semibold text-muted-foreground">
            Antes
          </span>
          <span className="flex-1 py-3 text-center font-body text-sm font-semibold text-primary">
            Depois ✨
          </span>
        </div>
      </motion.div>

      {/* Testimonials */}
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="rounded-2xl bg-card p-6 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="mb-4 font-body text-sm italic leading-relaxed text-foreground">
              "{t.text}"
            </p>
            <p className="font-body text-sm font-semibold text-primary">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
