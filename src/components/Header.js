import React from 'react'
import Logo from '../assets/logo.png'
import './Header.css'
const Header = () => {
  return (
   <header className='addtask'>
    <img src={Logo} alt="" />
    <h1 className='taskmate'>TASKMATE</h1>
    <a href="/">Home</a>
   </header>
  )
}

export default Header
