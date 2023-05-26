function addToCart(productName, productPrice) {
  // Store the selected product details in session storage
  sessionStorage.setItem('productName', productName);
  sessionStorage.setItem('productPrice', productPrice);

  // Redirect the user to the checkout page
  window.location.href = 'checkout.html';
}

// Retrieve the product details from session storage
var productName = sessionStorage.getItem('productName');
var productPrice = parseFloat(sessionStorage.getItem('productPrice'));

// Populate the fields on the checkout page if the product details exist
if (productName && productPrice) {
  document.getElementById('product').value = productName;
  document.getElementById('price').value = '$' + productPrice.toFixed(2);
  document.getElementById('total').value = '$' + productPrice.toFixed(2);
}

function placeOrder() {
  const confirmation = confirm("Are you sure you want to place the order?");
  if (confirmation) {
    // Proceed with the order
    // You can add your code here to handle the order placement
    alert("Your order has been placed successfully!");
  } else {
    // Cancel the order
    // You can add your code here to handle the cancellation
    alert("Order cancelled.");
  }
}
