import ExperienceSection from "@/components/ExperienceSection";
import Socials from "@/components/Socials";
import Link from "next/link";

const Page = () => {
  return (
    <div className='h-full p-2 rounded-lg flex flex-col mx-auto'>
      <h1 className='font-semibold text-[32px] md:text-7xl text-blue text-center leading-6 mt-2'>Software Developer</h1>
      <p className="text-center text-2xl mt-2 text-gray-400">Specialised in frontend and backend development.</p>
      <div className="mt-5 p-2 rounded-lg bg-[#121417] mb-5">
        <div className="flex flex-col lg:flex-row justify-between gap-4 py-4">
 
            <div className="w-full lg:min-w-[50%] rounded-xl overflow-hidden flex justify-center items-center">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3AMUGkV1P9E"
              title="YouTube Video Title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
            <div className="flex flex-col justify-start items-center p-3">
              <p className="md:text-2xl text-xl text-gray-400">Hey, I'm Sathyam, a web developer dedicated to crafting seamless online experiences. I specialize in translating ideas into visually stunning and high-performing websites. Let's collaborate and elevate your brand's digital presence together.</p>
              <Link href="/contact-me">
                <p className="py-3 px-6 rounded-full bg-blue border-blue border-[2px] hover:bg-[#121417] transition-all duration-200 text-white mt-4 text-sm font-sembibold">Drop me a line</p>
              </Link>
            </div>
        </div>
      </div>
      <div className="mt-6 p-2">
        <h1 className='font-bold text-2xl md:text-3xl text-white text-center leading-6 mb-6'>Experiences</h1>
        <ExperienceSection/>
      </div>
      
      <div className="mt-6 p-2 ">
          <h1 className='font-bold text-2xl md:text-3xl text-white text-center leading-6 mt-2'>Socials</h1>
          <Socials />
      </div>
      
    </div>
  );
};

export default Page;
