import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* ACTIONS */
import { taskMerge } from '../../actions/BoardActions';

function DraggableContainer(props) {
  function handleDrop(e) {
    e.preventDefault();
    const { sourcePerson, sourceCol } = JSON.parse(e.dataTransfer.getData('text'));
    const { targetPerson, targetCol } = props;
    props.taskMerge(targetPerson, sourcePerson, targetCol, sourceCol);
  }
  function handleDragStart(e) {
    const dataobj = {
      sourcePerson: props.targetPerson,
      sourceCol: props.targetCol,
    };
    e.dataTransfer.setData('text', JSON.stringify(dataobj));
  }

  return (
    <div
      draggable="true"
      onDragStart={e => handleDragStart(e)}
      onDrop={e => handleDrop(e)}
      onDragOver={e => e.preventDefault()}
    >
      {props.children}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    taskMerge: (targetPerson, sourcePerson, targetCol, sourceCol) => {
      dispatch(taskMerge(targetPerson, sourcePerson, targetCol, sourceCol));
    }
  };
};

DraggableContainer.propTypes = {
  children: PropTypes.object,
  targetPerson: PropTypes.string,
  targetCol: PropTypes.col,
};

export default connect(null, mapDispatchToProps)(DraggableContainer);
