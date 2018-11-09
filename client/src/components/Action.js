import React from 'react';
import ActionForm from './ActionForm';


class Action extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
    }
  }


  deleteHelper = () => {
    this.props.deleteAction(this.props.action.id);
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
      <div className='action' >
        <div className='icon-buttons'>
          <div onClick={() => {this.deleteHelper()}} className='button delete-button'>
            Delete Action
          </div>
          <div onClick={this.toggleEdit}className='button edit-button'>
            Edit Action
          </div>
        </div>
        <p>{this.props.action.description}</p>
        <small>{this.props.action.notes}</small>
        {this.state.isEditing && <ActionForm action={this.props.action} submit={this.props.editAction} doneEditing={this.doneEditing}/>}
      </div>

    )}
}
export default Action;
