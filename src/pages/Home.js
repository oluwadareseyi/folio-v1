import React, { useEffect } from "react";
import { motion } from "framer-motion";
import PreLoader from "../components/PreLoader";
import { NavLink } from "react-router-dom";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const Home = () => {
  useEffect(() => {
    document.title = "Seyi — Developer";
  }, []);
  return (
    <>
      {/* <PreLoader /> */}

      <motion.div
        exit={{ height: "100%", transition }}
        className="transition2"
      />

      <div className="landing">
        <section className="landing__top">
          <div className="sub">Software Developer</div>
          <h1 className="main">
            I build web solutions <br /> with technology.
          </h1>
          <div className="links">
            <NavLink to="/about">About Me</NavLink> — <span>My Projects</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
