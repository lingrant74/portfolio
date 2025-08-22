import React from 'react'
import { NavLink, useLocation } from "react-router-dom"
import logo from '../images/logo.svg'
import linked from '../images/linkedin.svg'



export function Footer() {
    const { pathname } = useLocation();
    const hideLine = pathname === "/portfolio/contactMe"
    return (
        <footer className='flex flex-col '>
            {hideLine &&
            <div className='w-full h-21 mb-37.5 flex items-center justify-between px-41'>
                <div className='text-[2.5rem] font-bold w-87.5'>
                    Interesed in doing a project together?
                </div>
                <div className='flex-1'>
                    <hr className='border-1 text-gray-300 mx-8' />
                </div>
                <NavLink to='contactMe'>
                    <button className='font-public border-1 border-gray-800 w-41 h-12 text-gray-800 cursor-pointer hover:bg-gray-900 hover:text-white
                    transition-colors duration-200'>
                        CONTACT ME
                    </button>
                </NavLink>
            </div>}
            <div className='justify-between bg-[#33323D] items-center h-20 text-white px-15 flex'>
                <div className='flex gap-10'>
                    <NavLink
                        to='/'
                        end
                        style={({ isActive }) => isActive ? { color: '#5FB4A2' } : null}
                    >
                        <img src={logo} alt='logo icon' className='brightness-0 invert' />
                    </NavLink>
                    <NavLink
                        to='/'
                        style={({ isActive }) => isActive ? { color: '#5FB4A2' } : null}>
                        HOME
                    </NavLink>
                    <NavLink
                        to='portfolio'
                        style={({ isActive }) => isActive ? { color: '#5FB4A2' } : null} >
                        PORTFOLIO
                    </NavLink>
                    <NavLink
                        to='contactMe'
                        style={({ isActive }) => isActive ? { color: '#5FB4A2' } : null} >
                        CONTACT ME
                    </NavLink>
                </div>
                <div className='flex gap-8 items-center'>
                    <div className='h-7 '>
                        <a href='https://www.linkedin.com/in/grant-lin-2ab092347/'>
                            <img src={linked} alt='linkedIn Logo ' className='h-full cursor-pointer invert' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}