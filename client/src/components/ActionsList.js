import React from 'react';
import Action from './Action';
import ActionForm from './ActionForm';

class ActionsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isAdding: false,
      isEditing: false,
    }
  }

  toggleEdit = prevState => {
    this.setState({
      isEditing: !prevState.isEditing
    })
  }

  toggleAdd = prevState => {
    this.setState({
      isAdding: !prevState.isAdding
    })
  }

  doneAdding = () => {
    this.setState({
      isAdding: false,
    })
  }

  doneEditing = () => {
    this.setState({
      isEditing: false,
    })
  }

  render(){
  return(
    <div className='actions-list'>
    <h5>Project Actions</h5>

    {this.props.actions.map(action => {
      return <Action key={action.id} action={action} editAction={this.props.editAction}
      deleteAction={this.props.deleteAction}/>
    })}
    <div onClick={this.toggleAdd} className='icon-button add-button'>
    Add Action
    </div>
    {this.state.isAdding && <ActionForm submit={this.props.addAction} id={this.props.projectId} toggleHelper={this.doneAdding}/>}
    </div>
  )}
}

export default ActionsList;
