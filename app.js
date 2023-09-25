const Createnewaccount = document.querySelector(".Createnewaccount")
const centerSignUpPgae = document.querySelector(".centerSignUpPgae")
const modal_wrapper = document.querySelector(".modal_wrapper")
const loginPassword = document.querySelector(".loginPassword")
const emailaddreas = document.querySelector(".emailaddreas")
const loginEmail = document.querySelector(".loginEmail")
const password = document.querySelector(".newPassword")
const signupBtn = document.querySelector(".lastbutton")
const firstName = document.querySelector(".firstName")
const sureName = document.querySelector(".sureName")
const loginBtn = document.querySelector(".loginBtn")
const cross = document.querySelector("#cross")

// modal opener funcation

function forShowSignUp() {
    modal_wrapper.style.display = 'unblock'
    centerSignUpPgae.style.display = "block"
    modal_wrapper.style.display = "block"
}

function forCloseSignup() {
    modal_wrapper.style.display = 'none'
    centerSignUpPgae.style.display = 'none'
}


Createnewaccount.addEventListener('click', forShowSignUp)
cross.addEventListener('click', forCloseSignup)


// login or signUp code 



let date
let year
let month
let gender


const users = JSON.parse(localStorage.getItem('users')) || []



loginBtn.addEventListener('click', loginHandler)
signupBtn.addEventListener('click', signupHandler)



function loginHandler() {

    if (!loginEmail.value || !loginPassword.value)
        return alert("Please write Email and Password")

    const userFound = users.filter((user) => {
        console.log("user email in user found filter", user.emailaddreas)
        return (user.emailaddreas == loginEmail.value);
    })
    console.log(userFound, "==> user found in login")

    if (!userFound.length) return alert('this user is not registerd first create an account')

    console.log(loginPassword.value, "login password of input");
    console.log(userFound.password, 'user password from local storage');

    if (loginPassword.value == userFound[0].password) {
        alert("user is logging in")
        localStorage.setItem('isLoggedInUser', JSON.stringify(userFound[0]))
        window.location.href = './dashboard/index.html'

    }
    else ("password is incorrect")
}


function signupHandler() {
    console.log('user email is our input', emailaddreas.value)
    const userFound = users.filter((user) => {
        console.log('user email in userFound filter', user.email)
        return user.email === emailaddreas.value
    })

    if (userFound.length) return alert('this email is already used')


    // validation


    if (firstName.value !== "" && sureName.value !== "" && emailaddreas.value !== "" && password.value !== "" && date !== undefined && month !== undefined && year !== undefined && gender !== undefined) {
        if (password.value < 8) return alert("this is must be greater then 8 character")

        const UserObj = {
            firstName: firstName.value,
            sureName: sureName.value,
            emailaddreas: emailaddreas.value,
            password: password.value,
            date: new Date(`${year}-${month}-${date}`),
            gender
        }
        users.push(UserObj)

        localStorage.setItem('users', JSON.stringify(users))


        alert("users signup successfully")

        window.location.href = './index.html'
        firstName.value = ""
        sureName.value = ""
        emailaddreas.value = ""
        password.value = ""

    }

    else {
        alert("please write all details")
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