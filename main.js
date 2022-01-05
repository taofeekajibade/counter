// initializing counter

let count = 0;

const counter = document.querySelector('.count');
const startCount = document.querySelector('#btn1');
const reduceCount = document.querySelector('#btn2');
const resetCount = document.querySelector('#btn3');


counter.textContent = count;

startCount.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

reduceCount.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

resetCount.addEventListener("click", () => {
  counter.textContent = "";
  count = 0;
});


const date = document.createElement('p');
date.textContent = new Date();
date.style.cssText = "font-size: 12px; color: #fd00e9; font-family: cursive;"
const h1 = document.querySelector('h1');
h1.appendChild(date)

const body = document.querySelector('body');
body.style.background = "#fed871";