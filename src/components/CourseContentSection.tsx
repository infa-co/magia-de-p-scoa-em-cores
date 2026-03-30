import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const modules = [
  { title: "Módulo 1 — Primeiros Passos", items: ["Materiais essenciais", "Preparação da superfície", "Técnicas básicas de pinceladas"] },
  { title: "Módulo 2 — Pintura de Páscoa", items: ["Ovos decorativos", "Coelhinhos encantadores", "Flores e detalhes delicados"] },
  { title: "Módulo 3 — Acabamento Profissional", items: ["Verniz e proteção", "Combinação de cores", "Detalhes que valorizam a peça"] },
  { title: "Módulo 4 — Vendendo suas Peças", items: ["Como precificar", "Fotos que vendem", "Onde e como divulgar"] },
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
        O que você vai aprender
      </motion.h2>
      <p className="mb-12 text-center font-body text-muted-foreground">
        Um caminho completo do zero à sua primeira venda
      </p>

      <div className="grid gap-6 md:grid-cols-2">
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
    </div>
  </section>
);

export default CourseContentSection;
