"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CodeEditor from "../code-editor";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="h-[50rem] max-md:h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container-width flex gap-10 items-center max-md:flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creating Digital Experiences That Matter
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-stack developer specializing in building exceptional digital
            experiences. Let&apos;s bring your ideas to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-md:flex flex-col gap-4"
          >
            <Button size="lg" className="mr-4 max-md:w-full">
            <Link href={"#projects"}>View Projects</Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Link href={"#contact"}>Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>
        <CodeEditor />
      </div>
    </section>
    </div>
  );
}