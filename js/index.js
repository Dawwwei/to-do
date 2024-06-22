function load() {
    if (localStorage.getItem('tasks')) {
        let taskList = document.getElementById('taskList')
        let tasks = document.getElementsByClassName('taskItem')
        taskList.innerHTML = localStorage.getItem('tasks');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].addEventListener('click', function () {
                if (this.classList.contains('completed')) {
                    this.remove();
                    hide()
                }
                this.classList.add('completed');
                localStorage.setItem('tasks', taskList.innerHTML)
            })
        }
    }
    document.getElementById('task').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    hide()
}

function addTask() {
    let taskList = document.getElementById('taskList');
    let task = document.getElementById('task');
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
                hide()
            }
            taskItem.classList.add('completed');
        })
        taskList.appendChild(taskItem);
    }
    localStorage.setItem('tasks', taskList.innerHTML)
    hide()
}

function clearTasks() {
    let taskList = document.getElementById('taskList');
    if (taskList.innerHTML === '') {
        alert('No tasks to clear');
    } else {
        taskList.innerHTML = '';
        setTimeout(() => {
            alert('All tasks cleared')
        }, 100)
    }
    localStorage.setItem('tasks', taskList.innerHTML)
    hide()
}

function hide() {
    let taskList = document.getElementById('taskList');
    let hr = document.getElementById('hr');
    if (taskList.innerHTML == '') {
        hr.style.display = 'none';
    } else {
        hr.style.display = 'block';
    }
}