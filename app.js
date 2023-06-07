const loginEmail = document.querySelector(".loginEmail")
const loginPassword = document.querySelector(".loginPassword")
const firstName = document.querySelector (".firstName")
const sureName = document.querySelector (".sureName")
const mobNumber = document.querySelector (".mobNumber")
const newPassword = document.querySelector (".newPassword")
const loginBtn = document.querySelector (".loginBtn")
const Createnewaccount = document.querySelector(".Createnewaccount")
const modal_wrapper = document.querySelector(".modal_wrapper")
const cross = document.querySelector(".cross")
const centerSignUpPgae = document.querySelector(".centerSignUpPgae")


function createFormShow(){
    modal_wrapper.style.display= 'block'
    centerSignUpPgae.style.display= 'block'

}
Createnewaccount.addEventListener('click', createFormShow)


function createFormClose(){
    modal_wrapper.style.display= 'none'
    centerSignUpPgae.style.display= 'none'
    console.log('hello')

}

cross.addEventListener('click', createFormClose)