import React from 'react'
import { NavLink } from "react-router-dom"
import down from '../images/down-arrows.svg'
import selfie from '../images/selfie.JPG'
import bg from '../images/image.png'


export function Home() {
    return (
        <main className='flex justify-center mt-14 px-41 flex-col mb-40 '>
            <div className='w-full h-150 bg-green-100 relative overflow-hidden'>
                <img className='absolute w-full' src ={bg} alt = 'background image for home page'/>
                <div className='absolute flex flex-col bottom-0 left-0 z-10 w-111 bg-white'>
                    <div className='font-bold pt-10 text-[3rem] w-98 mb-26'>
                        Hey, I'm Grant and I love building beatiful websites
                    </div>
                    <a href="#about" className='group flex w-50 h-12 bg-[#203A4C] text-white bottom-0 absolute hover:bg-[#5FB4A2] duration-200'>
                        <div className='h-full w-12 bg-[#1D3443] flex justify-center items-center group-hover:bg-[#56A293] transition duration-200 ease-in-out'>
                            <img src={down} alt='down arrow' className='w-5 h-5 group-hover:brightness-0 group-hover:invert transition duration-200 ease-in-out' />
                        </div>
                        <div className='flex justify-center items-center ml-5 tracking-[2px] cursor-pointer font-public '>
                            ABOUT ME
                        </div>
                    </a>
                </div>
            </div>

            <section id="about" className="scroll-mt-[0px]">
                <div className='h-150 w-full mt-38 flex relative left-0 '>
                    <div className=' w-7/12 h-full overflow-hidden'>
                        <img className= 'w-4/5' src={selfie} alt = "image of myself"/>
                    </div>
                    <div className='flex flex-col w-5/12'>
                        <hr className=' border-1 text-gray-200' />
                        <h1 className='font-bold text-[2.5rem] mt-12.5'>
                            About Me
                        </h1>
                        <div className='h-90 text-[#33323D] font-public w-7/8 mt-10'>
                            I’m a junior developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Ithaca, NY. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
                        </div>
                        <NavLink to= 'portfolio'>
                            <button className='font-public border-1 border-gray-800 w-50.5 h-12 text-gray-800 cursor-pointer hover:bg-gray-900 hover:text-white
                            transition-colors duration-200'>
                                GO TO PORTFOLIO
                            </button>
                        </NavLink>
                        <hr className=' border-1 text-gray-200 mt-12' />
                    </div>
                </div>
            </section>

        </main>
    )
}