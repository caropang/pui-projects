var oneBtn = document.getElementById("one-quantity");
var threeBtn = document.getElementById("three-quantity");
var sixBtn = document.getElementById("six-quantity");
var twelveBtn = document.getElementById("twelve-quantity");
var qtyDict = {
    1: oneBtn,
    3: threeBtn,
    6: sixBtn,
    12: twelveBtn
};
const pricePerRoll = 5;
var quantitySelected = 0;
var quantitySelectedPrice = 0;

var addToCartBtn = document.getElementById("add-to-cart-btn");

function setQuantity(quantity) {
    // Reset add to cart button
    addToCartBtn.setAttribute("id", "add-to-cart-btn");
    addToCartBtn.innerText = "Add to Cart";
    // Change appearence of clicked button
    for (var q in qtyDict) {
        let button = qtyDict[q];
        if (q == quantity) {
            button.setAttribute("class", "quantity-clicked");
            quantitySelected = parseInt(q);
            quantitySelectedPrice = quantitySelected*pricePerRoll;
            addToCartBtn.innerText = `$${quantitySelectedPrice}.00 • Add to Cart`;
        } else {
            button.setAttribute("class", "quantity");
        }
    }
}

function addToCartButton() {
    // Change add to cart button
    addToCartBtn.setAttribute("id", "added-to-cart-btn");
    addToCartBtn.innerText = "Added to Cart";
    // Add item to cart
    if (quantitySelected != 0) {
        let flavor = document.getElementById("item-name-header").innerText;
        let quantity = quantitySelected;
        let temp = document.getElementById("glazing");
        let glazing = temp.options[temp.selectedIndex].innerText;
        let price = quantitySelectedPrice;
        var image = document.getElementById("main-item-img").getAttribute("src");
        let itemId = document.getElementById("item-name-header").getAttribute("item-id");
        const item = new Product(flavor, glazing, quantity, price, image, itemId);
        cart.push(item);
        itemsInCart = itemsInCart + quantity
        localStorage.setItem("savedCart", JSON.stringify(cart));
        localStorage.setItem("itemsInCart", itemsInCart);
        itemsInCartElement.innerText = itemsInCart;
    }
    // Clear quantity selected
    quantitySelected = 0;
    for (var q in qtyDict) {
        qtyDict[q].setAttribute("class", "quantity");
    }
}

function renderProductDetails(productName) {
    productDetails = products[productName];
    var headerElem = document.getElementById("item-name-header")
    headerElem.innerText = productDetails.flavor;
    headerElem.setAttribute("item-id", productName);
    document.getElementById("item-caption").innerText = productDetails.description;
    document.getElementById("main-item-img").setAttribute("src", productDetails.image);
    document.getElementById("main-item-img").setAttribute("alt", productDetails.flavor);
    // Wishlist functionality
    var wishListBtn = document.getElementById("add-to-wishlist-details-btn")
    wishListBtn.addEventListener("click", function() {
        if (wishlist.includes(productName)) { // Remove item from wishlist
            var wishlistIndex = wishlist.findIndex(function (item) {
                return item == productName;
            });
            wishlist.splice(wishlistIndex, 1);
            this.innerText = "♡";
        } else { // Add item to wishlist
            wishlist.push(productName);
            this.innerText = "♥︎";
        }
        // Update local storage wishlist
        localStorage.setItem("savedWishlist", JSON.stringify(wishlist));
    });
    if (wishlist.includes(productName)) {
        wishListBtn.innerText = "♥︎";
    }
}
renderProductDetails(selectedProductPage);

