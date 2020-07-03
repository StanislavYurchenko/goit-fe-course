// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением
// константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
// записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

const buttonTask03Ref = document.querySelector('#task-03-do');

buttonTask03Ref.addEventListener('click', () => {
  const ADMIN_PASSWORD = 'jqueryismyjam';

  let message;

  do {
    message = prompt('Enter password (jqueryismyjam)');
    if (message !== null) {
      if (message === ADMIN_PASSWORD) {
        message = 'Welcome!';
        break;
      } else {
        message = "Password isn't correct. Try again!";
        console.log(message);
        alert(message);
        continue;
      }
    } else {
      message = 'Canceled by user';
      break;
    }
  } while (true);

  console.log(message);
  alert(message);
  console.log('\n');
});
