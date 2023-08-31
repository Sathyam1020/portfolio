'use client'

import React, { useState } from 'react'
import { filterData  } from "@/constants/data";
import Filter from '@/components/tech/Filter';
import Cards from '@/components/tech/Cards';

const page = () => {

  const [category, setCategory] = useState(filterData[0].title);

  return (
    <div className='min-h-screen'>
        <div>
          <h1 className='font-semibold text-3xl md:text-4xl text-blue text-center leading-6'>I can help you with...</h1>
        </div>
        <div className='mt-3'>
          <Filter 
            category={category}
            setCategory={setCategory}
            filterdata = {filterData} 
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
              <Cards category={category} />
        </div>
    </div>
  )
}

export default page; 
