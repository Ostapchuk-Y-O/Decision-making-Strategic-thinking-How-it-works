document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const toggleIcon = button.querySelector('.toggle-icon');

        if (content.style.display === 'block') {
            content.style.display = 'none';
            toggleIcon.textContent = '+';
        } else {
            content.style.display = 'block';
            toggleIcon.textContent = '-';
        }
    });
});
