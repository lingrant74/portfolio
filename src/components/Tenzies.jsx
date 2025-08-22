import React from 'react'
import { NavLink } from "react-router-dom"
import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/arrow-right.svg'
import ten1 from '../images/ten1.png'
import ten2 from '../images/ten2.png'

export function Tenzies() {
    return (
        <main className='flex justify-center mt-14 px-41 flex-col mb-40 min-w-300'>
            <div className='w-full h-125 bg-green-100 overflow-hidden'>
                <img src={ten1} alt='Picture of Tenzies'/>
            </div>

            <div className='mt-29 w-full flex'>
                <div className='w-5/12 mr-20'>
                    <hr className=' border-1 text-gray-200' />
                    <h1 className='font-bold text-[2.5rem] mt-12.5'>
                        Tenzies
                    </h1>
                    <div className='text-[#33323D] text-[1rem] font-public leading-[30px] w-7/8 mt-5'>
                        This game is designed as a fun, interactive group activity built with <strong>React</strong>. It uses <strong>state hooks</strong> to manage dice rolls, locked dice, and winning conditions. With <strong>reusable components</strong> and <strong>conditional rendering</strong>, the layout stays clean and dynamic. Its <strong>fast-paced gameplay</strong> and simple mechanics make it perfect for friendly competition among friends or family.
                        <div className='font-bold text-[1rem] text-[#5FB4A2] mt-5'>
                            Interactive Design / Front-End Development
                        </div>
                        <div className='font-bold text-[1rem] text-[#5FB4A2] mt-5'>
                            React/CSS
                        </div>
                    </div>
                    <div>
                        <a href="https://spectacular-frangollo-b51f90.netlify.app">
                            <button className='mt-10 font-public border-1 border-gray-800 w-50.5 h-12 text-gray-800 cursor-pointer hover:bg-gray-900 hover:text-white
                                transition-colors duration-200'>
                                VISIT WEBSITE
                            </button>
                        </a>
                    </div>
                    <hr className=' border-1 text-gray-200 mt-12' />
                </div>
                <div className='w-7/12 '>
                    <h1 className='text-[2rem] mb-7'>
                        Project Background
                    </h1>
                    <div className='w-full mb-10 text-[#33323D] text-[1rem] leading-[30px]'>
                        This was one of my first projects using React, where I started exploring interactive web apps. I wanted to create something fun and simple to learn the basics of state management and component structure. Building this project gave me a lot of hands-on experience and confidence with React fundamentals.
                    </div>
                    <h1 className='text-[2rem] mb-7'>
                        Static Previews
                    </h1>
                    <div className='w-full overflow-hidden h-130'>
                        <img src={ten2} alt='Static preview of Tenzies'/>
                    </div>
                </div>
            </div>

            <div className='w-full h-34.5 mt-16'>
                <hr className=' border-1 text-gray-200' />
                <div className='h-32.5 flex justify-between'>
                    <NavLink to='../portfolio/youtube' className="flex items-center">
                        <div className='flex items-center'>
                            <img src={arrowLeft} alt='left-arrow' className='w-4 mr-8 cursor-pointer' />
                            <div className='flex flex-col'>
                                <h1 className='text-[2rem]'>
                                    Youtube-Mock
                                </h1>
                                <h1 className='font-public text-[1rem] text-gray-500'>
                                    Previous Project
                                </h1>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='../portfolio/budget' className="flex items-center">
                        <div className='flex items-center'>
                            <div className='flex flex-col'>
                                <h1 className='text-[2rem]'>
                                    Budget
                                </h1>
                                <h1 className='font-public text-[1rem] text-gray-500'>
                                    Next Project
                                </h1>
                            </div>
                            <img src={arrowRight} alt='left-arrow' className='w-4 ml-8 cursor-pointer' />
                        </div>
                    </NavLink>
                </div>
                <hr className=' border-1 text-gray-200' />
            </div>
        </main>
    )
}