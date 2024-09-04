function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**************************************************************************
 * Déclarations des variables
 *************************************************************************/
const modalbg = document.querySelector(".bground");
const openModalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector(".close")
const modalContent = document.querySelector(".content");

//Ouverture de la modal
function openModal (){
  modalbg.style.display = "block";
}

// Fermeture de la modal avec la croix
function closeModal () {
  modalContent.classList.add("closing");

  // Utilise setTimeout pour retarder la disparition réelle de la modale jusqu'à ce que l'animation soit terminée
  setTimeout(() => {
    modalContent.parentElement.style.display = "none";
    // Retire la classe de fermeture pour les ouvertures futures
    modalContent.classList.remove("closing");
  }, 800);
}


// Initialisation des Event Listener aux boutons de la modal
openModalBtn.forEach((btn) => btn.addEventListener("click", openModal));
closeModalBtn.addEventListener('click' , () => {closeModal()})
