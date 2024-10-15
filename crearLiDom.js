export function crearLiDom(){
    // Seleccionamos todos los elementos <li> dentro del <ul>
    const elementos = document.querySelectorAll("#listaElementos li");

    elementos.forEach((elemento) => {
        elemento.addEventListener("click", () => {
            console.log(elemento.textContent);
        });
    });
}