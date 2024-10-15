export function formConAlerta() {

    const boton = document.querySelector("#alert2");
    
    boton.addEventListener("click", ()=>{
        const valorTxt = document.getElementById("textoI").value;
        alert("El valor ingresado es: " + valorTxt);
    })
}