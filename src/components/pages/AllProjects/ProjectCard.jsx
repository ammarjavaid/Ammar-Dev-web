import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, imageLink, videoLink }) => {
    return (
        <>
            <div className='one'>
                <img src={imageLink} alt='' />
                <Link to={videoLink} target='_blank'><span> {title} </span></Link>
            </div>
        </>
    )
}

export default ProjectCard