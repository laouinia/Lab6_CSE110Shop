// product-item.js
const ul = document.getElementById("product-list");
const createNode = (elem) => {
  return document.createElement(elem);
};
// append an element to parent
const appendNode = (parent, elem) => {
  parent.appendChild(elem);
};
class ProductItem extends HTMLElement {
  constructor() {
    super();

    let li = createNode("li");
    let img = createNode("img");
    let title = createNode("p");
    let price = createNode("p");
    let button = createNode("button");
    button.innerText = "Add to Cart";

    appendNode(li, img);
    appendNode(li, title);
    appendNode(li, price);
    appendNode(li, button);
    appendNode(ul, li);

    button.onclick = () => {
      var index = 1;
      let cart = localStorage.getItem("cart").split(",");
      if (cart[this.id - index] === "0") {
        cart[this.id - index] = "1";
        localStorage.setItem("cart", cart);
        button.innerHTML = "Remove from Cart";
        document.getElementById("cart-count").innerHTML++;
      } else {
        cart[this.id - index] = "0";
        localStorage.setItem("cart", cart);
        button.innerHTML = "Add to Cart";
        document.getElementById("cart-count").innerHTML--;
      }
    };
    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "styles/styles.css");
    let shadowDOM = this.attachShadow({ mode: "open" });
    shadowDOM.append(li);

    li.classList.add("product");
    title.classList.add("title");
    price.classList.add("price");
    shadowDOM.append(style);
  }
}

customElements.define("product-item", ProductItem);
