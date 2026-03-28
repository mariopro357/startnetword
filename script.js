document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Intersection Observer
    const reveals = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal once
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Simple smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // CTA Button Click Tracker (Optional, but good for "Funnel" logic)
    const ctaButtons = document.querySelectorAll('.cta-button, .nav-cta');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('Redirecting to Telegram Bot...');
            // Tracking could be added here (e.g., Pixel or Analytics)
        });
    });
});
