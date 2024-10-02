let cartItems = []; // Declare globally for cart items
let cartProduct = []; // Declare globally for cart products

// Function to display cart items
function displayCartItems() {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const displayTotalPrice = document.getElementById("displayTotalPrice");

  if (!cartItemsContainer || !displayTotalPrice) {
    console.error("One or more required elements are missing in the HTML.");
    return;
  }

  cartItemsContainer.innerHTML = ""; // Clear previous items
  let totalPrice = 0;

  cartItems.forEach((item, i) => {
    totalPrice += item.price;
    cartItemsContainer.innerHTML += `<tr>
        <td><button onclick="deleteCartItem(${i})"><img width="30" src="images/close (1).png" alt=""></button></td>
        <td><img width="70" src="${item.image}" alt=""></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><input type="number" value="1" onchange="updateItemQuantity(${i}, this.value)"></td>
        <td>${item.price}</td>
      </tr>`;
  });

  displayTotalPrice.innerHTML = `$${totalPrice}`;
}

// Function to display cart products
function displayCartProduct() {
  const cartProductContainer = document.getElementById("cartProductContainer");
  const displayTotalPriceProduct = document.getElementById(
    "displayTotalPriceProduct"
  );

  if (!cartProductContainer || !displayTotalPriceProduct) {
    console.error("One or more required elements are missing in the HTML.");
    return;
  }

  cartProductContainer.innerHTML = ""; // Clear previous items
  let totalPrice = 0;

  cartProduct.forEach((item, i) => {
    totalPrice += item.price;
    cartProductContainer.innerHTML += `<tr>
        <td><button onclick="deleteCartProduct(${i})"><img width="30" src="images/close (1).png" alt=""></button></td>
        <td><img width="70" src="${item.image}" alt=""></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><input type="number" value="1" onchange="updateProductQuantity(${i}, this.value)"></td>
        <td>${item.price}</td>
      </tr>`;
  });

  displayTotalPriceProduct.innerHTML = `$${totalPrice}`;
}


function deleteCartItem(i) {
  cartItems.splice(i, 1); 
  localStorage.setItem("cartItems", JSON.stringify(cartItems)); 
  displayCartItems();
}

function deleteCartProduct(i) {
  cartProduct.splice(i, 1); 
  localStorage.setItem("cartProduct", JSON.stringify(cartProduct)); 
  displayCartProduct();
}

// Function to update the quantity of an item in cartItems (for future implementation)
function updateItemQuantity(index, newQuantity) {
  console.log(`Updating item at index ${index} to quantity ${newQuantity}`);
  // Add logic to update item quantity
}

// Function to update the quantity of a product in cartProduct (for future implementation)
function updateProductQuantity(index, newQuantity) {
  console.log(`Updating product at index ${index} to quantity ${newQuantity}`);
  // Add logic to update product quantity
}

// Load data from localStorage and initialize both carts
window.onload = () => {
  // Initialize cartItems from localStorage if available
  if (localStorage.getItem("cartItems")) {
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
  }

  // Initialize cartProduct from localStorage if available
  if (localStorage.getItem("cartProduct")) {
    cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
  }

  // Display both cart items and cart products after loading
  displayCartItems();
  displayCartProduct();
};

// let cartItems = []; // Declare globally
// let cartProduct = []; // Declare globally

// // Function to display cart products
// function displayCartProduct() {
//   const cartProductContainer = document.getElementById("cartProductContainer");
//   const displayTotalPrice = document.getElementById("displayTotalPrice");

//   if (!cartProductContainer || !displayTotalPrice) {
//     console.error("One or more required elements are missing in the HTML.");
//     return;
//   }

//   cartProductContainer.innerHTML = ""; // Clear previous items
//   let totalPrice = 0;

//   cartProduct.forEach((item, i) => {
//     totalPrice += item.price;
//     cartProductContainer.innerHTML += `<tr>
//         <td><button onclick="deleteCartProduct(${i})"><img width="30" src="images/close (1).png" alt=""></button></td>
//         <td><img width="70" src="${item.image}" alt=""></td>
//         <td>${item.name}</td>
//         <td>${item.price}</td>
//         <td><input type="number" value="1" onchange="updateProductQuantity(${i}, this.value)"></td>
//         <td>${item.price}</td>
//       </tr>`;
//   });

//   displayTotalPrice.innerHTML = `$${totalPrice}`;
// }

// // Function to delete a product from the cart
// function deleteCartProduct(i) {
//   cartProduct.splice(i, 1); // Remove the product
//   localStorage.setItem("cartProduct", JSON.stringify(cartProduct)); // Update localStorage
//   displayCartProduct(); // Re-display the updated cart
// }

// // Function to update product quantity (for future implementation)
// function updateProductQuantity(index, newQuantity) {
//   console.log(`Updating product at index ${index} to quantity ${newQuantity}`);
//   // Add logic to update product quantity
// }

// // Load data from localStorage and initialize the cart
// window.onload = () => {
//   // Initialize cartItems from localStorage if available
//   if (localStorage.getItem("cartItems")) {
//     cartItems = JSON.parse(localStorage.getItem("cartItems"));
//   }

//   // Initialize cartProduct from localStorage if available
//   if (localStorage.getItem("cartProduct")) {
//     cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
//   }

//   // Display cart items after loading
//   displayCartProduct();
// };

// let cartItems = [];
// if (localStorage.getItem("cartItems")) {
//   cartItems = JSON.parse(localStorage.getItem("cartItems"));
// }

// function displayCartItems() {
//   cartItemsContainer.innerHTML = "";
//   let totalPrice = 0;
//   cartItems.forEach((item, i) => {
//     totalPrice += item.price;
//     cartItemsContainer.innerHTML += `<tr>
//         <td><button onclick="deleteCartItems(${i})"><img width="30" src="images/close (1).png" alt=""></button></td>
//         <td><img width="70" src="${item.image}" alt=""></td>
//         <td>${item.name}</td>
//         <td>${item.price}</td>
//         <td><input type="number" value="1"></td>
//         <td>${item.price}</td>
//       </tr>`;
//   });
//   displayTotalPrice.innerHTML = `$${totalPrice}`;
// }

// function deleteCartItems(i) {
//   cartItems.splice(i, 1);
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   displayCartItems();
// }

// displayCartItems();

// let cartProduct = [];
// if (localStorage.cartProduct) {
//   cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
// }

// function displayCartProduct() {
//   cartProductContainer.innerHTML = "";
//   let totalPrice = 0;
//   cartProduct.forEach((item, i) => {
//     totalPrice += item.price;
//     cartProductContainer.innerHTML += `<tr>
//         <td><button onclick="deleteCartProduct(${i})"><img width="30" src="images/close (1).png" alt=""></button></td>
//         <td><img width="70" src="${item.image}" alt=""></td>
//         <td>${item.name}</td>
//         <td>${item.price}</td>
//         <td><input type="number" value="1"></td>
//         <td>${item.price}</td>
//       </tr>`;
//   });
//   displayTotalPrice.innerHTML = `$${totalPrice}`;
// }

// function deleteCartProduct(i) {
//   cartProduct.splice(i, 1);
//   localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
//   //   displaycartProduct();
// }

// displaycartProduct();
