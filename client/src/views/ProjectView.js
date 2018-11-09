import React from 'react';
import axios from 'axios';
import { Project } from '../components';

class ProjectView extends React.Component {
  constructor(){
    super();
    this.state = {
      project: [],
      fetchingProject: true,
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:9000/projects/${id}`)
      .then(response => {
        this.setState({
          project: response.data,
          fetchingProject: false,
        })
      })
      .catch(err => console.log(err));
  }

  updateProject = (id, updatedProject) => {
    axios
      .put(`http://localhost:9000/projects/${id}`, updatedProject)
      .then(response => {
        this.setState({
          project: response.data,
        })
      })
      .catch(err => console.log(err))
  }

  addAction = newAction => {
    axios
      .post(`http://localhost:9000/actions`, newAction)
      .then(response => {
        const newActions = [...this.state.project.actions, response.data];
        this.setState({
          project: {...this.state.project, actions: newActions}
        });
      })
      .catch(err => console.log(err));
  }

  editAction = (id, updatedAction) => {
     axios
      .put(`http://localhost:9000/actions/${id}`, updatedAction)
      .then(response => {
        let updatedActions = this.state.actions.map(action => {
          if (action.id === id) {
            action = response.data
          }
          return action;
        })
        this.setState({
          project: {...this.state.project, actions: updatedActions}
        });
      })
      .catch(err => console.log(err))
  }

  deleteAction = id => {
    axios
      .delete(`http://localhost:9000/actions/${id}`)
      .then(response => {
        let deletedActionList = this.state.project.actions.filter(action => action.id !== id);
        this.setState({
          project: {...this.state.project, actions: deletedActionList}
        });
      })
      .catch(err => console.log(err))
  }
  render(){
    if (this.state.fetchingProject){
      return (<h2>Getting project...</h2>)
    }
    return (
      <Project project={this.state.project} submit={this.updateProject} history={this.props.history}
      delete={this.props.deleteProject}
      addAction={this.addAction}
      deleteAction={this.deleteAction}
      editAction={this.editAction}/>
    )
  }
}

export default ProjectView;
