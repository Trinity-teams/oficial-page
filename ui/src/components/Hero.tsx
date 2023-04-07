"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="container text-dark h-[90vh] flex flex-col md:flex-row items-center gap-10 justify-center md:justify-between">
      <div className="flex flex-col md:justify-center  ">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut" }}
          className="text-5xl font-bold leading-[55px] "
        >
          We make
          <span className="text-primary"> Websites</span>, <br />
          <span className="text-primary"> Apps </span>
          and
          <span className="text-primary"> systems</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: "easeOut" }}
          className=" mt-5 w-[40ch]"
        >
          Digital product and brand agency, we helps organizations become
          technology.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, ease: "easeOut" }}
      ></motion.div>
    </section>
  );
};

export default Hero;
