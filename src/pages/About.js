import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import gsap from "gsap";
import Footer from "../components/Footer";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "Seyi — About Me";
    fadeUp(".about-inner", 0.8);
    gsap.from(".about__inner", {
      duration: 0.2,
      delay: 0.8,
      opacity: 0,
      ease: "Power4.out",
    });
    gsap.to(".cursor", {
      duration: 0,
      css: { display: "none" },
    });
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
          height: "100%",
          visibility: "visible",
          transition: { ...transition, duration: 1, delay: -0.2 },
        }}
        className="about"
      >
        <div className="about__inner">
          <div className="about__top">
            <div className="my-name">
              Oluwadare <br /> Oluwaseyi.
            </div>
            <div className="desc">
              <p>
                Software Developer based in Lagos, Nigeria focused on branding,
                building interactive experiences & creating emotions through
                design and technology.
              </p>
              <p>
                I have always put forward the idea of a minimalistic and
                user-focused approach to design and development, which I indeed
                imbibe when building scalable and fully responsive web
                applications.
              </p>
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1atxrM3opQtRyJkosCD0MYt_lskoT_NRv"
              download
            >
              <i class="fas fa-file-alt"></i> Download Resume
            </a>
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default About;
