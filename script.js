function openBookingModal() {
    document.getElementById('bookingModal').style.display = 'flex';
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    const welcomeOverlay = document.querySelector('.welcome-overlay');
    welcomeOverlay.addEventListener('animationend', () => {
        welcomeOverlay.style.display = 'none';
    });
});

const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        this.style.transform = 'translateY(-10px) scale(0.95)';
        setTimeout(() => { this.style.transform = ''; }, 150);
    });

    icon.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

const footer = document.querySelector('.footer');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            footer.style.animation = 'fadeInUp 1s ease-out';
        }
    });
}, { threshold: 0.1 });

observer.observe(footer);

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
