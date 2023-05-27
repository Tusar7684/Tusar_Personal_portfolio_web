import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocal from './Headersocal'
const Header = () => {
  return (
      <section className="conatiner header__conatiner">
        <h5>Hello I'm</h5>
        <h1>Tusar Kumar Nayak</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <CTA/>
        <Headersocal/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </section>
  )
}

export default Header