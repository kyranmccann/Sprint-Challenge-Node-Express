import React from 'react';
import ProjectPreview from './ProjectPreview';
import { Link } from 'react-router-dom';

const ProjectList = props => {
  return (
    <div className='project-list'>
    <h1>ProjectList</h1>
    {props.projects.map(project => {
      return (
        <Link to={`/${project.id}`} key={project.id}>
      <ProjectPreview key={project.id} project={project} />
      </Link>)
    })}
    </div>
  )
}

export default ProjectList;
