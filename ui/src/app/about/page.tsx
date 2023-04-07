"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Title from '@/components/Title'

import OrbisImage from '@/assets/team/orbis.png'
import KelfryImage from '@/assets/team/kelfry.png'
import PeterImage from '@/assets/team/peter.png'
import CarlosImage from '@/assets/team/carlitos.png'

const About = () => {
    const Teams = [
        {
            name: 'Peter Ramirez',
            position: 'UI/UX Designer',
            github: 'peterramirez18',
            image: PeterImage
        },
        {
            name: 'Orbis Alonzo',
            position: 'Full Stack Developer',
            github: 'orbis25',
            image: OrbisImage
        },
        {
            name: 'Kelfry Florimon',
            position: 'Data Analyst',
            github: 'kelfry98',
            image: KelfryImage

        },
        {
            name: 'Carlos Montero',
            position: 'Fronted Developer',
            github: 'carlos-04',
            image: CarlosImage
        }
    ]
    return (
        <section className='container text-dark mt-20'>
            <div className='flex flex-col md:justify-center  '>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'easeOut' }}
                    className='text-5xl font-bold leading-[55px] '>
                    Meet our team of experts in <br />
                    <span className='text-primary'> Websites</span>,
                    <span className='text-primary'> Apps </span>
                    and
                    <span className='text-primary'> systems</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, ease: 'easeOut' }}
                    className=' mt-5 w-[70ch]'>
                    To be the company our customers want us to be, it takes and eclectic mix of skills, personalities and experiences. We are a team of experts in our field, and we are proud of it.
                </motion.p>
            </div>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-10'>
                {Teams.map((team, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col gay-5'
                        >
                            {/* <Image
                                src={`
                                https://unavatar.io/github/${team.github}
                                `}
                                alt={team.name}
                                width={200}
                                height={200}
                                className='mb-5'
                            /> */}
                            <div className=' mb-5 bg-dark w-full aspect-square'>

                            </div>
                            <Title
                                text={team.name}
                            />
                            <p>
                                {team.position}
                            </p>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default About