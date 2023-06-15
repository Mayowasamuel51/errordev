document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    navbarBurgers.forEach((el) => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const targetElement = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        targetElement.classList.toggle('is-active');
      });
    });
});
  

document.addEventListener('DOMContentLoaded', () => {
    // Check for click events on the navbar burger icon
    const navbarBurger = document.querySelector(".navbar-burger");
    if (navbarBurger) {
      navbarBurger.addEventListener("click", () => {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        navbarBurger.classList.toggle("is-active");
        const navbarMenu = document.querySelector(".navbar-menu");
        navbarMenu.classList.toggle("is-active");
      });
    }
  });