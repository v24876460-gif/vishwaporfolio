// Simple fade-in animation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 100){
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        } else {
            section.style.opacity = 0;
            section.style.transform = "translateY(50px)";
        }
    });
});
