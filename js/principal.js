

//Calculadora do IMC
let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

let paciente = document.querySelector('#primeiro-paciente');

let tdPeso = paciente.querySelector('.info-peso');
let peso = tdPeso.textContent;

let tdAltura = paciente.querySelector('.info-altura');
let altura = tdAltura.textContent;

let tdImc = paciente.querySelector('.info-imc');


let pesoEhValido = true;
let alturaEhValido = true;

if (peso <= 0 || peso >= 1000) {
    console.log('peso invalido');
    pesoEhValido = false;
    tdImc.textContent = 'Peso invalido!'
}

if (altura <= 0 || altura >= 3.0) {
    console.log('altura invalida');
    alturaEhValido = false;
    tdImc.textContent = 'Altura inválida!';
}
if (alturaEhValido === false && pesoEhValido === false) {
    console.log('Peso e altura invalidos!');
    alturaEhValido = false;
    tdImc.textContent = 'Peso e altura inválidos!';
}

if ( alturaEhValido && pesoEhValido) {
    let imc = peso / (altura * altura);
    tdImc.textContent = imc;
}