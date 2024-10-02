// Toggle navbar for mobile
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Initialize cart items
let cartItems = [];
if (localStorage.cartItems) {
  cartItems = JSON.parse(localStorage.getItem("cartItems"));
}

// Update cart item count display
const displayCartItemsNumberLG = document.getElementById(
  "displayCartItemsNumberLG"
);
const displayCartItemsNumberSM = document.getElementById(
  "displayCartItemsNumberSM"
);

if (displayCartItemsNumberLG) {
  displayCartItemsNumberLG.innerHTML = cartItems.length;
}
if (displayCartItemsNumberSM) {
  displayCartItemsNumberSM.innerHTML = cartItems.length;
}

// Product list
const allProducts = [
  {
    name2: "adidas",
    name: "Cartoon Astronaut T-shirts",
    price: 20,
    image: "images/sp clothe 11.avif",
  },
  {
    name2: "Balenciaga",
    name: "Woody Astronaut",
    price: 20,
    image: "images/sp clothe 13.webp",
  },
  {
    name2: "Palm Angel",
    name: "Cartoon Astronaut T-shirts",
    price: 20,
    image: "images/sp  clothe3.jpeg",
  },
  {
    name2: "Gucci",
    name: "Cartoon Astronaut T-shirts",
    price: 10,
    image: "images/t-shirt6.jpeg",
  },
  {
    name2: "Dior",
    name: "Cartoon Astronaut T-shirts",
    price: 50,
    image: "images/sp clothe 11.avif",
  },
  {
    name2: "adidas",
    name: "Woody Joggers",
    price: 34,
    image: "images/sp clothe 31.jpeg",
  },
  {
    name2: "Dior",
    name: "Cartoon Astronaut T-shirts",
    price: 30,
    image: "images/t-shirt4.jpeg",
  },
  {
    name2: "Gucci",
    name: "Astronaut Long-Sliff Shirt",
    price: 70,
    image: "images/long sl6.jpeg",
  },
];

// Function to add items to the cart
const addToCart = (i) => {
  cartItems.push(allProducts[i]);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  Toastify({
    text: "One Item Added to cart",
    duration: 2000,
    close: true,
    gravity: "top",
    position: "right",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();

  // Update cart count
  displayCartItemsNumberLG.innerHTML = cartItems.length;
  displayCartItemsNumberSM.innerHTML = cartItems.length;
};

// Display all products
const productContainer = document.getElementById("productContainer");

if (productContainer) {
  allProducts.map((product, i) => {
    productContainer.innerHTML += `
      <div class="pro">
          <div class="clothe">
          <img style="border-radius: 20px;" width="100%" src="${product.image}" alt="">
          </div>
          <div class="des">
          <span>${product.name2}</span>
          <h5>${product.name}</h5>
          <div class="star">
              <img width="15" src="images/star.png" alt="">
              <img width="15" src="images/star.png" alt="">
              <img width="15" src="images/star.png" alt="">
              <img width="15" src="images/star.png" alt="">
              <img width="15" src="images/star.png" alt="">
          </div>
          <h4>$${product.price}</h4>
          </div>
          <button onclick="addToCart(${i})"><img width="20" class="Cart" src="images/shopping-cart.png" alt=""></button>
      </div>`;
  });
}

// Initialize second cart for new arrivals
let cartProduct = [];
if (localStorage.cartProduct) {
  cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
}

// Display new arrivals cart count
const displayCartProductNumberLG = document.getElementById(
  "displayCartProductNumberLG"
);
const displayCartProductNumberSM = document.getElementById(
  "displayCartProductNumberSM"
);

if (displayCartProductNumberLG) {
  displayCartProductNumberLG.innerHTML = cartProduct.length;
}
if (displayCartProductNumberSM) {
  displayCartProductNumberSM.innerHTML = cartProduct.length;
}

// New arrivals list
const allArrival = [
  {
    name2: "Gucci",
    name: "Cartoon Astronaut Jeans",
    price: 90,
    image: "images/sp clothe 19.jpeg",
  },
  {
    name2: "Balenciaga",
    name: "Cartoon Astronaut Jeans",
    price: 80,
    image: "images/sp clothe 18.jpeg",
  },
  {
    name2: "Dior",
    name: "Cartoon Astronaut Long-Sliff",
    price: 35,
    image: "images/long sl2.jpeg",
  },
  {
    name2: "Palm Angel",
    name: "Cartoon Astronaut T-shirts",
    price: 18,
    image: "images/t-shirt5.jpeg",
  },
  {
    name2: "adidas",
    name: "Cartoon Astronaut Joggas",
    price: 30,
    image: "images/sp clothe 20.jpeg",
  },
  {
    name2: "Palm Angel",
    name: "Cartoon Astronaut baby Jeans",
    price: 25,
    image: "images/sp clothe 24.jpeg",
  },
  {
    name2: "adidas",
    name: "Cartoon Astronaut T-shirts",
    price: 78,
    image: "images/long sl4.jpeg",
  },
  {
    name2: "Palm Angel",
    name: "Cartoon Astronaut T-shirts",
    price: 15,
    image: "images/t-shirt.jpeg",
  },
];

// Function to add new arrivals to the second cart
const addCart = (i) => {
  cartProduct.push(allArrival[i]);
  localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  Toastify({
    text: "One Item Added to cart",
    duration: 2000,
    close: true,
    gravity: "top",
    position: "right",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();

  // Update new arrivantls cart cou
  displayCartProductNumberLG.innerHTML = cartProduct.length;
  displayCartProductNumberSM.innerHTML = cartProduct.length;
};

// Display new arrivals products
const productContain = document.getElementById("productContain");

if (productContain) {
  allArrival.map((product, i) => {
    productContain.innerHTML += `
        <div class="pro">      
            <div class="clothe">
            <img style="border-radius: 20px;" width="100%" src="${product.image}" alt="">
            </div>
            <div class="des">
            <span>${product.name2}</span>
            <h5>${product.name}</h5>
            <div class="star">
                <img width="15" src="images/star.png" alt="">
                <img width="15" src="images/star.png" alt="">
                <img width="15" src="images/star.png" alt="">
                <img width="15" src="images/star.png" alt="">
                <img width="15" src="images/star.png" alt="">
            </div>
            <h4>$${product.price}</h4>
            </div>
            <button onclick="addCart(${i})"><img width="20" class="Cart" src="images/shopping-cart.png" alt=""></button>
        </div>`;
  });
}
