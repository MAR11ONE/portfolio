import { state, getFilteredProjects } from "./state.js";
import { renderProjects } from "./filters.js";

export function renderPagination(totalProjects) {
  const pagination = document.querySelector(".pagination");
  if (!pagination) return;

  const totalPages = Math.ceil(totalProjects / state.projectsPerPage);

  pagination.innerHTML = "";

  if (totalPages <= 1) return;

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "←";
  prevBtn.disabled = state.currentPage === 1;
  prevBtn.addEventListener("click", () => window.changePage(state.currentPage - 1));
  pagination.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    if (i === state.currentPage) {
      pageBtn.classList.add("active");
    }
    pageBtn.addEventListener("click", () => window.changePage(i));
    pagination.appendChild(pageBtn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "→";
  nextBtn.disabled = state.currentPage === totalPages;
  nextBtn.addEventListener("click", () => window.changePage(state.currentPage + 1));
  pagination.appendChild(nextBtn);
}

export function changePage(page, projects) {
  const filtered = getFilteredProjects(projects);
  const totalPages = Math.ceil(filtered.length / state.projectsPerPage);

  if (page < 1 || page > totalPages) return;

  state.currentPage = page;
  renderProjects(projects);

  const projectsSection = document.querySelector(".projects-section");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
