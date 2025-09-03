import React from 'react'
import './Contact.css'
import contact_img from '../../assets/contact_img.svg'
import linkedin_img from '../../assets/linkedin_img.svg'
import email_img from '../../assets/email_img.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b54b52bf-7327-40e3-b15f-3637aa61764e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Email has been successfuly sent to Adrian")
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
          
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to work on new projects and collaborate on existing ones. Feel free to reach out. Open for new projects</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email_img} alt="" /> <p>achege116@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={contact_img} alt="" /> <p>+ 49 15560665498</p>

                    </div>
                    <div className="contact-detail">
                        <img src={linkedin_img} alt="" /> <a href="https://www.linkedin.com/in/adrian-chege-959235299/" target='_blank'>LinkedIn</a>

                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your Name' name='name' required/>
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your Email'name='email' required />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" id="" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit</button>
            </form>
        </div>

    </div>
  )
}

export default Contact