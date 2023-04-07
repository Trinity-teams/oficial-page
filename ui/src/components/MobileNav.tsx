"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import Logo from "../assets/dev-teams-isotipo-outline.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SocialMedias from "./SocialMedias";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];
  const pathName = usePathname();

  return (
    <div>
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{
          scale: 0.9,
          transition: {
            duration: 0.2,
          },
        }}
        className={` ${isOpen ? "bg-white" : "bg-dark"
          } grid group place-content-center z-50 relative  w-[50px] h-[50px]  text-white text-3xl hover:bg-primary cursor-pointer `}
      >
        <div className="flex flex-col gap-y-[5px] items-end ">
          <span
            className={`${isOpen
                ? "-rotate-45 h-[3px] w-[22px] translate-y-[6.4px] bg-dark group-hover:bg-white"
                : "h-[3px] w-[19px] rotate-0 bg-white"
              } flex transition-transform duration-150`}
          />
          <span
            className={`${isOpen
                ? "w-[0] h-[0] bg-dark group-hover:bg-white"
                : "h-[3px] w-[25px] rotate-0 bg-white"
              } flex transition-transform duration-150`}
          />
          <span
            className={`${isOpen
                ? " rotate-45 h-[3px] w-[22px] -translate-y-[6.4px] bg-dark group-hover:bg-white"
                : "h-[3px] w-[15px] rotate-0 bg-white"
              } flex transition-transform duration-150`}
          />
        </div>
      </motion.div>
      <div
        className={`${isOpen ? "flex z-40 flex-col justify-between w-[500px]" : "w-[0px]"
          } overflow-hidden transition-all duration-300  -z-10 h-screen bg-dark absolute top-0 right-0`}
      >
        <ul className="flex  flex-col  text-center gap-y-16 text-3xl font-normal mt-20">
          {NavItems.map((item, index) => {
            return (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href={item.link}
                key={index}
                className={`
                ${pathName === item.link ? "text-primary" : "text-white"}
              text-gray-400 group
              `}
              >
                {item.name}
                {pathName !== item.link && (
                  <span
                    className={` w-[0px] group-hover:w-[80px] transition-all duration-200 absolute -translate-x-[50%] left-[50%] h-[4px] mx-auto flex bg-gray-500 `}
                  />
                )}
              </Link>
            );
          })}
        </ul>
        <Image
          src={Logo}
          alt="logo"
          className=" absolute bottom-0 right-0 opacity-20 w-fit"
        />
        <SocialMedias />
      </div>
    </div>
  );
};

export default MobileNav;
