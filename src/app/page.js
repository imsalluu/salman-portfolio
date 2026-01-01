import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const page = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default page
