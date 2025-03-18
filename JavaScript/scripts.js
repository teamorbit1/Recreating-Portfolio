

// Makes the nav bar scroll with the page since it's just one page with the custom css class "sticky"
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
});

// Changes the websites theme from dark or light
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

// Checks the saved theme and loads it
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
});


// makes a back to top function
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Changes a greeting text based on time of day
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
}

document.getElementById('timeOfDayGreeting').textContent = getGreeting();