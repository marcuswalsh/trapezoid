// Checks for button press
document.getElementById('calculateBtn').addEventListener('click', calcArea);

function calcArea() {
    // Stores user input
    let baseOne = document.getElementById('baseOne').value;
    let baseTwo = document.getElementById('baseTwo').value;
    let trapHeight = document.getElementById('trapHeight').value;
    
    // Calculates and outputs answer
    let trapArea = ((1/2)*baseOne + (1/2)*baseTwo)*(trapHeight);
    document.getElementById('trapArea').innerHTML = trapArea;
}