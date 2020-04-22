import boardConstants from '../constants/BoardConstants';

const intialState = {
  boards: [],
  isLoading: true,
};

export default function reducer(state = intialState, action) {
  function getNewBoard(boards, index, mutation) {
    return boards
            .slice(0, index)
            .concat(mutation)
            .concat(state.boards.slice(index + 1));
  }

  switch (action.type) {
    case boardConstants.fetch: {
      return Object.assign(
        {},
        state,
        {
          isLoading: true
        }
      );
    }
    case boardConstants.fetchSuccess: {
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          boards: action.payload.boards
        }
      );
    }

    case boardConstants.fetchFailure: {
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
        }
      );
    }

    case boardConstants.clear : {
      return Object.assign(
        {},
        state,
        {
          boards: []
        }
      );
    }

    case boardConstants.deleteCard: {
      const { row, col } = action.payload;
      const filterPerson = state.boards.filter(b => b.assigned === row)[0];
      const rowIndex = state.boards.findIndex(b => b.assigned === row);
      filterPerson[col] = [];
      const newBoard = getNewBoard(state.boards, rowIndex, filterPerson);
      return Object.assign(
        {},
        state,
        {
          boards: newBoard
        }
      );
    }

    case boardConstants.mergeTask: {
      const {
        sourceIndex,
        targetIndex,
        filterSource,
        filterTarget,
        sourceCol,
        targetCol
      } = action.payload;

      const tasks = filterSource[sourceCol];
      filterSource[sourceCol] = [];
      if (!filterTarget[targetCol]) {
        filterTarget[targetCol] = [];
      }
      filterTarget[targetCol] = filterTarget[targetCol].concat(tasks);

      const newBoard = getNewBoard(
                        getNewBoard(state.boards, sourceIndex, filterSource),
                        targetIndex,
                        filterTarget);

      return Object.assign(
        {},
        state,
        {
          boards: newBoard
        }
      );
    }

    case boardConstants.addTask: {
      const { col, task, newTaskObj, rowIndex } = action.payload;
      if (!newTaskObj[col]) {
        newTaskObj[col] = [];
      }
      newTaskObj[col].push(task);
      const newBoard = getNewBoard(state.boards, rowIndex, newTaskObj);

      return Object.assign(
        {},
        state,
        {
          boards: newBoard
        }
      );
    }

    case boardConstants.updateTask: {
      const { col, newTask, oldTask, filterPerson, rowIndex } = action.payload;
      const newTaskArray = filterPerson[col].map((task) => {
        if (task === oldTask) {
          return newTask;
        }
        return task;
      });
      filterPerson[col] = newTaskArray;
      const newBoard = getNewBoard(state.boards, rowIndex, filterPerson);

      return Object.assign(
        {},
        state,
        {
          boards: newBoard
        }
      );
    }

    case boardConstants.deleteTask: {
      const { newTaskObj, rowIndex } = action.payload;
      const newBoard = getNewBoard(state.boards, rowIndex, newTaskObj);
      return Object.assign(
        {},
        state,
        {
          boards: newBoard
        }
      );
    }

    case boardConstants.addMembers: {
      const { name } = action.payload;
      const newTaskObj = { assigned: name };
      const newBoard = state.boards
                                .slice(0, state.boards.length - 1)
                                .concat(newTaskObj)
                                .concat(state.boards.slice(state.boards.length - 1));

      return Object.assign(
        {},
        state,
        {
          boards: newBoard
        }
      );
    }

    default: return state;
  }
}
