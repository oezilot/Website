////////////////// BUTTON HOVER-EFFEKT ///////////////
// Get all button elements
const buttons = document.querySelectorAll('.button-container button');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        // Change the button's background color
        button.style.backgroundColor = 'violet';
    });

    button.addEventListener('mouseout', () => {
        // Change the button's background color back to its original color
        button.style.backgroundColor = '';
    });
});

////////////////// BUTTON CLICK-EVENT ///////////////
document.addEventListener('DOMContentLoaded', () => {
    // Get button elements
    const aboutMeButton = document.getElementById('aboutme');
    const projekteButton = document.getElementById('projekte');
    const gallerieButton = document.getElementById('gallerie');

    // Add event listeners for navigation
    aboutMeButton.addEventListener('click', () => {
        window.location.href = 'website1.html';
    });

    projekteButton.addEventListener('click', () => {
        window.location.href = 'website2.html';
    });

    gallerieButton.addEventListener('click', () => {
        window.location.href = 'website3.html';
    });
});

////////////////// TABELLENGRÖSSEN ANPASSEN ///////////////

