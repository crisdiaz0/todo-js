let todos = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];

// Get the DOM element that holds and displays all the todo items
let container = document.getElementById('main-todo-list');

// Remaining, uncompleted task counter
let counter = document.getElementById('remaining-count');

// Iterate through the todo array and populate the container with the todos
// Also check the complete properties of the todo items and update the counter
for (let index in todos) {
  let item = todos[index];

  // create a new todo div
  let newItem = document.createElement('div');
  newItem.className = 'todo complete';
  newItem.id = item.id;

  // Check if the todo item is marked as complete. If so, the div needs the todo complete class
  // Also update the remaining counter
  if (!item.complete) {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    newItem.className = 'todo';

    // Add the checkbox
    newItem.innerHTML = '<input type=checkbox class=todo-checkbox onclick=check(this) />';
  }
  
  else {
    // Add the checkbox with defualt to checked
    newItem.innerHTML = '<input type=checkbox class=todo-checkbox checked=checked onclick=check(this) />';
  }

  // Add the span with the todo item text
  newItem.innerHTML += `<span class=todo-text>${item.text}</span>`;

  // add this new div to the container
  container.appendChild(newItem);
}


// function for changing the todo container if the user checks the check box
function check(item) {
  // item is the current input element with the checkbox that was clicked
  // to change this to a completed item, we need the parent node of this input (the todo div)
  let parentDiv = item.parentNode;

  // If the checkbox is checked, then we change the class to complete
  // If it has been unchecked, change it back to todo
  (item.checked) ? parentDiv.className = 'todo complete': parentDiv.className = 'todo';

  // Update the todo item in the array
  // First find the index of the todo item
  let itemIndex = todos.findIndex(element => {
    // Double == since element id is a int and parentDiv.id is a string
    return element.id == parentDiv.id;
  });

  // Update the complete value for this todo item
  // If checked, it changes to complete = true; Else it changes to complete = false
  // Also, update the remaining items counter
  if (item.checked) {
    todos[itemIndex].complete = true;
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
  }

  else {
    todos[itemIndex].complete = false;
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
  }
}
