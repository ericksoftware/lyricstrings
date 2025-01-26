function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.carousel-item').forEach((item) => {
    item.addEventListener('click', () => {
        const instrument = item.querySelector('h3').textContent;
        alert(`You selected: ${instrument}. Stay tuned for lessons!`);
    });
});
