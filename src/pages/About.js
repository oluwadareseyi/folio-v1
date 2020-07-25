import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const About = () => {
  useEffect(() => {
    fadeUp(".about .text", 0.8);
  }, []);
  return (
    <>
      <motion.div
        initial={{ height: "100%" }}
        // animate={{ height: "0%", transition: { ...transition, delay: 1 } }}
        className="transition"
      />
      <motion.div
        exit={{ height: "100%", transition }}
        className="transition2"
      />
      <motion.div
        initial={{ height: 0, visibility: "hidden" }}
        animate={{
          height: "100vh",
          visibility: "visible",
          transition: { ...transition, duration: 1, delay: -0.2 },
        }}
        className="about"
      >
        <div className="text">This is the about page</div>
      </motion.div>
    </>
  );
};

export default About;
