const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const allLinks = document.querySelectorAll(".nav-link");
console.log(allLinks);

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

const scrollSection = function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
  console.log("worked");
};

allLinks.forEach(function (e) {
  e.addEventListener("click", function (e) {
    const scrollInto = e.target.getAttribute("data-scroll");
    document.querySelector(scrollInto).scrollIntoView({ behavior: "smooth" });
  });
});
