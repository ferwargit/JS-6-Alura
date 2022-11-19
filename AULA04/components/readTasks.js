import { createTask } from './addTask.js';
import dateElement from './dateElement.js';

export const readTasks = () => {
  const list = document.querySelector('[data-list]');
  console.log(list);

  const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];
  // console.log(dateElement('14/06/2021'));

  tasksList.forEach((task) => {
    list.appendChild(dateElement(task.dateFormat));
    list.appendChild(createTask(task));
  });
};
