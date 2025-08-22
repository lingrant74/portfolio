import React from 'react'
import { NavLink } from "react-router-dom"
import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/arrow-right.svg'
import you1 from '../images/you1.png'
import you2 from '../images/you2.png'
import youHome from '../images/youHome.png'


export function Youtube() {
    return (
        <main className='flex justify-center mt-14 px-41 flex-col mb-40 min-w-300'>
            <div className='w-full h-125 bg-green-100 overflow-hidden'>
                <img src={youHome} alt='Youtube-Mock Home page'/>
            </div>

            <div className='mt-29 w-full flex'>
                <div className='w-5/12 pr-20'>
                    <hr className=' border-1 text-gray-200' />
                    <h1 className='font-bold text-[2.5rem] mt-12.5'>
                        YouTube-Mock
                    </h1>
                    <div className='text-[#33323D] font-public pt-8 leading-[30px]'>
                        The project explores <strong>UI layout design</strong> while taking full advantage of <strong>React's reusable components</strong> to build a clean, scalable interface. By breaking the layout into <strong>modular, reusable elements</strong>, the project ensures consistency across the app. The use of <strong>component-based architecture</strong> allows for easy styling, responsive behavior, and efficient rendering, making the UI both visually appealing and highly functional.
                    </div>
                    <a href="https://celebrated-truffle-2cfab9.netlify.app">
                        <button className='mt-10 font-public border-1 border-gray-800 w-50.5 h-12 text-gray-800 cursor-pointer hover:bg-gray-900 hover:text-white
                            transition-colors duration-200'>
                            VISIT WEBSITE
                        </button>
                    </a>
                    <hr className=' border-1 text-gray-200 mt-12' />
                </div>
                <div className='w-7/12'>
                    <h1 className='text-[2rem] mb-7'>
                        Project Background
                    </h1>
                   <div className='w-full mb-10 font-public leading-[30px]'>
                        While making this project, I struggled with getting the search bar to update results correctly in React. At first, handling the input state and filtering data in real-time was confusing, especially when managing re-renders. After some trial and error with state hooks and event handling, I finally got it working and learned a lot about how React handles data flow.
                    </div>
                    <h1 className='text-[2rem] mb-7'>
                        Static Previews
                    </h1>
                    <div className='w-full'>
                        <div className='overflow-hidden h-100 shadow-lg'>
                            <img src={you1} alt="Youtube Static Preview"/>
                        </div>
                        <div className='overflow-hidden h-100 shadow-lg mt-10'>
                            <img src={you2} alt="Youtube Static Preview"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-34.5 mt-16'>
                <hr className=' border-1 text-gray-200' />
                <div className='h-32.5 flex justify-between'>
                    <NavLink to='../portfolio/rock' className="flex items-center">
                        <div className='flex items-center'>
                            <img src={arrowLeft} alt='left-arrow' className='w-4 mr-8 cursor-pointer' />
                            <div className='flex flex-col'>
                                <h1 className='text-[2rem]'>
                                    Rock/Paper/Scissor
                                </h1>
                                <h1 className='font-public text-[1rem] text-gray-500'>
                                    Previous Project
                                </h1>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='../portfolio/tenzies' className="flex items-center">
                        <div className='flex items-center'>
                            <div className='flex flex-col'>
                                <h1 className='text-[2rem]'>
                                    Tenzies
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