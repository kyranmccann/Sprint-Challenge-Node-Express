import React from 'react';
import axios from 'axios';
import { ProjectList } from '../components';
import { Link } from 'react-router-dom';


class ProjectListView extends React.Component {


  render(){
    if (this.props.fetchingProjects) {
      return (
        <h3>Working on it...</h3>
      )
    }
    return (
      <div className='project-list-sidebar'>
      <Link to='/add'>
      <div className='button add-button'>
      Add Project
      </div>
      </Link>
      <ProjectList projects={this.props.projects}/>
      </div>
    )
  }
}
export default ProjectListView;
