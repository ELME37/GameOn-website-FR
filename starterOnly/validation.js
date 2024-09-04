/**************************************************************************
 * Déclarations des variables
 *************************************************************************/
let errorMessage = null;

// Vérification des champs formulaires
const formData = document.querySelector('#formData');
const textControl = document.querySelector('.text-control');
const firstName = document.querySelector('#first');

// Vérification du prénom
firstName.addEventListener('submit', () => {
  const valeur = firstName.value.trim();
  const length = valeur.length;

  // Supprimer l'ancien message d'erreur s'il existe
  if (errorMessage) {
    errorMessage.remove();
  }

  errorMessage = document.createElement('p');
  errorMessage.classList.add('errormessage');
  errorMessage.innerHTML = "";

  if (length < 2) {
    errorMessage.innerHTML = `Le nom doit contenir au moins 2 caractères.`;
    textControl.parentElement.appendChild(errorMessage);
    console.log(length);
  }
});
