'use strict';

const buttonRef = document.getElementById('task-04-do');

class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value = this._value + str;
  }

  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

buttonRef.addEventListener('click', () => {
  const builder = new StringBuilder('.');

  builder.append('^');
  console.log(builder.value); // '.^'

  builder.prepend('^');
  console.log(builder.value); // '^.^'

  builder.pad('=');
  console.log(builder.value); // '=^.^='

  console.log('\n');
});
