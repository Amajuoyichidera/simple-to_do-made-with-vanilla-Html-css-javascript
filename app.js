const taskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

function addTask() {
    const task = taskInput.value;
    if(task === '') {
        alert("please add a task");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "myLi";
    
    const taskText = document.createElement("span");
    taskText.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.className = "delete-btn"

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    })

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.style.backgroundColor = "light-blue";

    editBtn.addEventListener("click", function () {
        const newTask = prompt("Edit Your Task", taskText.textContent);
        if(newTask !== null && newTask !== '') {
            taskText.textContent = newTask;
        }
    })


    taskItem.appendChild(taskText);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

addTaskBtn.addEventListener("click", addTask);
