//Array to Keep List of To Do Tasks
toDoList = [];
display_toDoList();
function addTo_toDoList(){
    //from document we are selecting the value inside text input box having ID 'input-box'
    let toDoItem = document.querySelector('#input-box').value;
    let toDoDate = document.querySelector('#input-date').value;
    let toDOTime = document.querySelector('#input-time').value;

    let everyListObject = {item: toDoItem, 
                           date: toDoDate,
                           time: toDOTime
                          };

    //on every click adding it to the Array of to Do List
    toDoList.push(everyListObject);
     console.log(toDoList);
     display_toDoList();
}

function display_toDoList(){
    let displayItems = document.querySelector('#toDoList-container')
    let newHTML = ''; //the entire new html will be refreshed
     for(let i=0; i<toDoList.length; i++){
        //newHTML element is being modified everytime enirely and due to for loop all elements are added again
        newHTML+= 
        `<div>
            <span style="margin-right: 100px;">${toDoList[i].item}</span> 
             <span style="margin-right: 100px;">${toDoList[i].date}</span> 
             <span style="margin-right: 100px;">${toDoList[i].time}</span>  
             <button id="delete-button" onclick = 
             toDoList.splice (${i},1);
             display_toDoList();"
             >Delete</button> 
             <br> 
        </div>`; 
     }
     //the div is being updated with newHTML on every Addition
     displayItems.innerHTML = newHTML;
}