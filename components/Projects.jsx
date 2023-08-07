"use client"

import React from 'react'
import ProjectItem from "@/components/ProjectItem"
import netflixCloneImg from "../public/assets/projects/netflixclone.png"
import webcseImg from "../public/assets/projects/webcse.png"
import resumeImg from "../public/assets/projects/resumeweb.png"
import saasImg from "../public/assets/projects/aisaas.jpg"
import { FormattedMessage } from 'react-intl'

const Projects = () => {
  return (
    <div id='projects' className='w-full md:h-screen'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'><FormattedMessage id='projects.section.title'/></p>
            <h2 className='py-4'><FormattedMessage id='projects.section.context'/></h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem 
                    title={<FormattedMessage id='projects.card.title.netflix'/>} 
                    backgroundImg={netflixCloneImg} 
                    projectUrl='/netflixclone'
                    alt='netflixclone-project'
                />
                <ProjectItem 
                    title={<FormattedMessage id='projects.card.title.webcse'/>} 
                    backgroundImg={webcseImg} 
                    projectUrl='/webcse'
                    alt='webcse-project'
                />
                <ProjectItem 
                    title={<FormattedMessage id='projects.card.title.resumeweb'/>} 
                    backgroundImg={resumeImg} 
                    projectUrl='/resumeweb'
                    alt='resumeweb-project'
                    
                />
                <ProjectItem 
                    title="Saas AI Platform"
                    backgroundImg={saasImg} 
                    projectUrl='#projects'
                    alt='saas-ai-platform'
                    
                />
            </div>

        </div>
    </div>
  )
}

export default Projects