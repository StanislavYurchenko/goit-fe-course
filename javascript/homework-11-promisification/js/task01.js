const doButtonRef = document.querySelector('#task-01-do');

const delay = ms => {
  return new Promise(res => {
    setTimeout(res(ms), ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

doButtonRef.addEventListener('click', doButtonHolder);

function doButtonHolder() {
  console.log('--- task 1 ---');
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms
}
