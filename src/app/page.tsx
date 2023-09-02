

import ExperienceSection from "@/components/ExperienceSection";
import Socials from "@/components/Socials";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import reviews from "@/constants/testimonials"; 

const Page = () => {
  return (
    <div className='h-full p-2 rounded-lg flex flex-col mx-auto scroll-smooth'>
      <h1 className='font-semibold text-[32px] md:text-7xl text-blue text-center leading-6 mt-2 prevent-text-selection'>Software Developer</h1>
      <div className="bg-white h-[5px] w-2/5 mt-2 mx-auto"></div>
      <p className="text-center text-2xl mt-2 text-gray-400 prevent-text-selection">Specialised in frontend and backend development.</p>
      <div className="mt-5 p-2 rounded-lg bg-[#121417] mb-5">
        <div className="flex flex-col lg:flex-row justify-between gap-4 py-4">
 
            <div className="w-full h-[300px] md:min-w-[50%] rounded-xl overflow-hidden flex justify-center items-center">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Ovam606RDwk"
              title="YouTube Video Title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
            <div className="flex flex-col justify-start items-center p-3">
              <p className="md:text-2xl text-xl text-gray-400">Hey, I'm Sathyam, a web developer dedicated to crafting seamless online experiences. I specialize in translating ideas into visually stunning and high-performing websites. Let's collaborate and elevate your brand's digital presence together.</p>
              <Link href="/contact-me">
                <p className="py-3 px-6 rounded-full bg-blue border-blue border-[2px] hover:bg-[#121417] transition-all duration-200 text-white mt-5 text-sm font-sembibold">Drop me a line</p>
              </Link>
            </div>
        </div>
      </div>

      {/* Experiences section  */}
      <div className="mt-6 p-2">
        <h1 className='font-bold text-2xl md:text-3xl text-white text-center leading-6 mt-2 prevent-text-selection'>Experiences</h1>
        <div className="bg-blue h-[4px] w-1/5 mt-1 mx-auto mb-6"></div>
        <ExperienceSection/>
      </div>

      {/* Testimonials section  */}
      <div className="mt-6 p-2">
        <h1 className='font-bold text-2xl md:text-3xl text-white text-center leading-6 mt-2 prevent-text-selection'>Testimonials</h1>
        <div className="bg-blue h-[4px] w-1/5 mt-1 mx-auto mb-6"></div>
        <Testimonials reviews={reviews}/>
      </div>
      
      {/* Socials section  */}
      <div className="mt-6 p-2">
          <h1 className='font-bold text-2xl md:text-3xl text-white text-center leading-6 mt-2 prevent-text-selection'>Socials</h1>
          <div className="bg-blue h-[4px] w-1/5 mt-1 mx-auto mb-6"></div>
          <Socials />
      </div>
      <p className="text-center text-sm mt-2 md:mt-4 text-gray-400 prevent-text-selection">© 2023 All Rights Reserved. Designed & Coded with ❤️️</p>
    </div>
  );
};

export default Page;
