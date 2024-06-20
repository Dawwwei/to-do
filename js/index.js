function addTask() {
    let task = document.getElementById('task').value;
    let taskList = document.getElementById('taskList');
    let taskItem = document.createElement('div');

    if (task === '') {
        alert('You have to enter a task');
    } else {
        taskItem.innerHTML = task;
        taskItem.addEventListener('click', function() {
            if (taskItem.classList.contains('completed')) {
                taskItem.remove();
            }
            taskItem.classList.add('completed');
        })
        taskList.appendChild(taskItem);
    }
}

function clearTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}