import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "1",
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["Python", "C++", "JavaScript", "TypeScript", "HTML", "CSS", "Java"]
  },
  {
    id: "2",
    title: "Frameworks & Libraries",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    skills: ["FastAPI", "Next.js", "React", "React Native", "Tailwind CSS"]
  },
  {
    id: "3",
    title: "Databases",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["MySQL", "Oracle SQL"]
  },
  {
    id: "4",
    title: "AI/ML & Tools",
    icon: <Brain className="w-6 h-6 text-primary" />,
    skills: [
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "RAG Pipelines",
      "CNNs",
      "LanceDB",
      "FAISS",
      "Ollama",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Microsoft Azure",
      "Joget",
      "CI/CD (Git Actions)",
      "Docker"
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Skills & Technologies"
          subtitle="Technical expertise and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedCard 
              key={category.id}
              delay={index * 0.1}
              className="p-4 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-secondary/50 hover:bg-secondary/70 transition-colors text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
