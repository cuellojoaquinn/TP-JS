export function cambiarColor(){
    const div = document.getElementById("ej71")

    const b = document.getElementById('toBlue');
    

    b.addEventListener("click", () => {

        if(div.classList.contains("toBlue")){
            div.classList.remove("toBlue")
        }else{
            div.classList.add('toBlue'); 
        }
    });
}