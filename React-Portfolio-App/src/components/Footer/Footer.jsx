import React from 'react'
import './Footer.css'
import profile_img from '../../assets/profile_img.svg'
import logo from '../../assets/logo.webp'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>I'm a junior front-end developer</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={profile_img} alt="" />
                    <input type="email" placeholder='Enter your Email' />
                </div>
                <div className="subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Adrian Chege. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>

        </div>
        
    </div>
  )
}

export default Footer