const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount > 0 && amount <= 100) {
    let addBox = "";

    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10;
      const color = getRandomHexColor();
      addBox += ` <div class="box" style="width:${size}px; height:${size}px; background-color:${color};">
      </div>`;
    }

    boxesEl.innerHTML = "";
    boxesEl.insertAdjacentHTML("beforeend", addBox);
  }
}

let quantityElements = 0;

inputEl.addEventListener("input", (event) => {
  quantityElements = Number(event.target.value);
});

btnCreateEl.addEventListener("click", () => {
  createBoxes(quantityElements);
  inputEl.value = "";
});

btnDestroyEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
  quantityElements = 0;
});

inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    createBoxes(quantityElements);
    inputEl.value = "";
  }
});

