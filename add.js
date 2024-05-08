const add =document.querySelector(".add")
const description=document.querySelector(".type")
const price=document.querySelector(".price")
const rating=document.querySelector(".stars")
const img=document.querySelector(".img")
const container =document.querySelector(".container")
const deleteProduct = document.querySelector(".delete")
const action = document.querySelector(".action")
const idRoom =document.querySelector(".product-id")

// // </div>
// // <label  for="name">name</label>
// // <input  type="text" name="name" class="type" />
// // <label   for="price">price:  </label> 
// // <input type="text" name="price" class="price" />
// //
// // <div class="starts">Rating:</div> 
// // <button class="add"> <span class="material-symbols-outlined">
// //     add
// // </span></button>
// //"https://assets.pinterest.com/ext/embed.html?id=1125759238105339207"
// // console.log("lolo")
//<i class="fa-solid fa-splotch"></i>



add.addEventListener("click",async()=>{
  console.log("onClick")
  try { await axios.post('/api/v1/product',{name:description.value,
        price:price.value,
        rating:[],
        id:idRoom.value,
        img:img.value})

        action.innerHTML=`<h1>added sccessfuly</h1>`
        const a = document.createElement("div")
        a.innerHTML=`<iframe  src="${img.value}"  height="200" width="100" frameborder="0" scrolling="no" ></iframe>
        <p>"${id.value}"</p>`
        console.log("added")
       

        } catch (error) {
        console.log(error);
    }
    container.appendChild(a)
    })


    deleteProduct.addEventListener('click',async() => {
      try{
        await axios.delete(`/api/v1/product`,{id:idRoom.value});
        action.innerHTML=`<h1>deleted sccessfuly</h1>`

      }catch(err){
        console.log("Error deleting product");
      }
    })


   
// 


