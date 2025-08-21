import React from 'react'
import { NavLink } from "react-router-dom"
import logo from '../images/logo.svg'


export function Header() {
    return (
        <header className='px-41 flex justify-between mt-16 h-8 '>
            <NavLink 
                to='/'
                end
                style = {({isActive}) => isActive ? {color: '#5FB4A2'} :null }
            >
                <img src={logo} alt='logo icon' className='fill-white' />
            </NavLink>
            <div className='flex gap-8'>
                <NavLink 
                    to='/' 
                    style = {({isActive}) => isActive ? {color: '#5FB4A2'} :null }>
                    HOME
                </NavLink>
                <NavLink 
                    to='portfolio'
                    style = {({isActive}) => isActive ? {color: '#5FB4A2'} :null } >
                    PORTFOLIO
                </NavLink>
                <NavLink 
                    to='contactMe'
                    style = {({isActive}) => isActive ? {color: '#5FB4A2'} :null } >
                    CONTACT ME
                </NavLink>
            </div>
        </header>
    )
}