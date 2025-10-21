//console.log(document.querySelector("h1"));
var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Nego nutritations");

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    console.log(pacientes[i]);

var tdPeso = pacientes.querySelector(".info-peso");
var peso = tdPeso.textContent;


var tdAltura = pacientes.querySelector("#primeiro-paciente");
var altura = tdAltura.textContent;


var tdImc = document.querySelector(".info-imc");


var pesoEhValido = true;
var alturaEhValido = true;

if (peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    pesoEhvalido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValido = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValido && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = "Inválido!";
}

else (alturaEhValido && pesoEhValido)
    tdImc.textContent = imc;


}
var nome = tdNome.textContent;
console.log(nome);