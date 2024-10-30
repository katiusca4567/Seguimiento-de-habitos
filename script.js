// Función para mostrar el panel de registro
function showRegister() {
    document.getElementById('login-panel').classList.add('hidden');
    document.getElementById('register-panel').classList.remove('hidden');
}

// Función para mostrar el panel de login
function showLogin() {
    document.getElementById('register-panel').classList.add('hidden');
    document.getElementById('login-panel').classList.remove('hidden');
}

// Validación de login 
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('¡Login exitoso!');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}
