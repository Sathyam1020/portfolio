import Image from 'next/image';
import React from 'react'

interface data {
  src: string; 
  alt: string; 
}

interface CarouselItemProps {
  imageData: data
}

const CarouselItem = ({imageData}: CarouselItemProps) => {
  return (
    <div>
      <Image
        width={800}
        height={800}
        src={imageData?.src}
        alt={imageData?.alt}
      />
    </div>
  )
}

export default CarouselItem;