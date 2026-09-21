/* Navigation commune à toutes les pages.
   Modifie ICI (nom, logo, liens) : ça se répercute partout automatiquement. */

function renderNav() {
  const nav = document.createElement("header");
  nav.className = "nav";
  nav.innerHTML = `
    <a href="index.html" class="nav__brand">
      <img src="assets/logo.svg" alt="Logo" class="nav__logo">
      <span class="nav__name">Prénom Nom</span>
    </a>
    <nav class="nav__links">
      <a href="index.html#projets">Projets</a>
      <a href="about.html">À propos</a>
      <a href="contact.html">Contact</a>
    </nav>
  `;
  document.getElementById("nav-placeholder").replaceWith(nav);
}

document.addEventListener("DOMContentLoaded", renderNav);
