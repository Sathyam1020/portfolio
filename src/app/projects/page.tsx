import Projects from '@/components/projects/Projects'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen flex flex-col gap-3'>
        <h1 className='font-bold text-3xl md:text-4xl text-white text-center leading-6'>Projects</h1>
        <Projects />
    </div>
  )
}

export default page; 