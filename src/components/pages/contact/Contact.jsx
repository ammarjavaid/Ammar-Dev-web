import React, { useEffect } from 'react'
import "./contact.scss"
import { BsWhatsapp, BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className='contact__section' id='contact'>
        <h3 data-aos="fade-up" data-aos-duration='100'> Contact </h3>
        <div className='main'>
          <ul>
            <li className='different' data-aos="fade-up" data-aos-duration='300'>
              <a href='https://api.whatsapp.com/send/?phone=%2B923020662962&text&type=phone_number&app_absent=0' target='_blank'>  <BsWhatsapp />  </a>
            </li>
            <li className='different' data-aos="fade-up" data-aos-duration='700'>
              <a href='https://www.linkedin.com/in/ammar-javaid-241279258/' target='_blank'> <BsLinkedin /> </a>
            </li>
            <li className='different' data-aos="fade-up" data-aos-duration='1200'>
              <a href='https://github.com/ammarjavaid' target='_blank'> <BsGithub /> </a>
            </li>
            <li className='different' data-aos="fade-up" data-aos-duration='1600'>
              <a href='https://www.facebook.com/amaar.chaudhary.10' target='_blank'> <BsFacebook /> </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact






// <div className='item different'>
// <Link to="">
//   <h2> <BsWhatsapp /> </h2>
// </Link>
// </div>
// <div className='item different'>
// <Link to="">
//   <h2> <BsLinkedin /> </h2>
// </Link>
// </div>
// <div className='item different'>
// <Link to="">
//   <h2> <BsGithub /> </h2>
// </Link>
// </div>
// <div className='item different'>
// <Link to="">
//   <h2> <BsFacebook /> </h2>
// </Link>
// </div>