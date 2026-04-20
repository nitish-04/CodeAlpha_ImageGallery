let images = [
    "https://picsum.photos/500?1",
    "https://picsum.photos/500?2",
    "https://picsum.photos/500?3",
    "https://picsum.photos/500?4",
    "https://picsum.photos/500?5",
    "https://picsum.photos/500?6",
    "https://picsum.photos/500?7",
    "https://picsum.photos/500?8",
    "https://picsum.photos/500?9",
    "https://picsum.photos/500?10"
];

let currentIndex = 0;
let interval;

/* Open */
function openPreview(index) {
    currentIndex = index;
    document.getElementById("preview").style.display = "flex";
    showImage();
    startSlideshow();
}

/* Show Image */
function showImage() {
    document.getElementById("previewImg").src = images[currentIndex];
}

/* Next */
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

/* Previous */
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

/* Auto Slideshow */
function startSlideshow() {
    interval = setInterval(nextSlide, 2000);
}

/* Close */
function closePreview() {
    document.getElementById("preview").style.display = "none";
    clearInterval(interval);
}