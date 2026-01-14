import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import type { EducationItem } from "@/types";

const education: EducationItem[] = [
  {
    id: "1",
    institution: "American University of Sharjah",
    degree: "Bachelor of Science",
    field: "Computer Engineering",
    duration: "Fall 2020 - Fall 2024",
    gpa: "3.08/4.0",
    achievements: [
      "Merit Scholar Recipient"
    ],
    courses: [
      "Neural Networks",
      "Machine Learning",
      "Software Design",
      "Software Engineering",
      "Object-Oriented Programming",
      "Database Management System",
      "Data Structures",
      "Computer Architecture"
    ]
  },
  {
    id: "2",
    institution: "Dunes International School",
    degree: "High School Diploma",
    field: "Science Track",
    duration: "Aug 2018 - Jun 2020",
    gpa: "92.4%",
    achievements: [
      "SAT I: 1120",
      "SAT II: 2110"
    ],
    courses: []
  }
];

export const Education = () => {
  return (
    <section id="education" className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-20 gradient-bg">
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="Education"
          subtitle="Academic background and continuous learning"
        />

        <div className="space-y-4 sm:space-y-6">
          {education.map((edu, index) => (
            <AnimatedCard 
              key={edu.id}
              delay={index * 0.1}
              hoverScale={1.01}
              className="p-4 sm:p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4 sm:mb-6">
                <div className="flex items-start gap-3 sm:gap-4 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">{edu.institution}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-primary mb-1">
                      {edu.degree} in {edu.field}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-muted-foreground text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{edu.duration}</span>
                      </div>
                      {edu.gpa && (
                        <Badge variant="secondary" className="bg-secondary/50 text-xs">
                          GPA: {edu.gpa}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              {edu.achievements.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <Award className="w-4 h-4 text-primary flex-shrink-0" />
                    <h4 className="font-semibold text-sm sm:text-base">Achievements</h4>
                  </div>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm sm:text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Relevant Courses */}
              <div>
                <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <Badge key={course} variant="outline" className="border-border/50 text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
