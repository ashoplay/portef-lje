
    const gradients = [
        ['red', 'purple', 'blue'], // Red to purple to blue
        ['#ff7e5f', '#feb47b', '#ff512f'], // Peach to pink to red
        ['#43cea2', '#185a9d', '#6a3093'], // Green to blue to purple
        ['#6a3093', '#a044ff', '#f7971e'], // Purple to violet to orange
        ['#2980b9', '#2c3e50', '#e74c3c'], // Blue to dark blue to red
        ['#f6d365', '#fda085', '#ff5f6d'], // Light yellow to peach to coral
        ['#12c2e9', '#c471ed', '#f64f59'], // Cyan to violet to red
        ['#89fffd', '#ef32d9', '#edcefd'], // Aqua to magenta to lavender
        ['#ff9a8b', '#ff6a88', '#ff99ac'], // Soft pink to coral to pastel pink
        ['#00c3ff', '#ffff1c', '#ff5858'], // Cyan to yellow to red
        ['#00b09b', '#96c93d', '#ffdd00'], // Teal to green to yellow
        ['#ff6e7f', '#bfe9ff', '#00c6ff'], // Coral to light blue to cyan
        ['#06beb6', '#48b1bf', '#184e68'], // Aqua to teal to deep blue
        ['#d9a7c7', '#fffcdc', '#ffafbd'], // Lavender to cream to light pink
        ['#ff512f', '#dd2476', '#ff6f00'], // Red to magenta to orange
        ['#4b6cb7', '#182848', '#ff8008'], // Blue to dark blue to orange
        ['#f2994a', '#f2c94c', '#f9d423'], // Orange to yellow to golden yellow
        ['#e44d26', '#f16529', '#f9a825'], // Red to orange to yellow
        ['#ff9966', '#ff5e62', '#ff2a6d'], // Orange to coral to pink
        ['#00c6ff', '#0072ff', '#4a00e0'], // Light blue to blue to deep purple
        ['#fbc2eb', '#a6c1ee', '#84fab0'], // Pink to lavender to mint green
        ['#ff9a9e', '#fad0c4', '#fad0c4'], // Light pink to peach to pastel pink
        ['#12c2e9', '#c471ed', '#f7797d'], // Cyan to violet to soft coral
        ['#56ab2f', '#a8e063', '#d4fc79'], // Green to lime to yellow
        ['#2980b9', '#6dd5fa', '#ffffff'], // Blue to sky blue to white
        ['#ff7e5f', '#feb47b', '#fdd819'], // Peach to orange to yellow
        ['#4b79a1', '#283e51', '#f857a6'], // Blue to dark blue to magenta
        ['#36d1dc', '#5b86e5', '#8e44ad'], // Aqua to blue to purple
        ['#fc5c7d', '#6a82fb', '#00c9ff'], // Coral to violet to cyan
        ['#eacda3', '#d6ae7b', '#ffd700'], // Beige to bronze to gold
        ['#ffafbd', '#ffc3a0', '#ff512f'], // Pink to peach to red
        ['#d4fc79', '#96e6a1', '#00c9ff'], // Light green to mint to cyan
        ['#00f260', '#0575e6', '#021b79'], // Green to blue to navy
        ['#ff9966', '#ff5e62', '#2b5876'], // Orange to coral to dark blue
        ['#43e97b', '#38f9d7', '#6454f0'], // Green to aqua to indigo
        ['#6a3093', '#302b63', '#0f2027'], // Purple to dark purple to black
        ['#4ca1af', '#c4e0e5', '#fbd3e9'], // Teal to light blue to pastel pink
        ['#4568dc', '#b06ab3', '#f93b7a'], // Blue to violet to magenta
        ['#189bcc', 'pink', '#300adc'], // Blue to violet to magenta
        ['#ff0099', '#493240', '#f5a623'], // Pink to dark brown to orange
        ['#f5f7f9', '#c3cfe2', '#e0eafc'], // Light gray to blue to light blue
        ['#8e2de2', '#4a00e0', '#8e2de2'], // Purple to deep blue to purple
        ['#d6a4a1', '#e5b6d2', '#f4d1f9'], // Light coral to light pink to lavender
        ['#f39c12', '#e74c3c', '#9b59b6'], // Orange to red to purple
        ['#16a085', '#1f8a70', '#1f8a70'], // Teal to dark teal
        ['#f2d032', '#f87f3e', '#e74c3c'], // Yellow to orange to red
        ['#3498db', '#2ecc71', '#e74c3c'], // Blue to green to red
        ['#ff6f61', '#d7d1d0', '#ff9a8b'], // Coral to light gray to pink
        ['#1e90ff', '#ff6347', '#ff4500'], // Blue to tomato to orange red
        ['#fa7f6f', '#f08d59', '#d6d4f0'], // Light coral to orange to lavender
        ['#4a90e2', '#50e3c2', '#b8e986'], // Blue to teal to green
        ['#e67e22', '#f39c12', '#d35400'], // Orange to yellow to dark orange
        ['#bdc3c7', '#2c3e50', '#34495e'], // Gray to dark blue to dark gray
        ['#2980b9', '#8e44ad', '#e74c3c'], // Blue to purple to red
        ['#ff6b6b', '#f9cb40', '#2e86de'], // Red to yellow to blue
        ['#6a89cc', '#b8e994', '#ffb142'], // Blue to green to orange
        ['#ffb6b9', '#fae3d9', '#bbded6'], // Light pink to cream to mint
        ['#e84393', '#d63031', '#ff7675'], // Pink to red to coral
        ['#ffbe76', '#ff8c94', '#ff6f61'], // Orange to pink to coral
        ['#f0f0f0', '#f4f4f4', '#d9d9d9'], // Light gray shades
        ['#e67e22', '#f39c12', '#e74c3c'], // Orange to yellow to red
        ['#2ecc71', '#16a085', '#27ae60'], // Green shades
        ['#7f8c8d', '#95a5a6', '#bdc3c7'], // Gray shades
        ['#ff8c00', '#ff6347', '#e74c3c'], // Orange to tomato to red
        ['#ff6f61', '#f9cb40', '#2e86de'], // Coral to yellow to blue
        ['#d3d3d3', '#a9a9a9', '#808080'], // Light gray to dark gray shades
        ['#ff79c6', '#bd93f9', '#ff5555'], // Pink to purple to red
        ['#00bfae', '#00e676', '#b2ff59'], // Teal to green to lime
        ['#c4e538', '#4b9cd3', '#f6e6e8'], // Light green to blue to pink
        ['#ff9f00', '#ff6f00', '#d9534f'], // Yellow to orange to red
        ['#c4e538', '#39b54a', '#0079bf'], // Lime to green to blue
        ['#f5a623', '#f76c6c', '#d9534f'], // Orange to red to dark red
        ['#ee4d4d', '#f8b400', '#e77f7f'], // Red to orange to light red
        ['#3498db', '#2ecc71', '#e74c3c'], // Blue to green to red
        ['#e84393', '#d63031', '#ff7675'], // Pink to red to coral
        ['#ffb6b9', '#fae3d9', '#bbded6'], // Light pink to cream to mint
        ['#f6e58d', '#ffbe76', '#f0932b'], // Light yellow to orange to deep orange
        ['#55efc4', '#00b894', '#00cec9'], // Light teal to teal to cyan
        ['#ff6f61', '#f9cb40', '#2e86de'], // Coral to yellow to blue
        ['#ff6f61', '#d7d1d0', '#ff9a8b'], // Coral to light gray to pink
        ['#74b9ff', '#a29bfe', '#dfe6e9'], // Light blue to purple to gray
        ['#c0392b', '#e74c3c', '#ff6f61'], // Dark red to red to coral
        ['#ff7675', '#d63031', '#e84393'], // Coral to red to pink
        ['#f1c40f', '#e67e22', '#d35400'], // Yellow to orange to dark orange
        ['#2ecc71', '#27ae60', '#16a085'], // Green shades
        ['#ff9f00', '#ff6f00', '#d9534f'], // Orange to dark orange to red
        ['#f5a623', '#f76c6c', '#d9534f'], // Orange to red to dark red
        ['#9b59b6', '#8e44ad', '#6c5ce7'], // Purple shades
        ['#d5dbdb', '#f5f5f5', '#e0e0e0'], // Light gray shades
        ['#48dbfb', '#1dd1a1', '#feca57'], // Light blue to green to yellow
        ['#f79c42', '#e67e22', '#d35400'], // Orange to dark orange to brown
        ['#e84393', '#d63031', '#ff7675'], // Pink to red to coral
        ['#f8c291', '#e55039', '#d6323e'], // Light orange to dark orange to red
        ['#ffbe76', '#ff8c94', '#ff6f61'], // Orange to pink to coral
        ['#ff9a8b', '#ff6a88', '#ff99ac'], // Light pink to coral to pastel pink
        ['#e84393', '#d63031', '#ff7675'], // Pink to red to coral
        ['#ffb6b9', '#fae3d9', '#bbded6'], // Light pink to cream to mint
        ['#a29bfe', '#6c5ce7', '#00cec9'], // Purple to blue to cyan
        ['#f6e58d', '#ffbe76', '#f0932b'], // Light yellow to orange to deep orange
        ['#00b894', '#00cec9', '#55efc4'], // Teal to cyan to light teal
        ['#d4a5a5', '#e9d9d9', '#f3a5a5'], // Coral to light pink to pastel coral
    ];

