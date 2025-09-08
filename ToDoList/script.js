document.addEventListener('DOMContentLoaded' ()=>{

    const taskInput=document.querySelector("#task-input");
    const addTaskBtn=document.querySelector("#add-task-btn");
    const taskList=document.querySelector("#task-list");



    const addTask=(event)=>{
        const taskText=taskInput.value.trim(); 
        //trim() removes extra space from the start and the end of the strings 
        if(!taskText){
            return; 
            //stops the function right there and does nothig 
        }


        const li=document.createElement("li");
        li.textContent=taskText; //textContent sets plain text inside li
        taskList.appendChild(li);
        taskInput.value=''; //it effectively clears the input box
    }; 
    
    
    //Time=> 9:00


});