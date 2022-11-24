const form = document.querySelector('#task-form');
const taskBtn = document.querySelector('#task-btn');
const taskList = document.querySelector('.nav-items');
const taskX = document.querySelector('.a-items');
const clearBtn = document.querySelector('.clear-task');
var taskInput = document.querySelector('#task1');
const filter = document.querySelector('#filter');

taskInput.style.background = "red";
nameEvent();
function nameEvent(){
    taskBtn.addEventListener("click", addTask());
}

function addTask(){
    if(taskInput.value === ''){
        alert("Add Task");
    }

    // const li = document.createElement('li');

    // li.className = 'nav-links';

    // li.appendChild(document.createTextNode(taskInput.value));

    // const link = document.createElement('a');

    // link.className = 'delete-item';

    // li         

    
}