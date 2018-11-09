import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { ProjectListView, ProjectView } from './views';
import { Welcome, ProjectForm } from './components';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      fetchingProjects: true,
    }
  }
  componentDidMount() {
    axios
      .get('/projects')
      .then(response => {
        this.setState({
        projects: response.data,
        fetchingProjects: false,
      })
    })
  }

  addNewProject = newProject => {
    axios
      .post('/projects', newProject)
      .then(response => {
        this.setState({
          projects: [...this.state.projects, response.data]
        })
      })
      .catch(err => console.log(err))
  }

  deleteProject = id => {
    axios
      .delete(`/projects/${id}`)
      .then(response => {
        let deleteList = this.state.projects.filter(project => project.id !== id);
        this.setState({
          projects: deleteList,
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={(props) => <ProjectListView {...props} projects={this.state.projects}/>}/>
        <Route exact path='/' component={Welcome} />
        <Switch>
          <Route path='/add' render={(props) => <ProjectForm {...props} submit={this.addNewProject}/>} />
          <Route path='/:id' render={(props) => <ProjectView {...props} deleteProject={this.deleteProject}/> }/>
        </Switch>

      </div>
    );
  }
}

export default App;
