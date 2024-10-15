export function ej82(){
    
    const input = document.getElementById("miInput");
    const deshabilitarBtn = document.getElementById("deshabilitarBtn");
    const habilitarBtn = document.getElementById("habilitarBtn");

    // Función para deshabilitar el campo de texto
    deshabilitarBtn.addEventListener("click", () => {
        input.disabled = true;
    });

    // Función para habilitar el campo de texto
    habilitarBtn.addEventListener("click", () => {
        input.disabled = false;
    });
}