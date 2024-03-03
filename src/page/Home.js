import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
// import { Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  )

}

export default Home