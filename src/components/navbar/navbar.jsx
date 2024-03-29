import React, { useState } from 'react'
import './navbar.css'
import { AiOutlineHome,AiOutlineUser } from 'react-icons/ai'
import {BiBook , BiMessageSquareDetail} from'react-icons/bi'
import {RiServiceLine} from'react-icons/ri'
export const Navbar = () => {
  const [aciveNav,setActiveNav]= useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}className={aciveNav === '#' ? 'active':''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={aciveNav === '#about' ? 'active':''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={aciveNav === '#experience' ? 'active':''}><BiBook /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={aciveNav === '#portfolio' ? 'active':''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={aciveNav === '#contact' ? 'active':''}><BiMessageSquareDetail /></a>
    </nav>
  )
}