let input = document.querySelector("#input") as HTMLInputElement;
let btn = document.querySelector("#btn") as HTMLButtonElement;
let written_task = document.querySelector(".written_task") as HTMLDivElement;


let work_list: string[] = [];



btn.addEventListener("click", () => {

    if (input.value) {
        let task: string | number = input.value;


        work_list.push(task); //push to array


        //creats a new div for each task
        let taskdiv = document.createElement("div");
        taskdiv.classList = "bg-blue-400  h-10 m-5  flex rounded-3xl justify-center w-200 size-fit";
        taskdiv.textContent = `${work_list.length}. ==>${task}`;
        


        //cross icon
        let crossIcon=document.createElement("i");
        crossIcon.className="fa-solid fa-xmark pl-5";
        crossIcon.style.cursor="pointer";


        written_task.appendChild(taskdiv);  //append new task
        taskdiv.appendChild(crossIcon); //append cross icon



        crossIcon.addEventListener("click",()=>{
            taskdiv.remove();
            
        });
        
        

        


        input.value = "";// to clear the input box



    }

});





