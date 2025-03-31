const toggle = document.querySelector(".toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark)) {
    document.body.classList.add("dark-mode");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});
