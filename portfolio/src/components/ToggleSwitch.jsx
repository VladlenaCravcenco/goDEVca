// src/components/ToggleSwitch.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ToggleSwitch = ({ onToggle, isDark }) => {
  return (
    <motion.button
      onClick={() => onToggle(!isDark)}
      className="w-12 h-12 rounded-full bg-transparent shadow-md flex items-center justify-center border border-gray-300 hover:scale-105 transition"
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={isDark ? "moon" : "sun"}
          src={isDark ? "/assets/hero/moon.svg" : "/assets/hero/sun.svg"}
          alt="theme icon"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6"
        />
      </AnimatePresence>
    </motion.button>
  );
};

export default ToggleSwitch;