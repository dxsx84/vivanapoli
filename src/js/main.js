// Import all of Bootstraps JS
import * as bootstrap from "bootstrap";

console.log("Hallo javascript");
let hideShow = document.getElementById("navbar");

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    hideShow.classList.add("scroll-up");
    hideShow.classList.remove("scroll-down");
  } else {
    hideShow.classList.add("scroll-down");
    hideShow.classList.remove("scroll-up");
  }
  prevScrollpos = currentScrollPos;
};
