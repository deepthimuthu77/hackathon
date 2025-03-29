document.addEventListener("DOMContentLoaded", function() {
    // Search functionality
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    
    function performSearch() {
        const searchTerm = searchBar.value.toLowerCase();
        const postCards = document.querySelectorAll('.opportunity-card'); // Correct selector

        postCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            
            card.style.display = (title.includes(searchTerm) || content.includes(searchTerm)) ? 'block' : 'none';
        });
    }
    
    searchBar.addEventListener('keyup', performSearch);
    searchButton.addEventListener('click', performSearch);

    // Filter functionality
    document.querySelector('.apply-filters').addEventListener('click', function() {
        alert('Filters applied!');
    });
});
            