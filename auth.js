// auth.js
// Handles login state, navbar UI updates, and logout functionality

// auth.js
document.addEventListener("DOMContentLoaded", () => {

    const username = localStorage.getItem("username");

    const welcome = document.getElementById("welcomeUser");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");

    if (!welcome || !logoutBtn || !loginBtn || !registerBtn) return;

    if (username) {
        // Welcome message with permanent waving hand
        welcome.innerHTML = `שלום, ${username} <span class="wave-emoji">👋</span>`;
        welcome.style.display = "inline-block";

        logoutBtn.style.display = "inline-block";
        loginBtn.style.display = "none";
        registerBtn.style.display = "none";
    } else {
        welcome.style.display = "none";
        logoutBtn.style.display = "none";
        loginBtn.style.display = "inline-block";
        registerBtn.style.display = "inline-block";
    }
});

function logout() {
    localStorage.removeItem("username");
    window.location.href = "index.html";
}
