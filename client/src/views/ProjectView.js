import React from 'react';
import axios from 'axios';
import { Project } from '../components';

class ProjectView extends React.Component {
  constructor(){
    super();
    this.state = {
      project: [],
      projectId: null,
      fetchingProject: true,
    }
  }
  getProject = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/projects/${id}`)
      .then(response => {
        this.setState({
          project: response.data,
          fetchingProject: false,
        })
      })
      .catch(err => console.log(err));
  }
  componentDidMount(){
    this.getProject();
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.id !== prevProps.match.params.id){
      this.getProject();
    }
  }

  updateProject = (id, updatedProject) => {
    axios
      .put(`/projects/${id}`, updatedProject)
      .then(response => {
        this.setState({
          project: response.data,
        })
      })
      .catch(err => console.log(err))
      this.props.updateList(updatedProject);
  }

  addAction = newAction => {
    axios
      .post(`/actions`, newAction)
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
      .put(`/actions/${id}`, updatedAction)
      .then(response => {
        let updatedActions = this.state.project.actions.map(action => {
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
      .delete(`/actions/${id}`)
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
      return (<div className='loading'><h3>Getting project...</h3></div>)
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
