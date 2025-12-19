// auth.js - ניהול התחברות/התנתקות בכל האתר

document.addEventListener("DOMContentLoaded", () => {

    const username = localStorage.getItem("username");

    const welcome = document.getElementById("welcomeUser");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");

    // אם הדף לא מכיל את האלמנטים של הסרגל — לא עושים כלום
    if (!welcome || !logoutBtn || !loginBtn || !registerBtn) return;

    if (username) {
        // אם מחובר – הצגת שלום, שם המשתמש | התנתקות
        welcome.innerText = `שלום, ${username} `;
        welcome.style.display = "inline-block";

        logoutBtn.style.display = "inline-block";

        // הסתרת כפתורי התחברות/הרשמה
        loginBtn.style.display = "none";
        registerBtn.style.display = "none";
    }
});

// פונקציית התנתקות גלובלית
function logout() {
    localStorage.removeItem("username");
    window.location.href = "index.html";
}
