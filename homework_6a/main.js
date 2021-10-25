const cart = [];
var itemsInCart = 0;
sessionStorage.clear()

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
var quantitySelected = 0;
var addToCartBtn = document.getElementById("add-to-cart-btn");

var itemsInCartElement = document.getElementById("num-items-in-basket")

function setQuantity(quantity) {
    // Reset add to cart button
    addToCartBtn.setAttribute("id", "add-to-cart-btn");
    addToCartBtn.innerText = "Add to Cart";
    // Change appearence of clicked button
    for (var q in qtyDict) {
        let button = qtyDict[q];
        if (q == quantity) {
            console.log(button);
            button.setAttribute("class", "quantity-clicked");
            quantitySelected = parseInt(q);
            addToCartBtn.innerText = `$${quantitySelected*5}.00 • Add to Cart`;
        } else {
            button.setAttribute("class", "quantity");
        }
    }
}

function addToCart() {
    // Change add to cart button
    addToCartBtn.setAttribute("id", "added-to-cart-btn");
    addToCartBtn.innerText = "Added to Cart";
    // Increment basket item counter
    if (quantitySelected != 0) {
        let newQuantity = parseInt(itemsInCart) + parseInt(quantitySelected);
        itemsInCart = newQuantity
    }
    // Clear quantity selected
    quantitySelected = 0;
    for (var q in qtyDict) {
        qtyDict[q].setAttribute("class", "quantity");
    }
    itemsInCartElement.innerText = itemsInCart;
}
