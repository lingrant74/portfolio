import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './components/Home.jsx'
import {ContactMe} from './components/ContactMe.jsx'
import {Portfolio} from './components/Portfolio.jsx'
import {Dashboard} from './components/Dashboard.jsx'

import {Budget} from './components/Budget.jsx'
import {Hangman} from './components/Hangman.jsx'
import {Rock} from './components/Rock.jsx'
import {Youtube} from './components/Youtube.jsx'
import {Tenzies} from './components/Tenzies.jsx'

import ScrollToTop from "./components/scrollToTop.jsx";

import NotFound from './components/404page.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path = '/' element = {<Dashboard/>}>
            <Route index element={<Home/>}/>
            <Route path="*" element={<NotFound/>} />
            <Route path = 'contactMe' element = {<ContactMe/>}/>
            <Route path = 'portfolio' element = {<Portfolio/>}/>

            <Route path = 'portfolio/budget' element = {<Budget/>}/>
            <Route path = 'portfolio/hangman' element = {<Hangman/>}/>
            <Route path = 'portfolio/rock' element = {<Rock/>}/>
            <Route path = 'portfolio/youtube' element = {<Youtube/>}/>
            <Route path = 'portfolio/tenzies' element = {<Tenzies/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
