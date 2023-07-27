import React from 'react'
import ProjectItem from "@/components/ProjectItem"
import netflixCloneImg from "../public/assets/projects/netflixclone.png"
import webcseImg from "../public/assets/projects/webcse.png"

const Projects = () => {
  return (
    <div id='projects' className='w-full md:h-screen'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem 
                    title='Netflix Clone' 
                    backgroundImg={netflixCloneImg} 
                    projectUrl='/netflixclone'
                    description='Clone in MERN stack + Prisma, MongoDB. This project allowed me to learn a lot about this stack and the Tailwind design '
                />
                <ProjectItem 
                    title='WebCSE' 
                    backgroundImg={webcseImg} 
                    projectUrl='/webcse'
                    description='During my three-month internship at a Multimedia company, I had the opportunity to contribute to an exceptionally advanced project. Regrettably, due to intellectual property restrictions, I am unable to share the project itself. However, I am more than willing to provide you with visual documentation, including photos and detailed examples of the innovative functionalities that I successfully implemented during the course of the internship.'
                />
                <ProjectItem 
                    title='WebCSE' 
                    backgroundImg={webcseImg} 
                    projectUrl='/webcse'
                    description='During my three-month internship at a Multimedia company, I had the opportunity to contribute to an exceptionally advanced project. Regrettably, due to intellectual property restrictions, I am unable to share the project itself. However, I am more than willing to provide you with visual documentation, including photos and detailed examples of the innovative functionalities that I successfully implemented during the course of the internship.'
                />
                <ProjectItem 
                    title='Netflix Clone' 
                    backgroundImg={netflixCloneImg} 
                    projectUrl='/netflixclone'
                    description='Clone in MERN stack + Prisma, MongoDB. This project allowed me to learn a lot about this stack and the Tailwind design '
                />
            </div>

        </div>
    </div>
  )
}

export default Projects