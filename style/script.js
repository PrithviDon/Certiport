//login.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageElement = document.getElementById('message');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/data/user_data.json');
            const users = await response.json();

            const user = users.find(u => u.username === username);

            if (user && user.password === password) {
                messageElement.textContent = 'Login successful! Redirecting...';
                messageElement.style.color = 'green';

                history.replaceState(null, '', 'base.html');

                window.location.href = 'base.html';
                
            } else {
                messageElement.textContent = 'Invalid username or password.';
                messageElement.style.color = 'red';
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            messageElement.textContent = 'An error occurred. Please try again later.';
            messageElement.style.color = 'red';
        }
    });
});

//logout.js
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('nav-bar-logout');

    logoutButton.addEventListener('click', () => {
        
        history.replaceState(null, '', 'login.html');

        window.location.href = 'login.html';
    });
});