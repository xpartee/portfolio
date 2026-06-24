// Strict Active Link Highlighting during scrolling
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section.page');
    const navLinks = document.querySelectorAll('.sidebar ul li a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Checks if current scroll view matches the page boundary
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});
