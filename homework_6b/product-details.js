function renderProductDetails(productName) {
    productDetails = products[productName];
    console.log(products, "ok: ", productName);
    document.getElementById("item-name-header").innerText = productDetails.flavor;
    caption = document.getElementById("item-caption").innerText = productDetails.description;
    var img = document.getElementById("main-item-img").setAttribute("src", productDetails.image);
}
renderProductDetails(selectedProductPage);