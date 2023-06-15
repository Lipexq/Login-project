/* Focus nos imputs efeitos */

let inputs = document.getElementsByClassName("input-form");

for (let input of inputs) {
    input.addEventListener("blur", function () {
        if (input.value.trim() != "") {
            input.classList.add("has-val");
        } else {
            input.classList.remove("has-val");
        }
    })
};

// Verificar o Email e desabilitar o botão de enviar 

var inputEmail = document.getElementById("email")

inputEmail.addEventListener("blur", function () {
    let valor = inputEmail.value.trim();
    let changeColor = document.getElementsByClassName("focus-input-form")[0];
    let text = document.getElementsByClassName("texthidden")[0];
    let btn = document.getElementById("login-bnt");

    if (valor.includes("@") && valor.includes(".com")) {
        changeColor.classList.remove("error");
        text.classList.remove("visible");
        btn.classList.add("enable");
        btn.classList.remove("block");

    } else {
        changeColor.classList.add("error");
        text.classList.add("visible");
        btn.classList.add("block");
    }
    
});