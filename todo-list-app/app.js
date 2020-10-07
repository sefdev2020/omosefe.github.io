// Get All DOM Elements
var input = document.querySelector("#input");
var button = document.querySelector(".btn");
var todoContainer = document.querySelector(".todo-container");
var todoList = document.querySelector(".todos");



// Get Input and add to the todo container
const getInput = () => {

  if (input.value !== "") {
    var inputValue = input.value;
    //console.log(inputValue);

    var listItem = document.createElement("li");
    listItem.className = "todolist";

    var createDiv = document.createElement("div");
    createDiv.className = "todos";

    var para = document.createElement("div");
    para.className = "paragraph";

    var checkDiv = document.createElement("div");
    checkDiv.className = "checkDiv";

    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.className = "checker";

    var checkmark = document.createElement("span");
    checkmark.className = "checkmark";

    var createText = document.createElement("label");
    createText.innerHTML = `${inputValue}`;
    createText.className = "label"
    

    let createDel = document.createElement("i");
    createDel.className = "fas fa-trash";

    let createStar = document.createElement("i");
    createStar.className = "fas fa-star";

    let iconDiv = document.createElement("div");
    iconDiv.className = "icons";

    

    createDiv.appendChild(para);
    createDiv.appendChild(iconDiv);

    para.appendChild(checkDiv);
    checkDiv.appendChild(check);
    checkDiv.appendChild(checkmark);
    para.appendChild(createText);

    iconDiv.appendChild(createStar);
    iconDiv.appendChild(createDel);

    listItem.appendChild(createDiv);

    todoContainer.appendChild(listItem);

    // Delete Items from the Todo list
    const del = (e) => {
      createDel = e.target;
      iconDiv = createDel.parentNode;
      createDiv = iconDiv.parentNode;

      listItem.remove(createDiv);
    };

    // STARRING A TODO ITEM

    let changeTo = "#FF9529";
  
    const star = () => {
      
      //TOGGLE THE STAR ON/OFF
      let current = changeTo;
      changeTo = createStar.style.color;
      createStar.style.color = current;
    };

    //ADDING EVENT TO THE TODO STAR AND DELETE

    createDel.addEventListener("click", del);

    createStar.addEventListener("click", star);

    clear();
  } else {
    alert("Please Enter a Task");
  }


  // Strikthrough the text when checkbox is checked
  let strikeThrough = "line-through";
  let strikeColor = "#838383"

  const complete = () => {
    let current = strikeThrough;
    strikeThrough = createText.style.textDecoration;
    createText.style.textDecoration = current;

    let currentColor = strikeColor;
    strikeColor = createText.style.color;
    createText.style.color = currentColor;
  }

  check.addEventListener("change", complete);

 
  
  //END OF GETINPUT FUNCTION
};

//clears the input field
const clear = () => {
  input.value = "";
};

//calling the ADD ITEM event
button.addEventListener("click", getInput);


input.addEventListener("keyup", (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector(".btn").click();
  }
});


