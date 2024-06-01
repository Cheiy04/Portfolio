import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
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