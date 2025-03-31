const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;

    const target = e.target;
    const isPointerTarget = target.closest("a, button, input, textarea, select, label, .toggle");

    if (isPointerTarget) {
        cursor.classList.add("hover");
    } else {
        cursor.classList.remove("hover");
    }
});
