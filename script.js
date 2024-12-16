// Add this to your head section in index.html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID");

// Add this JavaScript file
function sendEmail(e) {
    e.preventDefault();

    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
}

// Add loading state to button
document.querySelector('.submit-btn').addEventListener('click', function() {
    this.innerHTML = 'Sending...';
    this.disabled = true;
    
    setTimeout(() => {
        this.innerHTML = 'Send Message';
        this.disabled = false;
    }, 2000);
});

// Enhanced TIMMY Animation
const animateTimmy = () => {
    const timmyContainer = document.querySelector('.animated-timmy');
    const letters = 'TIMMY'.split('');
    
    // Clear existing content
    timmyContainer.innerHTML = '';
    
    // Create and animate each letter
    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.2}s`;
        timmyContainer.appendChild(span);
    });
};

// Rotating Titles
const titles = [
    'Storyteller',
    'Brand Strategist',
    'Arsenal Fan',
    'Concept Developer'
];

let currentIndex = 0;
const rotatingText = document.querySelector('.rotating-text');

const updateTitle = () => {
    rotatingText.style.opacity = '0';
    setTimeout(() => {
        rotatingText.textContent = titles[currentIndex];
        rotatingText.style.opacity = '1';
        currentIndex = (currentIndex + 1) % titles.length;
    }, 500);
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateTimmy();
    updateTitle();
    setInterval(updateTitle, 3000);
}); 