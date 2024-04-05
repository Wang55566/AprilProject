
let count = 0;
const countHeader = document.getElementById('count');
countHeader.innerText = count;

const countAddBtn = document.getElementById('add');
const countMinusBtn = document.getElementById('minus');

countAddBtn.addEventListener("click", () => {
  count++;
  countHeader.innerText = count;
})

countMinusBtn.addEventListener('click', () => {
  count--;
  countHeader.innerText = count;
})
