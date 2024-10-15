export function conPrompt(){
    //Ejercicio 1.3
    let nombre= prompt('Cual es tu nombre?');
    console.log('Hola, ' +nombre+ '!')

    //Ejercicio 2.2
    let isPar = prompt('Ingrese un numero y te dire si es par o no')

    if(isPar % 2 ==0){
    console.log("El numero " + isPar + ", es par")
    }else{
    console.log("El numero " + isPar + ", es impar")
    }


    //Ejercio 3.2
    let number;
    do{
    number = prompt("Ingrese un numero mayor a 100");
    }while(number <=100);

    console.log("Ingresaste un numero mayor a 100: "+ number);  
}