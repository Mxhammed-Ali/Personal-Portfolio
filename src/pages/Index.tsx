import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { WorkExperience } from "@/components/WorkExperience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section id="home">
        <Hero />
      </section>
      <section id="bento">
        <BentoGrid />
      </section>
      <section id="experience">
        <WorkExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <Navigation />
    </main>
  );
};

export default Index;
