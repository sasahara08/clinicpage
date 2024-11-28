document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const navbarOffset = navbar.offsetTop;
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
      }
    });
  });