// Step 1: Find element
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")
let toDoListContainer = document.getElementById("todo-list")

let templateElement = document.getElementById("ListItemTemplate")
let template = templateElement.innerHTML;

// Step 2: Write a function to implemenet behavioiur
function onAddTaskClicked(event){
    let taskName = newTaskInput.value;
    newTaskInput.value = "";

    let taskHTML = template.replace("<!-- Task_Name-->",taskName);
    toDoListContainer.insertAdjacentHTML("afterbegin", taskHTML);
}

// Step 3: Link element, function and event
addTaskButton.addEventListener('click', onAddTaskClicked)