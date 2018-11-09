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

  render(){
    if (this.state.fetchingProject){
      return (<h2>Getting project...</h2>)
    }
    return (
      <Project project={this.state.project} />
    )
  }
}

export default ProjectView;
