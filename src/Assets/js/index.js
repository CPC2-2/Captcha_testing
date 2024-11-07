// start of the js
let enviar = document.getElementById("enviar");
let namebox = document.getElementById("name");
let passwordbox = document.getElementById("password");
let box_name_input = document.getElementById("box_name_input");
let box_password_input = document.getElementById("box_password_input");
let show_error = document.getElementById("show_error");
let mostrar_captcha = document.getElementById("mostrar_captcha");
let chatpcha_box = document.getElementById("chatpcha_box");
let chatpcha_container = document.getElementById("chatpcha_container");
let captcha =  document.getElementById("captcha");

//regular expresion for inputs check
let Rexname = /^[A-Za-z]{2,30}$/;// regular expresion for name camp
let Rexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;// regular expresion for password camp

namebox.addEventListener("input", (e) => {
    if (Rexname.test(namebox.value) === true) {
        namebox.style.border = "1px solid #17fa40";
    } else {
        namebox.style.border = "1px solid red";
    }
});
//campos contrasenya
passwordbox.addEventListener("input", (e) => {
    if (Rexpassword.test(passwordbox.value) === true) {
        passwordbox.style.border = "1px solid #17fa40";
    } else {
        passwordbox.style.border = "1px solid red";
    }
});

//Captcha Zone ------------------------------------------>
enviar.addEventListener("click", (e) => {
    e.preventDefault();
    if (Rexname.test(namebox.value) === true && Rexpassword.test(passwordbox.value) === true) {
        chatpcha_box.style.display = "flex";
        chatpcha_container.style.display = "flex";
        namebox.style.border = "1px solid gray";
        passwordbox.style.border = "1px solid gray";
    }else{
        const wrongdata = document.createElement("h3");
        wrongdata.textContent = "Los datos no son correctos o no hay datos";
        show_error.innerHTML = wrongdata.textContent;
    }
})

//generator(mostrar_captcha);
// if (captcha.value.length === 0){ // comprovamos si el captcha ha sido rellenado
//     alert("Primero confirma acaba los siguientes datos");
// }else{
//     console.log("Comprobacion Correcta");
// }

//function generator 
function generator(caja){
    let chars = "1234567890abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKKLMNÑOPQRSTUVWXYZ!·$%&/()=ª123456789";
    let charslegnth = 7;
    let captcha = "";

    //hacemos el bucle para rrecorrer y generar la cadena
    for (let i = 0; i < charslegnth; i++){
        let random = Math.floor(Math.random() * chars.length);
        captcha += chars.charAt(random);
    }
    // una vez tenemos la cadena la presentamos por pantalla para verificar si es un humano
    caja.innerHTML = captcha;
}