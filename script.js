( () => { 
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

    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener("click", completeTask);
        return i;
    }

    const completeTask = (event) => {
        const element = event.target;
        element.classList.toggle('fas');
        element.classList.toggle('completeIcon');
        element.classList.toggle('far');
    }

    const deleteIcon = () => {
        const i = document.createElement("i");
        i.classList.add ("fas", "fa-trash-alt", "trashIcon", "icon");
        i.addEventListener("click", deleteTask);
        return i;
    }

    const deleteTask = () => {
        console.log("delete task");
    }
    
}) ()