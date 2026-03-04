import { motion } from "framer-motion";

interface SocialCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const SocialCard = ({ title, description, image, index }: SocialCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="flex flex-col md:flex-row border-2 border-border bg-card overflow-hidden hover:border-primary transition-all duration-300 hover-lift"
  >
    <div className="md:w-1/3 h-48 md:h-auto border-b-2 md:border-b-0 md:border-r-2 border-border overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="p-6 md:w-2/3 flex flex-col justify-center">
      <h3 className="font-display font-bold text-xl text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground font-body leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default SocialCard;
