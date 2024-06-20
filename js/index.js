function addTask() {
    let task = document.getElementById('task');
    let taskList = document.getElementById('taskList');
    let taskItem = document.createElement('div');

    if (task.value === '') {
        alert('You have to enter a task');
    } else {
        taskItem.innerHTML = task.value;
        task.value = '';
        taskItem.classList.add('taskItem');
        taskItem.addEventListener('click', function () {
            if (taskItem.classList.contains('completed')) {
                taskItem.remove();
            }
            taskItem.classList.add('completed');
        })
        taskList.appendChild(taskItem);
    }
}

function clearTasks() {
    if (taskList.innerHTML === '') {
        alert('No tasks to clear');
    } else {
        let taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        alert('All tasks cleared')
    }
}