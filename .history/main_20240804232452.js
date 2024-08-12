document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', (event) => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            errorMessage.textContent = 'Please fill in both fields.';
            event.preventDefault();
        } else {
            errorMessage.textContent = '';
        }
    });
});
