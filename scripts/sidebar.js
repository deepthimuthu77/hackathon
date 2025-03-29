document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.getElementById('sidebar-toggle');
    const menuTexts = document.querySelectorAll('.menu-text');
    
    // Toggle sidebar on logo click
    toggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        
        // Toggle menu text visibility
        menuTexts.forEach(text => {
            text.classList.toggle('hidden');
        });
        
        // Save state
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });
    
    // Check saved state on load
    if (localStorage.getItem('sidebarCollapsed') === 'true') {
        sidebar.classList.add('collapsed');
        menuTexts.forEach(text => {
            text.classList.add('hidden');
        });
    }
});