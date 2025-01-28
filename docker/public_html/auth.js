// Clave de acceso y duración de sesión
const PASSWORD = 'tecnico1'; // Contraseña
const SESSION_DURATION = 40 * 60 * 1000; // Duración de sesión en milisegundos (1 minuto)

// Verificar si ya existe una sesión válida
document.addEventListener('DOMContentLoaded', () => {
    const session = localStorage.getItem('session');
    const sessionTime = localStorage.getItem('sessionTime');
    const now = new Date().getTime();

    if (!session || now - sessionTime >= SESSION_DURATION) {
        // Si la sesión no es válida, redirige al login
        redirectToLogin();
    } else {
        // Si está en el login y la sesión es válida, muestra el contenido principal
        if (isLoginPage()) {
            showMainContent();
        }
    }
});

// Redirigir al login
function redirectToLogin() {
    const indexPath = getRootPath() + 'index.html';
    if (!isLoginPage()) {
        window.location.href = indexPath;
    }
}

// Mostrar contenido principal
function showMainContent() {
    const loginElement = document.getElementById('login');
    const mainContentElement = document.getElementById('main-content');
    if (loginElement && mainContentElement) {
        loginElement.style.display = 'none';
        mainContentElement.style.display = 'block';
    }
}

// Validar contraseña y establecer sesión
function checkPassword() {
    const inputPassword = document.getElementById('password');
    const error = document.getElementById('error');

    if (inputPassword && inputPassword.value === PASSWORD) {
        localStorage.setItem('session', 'authenticated');
        localStorage.setItem('sessionTime', new Date().getTime());
        showMainContent();
    } else if (error) {
        error.style.display = 'block';
    }
}

// Mostrar pestañas
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach((tab) => tab.classList.remove('active'));
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
}

// Obtener la ruta relativa a la raíz
function getRootPath() {
    const currentPath = window.location.pathname;
    const depth = currentPath.split('/').length - 2; // Nivel de profundidad del archivo actual
    return '../'.repeat(depth); // Generar la ruta relativa
}

// Verificar si la página actual es el login
function isLoginPage() {
    return window.location.pathname.endsWith('index.html');
}
