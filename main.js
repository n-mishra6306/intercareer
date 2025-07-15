// Current year for footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Sample internship data (in a real scenario, this would come from an API or JSON file)
const internships = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "Tech Solutions Inc.",
        platform: "LinkedIn",
        category: "Engineering",
        date: "2023-06-15",
        excerpt: "Join our team as a Frontend Developer Intern and work with React.js on exciting projects.",
        image: "https://via.placeholder.com/600x400?text=Frontend+Intern",
        link: "post1.html"
    },
      {
        id: 2,
        title: "Frontend Developer Intern",
        company: "Tech Solutions Inc.",
        platform: "LinkedIn",
        category: "Engineering",
        date: "2023-06-15",
        excerpt: "Join our team as a Frontend Developer Intern and work with React.js on exciting projects.",
        image: "https://via.placeholder.com/600x400?text=Frontend+Intern",
        link: "post2.html"
    },
    {
        id: 3,
        title: "Marketing Intern",
        company: "Digital Marketing Agency",
        platform: "Internshala",
        category: "Marketing",
        date: "2023-06-14",
        excerpt: "Learn digital marketing strategies and assist in campaign management.",
        image: "https://via.placeholder.com/600x400?text=Marketing+Intern",
        link: "post3.html"
    },
    // Add more sample data as needed
];

// Function to render internship cards
function renderInternships(data) {
    const container = document.getElementById('postsContainer');
    container.innerHTML = '';
    
    if (data.length === 0) {
        container.innerHTML = '<p class="no-results">No internships found matching your criteria.</p>';
        return;
    }
    
    data.forEach(internship => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div class="post-image" style="background-image: url('${internship.image}')"></div>
            <div class="post-content">
                <h3 class="post-title">${internship.title}</h3>
                <div class="post-meta">
                    <span>${internship.company}</span>
                    <span>${internship.date}</span>
                </div>
                <p class="post-excerpt">${internship.excerpt}</p>
                <a href="${internship.link}" class="read-more">View Details</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderInternships(internships);
});
const themeSelector = document.getElementById('theme-selector');

    function applyTheme(mode) {
      document.body.classList.remove('light-mode', 'dark-mode');

      if (mode === 'light') {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      } else if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        // System theme
        localStorage.removeItem('theme');
      }
    }

    // Load saved theme preference
    window.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme') || 'system';
      themeSelector.value = savedTheme;
      applyTheme(savedTheme);
    });

    // On dropdown change
    themeSelector.addEventListener('change', () => {
      const selectedTheme = themeSelector.value;
      applyTheme(selectedTheme);
    });
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
