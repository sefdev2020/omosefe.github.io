// Get All Elements
var input = document.querySelector("#input");
var button = document.querySelector(".btn");
var todo = document.querySelector(".todo-container");
var todoList = document.querySelector(".todos");

// Get Input and add to the todo container
const getInput = () => {
  if (input.value !== "") {
    var inputValue = input.value;
    //console.log(inputValue);
    var createDiv = document.createElement("div");
    createDiv.className = "todos";

    var createText = document.createElement("p");
    createText.innerHTML = `${inputValue}`;

    var createDel = document.createElement("i");
    createDel.className = "fas fa-trash";

    createDiv.appendChild(createText);

    createDiv.appendChild(createDel);

    todo.appendChild(createDiv);

    // console.log(createDel);
    // createE.innerHTML =
    // `<p>${inputValue}</p><div class="icon"><i class="fas fa-star star"></i><i class="fas fa-trash delete"></i></div>`;
    // append = todo.appendChild(createE);
    clear();
  } else {
    alert("Please Enter a Task");
  }
};

var del = document.querySelector(".fa-trash");

//clears the input field
const clear = () => {
  input.value = "";
};

// Delete Items from the Todo list
const deleteItem = () => {
  console.log("hello world!");
};

//calling the events
button.addEventListener("click", getInput);
del.addEventListener("click", deleteItem);
