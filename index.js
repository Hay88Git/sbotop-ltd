
var swiper = new Swiper(".small_slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  interval: 1000,
  grabCursor: true,
  pauseOnMouseEnter: true,
  breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
});

const nav =document.getElementById("nav");
function on(){
  nav.style.left="0";
}
function off(){
  nav.style.left="-900px";
}