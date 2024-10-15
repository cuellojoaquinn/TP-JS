//Ejercicio 1.1: Configuracion de proyecto con Vite

import { cambiarColor } from "./cambiarColor";
import { conPrompt } from "./conPrompt";
import { convertirCtoF } from "./convertirCtoF";
import { crearLiDom } from "./crearLiDom";
import { ej82 } from "./ej82";
import { ej91 } from "./ej91";
import { esPar } from "./esPar";
import { formConAlerta } from "./formConAlerta";

//Ejercicio 1.2
let a=10;
let b=5;
let c = 7;
console.log('La suma de a y b es: '+ (a+b));

//Funciones con promp para que no moleste la alerta. Descomentar la siguiente linea para ver su ejecucion
//conPrompt()

//Ejercicio 2.1
let mayor;

if (a === b && b === c) {
  console.log("Los tres números son iguales: " + a);
} else {
  let mayor;

  if (a > b && a > c) {
    mayor = a;
  } else if (b > c) {
    mayor = b;
  } else {
    mayor = c;
  }

  console.log("El mayor de los tres números es: " + mayor);
}

//Ejercicio 3.1

let n = 10;

while (n >=0) {
  console.log(n);
  n--;
}

//Ejercicio 4.1
console.log("esPar? "+ esPar(10));
console.log("esPar? "+ esPar(5));

//Ejercicio 4.2

console.log(convertirCtoF(0));
console.log(convertirCtoF(-1*273,15));

//Ejercicio 5.1

let persona = {
  nombre:"Joaquin",
  edad:23,
  ciudad:"Bs"
}

function setCiudad(ciudad){
  persona.ciudad = ciudad;
  console.log(persona.ciudad)
}

setCiudad("Mendoza")


//Ejercicio 5.2

class Libro {
  constructor(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
  }
}

let l1 = new Libro("Sistemas Operativos", "Tanenbaum", 2008);

//w3school 
const d = new Date(); let cyear = d.getFullYear();

function isOld(libro){
  return cyear - libro.anio > 10;
}
console.log(isOld(l1)? 'antiguo' : 'reciente')

//Ejercicio 6.1
let input = [];
let init = 1;
for (let i = 0; i < 10; i++) {
  input[i] = init;
  init++;
}

function dot(array, multi) {
  let output = [];

  array.forEach((e, index) => {
    output[index] = e * multi;
  });
  
  console.log("Números multiplicados por * " + multi + ": " + output);
}

console.log("Números originales: " + input);
dot(input, 2);

//Ejercicio 6.2

let pares = [];

for (let i = 0; i <= 20; i++) {
  if(i % 2== 0){
    pares.push(i)
  }
}

console.log(pares);
pares = [];

//Ejercicio 7.1
cambiarColor();
//Ejercicio 7.2
formConAlerta();

//Ejercicio 8.1
crearLiDom();

//Ejercicio 8.2
ej82();

//Ejercio 9.1
ej91();