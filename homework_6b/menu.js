const productNames = ["original", 
                      "pumpkin-spice",
                      "blackberry",
                      "walnut",
                      "caramel-pecan",
                      "original-gf"]

var menuItemTemplate = document.getElementById("menu-item-template");
var menuItems = document.getElementById("menu-wrapper");
function renderMenu() {
    for (var name of productNames) {
        product = products[name];
        var clone = menuItemTemplate.content.cloneNode(true);
        clone.querySelector(".menu-item-img").setAttribute("src", product.image);
        clone.querySelector(".item-name").innerText = `${product.flavor} • $5.00`;
        clone.querySelector(".item-description").innerText = product.description;
        const thisProductName = name;
        clone.querySelector(".view-details-btn").addEventListener("click", function () {
            openProductDetails(thisProductName);
        });
        menuItems.appendChild(clone);
    }
}
renderMenu()

function openProductDetails(name) {
    selectedProductPage = name;
    localStorage.setItem("selectedProduct", selectedProductPage);
    window.location = "product-details.html";
}