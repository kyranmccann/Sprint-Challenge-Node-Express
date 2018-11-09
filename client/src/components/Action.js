import React from 'react';
import axios from 'axios'

const Action = props => {
  let classes = 'action ';
  if (props.action.completed) {
    classes += 'done';
  }
  const toggleComplete = () => {
    const updatedAction = {
      ...props.action,
      completed: !props.action.completed,
    }
    axios
      .put(`http://localhost:9000/actions/${props.action.id}`, updatedAction)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }
  return (
    <div className={classes} onClick={toggleComplete}>
      <p>{props.action.description}</p>
      <small>{props.action.notes}</small>
    </div>

  )
}
export default Action;
