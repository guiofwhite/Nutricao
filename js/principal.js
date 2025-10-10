//console.log(document.querySelector("h1"));
var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Nego nutritations");

var paciente = document.querySelector("#primeiro-paciente");
var tdNome = document.querySelector(".info-nome");
var nome = tdNome.textContent;
console.log(nome);


var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(paciente);
console.log(tdPeso);

var tdAltura = document.querySelector("#primeiro-paciente");
var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

var tdImc = document.querySelector(".info-imc");
console.log(imc);

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000){
    console.log("Peso inválido");
    PesoEhvalido = false;
    tdImc.TextContent = "Peso inválido";
}

if (altura < 0 || altura > 3.00){
    console.log("Altura inválida");
    AlturaEhvalida = false;
    tdImc.TextContent = "Altura inválida";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura)
    tdImc.TextContent = "inválido";
}
