import React from 'react';
import ActionsList from './ActionsList';

const Project = props => {
  console.log('the project is', props.project)
  return (
    <div className='project'>
    <div className='buttons'>
    <div className='icon-button delete-button'>
      Delete Project
    </div>
    <div className='icon-button edit-button'>
      Edit Project
    </div>
    </div>
    <h2>{props.project.name}</h2>
    <p>{props.project.description}</p>
    {props.project.actions && <ActionsList actions={props.project.actions}/>}
    </div>
  )
}

export default Project;