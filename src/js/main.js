
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('translate-x-full');
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

const themeToggle = document.querySelectorAll('.themeToggle');


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

themeToggle.forEach((button) => {
    button.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme',
            document.documentElement.classList.contains('dark') ? 'dark' : 'light'
        );
    });
});


//npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch