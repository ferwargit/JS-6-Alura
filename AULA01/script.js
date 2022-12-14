import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');

const addTask = (evento) => {
  const list = document.querySelector('[data-list]');
  const task = createTask(evento);
  list.appendChild(task);
}

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');
  // console.log(calendar);
  const value = input.value;
  const date = calendar.value;
  // console.log(moment(date).format('DD/MM/YYYY'));
  // console.log(date);
  const dateFormat = moment(date).format('DD/MM/YYYY');
  console.log(dateFormat);
  // const list = document.querySelector('[data-list]');
  const task = document.createElement('li');
  task.classList.add('card');
  input.value = '';
  //backticks
  const taskContent = document.createElement('div');

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;
  const dateElement = document.createElement('span');
  dateElement.innerHTML = dateFormat;
  // console.log(dateElement);
  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());
  // list.appendChild(task);
  return task;
};

//Arrow functions o funciones anonimas
// btn.addEventListener('click', createTask);
btn.addEventListener('click', addTask);
