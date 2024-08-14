
const sideBar = document.getElementById(`side-bar`);// important de creer la variable car JS ne va pas comprendre la class side-bar, donc on la déclare

const content = document.querySelector(".content");

btn.addEventListener("click", () =>{
  //nous ajoutons la class "active du css" en toggle (si elle n'est pas la on l'ajoute et inversement)
  sideBar.classList.toggle("active");

});

// Ranger la sidebar si on click sur le contenu principal
content.addEventListener("click", () =>{
  sideBar.classList.remove("active");
});

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
