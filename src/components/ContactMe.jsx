import React from 'react'
import ContactForm from './Contact.jsx'
import linked from '../images/linkedin.svg'
import { NavLink } from "react-router-dom"


export function ContactMe() {

    return (
        <main className=' px-41 h-screen z-10 relative mt-23.5 min-w-250'>
            <hr className=' border-1 text-gray-200' />
            <div className='w-full h-88.5 flex'>
                <div className='w-5/12 font-bold text-3xl pt-12'>
                    Get in Touch
                </div>
                <div className='w-7/12 text-[#33323D] leading-[30px] font-public py-15'>
                    I love trying new things and exploring opportunities. I’m curious, adaptable, and excited to work
                    on meaningful products—whether that’s learning a new stack, jumping into a fresh problem space,
                    or collaborating with a new team. If you’ve got something interesting, I’d love to hear about it.
                    <div className='h-10 mt-10'>
                        <a href = 'https://www.linkedin.com/in/grant-lin-2ab092347/'>
                        <img src={linked} alt='linkedIn Logo ' className='h-full cursor-pointer'/>
                        </a>
                    </div>
                </div>
            </div>
            <hr className=' border-1 text-gray-200 ' />
            <div className=' w-full bg-white flex'>
                <div className='w-5/12 font-bold text-3xl pt-12'>
                    Contact Me
                </div>
                <div className='w-7/12 pt-12'>
                    <ContactForm />
                </div>
            </div>
        </main>
    )
}