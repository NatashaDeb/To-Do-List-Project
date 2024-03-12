//Array to Keep List of To Do Tasks
toDoList = [
    {
        item: 'Natasha',
        date:'2000-01-18',
        time: '08:10'
    },

    {
        item: 'Jash',
        date:'1999-06-06',
        time: '06:10'
    }

];
display_toDoList();
function addTo_toDoList(){

    
    //from document we are selecting the value inside text input box having ID 'input-box'
    let itemElement = document.querySelector('#input-box');
    let dateElement = document.querySelector('#input-date');
    let timeElement = document.querySelector('#input-time');
      
    let toDoItem = itemElement.value;
    let toDoDate = dateElement.value;
    let toDoTime = timeElement.value;
    
    //on every click adding it to the Array of to Do List
    toDoList.push({ item:toDoItem, 
                    date:toDoDate, 
                    time:toDoTime});
    //once they are assigned making them blank                
    toDoItem = '';
    toDoDate = '';
    toDoTime = '';

     console.log(toDoList);
     display_toDoList();
}

function display_toDoList(){
    let displayItems = document.querySelector('#toDoList-container')
    let newHTML = ''; //the entire new html will be refreshed

     for(let i=0; i<toDoList.length; i++){
         //let item = toDoList[i].item
         //let date = toDoList[i].date
         //let time = toDoList[i].time
        //the above way is lengthy so instead easier way i,e by destructuring of properties of objects
        let {item, date, time} = toDoList[i];

        //newHTML element is being modified everytime enirely and due to for loop all elements are added again
        newHTML+= 
        `
             <span style="margin-right: 100px;">${item}</span> 
             <span style="margin-right: 100px;">${date}</span> 
             <span style="margin-right: 100px;">${time}</span>  
             <button id="delete-button" onclick = "
             toDoList.splice (${i},1);
             display_toDoList();"
             >Delete</button> 
        `; 
     }
     //the div is being updated with newHTML on every Addition
     displayItems.innerHTML = newHTML;
}