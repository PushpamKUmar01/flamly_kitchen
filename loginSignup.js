document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Handle login logic here
            alert('Login successful!');
            window.location.href = 'index.html'; // Redirect to home page after login
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Handle signup logic here
            alert('Signup successful!');
            window.location.href = 'login.html'; // Redirect to login page after signup
        });
    }
});