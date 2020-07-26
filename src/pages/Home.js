import React, { useEffect } from "react";
import { motion } from "framer-motion";
import PreLoader from "../components/PreLoader";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const text1 = "I build web solutions";
const text2 = "with technology.";

const Home = () => {
  useEffect(() => {
    document.title = "Seyi — Developer";
  }, []);
  return (
    <>
      <PreLoader />

      <motion.div
        exit={{ height: "100%", transition }}
        className="transition2"
      />

      <div className="landing">
        <section className="landing__top">
          <div className="sub">Software Developer</div>
          <h1 className="landing__main">
            <span className="text-con">
              {text1.split("").map((t) => (
                <span className="text">{t}</span>
              ))}
              <br />
              {text2.split("").map((t) => (
                <span className="text">{t}</span>
              ))}
            </span>
          </h1>
          <div className="links">
            <NavLink className="item" to="/about">
              About Me
            </NavLink>
            <span className="item">—</span>
            <span className="item">My Projects</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
