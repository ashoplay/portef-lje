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
