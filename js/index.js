import { projects } from "./projects.js";
import { initBurgerMenu } from "./burger.js";
import { initStickyHeader } from "./header.js";
import { initFilters, renderProjects } from "./filters.js";
import { changePage } from "./pagination.js";

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initBurgerMenu();

  if (document.querySelector(".projects-grid")) {
    initFilters(projects);
    renderProjects(projects);
  }
});

window.changePage = (page) => changePage(page, projects);
