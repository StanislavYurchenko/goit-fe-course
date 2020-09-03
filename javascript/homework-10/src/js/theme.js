const ref = {
  switchInput: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
  default: 'light-theme',
};

init();

const currentTheme = () => (ref.switchInput.checked ? Theme.DARK : Theme.LIGHT);

ref.switchInput.addEventListener('change', switchInputHandler);

document.addEventListener('visibilitychange', changeTheme);

function switchInputHandler() {
  localStorage.setItem('theme', currentTheme());
  changeTheme();
}

function changeTheme() {
  if (localStorage.getItem('theme') === 'light-theme') {
    ref.switchInput.checked = false;
    ref.body.classList.add('light-theme');
    ref.body.classList.remove('dark-theme');
  }

  if (localStorage.getItem('theme') === 'dark-theme') {
    ref.switchInput.checked = true;
    ref.body.classList.add('dark-theme');
    ref.body.classList.remove('light-theme');
  }
}

function init() {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', Theme.default);
  }
  changeTheme();
}
