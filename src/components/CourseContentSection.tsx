import { motion } from "framer-motion";
import { CheckCircle2, Gift } from "lucide-react";

const modules = [
  { title: "Primeiros Passos", items: ["Materiais essenciais", "Preparação do pano", "Técnicas básicas de pinceladas"] },
  { title: "Módulo 1 — Primeiro Pano", items: ["Passo a passo completo", "Técnicas de pinceladas", "Acabamento perfeito"] },
  { title: "Módulo 2 — Segundo Pano", items: ["Novas técnicas", "Composição e harmonia", "Detalhes que encantam"] },
  { title: "Módulo 3 — Terceiro Pano", items: ["Combinação de cores", "Efeitos especiais", "Detalhes que encantam"] },
  { title: "Módulo 4 — Quarto Pano", items: ["Peça completa avançada", "Toques finais profissionais", "Pronta para vender ou presentear"] },
];

const bonuses = [
  { title: "Bônus 1", description: "Comunidade no WhatsApp exclusiva" },
  { title: "Bônus 2", description: "10 riscos extras" },
  { title: "Bônus 3", description: "Guia de materiais escondidos" },
];

const CourseContentSection = () => (
  <section className="bg-rose-soft/30 py-16 md:py-20">
    <div className="container mx-auto max-w-4xl px-4">
      <motion.h2
        className="mb-4 text-center font-display text-2xl font-bold text-foreground md:text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        O que você terá acesso
      </motion.h2>
      <p className="mb-12 text-center font-body text-muted-foreground">
        Um caminho completo do zero à sua primeira venda
      </p>

      {/* Módulos */}
      <div className="mb-12 grid gap-6 md:grid-cols-2">
        {modules.map((m, i) => (
          <motion.div
            key={m.title}
            className="rounded-2xl bg-background p-6 shadow-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">{m.title}</h3>
            <ul className="space-y-2.5">
              {m.items.map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bônus */}
      <motion.h3
        className="mb-6 text-center font-display text-xl font-bold text-primary md:text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        🎁 E mais 3 Bônus Exclusivos
      </motion.h3>

      <div className="grid gap-4 md:grid-cols-3">
        {bonuses.map((b, i) => (
          <motion.div
            key={b.title}
            className="rounded-2xl border-2 border-primary/20 bg-background p-5 text-center shadow-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Gift className="mx-auto mb-3 h-8 w-8 text-primary" />
            <h4 className="mb-2 font-display text-base font-semibold text-foreground">{b.title}</h4>
            <p className="font-body text-sm text-muted-foreground">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CourseContentSection;
