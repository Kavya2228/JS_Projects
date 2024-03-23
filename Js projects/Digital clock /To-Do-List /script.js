const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.addEventListener('click', toggleTask);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

// Function to toggle task completion
function toggleTask() {
  this.classList.toggle('completed');
}
