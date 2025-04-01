const toggle = document.querySelector(".toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const favicon = document.getElementById("favicon");

function updateFavicon(isDark) {
    if (favicon) {
        favicon.href = isDark ? "img/favicon-dark.ico" : "img/favicon-light.ico";
    }
}

if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark)) {
    document.body.classList.add("dark-mode");
    updateFavicon(true);
} else {
    updateFavicon(false);
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateFavicon(isDark);
});
