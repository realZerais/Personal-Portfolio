// to do:
// - interactive background
// - I am a ...
// - sticky navbar then change color on scroll
// - navbar scroll on click(done)*
// - scroll animation
// - portfolio cards then expand on lick
// - skills progess bar 
// - about
// - scrollbar

// window.onscroll = () => {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar").style.padding = "30px 10px";
//         document.getElementById("logo").style.fontSize = "25px";
//       } else {
//         document.getElementById("navbar").style.padding = "80px 10px";
//         document.getElementById("logo").style.fontSize = "35px";
//       }
// };

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

