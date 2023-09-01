'use client'

import Image from 'next/image';
import React from 'react';
import { useState } from 'react'; // Import useState to manage hover state

interface Tech {
  id: number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

interface CardProps {
  tech: Tech;
}

const Card = ({ tech }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  // Function to handle hover events
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`w-[300px] h-[230px] bg-blue bg-opacity-80 rounded-md mt-4 transition-transform cursor-pointer duration-300 ${
        isHovered ? 'transform scale-105' : ''
      }`}
      onMouseEnter={handleHover} // Add hover event handlers
      onMouseLeave={handleHover}
    >
      <div className='p-2 '>
        <div className='relative aspect-video rounded-lg overflow-hidden'>
          <div className='absolute inset-0'>
            <Image
              width={300}
              height={300}
              src={tech.image.src}
              alt={tech.image.alt}
              className='object-cover w-full h-full'
            />
          </div>
        </div>
        <div className='p-4'>
          <p className='text-white font-semibold text-lg leading-6'>{tech.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
