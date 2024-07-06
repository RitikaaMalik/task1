import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
const data=[
  {
    id:1,
    image:IMG1,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18056643-Crypto-Dashboard'
  },
  {
    id:2,
    image:IMG2,
    title:'Ofinans Digital Finance Dashboard UI Concept',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/19952292-Ofinans-Digital-Finance-Dashboard-UI-Concept'
  },
  {
    id:3,
    image:IMG3,
    title:'Sales Analytics Dashboard',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/19326018-Sales-Analytics-Dashboard'
  },
  {
    id:4,
    image:IMG4,
    title:'Admin Dashboard Analytics UI',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/21335569-Admin-Dashboard-Analytics-UI'
  },
  {
    id:5,
    image:IMG5,
    title:'Maintaining-tasks-and-tracking-progress',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id:6,
    image:IMG6,
    title:'Audacity App UI Fragments',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/21027652-Audacity-app-UI-fragments'
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>
          {
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
               <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
           </article>
            )
          })
        }
       
        </div>
    </section>
  )
}

export default Portfolio
