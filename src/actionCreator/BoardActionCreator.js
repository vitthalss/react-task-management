import boardConstants from '../constants/BoardConstants';

export function boardFetch() {
  return {
    type: boardConstants.fetch
  };
}

export function fetchSuccess(boards) {
  return {
    type: boardConstants.fetchSuccess,
    payload: {
      boards
    }
  };
}

export function fetchFailure(err) {
  return {
    type: boardConstants.fetchFailure,
    payload: {
      error: err
    }
  };
}

export function mergeTask(targetPerson, sourcePerson, targetCol, sourceCol) {
  return {
    type: boardConstants.mergeTask,
    payload: {
      targetPerson,
      sourcePerson,
      targetCol,
      sourceCol
    }
  };
}

export function addTask(row, col, task) {
  return {
    type: boardConstants.addTask,
    payload: {
      row,
      col,
      task
    }
  };
}

export function updateTask(row, col, oldTask, newTask) {
  return {
    type: boardConstants.updateTask,
    payload: {
      row,
      col,
      oldTask,
      newTask
    }
  };
}

export function deleteTask(row, task) {
  return {
    type: boardConstants.deleteTask,
    payload: {
      row,
      task
    }
  };
}

export function addMembers(name) {
  return {
    type: boardConstants.addMembers,
    payload: {
      name
    }
  };
}

export function deleteCard(row, col) {
  return {
    type: boardConstants.deleteCard,
    payload: {
      row,
      col
    }
  };
}

export function clearBoard() {
  return {
    type: boardConstants.clear
  };
}
