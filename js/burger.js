export function initBurgerMenu() {
  const burgerBtn = document.querySelector(".burger-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (!burgerBtn || !navMenu) return;

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      burgerBtn.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!burgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
      burgerBtn.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
}
