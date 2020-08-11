import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PreLoader from "../components/PreLoader";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as ScrollSVG } from "../assets/images/down-scroll.svg";
import { ReactComponent as Triangle } from "../assets/images/triangle.svg";
import {
  mobileLanding,
  boxHover,
  boxExit,
  fadeIn,
  fadeOut,
} from "../animations";
import Footer from "../components/Footer";
import { useIntersection } from "react-use";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const text1 = "I curate experiences";
const text2 = "with technology.";

// custom hook built on top of the intersection hook.
const useMyIntersection = (el, name) => {
  const section = useIntersection(el, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  section && !section.isIntersecting && section.boundingClientRect.y > 0
    ? fadeOut(name)
    : fadeIn(name);
};

const Home = () => {
  useEffect(() => {
    document.title = "Seyi — Developer";
    mobileLanding();
  }, []);

  const boxesTitle = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);

  useMyIntersection(box1, ".box-1");
  useMyIntersection(box2, ".box-2");
  useMyIntersection(box3, ".box-3");
  useMyIntersection(box4, ".box-4");
  useMyIntersection(boxesTitle, ".landing__work .title");

  return (
    <>
      <PreLoader />

      <motion.div
        exit={{ height: "100vh", transition }}
        className="transition2"
      />

      <div className="landing">
        <section className="landing__top">
          <div className="sub">Front-End Developer</div>
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
            I curate experiences <br /> with technology.
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
          <div ref={boxesTitle} className="title">
            My <br /> Projects -
          </div>
          <div className="boxes">
            <a
              ref={box1}
              onMouseEnter={boxHover}
              onMouseLeave={boxExit}
              className="box box-1"
              href="/"
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
              ref={box2}
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
              ref={box3}
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
              ref={box4}
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
          <a
            href="https://codepen.io/oluwadareseyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="more">
              <div className="btn-content">View more projects</div>
            </button>
          </a>
        </section>

        <section className="find-me">
          <div className="title">
            On The <br /> Web{" "}
            <span role="img" aria-label="find-emoji">
              🔎
            </span>
          </div>
          <div className="topic">PS: I also write, sometimes.</div>

          <div className="social-boxes">
            <a
              href="https://github.com/oluwadareseyi"
              target="_blank"
              rel="noopener noreferrer"
              className="box github"
            >
              <div className="content">
                <i className="fab fa-github-alt"></i>
                <div className="items">
                  <div className="name">Github</div>
                  <div className="user">/oluwadareseyi</div>
                </div>
              </div>
            </a>
            <a
              href="https://twitter.com/seyi__xo"
              target="_blank"
              rel="noopener noreferrer"
              className="box twitter"
            >
              <div className="content">
                <i className="fab fa-twitter"></i>
                <div className="items">
                  <div className="name">Twitter</div>
                  <div className="user">/seyi__xo</div>
                </div>
              </div>
            </a>
            <a
              href="https://codepen.io/oluwadareseyi"
              target="_blank"
              rel="noopener noreferrer"
              className="box codepen"
            >
              <div className="content">
                <i className="fab fa-codepen"></i>
                <div className="items">
                  <div className="name">Codepen</div>
                  <div className="user">/oluwadareseyi</div>
                </div>
              </div>
            </a>
            <a
              href="https://dev.to/oluwadareseyi"
              target="_blank"
              rel="noopener noreferrer"
              className="box devto"
            >
              <div className="content">
                <i className="fab fa-dev"></i>
                <div className="items">
                  <div className="name">Dev</div>
                  <div className="user">/oluwadareseyi</div>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/oluwadareseyi/"
              target="_blank"
              rel="noopener noreferrer"
              className="box linkedin"
            >
              <div className="content">
                <i className="fab fa-linkedin-in"></i>
                <div className="items">
                  <div className="name">Linkedin</div>
                  <div className="user">/oluwadareseyi</div>
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/seyii.dare/"
              target="_blank"
              rel="noopener noreferrer"
              className="box instagram"
            >
              <div className="content">
                <i className="fab fa-instagram"></i>
                <div className="items">
                  <div className="name">Instagram</div>
                  <div className="user">/seyii.dare</div>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="contact">
          <div className="topic">Need a developer ?</div>
          <Link to="/contact">
            <div className="title">Let's Collaborate &#8594;</div>
          </Link>
        </section>

        {/* footer exported as component */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
