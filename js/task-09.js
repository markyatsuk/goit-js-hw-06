function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
}


const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", getRandomHexColor);
buttonEl.addEventListener("click", changeColor);

function changeColor(){
  document.body.style.background = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

