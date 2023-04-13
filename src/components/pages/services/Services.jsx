import React, { useEffect } from 'react'
import ui from "../../images/ui.png"
import ios from "../../images/ios.png"
import web from "../../images/web.png"
import "./services.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
        <div className='main__services' id='services'>
          <h3> Services. </h3>
          <div className='content'>
            <div className='one' data-aos="fade-up" data-aos-duration='400'>
              <img src={ui} alt='' />
              <h4> UI / UX </h4>
              <a href="https://www.fiverr.com/ammarchaudha967?up_rollout=true" target='_blank' className='different'>
                <button> Get it now ! </button>
              </a>
            </div>
            <div className='one' data-aos="fade-up" data-aos-duration='700'>
              <img src={ios} alt='' />
              <h4> Web Design </h4>
              <a href="https://www.fiverr.com/ammarchaudha967?up_rollout=true" target='_blank' className='different'>
                <button> Get it now ! </button>
              </a>
            </div>
            <div className='one' data-aos="fade-up" data-aos-duration='1000'>
              <img src={web} alt='' />
              <h4> Web Development </h4>
              <a href="https://www.fiverr.com/ammarchaudha967?up_rollout=true" target='_blank' className='different'>
                <button> Get it now ! </button>
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Services