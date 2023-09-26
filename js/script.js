function inicio() {
    let formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", enviarForm);

    let cobertura = document.querySelector("#cobertura");
    cobertura.addEventListener("change", obtenerCobertura);
    let especialidad = document.querySelector("#especialidad");
    especialidad.addEventListener("change", obtenerEspecialidad);

}

function enviarForm(e) {
    e.preventDefault();
    modalPrueba();
    obtenerNombre();
}

function modalPrueba()
{
    let nombre = document.getElementById("nombre").value;
    console.log(nombre);
    const modalToggle = document.getElementById('exampleModal'); 
    
    if(nombre !=''){
        modalToggle.show(); 
    }
}

function obtenerNombre() {
    let inputNombre = document.getElementById("nombre").value;
    let separado = inputNombre.split(" ").length;
    if(separado !=2){
        console.log("Son estrictamente 2 palabras");

    }
}

function obtenerCobertura()
{
    let selectCobertura = document.getElementById("cobertura").value;
    let grupoCobertura = document.querySelector("#obra-grupo");
    if(selectCobertura == 2 || selectCobertura == 3)
    {
        grupoCobertura.classList.remove("d-none");
    }
    else{
        grupoCobertura.classList.add("d-none");
    }
}

function obtenerEspecialidad(){
    let especialidadInput = document.querySelector("#especialidad");
    let grupoMedico = document.querySelector("#grupo-medico");
    let medico = document.querySelector("#medico");
    let traumatologia = document.querySelector('[data-medico="trauma"]');
    let alergia = document.querySelector('[data-medico="alergia"]');
    let neumo=document.querySelector('[data-medico="neumo"]')
    let especialidadValor = especialidadInput.value;
    for(let i = 0; i < medico.length;i++)
    {
        if (especialidadValor == 1) {
            grupoMedico.classList.remove("d-none");
            alergia.classList.remove("d-none");
            traumatologia.classList.add("d-none");
            neumo.classList.add("d-none");
           
        }
        else if (especialidadValor == 2) {
            grupoMedico.classList.remove("d-none");
            alergia.classList.add("d-none");
            traumatologia.classList.remove("d-none");
            neumo.classList.add("d-none");
           
        }
        else if (especialidadValor == 3) {
            grupoMedico.classList.remove("d-none");
            alergia.classList.add("d-none");
            traumatologia.classList.add("d-none");
            neumo.classList.remove("d-none");
            
        }
        else {
            grupoMedico.classList.add("d-none");
        }
    }
   
}

window.onload = inicio;