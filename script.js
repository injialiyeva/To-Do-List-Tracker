let form = document.querySelector("form"); //form
let todoDiv = document.getElementById("to-do-div"); //todos
let todoList = document.querySelector(".todo-list"); //firstToDo
let sortButton = document.querySelector(".mintomax"); //sort
let sortImg = document.querySelector(".mintomax"); //img

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

let inputOne = document.querySelector(".input");
inputOne.addEventListener("blur", (_) => {
  inputOne.setAttribute("value", inputOne.value);
});

function findItem(item) {
  item.addEventListener("keyup", (_) => {
    item.addEventListener("blur", (_) => {
      item.setAttribute("value", item.value);
    });
  });
}

todoList.addEventListener("click", deleteTask);

function deleteTask(element) {
  if (element.target.className == "delete-buttons") {
    element.target.parentElement.remove();
  }
}

sortButton.addEventListener("click", sortTasks);

let index = 0;
function sortTasks(el) {
  let input = document.querySelector(".input");
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

//delete -> inactive delete
//deleteOver -> active delete
//imagea-z -> active down arrow
//imagez-a -> active up arrow
//pic One -> inactive down arrow
