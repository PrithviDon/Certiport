document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('nav-bar-logout');

    logoutButton.addEventListener('click', () => {
        
        history.replaceState(null, '', 'login.html');

        window.location.href = 'login.html';
    });
});