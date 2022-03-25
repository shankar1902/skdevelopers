import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
export const Experience = () => {
  return (
    <section id="experience">
      <h5 style={{textAlign:'center'}}>What Skills I Have</h5>
      <h2 style={{marginBottom:'3rem'}}>My Experience</h2>
      <div className='container experience-container'>
        <div className='experience-frontend'>
          <h3>Frontend Development</h3>
          <div className='experience-content'>
            <article className='experience-details'>
            <BsPatchCheckFill  className='experience-details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
</div>
            </article>
            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
</div>
            </article>
            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
</div>
            </article>
            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
              <h4>Typescript</h4>
              <small className='text-light'>Intermediate</small>
</div>
            </article>
            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
              <h4>Angular</h4>
              <small className='text-light'>Intermediate</small>
</div>
            </article>
            
          </div>
        </div>
        <div className='experience-frontend'>
          <h3>Frontend Development</h3>
          <div className='experience-content'>
           
            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
</div>
            </article>
            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
              <h4>Angular Material</h4>
              <small className='text-light'>Intermediate</small>
</div>
            </article>
            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
            <h4>React Material</h4>
              <small className='text-light'>Intermediate</small>
            </div>            
            </article>
            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
              <h4>Bootstrap </h4>
              <small className='text-light'>Intermediate</small>
</div>
            </article>
            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
              <h4>Node js </h4>
              <small className='text-light'>Beginner</small>
</div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
