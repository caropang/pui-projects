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
        clone.querySelector(".item-info").setAttribute("item-id", name);
        clone.querySelector(".menu-item-img").setAttribute("src", product.image);
        clone.querySelector(".item-name").innerText = `${product.flavor} • $5.00`;
        clone.querySelector(".item-description").innerText = product.description;
        const thisProductName = name;
        clone.querySelector(".view-details-btn").addEventListener("click", function () {
            openProductDetails(thisProductName);
        });
        // Wishlist functionality
        clone.querySelector(".add-to-wishlist-btn").addEventListener("click", function() {
            var itemName = this.parentNode.parentNode.getAttribute("item-id");
            if (wishlist.includes(itemName)) { // Remove item from wishlist
                var wishlistIndex = wishlist.findIndex(function (item) {
                    return item == itemName;
                });
                wishlist.splice(wishlistIndex, 1);
                this.innerText = "♡";
            } else { // Add item to wishlist
                wishlist.push(itemName);
                this.innerText = "♥︎";
            }
            // Update local storage wishlist
            localStorage.setItem("savedWishlist", JSON.stringify(wishlist));
        });
        if (wishlist.includes(name)) {
            clone.querySelector(".add-to-wishlist-btn").innerText = "♥︎";
        }
        menuItems.appendChild(clone);
    }
}
renderMenu()