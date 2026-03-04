import SocialCard from "@/components/SocialCard";
import { AnimatedLine } from "@/components/AnimatedText";
import social1 from "@/assets/social-1.png";
import social2 from "@/assets/social-2.png";
import social3 from "@/assets/social-3.png";

const socialWorkData = [
  {
    title: "Community Code Workshop",
    description: "Organized and led a series of free coding workshops for underprivileged youth in the community. Taught fundamentals of web development and helped 50+ students build their first websites.",
    image: social1,
  },
  {
    title: "Tech Mentorship Program",
    description: "Volunteered as a mentor in a tech education program, guiding aspiring developers through their learning journey. Provided one-on-one coaching, code reviews, and career guidance.",
    image: social2,
  },
  {
    title: "Charity Hackathon Organizer",
    description: "Co-organized a 48-hour charity hackathon bringing together 100+ developers to build solutions for local nonprofits. Raised awareness and delivered 12 working projects to organizations in need.",
    image: social3,
  },
];

const SocialWork = () => (
  <div className="min-h-screen bg-background pt-24 pb-16 px-6">
    <div className="max-w-4xl mx-auto">
      <AnimatedLine>
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">05 — Social Work</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground leading-tight">
            Giving <span className="text-gradient-pink">Back</span>
          </h1>
          <div className="h-[2px] w-24 bg-primary mt-6 origin-left animate-line-grow" />
        </div>
      </AnimatedLine>

      <div className="space-y-6">
        {socialWorkData.map((item, i) => (
          <SocialCard key={item.title} {...item} index={i} />
        ))}
      </div>
    </div>
  </div>
);

export default SocialWork;
