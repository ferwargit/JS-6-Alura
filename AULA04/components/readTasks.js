import { createTask } from './addTask.js';
import { uniqueDates } from '../services/data.js';
import dateElement from './dateElement.js';

export const readTasks = () => {
  const list = document.querySelector('[data-list]');
  console.log(list);

  const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];
  // console.log(dateElement('14/06/2021'));
  const dates = uniqueDates(tasksList);
  // console.log(dates);

  dates.forEach(date => {
    console.log(date);
  });

  tasksList.forEach((task) => {
    list.appendChild(dateElement(task.dateFormat));
    list.appendChild(createTask(task));
  });
};
