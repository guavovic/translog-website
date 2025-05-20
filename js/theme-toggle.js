const toggleButton = document.getElementById("toggle-theme");

function updateThemeIcon() {
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon();
});

// Aplicar o tema salvo
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
    updateThemeIcon();
});