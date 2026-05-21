export function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";
  article.dataset.status = project.status;

  const title = document.createElement("h3");
  title.textContent = project.title;
  article.appendChild(title);

  const description = document.createElement("p");
  description.textContent = project.description;
  article.appendChild(description);

  const tagsDiv = document.createElement("div");
  tagsDiv.className = "project-tags";
  project.tags.forEach(tag => {
    const tagSpan = document.createElement("span");
    tagSpan.className = "tag";
    tagSpan.textContent = tag;
    tagsDiv.appendChild(tagSpan);
  });
  article.appendChild(tagsDiv);

  const linksDiv = document.createElement("div");
  linksDiv.className = "project-links";

  if (project.url) {
    const demoLink = document.createElement("a");
    demoLink.href = project.url;
    demoLink.target = "_blank";
    demoLink.rel = "noopener noreferrer";
    demoLink.textContent = "Demo";
    linksDiv.appendChild(demoLink);
  }

  if (project.github) {
    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.textContent = "GitHub";
    linksDiv.appendChild(githubLink);
  }

  article.appendChild(linksDiv);

  return article;
}
