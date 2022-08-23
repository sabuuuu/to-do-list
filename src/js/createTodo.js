
import { clearForm } from './initDom';
import { saveLocal } from './localStorage';

let toDoArray = [];

export const createTodo = () => {
  

    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

 
    if (Title == "" || Description == "" || DueDate == "") {
        alert("Title, Description, and Due Date are required fields, please try again!");
        return;
    }

    const nodeListCheckList = document.querySelectorAll(".form-li");
    let _CheckListArray = [];
    for (let i = 0; i < nodeListCheckList.length; i++) {

       
        let strippedCheckList = nodeListCheckList[i].textContent.replace("\u00D7", '');
        _CheckListArray.push(strippedCheckList);
    }
    
    
    let CheckList = _CheckListArray.join(", ");

   
    toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
    
    saveLocal({ Title, Description, DueDate, Priority }, CheckList );

    clearForm();

    return { Title, Description, DueDate, Priority }, CheckList;

}
