const myDiv = document.getElementById("myDiv");
const heading = document.createElement("h1")
heading.textContent = "Welcome to DOM homework"
myDiv.appendChild(heading)

let paragraph = document.createElement("p")
paragraph.textContent = "This is your first DOM homework assignment"
myDiv.appendChild(paragraph)


const list = document.createElement("ul");
const li1 = document.createElement("li");
li1.textContent = "A";
list.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "B";
list.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "C";
list.appendChild(li3);

myDiv.appendChild(list);

heading.classList.add("highlight");

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const button = document.getElementById("addItemBtn");
let count = 1;
button.addEventListener("click", function() {
const newItem = document.createElement("li");
newItem.textContent = `New List Item ${count}`;
newItem.style.color = getRandomColor();
list.appendChild(newItem);
count++;
});

myDiv.addEventListener("click", function () {
  myDiv.style.backgroundColor = getRandomColor();
});


console.log("Loaded Correctly");