// Function to toggle the visibility of the 'to-top' button
const toggleToTopButton = () => {
    const toTopButton = document.querySelector('.to-top');
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    toTopButton.style.display = scrollPosition > 100 ? "flex" : "none";
};

// Event listener for scroll event
window.addEventListener('scroll', toggleToTopButton);

// Initially hide the button in case of immediate scroll position greater than 100
toggleToTopButton();

/* Pico Theme Switcher and JavaScript */

// Initializing theme switcher
const themeToggleButton = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

// Function to apply the chosen theme
function applyTheme(theme) {
    // Set the theme attribute on the HTML element
    document.documentElement.setAttribute("data-theme", theme);

    // Update the icons based on the current theme
    if (theme === "dark") {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline-block";
    } else {
    moonIcon.style.display = "inline-block";
    sunIcon.style.display = "none";
    }

    // Store the theme in localStorage
    window.localStorage.setItem("theme", theme);
}

// Get the theme from localStorage, or default to the system preference
function loadTheme() {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Default to system preference if no theme is stored
    if (storedTheme) {
    applyTheme(storedTheme);
    } else {
    applyTheme(prefersDarkScheme ? "dark" : "light");
    }
}

// Initialize theme on page load
loadTheme();

// Toggle theme when the theme button is clicked
themeToggleButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Get the current theme and toggle it
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
});