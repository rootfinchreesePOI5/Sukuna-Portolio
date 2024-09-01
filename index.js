// menu icon





document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById('head');
    const home = document.getElementById('home');
    const originalPadding = "5rem 8% 5rem"; // Set the original padding here

    document.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const maxScale = 1.5; // Maximum scale factor

        if (scrollPosition > 0) {
            // Adjusting header styles on scroll down
            nav.style.padding = "2rem";
            nav.style.width = "100%";
            nav.style.position = "fixed";
            nav.style.borderRadius = "0";
            nav.style.transition = "2s ease-in-out";
            nav.style.color = "black";
        } else {
            // Resetting header styles when scrolling back up
            nav.style.padding = originalPadding;
            nav.style.transition = "2s ease-in-out"; // Keep the transition for smooth effect
        }

        // Transition for the home section background
        home.style.transition = "1s ease-in-out";
        home.style.backgroundImage = "url('saturo.png')";

    });
});


 //sukuna scale 

window.addEventListener('scroll', function() {
    const homeSection = document.getElementById('home');
    const scrollPosition = window.scrollY; // Get the current scroll position
    const maxScale = 200; // Maximum percentage size of background

    // Adjust background size based on scroll position
    if (scrollPosition < homeSection.offsetHeight) {
        const scaleFactor = 85 + (scrollPosition / homeSection.offsetHeight) * maxScale;
        homeSection.style.backgroundSize = `${scaleFactor}%`;
        homeSection.style.backgroundPosition = 'center'; // Ensure the background scales from the center
    } else {
        homeSection.style.backgroundSize = '100%';
        homeSection.style.backgroundPosition = 'center'; // Reset the background position
    }
});



document.addEventListener("DOMContentLoaded", () => {
    // Function to start the count
    const startCount = (element) => {
        const target = +element.getAttribute('data-target');
        const duration = 1000; // Duration in milliseconds
        const increment = target / (duration / 10); // Calculate the increment for each frame

        let current = 0;

        const updateCount = () => {
            current += increment;

            if (current < target) {
                element.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = target + '+';
            }
        };

        updateCount();
    };

    // Intersection Observer to detect when the experience section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = document.querySelectorAll('.count');
                counters.forEach(counter => {
                    startCount(counter);
                });
                observer.disconnect(); // Stop observing once the animation has started
            }
        });
    }, { threshold: 0.5 });

    // Observe the experience section
    const experienceSection = document.querySelector('.experience');
    observer.observe(experienceSection);
});

// cursor
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('.link'); // Select all elements with class "link"

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            cursor.style.width = '80px';
            cursor.style.height = '80px';
            cursor.style.borderWidth = 'none';
        });

        link.addEventListener('mouseout', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.borderWidth = 'none';
        });
    });
});

