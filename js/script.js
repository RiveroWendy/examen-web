function inicio() {
    let formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", enviarForm);
}

function enviarForm(e) {
    e.preventDefault();
    obtenerNombre();
}

function obtenerNombre() {
    let inputNombre = document.getElementById("nombre").value;
    let separado = inputNombre.split(" ").length;
   
}

window.onload = inicio;