
import 'animate.css';
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // Close menu on outside click
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});