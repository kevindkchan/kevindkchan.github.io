const dateElement = document.getElementById('date');

if (dateElement) {
    const modified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatted = modified.toLocaleDateString(undefined, options);
    dateElement.textContent = formatted;
}
