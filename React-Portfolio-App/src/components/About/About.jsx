import React from 'react'
import './About.css'
import profile_image from '../../assets/profile_image.svg'
import html_logo from '../../assets/html_logo.svg'
import css3_logo from '../../assets/css3_logo.svg'
import javascript_logo from '../../assets/javascript_logo.svg'
import react_logo from '../../assets/react_logo.svg'
import python_logo from '../../assets/python_logo.svg'
import bootstrap_logo from '../../assets/bootstrap_logo.svg'
import about_img from '../../assets/about_img.svg'
import certification from '../../assets/certification.png'
import recipe_foto from '../../assets/recipe_foto.png'
import user_img from '../../assets/user_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={about_img} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
            <img src={user_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a junior web developer who is upscaling his skill set and creating exciting Web Applications for users.</p>
                    <p>My passion for creating adaptive and innovative web applications drives me. I have a vast knowledge of popular technologies and frameworks.</p>
                    <h6>My Skills:</h6>
                </div>
                <div className="skills">
                    <div className="about-skills"><p>HTML</p> <img src={html_logo} alt="" /></div>
                    <div className="about-skills"><p>CSS</p> <img src={css3_logo} alt="" /></div>
                    <div className="about-skills"><p>JavaScript</p> <img src={javascript_logo} alt="" /></div>
                    <div className="about-skills"><p>React JS</p> <img src={react_logo} alt="" /></div>
                    <div className="about-skills"><p>Python</p> <img src={python_logo} alt="" /></div>
                    <div className="about-skills"><p>Bootstrap</p> <img src={bootstrap_logo} alt="" /></div>
                </div>
                
            </div>
        </div>
        <div className="about-acheivements">
            <div className="acheivement_1">
                <h2>Certifications</h2>
                <p>Completion of the ALX Africa Software Engineering Programme.</p>
                <img src={certification} alt="" />
            </div>
            
            <div className="acheivement_2">
                <h2>Projects</h2>
                <p>Completed a couple of web applications including a Recipe-finder Application. More projects can be found on my <a href="https://github.com/Cheiy04">GitHub</a></p>
                <img src={recipe_foto} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About