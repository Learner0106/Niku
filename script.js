var images = document.querySelectorAll(".image");
var currentImage = null;

function enlargeImage(image) {
  if (currentImage) {
    currentImage.classList.remove(".large");
  }

  image.classList.add(".large");
  currentImage = image;
}

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", enlargeImage);
}
