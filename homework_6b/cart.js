// const storedCart = JSON.parse(localStorage.getItem("savedCart"));
// const cart = storedCart ? storedCart : [];
var basketItems = document.getElementById("basket-items");
const itemTemplate = document.getElementById("basket-item-template");
const emptyTemplate = document.getElementById("empty-basket");
const total = document.getElementById("total");
var totalPrice = 0;

function renderCart() {
    if (cart.length == 0) {
        console.log("empty basket");
        const clone = emptyTemplate.content.cloneNode(true);
        basketItems.appendChild(clone);
        total.innerText = "Total: $0.00";
    } else {
        totalPrice = 0;
        for (let item of cart){
            console.log(item);
            showProductInCart(item);
            totalPrice = totalPrice + item.price;
        }
        total.innerText = `Total: $${totalPrice}.00`
    }
}
renderCart();

function showProductInCart(product) {
    var clone = itemTemplate.content.cloneNode(true);
    clone.querySelector(".basket-name").innerText = product.flavor;
    clone.querySelector(".basket-glazing").innerText = `w/ ${product.glazing} glaze`;
    clone.querySelector(".basket-quantity").innerText = `${product.quantity} x`;
    clone.querySelector(".basket-price").innerText = `$${product.price}.00`;
    clone.querySelector(".basket-item-img").setAttribute("src", product.image);
    var button = clone.querySelector(".remove-item-btn");
    button.addEventListener("click", function () {
        console.log("LSFJSLDFKSDLJ")
        // Remove item from stored cart list
        const index = cart.findIndex(function (item) {
            if ((item.flavor == product.flavor) 
            && (item.glazing == product.glazing)
            && (item.quantity == product.quantity)) {
                return true;
            }
        });
        console.log("original cart", cart.length, cart, index);
        cart.splice(index, 1);
        localStorage.setItem("savedCart", JSON.stringify(cart));
        // Update displayed basket items
        basketItems.removeChild(this.parentNode.parentNode.parentNode.parentNode);
        // Update total price
        totalPrice = totalPrice - product.price;
        total.innerText = `Total: $${totalPrice}.00`;
        // Update number of items in header
        itemsInCart = itemsInCart - product.quantity;
        console.log("new items in cart", itemsInCart);
        localStorage.setItem("itemsInCart", itemsInCart);
        if (itemsInCart != 0) {
            itemsInCartElement.innerText = itemsInCart; 
        } else { // Display empty basket notice
            itemsInCartElement.innerText = "";
            const clone = emptyTemplate.content.cloneNode(true);
            basketItems.appendChild(clone);
        }
    });
    basketItems.appendChild(clone);
}

