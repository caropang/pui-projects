var storedCart = JSON.parse(localStorage.getItem("savedCart"));
var cart = storedCart ? storedCart : [];
const storedItemsInCart = localStorage.getItem('itemsInCart');
var itemsInCart = parseInt(storedItemsInCart ? storedItemsInCart : 0);

const selectedProduct = localStorage.getItem("selectedProduct");
var selectedProductPage = selectedProduct ? selectedProduct : "";

const products = {
    "original": new ProductDetail("Original", "assets/original.png", 
                "Our original cinnamon roll mixed with freshly chopped sugar walnuts, hand-kneaded and topped with a sweet glaze of your choosing."),
    "pumpkin-spice": new ProductDetail("Pumpkin Spice", "assets/pumpkin-spice.png",
                     "Our newest seasonal flavor, pumpkin spice. Made with real pumpkin and our five spice blend to create a perfect, cozy, fall flavor."),
    "blackberry": new ProductDetail("Blackberry", "assets/blackberry.png", 
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    "walnut": new ProductDetail("Walnut", "assets/walnut.png", 
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    "caramel-pecan": new ProductDetail("Caramel Pecan", "assets/caramel-pecan.png", 
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    "original-gf": new ProductDetail("Original (GF)", "assets/walnut.png", 
              "Our signature original cinnamon roll made with gluten free alternatives. Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
}

function ProductDetail(flavor, image, description) {
    this.flavor = flavor;
    this.image = image;
    this.description = description;
}

function Product(flavor, glazing, quantity, price, image) {
    this.flavor = flavor;
    this.glazing = glazing;
    this.quantity = quantity;
    this.price = price;
    this.image = image
}

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
var itemsInCartElement = document.getElementById("num-items-in-basket")

if (itemsInCart != 0) {
    itemsInCartElement.innerText = itemsInCart;
}

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
        const item = new Product(flavor, glazing, quantity, price, image);
        cart.push(item);
        console.log(typeof(itemsInCart), typeof(quantity));
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