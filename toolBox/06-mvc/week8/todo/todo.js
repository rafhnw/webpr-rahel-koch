
function startTodo() {

}

let todoCounter = 0;

function addTodo() {
    todoCounter ++;

    const tableRowContent =
`<tr>
    <td>
    <!--label muss for attribut haben und einer id zugewiesen sein-->
    <!--soll ein inputfeld sein - selfclosing -->
    <label for="todo_text_${todoCounter}">Todo ${todoCounter}</label>
    <input id="todo_text_${todoCounter}" type="text" value="mein erstes todo">
        </td>
        <td>
        <label for="todo_done_${todoCounter}">Done ${todoCounter}</label>
    <input id="todo_done_${todoCounter}" type="checkbox" checked>
    </td>
    </tr>`

    const tableBody = document.getElementById("todoContainer");
    tableBody.innerHTML += tableRowContent;

    document.getElementById("numberOfTasks").textContent = todoCounter;


    // wir könnten das Ui fragen, gib uns an wie viele Checkboxen es hat --> nicht so schön
    // css selector
    const checked = document.querySelectorAll('#todoContainer input[type="ckeckbox"]');
    document.getElementById("openTasks").textContent = todoCounter - checked.length;
    
}
