import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Contact from './components/pages/contact/Contact'
import Home from './components/pages/home/Home'
// import Projects from './components/pages/projects/Projects'
// import Reviews from './components/pages/reviews/Reviews'
// import Services from './components/pages/services/Services'
// import { Navbar } from 'reactstrap'
import AllProjects from './components/pages/AllProjects/AllProjects'
// import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <>

    {/* <Navbar />
    <Home />
    <Services />
    <Projects />
    <Reviews />
    <Contact /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="#services" element={<Services />}/> */}
          {/* <Route path="#projects" element={<Projects />}/> */}
          <Route path="/all-projects" element={<AllProjects />}/>
          {/* <Route path="#reviews" element={<Reviews />}/> */}
          {/* <Route path="#contact" element={<Contact />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App