const prompt1 = document.querySelector('.prompt1');
const prompt2 = document.querySelector('.prompt2');
const result = document.querySelector('.result');
const additionButton = document.querySelector('.addition');
const subtractButton = document.querySelector('.substract');
const multiplyButton = document.querySelector('.multiply');
const divisionButton = document.querySelector('.division');
const resetButton = document.querySelector('.reset');

// Addition
additionButton.addEventListener('click', () => {
  result.value = Number(prompt1.value) + Number(prompt2.value);
});

// Subtraction
subtractButton.addEventListener('click', () => {
  result.value = Number(prompt1.value) - Number(prompt2.value);
});

// Multiplication
multiplyButton.addEventListener('click', () => {
  result.value = Number(prompt1.value) * Number(prompt2.value);
});

// Division
divisionButton.addEventListener('click', () => {
  result.value = Number(prompt1.value) / Number(prompt2.value);
});

// Reset
resetButton.addEventListener('click', () => {
  prompt1.value = '';
  prompt2.value = '';
  result.value = '';
});