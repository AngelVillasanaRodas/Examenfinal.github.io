// Arreglo de imágenes de departamentos
const images = [
    { src: 'img/dp1.jpg', precio: '200,000', area: '80' },
    { src: 'img/dp2.jfif', precio: '250,000', area: '90' },
    { src: 'img/dp3.jfif', precio: '300,000', area: '100' },
    { src: 'img/dp4.jfif', precio: '180,000', area: '75' },
    { src: 'img/dp5.jfif', precio: '220,000', area: '85' },
    { src: 'img/dp6.jfif', precio: '270,000', area: '95' },
    { src: 'img/dp7.jfif', precio: '190,000', area: '78' },
    { src: 'img/dp8.jfif', precio: '260,000', area: '88' },
    { src: 'img/dp9.jpg', precio: '310,000', area: '105' },
    { src: 'img/dp10.jfif', precio: '175,000', area: '72' }
];

// Variables para controlar la galería
let currentIndex = 0;
const totalImages = images.length;

// Referencias a elementos del DOM
const galleryImg = document.getElementById('galleryImg');
const message = document.getElementById('message');
const precioInput = document.getElementById('precioInput');
const areaInput = document.getElementById('areaInput');

// Función para mostrar la imagen actual
function showImage() {
    galleryImg.src = images[currentIndex].src;
    message.textContent = `Imagen ${currentIndex + 1} de ${totalImages}`;
    precioInput.value = `$${images[currentIndex].precio}`;
    areaInput.value = `${images[currentIndex].area} m²`;
}

// Función para ir a la imagen anterior
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    showImage();
}

// Función para ir a la imagen siguiente
function nextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    showImage();
}

// Mostrar la primera imagen al cargar la página
showImage();