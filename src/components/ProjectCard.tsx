import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  tools: string[];
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setExpanded(!expanded)}
      className="group border-2 border-border bg-card hover:border-primary transition-all duration-300 cursor-pointer hover-lift overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden border-b-2 border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 z-20 font-mono text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-2 py-1 border-2 border-primary">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tools.map((tool) => (
            <span key={tool} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">
              {tool}
            </span>
          ))}
        </div>

        {/* Expanded Description */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
            {project.description}
          </p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary border-2 border-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Github size={14} /> View on GitHub <ExternalLink size={12} />
          </a>
        </motion.div>

        {!expanded && (
          <p className="text-xs text-muted-foreground font-mono mt-2">Click to expand →</p>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
