import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import { FiUsers} from 'react-icons/fi'
import { VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id="about">
      <h5 style={{textAlign:'center'}}>Get To Know</h5>
      <h2 style={{marginBottom:'3rem'}}>About Me</h2>
      <div className='container about-container'>
<div className='about-me'>
<div className='about-me-image'>
  <img src={ME} alt='About Image' style={{width:'100%'}}></img>
</div>
</div>
<div className='about-content'> 
<div className='about-cards'>
  <article className='about-card'>
    <FaAward className='about-icon'/>
<h5> Experience</h5>
<small> 2+ Years Working</small>
  </article>
  <article className='about-card'>
    <FiUsers className='about-icon'/>
<h5> Clients</h5>
<small> 200+ Worldwide</small>
  </article>
  <article className='about-card'>
    <VscFolderLibrary className='about-icon'/>
<h5> Projects</h5>
<small> 2+ Completed</small>
  </article>
</div>
<p>
A challenging position in a reputed organization which will cater to the active utilization of my acquired skills, abilities and knowledge, thereby working towards the betterment of the organization and to grow as an individual.
</p>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>
</div>
      </div>
      
    </section>
  )
}

