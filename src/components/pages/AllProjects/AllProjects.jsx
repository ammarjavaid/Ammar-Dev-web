import React, { useEffect, useState } from 'react'
import "./allProjects.scss"
import cars from "../../images/cars.png"
import corona from "../../images/corona.png"
import gym from "../../images/gym.png"
import netflix from "../../images/netflix.png"
import crypto from "../../images/crypto.png"
import hajia from "../../images/hajia.png"
import inbio from "../../images/inbio.png"
import nft from "../../images/nft.png"
import taxi from "../../images/taxi.png"
import portfolio from "../../images/portfolio.png"
import { HiArrowLeft } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader"

const AllProjects = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <div className='all__projects__main'>
        {
          loading ? (
            <>
              <div style={{ backgroundColor: "#000", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <HashLoader color="#fff" size={70} />
              </div>
            </>
          ) : (
            <>
              <div className='all__projects'>
                <h2><Link to="/"> <HiArrowLeft /> </Link></h2>
                <h4> PROJECTS. </h4>
                <div className='content' data-aos="fade-up" data-aos-duration='300'>
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
                  <div className='one'>
                    <img src={crypto} alt='' />
                    <a href="https://timely-dragon-f48502.netlify.app/" target='_blank'><span>Check Details</span></a>
                  </div>
                  <div className='one'>
                    <img src={hajia} alt='' />
                    <a href="https://hajia-ammar.netlify.app/" target='_blank'><span>Check Details</span></a>
                  </div>
                  <div className='one'>
                    <img src={inbio} alt='' />
                    <a href="https://inbio-02-ammar.netlify.app/" target='_blank'><span>Check Details</span></a>
                  </div>
                  <div className='one'>
                    <img src={nft} alt='' />
                    <a href="https://nft-page-ammar.netlify.app/" target='_blank'><span>Check Details</span></a>
                  </div>
                  <div className='one'>
                    <img src={taxi} alt='' />
                    <a href="https://texi-dashboard.netlify.app/" target='_blank'><span>Check Details</span></a>
                  </div>
                  <div className='one'>
                    <img src={portfolio} alt='' />
                    <a href="https://portfolio-application-03.netlify.app/" target='_blank'><span>Check Details</span></a>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default AllProjects

