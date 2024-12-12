// Theme toggler
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleTheme() {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.textContent = document.body.dataset.theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.dataset.theme);
}

// Initialize theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.dataset.theme = savedTheme;
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
} else if (prefersDarkScheme.matches) {
    document.body.dataset.theme = 'dark';
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', toggleTheme);

// Portfolio loader
const portfolioGrid = document.querySelector('.portfolio-grid');

// Simulate loading portfolio items
const portfolioItems = [
    { title: 'Project 1', description: 'Description 1' },
    { title: 'Project 2', description: 'Description 2' },
    { title: 'Project 3', description: 'Description 3' }
];

function loadPortfolio() {
    portfolioItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'portfolio-item';
        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        portfolioGrid.appendChild(itemElement);
    });
}

// Form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate form submission
    const formData = new FormData(contactForm);
    console.log('Form submitted:', Object.fromEntries(formData));
    contactForm.reset();
    alert('Message sent! (Simulation)');
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();
});