// script.js

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  // Function to create a new task element
  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");

    // Remove task when button is clicked
    removeButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(removeButton);
    return li;
  }

  // Add task when button is clicked
  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const taskElement = createTaskElement(taskText);
      taskList.appendChild(taskElement);
      taskInput.value = ""; // Clear the input field
    }
  });

  // Optional: Add task by pressing Enter key
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskButton.click();
    }
  });
});
