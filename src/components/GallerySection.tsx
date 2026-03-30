import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const images = [
  { src: work1, alt: "Pano de Páscoa pintado à mão com coelhinho" },
  { src: work2, alt: "Panos decorativos de Páscoa com coelhos pintados" },
  { src: work3, alt: "Pano de prato com coelhinho pintado à mão" },
  { src: work4, alt: "Artesã mostrando panos de Páscoa pintados" },
];

const GallerySection = () => (
  <section className="bg-card py-16 md:py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        className="mb-4 text-center font-display text-2xl font-bold text-foreground md:text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Veja algumas peças incríveis 🎨
      </motion.h2>
      <p className="mb-10 text-center font-body text-muted-foreground">
        Panos pintados à mão pelas nossas alunas
      </p>
      <div className="grid grid-cols-2 gap-3 md:gap-5">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-2xl shadow-soft"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
