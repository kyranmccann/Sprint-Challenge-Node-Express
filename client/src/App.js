import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ProjectListView, ProjectView } from './views';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ProjectListView}/>
        <Route path='/:id' render={(props) => <ProjectView {...props}v/> }/>
      </div>
    );
  }
}

export default App;
