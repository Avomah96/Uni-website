// JavaScript for Hero Image Slider
function heroSlider() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.hero img');
    const totalImages = images.length;

    function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add('active');
    }

    setInterval(changeImage, 3000);
}

heroSlider();

// Typing effect for hero content
const heroTitle = "Advance Science and Technology University College";
const heroMoto = "Innovating the Future of Education...";

function typeEffect(element, text, delay) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        }
    }
    typing();
}

function startNewsTicker() {
    var news = document.getElementById('news');
    if (news) {
        news.innerHTML += news.innerHTML;
    } else {
        console.error('Element with id "news" not found');
    }
}

window.onload = function() {
    typeEffect(document.getElementById('hero-title'), heroTitle, 100);
    setTimeout(() => typeEffect(document.getElementById('hero-moto'), heroMoto, 100), heroTitle.length * 100 + 500);
    startNewsTicker();
};

// Search functionality
var keywords = [
    { keyword: 'keyword1', url: 'page1.html' },
    { keyword: 'keyword2', url: 'page2.html' },
    { keyword: 'keyword3', url: 'page3.html' },
    { keyword: 'keyword4', url: 'page4.html' },
    { keyword: 'keyword5', url: 'page5.html' },
    { keyword: 'keyword6', url: 'page6.html' },
    // Add more keywords and URLs as needed
];

var searchBar = document.getElementById('search-bar');
var searchButton = document.getElementById('search-button');
var searchDropdown = document.getElementById('search-dropdown');

searchBar.addEventListener('input', function() {
    var query = searchBar.value.toLowerCase();

    // If the input is empty, clear the dropdown and exit the function
    if (query === '') {
        searchDropdown.innerHTML = '';
        return;
    }

    // Clear the dropdown
    searchDropdown.innerHTML = '';

    // Populate the dropdown with matching keywords
    for (var i = 0; i < keywords.length; i++) {
        if (keywords[i].keyword.startsWith(query)) {
            var option = document.createElement('a'); // Change this to 'a'
            option.textContent = keywords[i].keyword;
            option.href = keywords[i].url; // Set the href to the keyword's url

            searchDropdown.appendChild(option);
        }
    }

    // If no match is found, show a message in the dropdown
    if (searchDropdown.children.length === 0) {
        searchDropdown.textContent = 'No results found';
    }
});

// JavaScript for Testimonial Slider
function testimonialSlider() {
    let currentIndex = 0;
    let testimonials = document.querySelectorAll('.testimonial');

    // Show the first testimonial
    testimonials[currentIndex].style.display = 'block';
    testimonials[currentIndex].classList.add('active');

    function changeTestimonial() {
        // Hide the current testimonial
        testimonials[currentIndex].style.display = 'none';
        testimonials[currentIndex].classList.remove('active');
        // Calculate the index of the next testimonial
        currentIndex = (currentIndex + 1) % testimonials.length;
        // Show the next testimonial
        testimonials[currentIndex].style.display = 'block';
        testimonials[currentIndex].classList.add('active');
    }

    setInterval(changeTestimonial, 5000); // Change testimonial every 5 seconds

    document.getElementById('prev').addEventListener('click', function() {
        // Manually change to the previous testimonial
        clearInterval(interval); // Stop the automatic change
        changeTestimonial();
        interval = setInterval(changeTestimonial, 5000); // Restart the automatic change
    });

    document.getElementById('next').addEventListener('click', function() {
        // Manually change to the next testimonial
        clearInterval(interval); // Stop the automatic change
        changeTestimonial();
        interval = setInterval(changeTestimonial, 5000); // Restart the automatic change
    });
}

testimonialSlider();

