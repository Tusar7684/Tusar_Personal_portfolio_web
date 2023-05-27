import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/About/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portrfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'



const App = () => {
  return (
<>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
</>
  )
}

export default App