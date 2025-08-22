import React from 'react'
import { Outlet } from "react-router-dom"
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'



export function Dashboard() {
    return (
        <>
            <div className="min-h-dvh flex flex-col">
                <Header />
                <main className='flex-1'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}