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

let generatedCaptcha = "";
let numintentos = 0;

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
        namebox.style.border = "1px solid gray";
        passwordbox.style.border = "1px solid gray";
        if (generatedCaptcha === ""){
            generatedCaptcha = generator();
            mostrar_captcha.innerHTML = generatedCaptcha; // Muestra el captcha generado solo la primera vez
            chatpcha_box.style.display = "flex";
            chatpcha_container.style.display = "flex";
        }else{
            //comprueba el catpcha enviado por el user
            if(captcha.value === generatedCaptcha){
                alert("Captcha verificado correctamente. Enviando formulario...");
            }else{
                alert("Captcha incorrecto. Intente de nuevo");
                generator(mostrar_captcha);
                mostrar_captcha.innerHTML = generatedCaptcha; // Muestra el nuevo captcha
                mostrar_captcha.innerHTML = ""; 
                mostrar_captcha.innerHTML = generator(mostrar_captcha.innerHTML = generatedCaptcha);
                numintentos++;
                if (numintentos === 3){
                    alert("Has tenido demasiados intentos se va a recargar la pagina");
                    window.location.reload();
                }
            }
        }
    }else{
        const wrongdata = document.createElement("h3");
        wrongdata.textContent = "Los datos no son correctos o no hay datos";
        show_error.innerHTML = wrongdata.textContent;
    }
})

//function generator 
function generator(){
    let chars = "1234567890abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKKLMNÑOPQRSTUVWXYZ!·$%&/()=ª123456789";
    let charslegnth = 7;
    let captcha = "";

    //hacemos el bucle para rrecorrer y generar la cadena
    for (let i = 0; i < charslegnth; i++){
        let random = Math.floor(Math.random() * chars.length);
        captcha += chars.charAt(random);
    }
    // una vez tenemos la cadena la presentamos por pantalla para verificar si es un humano
    return captcha;
}