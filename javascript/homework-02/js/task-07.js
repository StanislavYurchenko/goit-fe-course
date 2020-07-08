'use strict';

const buttonRef = document.getElementById('task-07-do');
const inputStringRef = document.querySelector('.homework-07__form .form__input--string');

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  const isValid = login.length >= 4 && login.length <= 16 ? true : false;
  if (!isValid) {
    console.log('Mistake! Login must be between 4 and 16 symbols');
  }
  return isValid;
};

const isLoginUnique = function (allLogins, login) {
  const isUnique = !allLogins.includes(login);
  if (!isUnique) {
    console.log('This login is unavailable, select another please.');
  }
  return isUnique;
};

const addLogin = function (allLogins, login) {
  const isValid = isLoginValid(login);
  const isInclude = isLoginUnique(allLogins, login);
  if (isValid && isInclude) {
    allLogins.push(login);
    console.log(`Login "${login}" successfully added.`);
    return true;
  } else {
    return false;
  }
};

buttonRef.addEventListener('click', () => {
  const inputLogin = inputStringRef.value.trim();
  inputStringRef.value = inputLogin;

  const isAddedLogin = addLogin(logins, inputLogin);

  if (isAddedLogin) {
    inputStringRef.value = '';
    console.log(`List of logins: [${logins}].`);
  }
  console.log('\n');
});
