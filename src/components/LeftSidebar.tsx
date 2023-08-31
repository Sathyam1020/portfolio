'use client'

import React from 'react'

import { sidebarLinks } from "@/constants"; 
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";


const LeftSidebar = () => {
    const pathname = usePathname();
  return (

    <section className='custom-scrollbar sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-[#1F1F22] bg-[#121417] pb-5 pt-28 max-md:hidden shadow-2xl'>

        <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`transition-all duration-300 relative flex justify-start gap-4 rounded-lg p-4 ${isActive && "bg-blue shadow-md "}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
                className='object-contain'
              />

              <p className='text-white max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
        </div>
    </section>
  )
}

export default LeftSidebar; 