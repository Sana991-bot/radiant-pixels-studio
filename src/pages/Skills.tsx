import SkillCategory from "@/components/SkillCategory";
import { AnimatedLine } from "@/components/AnimatedText";

const skillsData = [
  {
    title: "AI / ML",
    skills: [
      { name: "PyTorch", icon: "🔥" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "Scikit-learn", icon: "📊" },
      { name: "HuggingFace", icon: "🤗" },
      { name: "OpenCV", icon: "👁️" },
      { name: "Pandas", icon: "🐼" },
    ],
  },
  {
    title: "QA",
    skills: [
      { name: "Cypress", icon: "🌲" },
      { name: "Jest", icon: "🃏" },
      { name: "Selenium", icon: "🌐" },
      { name: "Postman", icon: "📮" },
      { name: "K6", icon: "⚡" },
      { name: "JUnit", icon: "☕" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
      { name: "MySQL", icon: "🐬" },
      { name: "Firebase", icon: "🔥" },
      { name: "Supabase", icon: "⚡" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Framer", icon: "✨" },
      { name: "HTML/CSS", icon: "🌐" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "💚" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Express", icon: "🚂" },
      { name: "GraphQL", icon: "◈" },
      { name: "REST", icon: "🔗" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "K8s", icon: "☸️" },
      { name: "AWS", icon: "☁️" },
      { name: "Terraform", icon: "🏗️" },
      { name: "GitHub CI", icon: "🔄" },
      { name: "Linux", icon: "🐧" },
    ],
  },
  {
    title: "MLOps",
    skills: [
      { name: "MLflow", icon: "📈" },
      { name: "Kubeflow", icon: "🔬" },
      { name: "DVC", icon: "📂" },
      { name: "Weights&B", icon: "📊" },
      { name: "Airflow", icon: "🌀" },
      { name: "BentoML", icon: "🍱" },
    ],
  },
];

const Skills = () => (
  <div className="min-h-screen bg-background pt-24 pb-16 px-6">
    <div className="max-w-6xl mx-auto">
      <AnimatedLine>
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">04 — Skills</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground leading-tight">
            Tech <span className="text-gradient-pink">Stack</span>
          </h1>
          <div className="h-[2px] w-24 bg-primary mt-6 origin-left animate-line-grow" />
        </div>
      </AnimatedLine>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, i) => (
          <SkillCategory key={category.title} title={category.title} skills={category.skills} index={i} />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
