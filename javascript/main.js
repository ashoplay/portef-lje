function changeGradient() {
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
    ];

    const randomIndex = Math.floor(Math.random() * gradients.length);
    const [color1, color2, color3] = gradients[randomIndex];

    const gradient = `linear-gradient(to bottom left, ${color1}, ${color2}, ${color3})`;
    document.body.style.background = gradient;

    localStorage.setItem('backgroundGradient', gradient);
}

window.onload = function() {
    const savedGradient = localStorage.getItem('backgroundGradient');
    if (savedGradient) {
        document.body.style.background = savedGradient;
    }
}
