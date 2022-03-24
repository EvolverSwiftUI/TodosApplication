let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    },
    {
        text: "Learn React"
    },
];

function createAndAppendTodo(todo) {
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");

    todoItemsContainer.appendChild(todoElement);
    console.log(todoItemsContainer);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox"
    inputElement.id = "checkBoxInput";
    inputElement.classList.add("checkbox-input");

    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");

    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkBoxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;

    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");

    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIconContainer.appendChild(deleteIcon);
}

// createAndAppendTodo(todoList[0]);
// createAndAppendTodo(todoList[1]);
// createAndAppendTodo(todoList[2]);

for (let eachTodo of todoList) {
    createAndAppendTodo(eachTodo);
}