// Product Array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product select options
function populateProducts() {
  const selectElement = document.getElementById('productName');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
}

// Update footer with current year and last modified date
function updateFooter() {
  const currentYearElement = document.getElementById('currentYear');
  const lastModifiedElement = document.getElementById('lastModified');

  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
  }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  populateProducts();
  updateFooter();
});
