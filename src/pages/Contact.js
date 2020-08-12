import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import gsap from "gsap";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "Seyi — Services";
    fadeUp(".services .text", 0.8);
    gsap.to(".cursor", {
      duration: 0,
      css: { display: "none" },
    });
  }, []);
  return (
    <>
      <motion.div initial={{ height: "100vh" }} className="transition" />
      <motion.div
        exit={{ height: "100vh", transition }}
        className="transition2"
      />
      <motion.div
        initial={{ height: 0, visibility: "hidden" }}
        animate={{
          height: "100vh",
          visibility: "visible",
          transition: { ...transition, duration: 1, delay: -0.2 },
        }}
        className="services"
      >
        <div className="text">This is the contact page</div>
      </motion.div>
    </>
  );
};

export default Contact;
