/* Construit la grille de projets sur la page d'accueil à partir de projects-data.js,
   et gère l'animation au survol (attente 3s -> vidéo + texte). */

const HOVER_DELAY = 3000; // ms avant que la vidéo se déclenche

function buildProjectCard(project) {
  const card = document.createElement("a");
  card.href = `project.html?slug=${project.slug}`;
  card.className = `proj proj--${project.layout} align-${project.textAlign}`;

  card.innerHTML = `
    <div class="proj__media">
      <img class="proj__image" src="${project.image}" alt="${project.title}">
      <video class="proj__video" muted playsinline loop
             src="${project.video}" preload="none"></video>
    </div>
    <div class="proj__caption">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <span class="proj__meta">${project.role} — ${project.year}</span>
    </div>
  `;

  const video = card.querySelector(".proj__video");
  let hoverTimer = null;

  const activate = () => {
    card.classList.add("is-active");
    if (!project.video) return;
    video.currentTime = project.videoStart || 0;
    video.play().catch(() => {});
  };

  const deactivate = () => {
    clearTimeout(hoverTimer);
    card.classList.remove("is-active");
    if (project.video) video.pause();
  };

  // boucle manuelle entre videoStart et videoStart + videoLoop
  video.addEventListener("timeupdate", () => {
    const start = project.videoStart || 0;
    const loopLen = project.videoLoop || 15;
    if (video.currentTime >= start + loopLen) {
      video.currentTime = start;
    }
  });

  card.addEventListener("mouseenter", () => {
    hoverTimer = setTimeout(activate, HOVER_DELAY);
  });
  card.addEventListener("mouseleave", deactivate);

  // équivalent tactile : on considère un appui long comme un survol
  card.addEventListener("touchstart", () => {
    hoverTimer = setTimeout(activate, HOVER_DELAY);
  }, { passive: true });
  card.addEventListener("touchend", deactivate);

  return card;
}

function renderProjectGrid() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return; // on n'est pas sur la page d'accueil
  PROJECTS.forEach(project => grid.appendChild(buildProjectCard(project)));
}

document.addEventListener("DOMContentLoaded", renderProjectGrid);
