let input = document.querySelector("#input") as HTMLInputElement;
let btn = document.querySelector("#btn") as HTMLButtonElement;
let written_task=document.querySelector(".written_task");



btn.addEventListener("click", () => {

    if (input.value) {
        let task: string | number=input.value;
         
        written_task.innerHTML = `<p class="bg-sky-400  h-10 m-5 flex justify-center"> ==>${input.value}</p>`;

        input.value="";

    }

});





