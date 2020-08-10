import React, { useEffect } from "react";
import { motion } from "framer-motion";
import PreLoader from "../components/PreLoader";
import { NavLink } from "react-router-dom";
import { ReactComponent as ScrollSVG } from "../assets/images/down-scroll.svg";
import { ReactComponent as Triangle } from "../assets/images/triangle.svg";
import { mobileLanding, boxHover, boxExit } from "../animations";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const text1 = "I build web solutions";
const text2 = "with technology.";
const Home = () => {
  useEffect(() => {
    document.title = "Seyi — Developer";
    mobileLanding();
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

          <div className="shapes">
            <div className="main-circle" />
            <div className="shape shape-1" />
            <div className="shape shape-2">
              <Triangle />
            </div>
            <div className="shape shape-3" />
            <div className="shape shape-4" />
          </div>
        </section>

        <section className="landing__work">
          <div className="title">
            My <br /> Projects -
          </div>
          <div className="boxes">
            <a
              onMouseEnter={boxHover}
              onMouseLeave={boxExit}
              className="box box-1"
            >
              <div className="box-content">
                <div className="box-anim p-title">Perxels</div>
                <div className="box-anim p-sub">
                  Responsive website for a design school
                </div>
                <div className="box-anim link">View Project &#8594;</div>
              </div>

              <div className="box-image"></div>
            </a>
            <a
              href="https://printstudio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="box box-2"
              onMouseEnter={boxHover}
              onMouseLeave={boxExit}
            >
              <div className="box-content">
                <div className="box-anim p-title">Print Studio</div>
                <div className="box-anim p-sub">
                  Online platform for all things prints
                </div>
                <div className="box-anim link">View Project &#8594;</div>
              </div>

              <div className="box-image"></div>
            </a>
            <a
              href="https://www.lifepith.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="box box-3"
              onMouseEnter={boxHover}
              onMouseLeave={boxExit}
            >
              <div className="box-content">
                <div className="box-anim p-title">Life Pith</div>
                <div className="box-anim p-sub">
                  A social enterprise for young leaders
                </div>
                <div className="box-anim link">View Project &#8594;</div>
              </div>

              <div className="box-image"></div>
            </a>
            <a
              href="https://vaccineapp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={boxHover}
              onMouseLeave={boxExit}
              className="box box-4"
            >
              <div className="box-content">
                <div className="box-anim p-title">Vaccine App</div>
                <div className="box-anim p-sub">
                  Landing page for a health center
                </div>
                <div className="box-anim link">View Project &#8594;</div>
              </div>

              <div className="box-image"></div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
