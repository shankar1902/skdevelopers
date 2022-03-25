import React from 'react'
import CTA from '../../assets/cta.pdf'
export const Cta = () => {
  return (
    <div className='cta'>
         <a href={CTA} download className='btn'>Download CV</a>
         <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
