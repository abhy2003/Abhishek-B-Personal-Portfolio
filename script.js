document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate hamburger icon
        hamburger.classList.toggle('fa-bars');
        hamburger.classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.add('fa-bars');
            hamburger.classList.remove('fa-times');
        });
    });

    // Smooth scroll for anchor links (handling internal links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple reveal animation on scroll
    const sections = document.querySelectorAll('section');

    const revealSection = () => {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for reveal logic
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealSection);
    // Trigger once on load
    revealSection();

    // Form Submission Handling
    window.submitted = false;
    const contactForm = document.querySelector('.contact-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const iframe = document.getElementById('hidden_iframe');

    if (iframe) {
        iframe.addEventListener('load', () => {
            if (window.submitted) {
                successModal.style.display = 'flex';
                contactForm.reset();
                window.submitted = false;
            }
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            successModal.style.display = 'none';
        });
    }

    window.onclick = function (event) {
        if (event.target == successModal) {
            successModal.style.display = 'none';
        }
    }
});
