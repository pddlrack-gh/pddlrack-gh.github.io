document.addEventListener('DOMContentLoaded', () => {
    // Select all individual list item tabs
    const tabs = document.querySelectorAll('.nav-item');
    // Select all the page content blocks
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            // Prevent standard anchor links from resetting the page viewport
            e.preventDefault();

            // 1. Manage Navigation Highlights
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // 2. Manage Content Switching
            contents.forEach(content => content.classList.remove('active-content'));

            // Match the selected "data-tab" value to the respective section ID 
            const targetTab = this.getAttribute('data-tab');
            const targetContent = document.getElementById(`content-${targetTab}`);
            
            if (targetContent) {
                targetContent.classList.add('active-content');
            }
        });
    });
});
