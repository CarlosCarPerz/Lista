import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    const taskContent = document.createElement("div");
    const textTitle = document.createElement("span");

    textTitle.classList.add("task");
    task.classList.add("card");
    
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(textTitle);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    
    
    textTitle.innerText = value;
    input.value = "";
}

btn.addEventListener("click", createTask);
