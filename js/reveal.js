document.addEventListener("DOMContentLoaded", () => {
    const revealTrigger = document.getElementById("reveal");

    let revealed = false;

    revealTrigger.addEventListener("click", () => {
        revealed = !revealed;
        document.querySelectorAll('.logo, .logo2').forEach(el => {
            if (revealed) {
                el.classList.add("revealed");
                revealTrigger.textContent = "hide all colors"
            } else {
                el.classList.remove("revealed");
                revealTrigger.textContent = "reveal all colors"
            }
        });
    });
});
