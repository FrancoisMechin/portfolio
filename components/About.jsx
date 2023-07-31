"use client"

import React from 'react'
import AboutMe from '@/public/assets/aboutme.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'><FormattedMessage id='about.section.title'/></p>
                <h2 className='py-4'><FormattedMessage id='about.section.caption' /></h2>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <p className='py-2 text-gray-600'>// <span className='text-[#5651e5] font-semibold'><FormattedMessage id='about.text.title'/></span></p>
                <p className='py-2 text-gray-600'>
                    <FormattedMessage id='about.text.content.first'/>
                    <br />
                    <br />
                    <FormattedMessage id='about.text.content.second'/>
                    <br />
                    <br />
                    <FormattedMessage id='about.text.content.third'/>
                    <br />
                    <br />
                    <FormattedMessage id='about.text.content.fourth'/>
                </p>
                

                <Link href='/#projects'>
                    <p className='py-2 text-gray-600 underline cursor-pointer '><FormattedMessage id='about.text.link' /></p>
                </Link>

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:p-0 ease-in duration-300'>
                
                <Image src={AboutMe} alt="/" className='rounded-xl' />

            </div>
        </div>
    </div>
  )
}

export default About