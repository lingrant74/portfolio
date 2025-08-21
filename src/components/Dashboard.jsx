import React from 'react'
import { Outlet } from "react-router-dom"
import {Header} from './Header.jsx'
import {Footer} from './Footer.jsx'



export function Dashboard (){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}