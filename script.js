// Live Clock Functionality
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    clockElement.innerHTML = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Back to Top Button Visibility
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Form Validation - Email
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle("dark-mode");

    // Change icon based on mode
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = "🌞";
    } else {
        darkModeToggle.innerHTML = "🌙";
    }
});
