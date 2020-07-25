import React from "react";
import { motion } from "framer-motion";
import PreLoader from "../components/PreLoader";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const Home = () => {
  return (
    <>
      <PreLoader />

      <motion.div
        exit={{ height: "100%", transition }}
        className="transition2"
      />

      <div className="landing">
        <div className="text">This is the home page</div>
      </div>
    </>
  );
};

export default Home;
