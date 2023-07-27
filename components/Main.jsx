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
                <p className='uppercase text-sm tracking-widest text-gray-600'>Collaborate, Innovate: Let's Build Together!</p>
                <h1 className='py-4 text-gray-600'>
                    Hi, I'm <span className='text-[#5651e5]'>François</span>
                </h1>
                <h1 className='py-4 text-gray-600'>
                    A Full-Stack Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    Building responsive front-end web applications while integrating powerful back-end technologies is at the core of my endeavors.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>


                    {/* //? Utilisé deux fois, composants à créer? */}
                    <a href="https://www.linkedin.com/in/francois-mechin/" target='__blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn/>
                        </div>
                    </a>
                    <a href="https://github.com/FrancoisMechin" target='__blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </a>
                    <a href="mailto:f.mechin@protonmail.com" target='__blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                    </a>
                    <a href="https://www.malt.fr/" target='__blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </a>
                    {/* //? ///////////////////////////////////////*/}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main