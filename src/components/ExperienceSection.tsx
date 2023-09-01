import React from 'react';
import {experiences} from "@/constants/exp"; 
import Link from 'next/link';

const ExperienceSection = () => {
  return (
    <section className="py-6 bg-[#121417] rounded-lg">
      <div className="max-w-3xl mx-auto px-4">
        {experiences.map((experience) => (
          <div  key={experience.id} className="flex flex-row mb-4">
            <div className='h-[50%] text-gray-400 font-thin text-5xl pr-8'>
              {experience.id}
            </div>
            <div >
              <h3 className="text-lg md:text-xl font-semibold text-white">{experience.title}</h3>
              <p className="text-gray-400 mt-1">{experience.company}</p>
              <p className="text-gray-400 mt-1">{experience.date}</p>
              <p className="text-gray-300 mt-2">{experience.description}</p>
            </div>
          </div>
        ))}
       <div className='border-b-2 border-gray-400 p-2'></div>
        <Link href='techs'>
          <div className='mt-2 p-2 cursor-pointer'>
            <p className='text-gray-400 text-center hover:text-white transition-all duration-300'>Explore My Tech Expertise in Depth...</p>
          </div>
        </Link>
        <div className='border-b-2 border-gray-400 p-2'></div>
        <Link href='projects'>
          <div className='mt-2 p-2 cursor-pointer'>
            <p className='text-gray-400 text-center hover:text-white transition-all duration-300'>Explore My Projects...</p>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default ExperienceSection;
