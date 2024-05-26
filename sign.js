
console.log("huhuhu")
const signIn =document.querySelector(".sign")
const user =document.getElementById("user")
const pass =document.getElementById("password")
const mail =document.getElementById("email")
const  button=document.querySelector(".red-button")




const url ="http://localhost:3000/api/v1/sign"





function createUser(){
  console.log("loolooooo")
  axios.post(url, {
    email:mail.value,
    userName:user.value,
    password:pass.value
  })
  .then(function (response) {
  console.log(response);
  })
  .catch(function (error) {
    console.log(error);

    if(error){
      function myGreeting(){
      mail.style.border="1px solid red"
      const err =document.createElement("p")
      err.textContent="not available please try again "
      err.className='err'
      signIn.appendChild(err)
    }

    myGreeting()
    
  }
  
  });

 
}


button.addEventListener("click",createUser)



