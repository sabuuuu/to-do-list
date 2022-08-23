import { createTodo } from './js/createTodo';
import { projectLoad } from './js/projectLoad';
import {displayDefault, displayForm, addItems, clearForm , displayTodo} from './js/initDom';
import './style.css';


projectLoad();

displayTodo();


let clickEvents = (function() {

    // Click event for displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayForm);

    // Click event for adding an item to the checklist on the form
    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItems);

    // Click event to clear the form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

    // Click event to submit a new todo form to project
    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createTodo);
    
})();