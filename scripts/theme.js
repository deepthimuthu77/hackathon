document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Ensure button exists before proceeding
    if (!toggleButton) {
        console.error("Theme toggle button not found!");
        return;
    }

    // Function to apply the theme
    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark-mode");
            toggleButton.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-mode");
            toggleButton.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    }

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Toggle theme on button click
    toggleButton.addEventListener("click", function () {
        const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
        applyTheme(newTheme);
    });
});
