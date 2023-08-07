import React from 'react'
import Navbar from "../components/Navbar.js"
import ProjectHero from '../components/ProjectHero.js'
import Footer from "../components/Footer.js"
const ProjectPage = () => {
  return (
    <div className='my-projects'>
      <Navbar/>
      <ProjectHero/>
      <Footer/>
    </div>
  )
}

export default ProjectPage
