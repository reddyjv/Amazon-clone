

let productsHTML='';

products.forEach((product)=>{
   productsHTML +=`
  <div class="submain">
         
  <div class="image">
   <img src="${product.image}" alt="productimage" class="pic">
  </div>

  <div class="info">
     <strong>${product.name}</strong> 

  </div>

  <div class="rating">
   <img src="${product.rating.stars}" alt="ratings" class="ratings">
   <div class="number">${product.rating.count}</div>
  </div>

  <div class="price">
   <strong>$${(product.priceCents /100).toFixed(2)}</strong>
  </div>

  <div class="itemcount">
   <select class="selector">
     <option>1</option>
     <option>2</option>
     <option>3</option>
     <option>4</option>
     <option>5</option>
     <option>6</option>
   </select>
  </div>

  <div class="empty">

  </div>


  <div >
   <button class="addtocart respond"
   data-product-id="${product.id}">Add to Cart</button>
  </div>
 

</div>`;


  
});

document.querySelector('.mainjs').innerHTML=productsHTML;
document.querySelectorAll('.respond').forEach((button)=>{
  button.addEventListener('click',()=>{
   
  const productid = button.dataset.productid;
  let matchingItem;

  cart.forEach((item)=>{
    if(productid === item.productid){
    matchingItem=item;
    }
  });

  if(matchingItem){
    matchingItem.quantity +=1;
  }else{

    cart.push({
      productid:productid,
      quantity:1
    });

  }
  let carQuantity=0;

  cart.forEach((item)=>{
  carQuantity +=item.quantity;
  });

  document.querySelector('cartquantity').innerHTML=carQuantity;
console.log(carQuantity);
console.log(cart);

  });
});