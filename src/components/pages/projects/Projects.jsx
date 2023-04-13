import React, { useEffect } from 'react'
import "./projects.scss"
import cars from "../../images/cars.png"
import corona from "../../images/corona.png"
import gym from "../../images/gym.png"
import netflix from "../../images/netflix.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className='main__projects' id='projects'>
        <h3 data-aos="fade-up" data-aos-duration='300'> Projects. </h3>
        <div className='content' data-aos="fade-up" data-aos-duration='500'>
          <div className='one'>
            <img src={cars} alt='' />
            <a href="https://ammar-dashboard.netlify.app/" target='_blank'><span>Check Details</span></a>
          </div>
          <div className='one'>
            <img src={corona} alt='' />
            <a href="https://corona-dashboard-06.netlify.app/" target='_blank'><span>Check Details</span></a>
          </div>
          <div className='one'>
            <img src={gym} alt='' />
            <a href="https://fit-club-02.netlify.app/" target='_blank'><span>Check Details</span></a>
          </div>
          <div className='one'>
            <img src={netflix} alt='' />
            <a href="https://streamo-netflix-01.netlify.app/" target='_blank'><span>Check Details</span></a>
          </div>
        </div>
        <div className='bottom__btn' data-aos="fade-up" data-aos-duration='300'>
          <Link to="/all-projects" className='different'> <button> Check More </button> </Link>
        </div>
      </div>
    </>
  )
}

export default Projects