import React from 'react';
import { SocialsData } from "@/constants/socials";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


interface SocialIconMap {
    [key: string]: React.ElementType;
  }

const Socials = () => {
    
  const socialIconMap: SocialIconMap = {
    Twitter: FaTwitter,
    LinkedIn: FaLinkedin,
    Github: FaGithub,
    Instagram: FaInstagram,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-y-4 md:gap-x-4 md:py-6 py-3">
      {SocialsData.map((data) => {
        const SocialIcon = socialIconMap[data.title];
        return (
          <div key={data.id}>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <div className="text-white text-center bg-[#121417] border border-[#121417] px-6 py-4 rounded-lg shadow-md cursor-pointer my-3 hover:bg-black hover:border-white transition-all duration-200">
                <SocialIcon className="inline-block mr-2" />
                {data.title}
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
