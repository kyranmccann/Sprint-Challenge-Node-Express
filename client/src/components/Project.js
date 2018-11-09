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

  deleteHelper = () => {
    this.props.delete(this.props.project.id);
    this.props.history.push('/');
  }

  render(){
    return (
      <div className='project'>
      <div className='buttons'>
      <div className='icon-button delete-button' onClick={this.deleteHelper}>
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
      {this.props.project.actions && <ActionsList
        addAction={this.props.addAction}
        deleteAction={this.props.deleteAction}
        editAction={this.props.editAction} actions={this.props.project.actions}
        projectId={this.props.project.id}/>}
      </div>
    )
  }

}

export default Project;
