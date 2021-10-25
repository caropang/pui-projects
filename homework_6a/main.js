const cart = []

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

function setQuantity(quantity) {
    for (var q in qtyDict) {
        let button = qtyDict[q];
        if (q == quantity) {
            console.log(button);
            button.setAttribute("class", "quantity-clicked");
        } else {
            button.setAttribute("class", "quantity");
        }
    }
}

function addToCart() {
    
}
