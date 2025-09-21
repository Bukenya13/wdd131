// JavaScript for Madagascar Country Page
// Author: Rubia Magdelena Francesco
// Purpose: Handle dynamic content and wind chill calculation

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    setCurrentYear();
    
    // Set last modified date in footer
    setLastModified();
    
    // Calculate and display wind chill
    displayWindChill();
});

/**
 * Sets the current year in the footer
 */
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentyear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
}

/**
 * Sets the last modified date in the footer
 */
function setLastModified() {
    const lastModified = document.lastModified;
    const modifiedElement = document.getElementById('lastmodified');
    if (modifiedElement) {
        modifiedElement.textContent = lastModified;
    }
}

/**
 * Displays the wind chill factor in the weather section
 */
function displayWindChill() {
    // Static values for temperature and wind speed
    const temperature = 10; // °C
    const windSpeed = 5; // km/h
    
    // Calculate wind chill
    const windChillValue = calculateWindChill(temperature, windSpeed);
    
    // Display the result
    const windChillElement = document.getElementById('windchill');
    if (windChillElement) {
        windChillElement.textContent = windChillValue;
    }
}

/**
 * Calculates the wind chill factor using metric units
 * @param {number} temp - Temperature in Celsius
 * @param {number} wind - Wind speed in km/h
 * @returns {string} Wind chill value with units or "N/A"
 */
function calculateWindChill(temp, wind) {
    // Check if conditions are met for wind chill calculation (metric)
    // Temperature <= 10°C and Wind speed > 4.8 km/h
    if (temp <= 10 && wind > 4.8) {
        // Wind chill formula for metric units (°C and km/h)
        // Formula: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965T*V^0.16
        // Where T = temperature in °C, V = wind speed in km/h
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
        
        // Round to one decimal place and return with unit
        return Math.round(windChill * 10) / 10 + ' °C';
    } else {
        // Conditions not met for wind chill calculation
        return 'N/A';
    }
}

// Additional utility functions for future enhancements

/**
 * Formats a number with proper thousand separators
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
function formatNumber(num) {
    return num.toLocaleString();
}

/**
 * Converts temperature from Celsius to Fahrenheit
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} Temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

/**
 * Converts wind speed from km/h to mph
 * @param {number} kmh - Wind speed in km/h
 * @returns {number} Wind speed in mph
 */
function kmhToMph(kmh) {
    return kmh * 0.621371;
}