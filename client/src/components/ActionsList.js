import React from 'react';
import Action from './Action'; 

const ActionsList = props => {
  return(
    <div className='actions-list'>
    <h5>Project Actions</h5>
    {props.actions.map(action => {
      return <Action key={action.id} action={action} />
    })}
    </div>
  )
}

export default ActionsList;
