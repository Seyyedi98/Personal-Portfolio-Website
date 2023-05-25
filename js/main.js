const nav = document.querySelector(".nav");
const header = document.querySelector("header");

// =============== Navigation bar effects on scroll ===============

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   //   console.log(entries);
//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
// });

window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// headerObserver.observe(header);

//Portfolio section - Modal

//Our clients - Swiper

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
