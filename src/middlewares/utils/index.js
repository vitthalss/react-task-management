/**
  * @param { object } obj
  * @param { string } task
*/

function findAndRemoveTask(obj, task) {
  const newTaskObj = JSON.parse(JSON.stringify(obj));
  const validKeys = ['pending', 'progress', 'completed', 'approved'];
  Object.keys(newTaskObj).forEach((k) => {
    if (validKeys.includes(k) && newTaskObj[k].includes(task)) {
      const index = newTaskObj[k].findIndex(e => e === task);
      newTaskObj[k] = newTaskObj[k]
                      .slice(0, index)
                      .concat(newTaskObj[k].slice(index + 1));
    }
  });
  return newTaskObj;
}

function ifExist(obj, task) {
  const tasks = Object.keys(obj)
                      .map(k => obj[k])
                      .filter(el => Array.isArray(el))
                      .filter(arr => arr.includes(task));
  return tasks.length;
}

export {
  findAndRemoveTask,
  ifExist,
};
