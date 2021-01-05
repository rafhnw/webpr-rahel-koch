
let todoContainer = null;
let numberOfTasks = null;
let openTasks = null;

// merkt sich nur referenzen der argumente, die übergeben werden
function startTodo(newTodoContainer, newNumberOfTasks, newOpenTasks) {
    todoContainer = newTodoContainer;
    numberOfTasks = newNumberOfTasks;
    openTasks     = newOpenTasks;
}

function addTodo() {

    const inputElement = document.createElement('INPUT');
    inputElement.setAttribute("TYPE","TEXT");
    inputElement.setAttribute("SIZE","42");

    const checkboxElement = document.createElement('INPUT');
    checkboxElement.setAttribute("TYPE", "CHECKBOX");

    // abhängigkeit von ui elementen
    checkboxElement.onclick = _ => {
        openTasks.innerText = Number(openTasks.innerText) + (checkboxElement.checked ? -1 : 1);
    };

    // werdem dem container hinzugefügt
    todoContainer.appendChild(inputElement);
    todoContainer.appendChild(checkboxElement);

    numberOfTasks.innerText = Number(numberOfTasks.innerText) + 1;
    openTasks.innerText     = Number(openTasks.innerText) + 1;

}
