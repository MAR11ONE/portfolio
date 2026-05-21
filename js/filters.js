import { state, getFilteredProjects, getPaginatedProjects } from "./state.js";
import { createProjectCard } from "./projectCard.js";
import { renderPagination } from "./pagination.js";

export function renderProjects(projects) {
  const grid = document.querySelector(".projects-grid");
  if (!grid) return;

  const filtered = getFilteredProjects(projects);
  const paginated = getPaginatedProjects(filtered);

  grid.innerHTML = "";

  paginated.forEach(project => {
    const card = createProjectCard(project);
    grid.appendChild(card);
  });

  setTimeout(() => {
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.add("visible");
    });
  }, 50);

  renderPagination(filtered.length);
}

export function filterProjects(tag, projects) {
  state.currentFilter = tag;
  state.currentPage = 1;

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.filter === tag) {
      btn.classList.add("active");
    }
  });

  renderProjects(projects);
}

export function initFilters(projects) {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterProjects(btn.dataset.filter, projects);
    });
  });
}
