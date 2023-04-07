"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// import components
import Title from "./Title";
import { fadeIn } from "../varients";

// import icons
import { BsArrowDownCircle } from "react-icons/bs";
import { Tilt } from "react-tilt";
import { IProject } from "@/interfaces/project.interface";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "@/config/sanity-client";
import { SanityImage } from "./SanityImage";

type Props = {
  projects: IProject[];
};

const FeatureProjects2: React.FC<Props> = ({ projects }) => {
  //hooks
  const t = useNextSanityImage(sanityClient as any, projects[0].image);

  return (
    <section className="container max-w-4xl">
      <div className="flex gap-x-4 items-center">
        <Title text="Feature Projects" />
        <BsArrowDownCircle className="text-2xl text-primary hover:text-dark cursor-pointer" />
      </div>
      <div className="flex flex-col gap-y-10 mt-10 max-w-4xl">
        {projects.map((project) => {
          return (
            <Tilt
              options={{
                max: 10,
                scale: 1.01,
                speed: 1000,
                transition: true,
                axis: null,
                reset: true,
              }}
              key={project._id}
            >
              <div
                className=" group relative rounded-xl overflow-hidden cursor-pointer w-fullp-10 h-[700px] md:h-[500px] p-10"
                style={{ backgroundColor: project.bgColor }}
              >
                <a
                  target="_blank"
                  href={project.route}
                  className="flex justify-start md:justify-end items-end md:items-center h-full"
                >
                  <motion.div
                    variants={fadeIn("down", 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}
                    className="h-[400px] w-[400px]"
                  >
                    <SanityImage image={project.image} />
                  </motion.div>
                  <div className="flex absolute left-10 top-10 md:top-auto flex-col justify-start  md:justify-center h-full">
                    <div className="duration-500 text-white p-2 rounded-md flex flex-col gap-y-5">
                      <motion.div
                        variants={fadeIn("down", 1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}
                      >
                        <Title text={project.title} className="text-4xl" />
                      </motion.div>
                      <motion.p
                        variants={fadeIn("down", 2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.9 }}
                        className=" max-w-[50ch]"
                      >
                        {project.description}{" "}
                      </motion.p>
                      <motion.div
                        variants={fadeIn("down", 3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.9 }}
                        className="hidden md:flex"
                      >
                        {tagsComponent(project.tags)}
                      </motion.div>
                    </div>
                  </div>
                </a>
              </div>
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureProjects2;

const tagsComponent = (technologies: string[]) => {
  return (
    <div className="flex gap-x-2 text-white">
      {technologies.map((technology) => {
        return (
          <div
            key={technology}
            className=" border border-primary  p-1 px-2 rounded-md text-sm mt-2"
          >
            <span className=" font-semibold">{technology}</span>
          </div>
        );
      })}
    </div>
  );
};
