import BoardApi from '../api/BoardApi';
import {
  boardFetch,
  fetchSuccess,
  fetchFailure,
  addTask,
  updateTask,
  deleteTask,
  addMembers,
  clearBoard,
  mergeTask,
  deleteCard
} from '../actionCreator/BoardActionCreator';

import { setError } from '../actionCreator/ErrorActionCreator';

const fetchBoards = id => (dispatch) => {
  dispatch(boardFetch());
  const apiObj = new BoardApi();
  apiObj.fetch(id)
    .then((res) => {
      dispatch(fetchSuccess(res.data.boards));
    })
    .catch((err) => {
      dispatch(setError(err));
      dispatch(fetchFailure(err));
    });
};

const taskMerge = (targetPerson, sourcePerson, targetCol, sourceCol) => (dispatch) => {
  dispatch(mergeTask(targetPerson, sourcePerson, targetCol, sourceCol));
};

const taskAdd = (row, col, task) => (dispatch) => {
  dispatch(addTask(row, col, task));
};

const taskUpdate = (row, col, oldTask, newTask) => (dispatch) => {
  dispatch(updateTask(row, col, oldTask, newTask));
};

const taskDelete = (row, task) => (dispatch) => {
  dispatch(deleteTask(row, task));
};

const memberAdd = name => (dispatch) => {
  dispatch(addMembers(name));
};

const cardDelete = (row, col) => (dispatch) => {
  dispatch(deleteCard(row, col));
};

const boardClear = () => (dispatch) => {
  dispatch(clearBoard());
};

export {
  fetchBoards,
  taskAdd,
  taskUpdate,
  taskDelete,
  memberAdd,
  boardClear,
  taskMerge,
  cardDelete
};
