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
        


        written_task.appendChild(taskdiv);
        
        // create and append icon
let deleteIcon = document.createElement("i");
deleteIcon.className = "fa-light fa-xmark cursor-pointer text-white";
taskdiv.appendChild(deleteIcon);



        input.value = "";// to clear the input box



    }

});





