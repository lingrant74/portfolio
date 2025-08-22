import React from 'react'
import { NavLink } from "react-router-dom"
import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/arrow-right.svg'
import home from '../images/rock0.png'
import rock1 from '../images/rock1.png'
import rock2 from '../images/rock2.png'


export function Rock() {
    return (
        <main className='flex justify-center mt-14 px-41 flex-col mb-40 min-w-300'>
            <div className='w-full h-125 bg-green-100 overflow-hidden'>
                <img src={home} alt='Rock paper scissor preview' />
            </div>

            <div className='mt-29 w-full flex'>
                <div className='w-5/12 pr-20'>
                    <hr className=' border-1 text-gray-200' />
                    <h1 className='font-bold text-[2.5rem] mt-12.5'>
                        Rock/Paper/Scissor
                    </h1>
                    <div className='text-[#33323D] font-public leading-[30px] pt-8'>
                        The game is a <strong>visually dynamic game</strong> built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, featuring two modes: the classic Rock, Paper, Scissors and the extended Rock, Paper, Scissors, Spock, Lizard version. The gameplay is powered by <strong>JavaScript state management</strong>, while the smooth transitions with <strong>CSS animations</strong> bring each round to life — from <strong>button interactions</strong> to the reveal of results.
                        <div className='font-bold text-[1rem] text-[#5FB4A2] mt-5'>
                            Interactive Design / Front End Development
                        </div>
                        <div className='font-bold text-[1rem] text-[#5FB4A2] mt-5'>
                            React/CSS
                        </div>
                    </div>
                    <a href="https://glittering-sunshine-fc7f84.netlify.app">
                        <button className='mt-15 font-public border-1 border-gray-800 w-50.5 h-12 text-gray-800 cursor-pointer hover:bg-gray-900 hover:text-white
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
                        When building the Rock Paper Scissors game, I had trouble switching between the classic and extended modes without using any routing. Since everything was handled with plain JavaScript, I had to carefully manage UI updates and structure the game so it didn’t get messy. Learning how to time those changes with CSS animations to make the transitions smooth was one of the trickiest parts.
                    </div>
                    <h1 className='text-[2rem] mb-7'>
                        Static Previews
                    </h1>
                    <div className='w-full flex flex-col gap-5'>
                        <div className='overflow-hidden h-100'>
                            <img src={rock1} alt="rock papsr scissor static previews" />
                        </div>
                        <div className='overflow-hidden h-100'>
                            <img src={rock2} alt="rock papsr scissor static previews" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-34.5 mt-16'>
                <hr className=' border-1 text-gray-200' />
                <div className='h-32.5 flex justify-between'>
                    <NavLink to='../portfolio/hangman' className="flex items-center">
                        <div className='flex items-center'>
                            <img src={arrowLeft} alt='left-arrow' className='w-4 mr-8 cursor-pointer' />
                            <div className='flex flex-col'>
                                <h1 className='text-[2rem]'>
                                    Hangman
                                </h1>
                                <h1 className='font-public text-[1rem] text-gray-500'>
                                    Previous Project
                                </h1>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='../portfolio/youtube' className="flex items-center">
                        <div className='flex items-center'>
                            <div className='flex flex-col'>
                                <h1 className='text-[2rem]'>
                                    Youtube-Mock
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