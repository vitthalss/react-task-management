import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectBoard from '../Dumb/Project/ProjectBoard';
import MaterialAppBar from '../Dumb/MaterialAppBar';
/* ACTIONS*/
import { fetchBoards, boardClear } from '../../actions/BoardActions';

class ProjectBoardContainer extends React.Component {
  componentDidMount() {
    const id = this.props.location.pathname.split('/')[2];
    this.props.fetchBoards(id);
  }
  componentWillUnmount() {
    this.props.boardClear();
  }
  render() {
    return (
      <React.Fragment>
        <MaterialAppBar title={this.props.location.pathname.split('/')[2]} />
        <ProjectBoard {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    boards: store.BoardReducer.boards,
    isLoading: store.BoardReducer.isLoading,
    error: store.BoardReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoards: (id) => {
      dispatch(fetchBoards(id));
    },
    boardClear: () => {
      dispatch(boardClear());
    }
  };
};

ProjectBoardContainer.propTypes = {
  fetchBoards: PropTypes.func,
  boardClear: PropTypes.func,
  location: PropTypes.object,
  pathname: PropTypes.string,
};

export default connect(mapStoreToProps, mapDispatchToProps)(ProjectBoardContainer);
