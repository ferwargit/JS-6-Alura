import { displayTasks } from "./readTasks.js";

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector('[data-list]');
  // const parent = event.target.parentElement;
  // parent.remove();
  // console.log('id', id)
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const index = tasks.findIndex((item) => item.id === id);
  console.log(index);
  tasks.splice(index,1);
  // console.log(tasks);
  li.innerHTML = '';
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
  // console.log(index);
  // console.log(tasks);
  // tasks.splice(id,1);
  // console.log(tasks);
};

export default deleteIcon;
