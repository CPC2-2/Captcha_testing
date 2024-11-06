// start of the js
let enviar = document.getElementById("enviar");
let namebox = document.getElementById("name");
let passwordbox = document.getElementById("password");
let box_name_input = document.getElementById("box_name_input");
let box_password_input = document.getElementById("box_password_input");
let show_error = document.getElementById("show_error");

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
        //once we validate the data we can go to the captcha;
        
    }
    const wrongdata = document.createElement("h3");
    wrongdata.textContent = "Los datos no son correctos";
    show_error.innerHTML = wrongdata.textContent;
})
