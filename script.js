// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
const toggleMenu = document.querySelector('.toggle-menu');
const mobileMenu = document.querySelector('.mobile-menu');

toggleMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Show/hide project details
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(item => {
    const projectDetails = item.querySelector('.project-details');
    const viewDetailsBtn = item.querySelector('.view-details-btn');

    viewDetailsBtn.addEventListener('click', () => {
        projectDetails.classList.toggle('open');
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const scrollElements = document.querySelectorAll('.scroll-animation');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelectorAll('.nav-menu li a');

    scrollElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        }
    });

    if (isElementInViewport(document.getElementById('header'))) {
        menuIcon.classList.remove('animate');
        navLinks.forEach(link => link.classList.remove('animate'));
    } else {
        menuIcon.classList.add('animate');
        navLinks.forEach(link => link.classList.add('animate'));
    }
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);



const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
