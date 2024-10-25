// Array of colors to choose from
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD", "#E74C3C", "#3498DB"];

// Function to change the background color
function changeBackgroundColor() {
    // Generate a random index to select a color
    const randomIndex = Math.floor(Math.random() * colors.length);
    // Set the body's background color to the selected color
    document.body.style.backgroundColor = colors[randomIndex];
}

// Event listener for the button click
document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);
