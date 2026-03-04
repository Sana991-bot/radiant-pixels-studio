import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  index: number;
}

const SkillCategory = ({ title, skills, index }: SkillCategoryProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="border-2 border-border bg-card p-6 hover:border-primary transition-all duration-300 hover-lift"
  >
    <h3 className="font-display font-bold text-lg text-primary mb-5 pb-3 border-b-2 border-border uppercase tracking-wide">
      {title}
    </h3>
    <div className="grid grid-cols-3 gap-3">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, y: -4 }}
          className="flex flex-col items-center gap-2 p-3 border border-border hover:border-primary transition-all duration-200 group cursor-default"
        >
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors text-center">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default SkillCategory;
