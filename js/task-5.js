

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const textColor = document.querySelector(".color");
const button = document.querySelector(".change-color");



button.addEventListener("click", () => {
const newColor = getRandomHexColor();

body.style.backgroundColor = newColor;
textColor.textContent = newColor;
textColor.style.backgroundColor = newColor;
});