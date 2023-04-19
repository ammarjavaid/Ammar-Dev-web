import React, { useEffect, useState } from 'react'
import "./projects.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../Firebase';
import ProjectCard from '../AllProjects/ProjectCard';

const Projects = () => {

  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  const getCollectionRef = collection(db, "AddProjects");

  useEffect(() => {

    const unsubscribe = onSnapshot(getCollectionRef, snapshot => (
      setMyProjects(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ))
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <>
      <div className='main__projects' id='projects'>
        <h3 data-aos="fade-up" data-aos-duration='300'> Projects. </h3>
        <div className='content' data-aos="fade-up" data-aos-duration='500'>


          {
            myProjects.slice(0, 4).map((curElm) => {
              return (
                <>
                  <ProjectCard title={curElm.title} imageLink={curElm.imageLink} videoLink={curElm.videoLink} description={curElm.description} id={curElm.id} />
                </>
              )
            })
          }
        </div>
        <div className='bottom__btn' data-aos="fade-up" data-aos-duration='300'>
          <Link to="/all-projects" className='different'> <button> Check More </button> </Link>
        </div>
      </div>
    </>
  )
}

export default Projects