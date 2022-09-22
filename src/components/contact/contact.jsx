import React from 'react'
import './contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import { MdOutlineMail } from 'react-icons/md'
export const Contact = () => {
  return (
    <section id="contact">
       <h5 style={{textAlign:'center'}}>Get In Touch</h5>
      <h2>Contact Me</h2>
<div className='container contact__container'>
<div className='contact__options'>
  <article className='contact__option'>
<MdOutlineMail className='contact__option-icon'/>
<h4>Email</h4>
    <h5>shankar19021998@gmail.com</h5>
    <a href='mailto:shankar19021998@gmail.com' target="_blank" rel="noreferrer"> Send a Message</a>
  </article>
  <article className='contact__option'>
<RiMessengerLine className='contact__option-icon'/>
<h4>Messenger</h4>
    <h5>Shankar</h5>
    <a href='https://m.me/profile.php?id=100086283573128' target="_blank" rel="noreferrer"> Send a Message</a>
  </article>
  <article className='contact__option'>
<BsWhatsapp className='contact__option-icon'/>
<h4>Whatsapp</h4>
    <h5>9363534371</h5>
    <a href='https://api.whatsapp.com/send?phone=9715564204' target="_blank" rel="noreferrer"> Send a Message</a>
  </article>
  </div>
  </div>
    </section>
  )
}
