// Step 1
    let addTaskButton = document.getElementById("add-task");
    let newTaskInput = document.getElementById("task-input");
    let todoListContainer = document.getElementById("todo-list");
    let showActiveButton = document.getElementById("show-active");
    
    let templateElement = document.getElementById("list-item-template");
    let template = templateElement.innerHTML;
    
    // Step 2
    function onAddTaskClicked(event) {
        let taskName = newTaskInput.value;
        newTaskInput.value = "";
        let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
            todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
    }

    function onTodolistClicked(event) {
        let targetElement = event.target;
    
        while (!targetElement.classList.contains("task")) {
            targetElement = targetElement.parentElement;
        }

        let checkbox = targetElement.querySelector(".checkbox");
    
        if (checkbox.checked) {
            targetElement.classList.add("completed");
        } else {
            targetElement.classList.remove("completed");
        }
    }
    
    function showActiveTasks(){
        let tasks = document.getElementsByClassName("task");
        for (let i=0; i < tasks.length; i++){
            if (tasks[i].classList.contains("completed")){
                tasks[i].style.display = "none"
            } else {
                tasks[i].style.display = "block"
            }
        }
    }
    
 // Step 3 make the event trigger our functions
    addTaskButton.addEventListener('click', onAddTaskClicked);
    todoListContainer.addEventListener('click', onTodolistClicked);
    showActiveButton.addEventListener('click', showActiveTasks);