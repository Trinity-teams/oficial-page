import React from 'react'
import Title from './Title'

import Tensei from '../assets/projects/tensei.png'
import Jeyfx from '../assets/projects/jeyfx.png'
import NftGollectArt from '../assets/projects/nft-gollect-art.png'
import FurturLadingPage from '../assets/projects/Furtur-Lading-Page.png'
import SunnySideAgency from '../assets/projects/sunnyside-agency.png'
import MetztliTaqueria from '../assets/projects/metztli.png'
import Cocoandco from '../assets/projects/cocoandco.png'
import CrowdFunding from '../assets/projects/crowdfunding.png'
import NewHomePage from '../assets/projects/news-homepage.png'

import Image from 'next/image'
import { BsArrowDownCircle } from 'react-icons/bs'

const FeatureProjects = () => {
  const projects = [
    {
      id: 0,
      name: 'Tensei',
      image: Tensei,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://tensei.vercel.app/',
    },
    {
      id: 1,
      name: 'JeyFx',
      image: Jeyfx,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://jeyfx.vercel.app/',
    },
    {
      id: 2,
      name: 'NFT Gollect Art',
      image: NftGollectArt,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://nft-gollect-art.vercel.app/',
    },
    {
      id: 3,
      name: 'Furtur Lading Page',
      image: FurturLadingPage,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://furtur.vercel.app/',
    },
    {
      id: 4,
      name: 'SunnySide Agency Landing Page',
      image: SunnySideAgency,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://sunnyside-agency.vercel.app/',
    },
    {
      id: 5,
      name: 'Metztli Taqueria',
      image: MetztliTaqueria,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://metztlimexicantaqueria.com/',
    },
    {
      id: 6,
      name: 'Cocoandco',
      image: Cocoandco,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://cocoandco.com.do/',
    },
    {
      id: 7,
      name: 'Crowd Funding',
      image: CrowdFunding,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://crowdfunding.vercel.app/',
    },
    {
      id: 8,
      name: 'New Home Page',
      image: NewHomePage,
      tecnologies: ['React', 'Next', 'Tailwind', 'Typescript'],
      link: 'https://new-home-page.vercel.app/',
    },
  ]
  return (
    <section className='container'>
      <div className="flex gap-x-4 items-center">
        <Title
          text='Feature Projects'
        />
        <BsArrowDownCircle className='text-2xl text-primary hover:text-dark cursor-pointer' />
      </div>
      <div className=' columns-3 space-y-3 space-x-3 gap-0 mt-10'>
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className=' group relative rounded-xl overflow-hidden cursor-pointer'
            >
              <a
                target='_blank'
                href={project.link}

              >
                <Image
                  src={project.image}
                  alt={project.name}
                  className=''
                />
                <div className=' absolute inset-0 p-5 flex flex-col justify-between'>
                  <div className=" group-hover:translate-x-0 translate-x-52 transition-all duration-500 flex ml-auto gap-x-4 items-center bg-white w-fit p-2 px-3 rounded-md hover:bg-primary hover:text-white cursor-pointer">
                    <Title
                      text='View Project'
                    />
                    <BsArrowDownCircle className='text-2xl text-dark cursor-pointer -rotate-[135deg] ' />
                  </div>
                  <div className='group-hover:translate-x-0 -translate-x-[500px] transition-all duration-500 bg-white p-2 rounded-md'>
                    <Title
                      text={project.name}
                    />
                    {tecnologiesComponent(project.tecnologies)}
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FeatureProjects

const tecnologiesComponent = (tecnologies: string[]) => {
  return (
    <div className='flex gap-x-2'>
      {tecnologies.map((tecnology) => {
        return (
          <div
            key={tecnology}
            className=' border border-primary text-dark p-1 px-2 rounded-md text-sm mt-2'
          >
            <span className=' font-semibold'>{tecnology}</span>
          </div>
        )
      })}
    </div>
  )
}