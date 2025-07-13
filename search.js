document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const platformFilter = document.getElementById('platformFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    
    function filterInternships() {
        const searchTerm = searchInput.value.toLowerCase();
        const platformValue = platformFilter.value;
        const categoryValue = categoryFilter.value;
        
        const filtered = internships.filter(internship => {
            const matchesSearch = internship.title.toLowerCase().includes(searchTerm) || 
                                 internship.company.toLowerCase().includes(searchTerm) ||
                                 internship.excerpt.toLowerCase().includes(searchTerm);
            
            const matchesPlatform = platformValue ? internship.platform === platformValue : true;
            const matchesCategory = categoryValue ? internship.category === categoryValue : true;
            
            return matchesSearch && matchesPlatform && matchesCategory;
        });
        
        renderInternships(filtered);
    }
    
    searchBtn.addEventListener('click', filterInternships);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') filterInternships();
    });
    platformFilter.addEventListener('change', filterInternships);
    categoryFilter.addEventListener('change', filterInternships);
});