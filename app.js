const loginEmail = document.querySelector(".loginEmail")
const loginPassword = document.querySelector(".loginPassword")
const firstName = document.querySelector (".firstName")
const sureName = document.querySelector (".sureName")
const emailaddreas = document.querySelector (".emailaddreas")
const newPassword = document.querySelector (".newPassword")
const loginBtn = document.querySelector (".loginBtn")
const signupBtn = document.querySelector (".lastbutton")

const Createnewaccount = document.querySelector(".Createnewaccount")
const modal_wrapper = document.querySelector(".modal_wrapper")
const cross = document.querySelector(".cross")
const centerSignUpPgae = document.querySelector(".centerSignUpPgae")

  
      // modal opener funcation

function createFormShow(){
    modal_wrapper.style.display= 'block'
    centerSignUpPgae.style.display= 'block'
   
}
Createnewaccount.addEventListener('click', createFormShow)


function createFormClose(){
    modal_wrapper.style.display= 'none'
    centerSignUpPgae.style.display= 'none'
    

}

cross.addEventListener('click', createFormClose)


      // login or signup code 


let date;
let month;
let year;
let gender;


const users = JSON.parse (localStorage.getItem('user')) || []
console.log(users)


loginBtn.addEventListener('click',loginHandler)
signupBtn.addEventListener('click', signupHandler)

    console.log(loginEmail.value)
    console.log(loginPassword.value)

function loginHandler() {

    if(!loginEmail.value || !loginPassword.value) return alert ('please write email or password to continue')

    const userfound = users.filter((user) =>{
        console.log("user email in user found filter", user.email)
        return user.email === loginEmail.value
    })

  }
  
  




