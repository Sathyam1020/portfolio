'use client'

import React, { useState } from 'react'
import TestimonialsCard from './TestimonialsCard';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


interface Reviews {
    id: number; 
    name: string; 
    text: string; 
}

interface TestimonialsProp {
    reviews: Reviews[]; 
}

const Testimonials = ({reviews}: TestimonialsProp) => {

    const [index, setIndex] = useState<number>(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >=reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }

    function surpriseHandler() {
        let randomIndex =  Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

  return (
    <div className='bg-[#121417] rounded-lg p-2'>
        <div className='flex flex-col items-center justify-center pb-4'>
            <TestimonialsCard review = {reviews[index]}></TestimonialsCard>
            <div className='flex text-3xl mt-10 gap-3 text-blue font-bold mx-auto'>
            <button 
            onClick={leftShiftHandler}
            className='cursor-pointer hover:text-white transition-all duration-200'>
                <FiChevronLeft/>
            </button>
            <button 
            onClick={rightShiftHandler}
            className='cursor-pointer hover:text-white transition-all duration-200'>
                <FiChevronRight/>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Testimonials; 