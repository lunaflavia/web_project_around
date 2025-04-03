// Get DOM elements
const editProfileButton = document.querySelector('.profile__edit-icon');
const editProfileModal = document.querySelector('#edit-profile-modal');
const closeModalButton = editProfileModal.querySelector('.modal__close-button');
const profileForm = document.querySelector('#profile-form');
const profileNameInput = document.querySelector('#profile-name');
const profileDescriptionInput = document.querySelector('#profile-description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// Initialize form with current values
profileNameInput.value = profileName.textContent.trim();
profileDescriptionInput.value = profileDescription.textContent.trim();

// Open modal function
function openModal() {
  editProfileModal.classList.add('modal_opened');
  document.addEventListener('keydown', handleEscClose);
}

// Close modal function
function closeModal() {
  editProfileModal.classList.remove('modal_opened');
  document.removeEventListener('keydown', handleEscClose);
}

// Close modal with Escape key
function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

// Handle form submission
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal();
}

// Event listeners
editProfileButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
profileForm.addEventListener('submit', handleProfileFormSubmit);

// Close modal by clicking on overlay
editProfileModal.addEventListener('click', (evt) => {
  if (evt.target === editProfileModal) {
    closeModal();
  }
});