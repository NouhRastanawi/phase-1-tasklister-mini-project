
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  let taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", createTask);
});

function createTask(event) {
  event.preventDefault();

  const taskDescription = document.getElementById("new-task-description").value;

  let listItem = document.createElement("li");
  listItem.innerText = taskDescription;
  document.querySelector("#tasks").appendChild(listItem);

  const button = document.createElement("button");
  button.innerText = "Remove";
  listItem.appendChild(button);
  button.addEventListener("click", removeTask);
}

function removeTask(event) {
  event.preventDefault();
  this.parentElement.remove();
}