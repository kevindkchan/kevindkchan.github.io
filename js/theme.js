const toggle = document.querySelector(".toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const favicon = document.getElementById("favicon");
const esports = document.getElementById("esports")
const root = document.documentElement;
const body = document.body;

function updateImg(isDark) {
    if (favicon) {
        favicon.href = isDark ? "img/favicon-dark.ico" : "img/favicon-light.ico";
    }

    if (esports) {
        esports.src = isDark ? "img/esports2.png" : "img/esports.png";
    }
}

function enableDarkMode() {
    root.classList.add("dark-mode");
    body.classList.add("dark-mode");
    updateImg(true);
}

function disableDarkMode() {
    root.classList.remove("dark-mode");
    body.classList.remove("dark-mode");
    updateImg(false);
}

if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark)) {
    enableDarkMode();
} else {
    disableDarkMode();
}

toggle.addEventListener("click", () => {
    const isDark = !root.classList.contains("dark-mode");
    if (isDark) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
});
