"use client"

import Image from 'next/image'
import React from 'react'
import ContactImg from "../public/assets/contact.png"
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

const Contact = () => {
  return (
    <div id='contact' className='w-full md:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'><FormattedMessage id='contact.section.title'/></p>
            <h2 className='py-4'><FormattedMessage id='contact.section.context'/></h2>
            <div className='grid lg:grid-cols-5 gap-8'>

                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>

                        {/* Image */}
                        <div>
                            <Image 
                            className='hover:object-bottom  rounded-xl hover:scale-105 ease-in duration-300 border-[3px] border-s-[#5651e5]'
                            src={ContactImg} 
                            alt="contact-img" />
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className='py-2 text-[#5651e5]'>Francois MECHIN</h2>
                            <p className='underline underline-offset-4'><FormattedMessage id='contact.card.job' /></p>
                            <p className='py-4'><FormattedMessage id='contact.card.text.first'/> <span className='text-green-400 font-bold tracking-wider'><FormattedMessage id='contact.card.text.second'/></span> <FormattedMessage id='contact.card.text.third'/></p>
                        </div>

                        {/* Réseaux */}
                        <div>
                        <p className='uppercase pt-8'><FormattedMessage id='contact.card.redirects'/></p>
                        <div className='flex items-center justify-between py-4'>

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
                        
                        </div>
                    </div>
                </div>
            </div>


                {/* right */}


                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

                                {/* Nos inputs */}
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        <FormattedMessage id='contact.form.label.name'/>
                                    </label>
                                    <input 
                                    className='border-2 rounded-lg p-3 flex border-s-[#5651e5]'
                                    type="text"/>
                                </div>

                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        <FormattedMessage id='contact.form.label.phone'/>
                                    </label>
                                    <input 
                                    className='border-2 rounded-lg p-3 flex border-s-[#5651e5]'
                                    type="tel"/>
                                </div>


                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    <FormattedMessage id='contact.form.label.email'/>
                                </label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-s-[#5651e5]'
                                    type="email"
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    <FormattedMessage id='contact.form.label.subject'/>
                                </label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-s-[#5651e5]'
                                    type="text"
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    <FormattedMessage id='contact.form.label.message'/>
                                </label>
                                <textarea className='border-2 rounded-lg p-3 border-s-[#5651e5]' rows={10}></textarea>
                            </div>

                            <button className='w-full p-4 text-gray-100 mt-4'><FormattedMessage id='contact.form.button'/></button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='flex justify-center pt-[4rem]'>
                <Link href='#home' scroll={false}>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp 
                        className='text-[#5651e5]'
                        size={30}/>
                    </div>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Contact