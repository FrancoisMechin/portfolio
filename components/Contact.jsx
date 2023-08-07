"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import ContactImg from "../public/assets/contact.png"
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import { useState } from 'react'

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isWarningAlert,setIsWarningAlert] = useState(false);
    const formRef = useRef(null);
    const alertWarningRef = useRef(null);
    const alertSuccessRef = useRef(null);

    useEffect(() => {
        if (formSubmitted) {
            // Automatically hide the alert after 3 seconds
            const timer = setTimeout(() => {
                setFormSubmitted(false);
                alertSuccessRef.current.style.display = 'none';
            }, 3000);

            return () => clearTimeout(timer);
        }
        if (formSubmitted && isWarningAlert) {
            // Automatically hide the alert after 3 seconds
            const timer = setTimeout(() => {
                setFormSubmitted(false);
                alertWarningRef.current.style.display = 'none';
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [formSubmitted,isWarningAlert]);

    async function handleDismissAlert(){
        setFormSubmitted(!formSubmitted)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if(formSubmitted){
            return;
        }
        // const data = new FormData(formRef.current);

        const formData = {
            first: e.target.first.value,
            last: e.target.last.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        try {

        const response = await fetch('/api/sendMail', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setFormSubmitted(true);
            formRef.current.reset();
        } else {
            setIsWarningAlert(true);
        }
        } catch (err) {
            console.error(err);
        }

    }

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
                        
                        </div>
                    </div>
                </div>
            </div>


                {/* right */}
                {/* /// ? CONTACT FORM /// */}

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

                                {/* Nos inputs */}
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        <FormattedMessage id='contact.form.label.firstname'/> <span className='text-red-600'>*</span>
                                    </label>
                                    <input 
                                        id='frm-first'
                                        type="text"
                                        name='first'
                                        placeholder='François'
                                        autoComplete='given-name'
                                        required
                                        className='border-2 rounded-lg p-3 flex border-s-[#5651e5]'
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label  className='uppercase text-sm py-2'>
                                        <FormattedMessage id='contact.form.label.lastname'/> <span className='text-red-600'>*</span>
                                    </label>
                                    <input 
                                        id='frm-last'
                                        type="text"
                                        name='last'
                                        placeholder='Mechin'
                                        autoComplete='family-name'
                                        required
                                        className='border-2 rounded-lg p-3 flex border-s-[#5651e5]'
                                    />
                                </div>



                            </div>

                            <div className='flex flex-col py-2'>
                                    <label htmlFor='frm-phone' className='uppercase text-sm py-2'>
                                        <FormattedMessage id='contact.form.label.phone'/>
                                    </label>
                                    <input 
                                        id='frm-phone'
                                        name='phone'
                                        type="text"
                                        placeholder='+336'
                                        autoComplete='tel'
                                        className='border-2 rounded-lg p-3 flex border-s-[#5651e5]'


                                    />
                                </div>

                            <div className='flex flex-col py-2'>
                                <label htmlFor='frm-email' className='uppercase text-sm py-2'>
                                    <FormattedMessage id='contact.form.label.email'/> <span className='text-red-600'>*</span>
                                </label>
                                <input 
                                    id='frm-email'
                                    name='email'
                                    type="email"
                                    autoComplete='email'
                                    placeholder='mail@server.com'
                                    required
                                    className='border-2 rounded-lg p-3 flex border-s-[#5651e5]'
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label htmlFor='frm-subject' className='uppercase text-sm py-2'>
                                    <FormattedMessage id='contact.form.label.subject'/> <span className='text-red-600'>*</span>
                                </label>
                                <input 
                                    id='frm-subject'
                                    name='subject'
                                    type="text"
                                    required
                                    placeholder={<FormattedMessage id='contact.form.label.subject.placeholder' values={{ b: (placeholder) => {placeholder}}}/>}
                                    className='border-2 rounded-lg p-3 flex border-s-[#5651e5]'
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label htmlFor='frm-message' className='uppercase text-sm py-2'>
                                    <FormattedMessage id='contact.form.label.message'/> <span className='text-red-600'>*</span>
                                </label>
                                <textarea id='frm-message' className='border-2 rounded-lg p-3 border-s-[#5651e5]' rows={10} name='message'></textarea>
                            </div>

                            <button type='submit' className='w-full p-4 text-gray-100 mt-4'><FormattedMessage id='contact.form.button'/></button>
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


        {/* /// ! ALERT BOXS */}

        {formSubmitted && (     
            <div ref={alertSuccessRef} className="fixed flex w-full max-w-[32rem] h-24 shadow-lg rounded-lg z-50 top-24 right-10" role='alert'>
                <div className="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white fill-current" viewBox="0 0 16 16" width="20" height="20"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                </div>
                <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                    <div className='block tracking-wider justify-center items-center m-auto'>
                        <div>
                            <FormattedMessage id='contact.form.alert.success.first' />
                        </div>
                        
                        <hr className='text-green-500'/>
                        <div>
                            <FormattedMessage id='contact.form.alert.success.second'/>
                        </div>
                    </div>

                <div>
                <svg onClick={handleDismissAlert} xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                    </div>
                </div>
            </div>
        )   }

        {isWarningAlert && (     
            <div ref={alertWarningRef} class="fixed flex w-full max-w-[32rem] h-24 shadow-lg rounded-lg z-50 top-24 right-10" role='alert'>
                <div class="bg-red-600 py-4 px-6 rounded-l-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="fill-current text-white" width="20" height="20"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
                </div>
                <div class="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                <div className='tracking-wider'>
                    <FormattedMessage id='contact.form.alert.warning'/>
                    </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                </div>
            </div>
                
            
        )}

        </div>
    )
}

export default Contact