var input = document.querySelector("#input");
var btn = document.querySelector("#btn");
var written_task = document.querySelector(".written_task");
btn.addEventListener("click", function () {
    if (input.value) {
        var task = input.value;
        written_task.innerHTML = "<p class=\"bg-sky-400  h-10 m-5 flex justify-center\"> ==>".concat(input.value, "</p>");
        input.value = "";
    }
});
