const form = document.querySelector(".login-form");
const buttonEl = document.querySelector("button");

form.addEventListener("submit", onSubmit);


function onSubmit(event){
    event.preventDefault();
    
    const{
        elements: {email, password}, 
    } = event.currentTarget;;

    if(email.value === "" || password.value === ""){
        alert("Все поля должны быть заполнены!");
    }

    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData);
}
