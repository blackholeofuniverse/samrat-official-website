"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { ContactForm } from "./contact/contact-form";
import { ContactInfo } from "./contact/contact-info";
import { SocialLinks } from "./contact/social-links";

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="h-[50rem] max-md:h-full w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
    <section id="contact" className="section-padding min-h-screen py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-background/50 backdrop-blur-sm border-primary/10">
              <ContactForm />
            </Card>

            <div className="space-y-8">
              <Card className="p-8 bg-background/50 backdrop-blur-sm border-primary/10">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <ContactInfo />
              </Card>

              <Card className="p-8 bg-background/50 backdrop-blur-sm border-primary/10">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <SocialLinks />
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
}