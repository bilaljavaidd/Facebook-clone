const isLoggedInUser = JSON.parse(localStorage.getItem('isLoggedInUser'))
const currentUserName = document.querySelector('#currentUserName')
const description = document.querySelector('.description')
const inputbar = document.querySelector('.inputbar')
const postingArea = document.querySelector('.postingarea')
const logout = document.querySelector('.logout')
const profileImg = document.querySelector('#profileImg')
const inputImg = document.querySelector('#inputFile')


const [first, last] = [isLoggedInUser.firstName, isLoggedInUser.sureName];

const firstName = first.slice(0, 1).toUpperCase() + first.slice(1).toLowerCase();
const lastName = last.slice(0, 1).toUpperCase() + last.slice(1).toLowerCase();


logout.addEventListener('click', ()=>{
  window.location.href = "../index.html"
})

if(!isLoggedInUser){
  window.location.href = '../index.html'
}

//  profile name changes


const posts = JSON.parse(localStorage.getItem("posts")) || [];


posts.forEach((post) =>{
  var div1 = document.createElement("div")
  div1.setAttribute('class', 'appendDiv')
  div1.innerHTML = `
  <div class="pictureButtons">
   <div class="postingUpperDiv">

  <div class="d-flex">
    <div class="profilePostimg">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvT59urBwJHSQXaH3g7IlcOkYg6qgN252OhLouqTxZ66ROulvZ_5Xs1LnMgUG_h_JCP8&usqp=CAU"
        width="45" height="45" alt=""  style="border-radius: 50px;">
    </div>

    <div class="postNameDateTime">
      <h3 class="profileName">${post.userName}</h3>
      <span class="span1">${post.date}</span><span>at</span>
      <span>${post.time}</span>

    </div>

  </div>

</div>


<div class="posteditbutton d-flex">
  <img width="64" height="64" src="https://img.icons8.com/windows/64/menu-2.png" alt="menu-2" />
  <img width="64" height="64" src="https://img.icons8.com/small/64/delete-sign.png" alt="delete-sign" />
</div>
</div>
<div class="description">

${post.postContent}


</div>

<div class="postimg">

<img src="./Assests/post2.jpg" alt="" width="735px" height="600px" id ="profileImg">


</div>

<div class="likeCommentShare">

<button>
  <img width="32" height="32" src="https://img.icons8.com/windows/32/facebook-like.png" alt="facebook-like"/>
  <b>Like</b> </button>

<button class="Comment">
  <img width="32" height="32" src="https://img.icons8.com/ios-filled/50/speech-bubble-with-dots.png"
    alt="speech-bubble-with-dots" /> <b>Comment</b><button>

    <button><img width="32" height="32" src="https://img.icons8.com/windows/32/share-3.png" alt="share-3"/>
      <b>Share</b> </button>
<br/>

</div>
</div>`
postingArea.prepend(div1)
})



currentUserName.innerHTML = `${firstName} ${lastName}`


function postHandler() {
  var div1 = document.createElement("div")
  div1.setAttribute('class', 'appendDiv')
  div1.innerHTML = `
  <div class="pictureButtons">
   <div class="postingUpperDiv">

  <div class="d-flex">
    <div class="profilePostimg">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvT59urBwJHSQXaH3g7IlcOkYg6qgN252OhLouqTxZ66ROulvZ_5Xs1LnMgUG_h_JCP8&usqp=CAU"
        width="45" height="45" alt=""  style="border-radius: 50px;">
    </div>

    <div class="postNameDateTime">
      <h3 class="profileName">${firstName} ${lastName}</h3>
      <span class="span1">${new Date().toLocaleDateString()}</span><span>at</span>
      <span>${new Date().toLocaleTimeString()}</span>

    </div>

  </div>

</div>


<div class="posteditbutton d-flex">
  <img width="64" height="64" src="https://img.icons8.com/windows/64/menu-2.png" alt="menu-2" />
  <img width="64" height="64" src="https://img.icons8.com/small/64/delete-sign.png" alt="delete-sign" />
</div>
</div>
<div class="description">

${inputbar.value}


</div>

<div class="postimg">

<img src="./Assests/post2.jpg" alt="" width="735px" height="600px" id ="profileImg">


</div>

<div class="likeCommentShare">

<button>
  <img width="32" height="32" src="https://img.icons8.com/windows/32/facebook-like.png" alt="facebook-like"/>
  <b>Like</b> </button>

<button class="Comment">
  <img width="32" height="32" src="https://img.icons8.com/ios-filled/50/speech-bubble-with-dots.png"
    alt="speech-bubble-with-dots" /> <b>Comment</b><button>

    <button><img width="32" height="32" src="https://img.icons8.com/windows/32/share-3.png" alt="share-3"/>
      <b>Share</b> </button>
<br/>

</div>
</div>`

postingArea.prepend(div1)


const postObj = {
  userName: `${firstName} ${lastName}`,
  emailaddreas: isLoggedInUser.emailaddreas,
  postContent: inputbar.value,
  date: new Date ().toLocaleDateString(),
  time: new Date ().toLocaleTimeString()
}

posts.push(postObj)

localStorage.setItem('posts',JSON.stringify(posts))

inputbar.value = "";

}




// console.log(date)
// console.log (email)
// console.log(firstName)
// console.log(mobileNum)
// console.log(password)
// console.log(surName)

// if (!isLoggedInUser){
//     window.location.href = "../index.html";
// }





