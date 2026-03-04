import { motion } from "framer-motion";
import { Mail, Linkedin, Download, Send } from "lucide-react";
import { AnimatedLine } from "@/components/AnimatedText";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:your@email.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedLine>
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">06 — Contact</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground leading-tight">
              Let's <span className="text-gradient-pink">Talk</span>
            </h1>
            <div className="h-[2px] w-24 bg-primary mt-6 origin-left animate-line-grow" />
          </div>
        </AnimatedLine>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <AnimatedLine delay={0.2}>
            <div className="space-y-4">
              <a href="mailto:your@email.com" className="flex items-center gap-4 border-2 border-border p-5 bg-card hover:border-primary transition-all duration-200 group">
                <Mail className="text-primary" size={20} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">your@email.com</p>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-2 border-border p-5 bg-card hover:border-primary transition-all duration-200 group">
                <Linkedin className="text-primary" size={20} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">LinkedIn</p>
                  <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">linkedin.com/in/yourprofile</p>
                </div>
              </a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 border-2 border-primary bg-primary text-primary-foreground p-5 font-mono text-xs uppercase tracking-widest hover:bg-primary/90 transition-all duration-200"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </div>
          </AnimatedLine>

          {/* Form */}
          <AnimatedLine delay={0.4}>
            <form onSubmit={handleSubmit} className="border-2 border-border bg-card p-6 space-y-4">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-background border-2 border-border p-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-background border-2 border-border p-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={5}
                  className="w-full bg-background border-2 border-border p-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 border-2 border-primary text-primary p-3 font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Send size={14} />
                Send Message
              </motion.button>
            </form>
          </AnimatedLine>
        </div>
      </div>
    </div>
  );
};

export default Contact;
