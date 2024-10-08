export function showConfirmationMessage() {
    // Cache le formulaire
    const form = document.getElementById('reserve-form');
    form.style.display = 'none';
  
    // Crée le message de confirmation
    const confirmationMessage = document.createElement('div');
    confirmationMessage.classList.add('confirmation-message');
    confirmationMessage.innerHTML = `
      <p class="messageConfirmation">Merci de votre inscription</p>
      <button class="btn-closeConfirmation">Fermer</button>
    `;
  
    // Ajoute le message de confirmation à la modal
    const modalBody = document.querySelector('.modal-body');
    modalBody.appendChild(confirmationMessage);
  
    // Ajoute un événement au bouton de fermeture
    const closeButton = confirmationMessage.querySelector('.btn-closeConfirmation');
        closeButton.addEventListener('click', () => {
        closeModal(); // Ferme la modal
    });
  }
  