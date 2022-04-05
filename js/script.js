// Step 1
    let addTaskButton = document.getElementById("add-task");
    let newTaskInput = document.getElementById("task-input");
    let todoListContainer = document.getElementById("todo-list");
    let showActiveButton = document.getElementById("show-active");
    
    
    /* We have chosen to use a template in our HTML.  So this time we need two
       steps, locate the parent of the template (the <script> tag then get the
       contents (innerHTML) which is our template.
    
       By encapsulating the HTML within a script tag we can reference it from our
       javascript without needing a big string (lots of quoting and adding bits of
       stings together to build a big string).  We experienced string building in
       Flatland when we built the buzzword phrase.
    
       Another reason to use templates, is 'separation of concerns'.  We want all
       HTML in the html file.  If we use string-building, the some of the layout is
       not hidden in the JavaScript file.
    
       We've actually just implemented an extremely minimalistic templating language
       to aid our todolist. This is VERY similar concept to how the modern front end
       frameworks (Vue, Reach, Angular etc) using templates.
    
       So instead of just adding text to our container, we're adding a big chunk of
       HTML (the template).*/
    
    /* Locate where <script> tag which contains our template  */
    let templateElement = document.getElementById("list-item-template");
    /* Lets get the template, which is just all the HTML beteen the <script> tag */
    let template = templateElement.innerHTML;
    

    
    
    
    
    // Step 2
    function onAddTaskClicked(event) {
        let taskName = newTaskInput.value;
        newTaskInput.value = "";
        let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
            todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
    }

    function onTodolistClicked(event) {
        /* We need to know which element triggered the click event */
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
        for (let I=0; i < tasks.length; i++){
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