const inputEl = document.querySelector("#validation-input");
const inputLength = inputEl.dataset.length;

inputEl.addEventListener("blur", onBlurInput);
function onBlurInput(event){
    if(+inputLength === event.currentTarget.value.length){
        //чистим от предыдущих классов, чтобы не перебивали
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");
    }else{
        //чистим от предыдущих классов, чтобы не перебивали
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
    }
}