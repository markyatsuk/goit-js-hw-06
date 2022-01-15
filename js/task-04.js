let counterValue = 0; 
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const spanEl = document.querySelector("#value");

incrementButton.addEventListener("click", onIncremntButtonClick);
decrementButton.addEventListener("click", onDecremntButtonClick);

function onIncremntButtonClick(){
    counterValue++;
    spanEl.innerHTML = counterValue;
}

function onDecremntButtonClick(){
    counterValue--;
    spanEl.innerHTML = counterValue;
}

