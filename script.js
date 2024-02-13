const body = document.body;
const toggle = document.querySelector("#toggle");
toggle.addEventListener("click",(e)=>{
    toggle.classList.toggle("active");
    body.classList.toggle("active");
})