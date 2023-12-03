// This script will handle the sliding animation of the text
const slideTextElements = document.querySelectorAll('.slide-text');

window.addEventListener('load', () => {
    slideTextElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
        }, index * 300);
    });
});
