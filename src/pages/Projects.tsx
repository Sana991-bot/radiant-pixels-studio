import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { Project } from "@/components/ProjectCard";
import { AnimatedLine } from "@/components/AnimatedText";

const categories = ["All", "AI/ML", "QA", "Full Stack", "DevOps", "MLOps", "Final Year Project"];

const projects: Project[] = [
  // AI/ML
  { title: "Sentiment Analyzer", description: "NLP-based sentiment analysis tool using transformer models to classify text sentiment across social media platforms. Features real-time analysis dashboard and batch processing capabilities.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop", github: "https://github.com", tools: ["Python", "PyTorch", "HuggingFace", "FastAPI"], category: "AI/ML" },
  { title: "Image Classifier", description: "CNN-based image classification system trained on custom datasets with 95%+ accuracy. Includes data augmentation pipeline and model explainability features.", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop", github: "https://github.com", tools: ["TensorFlow", "Keras", "OpenCV", "Flask"], category: "AI/ML" },
  { title: "Recommendation Engine", description: "Collaborative filtering recommendation system using matrix factorization and deep learning approaches for personalized content suggestions.", image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop", github: "https://github.com", tools: ["Python", "Scikit-learn", "Surprise", "Redis"], category: "AI/ML" },

  // QA
  { title: "E2E Testing Framework", description: "Comprehensive end-to-end testing framework built with Cypress and custom utilities for automated regression testing across web applications.", image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=400&fit=crop", github: "https://github.com", tools: ["Cypress", "Jest", "TypeScript", "CI/CD"], category: "QA" },
  { title: "API Test Suite", description: "Automated API testing suite with contract testing, load testing, and comprehensive test reporting. Integrated with CI/CD pipelines.", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop", github: "https://github.com", tools: ["Postman", "Newman", "K6", "GitHub Actions"], category: "QA" },

  // Full Stack
  { title: "Social Platform", description: "Full-stack social media platform with real-time messaging, post feeds, and user authentication. Built with modern web technologies and scalable architecture.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", github: "https://github.com", tools: ["React", "Node.js", "PostgreSQL", "Socket.io"], category: "Full Stack" },
  { title: "E-Commerce Dashboard", description: "Admin dashboard for e-commerce management with analytics, inventory tracking, and order management. Features real-time data visualization.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", github: "https://github.com", tools: ["Next.js", "Prisma", "Tailwind", "Stripe"], category: "Full Stack" },
  { title: "Task Management App", description: "Kanban-style project management application with drag-and-drop, team collaboration, and deadline tracking features.", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop", github: "https://github.com", tools: ["React", "Express", "MongoDB", "DnD Kit"], category: "Full Stack" },

  // DevOps
  { title: "K8s Deployment Pipeline", description: "Automated Kubernetes deployment pipeline with blue-green deployments, automated rollbacks, and comprehensive monitoring integration.", image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop", github: "https://github.com", tools: ["Kubernetes", "Helm", "ArgoCD", "Terraform"], category: "DevOps" },
  { title: "Infrastructure as Code", description: "Complete IaC setup for multi-cloud deployment using Terraform and Ansible with automated provisioning and configuration management.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop", github: "https://github.com", tools: ["Terraform", "Ansible", "AWS", "Docker"], category: "DevOps" },

  // MLOps
  { title: "ML Pipeline Orchestrator", description: "End-to-end ML pipeline with automated training, validation, model versioning, and deployment using MLflow and Kubeflow.", image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=400&fit=crop", github: "https://github.com", tools: ["MLflow", "Kubeflow", "DVC", "Python"], category: "MLOps" },
  { title: "Model Monitoring System", description: "Real-time model performance monitoring with data drift detection, automated retraining triggers, and alerting system.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", github: "https://github.com", tools: ["Evidently", "Grafana", "Prometheus", "Python"], category: "MLOps" },

  // Final Year Project
  { title: "AI Health Diagnostics", description: "Final year capstone project — AI-powered health diagnostics platform using deep learning for medical image analysis with explainable AI features and doctor dashboard.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop", github: "https://github.com", tools: ["PyTorch", "React", "FastAPI", "Docker", "GradCAM"], category: "Final Year Project" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedLine>
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">03 — Projects</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground leading-tight">
              My <span className="text-gradient-pink">Work</span>
            </h1>
            <div className="h-[2px] w-24 bg-primary mt-6 origin-left animate-line-grow" />
          </div>
        </AnimatedLine>

        {/* Filter */}
        <AnimatedLine delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2 border-2 transition-all duration-200
                  ${activeCategory === cat
                    ? "border-primary text-primary bg-primary/10"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedLine>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
