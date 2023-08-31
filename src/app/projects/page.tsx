import Projects from '@/components/projects/Projects'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen flex flex-col gap-3'>
        <h1 className='font-semibold text-3xl md:text-4xl text-blue text-center leading-6'>Selected Works</h1>
        <p className='text-gray-400 text-xl text-center font-semibold'>A piece from my selection of favorites.</p>
        <Projects />
    </div>
  )
}

export default page; 