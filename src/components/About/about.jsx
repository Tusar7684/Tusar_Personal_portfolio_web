import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {TbAward} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
             <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <TbAward className='about_icon'/>
                <h5>Experience</h5>
                <small>1+ years working</small>
              </article>
              <article className="about_card">
                <FiUsers className='about_icon'/>
                <h5>Hackathons</h5>
                <small>3+ Worlwide</small>
              </article>
              <article className="about_card">
                <AiOutlineProject className='about_icon'/>
                <h5>Project</h5>
                <small>10+ projects completed</small>
              </article>
            </div>
            <p>
            I am a 2nd year undergraduate student at a IIIT university with a passion for
learning and exploring the world of technology. I am eager to gain
experience in the technology industry and am excited to contribute to any
team I am a part of. 
            </p>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About