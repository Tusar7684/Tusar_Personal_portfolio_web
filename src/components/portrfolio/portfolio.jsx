import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <div id='portfolio'>
      <h5 className='new'>My Recent Work</h5>
      <h2 className='hide'>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>CanDetect App for Cancer Detection</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Tusar7684/GFG-REPO" className='btn'>Github</a>
          <a href="https://tusar7684.github.io/GFG-REPO/" className='btn btn-primary'>Live demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Unified Crop Insurance Interface</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Tusar7684/SOH-2022-Team-Angry-Nerds-1" className='btn'>Github</a>
          <a href="https://tusar7684.github.io/SOH-2022-Team-Angry-Nerds-1/" className='btn btn-primary'>Live demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Gym Website With Frontend Only</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Tusar7684/GYM_WEBSITE_WITH_CSS-ONLY" className='btn'>Github</a>
          <a href="https://tusar7684.github.io/GYM_WEBSITE_WITH_CSS-ONLY/" className='btn btn-primary'>Live demo</a>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Portfolio