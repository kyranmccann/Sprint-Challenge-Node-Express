import React from 'react';
import FeatherIcon from 'feather-icons-react';

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
  close(){
    if (this.props.action){
      this.props.doneEditing();
    } else {
      this.props.toggleHelper();
    }

  }
  render(){
    let classes = 'action-form ';
    if(this.props.action){
      classes += 'editing'
    }
    return (
      <div className={classes}>
        <form onSubmit={this.handleSubmit}>
          <FeatherIcon className='icon-button close-button' onClick={() => {this.close()}}icon='x' size='20'/>
          <h3>{this.props.action ? 'Edit Action' : 'Add an Action'}</h3>
          <input
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.handleInput}
            placeholder='action description'
          />
        <textarea
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
      </div>
    )
  }
}

export default ActionForm;
