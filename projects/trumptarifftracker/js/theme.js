const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const root = document.documentElement;
const body = document.body;

function enableDarkMode() {
    root.classList.add("dark-mode");
    body.classList.add("dark-mode");
}

function disableDarkMode() {
    root.classList.remove("dark-mode");
    body.classList.remove("dark-mode");
}

if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark)) {
    enableDarkMode();
} else {
    disableDarkMode();
}