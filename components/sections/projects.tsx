"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dice Game",
    description: "A simple yet interactive dice game with a scoring functionality",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    image: "https://cdn.jsdelivr.net/gh/blackholeofuniverse/cdn/dice.png",
    liveUrl: "https://dice-game-sam.vercel.app/",
    githubUrl: "https://github.com/blackholeofuniverse/dice-game",
    isPublised: true
  },
  {
    title: "Promptopia",
    description: "An open-source AI prompting tool for modern world to discover, create and share creative prompts",
    tags: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
    image: "https://cdn.jsdelivr.net/gh/blackholeofuniverse/cdn/promptopia.png",
    liveUrl: "https://promptopia-sam.vercel.app/",
    githubUrl: "https://github.com/blackholeofuniverse/promptopia-sam",
    isPublised: true
  },
  {
    title: "Trade X",
    description: "A paper trading app to enhance your trading skills",
    tags: ["Flutter"],
    image: "https://cdn.jsdelivr.net/gh/blackholeofuniverse/cdn/tradex.png",
    liveUrl: "#",
    githubUrl: "#",
    isPublised: false
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="h-[50rem] max-md:h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
    <section id="projects" className="section-padding">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 bg-card">
                  <div
                    className="h-48 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-xl font-semibold mb-2 relative z-10">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 relative z-10">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {project.isPublised ? (
                      <div className="flex gap-4 relative z-10">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white text-black hover:bg-white/90 transition-colors"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white text-black hover:bg-white/90 transition-colors"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    ) : (<h1 className="text-muted-foreground">Comming soon...</h1>)}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
}