const checkLoading = (timeout) => {
  const timerId = setTimeout(() => {
    if (document.querySelector('#overlay')) {
      alert('This is taking too long, maybe check your internet connection and try again?');
      clearTimeout(timerId);
    }
  }, timeout);
};

const toggleDropdown = () => {
  const $dropdown = document.querySelector('#dropdown');
  $dropdown.classList.toggle('hidden');
};

const forceScrollToTop = () => {
  const $documentElement = document.documentElement;
  $documentElement.style.scrollBehavior = 'auto';
  $documentElement.scrollTo(0, 0);
};

const initializeUI = () => {
  const $hamburgerBtn = document.querySelector('#hamburger-button');
  const $overlay = document.querySelector('#overlay');

  $hamburgerBtn.addEventListener('click', toggleDropdown);
  $overlay.addEventListener('transitionend', removeOverlay);
};

const removeOverlay = () => {
  const $overlay = document.querySelector('#overlay');
  $overlay.remove();
};

const removeLoading = () => {
  const $overlay = document.querySelector('#overlay');
  const $body = document.body;

  $overlay.classList.add('opacity');
  $body.classList.remove('unscrollable');
};

const init = () => {
  document.addEventListener('DOMContentLoaded', initializeUI);
  document.addEventListener('DOMContentLoaded', () => {
    checkLoading(60000);
  });
  window.addEventListener('load', removeLoading);
  window.addEventListener('unload', forceScrollToTop);
};

init();
