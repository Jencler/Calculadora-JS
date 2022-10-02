let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let suma = document.querySelector('#sumar');
let resta = document.querySelector('#restar');
let multi = document.querySelector('#multi');
let divi = document.querySelector('#divi');
let resp = document.querySelector('#respuesta');
let resetear =document.querySelector("#limpiar")
let formu=document.querySelector("#formulario");


function sumar(){
    let numero1 =Number(num1.value);
    let numero2 =Number(num2.value);
    let respuesta =numero1+numero2;
    
    resp.innerText = respuesta;
}

function restar(){
    let numero1 =Number(num1.value);
    let numero2 =Number(num2.value);
    let respuesta =numero1-numero2;
    
    resp.innerText = respuesta;
}

function multiplicar(){
    let numero1 =Number(num1.value);
    let numero2 =Number(num2.value);
    let respuesta =numero1*numero2;
    
    resp.innerText = respuesta;
}

function dividir(){
    let numero1 =Number(num1.value);
    let numero2 =Number(num2.value);
    let respuesta =Math.round(numero1/numero2);
    
    resp.innerText = respuesta;
}

function limpia(){
    formu.reset()
    resp.innerHTML=""
}


suma.addEventListener('click',sumar)
resta.addEventListener('click',restar)
multi.addEventListener('click',multiplicar)
divi.addEventListener('click',dividir)
resetear.addEventListener('click',limpia)

