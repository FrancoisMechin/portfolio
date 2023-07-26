/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaLinkedin, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something together</p>
                <h1 className='py-4 text-gray-600'>
                    Hi, I'm <span className='text-[#5651e5]'>François</span>
                </h1>
                <h1 className='py-4 text-gray-600'>
                    A Full-Stack Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm focused on building responsive front-end web applications integrating back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>


                    {/* //? Utilisé deux fois, composants à créer? */}
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                    {/* //? ///////////////////////////////////////*/}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main