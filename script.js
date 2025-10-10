var input = document.querySelector("#input");
var btn = document.querySelector("#btn");
var written_task = document.querySelector(".written_task");
var work_list = [];
btn.addEventListener("click", function () {
    if (input.value) {
        var task = input.value;
        work_list.push(task); //push to array
        //creats a new div for each task
        var taskdiv_1 = document.createElement("div");
        taskdiv_1.classList = "bg-blue-400  h-10 m-5  flex rounded-3xl justify-center w-200 size-fit";
        taskdiv_1.textContent = "".concat(work_list.length, ". ==>").concat(task);
        //cross icon
        var crossIcon = document.createElement("i");
        crossIcon.className = "fa-solid fa-xmark pl-5";
        crossIcon.style.cursor = "pointer";
        written_task.appendChild(taskdiv_1); //append new task
        taskdiv_1.appendChild(crossIcon); //append cross icon
        crossIcon.addEventListener("click", function () {
            taskdiv_1.remove();
        });
        input.value = ""; // to clear the input box
    }
});
