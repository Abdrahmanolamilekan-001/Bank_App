const barr = document.getElementById("bar");
const closee = document.getElementById("close");
const navv = document.getElementById("navbar");

if (barr) {
  barr.addEventListener("click", () => {
    navv.classList.add("active");
  });
}
if (closee) {
  closee.addEventListener("click", () => {
    navv.classList.remove("active");
  });
}

let cartItem = [];
if (localStorage.getItem("cartItem")) {
  cartItem = JSON.parse(localStorage.getItem("cartItem"));
}

const displayCartItemsNumberLG = document.getElementById(
  "displayCartItemsNumberLG"
);
const displayCartItemsNumberSM = document.getElementById(
  "displayCartItemsNumberSM"
);

if (displayCartItemsNumberLG) {
  displayCartItemsNumberLG.innerHTML = cartItem.length;
}

if (displayCartItemsNumberSM) {
  displayCartItemsNumberSM.innerHTML = cartItem.length;
}

const shopPage = [
  {
    name2: "adidas",
    name: "Cartoon Astronaut T-shirts",
    price: "$20",
    image: "images/sp clothe 11.avif",
  },
  {
    name2: "Balenciaga",
    name: "Woody Astronaut",
    price: "$50",
    image: "images/sp clothe 13.webp",
  },
  {
    name2: "Palm Angel",
    name: "Cartoon Astronaut T-shirts",
    price: "$45",
    image: "images/sp  clothe3.jpeg",
  },
  {
    name2: "Gucci",
    name: "Cartoon Astronaut T-shirts",
    price: "$80",
    image: "images/t-shirt6.jpeg",
  },
  {
    name2: "Dior",
    name: "Cartoon Astronaut T-shirts",
    price: "$50",
    image: "images/sp clothe 11.avif",
  },
  {
    name2: "adidas",
    name: "Woody Joggers",
    price: "$34",
    image: "images/sp clothe 31.jpeg",
  },
  {
    name2: "Dior",
    name: "Cartoon Astronaut T-shirts",
    price: "$30",
    image: "images/t-shirt4.jpeg",
  },
  {
    name2: "Gucci",
    name: " Astronaut Long-Sliff Shirt",
    price: "$70",
    image: "images/long sl6.jpeg",
  },
  {
    name2: "Gucci",
    name: "Cartoon Astronaut Jeans ",
    price: "$90",
    image: "images/sp clothe 19.jpeg",
  },
  {
    name2: "Balenciaga",
    name: "Cartoon Astronaut Jeans",
    price: "$80",
    image: "images/sp clothe 18.jpeg",
  },
  {
    name2: "Dior",
    name: "Cartoon Astronaut Long-Sliff",
    price: "$35",
    image: "images/long sl2.jpeg",
  },
  {
    name2: "Palm Angel",
    name: "Cartoon Astronaut T-shirts",
    price: "$18",
    image: "images/t-shirt5.jpeg",
  },
  {
    name2: "adidas",
    name: "Cartoon Astronaut Joggas",
    price: "$30",
    image: "images/sp clothe 20.jpeg",
  },
  {
    name2: "Palm Angel",
    name: "Cartoon Astronaut baby Jeans",
    price: "$25",
    image: "images/sp clothe 24.jpeg",
  },
  {
    name2: "adidas",
    name: "Cartoon Astronaut T-shirts",
    price: "$78",
    image: "images/long sl4.jpeg",
  },
  {
    name2: "Palm Angel",
    name: "Cartoon Astronaut T-shirts",
    price: "$15",
    image: "images/t-shirt.jpeg",
  },
];

const addCartItem = (i) => {
  alert();
  cartItem.push(shopPage[i]);
  localStorage.setItem("cartItem", JSON.stringify(cartItem));

  // Display toast notification using Toastify
  // Toastify({
  //   text: "One Item Added to cart",
  //   duration: 2000,
  //   close: true, // Option to allow closing
  //   gravity: "top", // Toast appears on the top (can be "bottom" as well)
  //   position: "right", // Toast appears on the right
  //   backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Optional styling
  // }).showToast();
};

const proContain = document.getElementById("proContain");

shopPage.map((product, i) => {
  proContain.innerHTML += `
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
        <h4>${product.price}</h4>
        </div>
        <button onclick="addCartItem(${i})"><img width="20" class="Cart" src="images/shopping-cart.png" alt=""></button>
    </div>
    `;
});
