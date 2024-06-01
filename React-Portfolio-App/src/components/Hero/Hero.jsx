import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_image.svg'
import user_img from '../../assets/user_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={user_img} alt="" />
        <h1><span>I'm Adrian Chege,</span> Web Developer...</h1>
        <p>
            I'm an aspiring fullstack developer with a penchant of turning code into creative user interfaces.
            I thrive on front-end, sprinkling HTML, CSS and JavaScript magic to create pixel-perfect designs.
            Whether it's responsive layouts, interactive animations, or seamless user flows, I'm all in! 🚀
        </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">Download Resume</div>
        </div>

    </div>
  )
}

export default Hero