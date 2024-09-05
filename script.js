// ADDING TITLE ATTRIBUTES AFTER INTRO ANIMATION
setTimeout(() => {
  const icons = document.querySelectorAll('.social-media-icons i');

  icons[0].setAttribute('title', 'Facebook');
  icons[1].setAttribute('title', 'Instagram');
  icons[2].setAttribute('title', 'Twitter [X]');
  icons[3].setAttribute('title', 'Youtube');
  icons[4].setAttribute('title', 'Github');
}, 3000);

// NAVIGATION MENU -------
// const nav = document.getElementById("nav");
// const menuIcon = document.querySelector(".menu-icon");

// function toggleMenu() {
//   nav.classList.toggle("active");
//   menuIcon.classList.toggle("active");
// }

// function hideMenu() {
//   nav.classList.remove("active");
//   menuIcon.classList.remove("active");
// }

// SLIDESHOW -------
let currentImageIndex = 0;
const images = document.querySelectorAll(".slide");

function switchImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}

setInterval(switchImage, 5000);

// BANNER -------

// HOUDINI WORKLET ------- 
CSS.paintWorklet.addModule("https://unpkg.com/parallelowow/parallelowow.js");