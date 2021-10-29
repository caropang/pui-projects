function ProductDetail(flavor, image, description) {
    this.flavor = flavor;
    this.image = image;
    this.description = description;
}

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
              "Our signature original cinnamon roll made with gluten free alternatives. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
}

function renderProductDetails(productName) {
    console.log(productName);
    productDetails = products[productName];
    var name = document.getElementById("item-name-header");
    name.innerText = productDetails.flavor;
    var caption = document.getElementById("item-caption");
    caption.innerText = productDetails.description;
    var img = document.getElementById("main-item-img");
    img.setAttribute("src", productDetails.image);
    // <img id="main-item-img" src="assets/original.png" alt="Original Flavor"></img>
}
renderProductDetails(selectedProductPage);