import React, { useState } from 'react'
import CarouselItem from './CarouselItem';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface data {
  src: string; 
  alt: string; 
}
interface CarouselProps {
  cImages: data[]
}

const Carousel = ({cImages}: CarouselProps) => {
  // console.log("Image:",cImages); 

  const [index, setIndex] = useState(0); 

  function leftShiftHandler(){
    if(index - 1 < 0){
      setIndex(cImages.length - 1); 
    } else{
      setIndex(index - 1)
    }
  }

  function rightShiftHandler(){
    if(index + 1 >= cImages.length){
      setIndex(0); 
    } else{
      setIndex(index + 1)
    }
  }
  return (
    <div className='bg-[#121417] rounded-lg '>
        <div className='flex flex-col items-center justify-center pb-4 h-fit w-full rounded-lg overflow-hidden'>

            <CarouselItem imageData = {cImages[index]}/>

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

export default Carousel; 