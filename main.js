// Initialize Lucide Icons
lucide.createIcons();

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out'
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(10, 25, 47, 0.95)';
    } else {
        header.style.padding = '0';
        header.style.background = 'rgba(10, 25, 47, 0.85)';
    }
});

// Mobile menu toggle (Basic)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
mobileMenuBtn.addEventListener('click', () => {
    alert('Mobile menu functionality can be added here. Currently focusing on premium desktop experience.');
});

// Form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            phone: contactForm.querySelector('input[type="tel"]').value,
            message: contactForm.querySelector('textarea').value
        };
        
        console.log('Form Submission:', formData);
        
        // Success feedback
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Message Sent! <i data-lucide="check"></i>';
        lucide.createIcons();
        btn.style.background = '#25d366';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            lucide.createIcons();
            contactForm.reset();
        }, 3000);
    });
}

// Stats counter animation (Basic)
const stats = document.querySelectorAll('.stat-num');
const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.innerText);
        let current = 0;
        const increment = target / 50;
        const update = () => {
            if (current < target) {
                current += increment;
                stat.innerText = Math.ceil(current) + (stat.innerText.includes('+') ? '+' : '');
                setTimeout(update, 20);
            } else {
                stat.innerText = target + (stat.innerText.includes('C') ? 'C' : (target > 100 ? '+' : ''));
                if(target === 24) stat.innerText = "24/7";
            }
        };
        update();
    });
};

// Trigger stats animation when in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-grid');
if (statsSection) observer.observe(statsSection);
