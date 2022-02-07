let taskInput = document.getElementById("task");
const addBtn = document.querySelector(".add-task");
const taskList = document.getElementsByClassName("tasks-list")[0];
const task = document.querySelector(".task");
const errorInput = document.querySelector(".error");
let img;

let handleClick = () => {
  if (taskInput.value === "") {
    errorInput.textContent = "Please add a task";
    errorInput.style.color = "#fff";
    errorInput.style.fontSize = "1rem";
    errorInput.style.backgroundColor = "red";
    errorInput.style.padding = "10px 1rem";

    setTimeout(() => {
      taskInput.onfocus();
    }, 1000);
  } else {
    const task = document.createElement("li");
    task.className = "task";
    img = document.createElement("img");
    img.src = "../images/delete.png";
    img.className = "delete";
    task.textContent = taskInput.value;
    task.append(img);
    taskList.prepend(task);
    errorInput.textContent = "";
    taskInput.value = "";
    let current_tasks = document.querySelectorAll(".delete");

    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function (event) {
        event.target.parentNode.remove();
      };
    }
  }
};

// Add task
addBtn.addEventListener("click", handleClick);

// Accept input from the keyboard
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    handleClick();
  }
});

// Clears the error
taskInput.onfocus = function () {
  errorInput.textContent = " ";
  errorInput.style.backgroundColor = "transparent";
};

// Done task
taskList.addEventListener("click", function (event) {
  event.target.style.textDecoration = "line-through double  #293f50 2px";
  event.target.style.backgroundColor = "rgb(88, 211, 88)";
  event.target.style.color = "#fff";
});
