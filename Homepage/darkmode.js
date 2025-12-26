function toggleDarkMode() {
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";

    setTimeout(() => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem("mashtify-dark", isDark);
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.pointerEvents = "none";
        }, 600);
    }, 300);
}

window.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem("mashtify-dark") === "true";
    if (isDark) document.body.classList.add("dark-mode");
    if (!document.getElementById('overlay')) {
        const overlay = document.createElement('div');
        overlay.id = "overlay";
        document.body.appendChild(overlay);
    }
});