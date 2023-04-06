import React from 'react'
import { BsDribbble, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'


const SocialMedias = () => {
  return (
    <div className='flex relative mx-auto mb-20 text-2xl items-center gap-x-5 text-white'>
      <a href="#" className=' hover:text-primary'>
        <BsDribbble />
      </a>
      <a href="#" className=' hover:text-primary'>
        <BsInstagram />
      </a>
      <a href="#" className=' hover:text-primary'>
        <BsLinkedin />
      </a>
      <a href="#" className=' hover:text-primary'>
        <BsTwitter />
      </a>
    </div>
  )
}

export default SocialMedias