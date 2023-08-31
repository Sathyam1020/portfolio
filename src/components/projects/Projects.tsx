
import React, { } from 'react'
import {projectData} from "@/constants/project"; 
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        projectData.map((project) => {
          return (
            <ProjectCard key={project.id} project={project}/>
          )
        })
      }
    </div>
  )
}

export default Projects;  