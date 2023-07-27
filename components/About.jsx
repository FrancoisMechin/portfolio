import React from 'react'
import AboutMe from '@/public/assets/aboutme.jpeg'
import Image from 'next/image'


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <p className='py-2 text-gray-600'>// <span className='text-[#5651e5] font-semibold'>Breaking the mold as a junior developer.</span></p>
                <p className='py-2 text-gray-600'>
                    As a junior developer with a strong focus on growth, 
                    I specialize in crafting mobile-responsive front-end UI applications that seamlessly connect with APIs and various backend technologies.
                    My journey has led me to delve into the realms of React, NextJS, NodeJS, and Laravel, 
                    and I am driven by an insatiable passion for learning new technologies.
                    <br />
                    <br />
                    Versatility is a core aspect of my approach, 
                    as I firmly believe that there are multiple paths to achieving a task. 
                    While I excel in developing front-end applications using HTML, CSS, and Javascript,
                    my adaptability allows me to swiftly embrace and master new tech stacks as the need arises.
                    <br />
                    <br />
                    Although my background includes a Bac Pro Commerce, 
                    my lifelong passion for technology and computers led me to pursue a career transition into web and mobile development,
                    culminating in the achievement of my professional title as a Web/Mobile Web Developer.
                    <br />
                    <br />
                    For me, being a great developer is not solely about mastering one specific language but rather about selecting the most suitable tool for each unique project. 
                    I am eager to collaborate and contribute my skills to create innovative solutions that push the boundaries of web development. 
                    Together, let&apos;s build a future where technology empowers and enriches the lives of users worldwide.
                </p>
                
                <p className='py-2 text-gray-600 underline cursor-pointer '>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:p-0 ease-in duration-300'>
                
                <Image src={AboutMe} alt="/" className='rounded-xl' />

            </div>
        </div>
    </div>
  )
}

export default About