const create = document.querySelector(".create-btn .btn");
const formContainer = document.querySelector("#create");
const form = document.querySelector("#create form");
const close = document.querySelector(".row-1 #close");
create.addEventListener("click",
    () => {
        formContainer.style.display = "block";
    }
)
formContainer.addEventListener("click",
    () => {
        formContainer.style.display = "none";
    }, true);
form.addEventListener("click",
    () => {
        formContainer.style.display = "block";
    }, true);
close.addEventListener("click",
    () => {
        formContainer.style.display = "none";
    })