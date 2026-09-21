/* ============================================================
   AJOUTE TES PROJETS ICI.
   Pour un nouveau projet : copie un bloc { ... } entre les crochets,
   colle-le, remplis les champs, et sauvegarde. Rien d'autre à faire,
   le site se met à jour automatiquement.

   Champs :
   - slug        : identifiant unique sans espace (utilisé dans l'URL)
   - title       : titre affiché
   - role        : ex "Réalisateur", "Chef opérateur"
   - year        : année
   - layout      : "full" | "two-thirds" | "offset-left" | "offset-right"
                   (contrôle la largeur/position de l'image dans le scroll)
   - image       : chemin vers l'image fixe (affichée par défaut)
   - video       : chemin vers la vidéo (optionnel, jouée au survol prolongé)
   - videoStart  : seconde à laquelle la vidéo doit démarrer
   - videoLoop   : durée de la boucle en secondes (ex 15)
   - textAlign   : "left" | "center" (alignement du texte qui apparaît au survol)
   - description : courte phrase affichée au survol et sur la page détail
   ============================================================ */

const PROJECTS = [
  {
    slug: "titre-du-projet-1",
    title: "Titre du projet",
    role: "Réalisateur",
    year: "2025",
    layout: "full",
    image: "assets/projet-01.jpg",
    video: "assets/projet-01.mp4",
    videoStart: 4,
    videoLoop: 15,
    textAlign: "left",
    description: "Une courte description du projet, du contexte ou du rôle tenu."
  },
  {
    slug: "titre-du-projet-2",
    title: "Titre du projet",
    role: "Chef opérateur",
    year: "2024",
    layout: "two-thirds",
    image: "assets/projet-02.jpg",
    video: "assets/projet-02.mp4",
    videoStart: 0,
    videoLoop: 12,
    textAlign: "center",
    description: "Une courte description du projet, du contexte ou du rôle tenu."
  },
  {
    slug: "titre-du-projet-3",
    title: "Titre du projet",
    role: "Réalisateur",
    year: "2024",
    layout: "offset-right",
    image: "assets/projet-03.jpg",
    video: "assets/projet-03.mp4",
    videoStart: 2,
    videoLoop: 10,
    textAlign: "left",
    description: "Une courte description du projet, du contexte ou du rôle tenu."
  },
  {
    slug: "titre-du-projet-4",
    title: "Titre du projet",
    role: "Chef opérateur",
    year: "2023",
    layout: "offset-left",
    image: "assets/projet-04.jpg",
    video: "assets/projet-04.mp4",
    videoStart: 0,
    videoLoop: 15,
    textAlign: "left",
    description: "Une courte description du projet, du contexte ou du rôle tenu."
  }
];
