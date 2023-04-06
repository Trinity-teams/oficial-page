import React from 'react'
import Image from 'next/image'
import Logo from '../assets/dev-teams-logo.svg'
import Link from 'next/link'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <div className='container flex items-center justify-between mt-2'>
      <Link
        href={'/'}
      >
        <Image
          src={Logo}
          alt='logo'
          className='h-[50px] w-fit'
        />
      </Link>
      <MobileNav />
    </div>
  )
}

export default Header