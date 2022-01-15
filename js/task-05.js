const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event){
    if(event.currentTarget.value === ""){
        spanEl.textContent = "Anonymous";
    }else{
        spanEl.textContent = event.currentTarget.value;
    }
}