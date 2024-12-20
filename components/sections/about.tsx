"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-secondary">
      <motion.div
        ref={ref}
        className="container-width"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground">
                I&apos;m a self-taught full-stack developer with a keen eye for design and
                a love for creating seamless user experiences. With years of
                experience in web development, I specialize in building modern,
                responsive applications that solve real-world problems.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">What I Do</h3>
              <p className="text-muted-foreground">
                I transform ideas into reality through clean, efficient code and
                intuitive design. My expertise spans front-end and back-end
                development, with a focus on creating scalable solutions that help
                businesses grow.
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}