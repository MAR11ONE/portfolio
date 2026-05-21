export const state = {
  currentFilter: "alle",
  currentPage: 1,
  projectsPerPage: 6,
};

export function getFilteredProjects(projects) {
  if (state.currentFilter === "alle") {
    return projects;
  }
  return projects.filter((project) =>
    project.tags.includes(state.currentFilter),
  );
}

export function getPaginatedProjects(filteredProjects) {
  const startIndex = (state.currentPage - 1) * state.projectsPerPage;
  const endIndex = startIndex + state.projectsPerPage;
  return filteredProjects.slice(startIndex, endIndex);
}
