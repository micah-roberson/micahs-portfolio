// Get all elements with the class "experience-tab" and "experience-tab-content"
const tabs = document.querySelectorAll('.experience-tab');
const tabContents = document.querySelectorAll('.experience-tab-content');

// Function to switch between tabs and content
function openExperience(event, experienceName) {
    // Remove "active" class from all tabs and content
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add "active" class to the clicked tab
    event.currentTarget.classList.add('active');

    // Show the corresponding content
    const contentToShow = document.getElementById(experienceName);
    contentToShow.classList.add('active');
}

// Attach click event listeners to each tab
tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        openExperience(event, tab.dataset.target);
    });
});



// Add an event listener to toggle the "sticky" class on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

document.querySelector('.navbar-mobile').addEventListener('click', function () {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('show');
    this.classList.toggle('active');
});

const imageContainer = document.querySelector('.image-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');


let currentIndex = 0;

function showImage(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + 4) % 4;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % 4;
  showImage(currentIndex);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);