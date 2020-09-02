'use strict';

// Что такое DOM?

// DOM это JS?

// Какие бывает ноды?

// Как мы можем выбрать что то в DOM?

// Какие свойства могут быть у НОД?

// ------------------------------------------------------------------------

// Куда вставится эллемент р?
// const block = document.querySelector(".example");
// const span = document.createElement("span");
// span.textContent = "Lorem";

// const p = document.createElement("p");

// block.appendChild(span);
// block.insertBefore(p, null);

// ------------------------------------------------------------------------

// Куда вставится эллемент р?
// const block = document.querySelector(".example");
// const span = document.createElement("span");
// span.textContent = "Lorem";

// const p = document.createElement("p");

// block.appendChild(span);
// block.insertBefore(p, null);
// block.insertBefore(p, null);
// block.appendChild(span);

// ------------------------------------------------------------------------
// Куда вставится эллемент р?
// const block = document.querySelector(".example");
// const span = document.createElement("span");
// span.textContent = "Lorem";

// const secondSpan = span;

// const p = document.createElement("p");

// block.appendChild(secondSpan);
// block.insertBefore(p, null);
// block.appendChild(span);

// ------------------------------------------------------------------------

// Куда вставится эллемент р?
// const block = document.querySelector(".example");
// const span = document.createElement("span");
// span.textContent = "Lorem";

// const secondSpan = span.cloneNode();

// const p = document.createElement("p");

// block.appendChild(secondSpan);
// block.insertBefore(p, null);
// block.appendChild(span);

// ------------------------------------------------------------------------
// Куда вставится эллемент р?
// const block = document.querySelector(".example");
// const span = document.createElement("span");
// span.textContent = "Lorem";

// const secondSpan = span;

// const p = document.createElement("p");

// block.appendChild(secondSpan);
// block.insertBefore(p, null);
// span.remove();
// block.appendChild(span);

// ------------------------------------------------------------------------

// Какой эллемент будет внутри div?
// const block = document.querySelector(".example");
// const span = "<span>123</span>";
// const p = "<p>123</p>";

// block.innerHTML = span;
// block.innerHTML = p;

// ------------------------------------------------------------------------

// Какие эллементы будут внутри div?
// const block = document.querySelector(".example");
// const span = "<span>123</span>";
// const p = "<p>123</p>";

// block.insertAdjacentHTML("beforeend", span);
// block.insertAdjacentHTML("beforeend", p);
// block.insertAdjacentHTML("afterend", span);
// block.insertAdjacentHTML("beforeend", p);

// ------------------------------------------------------------------------
// Какие цыфры будут выведеные?

// const block = document.querySelector(".example_2");
// const p = block.querySelector("#p");
// const span = block.querySelector("#span");

// span.innerHTML = "<span>5</span>";
// p.innerHTML = "<span>6</span>";
// p.outerHTML = "<section>4</section>";

// ------------------------------------------------------------------------
// const btn = document.getElementById("example_3");

// const handler = () => {
//   console.log(this);

//   console.log("CLICK!");
// };

// btn.addEventListener("click", handler());

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelectorAll(".block");

// const handler = (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
// };

// container.addEventListener("click", handler);

// block.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.stopPropagation();
//   });
// });

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelector(".block");

// const handler = (e) => {
//   console.log(this);
//   console.log(e.target);
//   console.log(e.currentTarget);
// };

// container.addEventListener("click", handler);

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelector(".block");

// function handler(e) {
//   console.log(this);
//   console.log(e.target);
//   console.log(e.currentTarget);
// }

// container.addEventListener("click", handler);

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelector(".block");

// function handler() {
//   console.log(1);
// }

// function handler2(e) {
//   e.preventDefault();
//   console.log(2);
// }

// function handler3(e) {
//   console.log(3);
// }

// container.addEventListener("click", handler);
// container.addEventListener("click", handler2);
// container.addEventListener("click", handler3);

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelector(".block");

// function handler() {
//   console.log(1);
// }

// function handler2(e) {
//   e.stopPropagation();
//   console.log(2);
// }

// function handler3() {
//   console.log(3);
// }

// container.addEventListener("click", handler);
// container.addEventListener("click", handler2);
// container.addEventListener("click", handler3);

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelector(".block");

// function handler() {
//   console.log(1);
// }

// function handler2(e) {
//   e.stopImmediatePropagation();
//   console.log(2);
// }

// function handler3() {
//   console.log(3);
// }

// container.addEventListener("click", handler);
// container.addEventListener("click", handler2);
// container.addEventListener("click", handler3);

// ------------------------------------------------------------------------
// const input = document.querySelector("#input");
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log(input.value);
// });

// ------------------------------------------------------------------------
// const form = document.querySelector("form");

// function handler(e) {
//   e.preventDefault();

//   console.log(this.inputName.value);
// }

// form.addEventListener("submit", handler);

// ------------------------------------------------------------------------
// Практика
// ------------------------------------------------------------------------

// 1. Выведите в консоль каждое второе имя
// {
/* <ul>
  <li>Василий</li>
  <li>Андрей</li>
  <li>Иван</li>
  <li>Антон</li>
</ul>; */
// }
// const liRef = Array.from(document.querySelectorAll('.task1 ul li '));

// const res = liRef.forEach((el, i) => {
//   if (i % 2) {
//     console.log(el.textContent);
//   }
// });
// console.log(res);

// 2. Вставьте после каждым второго имени -> <li><span> ----------------- </span></li>
// {
// <ul>
//   <li>Василий</li>
//   <li>Андрей</li>
//   <li>Иван</li>
//   <li>Антон</li>
// </ul>;
// }

// const liRef = document.querySelectorAll('.task1 ul li ');
// const liList = Array.from(liRef);

// const element = '<li><span> ----------------- </span></li>';
// let inner = '';
// const res = liList.forEach((el, i) => {
//   if (i % 2) {
//     inner += el.outerHTML + element;
//   } else {
//     inner += el.outerHTML;
//   }
// });

// liRef[0].parentNode.innerHTML = inner;

// 3. Выведите в консоль число если по нему кликнуть

// {
/* <div class="container">
      <div class="block">1</div>
      <div class="block">2</div>
      <div class="block">3</div>
      <div class="block">4</div>
      <div class="block">5</div>
    </div> */
// }

// const container = document.querySelector('.task3 .container');

// container.addEventListener('click', containerHandler);

// function containerHandler(e) {
//   console.log(e.target.textContent);
// }

// 4. Вывидите данные в виде
// {
/* <article>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedit
              aspernatur!
            </p>
            <span>Date</span>
              <ul class="coments">
                <li>coment1</li>
                <li>coment2</li>
                <li>coment3</li>
              </ul>
          </article> */
// }
const boxRef = document.querySelectorAll('.task4');


// const dir = `
//           <article>
//             <h2>${el.title}</h2>
//             <p>
//               ${el.article}
//             </p>
//             <span>${el.date}</span>
//               <ul class="coments">
//                 ${getComments()}
//               </ul>
//           </article>`

articles.reduce(el => {
  
  el.comments.reduce(el)
    
  }


  return const dir = `
          <article>
            <h2>${el.title}</h2>
            <p>
              ${el.article}
            </p>
            <span>${el.date}</span>
              <ul class="coments">
                ${getComments()}
              </ul>
          </article>`
},'')




const articles = [
  {
    title: '123',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!',
    date: '321',
    comments: [{ comment: 'coment' }, { comment: 'coment' }],
  },
  {
    title: '123',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!',
    date: '321',
    comments: [{ comment: 'coment' }, { comment: 'coment' }, { comment: 'coment' }],
  },
];
