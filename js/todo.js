let taskInput = document.getElementById("task");
const addBtn = document.querySelector(".add-task");
const taskList = document.getElementsByClassName("tasks-list")[0];
const task = document.querySelector(".task");
const errorInput = document.querySelector('.error')
let img;


// Clears the error
taskInput.onfocus = function(){
  errorInput.textContent = " "
  // errorInput.style.border = "0";
  errorInput.style.backgroundColor = "transparent";
}



// Add task
addBtn.addEventListener("click", () => {
  if(taskInput.value == ''){
    errorInput.textContent = "Please add a task"
    errorInput.style.color = '#fff'
    errorInput.style.fontSize = "1rem"
    // errorInput.style.border = "2px solid red";
    errorInput.style.backgroundColor = "red";
    errorInput.style.padding = "10px 1rem"

    setTimeout(() => {
      errorInput.textContent = " "
      errorInput.style.backgroundColor = "transparent";
    }, 1000);

  } else{
    const task = document.createElement("li");
    task.className = "task";
    img = document.createElement("img");
    img.src = "../images/delete.png";
    img.className = "delete"
    task.textContent = taskInput.value;
    task.append(img);
    taskList.prepend(task);
    errorInput.textContent = ""
    taskInput.value =""
    let current_tasks = document.querySelectorAll(".delete");

  for(let i = 0; i < current_tasks.length; i++){
    current_tasks[i].onclick = function(event){
      // this.parentNode.remove();
      event.target.parentNode.remove()
    }
  }
  }

  
});



taskList.addEventListener("click", function (event) {
  event.target.style.textDecoration = "line-through";
  event.target.style.backgroundColor = "rgb(88, 211, 88)";
  event.target.style.color = "#fff";

});

