const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

const previouBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const image = document.getElementById('image');

previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length)% images.length;
    image.src  = images[currentIndex];
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
});

