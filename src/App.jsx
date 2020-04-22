import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import ProjectsContainer from './components/Containers/ProjectsContainer';
import ProjectBoardContainer from './components/Containers/ProjectBoardContainer';
import withAuth from './components/HOC/withAuth';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={ProjectsContainer} />
        <Route path="/projects/:id?" component={ProjectBoardContainer} />
      </React.Fragment>
    </Router>
  );
}

export default withAuth(App);
