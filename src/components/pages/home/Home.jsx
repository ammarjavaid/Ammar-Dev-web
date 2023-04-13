import React, { useEffect } from 'react'
import "./home.scss"
import logo from "../../images/logo.png"
import Services from '../services/Services'
import Projects from '../projects/Projects'
import Reviews from '../reviews/Reviews'
import Contact from '../contact/Contact'
import Navbar from "../../navbar/Navbar"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {


  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
        <Navbar />
        <div className='main'>
          <div className='main__content'>
            <img src={logo} alt="" data-aos="fade-up" data-aos-duration='1200'/>
            <h3 data-aos="fade-up" data-aos-duration='1200'> <span> AMMAR </span> JAVAID DEV. </h3>
            <p data-aos="fade-up" data-aos-duration='1500'>
            I am a Creative Developer with a 2-year background in building and implementing functional, Web applications. Excellent problem-solving skills with a keen eye for detail.Outstanding knowledge of coding languages React.js & Node Express.
            </p>
          </div>
        </div>

        <Services />
        <Projects />
        <Reviews />
        <Contact />
    </>
  )
}

export default Home