
import React from 'react'
import './portfolio.css'

export const Portfolio = () => {
  const portfolioData =[{
    image:'https://www.greenstarlandscaping.com.au/static/media/main%20image2.eeee722f5e838102badd.jpg',
    title:' This is a Portfolio Item Title',
    githublink:'https://github.com',
    demoLink:'https://www.greenstarlandscaping.com.au/'
  },
  {
    image:'https://www.greenstarlandscaping.com.au/static/media/main%20image2.eeee722f5e838102badd.jpg',
    title:' This is a Portfolio Item Title',
    githublink:'https://github.com',
    demoLink:'https://www.greenstarlandscaping.com.au/'
  },
  {
    image:'https://www.greenstarlandscaping.com.au/static/media/main%20image2.eeee722f5e838102badd.jpg',
    title:' This is a Portfolio Item Title',
    githublink:'https://github.com',
    demoLink:'https://www.greenstarlandscaping.com.au/'
  },
  {
    image:'https://www.greenstarlandscaping.com.au/static/media/main%20image2.eeee722f5e838102badd.jpg',
    title:' This is a Portfolio Item Title',
    githublink:'https://github.com',
    demoLink:'https://www.greenstarlandscaping.com.au/'
  },
  {
    image:'https://www.greenstarlandscaping.com.au/static/media/main%20image2.eeee722f5e838102badd.jpg',
    title:' This is a Portfolio Item Title',
    githublink:'https://github.com',
    demoLink:'https://www.greenstarlandscaping.com.au/'
  }]
  return (
    <section id="portfolio">
      <h5 style={{textAlign:'center'}}>My Recent Projects</h5>
      <h2>Portfolio</h2>
<div className='container portfolio__container'>
{portfolioData.map((portfolio,index) => (
  <article className='porfolio__item'>
    <div className='porfolio__item-image'>
    <img src={portfolio?.image} alt='About Image' style={{width:'100%'}}></img>
    </div>
    <h3> {portfolio?.title}</h3>
    <div className='porfolio__item-cta'>
    <a href={portfolio?.githublink} className='btn' target='_blank'>GitHub</a>
    <a href={portfolio?.demoLink} className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
  </article>
)
)
}
</div>
    </section>
  )
}