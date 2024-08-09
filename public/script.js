function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const todoList = document.getElementById("todoList");
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            removeTask(listItem);
        };
        
        listItem.appendChild(removeButton);
        todoList.appendChild(listItem);
        
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function removeTask(task) {
    task.remove();
}

function getCurrentDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    return formattedDate;
}

function updateDateTime() {
    document.getElementById("currentDate").textContent = getCurrentDate();
}

updateDateTime();
setInterval(updateDateTime, 1000);
