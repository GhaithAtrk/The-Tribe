// Variables
let images = ["img/img1.jpg", "img/img3.jpg", "img/img4.jpg"]
let slider = document.getElementById("sliding-img");
let num = 0;

function next() {
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
  num++;
}

function prev() {
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
  num--;
}

