const productContainer= document.querySelector(".product")
const myCartDiv= document.querySelector('.mycart')
const allProduct= [
    {"id":1,
        "name":'iphone 17',
        'price':1232424
    },
     {"id":2,
        "name":'air pod',
        'price':1234
    },
     {"id":3,
        "name":'mask',
        'price':10
    },
     {"id":4,
        "name":'cap',
        'price':350
    },
    
]
let cart={}

let totalPrice;

allProduct.forEach((item) => {
    const productCard = document.createElement('div')

    productCard.innerHTML = `
      <div class="item">
        <h6>Product Name: ${item.name}</h6>
        <h6>Product Price: ${item.price}</h6>
        <button class="add-btn">Add to cart</button>
      </div>
    `

    const btn = productCard.querySelector(".add-btn")
    btn.addEventListener("click", () => addToCart(item))

    productContainer.appendChild(productCard)
})


const addToCart=({id,name,price})=>{
 
  
   if(!cart[id]){
      cart[id]= {
        name,
        price,
        quantity:1
      }
   }
   else{
    cart[id].quantity+=1
 
   }
   renderCart()
  
   
}

const renderCart=()=>{
       myCartDiv.innerHTML=''
    Object.keys(cart).forEach((key)=>{
    const item= cart[key]
  const cartDiv = document.createElement('div')
  cartDiv.innerHTML=`
   <div class="item">
        <h6>Product Name: ${item.name}</h6>
        <h6>Product  Quantity: ${item.quantity}</h6>
        <button class="remove-btn">Remove </button>
        <button class="remove-whole-btn">Remove All</button>
        
      </div>
  
  `
  const btn= cartDiv.querySelector('.remove-btn')
  btn.addEventListener('click',()=>{
    cart[key].quantity-=1
    if(cart[key].quantity===0){
        delete  cart[key]}
     renderCart()
     
  })
  const removeWhole= cartDiv.querySelector('.remove-whole-btn')
  removeWhole.addEventListener('click',()=>{
   delete cart[key]
   renderCart()


  })
  myCartDiv.appendChild(cartDiv)
  })
  totalPrice=0;
  totalPriceCalculate()
}

const totalPriceCalculate=()=>{
    Object.keys(cart).forEach((key)=>{
        totalPrice+=cart[key].quantity * cart[key].price
    })
    const  priceDiv= document.createElement('div')
    priceDiv.innerHTML=    totalPrice> 0 ? `
    <h3>  Total Price : ${totalPrice}
    
    `: ``
    myCartDiv.appendChild(priceDiv)
}