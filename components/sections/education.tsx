"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology - CS",
    institution: "soon",
    year: "maybe 2025",
    description: "Specialized in Computer Science and it's fundamentals.",
  },
  {
    degree: "Web-development Bootcamp",
    institution: "Udemy - Angela Yu",
    year: "2024",
    description: "Focus on full-stack development and software architecture. Dean's List all semesters.",
  },
  {
    degree: "Schooling and Junior College",
    institution: "JDEMS",
    year: "2012-2024",
    description: "Developed critical thinking, problem-solving skills, and a strong work ethic, laying the foundation for my academic and professional growth.",
  },
];

export function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="h-[50rem] max-md:h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
    <section id="education" className="section-padding">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            Education Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary/30 -translate-x-1/2" />

            {/* Timeline items */}
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{item.year}</span>
                    </div>
                    <p className="font-medium text-primary">{item.institution}</p>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
}