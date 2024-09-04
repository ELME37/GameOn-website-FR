document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reserve-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire pour validation

    let isValid = true;

    // Supprimer les anciens messages d'erreur
    document.querySelectorAll('.errormessage').forEach((element) => element.remove());

    // Vérification du prénom
    const firstName = document.getElementById('first');
    if (firstName.value.trim().length < 2) {
      showError(firstName, 'Le prénom doit contenir au moins 2 caractères.');
      isValid = false;
    }

    // Vérification du nom
    const lastName = document.getElementById('last');
    if (lastName.value.trim().length < 2) {
      showError(lastName, 'Le nom doit contenir au moins 2 caractères.');
      isValid = false;
    }

    // Vérification de l'email
    const email = document.getElementById('email');
    if (!validateEmail(email.value)) {
      showError(email, 'Veuillez entrer une adresse email valide.');
      isValid = false;
    }

    // Vérification de la date de naissance
    const birthdate = document.getElementById('birthdate');
    if (!birthdate.value) {
      showError(birthdate, 'Veuillez entrer votre date de naissance.');
      isValid = false;
    }

    // Vérification de la quantité
    const quantity = document.getElementById('quantity');
    if (quantity.value === '' || quantity.value < 0) {
      showError(quantity, 'Veuillez entrer une quantité valide.');
      isValid = false;
    }

    // Vérification de la sélection d'un lieu
    const locations = document.querySelectorAll('input[name="location"]');
    const selectedLocation = [...locations].find(location => location.checked);
    if (!selectedLocation) {
      const locationContainer = document.querySelector('.formData #location1').closest('.formData');
      showError(locationContainer, 'Veuillez sélectionner un lieu.');
      isValid = false;
    }

    // Vérification des conditions d'utilisation
    const terms = document.getElementById('checkbox1');
    if (!terms.checked) {
      const termsContainer = document.querySelector('.formData #checkbox1').closest('.formData');
      showError(termsContainer, 'Vous devez accepter les conditions d\'utilisation.');
      isValid = false;
    }

    // Si tout est valide, afficher les informations dans la console et soumettre le formulaire
    if (isValid) {
      console.log('Formulaire soumis avec succès !');
      console.log('Prénom :', firstName.value);
      console.log('Nom :', lastName.value);
      console.log('E-mail :', email.value);
      console.log('Date de naissance :', birthdate.value);
      console.log('Quantité :', quantity.value);
      console.log('Lieu :', selectedLocation ? selectedLocation.value : 'Aucun lieu sélectionné');
      console.log('Conditions d\'utilisation acceptées :', terms.checked);

      // Soumettre le formulaire après le log
      form.submit();
    }
  });

  // Fonction pour afficher un message d'erreur
  function showError(element, message) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('errormessage');
    errorMessage.innerText = message;
    element.parentElement.appendChild(errorMessage);

    // Ajouter un événement "input" ou "change" pour supprimer l'erreur si l'utilisateur modifie le champ
    element.addEventListener('input', () => removeError(element));
    element.addEventListener('change', () => removeError(element));
  }

  // Fonction pour supprimer le message d'erreur
  function removeError(element) {
    const error = element.parentElement.querySelector('.errormessage');
    if (error) {
      error.remove();
    }
  }

  // Fonction pour valider un email avec une expression régulière
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
