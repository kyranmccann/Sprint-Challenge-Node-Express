import React from 'react';
import FeatherIcon from 'feather-icons-react';

class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: null,
      name: '',
      description: '',
    }
  }

  componentDidMount() {
    if (this.props.project) {
      this.setState({
        id: this.props.project.id,
        name: this.props.project.name,
        description: this.props.project.description,
      })
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.project){
      const updatedProject = {
        ...this.state
      }
      this.props.submit(this.state.id, updatedProject);
      this.props.doneEditing();
    } else {
      const newProject = {
        name: this.state.name,
        description: this.state.description,
      }
      this.props.submit(newProject);
      this.props.history.push('/');
    }
  }

  close = () => {
    if (this.props.project){
      this.props.doneEditing();
    } else {
      this.props.history.goBack();
    }
  }

  render(){
    return (
      <div className='project-form'>
      <form onSubmit={this.handleSubmit}>
        <FeatherIcon className='icon-button close-button' onClick={() => {this.close()}}icon='x' size='20'/>
        <h2>{this.props.project ? 'Edit Project' : 'Add a Project'}</h2>
        <input
          type='text'
          name='name'
          maxLength='128'
          value={this.state.name}
          onChange={this.handleInput}
          placeholder='project name'
        />
      <textarea
          type='textarea'
          name='description'
          value={this.state.description}
          onChange={this.handleInput}
          placeholder='project description'
        />
        <button type='submit'>
          {!this.props.project ? 'Add Project' : 'Save Changes'}
        </button>
      </form>
      </div>
    )
  }
}

export default ProjectForm;
