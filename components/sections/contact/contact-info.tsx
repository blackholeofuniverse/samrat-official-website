"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "samratbandre@gmail.com",
    delay: 0.1,
  },
  {
    icon: Linkedin,
    label: "Linkedin",
    value: "om-bandre-758a4425b",
    delay: 0.2,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maharashtra, India",
    delay: 0.3,
  },
  {
    icon: Globe,
    label: "Website",
    value: "samratfx.vercel.app",
    delay: 0.4,
  },
];

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactInfo.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-start space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: item.delay }}
        >
          <div className="p-3 rounded-full bg-primary/10">
            <item.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">{item.label}</h3>
            <p className="text-muted-foreground">{item.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}