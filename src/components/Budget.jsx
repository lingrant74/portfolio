import React from 'react'
import { NavLink } from "react-router-dom"
import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/arrow-right.svg'
import budget from '../images/budget.svg'
import budget1 from '../images/budget1.svg'
import budget2 from '../images/budget2.svg'

export function Budget() {
    return (
        <main className='flex justify-center mt-14 px-41 flex-col mb-40 min-w-300'>
            <div className='w-full h-125 overflow-hidden'>
                <img src={budget} alt='image of budget app' />
            </div>

            <div className='mt-29 w-full flex h-300'>
                <div className='w-5/12 pr-20'>
                    <hr className='border-1 text-gray-200' />
                    <h1 className='font-bold text-[2.5rem] mt-12.5'>
                        Budget
                    </h1>
                    <div className='text-[#33323D] font-public pt-8 leading-[30px]'>
                        This project is a full-stack budgeting app. I built a responsive finance dashboard where users create budgets, log transactions, and see spending updates instantly. The backend is a Node/Express API with SQLite for persistence, and the frontend (React + Tailwind) uses interactive charts/progress bars and inline validation to keep everything fast and intuitive.
                        <div className='font-bold text-[1rem] text-[#5FB4A2] mt-5'>
                            Interactive Design / Full-Stack Development
                        </div>
                        <div className='font-bold text-[1rem] text-[#5FB4A2] mt-5'>
                            React/Tailwind
                        </div>
                    </div>
                    <a href="https://tourmaline-malasada-1fb272.netlify.app/">
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
                    <div className='w-full mb-10 font-public text-[#33323D] text-[1rem] leading-[30px]'>
                        I built this budgeting app to replace messy spreadsheets with a clear, private dashboard for
                        day-to-day money decisions. It’s a full-stack project: a <strong>React</strong> + <strong>Tailwind</strong> front end
                        talks to a <strong>Node/Express</strong> API backed by <strong>SQLite</strong>. Users create budgets and “pot", record
                        transactions, and see remaining balances update instantly with interactive charts and progress bars.
                        The server handles CRUD, while the UI focuses on accessibility,
                        keyboard navigation, and responsive layouts.
                    </div>
                    <h1 className='text-[2rem] mb-7'>
                        Static Previews
                    </h1>
                    <div className='w-full flex flex-col gap-5'>
                        <div className='overflow-hidden h-100'>
                            <img src={budget1} alt='first preview picture' />
                        </div>
                        <div className='overflow-hidden h-100'>
                            <img src={budget2} alt='second preview picture' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-34.5 mt-16'>
                <hr className=' border-1 text-gray-200' />
                <div className='h-32.5 flex justify-between'>
                    <NavLink to='../portfolio/tenzies' className="flex items-center">
                        <div className='flex items-center cursor-pointer'>
                            <img src={arrowLeft} alt='left-arrow' className='w-4 mr-8 cursor-pointer' />
                            <div className='flex flex-col'>
                                <h1 className='text-[2rem]'>
                                    Tenzies
                                </h1>
                                <h1 className='font-public text-[1rem] text-gray-500'>
                                    Previous Project
                                </h1>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='../portfolio/hangman' className="flex items-center">
                        <div className='flex items-center cursor-pointer'>
                            <div className='flex flex-col items-end'>
                                <h1 className='text-[2rem]'>
                                    Hangman
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