"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MenuItems } from "./menu-items";

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-[4rem] left-0 right-0 bg-card/95 backdrop-blur-md p-6 border-t border-border z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <nav className="flex flex-col space-y-6">
              <MenuItems onClick={onClose} />
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}