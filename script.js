const form = document.querySelector('form');
const successMessage = document.querySelector('#form');
form.addEventListener('submitt', (e) => {
    e.preventDefault();
    successMessage.classList.add('show');
    setTimeout(() => form.submit(), 2000);
} );