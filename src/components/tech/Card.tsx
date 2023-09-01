'use client'

import Image from 'next/image';
import React, { useEffect } from 'react';


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

    return (
        <div className='w-[300px] h-[230px] bg-blue bg-opacity-80 rounded-md mt-4'>
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
