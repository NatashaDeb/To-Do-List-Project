//Array to Keep List of To Do Tasks
toDoList = [];
display_toDoList();
function addTo_toDoList(){
    //from document we are selecting the value inside text input box having ID 'input-box'
    let toDoItem = document.querySelector('#input-box').value;

    //on every click adding it to the Array of to Do List
    toDoList.push(toDoItem);
     console.log(toDoList);
     display_toDoList();
}

function display_toDoList(){
    let displayItems = document.querySelector('#show-toDoList')
    displayItems.innerText = '';
     for(let i=0; i<toDoList.length; i++){
       displayItems.innerText += toDoList[i]+ '\n'; 
     }
}