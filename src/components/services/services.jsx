import React from 'react'
import './services.css'
import {AiOutlineCheckSquare} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Devlopment</h3>
          </div>
          <ul className="service_list">
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Full-stack development.</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>E-commerce development.</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>CMS website development.</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Static web service.</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Python development.</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>PHP development.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>User stories</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>User flow charts, diagrams.</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Wireframes.</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Content strategy.</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Information architecture.</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Brand system development.</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Design technology consulting.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Canva</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Copywriting</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Product development</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>Grammarly</p>
            </li>
            <li>
            <AiOutlineCheckSquare className='service_list-icon'/>
            <p>YouTube</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services