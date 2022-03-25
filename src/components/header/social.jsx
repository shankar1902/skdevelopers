import React from 'react'
import { BsLinkedin,BsGithub } from 'react-icons/bs'
export const Social = () => {
  return (
    <div className='header-socials'>
        <a href='https://linkedin.com'target='_blank'><BsLinkedin /></a>
        <a href='https://github.com'target='_blank'><BsGithub /></a>
        </div>
  )
}