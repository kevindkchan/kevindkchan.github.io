document.addEventListener("DOMContentLoaded", () => {
    const gradientToggle = document.getElementById("gradient");

    gradientToggle.addEventListener("click", () => {
        document.body.classList.toggle("no-gradient");

        if (document.body.classList.contains("no-gradient")) {
            gradientToggle.textContent = "enable gradient text";
        } else {
            gradientToggle.textContent = "disable gradient text";
        }
    });
});
