function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxEl = document.querySelector("#boxes");

createButton.addEventListener("click", CreateBoxes);

function CreateBoxes(event) {
  const elementsQuantity = inputEl.value;
  // console.log(elementsQuantity);
  for (let i = 0; i < elementsQuantity; i++) {
    boxEl.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${30 + 10 * i}px; height: ${
        30 + 10 * i
      }px; background-color: ${getRandomHexColor()}"> </div>`
    );
  }
}

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxEl.textContent = "";
}





