import { menuArray } from "./foodorderdata.js";
let items = [];
const orderDetails = document.getElementById('order-details')
const allItems = [
  {
    name: "Pizza",
    id: 0,
    price: 14,
    emoji: "🍕",
  },
  {
    name: "Hamburger",
    price: 12,
    emoji: "🍔",
    id: 1,
  },
  {
    name: "Beer",
    price: 12,
    emoji: "🍺",
    id: 2,
  },
];

document.addEventListener("click", function (e) {
 
  if (e.target.dataset.add) {
    orderDetails.style.display= "block"
    if (e.target.dataset.add === "0") {
      const checkPizzaExist = items.length
        ? items.some((d) => d.id === 0)
        : false;
      if (!checkPizzaExist) {
        items.push(allItems[0]);
      } else {
        const idx = items.findIndex((it) => it.id === 0);
        items[idx].price += 14;
      }
    } else if (e.target.dataset.add === "1") {
      const checkBurgerExist = items.length
        ? items.some((d) => d.id === 1)
        : false;

      if (!checkBurgerExist) {
        items.push(allItems[1]);
      } else {
        const idx = items.findIndex((it) => it.id === 1);
        items[idx].price += 12;
      }
    } else if (e.target.dataset.add === "2") {
      const checkBeerExist = items.length
        ? items.some((d) => d.id === 2)
        : false;

      if (!checkBeerExist) {
        items.push(allItems[2]);
      } else {
        const idx = items.findIndex((it) => it.id === 2);
        items[idx].price += 12;
      }
    }
   // getSelectedItem();
  }
  else if(e.target.dataset.order){
    let formDiv = document.getElementById('form-div')
      formDiv.innerHTML = ` <h2>Enter card detail </h2>
                         <form id="customer-detail-form">
                         <input type= text name="fullName" placeholder= "Enter your name" required>
                         <input type= text placeholder= "Enter card number" required>
                         <input type= text placeholder="CVV" required>
                        <button class="pay-btn">Pay</button>
                         </form> `
                         formDiv.style.display = "block"
                         const customerDetailForm = document.getElementById('customer-detail-form')
                         customerDetailForm.addEventListener('submit',function(e){
                          e.preventDefault()
                          const formData = new FormData(customerDetailForm)
                         const fullName = formData.get('fullName')
                         formDiv.style.display="none"
                        
                        // orderDetails.style.display = "none"
                         orderDetails.innerHTML = `<h2> Thanks, ${fullName}! your order is on its way!!</h2>`
                         orderDetails.style.marginLeft= "430px"
                         })
                         
                        }
    else if(e.target.dataset.remove){
      console.log(allItems)
           if(e.target.dataset.remove==="0"){
               console.log ( document.getElementById('menuArray.id[0]'))
           }
           else if(e.target.dataset.remove==="1"){
            
           }
           else if(e.target.dataset.remove==="2"){
            
           }
    }
    getSelectedItem();
    
});



function selectedCartItem() {
  let selectedCartItem = "";
  items.forEach(function (item) {
    selectedCartItem += `
   <div class="item-cart-display">
    
    <p>${item.emoji} ${item.name}</p>
    <span  class="remove"><h4 data-remove="${item.id}">remove</h4></span>
    <span class="item-price" id="item-price">${item.price}</span>
    
    </div>
    
    `;
  });
  return selectedCartItem;
}

function getMenuHtml() {
  let menuHtml = "";

  menuArray.forEach(function (item) {
    menuHtml += `
        <div class="menu">
        <div class="menu-inner">
        <p class="emoji"> ${item.emoji} </p>
        <div class="item-detail">
        <p>${item.name}</p>
        <p>${item.ingredients}</p>
        <p>${item.price}</p>
        </div>
        <div class="add-item-logo">
        <i class="fa-regular fa-square-plus" data-add="${item.id}"></i></p>
        </div>
        </div>
        </div>
        
        `;
  });
  return menuHtml;
}
function render() {
  const feed = document.getElementById("feed");
  feed.innerHTML = getMenuHtml();
}
function getSelectedItem() {
  let cartItem = document.getElementById("cart-item");
  cartItem.innerHTML = selectedCartItem();
  
  let billAmount = document.getElementById("billing-amount")
  let itemPrice= 0
  items.forEach(function(item){
    let price = item.price
    itemPrice = itemPrice+price
   billAmount.innerHTML = itemPrice 
  })
}
render();
