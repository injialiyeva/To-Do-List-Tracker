//
let form = document.querySelector("form"); //form
let todoList = document.querySelector(".todo-list"); //firstToDo
let todoDiv = document.getElementById("to-do-div"); //todos
let sortButton = document.querySelector(".mintomax-button"); //sort
let input = document.querySelectorAll(".input");
let inputOne = document.querySelector(".input");

form.addEventListener("submit", (event) => {
  todoDiv.innerHTML += `<div class="to-do">
    <input 
    type="text" 
    class="input"
    id="input-task"
    />
    <button class="delete-buttons"></button>
  </div>`;

  input.forEach(findItem);
  event.preventDefault();
});

function findItem(item) {
  item.addEventListener("keyup", (_) => {
    item.addEventListener("blur", (_) => {
      item.setAttribute("value", item.value);
    });
  });
}

inputOne.addEventListener("blur", (_) => {
  inputOne.setAttribute("value", inputOne.value);
});

todoList.addEventListener("click", deleteTask);

function deleteTask(element) {
  if (element.target.className == "delete-buttons") {
    element.target.parentElement.remove();
  }
}
