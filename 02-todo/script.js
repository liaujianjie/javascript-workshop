// Get reference to the elements
const addTextfield = document.getElementById("todo-add-input");
const todoList = document.getElementById("todo-list");

// Add a form submit listener
document.getElementById("todo-add-form").addEventListener("submit", event => {
  event.preventDefault();

  // Guard against empty string
  if (!addTextfield.value) {
    return;
  }

  // Create new elements
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  const span = document.createElement("span");
  span.innerHTML = addTextfield.value;

  // Append new elements into todo list
  todoList.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(span);

  // Reset text field value to empty string
  addTextfield.value = "";
});
