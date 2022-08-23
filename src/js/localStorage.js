import { displayTodo } from './initDom';

export function saveLocal({ Title, Description, DueDate, Priority }, CheckList) {

    console.log("Saving object to local storage....");
    localStorage.setItem("Title", document.getElementById("Title").value);
    localStorage.setItem("Description", document.getElementById("Description").value);
    localStorage.setItem("DueDate", document.getElementById("DueDate").value);
    localStorage.setItem("Priority", document.getElementById("Priority").value);
    localStorage.setItem("CheckList", CheckList);
    displayTodo();
    return { Title, Description, DueDate, Priority }, CheckList;

}
