// Get references to the form and its input field
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');

// Get a reference to the to-do list
const todoList = document.querySelector('#todo-list');

// An array to hold the to-do items
let todos = [];

// Render the to-do list
function renderTodos() {
  // Clear the current list items
  todoList.innerHTML = '';

  // Loop over the to-do items and add them to the list
  todos.forEach(todo => {
    // Create a new list item element
    const li = document.createElement('li');

    // Create a span element to display the to-do text
    const todoText = document.createElement('span');
    todoText.textContent = todo;

    // Create a button element to delete the to-do item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTodo(todo);
    });

    // Add the text and delete button to the list item
    li.appendChild(todoText);
    li.appendChild(deleteButton);

    // Add the list item to the to-do list
    todoList.appendChild(li);
  });
}

// Add a new to-do item
function addTodo() {
  // Get the text from the input field
  const todoText = input.value;

  // Add the new to-do item to the array
  todos.push(todoText);

  // Clear the input field
  input.value = '';

  // Render the updated to-do list
  renderTodos();
}

// Delete a to-do item
function deleteTodo(todo) {
  // Find the index of the to-do item to delete
  const index = todos.indexOf(todo);

  // Remove the to-do item from the array
  todos.splice(index, 1);

  // Render the updated to-do list
  renderTodos();
}

// Handle form submissions
form.addEventListener('submit', event => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Add a new to-do item
  addTodo();
});

// Initial render of the to-do list
renderTodos();
