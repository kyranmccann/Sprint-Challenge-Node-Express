import React from 'react';
import axios from 'axios';
import { ProjectList } from '../components'


class ProjectListView extends React.Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      fetchingProjects: true,
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:9000/projects')
      .then(response => {
        this.setState({
        projects: response.data,
        fetchingProjects: false,
      })
    })
  }

  render(){
    if (this.state.fetchingProjects) {
      return (
        <h3>Working on it...</h3>
      )
    }
    return (
      <ProjectList projects={this.state.projects}/>
    )
  }
}
export default ProjectListView;
