let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList = [
    {
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    },
    {
        text: "Learn React",
        uniqueNo: 4
    },
];

function onAddTodo() {
    let todosCount = todoList.length;
    todosCount = todosCount + 1;

    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert("Enter valid text");
        return;
    }
    console.log(userInputValue);
    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    }

    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

addTodoButton.onclick = function() {
    onAddTodo();
}

function onTodoStatusChanged(checkboxId, labelId) {
    let checkBoxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    // if (checkBoxElement.checked === true) {
    //     labelElement.classList.add("checked");
    // } else {
    //     labelElement.classList.remove("checked");
    // }
    labelElement.classList.toggle("checked");
}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {

    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;

    todoItemsContainer.appendChild(todoElement);
    console.log(todoItemsContainer);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox"
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");

    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");

    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    labelElement.onclick = function() {
        onTodoStatusChanged(checkboxId, labelId);
    }

    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");

    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    }

    deleteIconContainer.appendChild(deleteIcon);
}

// createAndAppendTodo(todoList[0]);
// createAndAppendTodo(todoList[1]);
// createAndAppendTodo(todoList[2]);

for (let eachTodo of todoList) {
    createAndAppendTodo(eachTodo);
}

