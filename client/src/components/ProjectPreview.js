import React from 'react';

const ProjectPreview = props => {
  return (
    <div className='project-preview'>
    <p>{props.project.name}</p>
    </div>
  )
}

export default ProjectPreview;
