import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedText from "@/components/AnimatedText";
import heroPortrait from "@/assets/hero-portrait.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden noise-bg">
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Background Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <h1 className="text-stroke-pink font-display font-bold text-[8vw] md:text-[12vw] leading-none uppercase tracking-tighter whitespace-nowrap opacity-20">
            YOUR NAME
          </h1>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mb-8"
        >
          <div className="w-64 h-80 md:w-80 md:h-[420px] border-2 border-primary glow-pink-strong overflow-hidden relative">
            <img
              src={heroPortrait}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          {/* Decorative corners */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <AnimatedText
            text="Creative Developer"
            as="h2"
            className="font-display font-bold text-3xl md:text-5xl text-foreground mb-3"
            delay={0.8}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-8"
          >
            AI/ML • Full Stack • DevOps • QA
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex gap-4"
        >
          <Link
            to="/projects"
            className="font-mono text-xs uppercase tracking-widest border-2 border-primary text-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="font-mono text-xs uppercase tracking-widest border-2 border-border text-foreground px-6 py-3 hover:border-primary hover:text-primary transition-all duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border-2 border-border flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 bg-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="border-t-2 border-b-2 border-border py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-display text-lg md:text-2xl font-bold text-muted-foreground/30 mx-8">
              AI/ML ✦ FULL STACK ✦ DEVOPS ✦ QA ✦ MLOPS ✦ INNOVATION ✦
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
