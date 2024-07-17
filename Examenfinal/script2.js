// Obtener referencia al botón y añadir un listener para el evento 'click'
document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.getElementById('changeColorButton');
    const colorDisplay = document.getElementById('colorDisplay');
  
    changeColorButton.addEventListener('click', function() {
      const color = getRandomColor();
      document.body.style.backgroundColor = color;
      colorDisplay.textContent = `Color actual: ${color}`;
    });
  });
  
  // Función para generar un color hexadecimal aleatorio
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }