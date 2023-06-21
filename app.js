const loginEmail = document.querySelector(".loginEmail")
const loginPassword = document.querySelector(".loginPassword")
const firstName = document.querySelector (".firstName")
const sureName = document.querySelector (".sureName")
const emailaddreas = document.querySelector (".emailaddreas")
const password = document.querySelector (".newPassword")
const loginBtn = document.querySelector (".loginBtn")
const signupBtn = document.querySelector (".lastbutton")
const Createnewaccount = document.querySelector(".Createnewaccount")
const modal_wrapper = document.querySelector(".modal_wrapper")
// const cross = document.querySelector(".cross")
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
    cross.addEventListener('click', createFormClose)
}








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

    const userFound = users.filter((user) =>{
        console.log("user email in user found filter", user.email)
        return user.email === loginEmail.value
    })
console.log(userFound, "==>user found in login")

if(!userFound.lenght) return alert ("this user is not registered, kindly first create an account")


console.log(loginPassword.value, "==>>> login password of input")
console.log(userFound.password, "user password from local storage")

if(userFound[0].password == loginPassword.value){
    alert("user is logging in")
    localStorage.setItem('isLoggedInUser', JSON.stringify(userFound[0]))


    
}

else{
    alert("password is inncorrect")
}

}
  
  

function signupHandler(){
    console.log("user email is our input", emailaddreas.value)

    const userFound = users.filter((user)=>{
        console.log("user email in userFound filter", user.email)
        return user.email === emailaddreas.value
    })

if(userFound.lenght) return alert ("Email address already is use, please use another email address")


                     // mobile nummber validation


 if (firstName.value !== "" && sureName.value !== "" && emailaddreas.value !== "" && password.value !== "" && date !== undefined && month !== undefined && year !== undefined && gender !== undefined){
 if(password.value<8) return alert("password is must contain 8 characters")

   const userObj = {
    firstName: firstName.value,
    sureName: sureName.value,
    emailaddreas: emailaddreas.value,
    password: password.value,
    date: new Date (`${year}-${month}-${date}`),
    gender
   
       }

users.push(userObj)

localStorage.setItem('users',JSON.stringify(users))

alert ("users signup successfully")

window.location.href="./dashboard/index.html";
firstName.value= ""
sureName.value = ""
password.value = ""
emailaddreas.value = ""


}

else{
    alert("Please write all details")
}

}


function getDateHandler(d) {
    console.log(d, "dateHandler working")
    date = d
}
function getMonthHandler(me) {
    console.log(me, "monthHandler working")
    month = me
}
function getYearHandler(y) {
    console.log(y, "yearHandler working")
    year = y
}
function getGenderHandler(g) {
    console.log(g, "genderHandler working")
    gender = g
}