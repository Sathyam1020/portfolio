import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface Review {
  id: number;
  name: string;
  text: string;
}

interface TestimonialsCardProps {
  review: Review;
}

const TestimonialsCard = ({ review }: TestimonialsCardProps) => {
  return (
    <div className='flex flex-col md:relative'>
   
      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize text-gray-300'>{review.name}</p>
      </div>


      <div className='text-blue mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>

      <div  className='text-blue mx-auto mt-5'>
        <FaQuoteRight/>
      </div>
    </div>
  );
}

export default TestimonialsCard;
