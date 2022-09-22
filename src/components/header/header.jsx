import React from 'react'
import './header.css'
import {Cta } from './cta'
import ME from '../../assets/me.png'
import {Social} from './social'
export const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>
          Hello I'm
        </h5>
        <h1>Shankar</h1>
         <h5 className="text-light">
          Software Engineer
           </h5>
           <Cta />
           <Social />
           <div className="me">
             <img src={ME} alt='me' style={{width:'100%'}}/>
             </div>
             <a href='#contact' className='scroll-down'>Scroll Down</a>
        </div>
      </header>
  )
}
