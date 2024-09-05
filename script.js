const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');

let cartItems = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItems++;
        cartCount.textContent = cartItems;
    });
});

window.onload = function () {
    const savedTotal = localStorage.getItem("cartTotal");
    if (savedTotal) {
        totalAmount = parseFloat(savedTotal);
        document.getElementById("total").innerText = "Total: $" + totalAmount;
    }
};

