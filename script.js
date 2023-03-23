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
    task.classList.add("card")
    
    taskContent.appendChild(checkComplete());
    task.appendChild(taskContent);
    taskContent.appendChild(textTitle)
    list.appendChild(task)
    
    textTitle.innerText = value;
    input.value = "";
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`

    console.log(content);
}

console.log(btn);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far");
    i.classList.add("fa-check-square");
    i.classList.add("icon");
    return i;
}

btn.addEventListener("click", createTask);