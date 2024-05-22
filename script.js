document.addEventListener('DOMContentLoaded', () => {
    const descriptions = document.querySelectorAll('.description');

    descriptions.forEach(description => {
        description.innerHTML = description.textContent;
    });
});
