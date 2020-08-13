import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Footer from "../components/Footer";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "Seyi — Contact Me";

    gsap.from(".services__inner", {
      duration: 0.2,
      delay: 1,
      opacity: 0,
      ease: "Power4.out",
    });
    gsap.to(".cursor", {
      duration: 0,
      css: { display: "none" },
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  };
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
          height: "100%",
          visibility: "visible",
          transition: { ...transition, duration: 2, delay: -0.2 },
        }}
        className="services"
      >
        <div className="services__inner">
          <div className="services__top">
            <div className="title">Get In Touch!</div>
            <div className="sub">
              Got a question, proposal or project or want to work <br />{" "}
              together on something? Feel free to reach out.
            </div>
            <form onSubmit={onSubmit}>
              <div className="input-row">
                <div className="side">
                  <label htmlFor="name">Your Name</label>
                  <input
                    placeholder="What's Your Name?"
                    name="name"
                    id="name"
                    type="text"
                    required
                  />
                </div>

                <div className="side">
                  <label htmlFor="email">Your Email</label>
                  <input
                    placeholder="What's Your Email?"
                    name="email"
                    id="email"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="textarea">
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Hello, I think we need you to work on/collaborate this particular product... Reach out as soon as you can."
                ></textarea>
              </div>
              <button type="submit">Send Message.</button>
            </form>
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
