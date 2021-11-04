var basketItems = document.getElementById("basket-items");
const itemTemplate = document.getElementById("basket-item-template");
const emptyTemplate = document.getElementById("empty-basket");
const total = document.getElementById("total");
var totalPrice = 0;
var wishlistItems = document.getElementById("wishlist-items");
const wishlistTemplate = document.getElementById("wishlist-template");

function renderCart() {
    if (cart.length == 0) {
        const clone = emptyTemplate.content.cloneNode(true);
        basketItems.appendChild(clone);
        total.innerText = "Total: $0.00";
    } else {
        totalPrice = 0;
        for (let item of cart){
            showProductInCart(item);
            totalPrice = totalPrice + item.price;
        }
        total.innerText = `Total: $${totalPrice}.00`
    }
    // Render wishlist
    if (wishlist.length != 0) {
        for (let item of wishlist) {
            showProductInWishlist(item);
        }
    }
}
renderCart();

function showProductInWishlist(productName) {
    product = products[productName];
    const clone = wishlistTemplate.content.cloneNode(true);
    var wishlistName = clone.querySelector(".basket-name");
    wishlistName.innerText = product.flavor;
    wishlistName.addEventListener("click", function () {
        openProductDetails(productName);
    });
    clone.querySelector(".wishlist-item-img").setAttribute("src", product.image);
    wishlistItems.appendChild(clone);
}

function showProductInCart(product) {
    var clone = itemTemplate.content.cloneNode(true);
    var basketName = clone.querySelector(".basket-name");
    basketName.innerText = product.flavor;
    basketName.addEventListener("click", function () {
        openProductDetails(product.itemId);
    });
    // clone.querySelector(".basket-name").addEventListener("click", function () {
    //     openProductDetails(thisProductName);
    // });
    console.log("hiiii", product);
    clone.querySelector(".basket-glazing").innerText = `w/ ${product.glazing} glaze`;
    clone.querySelector(".basket-quantity").innerText = `${product.quantity} x`;
    clone.querySelector(".basket-price").innerText = `$${product.price}.00`;
    clone.querySelector(".basket-item-img").setAttribute("src", product.image);
    var button = clone.querySelector(".remove-item-btn");
    button.addEventListener("click", function () {
        // Remove item from stored cart list
        const index = cart.findIndex(function (item) {
            if ((item.flavor == product.flavor) 
            && (item.glazing == product.glazing)
            && (item.quantity == product.quantity)) {
                return true;
            }
        });
        cart.splice(index, 1);
        localStorage.setItem("savedCart", JSON.stringify(cart));
        // Update displayed basket items
        basketItems.removeChild(this.parentNode.parentNode.parentNode.parentNode);
        // Update total price
        totalPrice = totalPrice - product.price;
        total.innerText = `Total: $${totalPrice}.00`;
        // Update number of items in header
        itemsInCart = itemsInCart - product.quantity;
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
