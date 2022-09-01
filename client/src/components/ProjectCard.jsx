import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div>
    <p>{project.id} </p> 
    <p>{project.name}</p>
    <p>{project.status}</p>
    </div>
  )
}

export default ProjectCard
