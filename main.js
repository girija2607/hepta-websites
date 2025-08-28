document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-toggle");  
  const menu = document.querySelector(".site-menu");
  const closeBtn = document.querySelector(".menu-close"); 

  // open menu
  menuBtn.addEventListener("click", function () {
    menu.classList.add("active");
  });

  // close menu
  closeBtn.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});
