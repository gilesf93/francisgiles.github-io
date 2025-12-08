// Stores all tasks the user creates
let tasks = []

// Keeps track of the next ID number for new tasks
let nextId = 6;

// --- PRELOADED TASKS (already in the list when the page loads) ---
tasks.push({
  id: 1,
  name: "Finish JavaScript project",
  priority: "High",
  isImportant: true,
  isCompleted: false,
  date: new Date()
});

tasks.push({
  id: 2,
  name: "Clean Apartment",
  priority: "Medium",
  isImportant: true,
  isCompleted: false,
  date: new Date()
});

tasks.push({
  id: 3,
  name: "Wrap Presents",
  priority: "Low",
  isImportant: false,
  isCompleted: false,
  date: new Date()
});

tasks.push({
  id: 4,
  name: "Take out trash",
  priority: "High",
  isImportant: true,
  isCompleted: false,
  date: new Date()
});

tasks.push({
  id: 5,
  name: "Buy Music Equipment",
  priority: "Medium",
  isImportant: true,
  isCompleted: false,
  date: new Date()
});

// --- Getting all the form elements from the HTML ---
const taskInput = document.getElementById("taskName")
const priorityDropbox = document.getElementById("taskPriority");
const importantCheckbox = document.getElementById("taskImportant");
const completedCheckbox = document.getElementById("taskCompleted");
const form = document.getElementById("taskForm");

// When the form is submitted, run handleAddTask()
form.addEventListener("submit", handleAddTask);

// --- Function that adds a new task to the list ---
function handleAddTask(event) {
    // Stops the page from refreshing
    event.preventDefault();

    // Get the task name and remove extra spaces
    const task = taskInput.value.trim();

    // Make sure the task name is not empty
    if (task == "") {
        alert("Task name cannot be empty.");
        return;
    }

    // Get values from the form inputs
    const priority = priorityDropbox.value;
    const isImportant = importantCheckbox.checked;
    const isCompleted = completedCheckbox.checked;

    // Create a new task object
    const newTask = {
        id: nextId++,              // gives each new task a unique ID
        name: task,
        priority: priority,
        isImportant: isImportant,
        isCompleted: isCompleted,
        date: new Date()           // saves the date the task was added
    };

    // Add the new task into the array
    tasks.push(newTask);

    // Show the updated tasks in the console
    console.log(JSON.stringify(tasks, null, 2));

    // Clear the form inputs
    form.reset();

    // Refresh the task list on the screen
    showTasks();
}

// --- Function that shows all tasks on the page ---
const taskManager = document.getElementById("taskmanager")

function showTasks() {
    // Clear the task display area
    taskManager.innerHTML = "";

    // Loop through every task in the array
    for (let i = 0; i < tasks.length; i++) {
        let t = tasks[i];
        let p = document.createElement("p");

        // Format the saved date nicely
        let dateText = t.date.toLocaleDateString();

        // Display task name, priority, and date
        p.textContent = t.name + " (" + t.priority + ") - Added: " + dateText + " ";

        // If the task is marked important, show it in red
        if (t.isImportant) {
            p.style.color = "red";
        }

        // If the task is completed, put a line through it
        if (t.isCompleted) {
            p.style.textDecoration = "line-through";
        }

        // --- Delete Button ---
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            deleteTask(t.id);
        };

        // --- Toggle Complete Button ---
        let toggleBtn = document.createElement("button");
        toggleBtn.textContent = t.isCompleted ? "Undo" : "Done";
        toggleBtn.onclick = function () {
            toggleCompleted(t.id);
        };

        // Add buttons to the task paragraph
        p.appendChild(deleteBtn);
        p.appendChild(toggleBtn);

        // Add the task to the page
        taskManager.appendChild(p);
    }
}

// Show tasks right away when the page loads
showTasks();

// --- Delete a task from the list using its ID ---
function deleteTask(id) {
    // Keep all tasks except the one with the matching ID
    tasks = tasks.filter(t => t.id !== id);

    console.log(JSON.stringify(tasks, null, 2));

    showTasks();
}

// --- Mark a task as completed or undo it ---
function toggleCompleted(id) {
    // Loop through tasks to find the correct ID
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            // Flip the value (true → false, false → true)
            tasks[i].isCompleted = !tasks[i].isCompleted;
        }
    }

    console.log(JSON.stringify(tasks, null, 2));

    showTasks();
}

