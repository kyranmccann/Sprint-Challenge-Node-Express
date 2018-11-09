import React from 'react';

class ActionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: null,
      project_id: null,
      notes: '',
      description: '',
    }
  }

  componentDidMount() {
    if (this.props.action) {
      this.setState({
        id: this.props.action.id,
        project_id: this.props.action.project_id,
        notes: this.props.action.notes,
        description: this.props.action.description,
      })
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          value={this.state.description}
          onChange={this.handleInput}
          placeholder='project name'
        />
        <input
          type='textarea'
          name='description'
          value={this.state.notes}
          onChange={this.handleInput}
          placeholder='project description'
        />
        <button type='submit'>
          {this.props.project ? 'Add Action' : 'Save Changes'}
        </button>
      </form>
    )
  }
}

export default ActionForm;
