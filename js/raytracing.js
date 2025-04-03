document.addEventListener("DOMContentLoaded", () => {
    const gradientToggle = document.getElementById("gradient");
    const stamp = document.querySelector('img.logo.toggle');
    const stamp2 = document.querySelector('img.logo.stamp');
    const ualberta = document.querySelector('img.logo.uofa');
    const esports = document.querySelector('img.logo.esports');
    const invertLogos = document.querySelectorAll('img.invert');

    function updateGradientState() {
        const isNoGradient = document.body.classList.contains("no-gradient");

        // Swap image
        stamp.src = isNoGradient 
            ? "img/stamp2.png" 
            : "img/stampreflect.png";

        stamp2.src = isNoGradient 
            ? "img/stamp2.png" 
            : "img/stampreflect.png";

        ualberta.src = isNoGradient 
            ? "img/ualberta.png" 
            : "img/ualbertareflect.png";

        esports.src = isNoGradient 
            ? "img/esports.png" 
            : "img/esportsreflect.png";

        // Toggle shadow class
        document.body.classList.toggle("no-shadows", isNoGradient);

        // Toggle invert class
        invertLogos.forEach(img => {
            if (isNoGradient) {
                img.classList.add("invert");
            } else {
                img.classList.remove("invert");
            }
        });
    }

    // Initial setup
    updateGradientState();

    // On toggle
    gradientToggle.addEventListener("click", () => {
        document.body.classList.toggle("no-gradient");
        updateGradientState();
    });
});
