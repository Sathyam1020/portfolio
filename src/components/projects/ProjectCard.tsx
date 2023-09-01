'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

interface Project {
  id: number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  githubLink: string;
  demoLink: string;
}

interface CardProps {
  project: Project;
}

const ProjectCard = ({ project }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <div
        className={`w-[300px] h-[230px] bg-blue bg-opacity-100 rounded-md mt-4 transition-transform duration-300 ${
          hovered ? 'transform scale-105 cursor-pointer' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='p-2 '>
          <div className='relative aspect-video rounded-lg overflow-hidden'>
            <div className='absolute inset-0'>
              <Image
                width={300}
                height={300}
                src={project.image.src}
                alt={project.image.alt}
                className='object-cover w-full h-full'
              />
            </div>
            {hovered && (
              <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300'>
                <div className='text-white text-center'>
                  <p className='font-bold text-xl mb-2'>{project.title}</p>
                  <div className='flex justify-center space-x-4'>
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-2xl text-gray-300 hover:text-white'
                    >
                      <AiFillGithub size={40} />
                    </a>
                    <a
                      href={project.demoLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-2xl text-gray-300 hover:text-white'
                    >
                      <AiOutlineLink size={40} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='p-4'>
            <p className='text-black font-semibold text-lg leading-6'>{project.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
