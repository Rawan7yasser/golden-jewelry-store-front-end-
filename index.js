const showMyProducts =document.querySelector('.products')


const container =document.querySelector('.container');
const navBar =document.querySelectorAll(".nav-bar");
const menu = document.querySelector(".menu")
const main = document.querySelector(".main")


let isOpen = false;


menu.addEventListener("click", function () {
    isOpen= !isOpen ;
   if (isOpen == true) {
    console.log("true")

   }
   else{
    console.log("false")
   }

    
}) 




var a = 0 



const showProduct =async()=>{
    
    const url ='/api/v1/product'
   
try{
        const myProducts =await axios.get(url)
        myProducts.data.map((pro)=>{
        let  productDiv = document.createElement('div')
        productDiv.classList.add('product-m');
        productDiv.innerHTML=`
        <iframe src="${pro.img}"  height="326" width="236" frameborder="0" scrolling="no" ></iframe>
            <div class="info-prod">
            <h2>${pro.name}</h2>
            <p class="price">price:<span>${pro.price}</span></p>
            <button>add to car<i class="fa-solid fa-cart-shopping"></i></button>
            <br>
            <div class="rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>
            </div>
            </div>
            `
            showMyProducts.appendChild(productDiv) ;
        })
        

    // const like= document.querySelectorAll('.liked') 
    // let [id]=myProducts.data.map(e=>e._id)
    // like.forEach((e)=>{
    //     e.addEventListener('click',async(e)=> { 
    //         a++
    //         e.preventDefault()
    //         e.target.classList.toggle("active");  
    //         try{
    //         await axios.patch(`/api/v1/product/${id}`,{rating:[1]})
           
    //         console.log("ccccc")
     //     }catch(err){console.log(err)}
    //   })
        
   // })

    
// console.log(myProducts.data.map(e=>e.name)); 
// console.log(myProducts.data.map(e=>e._id));


   
 
}catch(err){
    console.log(err)
}

var checked = false

document.querySelectorAll(".fa.fa-star").forEach((e)=>{
e.addEventListener("click",()=>{
    e.classList.add("checked")
    checked = true;
   })
   
})



}

showProduct()
