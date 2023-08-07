"use client"


/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaLinkedin, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FormattedMessage } from 'react-intl'
import { useIntl } from 'react-intl';

const Main = () => {
    const intl = useIntl();


  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'><FormattedMessage id='main.text.slogan' /></p>
                <h1 className='py-4 text-gray-600'>
                    <FormattedMessage id='main.text.intro.first'/> <span className='text-[#5651e5]'><FormattedMessage id='main.text.intro.second'/></span>
                </h1>
                <h1 className='py-4 text-gray-600'>
                    <FormattedMessage id='main.text.job' />
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    <FormattedMessage id='main.text.content'/>
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>


                    {/* //? Utilisé deux fois, composants à créer? */}
                    <a href="mailto:f.mechin@protonmail.com" target='__blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                    </a>
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