import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (

    // * Barre de navigation desktop first
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 text-black'>
            <Image src="/../public/assets/fmlogo-transparent.png" alt="Logo" width='100' height='50' />
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b transition'>
                            Home
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b transition'>
                            About
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b transition'>
                            Skills
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b transition'>
                            Projetcs
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b transition'>
                            Contact
                        </li>
                    </Link>
                </ul>  
                <div className='md:hidden'>
                    <AiOutlineMenu size={30}/>
                </div>
            </div>

            {/* // * Menu BG-black mobile devices */}
            <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>

                {/* // * Panneau blanc à gauche, affichant nos liens nav mobile */}
                <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src="/../public/assets/fmlogo-transparent.png" alt="Logo" width='100' height='60'/>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 mb-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
                        </div>
                    </div>

                    <div>
                        <ul>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                    </div>

                </div>

                

            </div>

        </div>
    </div>
  )
}

export default Navbar