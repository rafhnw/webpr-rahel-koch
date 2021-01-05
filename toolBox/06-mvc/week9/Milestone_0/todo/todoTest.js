// requires todo.js
// requires /util/test.js

test("todo-crud", assert => {

    // setup
    todoContainer = document.createElement("div");
    numberOfTasks = document.createElement("span");
    numberOfTasks.innerText = '0';
    openTasks = document.createElement("span");
    openTasks.innerText = '0';

    // rufen das auf, ist in todo.js drin --> muss implementiert werden
    startTodo(todoContainer, numberOfTasks, openTasks);

    // merken sich constante, wieviele elemente haben wir in einer Zeile (checkbox, textbox)
    const elementsPerRow = 2;

    assert.equals(todoContainer.children.length, 0*elementsPerRow); // darf nichts drin sein (keine children)
    assert.equals(numberOfTasks.innerText, '0'); // muss auch null sein
    assert.equals(openTasks.innerText, '0');

    addTodo();

    // überprüfen, dass addTodo() funktioniert hat
    assert.equals(todoContainer.children.length, 1*elementsPerRow);
    assert.equals(numberOfTasks.innerText, '1');
    assert.equals(openTasks.innerText, '1');

    addTodo();

    assert.equals(todoContainer.children.length, 2*elementsPerRow);
    assert.equals(numberOfTasks.innerText, '2');
    assert.equals(openTasks.innerText, '2');

    const firstCheckbox = todoContainer.querySelectorAll("input[type=checkbox]")[0]; // holen und eine checkbox raus
    assert.equals(firstCheckbox.checked, false);

    firstCheckbox.click(); // wenn man auf checkbox draufklickt

    assert.equals(firstCheckbox.checked, true);

    assert.equals(numberOfTasks.innerText, '2');
    assert.equals(openTasks.innerText, '1');

    // add a test for the deletion of a todo-item

});