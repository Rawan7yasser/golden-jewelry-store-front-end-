
const login =document.querySelector(".login")
const user =document.getElementById("user")
const pass =document.getElementById("password")
const button=document.querySelector(".red-button")
const email =document.getElementById("email")


axios.get("http://localhost:3000/api/v1/login")
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
  



function log(){
 axios.get(`http://localhost:3000/api/v1/login/${email.value}`)
  .then(function (response) {
    console.log(response.data);

  })
  .catch(function (error) {
    console.log(error);
    })}

button.addEventListener("click",log)


