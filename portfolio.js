/* Navigation Menu Toggle */
let menuIcon = document.querySelector('.mobile-menu-btn');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('active'); // You might want to animate the icon itself if it was a hamburger
    navbar.classList.toggle('active');
};

/* Scroll Active Link Highlighting */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Stick header logic if needed, but position:fixed handles it in CSS usually

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* Remove toggle icon and navbar when clicking navbar link (scroll) */
    menuIcon.classList.remove('active');
    navbar.classList.remove('active');
};

/* Custom Cursor Logic */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows immediately
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with slight delay (animation provided by CSS transition)
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    // Animate outline on hoverable elements
    // This is optional if we want the cursor to grow over links
});

// Add hover active state to cursor over links
const links = document.querySelectorAll('a, button, .btn');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(0, 238, 255, 0.1)';
    });
    link.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});
