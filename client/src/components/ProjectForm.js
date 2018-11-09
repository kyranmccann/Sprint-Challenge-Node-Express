import React from 'react';

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
      this.props.submit(this.state.id, updatedProject)
    }
    console.log('adding in form')
    const newProject = {
      name: this.state.name,
      description: this.state.description,
    }
    this.props.submit(newProject);
    this.props.history.push('/'); 
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleInput}
          placeholder='project name'
        />
        <input
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
    )
  }
}

export default ProjectForm;
