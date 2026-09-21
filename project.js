/* Page détail : lit le paramètre ?slug=... dans l'URL et affiche le projet correspondant. */

function renderProjectDetail() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = PROJECTS.find(p => p.slug === slug);
  const container = document.getElementById("project-detail");
  if (!container) return;

  if (!project) {
    container.innerHTML = `<p>Projet introuvable. <a href="index.html">Retour à l'accueil</a></p>`;
    return;
  }

  document.title = `${project.title} — Portfolio`;

  container.innerHTML = `
    <video class="detail__video" src="${project.video}" poster="${project.image}"
           controls playsinline></video>
    <div class="detail__info">
      <h1>${project.title}</h1>
      <p class="detail__meta">${project.role} — ${project.year}</p>
      <p class="detail__desc">${project.description}</p>
      <a class="detail__back" href="index.html#projets">← Retour aux projets</a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderProjectDetail);
