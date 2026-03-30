import { motion } from "framer-motion";
import { BookOpen, Heart, Sparkles, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Método Passo a Passo",
    description: "Aulas claras e organizadas. Você segue o caminho e vê resultado desde a primeira peça.",
  },
  {
    icon: Sparkles,
    title: "Para Iniciantes Absolutas",
    description: "Nunca pintou? Perfeito. O curso foi feito pensando em quem está começando do zero.",
  },
  {
    icon: DollarSign,
    title: "Renda Extra com Artesanato",
    description: "Aprenda a criar peças que vendem. Páscoa é a época perfeita para começar a faturar.",
  },
  {
    icon: Heart,
    title: "Relaxante e Prazeroso",
    description: "Pintar é terapia. Desconecte do estresse e descubra um hobby que alimenta a alma.",
  },
];

const BenefitsSection = () => (
  <section className="bg-rose-soft/50 py-16 md:py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        className="mb-12 text-center font-display text-2xl font-bold text-foreground md:text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Por que o Pintura Encanta é para você?
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="rounded-2xl bg-background p-6 shadow-card transition-shadow hover:shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-soft">
              <b.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{b.title}</h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
