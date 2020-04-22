import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Projects from '../Dumb/Project/Projects';
import MaterialAppBar from '../Dumb/MaterialAppBar';

/* ACTIONS */
import fetchProjects from '../../actions/ProjectAction';

class ProjectsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <React.Fragment>
        <MaterialAppBar title={'Your projects'} />
        <Projects {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    projects: store.ProjectReducer.projects,
    isLoading: store.ProjectReducer.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => {
      dispatch(fetchProjects());
    }
  };
};

ProjectsContainer.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
};

export default connect(mapStoreToProps, mapDispatchToProps)(ProjectsContainer);
