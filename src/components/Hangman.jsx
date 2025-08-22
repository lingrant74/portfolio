import React from 'react'
import { NavLink } from "react-router-dom"
import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/arrow-right.svg'
import end1 from '../images/endGame1.png'
import hang1 from '../images/hang1.png'
import hang2 from '../images/hang2.png'


export function Hangman() {
    return (
        <main className='flex justify-center mt-14 px-41 flex-col mb-40 min-w-300'>
            <div className='w-full h-125 bg-green-100 overflow-hidden'>
                <img src={hang1} alt='image of the hangman game' />
            </div>

            <div className='mt-29 w-full flex'>
                <div className='w-5/12 pr-20'>
                    <hr className=' border-1 text-gray-200' />
                    <h1 className='font-bold text-[2.5rem] mt-12.5'>
                        Hangman
                    </h1>
                    <div className='text-[#33323D] font-public pt-8 leading-[30px]'>
                        This app is a <strong>interactive platform</strong> built using <strong>React</strong>, leveraging <strong>React state</strong> and <strong>hooks</strong> to deliver a <strong>smooth, responsive user experience</strong>. It efficiently manages <strong>data flow</strong> and <strong>user interactions</strong> through <strong>stateful components</strong>, ensuring <strong>real-time updates</strong> across the interface without unnecessary re-renders. The architecture is <strong>modular</strong> and <strong>component-driven</strong>, enabling <strong>clean code organization</strong>.
                        <div className='font-bold text-[1rem] text-[#5FB4A2] mt-5'>
                            Interactive Design / Front End Development
                        </div>
                        <div className='font-bold text-[1rem] text-[#5FB4A2] mt-5'>
                            React/CSS
                        </div>
                    </div>
                    <a href="https://heartfelt-rugelach-8306f3.netlify.app">
                        <button className=' mt-10 font-public border-1 border-gray-800 w-50.5 h-12 text-gray-800 cursor-pointer hover:bg-gray-900 hover:text-white
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
                    <div className='w-full mb-10 font-public leading-[35px]'>
                        While making the Hangman app, I worked on setting up the game logic with React and figuring out how to update the interface as the game progressed. I spent time organizing the layout, reusing components where I could, and learning how to make the site feel smooth and responsive.
                    </div>
                    <h1 className='text-[2rem] mb-7'>
                        Static Previews
                    </h1>
                    <div className='w-full'>
                        <div className='overflow-hidden h-100'>
                            <img src={end1} alt='static preview of endgame' />
                        </div>
                        <div className='overflow-hidden h-100 mt-10'>
                            <img src={hang2} alt='static preview of endgame' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-34.5 mt-16'>
                <hr className=' border-1 text-gray-200' />
                <div className='h-32.5 flex justify-between'>
                    <NavLink to='../portfolio/budget' className="flex items-center">
                        <div className='flex items-center'>
                            <img src={arrowLeft} alt='left-arrow' className='w-4 mr-8 cursor-pointer' />
                            <div className='flex flex-col'>
                                <h1 className='text-[2rem]'>
                                    Budget
                                </h1>
                                <h1 className='font-public text-[1rem] text-gray-500'>
                                    Previous Project
                                </h1>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='../portfolio/rock' className="flex items-center">
                        <div className='flex items-center'>
                            <div className='flex flex-col'>
                                <h1 className='text-[2rem]'>
                                    Rock/Paper/Scissor
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