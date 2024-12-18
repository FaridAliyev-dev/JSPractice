const plusButton = document.querySelector(".plusButton");
const minusButton = document.querySelector(".minusButton");
const applyButton = document.querySelector(".applyButton");
const input = document.querySelector(".inputSection")
const text = document.querySelector(".loremText");

let fontSize = 16;

text.style.fontSize = fontSize + "px";

plusButton.addEventListener("click", function () {
  fontSize += 1;
  text.style.fontSize = fontSize + "px";
});

minusButton.addEventListener("click", function () {
  fontSize -= 1;
  text.style.fontSize = fontSize + "px";
});

applyButton.addEventListener("click", function() {
      text.style.color = input.value;
})