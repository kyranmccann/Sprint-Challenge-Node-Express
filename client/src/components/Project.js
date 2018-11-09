import React from 'react';
import ActionsList from './ActionsList';
import ProjectForm from './ProjectForm';

class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
    }
  }

  toggleEdit = prevState => {
    this.setState({
      isEditing: !prevState.isEditing,
    })
  }

  doneEditing = () => {
    this.setState({
      isEditing: false,
    })
  }

  render(){
    return (
      <div className='project'>
      <div className='buttons'>
      <div className='icon-button delete-button'>
        Delete Project
      </div>
      <div className='icon-button edit-button' onClick={this.toggleEdit}>
        Edit Project
      </div>
      </div>
      {this.state.isEditing && <ProjectForm submit={this.props.submit} project={this.props.project}
      doneEditing={this.doneEditing}
      />}
      <h2>{this.props.project.name}</h2>
      <p>{this.props.project.description}</p>
      {this.props.project.actions && <ActionsList actions={this.props.project.actions}/>}
      </div>
    )
  }

}

export default Project;
