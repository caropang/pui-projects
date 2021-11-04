var storedCart = JSON.parse(localStorage.getItem("savedCart"));
var cart = storedCart ? storedCart : [];
var storedItemsInCart = localStorage.getItem('itemsInCart');
var itemsInCart = parseInt(storedItemsInCart ? storedItemsInCart : 0);

var storedWishlist = JSON.parse(localStorage.getItem("savedWishlist"));
var wishlist = storedWishlist ? storedWishlist : [];

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

function Product(flavor, glazing, quantity, price, image, itemId) {
    this.flavor = flavor;
    this.glazing = glazing;
    this.quantity = quantity;
    this.price = price;
    this.image = image;
    this.itemId = itemId;
}

var itemsInCartElement = document.getElementById("num-items-in-basket")

if (itemsInCart != 0) {
    itemsInCartElement.innerText = itemsInCart;
}

function openProductDetails(name) {
    selectedProductPage = name;
    localStorage.setItem("selectedProduct", selectedProductPage);
    window.location = "product-details.html";
}