import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from '../../public/assets/sathyampfp2.png'; 

const Topbar = () => {
  return (
    <nav className='fixed top-0 z-30 flex w-full items-center justify-between px-6 py-4 bg-[#121417] shadow-sm'>

        <Link href="/" className='flex items-center gap-4'>
              <Image src={logo} alt='Image' width={32} height={32}
                  className='rounded-full overflow-hidden'
              />
              <p className='text-3xl leading-7 text-[#9ccbf4] max-xs:hidden'>
                  Sathyam Sahu 
              </p>
          </Link>

    </nav>
  )
}

export default Topbar; 