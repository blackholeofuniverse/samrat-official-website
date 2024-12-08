"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function MenuItems({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {menuItems.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            href={item.href}
            className="relative text-sm font-medium hover:text-primary transition-colors group"
            onClick={onClick}
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </Link>
        </motion.div>
      ))}
    </>
  );
}