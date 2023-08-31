import React from 'react';
import { techs } from '@/constants/techs';
import Card from './Card';

interface CardsProps {
  category: string;
}

interface Tech {
  id: number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

const Cards = ({ category }: CardsProps) => {
  function getTechs(): Tech[] {
    if (category === 'All') {
      let allTech: Tech[] = [];
      Object.values(techs).forEach((array) => {
        array.forEach((techData) => {
          allTech.push(techData);
        });
      });
      console.log(allTech);
      return allTech;
    } else {
      // Use a type assertion to tell TypeScript the expected type
      return (techs as Record<string, Tech[]>)[category] || [];
    }
  }

  const techsD = getTechs();

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {techsD.map((tech) => (
        <Card key={tech.id} tech={tech} />
      ))}
    </div>
  );
};

export default Cards;
