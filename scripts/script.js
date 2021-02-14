// Script.js

/**
 * Cart Action to manage the cart and the button selection
 * @param {object} cart Shopping cart
 */

 function cartAction (cart) {
  var index = 1;
  if (cart[item.id - index] === "0")
    product.shadowRoot.querySelector("button").innerHTML = "Add to Cart";
  else {
    product.shadowRoot.querySelector("button").innerHTML = "Remove from Cart";
    ++document.getElementById("cart-count").innerHTML;
  }
}

/**
 * Creating Items with their attributes
 * 
 * @param {querySelector} item - The item created with the attribute
 * @returns void
 */
  
  function createItem  (item){
  let productItem = document.createElement("product-item");
  productItem.setAttribute("id", item.id);
  productItem.shadowRoot.querySelector("img").src = item.image;
  productItem.shadowRoot.querySelector("img").alt = item.title;
  productItem.shadowRoot.querySelector(".title").innerText = item.title;
  productItem.shadowRoot.querySelector(".price").innerText = "$" + item.price;

  document.getElementById("product-list").append(productItem);
  (cart) => cartAction(cart);
}

/**
 * Fetching data from API : fake store api
 */
window.addEventListener("DOMContentLoaded", () => {
  let items = JSON.parse(localStorage.getItem("items"));

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => localStorage.setItem("items", JSON.stringify(data)))
    .then(() => { items = JSON.parse(localStorage.getItem("items")); })
    .then(() => { localStorage.setItem("cart", new Array(items.length).fill(0).toString());
    items.forEach((item) => createItem(item));
    });
});