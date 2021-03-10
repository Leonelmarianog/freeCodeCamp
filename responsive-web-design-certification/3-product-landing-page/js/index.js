window.onload = () => {
  const $dropdown = document.querySelector('#dropdown');
  const $hamburgerBtn = document.querySelector('#hamburger-button');

  const toggleDropdown = () => {
    $dropdown.classList.toggle('hidden');
  };

  const initializeListeners = () => {
    $hamburgerBtn.addEventListener('click', toggleDropdown);
  };

  initializeListeners();
};
