import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {

  const [showNav, setShowNav] = useState(false)

  const openNav = () => {
    setShowNav(true)
  };

  const closeNav = () => {
    setShowNav(false)
  }

  return (
    <>
      <div className='navbar'>
        <div id="mySidenav" className={showNav === false ? 'closenav' : 'opennav'}>
          {/* <a className="closebtn" onClick={closeNav}>&times;</a> */}
          <button className='closebtn' onClick={closeNav}>&times;</button>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#contact">Contact</a>
          <small>&copy; Arauka. All rights reserved</small>
        </div>
        <span className='togglemenu' onClick={openNav}>&#9776;</span>
      </div>
    </>
  )
}

export default Navbar