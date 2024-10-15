const form = document.getElementById("form")
const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const senha2 = document.getElementById("senha2")



function ShowError(input,mensagem){
    const formControl = input.parentElement
    formControl.className = "form-control error"
}


function checkrequired(listainput){

    listainput.forEach(function (input){
        if(input.values == ""){

        }
    })

}
form.addEventListener("submit", function(event) {
    event.preventDefault()
    
    checkrequired([usuario,email,senha,senha2])
})


