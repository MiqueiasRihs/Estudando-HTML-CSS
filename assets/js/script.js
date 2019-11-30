document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botao foi clicado')

});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    
    console.log('O mouse esta sob o formulario')

})

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('O mouse esta fora')

})

// Função para pegar os valores da entradad do usuario
document.querySelector('#form-login').addEventListener('submit', e=> {

    e.preventDefault()

    let email = document.querySelector('#email').value 
    let password = document.querySelector('#password').value 

    let json = {
        email,
        password
    }

    if(!json.email) {

        console.error("O campo email deve ser preenchido")

    } else if(!json.password) {

        console.error("O campo password deve ser preenchido")

    } else {

        console.info("Dados validados com sucesso")

    }


})