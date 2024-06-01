import React from 'react'
import './Services.css'
import data from '../../assets/Services_data/'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src="" alt="" />
        </div>
        <div className="service-container">
            {data.map((service, index)=>{
                return <div key={index} className="service-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services