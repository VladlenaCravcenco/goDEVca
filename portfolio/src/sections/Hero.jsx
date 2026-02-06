import { motion } from "framer-motion";
import "/src/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroCenter">
        <motion.h1
          className="heroTitle"
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Design <span className="heroTitleMuted">Portfolio</span>
        </motion.h1>

        <motion.p
          className="heroSubtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Scroll to open folders
        </motion.p>
      </div>

      <motion.div
        className="heroScroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="scrollCapsule">
          <motion.div
            className="scrollDot"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="scrollArrow"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}