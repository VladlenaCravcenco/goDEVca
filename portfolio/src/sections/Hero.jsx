import { motion } from "framer-motion";
import "/src/Hero.css";

const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionDiv = motion.div;

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroCenter">
        <MotionH1
          className="heroTitle"
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Design <span className="heroTitleMuted">Portfolio</span>
        </MotionH1>

        <MotionP
          className="heroSubtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Scroll to open folders
        </MotionP>
      </div>

      <MotionDiv
        className="heroScroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="scrollCapsule">
          <MotionDiv
            className="scrollDot"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <MotionDiv
          className="scrollArrow"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}