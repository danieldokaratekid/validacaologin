const form=document.querySelector("#form")
const nameInput=document.querySelector("#name")
const emailInput=document.querySelector("#email")
const passwordInput=document.querySelector("#password")
const jobSelect=document.querySelector("#job")
const messageTextarea=document.querySelector("#message")

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    //Verifica se o nome está vazio
    if(nameInput.value===""){
        alert("por favor,preencha o seu nome");
        return;
    }
    //Verifica se o e-mail está preechido e se é válido
    //Validação não é 100% precisa
    if(emailInput.value===""||isEmailValid(emailInput.value)){
        alert("Por favor,preencha o seu email");
        return;
    }
    //Verifica se está preenchido
    if(!validatePasssword(passwordInput.value)){
    alert("A senha precisa de pelo menos 8 dígitos.");
    return;
    }
   //Verificar se a situação foi selecionada
    if(jobSelect.value===""){
    alert("Por favor,selecione a sua situação");
    return;
    }
   //Verifica se a mensagem esyá preenchida
   if(messageTextarea.value===""){
    alert("Por favor,escreva uma mensagem");
    return;
   }
    //Se todos os campos estiverem corretamente preenchidos,envio o form
    form.submit();
});

//Função que valida email
function isEmailValid(email) {
//criar uma regex para validar email
const emailRegex= new RegExp (
    //USUARIO12@HOST.COM.BR
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
);
}

if(emailRegex.test(email)){
    return true
}
return false;
//função que valida a senha
function validatePassword(password,minDigits){
if(password.lenght>=minDigits){
//Senha válida
return true
}
//Senha Inválida
return false
}