/* ===============================================
   FILTERED TEMPLES JAVASCRIPT
   This file creates temple cards dynamically and handles filtering
   =============================================== */

// Temple data array with original 7 temples plus 3 additional temples
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Additional temples added by student (3 more as required)
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-exterior-1945138-wallpaper.jpg"
  },
  {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/1-3fd5e0bb7c5e1e1e7d2e1e1e1e1e1e1e1e1e1e1.jpg"
  }
];

// Global variables
let currentFilter = 'home';
const templeGrid = document.getElementById('temple-grid');
const filterTitle = document.getElementById('filter-title');
const templeCount = document.getElementById('temple-count');

// Wait for the page to fully load before running our code
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Filtered Temples JS loaded successfully');
    
    // Initialize the page
    initializePage();
    
    // Set up event listeners
    setupEventListeners();
    
    // Display all temples by default
    displayTemples(temples, 'All Temples');
});

/**
 * Initialize the page with footer content and default display
 */
function initializePage() {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Set last modified date in footer
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;
}

/**
 * Set up all event listeners for navigation and filtering
 */
function setupEventListeners() {
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Navigation filter buttons
    const navLinks = document.querySelectorAll('.nav-menu a[data-filter]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const filter = this.getAttribute('data-filter');
            handleFilterClick(filter, this);
            
            // Close mobile menu after selection
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/**
 * Handle filter button clicks
 * @param {string} filter - The filter type (home, old, new, large, small)
 * @param {Element} clickedLink - The clicked navigation link
 */
function handleFilterClick(filter, clickedLink) {
    // Update active state
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');
    
    // Filter and display temples
    currentFilter = filter;
    const filteredTemples = filterTemples(filter);
    const filterName = getFilterDisplayName(filter);
    
    displayTemples(filteredTemples, filterName);
}

/**
 * Filter temples based on the selected criteria
 * @param {string} filter - The filter type
 * @returns {Array} - Filtered array of temples
 */
function filterTemples(filter) {
    switch (filter) {
        case 'old':
            // Temples built before 1900
            return temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            
        case 'new':
            // Temples built after 2000
            return temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            
        case 'large':
            // Temples larger than 90,000 square feet
            return temples.filter(temple => temple.area > 90000);
            
        case 'small':
            // Temples smaller than 10,000 square feet
            return temples.filter(temple => temple.area < 10000);
            
        case 'home':
        default:
            // Display all temples
            return temples;
    }
}

/**
 * Get display name for filter
 * @param {string} filter - The filter type
 * @returns {string} - Display name for the filter
 */
function getFilterDisplayName(filter) {
    switch (filter) {
        case 'old':
            return 'Historic Temples (Before 1900)';
        case 'new':
            return 'Modern Temples (After 2000)';
        case 'large':
            return 'Large Temples (Over 90,000 sq ft)';
        case 'small':
            return 'Small Temples (Under 10,000 sq ft)';
        case 'home':
        default:
            return 'All Temples';
    }
}

/**
 * Display temples in the grid
 * @param {Array} templesToDisplay - Array of temple objects to display
 * @param {string} title - Title for the filter status
 */
function displayTemples(templesToDisplay, title) {
    // Update filter status
    filterTitle.textContent = title;
    templeCount.textContent = `Showing ${templesToDisplay.length} ${templesToDisplay.length === 1 ? 'temple' : 'temples'}`;
    
    // Clear existing content
    templeGrid.innerHTML = '';
    
    // Check if there are temples to display
    if (templesToDisplay.length === 0) {
        templeGrid.innerHTML = `
            <div class="no-temples">
                <h3>No temples found</h3>
                <p>No temples match the selected criteria.</p>
            </div>
        `;
        return;
    }
    
    // Create and append temple cards
    templesToDisplay.forEach(temple => {
        const templeCard = createTempleCard(temple);
        templeGrid.appendChild(templeCard);
    });
}

/**
 * Create a temple card element
 * @param {Object} temple - Temple object with all properties
 * @returns {Element} - Complete temple card element
 */
function createTempleCard(temple) {
    // Create main card container
    const card = document.createElement('div');
    card.className = 'temple-card';
    
    // Format the dedication date for better display
    const dedicatedDate = formatDate(temple.dedicated);
    
    // Format the area with thousand separators
    const formattedArea = temple.area.toLocaleString();
    
    // Create card HTML content
    card.innerHTML = `
        <img 
            src="${temple.imageUrl}" 
            alt="${temple.templeName} Temple" 
            loading="lazy"
            onload="this.style.opacity='1'"
            style="opacity: 0; transition: opacity 0.3s ease;"
        >
        <div class="temple-info">
            <h3 class="temple-name">${temple.templeName}</h3>
            <div class="temple-details">
                <div class="temple-detail">
                    <span class="detail-label">Location:</span>
                    <span class="detail-value detail-location">${temple.location}</span>
                </div>
                <div class="temple-detail">
                    <span class="detail-label">Dedicated:</span>
                    <span class="detail-value detail-dedicated">${dedicatedDate}</span>
                </div>
                <div class="temple-detail">
                    <span class="detail-label">Area:</span>
                    <span class="detail-value detail-area">${formattedArea} sq ft</span>
                </div>
            </div>
        </div>
    `;
    
    // Add error handling for image loading
    const img = card.querySelector('img');
    img.addEventListener('error', function() {
        this.alt = `${temple.templeName} Temple - Image not available`;
        this.style.backgroundColor = '#f3f4f6';
        this.style.color = '#6b7280';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.style.fontSize = '14px';
        this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23f3f4f6"/%3E%3Ctext x="200" y="125" text-anchor="middle" fill="%236b7280" font-family="Arial, sans-serif" font-size="16"%3ETemple Image%3C/text%3E%3C/svg%3E';
    });
    
    return card;
}

/**
 * Format dedication date for better display
 * @param {string} dateString - Date in format "YYYY, Month, DD"
 * @returns {string} - Formatted date string
 */
function formatDate(dateString) {
    try {
        const parts = dateString.split(', ');
        if (parts.length === 3) {
            const year = parts[0];
            const month = parts[1];
            const day = parts[2];
            
            // Create a proper date string and format it
            const date = new Date(`${month} ${day}, ${year}`);
            
            if (!isNaN(date.getTime())) {
                return date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
        }
        
        // Fallback to original string if parsing fails
        return dateString;
    } catch (error) {
        console.warn('Error formatting date:', dateString, error);
        return dateString;
    }
}

/**
 * Utility function to get temple year for filtering
 * @param {string} dedicatedString - Dedication date string
 * @returns {number} - Year as number
 */
function getTempleYear(dedicatedString) {
    try {
        return parseInt(dedicatedString.split(',')[0]);
    } catch (error) {
        console.warn('Error parsing year from:', dedicatedString);
        return 0;
    }
}

/**
 * Search functionality (bonus feature)
 * This could be extended to add a search bar
 */
function searchTemples(query) {
    if (!query) return temples;
    
    const searchTerm = query.toLowerCase();
    return temples.filter(temple => 
        temple.templeName.toLowerCase().includes(searchTerm) ||
        temple.location.toLowerCase().includes(searchTerm)
    );
}

/**
 * Sort temples by different criteria (bonus feature)
 * @param {Array} templeArray - Array of temples to sort
 * @param {string} sortBy - Sort criteria (name, year, area)
 * @returns {Array} - Sorted array
 */
function sortTemples(templeArray, sortBy) {
    const sorted = [...templeArray];
    
    switch (sortBy) {
        case 'name':
            return sorted.sort((a, b) => a.templeName.localeCompare(b.templeName));
        case 'year':
            return sorted.sort((a, b) => getTempleYear(a.dedicated) - getTempleYear(b.dedicated));
        case 'area':
            return sorted.sort((a, b) => b.area - a.area);
        default:
            return sorted;
    }
}

/**
 * Performance optimization: Lazy loading intersection observer
 */
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        // Observe all lazy-loaded images
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Add analytics/tracking for filter usage (development helper)
 */
function trackFilterUsage(filter) {
    if (typeof console !== 'undefined') {
        console.log(`Filter used: ${filter} at ${new Date().toISOString()}`);
    }
    
    // Could be extended to send analytics data
    // This is helpful for understanding user behavior
}

/**
 * Keyboard navigation support for accessibility
 */
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape') {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
        
        // Number keys 1-5 for quick filter access
        if (e.key >= '1' && e.key <= '5' && !e.ctrlKey && !e.altKey) {
            const filters = ['home', 'old', 'new', 'large', 'small'];
            const filterIndex = parseInt(e.key) - 1;
            
            if (filters[filterIndex]) {
                const targetLink = document.querySelector(`[data-filter="${filters[filterIndex]}"]`);
                if (targetLink) {
                    targetLink.click();
                    targetLink.focus();
                }
            }
        }
    });
}

// Initialize additional features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupKeyboardNavigation();
    
    // Add keyboard shortcuts info to console for developers
    console.log('🎹 Keyboard Shortcuts Available:');
    console.log('1 - Show All Temples');
    console.log('2 - Show Old Temples');
    console.log('3 - Show New Temples'); 
    console.log('4 - Show Large Temples');
    console.log('5 - Show Small Temples');
    console.log('ESC - Close mobile menu');
});

// Export functions for potential testing (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        temples,
        filterTemples,
        createTempleCard,
        formatDate,
        getTempleYear,
        searchTemples,
        sortTemples
    };
}

console.log('Filtered Temples JavaScript loaded successfully! 🏛️');