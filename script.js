// Main JavaScript file for MCP Test Repository

document.addEventListener('DOMContentLoaded', function() {
    console.log('MCP Test Repository script loaded');
    
    // Add current year to footer if it exists
    const footer = document.querySelector('footer');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `&copy; ${currentYear} MCP Test Repository`;
    }
    
    // Add click event to any buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    });
});