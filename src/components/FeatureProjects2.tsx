"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// import images
import Tensei from '../assets/projects/tensei-mockups.png'
import Jeyfx from '../assets/projects/jeyfx-mockups.png'
import NftGollectArt from '../assets/projects/nft-gollect-art-mockups.png'
import FurturLadingPage from '../assets/projects/Furtur-Lading-Page-Mockups.png'
import SunnySideAgency from '../assets/projects/sunnyside-agency-mockups.png'
import MetztliTaqueria from '../assets/projects/metztli.png'
import Cocoandco from '../assets/projects/cocoandco-mockups.png'
import CrowdFunding from '../assets/projects/crowdfunding-mockups.png'
import NewHomePage from '../assets/projects/news-homepage-mockups.png'

// import components
import Title from './Title'
import { fadeIn } from '@/varients'

// import icons
import { BsArrowDownCircle } from 'react-icons/bs'
import { Tilt } from 'react-tilt'


const FeatureProjects2 = () => {
  const projects = [
    {
      id: 0,
      name: 'Tensei',
      image: Tensei,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://tensei.vercel.app/',
      bgColor: '#341e43',
    },
    {
      id: 1,
      name: 'JeyFx',
      image: Jeyfx,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://jeyfx.vercel.app/',
      bgColor: '#7f2cf5',
    },
    {
      id: 2,
      name: 'NFT Gollect Art',
      image: NftGollectArt,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://nft-gollect-art.vercel.app/',
      bgColor: '#090116',
    },
    {
      id: 3,
      name: 'Furtur',
      image: FurturLadingPage,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://furtur.vercel.app/',
      bgColor: '#1a1a1a',
    },
    {
      id: 4,
      name: 'SunnySide Agency',
      image: SunnySideAgency,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://sunnyside-agency.vercel.app/',
      bgColor: '#16332c',
    },
    {
      id: 6,
      name: 'Cocoandco',
      image: Cocoandco,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://cocoandco.com.do/',
      bgColor: '#00172d',
    },
    {
      id: 7,
      name: 'Crowd Funding',
      image: CrowdFunding,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://crowdfunding.vercel.app/',
      bgColor: '#28a99d',
    },
    {
      id: 8,
      name: 'New Home Page',
      image: NewHomePage,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://new-home-page.vercel.app/',
      bgColor: '#00011a',
    },
  ]
  return (
    <section className='container max-w-4xl'>
      <div className="flex gap-x-4 items-center">
        <Title
          text='Feature Projects'
        />
        <BsArrowDownCircle className='text-2xl text-primary hover:text-dark cursor-pointer' />
      </div>
      <div className='flex flex-col gap-y-10 mt-10 max-w-4xl'>
        {projects.map((project) => {
          return (
            <Tilt
              options={
                {
                  max: 10,
                  scale: 1.01,
                  speed: 1000,
                  transition: true,
                  axis: null,
                  reset: true,
                }}
              key={project.id}
            >
              <div
                key={project.id}
                className=' group relative rounded-xl overflow-hidden cursor-pointer w-fullp-10 h-[700px] md:h-[500px] p-10'
                style={{ backgroundColor: project.bgColor }}
              >
                <a
                  target='_blank'
                  href={project.link}
                  className='flex justify-start md:justify-end items-end md:items-center h-full'
                >
                  <motion.div
                    variants={fadeIn('down', 1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0 }}
                    className='h-[400px] w-[400px]'
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                    />
                  </motion.div>
                  <div className='flex absolute left-10 top-10 md:top-auto flex-col justify-start  md:justify-center h-full'>
                    <div className='duration-500 text-white p-2 rounded-md flex flex-col gap-y-5'>
                      <motion.div
                        variants={fadeIn('down', 1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0 }}
                      >
                        <Title
                          text={project.name}
                          className='text-4xl'
                        />
                      </motion.div>
                      <motion.p
                        variants={fadeIn('down', 2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.9 }}
                        className=' max-w-[50ch]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                      </motion.p>
                      <motion.div
                        variants={fadeIn('down', 3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.9 }}
                        className='hidden md:flex'
                      >
                        {tecnologiesComponent(project.tecnologies)}
                      </motion.div>
                    </div>
                  </div>
                </a>
              </div>
            </Tilt>
          )
        })}
      </div>
    </section>
  )
}

export default FeatureProjects2


const tecnologiesComponent = (tecnologies: string[]) => {
  return (
    <div className='flex gap-x-2 text-white'>
      {tecnologies.map((tecnology) => {
        return (
          <div
            key={tecnology}
            className=' border border-primary  p-1 px-2 rounded-md text-sm mt-2'
          >
            <span className=' font-semibold'>{tecnology}</span>
          </div>
        )
      })}
    </div>
  )
}