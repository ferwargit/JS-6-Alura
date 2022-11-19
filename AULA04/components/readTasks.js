import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/data.js";
import dateElement from "./dateElement.js";

export const displayTasks = () => {
  const list = document.querySelector("[data-list]");
  // console.log(list);

  const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
  // console.log(dateElement('14/06/2021'));
  const dates = uniqueDates(tasksList);
  // console.log(dates);

  dates.forEach((date) => {
    // console.log(date);
    const dateMoment = moment(date, "DD/MM/YYYY");
    // console.log(dateMoment);
    list.appendChild(dateElement(date))
    tasksList.forEach((task) => {
      const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
      // console.log(taskDate);
      const diff = dateMoment.diff(taskDate);
      // console.log(diff);
      if (diff === 0) {
        list.appendChild(createTask(task));
      }
      // list.appendChild(dateElement(date));
      // list.appendChild(dateElement(task.dateFormat));
    });
  });
};
