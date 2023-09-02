'use client'

import React from "react";
import Carousel from "@/components/Carousel";
import { projectData } from "@/constants/project";
import {useRouter} from "next/navigation";

function Page({ params }: { params: { id: string } }) {

  const router = useRouter(); 
  const particularProjectData = projectData.find(
    (project) => project.id === Number(params.id)
  );

  const carouselImages = particularProjectData?.carousel
    ? Object.values(particularProjectData.carousel)
    : [];
    

  return (
    <div className="">
      <span onClick={() => router.push('/projects')} className="bg-[#121417] py-2 px-4 rounded-md text-gray-400 cursor-pointer hover:bg-[#21272f] hover:text-white transition-all duration-300">Go back</span>
      <h1 className='font-semibold text-[32px] md:text-5xl text-blue text-center leading-6 mt-5 prevent-text-selection'>{particularProjectData?.title}</h1>
      <div className="bg-white h-[5px] w-1/5 mt-2 mx-auto"></div>
      {/* ... (other data properties) */}
      <div className="bg-[#121417] p-4 rounded-lg mt-4 pt-10 overflow-hidden">
        <Carousel cImages = {carouselImages}/>
      </div>

      {/* Features  */}
      <div>
        <h1 className='font-bold text-2xl md:text-3xl text-white text-center leading-6 mt-8 prevent-text-selection'>Description</h1>
        <div className="bg-blue h-[4px] w-1/5 mt-1 mx-auto mb-6"></div>
        <div className="bg-[#121417] p-4 rounded-lg mt-4 overflow-hidden text-gray-400 font-lg">
          {particularProjectData?.description}
        </div>
      </div>

      {/* Github code  */}
      <h1 className='font-bold text-2xl md:text-3xl text-white text-center leading-6 mt-8 prevent-text-selection'>Github Link</h1>
      <div className="bg-blue h-[4px] w-1/5 mt-1 mx-auto mb-6"></div>
      <div className="bg-[#121417]">
        <a href={particularProjectData?.githubLink}>
          <p className="hover:text-white duration-300 transition-all text-center cursor-pointer p-4 rounded-lg mt-4 overflow-hidden text-gray-400 font-lg">{particularProjectData?.githubLink}</p>
        </a>
      </div>

      {/* Deployed link  */}
      <h1 className='font-bold text-2xl md:text-3xl text-white text-center leading-6 mt-8 prevent-text-selection'>Deployed link</h1>
      <div className="bg-blue h-[4px] w-1/5 mt-1 mx-auto mb-6"></div>
      <div className="bg-[#121417]">
        <a href={particularProjectData?.demoLink}>
          <p className="hover:text-white duration-300 transition-all text-center cursor-pointer p-4 rounded-lg mt-4 overflow-hidden text-gray-400 font-lg">{particularProjectData?.demoLink}</p>
        </a>
      </div>
    </div>
  );
}

export default Page;

