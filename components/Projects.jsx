import React from 'react'
import ProjectItem from "@/components/ProjectItem"
import netflixCloneImg from "../public/assets/projects/netflixclone.png"
import webcseImg from "../public/assets/projects/webcse.png"
import resumeImg from "../public/assets/projects/resumeweb.png"

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
                />
                <ProjectItem 
                    title='WebCSE' 
                    backgroundImg={webcseImg} 
                    projectUrl='/webcse'
                />
                <ProjectItem 
                    title='Resume Website' 
                    backgroundImg={resumeImg} 
                    projectUrl='/resumeweb'
                    
                />
                <ProjectItem 
                    title='Netflix Clone' 
                    backgroundImg={netflixCloneImg} 
                    projectUrl='/netflixclone'
                    
                />
            </div>

        </div>
    </div>
  )
}

export default Projects