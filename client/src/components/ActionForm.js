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
    } else {
      this.setState({
        project_id: this.props.id,
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
    if (this.props.action){
      const updatedAction = {
        ...this.state
      }
      console.log('in action form', updatedAction)
      this.props.submit(this.state.id, updatedAction)
      this.props.doneEditing();
    }
    else {
      const newAction = {
        project_id: this.state.project_id,
        description: this.state.description,
        notes: this.state.notes,
      }
      this.props.submit(newAction);
      this.props.toggleHelper();
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='description'
          value={this.state.description}
          onChange={this.handleInput}
          placeholder='action description'
        />
        <input
          type='textarea'
          name='notes'
          value={this.state.notes}
          onChange={this.handleInput}
          placeholder='action notes'
        />
        <button type='submit'>
          {!this.props.action ? 'Add Action' : 'Save Changes'}
        </button>
      </form>
    )
  }
}

export default ActionForm;
