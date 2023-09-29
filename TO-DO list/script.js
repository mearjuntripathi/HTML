const container = document.getElementById('container');

// Function to create a new task element with the event listener
function createTaskElement(message) {
    if (document.querySelectorAll('.task').length == 0) 
        container.innerHTML = ""; 
    
    const ele = document.createElement('div');
    ele.classList.add('task');
    ele.innerHTML = `<p>${message}</p> <button><i class="fa fa-trash"></i></button>`;

    const deleteButton = ele.querySelector('button');
    deleteButton.addEventListener('click', function () {
        container.removeChild(ele);
        empty();
    });

    return ele;
}

document.getElementById('task').addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        document.getElementById('submit').click();
    }
});

document.getElementById('submit').addEventListener('click', function () {
    const task = document.getElementById('task').value;
    document.getElementById('task').value = "";

    if (task == "") {
        alert('First Enter a task');
    } else {
        const taskElement = createTaskElement(task);
        container.append(taskElement);
    }
});

// Function to check if the container is empty and display a message
function empty() {
    if (document.querySelectorAll('.task').length == 0) {
        let ele = document.createElement('div');
        ele.classList.add('empty');
        ele.innerHTML = '<p>No Task Added Yet</p>';
        container.append(ele);
    }
}

// Call empty function initially
window.onload = empty();
