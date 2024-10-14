const btn = document.querySelector('#picker');
const colorDiv = document.getElementById('colorBox');
const colorDescription = document.getElementById('inner');

function random(number) {
    return Math.floor(Math.random() * (number +1));

}

function getRandomHexCode() {
    const hexCharacters = '0123456789abcdef';
    var hexCode = '#'; 

    for (let i = 0; i < 6; i++) {
        hexCode += hexCharacters[random(15)];
    }
    return hexCode;
}

btn.addEventListener('click', () => {
    const rndHex = getRandomHexCode();
    colorDiv.style.backgroundColor = rndHex;
    colorDescription.textContent = rndHex;


});

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);  // Extract and convert the green value
    const g = parseInt(hex.slice(3, 5), 16);  // Extract and convert the green value
    const b = parseInt(hex.slice(5, 7), 16);  // Extract and convert the blue value
    return `rgb(${r}, ${g}, ${b})`; 
}
btn.addEventListener('click', () => {
    const rndHex = getRandomHexCode();        // Generate random HEX
    const rgbValue = hexToRgb(rndHex);        // Convert HEX to RGB

    colorDiv.style.backgroundColor = rndHex;  // Set the color of the div
    colorDescription.textContent = `HEX: ${rndHex} | RGB: ${rgbValue}`; 
});
