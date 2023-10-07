window.onscroll = function() {scrollFunction()};

var navBar = document.querySelector(".navbar-container");

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navBar.style.backgroundColor = "#2d2c2c";
    navBar.style.opacity = "0.9";
  } else {
    navBar.style.backgroundColor = "black";
    navBar.style.opacity = "1";
  }
}

var navBarLogoEl = document.querySelector(".navbar-logo");
var navbarLinksEls = document.querySelectorAll(".nav-item a");


navbarLinksEls.forEach(navbarLinksEl => {
  navbarLinksEl.addEventListener('click', () => {
    navbarLinksEls.forEach(item => {
      item.classList.remove('active');
    });
    
    // Add the 'active' class to the clicked navigation item
    navbarLinksEl.classList.add('active');
  });
});

navBarLogoEl.addEventListener('click',() => {
  navbarLinksEls.forEach(item => {
    item.classList.remove('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener("scroll", function () {
      let fromTop = window.scrollY + 50;

      navbarLinksEls.forEach((item) => {
          const section = document.querySelector(item.getAttribute("href"));
          console.log(section.offsetTop);
          if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
              item.classList.add("active");
          }
          else {
              item.classList.remove("active");
          }
      });
  });
});
