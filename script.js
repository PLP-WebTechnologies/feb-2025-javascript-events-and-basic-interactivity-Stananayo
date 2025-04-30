// 1. Event Handling
const button = document.getElementById('interactiveButton');
const welcomeMessage = document.getElementById('welcomeMessage');
let longPressTimer;

button.addEventListener('click', () => {
    button.textContent = 'You clicked me!';
    button.style.backgroundColor = 'lightgreen';
});

button.addEventListener('dblclick', () => {
    // Display the welcome message and make it visible
    welcomeMessage.style.display = 'block';
    setTimeout(() => {
        welcomeMessage.style.display = 'none';
    }, 3000);
});
// Detecting long press
button.addEventListener('mousedown', () => {
    longPressTimer = setTimeout(() => {
        alert('Long press detected - This is a secret action!');
    }, 800);

    welcomeMessage.style.display = 'block';
    setTimeout(() => {
        welcomeMessage.style.display = 'none';
    }, 3000);
});
// Clear the timer on mouseup
button.addEventListener('mouseup', () => {
    clearTimeout(longPressTimer);
});
// Detecting hover
button.addEventListener('mouseover', () => {
    button.style.color = 'blue';
});
button.addEventListener('mouseout', () => {
    button.style.color = '';
});

// 2. Image Slideshow
let slideIndex = 0;
showSlides(); // Initial call to show slides

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n - 1; // Adjust to show the next image
    if (slideIndex < 0) {
        slideIndex = document.getElementsByClassName("mySlides").length - 1;
    } else if (slideIndex >= document.getElementsByClassName("mySlides").length) {
        slideIndex = 0;
    }
    showSlides();
}

// 3. Tab Functionality with Animation
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        tabContents.forEach(content => {
            content.style.display = 'none'; // Hide all tab content
        });

        const tabId = link.dataset.tab;
        const selectedTab = document.getElementById(tabId);
        selectedTab.style.display = 'block'; // Show the selected tab

        // Add CSS animation class
        selectedTab.classList.add('fade-in');

        // Remove the fade-in class after animation completes
        setTimeout(() => {
            selectedTab.classList.remove('fade-in');
        }, 500); // Time matching the CSS animation duration
    });
});

// 4. Form Validation
const form = document.getElementById('validationForm');
const emailInput = form.email;
const passwordInput = form.password;

emailInput.addEventListener('input', () => {
    const emailFeedback = document.getElementById('emailFeedback');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailInput.value.match(emailPattern)) {
        emailFeedback.textContent = 'Valid email address!';
        emailFeedback.style.color = 'green';
    } else {
        emailFeedback.textContent = 'Please enter a valid email address.';
        emailFeedback.style.color = 'red';
    }
});

passwordInput.addEventListener('input', () => {
    const passwordFeedback = document.getElementById('passwordFeedback');

    if (passwordInput.value.length >= 8) {
        passwordFeedback.textContent = 'Password is strong.';
        passwordFeedback.style.color = 'green';
    } else {
        passwordFeedback.textContent = 'Password must be at least 8 characters long.';
        passwordFeedback.style.color = 'red';
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    const email = emailInput.value;
    const password = passwordInput.value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address!');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        return;
    }

    alert('Form submitted successfully!');
});