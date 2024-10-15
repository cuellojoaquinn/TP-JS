export function ej91(){
    document.addEventListener("DOMContentLoaded", function () {
        const emailForm = document.getElementById('emailForm');
        const emailInput = document.getElementById('email');
        const savedEmailDisplay = document.getElementById('savedEmail');
        const deleteButton = document.getElementById('deleteEmail');

        function displaySavedEmail() {
            const savedEmail = localStorage.getItem('email');
            if (savedEmail) {
                savedEmailDisplay.textContent = `Correo guardado: ${savedEmail}`;
                deleteButton.style.display = 'inline';
                console.log(savedEmail)
            } else {
                savedEmailDisplay.textContent = '';
                deleteButton.style.display = 'none';
            }
        }

        emailForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
            const email = emailInput.value;
            localStorage.setItem('email', email);
            displaySavedEmail();
            emailInput.value = ''; 
        });

        deleteButton.addEventListener('click', function () {
            localStorage.removeItem('email');
            displaySavedEmail();
        });

        // Mostrar el correo guardado al cargar la página
        displaySavedEmail();
    });
}