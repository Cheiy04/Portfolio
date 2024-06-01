import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu from '../../assets/menu.svg'
import close_icon from '../../assets/close_icon.svg'


const Navbar = () => {

  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu} alt='' className='nav-mobile-open' onClick={openMenu}/>
        <ul ref={menuRef} className="nav-menu">
          <img src={close_icon} alt="" className="nav-mobile-close" onClick={closeMenu} />
            <li className="anchor" ><AnchorLink className='anchor-link' offset={50} href='#hero'>Home</AnchorLink> </li>
            <li className="anchor"><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></li>
            <li className="anchor"><AnchorLink className='anchor-link' offset={50} href='#services'>Services</AnchorLink></li>
            <li className="anchor"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink></li>
            
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>

    </div>
  )
}

export default Navbar