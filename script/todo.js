let todos = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];

// Get the DOM element that holds and displays all the todo items
let container = document.getElementById('main-todo-list');

// Iterate through the todo array and populate the container with the todos
for (let index in todos) {
  let item = todos[index];

  // create a new todo div
  let newItem = document.createElement('div');
  newItem.className = 'todo';

  // Add the checkbox and span with the todo text to the new div
  newItem.innerHTML = '<input type="checkbox" class="todo-checkbox" />';
  newItem.innerHTML += `<span class=todo-text>${item.text}</span>`;

  // add this new div to the container
  container.appendChild(newItem);
}