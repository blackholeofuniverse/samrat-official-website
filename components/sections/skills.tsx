"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const skills = [
  { name: "Frontend Development", level: 90 },
  { name: "Backend Development", level: 85 },
  { name: "UI/UX Design", level: 70 },
  { name: "Python", level: 60 },
  { name: "Mobile Development", level: 40 },
];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [progressValues, setProgressValues] = useState(skills.map(() => 0));

  useEffect(() => {
    if (inView) {
      const timeouts = skills.map((skill, index) => {
        return setTimeout(() => {
          setProgressValues(prev => {
            const newValues = [...prev];
            newValues[index] = skill.level;
            return newValues;
          });
        }, index * 200); // Stagger the animations
      });

      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout));
      };
    }
  }, [inView]);

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            Skills & Expertise
          </h2>

          <Card className="p-6">
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">
                      {Math.round(progressValues[index])}%
                    </span>
                  </div>
                  <Progress 
                    value={progressValues[index]} 
                    className="h-2"
                  />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}