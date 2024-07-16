//////////////////// BUTTON HOVER-EFFEKT ///////////////
//// Get all button elements
//const buttons = document.querySelectorAll('.button-container button');
//
//// Add event listeners to each button
//buttons.forEach(button => {
//    button.addEventListener('mouseover', () => {
//        // Change the button's background color
//        button.style.backgroundColor = 'violet';
//    });
//
//    button.addEventListener('mouseout', () => {
//        // Change the button's background color back to its original color
//        button.style.backgroundColor = '';
//    });
//});
//
//////////////////// BUTTON CLICK-EVENT ///////////////
//document.addEventListener('DOMContentLoaded', () => {
//    // Get button elements
//    const aboutMeButton = document.getElementById('aboutme');
//    const projekteButton = document.getElementById('projekte');
//    const gallerieButton = document.getElementById('gallerie');
//
//    // Add event listeners for navigation
//    aboutMeButton.addEventListener('click', () => {
//        window.location.href = 'website1.html';
//    });
//
//    projekteButton.addEventListener('click', () => {
//        window.location.href = 'website2.html';
//    });
//
//    gallerieButton.addEventListener('click', () => {
//        window.location.href = 'website3.html';
//    });
//});

//////////////// BUTTONS ///////////////////
function gotoAboutMe() {
    window.location.href = 'about.html';
}
function gotoProjects() {
    window.location.href = 'projects.html';
}
function gotoGallery() {
    window.location.href = 'gallery.html';
}
function gotoIndex() {
    window.location.href = 'index.html';
}
/////////////////////////////////////////////
function mouseOverAboutMe() {
    document.getElementById('aboutme').style.backgroundColor = 'violet';
}
function mouseOverProjects() {
    document.getElementById('projects').style.backgroundColor = 'violet';
}
function mouseOverGallery() {
    document.getElementById('gallery').style.backgroundColor = 'violet';
}
function mouseOverIndex() {
    document.getElementById('index').style.backgroundColor = 'violet';
}
///////////////////////////////////////////
function mouseOutAboutMe() {
    document.getElementById('aboutme').style.backgroundColor = '';
}
function mouseOutProjects() {
    document.getElementById('projects').style.backgroundColor = '';
}
function mouseOutGallery() {
    document.getElementById('gallery').style.backgroundColor = '';
}
function mouseOutIndex() {
    document.getElementById('index').style.backgroundColor = '';
}
/////////////////////////////////////////
