import React, { useEffect } from "react";
import { motion } from "framer-motion";
import PreLoader from "../components/PreLoader";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ReactComponent as ScrollSVG } from "../assets/images/down-scroll.svg";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const text1 = "I build web solutions";
const text2 = "with technology.";

const Home = () => {
  useEffect(() => {
    document.title = "Seyi — Developer";

    window.innerWidth < 763 &&
      gsap.from(".landing__main2", {
        duration: 1,
        delay: 6.2,
        opacity: 0,
        y: 80,
        ease: "expo.easeOut",
      });
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
          <h1 className="landing__main">
            <span className="text-con">
              {text1.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
              <br />
              {text2.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
            </span>
          </h1>
          <h1 className="landing__main2">
            I build web solutions <br /> with technology.
          </h1>
          <div className="links">
            <NavLink className="item" to="/about">
              About Me
            </NavLink>
            <span className="item">—</span>
            <span className="item">My Projects</span>
          </div>

          <div className="scroll-down">
            <ScrollSVG />
          </div>
          <div className="shapes"></div>
        </section>
      </div>
    </>
  );
};

export default Home;
