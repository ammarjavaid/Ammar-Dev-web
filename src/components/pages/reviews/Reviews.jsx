import React, { useEffect } from 'react'
import "./reviews.scss"
import man from "../../images/man.png"
import CV from "../../images/Ammar Javaid.pdf"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className='about' id='about'>
        <div className='container flex'>
          <div className='left' data-aos="fade-up" data-aos-duration='300'>
            <img src={man} alt="img" />
          </div>
          <div className='right' data-aos="fade-up" data-aos-duration='500'>
            <h2>About me </h2>
            <p>
              As a recent graduate with a degree in computer science, I am excited to
              bring my knowledge and skills to a position as a web developer. I have
              experience in HTML, SASS, React.JS Node.JS, Express.JS and JavaScript
              through my coursework and personal projects, and I am eager to
              continue to learn and grow in this field. I am a quick learner, a strong
              collaborator, and am passionate about creating visually appealing and
              user-friendly websites that deliver results.
            </p>
            <a href={CV} download className='primaryBtn'> Download CV </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews