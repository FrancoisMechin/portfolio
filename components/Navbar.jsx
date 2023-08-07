"use client"

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "@/public/assets/fmlogo--colors.png"
import { useRouter } from 'next/router'
import LanguageDropdown from '@/components/LanguageDropdown'
import { FormattedMessage } from 'react-intl'



const Navbar = ({locales}) => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');

    const router = useRouter();


    useEffect(() => {
        if (
        router.asPath === '/netflixclone' ||
        router.asPath === '/webcse' ||
        router.asPath === '/netflixclone' ||
        router.asPath === '/netflixclone' 
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        } else {
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }
    }, [router])
    

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    
    }, [])


    return (

    // * Barre de navigation desktop first
    <div 
    style={{backgroundColor: `${navBg}`}}
    className={shadow ? 'fixed w-full h-20 shadow-xl bg-[#ecf0f3]/80 z-50' : 'fixed w-full h-20 bg-[#ecf0f3]/80 z-50'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-2'>
            
            {/* //? Logo nav */}
            <Link href='/' >
            <Image 
                className='w-[90px] h-[70px]'
                src={Logo}
                alt="Logo"
        
            />
            </Link>

            <div className='absolute left-[10rem]'>
                <LanguageDropdown locales={locales}/>
            </div>
            
            <div className='absolute right-10'>
                <ul 
                style={{color: `${linkColor}`}}
                className='hidden md:flex'>
                    {/* //! Boucle a créer pour l'optimisations des rendus/facilités de maintenance */}
                    <Link href='/#home' scroll={false} >
                        <li className='ml-10 text-sm uppercase hover:border-b-2 border-[#5651E5]/70 hover:rounded-b hover:transition hover:ease-out duration-100'>
                            <FormattedMessage id='navbar.items.home' />
                        </li>
                    </Link>
                    <Link href='/#about' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b-2 border-[#5651E5]/70 hover:rounded-b hover:transition hover:ease-out duration-100'>
                            <FormattedMessage id='navbar.items.about' />
                        </li>
                    </Link>
                    <Link href='/#skills' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b-2 border-[#5651E5]/70 hover:rounded-b hover:transition hover:ease-out duration-100'>
                            <FormattedMessage id='navbar.items.skills' />
                        </li>
                    </Link>
                    <Link href='/#projects' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b-2 border-[#5651E5]/70 hover:rounded-b hover:transition hover:ease-out duration-100'>
                            <FormattedMessage id='navbar.items.projects' />
                        </li>
                    </Link>
                    <Link href='/#contact' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b-2 border-[#5651E5]/70 hover:rounded-b hover:transition hover:ease-out duration-100'>
                            <FormattedMessage id='navbar.items.contact' />
                        </li>
                    </Link>
    
                    {/* //! ////////////////////////////////////////////////////////////////////////// */}
                </ul>  
                <div 
                onClick={handleNav}
                className='md:hidden'>
                    <AiOutlineMenu size={30} className='cursor-pointer'/>
                </div>
            </div>

            {/* // * Mobile menu BG-black  */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

                {/* // * Side menu, affichant nos liens nav mobile */}
                <div className={
                    nav 
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-[400ms]' 
                        : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500'
                    }>
                    <div>
                        <div className='flex w-full items-center justify-between'>

                            {/* Logo mobile menu */}
                            <Link href='/'>
                            <Image 
                                className='w-[90px] h-[70px]'
                                src={Logo} 
                                alt="Logo" 
                                
                            />
                            </Link>
                            <div 
                            onClick={handleNav}
                            className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 mb-4'>
                            <p className='w-[85%] md:w-[90%] py-4'><FormattedMessage id='navbar.mobile.slogan' /></p>
                        </div>
                    </div>

                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>

                            {/* //! Boucle a créer pour l'optimisations des rendus/facilités de maintenance */}
                            <Link href='/#home' scroll={false}>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'><FormattedMessage id='navbar.items.home' /></li>
                            </Link>
                            <Link href='/#about' scroll={false}>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'><FormattedMessage id='navbar.items.about' /></li>
                            </Link>
                            <Link href='/#skills' scroll={false}>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'><FormattedMessage id='navbar.items.skills' /></li>
                            </Link>
                            <Link href='/#projects' scroll={false}>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'><FormattedMessage id='navbar.items.projects' /></li>
                            </Link>
                            <Link href='/#contact' scroll={false}>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'><FormattedMessage id='navbar.items.contact' /></li>
                            </Link>
                            {/* //! ///////////////////////////////////////////////////////////////////////////// */}
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'><FormattedMessage id='navbar.mobile.redirects' /></p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

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
                                {/* //? ///////////////////////////////////// */}

                            </div>

                        </div>
                    </div>

                </div>

                

            </div>
        
        </div>
    </div>
  )
}

export default Navbar