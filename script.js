//Selectors
let form = document.querySelector("form");
let todoDiv = document.getElementById("to-do-div");
let todoList = document.querySelector(".todo-list");
let sortButton = document.querySelector(".mintomax");
let sortImg = document.querySelector(".mintomax");
let inputOne = document.querySelector(".input");

//Event Listeners
form.addEventListener("submit", (event) => {
  todoDiv.innerHTML += `<div class="to-do">
    <input 
    type="text" 
    class="input"
    id="input-task"
    placeholder="Type new task"
    />
    <button class="delete-buttons"></button>
  </div>`;
  let input = document.querySelectorAll(".input");
  input.forEach(findItem);
  event.preventDefault();
});

inputOne.addEventListener("blur", (_) => {
  inputOne.setAttribute("value", inputOne.value);
});

todoList.addEventListener("click", deleteTask);

sortButton.addEventListener("click", sortTasks);

//Functions
function findItem(item) {
  item.addEventListener("keyup", (_) => {
    item.addEventListener("blur", (_) => {
      item.setAttribute("value", item.value);
    });
  });
}

function deleteTask(element) {
  if (element.target.className == "delete-buttons") {
    element.target.parentElement.remove();
  }
}

//Sorting
let index = 0;
function sortTasks(el) {
  let input = document.querySelectorAll(".input");
  let arr = [];
  input.forEach((i) => {
    arr.push(i.value.trim());
  });

  if (index == 0) {
    sortImg.src = "/images/active-down-arrow.png";
    arr.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
    index++;
  } else {
    sortImg.src = "/images/active-up-arrow.png";
    arr.sort((a, b) => {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
    index--;
  }

  todoDiv.innerHTML = "";
  arr.forEach((item) => {
    todoDiv.innerHTML += `
    <div class="to-do">
    <input 
    type="text" 
    class="input"
    id="input-task"
    placeholder="Type new task"
    value="${item}"
    />
    <button class="delete-buttons"></button>
  </div>
    `;
  });
  let allInputs = document.querySelectorAll(".input");
  allInputs.forEach(findItem);
}