// Variables to track gradient indices
let currentIndex = 0;
let previousIndex = gradients.length - 1;  // Initialize to last gradient
let nextIndex = 1;  // Next gradient in line

// Function to apply a gradient based on index
function applyGradient(index) {
    const [color1, color2, color3] = gradients[index];
    const gradient = `linear-gradient(to bottom left, ${color1}, ${color2}, ${color3})`;
    document.body.style.background = gradient;

    // Update localStorage
    localStorage.setItem('backgroundGradient', gradient);
    localStorage.setItem('currentIndex', currentIndex);
}

// Function to load saved gradient and indices
function loadSavedState() {
    const savedGradient = localStorage.getItem('backgroundGradient');
    const savedIndex = localStorage.getItem('currentIndex');

    if (savedGradient && savedIndex) {
        document.body.style.background = savedGradient;
        currentIndex = parseInt(savedIndex, 10);
        previousIndex = (currentIndex - 1 + gradients.length) % gradients.length;
        nextIndex = (currentIndex + 1) % gradients.length;
    }
}

// Function to change to the next gradient
function nextGradient() {
    previousIndex = currentIndex;  // Move current to previous
    currentIndex = nextIndex;  // Move next to current
    nextIndex = (currentIndex + 1) % gradients.length;  // Calculate new next

    applyGradient(currentIndex);
}

