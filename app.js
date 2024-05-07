const todoInput = document.getElementById("new-task");
const todoBtn = document.getElementById("add-task");
const todoList = document.getElementById("task-list");

function addTask() {
    const task = todoInput.value;
    if(task === '') {
        alert("Enter a task");
    }

    const todoBody = document.createElement('li');
    const todoText = document.createElement("span");
    todoText.textContent = task;

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";

    editBtn.addEventListener("click", function() {
        const newText = prompt("Edit Todo", todoText.textContent);
        if(newText !== '' && newText !== null) {
            todoText.textContent = newText;
        }
    })

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    deleteBtn.addEventListener("click", function() {
        todoList.removeChild(todoBody);
    })

    const completeBtn = document.createElement('button');
    completeBtn.textContent = "completed";

    completeBtn.addEventListener("click", function () {
        todoBody.classList.toggle("complete");
    })

    todoBody.appendChild(todoText);
    todoBody.appendChild(completeBtn);
    todoBody.appendChild(editBtn);
    todoBody.appendChild(deleteBtn);
    todoList.appendChild(todoBody);
    todoInput.value = '';
    
}

todoBtn.addEventListener("click", addTask);


function filterTodo(status) {
    const todos = document.getElementsByTagName("li");
    for(const todo of todos) {
        switch (status) {
            case "all":
                todo.style.display = "flex";
                break;
            case "complete":
                todo.style.display = todo.classList.contains("complete") ? "flex" : "none";
                break;
            case "uncomplete":
                todo.style.display = todo.classList.contains("complete") ? "none" : "flex";
                break;
        }
    }
}

document.getElementById("all").addEventListener("click", function() {
    filterTodo("all");
});
document.getElementById("comp").addEventListener("click", function() {
    filterTodo("complete");
});
document.getElementById("uncomp").addEventListener("click", function() {
    filterTodo("uncomplete");
});