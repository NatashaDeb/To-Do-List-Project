//Array to Keep List of To Do Tasks
toDoList = [
    // { //test cases
    //     item: 'Natasha',
    //     date:'2000-01-18',
    //     time: '08:10'
    // },

    // {
    //     item: 'Jash',
    //     date:'1999-06-06',
    //     time: '06:10'
    // }

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

    oneItemObj ={ item:toDoItem, 
                  date:toDoDate, 
                  time:toDoTime};
    
    //on every click adding it to the Array of to Do List
    toDoList.push(oneItemObj);
    localStorage.setItem("items", JSON.stringify(toDoList)); // putting the list inside localStorage                
    //once they are assigned making them blank                
    toDoItem = '';
    toDoDate = '';
    toDoTime = '';

    

     display_toDoList();
}

function display_toDoList(){
    let displayItems = document.querySelector('#toDoList-container')
    let newHTML = ''; //the entire new html will be refreshed
       
    let existingList = JSON.parse(localStorage.getItem("items"));
    toDoList = [...existingList];
   console.log(toDoList);
   console.log(existingList);

        for(let i=0; i<existingList.length; i++){

         //   destructuring properties of objects
           let {item, date, time} = existingList[i];
   
           //newHTML element is being modified everytime enirely and due to for loop all elements are added again
           newHTML+= 
           `
                <span>${item}</span> 
                <span>${date}</span> 
                <span>${time}</span>  
                <button id="delete-button" onclick = "deleteFromList(${i});">Delete</button> 
           `; 
    }

     //the div is being updated with newHTML on every Addition
     displayItems.innerHTML = newHTML;
}

function deleteFromList(index){
    //it will delete from the toDolist array which is global in which we are adding items
    toDoList.splice (index,1);
    console.log(toDoList);
    console.log(index);
    //again newly the local storage will be set replacing the previous one
    localStorage.setItem("items", JSON.stringify(toDoList)); 
    display_toDoList();
}

