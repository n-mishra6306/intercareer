 // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link (for mobile)
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            });
        });
        
        // Make search bar expand on focus (desktop only)
        const searchInput = document.querySelector('.search-container input');
        if (window.innerWidth > 768) {
            searchInput.addEventListener('focus', () => {
                searchInput.style.width = '250px';
            });
            
            searchInput.addEventListener('blur', () => {
                searchInput.style.width = '200px';
            });
        }
