const increment = document.querySelector(".incrementButton");
const decrement = document.querySelector(".decrementButton");
const reset = document.querySelector(".resetButton");
const baseValue = document.querySelector(".baseValue");
const addButton = document.querySelector(".addButton");
const inputSection = document.querySelector(".inputSection");
let count = 0;
increment.addEventListener("click", function () {
  count++;
  baseValue.innerText = count;
});

decrement.addEventListener("click", function () {
  count--;
  baseValue.innerText = count;
});

reset.addEventListener("click", function () {
  count = 0;
  baseValue.innerText = 0;
});

addButton.addEventListener("click", function () {
  count += +inputSection.value;
  baseValue.innerText = count;
});
