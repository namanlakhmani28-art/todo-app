const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");



addBtn.addEventListener("click", function() {
    
    const taskText = taskInput.value;


    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
                    <span>${taskText}</span>
                    <button class = "deleteBtn">Delete</button>
                `;

    taskList.appendChild(li);

    taskInput.value = "";
});


taskList.addEventListener("click", function(e) {
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.remove();
    }
});