/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

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

        // document.querySelectorAll('a').forEach( link => {
        //     link.addEventListener('click', function(e){
        //         e.preventDefault();
        //         console.log(this.hash)
        //         const hash = this.hash;
        //         window.scrollTo({top: document.querySelector(hash).offsetTop, behavior: 'smooth'});
               

        //             // Add hash (#) to URL when done scrolling (default click behavior)
        //             window.location.hash = hash;
               
        //     })
        // })
    }, [])


    return (

    // * Barre de navigation desktop first
    <div className={shadow ? 'fixed w-full h-20 shadow-xl bg-[#ecf0f3]/80 z-10' : 'fixed w-full h-20 bg-[#ecf0f3]/80 z-10'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            
            {/* //? Logo nav */}
            <Link href='/' >
            <Image 
            src="/../public/assets/fmlogo-transparent.png" 
            alt="Logo" 
            width='100' 
            height='50'/>
            </Link>
            
            <div className='absolute right-10'>
                <ul className='hidden md:flex'>

                    {/* //! Boucle a créer pour l'optimisations des rendus/facilités de maintenance */}
                    <Link href='/' scroll={true}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Home
                        </li>
                    </Link>
                    <Link href='#about' scroll={false}>
                        <li className='ml-10 text-sm  uppercase hover:border-b'>
                            About
                        </li>
                    </Link>
                    <Link href='#skills' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Skills
                        </li>
                    </Link>
                    <Link href='#projects' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Projects
                        </li>
                    </Link>
                    <Link href='#contact' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Contact
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
                            <Image src="/../public/assets/fmlogo-transparent.png" 
                                alt="Logo" 
                                width='100' 
                                height='60'
                            />
                            </Link>
                            <div 
                            onClick={handleNav}
                            className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 mb-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Lets build something legendary together</p>
                        </div>
                    </div>

                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>

                            {/* //! Boucle a créer pour l'optimisations des rendus/facilités de maintenance */}
                            <Link href='/'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='#about'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='#skills'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='#projects'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='#contact'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                            {/* //! ///////////////////////////////////////////////////////////////////////////// */}
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

                                {/* //? Utilisé deux fois, composants à créer? */}
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                 <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                 <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail/>
                                </div>
                                 <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
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