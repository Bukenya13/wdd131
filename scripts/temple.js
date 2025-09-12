/* ===============================================
   JAVASCRIPT FOR PICTURE ALBUM
   This file makes the website interactive
   =============================================== */

// Wait for the page to fully load before running our code
document.addEventListener('DOMContentLoaded', function() {
    
    // ===============================================
    // DYNAMIC COPYRIGHT YEAR
    // ===============================================
    
    // Get the current year and put it in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // ===============================================
    // LAST MODIFIED DATE
    // ===============================================
    
    // Get when the page was last changed and show it in the footer
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;
    
    // ===============================================
    // HAMBURGER MENU FUNCTIONALITY
    // ===============================================
    
    // Find the hamburger button and menu in our HTML
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    // When someone clicks the hamburger button, open or close the menu
    hamburger.addEventListener('click', function() {
        // Toggle means: if it's there, remove it; if it's not there, add it
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // ===============================================
    // CLOSE MENU WHEN CLICKING A LINK
    // ===============================================
    
    // Find all the menu links
    const menuLinks = document.querySelectorAll('.nav-menu a');
    
    // For each menu link, add a click listener
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // When a link is clicked, close the mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // ===============================================
    // SMOOTH SCROLLING (BONUS FEATURE)
    // ===============================================
    
    // Make the page scroll smoothly when clicking menu links
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Get the target section from the link's href
            const targetId = this.getAttribute('href');
            
            // Only do smooth scrolling for links that start with #
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Stop the normal jump behavior
                
                const targetSection = document.querySelector(targetId);
                
                // If the section exists, scroll to it smoothly
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth', // Smooth scrolling
                        block: 'start' // Scroll to the top of the section
                    });
                }
            }
        });
    });
    
});

/* ===============================================
   EXPLANATION OF JAVASCRIPT CONCEPTS USED:
   
   1. document.addEventListener('DOMContentLoaded', ...) 
      - Waits for HTML to load before running code
   
   2. document.getElementById('id-name')
      - Finds an HTML element by its ID
   
   3. .textContent = "some text"
      - Changes the text inside an element
   
   4. .addEventListener('click', function() {...})
      - Runs code when someone clicks something
   
   5. .classList.toggle('class-name')
      - Adds a CSS class if it's not there, removes it if it is
   
   6. .forEach(function(item) {...})
      - Does something for each item in a list
   
   7. .getAttribute('href')
      - Gets the value of an HTML attribute
   
   8. .scrollIntoView()
      - Smoothly scrolls to show an element on screen
   =============================================== */