'use strict';

const buttonRef = document.getElementById('task-05-do');
const inputStringRef = document.querySelector('.task-05__form .form__input--string');

const messages = [
  'Latest technology news',
  'JavaScript weekly newsletter',
  'Get best sale offers now!',
  '[SPAM] How to earn fast money?',
];

const bannedWords = ['spam', 'sale'];

const checkForSpam = function (messages, filterWords) {
  let isBannedWord = false;
  for (let i = 0; i < messages.length; i += 1) {
    for (let j = 0; j < filterWords.length; j += 1) {
      if (messages[i].toLowerCase().includes(filterWords[j].toLowerCase())) {
        console.log(`"${messages[i]}" consider banned word "${filterWords[j]}"`);
        isBannedWord = true;
      }
    }
  }

  if (!isBannedWord) {
    console.log('Messages do not consider banned word');
  }
};

buttonRef.addEventListener('click', () => {
  if (!inputStringRef.value.trim()) {
    checkForSpam(messages, bannedWords);
  } else {
    const customMessage = [];
    customMessage[0] = inputStringRef.value;
    checkForSpam(customMessage, bannedWords);
  }

  console.log('\n');
});