// Function to change to the previous gradient
function previousGradient() {
    nextIndex = currentIndex;  // Move current to next
    currentIndex = previousIndex;  // Move previous to current
    previousIndex = (currentIndex - 1 + gradients.length) % gradients.length;  // Calculate new previous

    applyGradient(currentIndex);
}

// Load the saved gradient on page load
window.onload = function() {
    loadSavedState();
};

// Add hover effects for the next button
const nextButton = document.querySelector('#nextGradientButton');
nextButton.addEventListener('mouseover', function() {
    const [color1, color2, color3] = gradients[nextIndex];
    const hoverGradient = `linear-gradient(to bottom left, ${color1}, ${color2}, ${color3})`;
    nextButton.style.background = hoverGradient;
});
nextButton.addEventListener('mouseleave', function() {
    nextButton.style.background = '';  // Revert to default background
});

// Add hover effects for the previous button
const prevButton = document.querySelector('#prevGradientButton');
prevButton.addEventListener('mouseover', function() {
    const [color1, color2, color3] = gradients[previousIndex];
    const hoverGradient = `linear-gradient(to bottom left, ${color1}, ${color2}, ${color3})`;
    prevButton.style.background = hoverGradient;
});
prevButton.addEventListener('mouseleave', function() {
    prevButton.style.background = '';  // Revert to default background
});