import boardConstants from '../constants/BoardConstants';
import { fetchFailure } from '../actionCreator/BoardActionCreator';
import {
  ifExist,
  findAndRemoveTask,
} from './utils';

const updateTask = store => next => (action) => {
  if (boardConstants.updateTask === action.type) {
    const { row, newTask } = action.payload;
    const boards = store.getState().BoardReducer.boards;
    const filterPerson = boards.filter(b => b.assigned === row)[0];
    const rowIndex = boards.findIndex(b => b.assigned === row);
    if (ifExist(filterPerson, newTask)) {
      const error = `${newTask} already exists`;
      return next(fetchFailure(error));
    }
    /* eslint-disable no-param-reassign */
    action.payload.filterPerson = filterPerson;
    action.payload.rowIndex = rowIndex;
    return next(action);
  }
  return next(action);
};

const mergeTask = store => next => (action) => {
  if (boardConstants.mergeTask === action.type) {
    const { targetPerson, sourcePerson } = action.payload;
    const boards = store.getState().BoardReducer.boards;
    const filterSource = boards.filter(b => b.assigned === sourcePerson)[0];
    const sourceIndex = boards.findIndex(b => b.assigned === sourcePerson);
    const filterTarget = boards.filter(b => b.assigned === targetPerson)[0];
    const targetIndex = boards.findIndex(b => b.assigned === targetPerson);
    /* eslint-disable no-param-reassign */
    action.payload.filterSource = filterSource;
    action.payload.sourceIndex = sourceIndex;
    action.payload.filterTarget = filterTarget;
    action.payload.targetIndex = targetIndex;
    return next(action);
  }
  return next(action);
};

const addAndDeleteTask = store => next => (action) => {
  if (boardConstants.addTask === action.type || boardConstants.deleteTask === action.type) {
    const { row, task } = action.payload;
    const boards = store.getState().BoardReducer.boards;
    const filterPerson = boards.filter(b => b.assigned === row)[0];
    const rowIndex = boards.findIndex(b => b.assigned === row);
    const newTaskObj = findAndRemoveTask(filterPerson, task);
    /* eslint-disable no-param-reassign */
    action.payload.newTaskObj = newTaskObj;
    action.payload.rowIndex = rowIndex;
    return next(action);
  }
  return next(action);
};

const ifMemberExist = store => next => (action) => {
  if (boardConstants.addMembers === action.type) {
    const { name } = action.payload;
    const boards = store.getState().BoardReducer.boards;
    const membersWithSameName = boards.filter(b => b.assigned === name);
    if (membersWithSameName.length) {
      const error = `Member with ${name} already exists`;
      return next(fetchFailure(error));
    }
  }
  return next(action);
};

export {
  updateTask,
  addAndDeleteTask,
  ifMemberExist,
  mergeTask
};
