var input = document.querySelector("#input");
var btn = document.querySelector("#btn");
var written_task = document.querySelector(".written_task");
var work_list = [];
btn.addEventListener("click", function () {
    if (input.value) {
        var task = input.value;
        work_list.push(task); //push to array
        //creats a new div for each task
        var taskdiv = document.createElement("div");
        taskdiv.classList = "bg-blue-400  h-10 m-5  flex rounded-3xl justify-center w-200 size-fit";
        taskdiv.textContent = "".concat(work_list.length, ". ==>").concat(task);
        written_task.appendChild(taskdiv);
        // create and append icon
        var deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-light fa-xmark cursor-pointer text-white";
        taskdiv.appendChild(deleteIcon);
        input.value = ""; // to clear the input box
    }
});
