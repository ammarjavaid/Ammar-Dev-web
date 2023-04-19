import React, { useEffect, useState } from 'react'
import "./allProjects.scss"
import { HiArrowLeft } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader"
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../Firebase';
import ProjectCard from './ProjectCard';

const AllProjects = () => {

  const [loading, setLoading] = useState(false)
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const getCollectionRef = collection(db, "AddProjects");

  useEffect(() => {

    const unsubscribe = onSnapshot(getCollectionRef, snapshot => (
      setMyProjects(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ))
    return () => {
      unsubscribe();
    }
  }, []);


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

                {
                    myProjects.map((curElm) => {
                      return (
                        <>
                          <ProjectCard title={curElm.title} imageLink={curElm.imageLink} videoLink={curElm.videoLink} description={curElm.description} id={curElm.id} />
                        </>
                      )
                    })
                }
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

