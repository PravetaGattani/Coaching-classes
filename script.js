// Form submission popup
const form = document.getElementById('registrationForm');
const popup = document.getElementById('popup');

form.addEventListener('submit', function(e) {
e.preventDefault();
popup.style.display = 'block';
setTimeout(() => {
popup.style.display = 'none';
form.reset();
}, 3000);
});

// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('nav a');

for (let link of navLinks) {
link.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
document.querySelector(targetId).scrollIntoView({
behavior: 'smooth'
});
});
}

// Highlight active link while scrolling
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
if (pageYOffset >= sectionTop) {
current = section.getAttribute('id');
}
});

navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === '#' + current) {
link.classList.add('active');
}
});
});

// Fade-in animation
const faders = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
faders.forEach(section => {
const sectionTop = section.getBoundingClientRect().top;
const windowHeight = window.innerHeight;
if (sectionTop < windowHeight - 100) {
section.classList.add('visible');
}
});
});
