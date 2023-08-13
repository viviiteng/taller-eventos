let bttn=document.querySelector("onclick");
let container=document.querySelector("div");

container.addEventListener("click", (event) => {
    alert("Hola! Soy el div");
});

let btn = document.querySelector("button")
function saludo() {
    alert("Hola!");
}
btn.onclick= (event) => {
    event.stopPropagation();
    saludo()
};

