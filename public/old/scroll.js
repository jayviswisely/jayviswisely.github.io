let sections = document.querySelectorAll('.home, .about, .projects, .contact')
let navLinks = document.querySelectorAll('nav ul li a')

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 65) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav ul li a[href*= ' + current + ']').classList.add('active');
    });
});