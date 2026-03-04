import { motion } from "framer-motion";
import { AnimatedLine } from "@/components/AnimatedText";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedLine>
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">01 — About</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground leading-tight">
              Who I <span className="text-gradient-pink">Am</span>
            </h1>
            <div className="h-[2px] w-24 bg-primary mt-6 origin-left animate-line-grow" />
          </div>
        </AnimatedLine>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedLine delay={0.2} className="md:col-span-2">
            <div className="border-2 border-border p-8 bg-card">
              <p className="font-body text-lg text-foreground leading-relaxed mb-6">
                I'm a passionate and enthusiastic developer with a love for building intelligent,
                scalable, and beautifully crafted digital experiences. My journey spans across
                AI/ML, full-stack development, DevOps, and quality assurance — giving me a
                holistic perspective on how great software is built from the ground up.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                I thrive in environments where creativity meets technical precision. Whether it's
                training a neural network, designing a CI/CD pipeline, or crafting pixel-perfect
                interfaces — I bring the same level of dedication and enthusiasm to everything I do.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me volunteering in community tech programs,
                mentoring aspiring developers, or exploring the latest in AI research. I believe
                technology should be a force for good, and I'm committed to making that a reality.
              </p>
            </div>
          </AnimatedLine>

          <AnimatedLine delay={0.4}>
            <div className="space-y-4">
              {[
                { label: "Location", value: "Your City" },
                { label: "Education", value: "BS Computer Science" },
                { label: "Focus", value: "AI/ML & Full Stack" },
                { label: "Available", value: "Open to opportunities" },
              ].map((item) => (
                <div key={item.label} className="border-2 border-border p-4 bg-card hover:border-primary transition-colors duration-200">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">{item.label}</p>
                  <p className="font-display font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </AnimatedLine>
        </div>

        {/* Stats */}
        <AnimatedLine delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { number: "20+", label: "Projects" },
              { number: "6+", label: "Domains" },
              { number: "3+", label: "Years Experience" },
              { number: "∞", label: "Enthusiasm" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, borderColor: "hsl(340, 82%, 76%)" }}
                className="border-2 border-border p-6 text-center bg-card transition-all duration-200"
              >
                <p className="font-display font-bold text-3xl text-primary mb-1">{stat.number}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedLine>
      </div>
    </div>
  );
};

export default About;
