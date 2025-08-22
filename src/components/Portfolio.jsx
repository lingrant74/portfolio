import React from 'react'
import { NavLink } from "react-router-dom"
import budget from '../images/budgetHome.svg'
import home from '../images/rockHome.png'
import tenHome from '../images/tenHome.png'
import hangman from '../images/hangmanHome.png'
import you from '../images/you.png'

export function Portfolio() {
    return (
        <main className='flex justify-center mt-14 px-41 flex-col mb-40 gap-y-30 min-w-300'>
            <div className='h-125 flex'>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <img src={budget} alt='image of budget app' className='object-cover' />
                </div>
                <div className='w-1/2 flex flex-col pl-20'>
                    <hr className=' border-1 text-gray-200' />
                    <h1 className='font-bold text-[2.5rem] mt-12.5'>
                        Budget
                    </h1>
                    <div className='h-90 text-[#33323D] font-public leading-[30px] w-7/8 mt-5'>
                        This project is a <strong>full-stack</strong> budgeting app. I built a responsive finance dashboard where users create budgets, log transactions, and see spending updates instantly. The backend is a <strong>Node/Express API</strong> with <strong>SQLite</strong> for persistence, and the frontend <strong>React + Tailwind</strong> uses interactive charts/progress bars and inline validation to keep everything fast and intuitive.
                    </div>
                    <NavLink to='budget'>
                        <button className='font-public border-1 border-gray-800 w-50.5 h-12 text-gray-800 cursor-pointer
                        hover:bg-gray-900 hover:text-white
                        transition-colors duration-200'>
                            VIEW PROJECT
                        </button>
                    </NavLink>
                    <hr className=' border-1 text-gray-200 mt-12' />
                </div>
            </div>

            <div className='h-125 flex'>
                <div className='w-1/2 flex flex-col pr-20'>
                    <hr className=' border-1 text-gray-200' />
                    <h1 className='font-bold text-[2.5rem] mt-12.5'>
                        Hangman
                    </h1>
                    <div className='h-90 text-[#33323D] font-public leading-[30px] w-7/8 mt-5'>
                        This app is a <strong>interactive platform</strong> built using <strong>React</strong>, leveraging <strong>React state</strong> and <strong>hooks</strong>. It efficiently manages <strong>data flow</strong> and <strong>user interactions</strong> through <strong>stateful components</strong>, ensuring <strong>real-time updates</strong> across the interface without unnecessary re-renders. The architecture is <strong>modular</strong> and <strong>component-driven</strong>, enabling <strong>clean code organization</strong>.
                    </div>
                    <NavLink to='hangman'>
                        <button className='font-public border-1 border-gray-800 w-50.5 h-12 text-gray-800 cursor-pointer hover:bg-gray-900 hover:text-white
                        transition-colors duration-200'>
                            VIEW PROJECT
                        </button>
                    </NavLink>
                    <hr className=' border-1 text-gray-200 mt-12' />
                </div>
                <div className='w-1/2 overflow-hidden flex items-center justify-center'>
                    <img src={hangman} alt='Picture of Hangman game' className='object-cover'/>
                </div>
            </div>

            <div className='h-125 flex'>
                <div className='w-1/2 overflow-hidden flex items-center justify-center'>
                    <img src={home} alt="rock paper scissor picture" className="h-full w-full object-cover object-center"/>
                </div>
                <div className='w-1/2 flex flex-col pl-20'>
                    <hr className=' border-1 text-gray-200' />
                    <h1 className='font-bold text-[2.5rem] mt-12.5'>
                        Rock/Paper/Scissor
                    </h1>
                    <div className='h-90 text-[#33323D] font-public leading-[30px] w-7/8 mt-5'>
                        The game is a <strong>visually dynamic game</strong> built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, featuring two modes: the classic <strong>Rock, Paper, Scissors</strong> and the extended <strong>Rock, Paper, Scissors, Spock, Lizard</strong> version. The gameplay is powered by <strong>JavaScript state management</strong>, while the smooth transitions with <strong>CSS animations</strong> bring each round to life — from <strong>button interactions</strong> to the <strong>reveal of results</strong>.
                    </div>
                    <NavLink to='rock'>
                        <button className='font-public border-1 border-gray-800 w-50.5 h-12 text-gray-800 cursor-pointer hover:bg-gray-900 hover:text-white
                        transition-colors duration-200'>
                            VIEW PROJECT
                        </button>
                    </NavLink>
                    <hr className=' border-1 text-gray-200 mt-12' />
                </div>
            </div>

            <div className='h-125 flex items-center'>
                <div className='w-1/2 flex flex-col pr-20'>
                    <hr className=' border-1 text-gray-200' />
                    <h1 className='font-bold text-[2.5rem] mt-12.5'>
                        Youtube-Mock
                    </h1>
                    <div className='h-90 text-[#33323D] font-public leading-[30px] w-7/8 mt-5'>
                        The project explores <strong>UI layout design</strong> while taking full advantage of <strong>React's reusable components</strong> to build a clean, scalable interface. By breaking the layout into <strong>modular, reusable elements</strong>, the project ensures consistency across the app. The use of <strong>component-based architecture</strong> allows for easy styling and responsive behavior.
                    </div>
                    <NavLink to='youtube'>
                        <button className='font-public border-1 border-gray-800 w-50.5 h-12 text-gray-800 cursor-pointer hover:bg-gray-900 hover:text-white
                        transition-colors duration-200'>
                            VIEW PROJECT
                        </button>
                    </NavLink>
                    <hr className=' border-1 text-gray-200 mt-12' />
                </div>
                <div className='w-1/2 h-full bg-red-100 overflow-hidden flex items-center justify-center'>
                    <img src={you} alt='youtube home page' className='object-cover'/>
                </div>
            </div>

            <div className='h-125 flex'>
                <div className='w-1/2 overflow-hidden flex items-center justify-center'>
                    <img src={tenHome} alt='tenzies image' className='object-cover'/>
                </div>
                <div className='w-1/2 flex flex-col pl-20'>
                    <hr className=' border-1 text-gray-200' />
                    <h1 className='font-bold text-[2.5rem] mt-12.5'>
                        Tenzies
                    </h1>
                    <div className='h-90 text-[#33323D] font-public leading-[30px] w-7/8 mt-5'>
                        This game is designed as a fun, interactive group activity built with <strong>React</strong>. It uses <strong>state hooks</strong> to manage dice rolls, locked dice, and winning conditions. With <strong>reusable components</strong> and <strong>conditional rendering</strong>, the layout stays clean and dynamic. Its <strong>fast-paced gameplay</strong> with simple mechanics.
                    </div>
                    <NavLink to='tenzies'>
                        <button className='font-public border-1 border-gray-800 w-50.5 h-12 text-gray-800 cursor-pointer hover:bg-gray-900 hover:text-white
                        transition-colors duration-200'>
                            VIEW PROJECT
                        </button>
                    </NavLink>
                    <hr className=' border-1 text-gray-200 mt-12' />
                </div>
            </div>
        </main>
    )
}