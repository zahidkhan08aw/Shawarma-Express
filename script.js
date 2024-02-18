const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("cross");
});

var form = document.getElementById("main-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let Name = document.getElementById("Name").value;
  console.log(Name);
  let Gmail = document.getElementById("Gmail").value;
  console.log(Gmail);
  let Number = document.getElementById("Number").value;
  console.log(Number);
  let Company = document.getElementById("Company").value;
  console.log(Company);
  let Message = document.getElementById("Message").value;
  console.log(Message);
});

document.addEventListener("DOMContentLoaded", function () {
  let Popup = document.getElementById("popup");
  let OpenpopUp = document.getElementById("Open-popup");
  OpenpopUp.addEventListener("click", function () {
    if (myformsubmitted) {
      Popup.style.display = "block";
    }
  });

  let closePopup = document.getElementById("closepopup");
  closePopup.addEventListener("click", function () {
    Popup.style.display = "none";
    Popup.style.width = "25%";
  });

  let Myform = document.getElementById("main-form");
  Myform.addEventListener("submit", function (event) {
    event.preventDefault();
    myformsubmitted = "true";
  });
});
// Register ScrollTrigger plugin

// Animation for .hero-png element
gsap.from(".hero-png", {
  opacity: 0,
  duration: 4,
  delay: 1,
  x: -200,
  repeat: Infinity,
});

// Animation for .hero-png1 element
gsap.from(".hero-png1", {
  opacity: 0,
  duration: 4,
  delay: 1,
  y: -200,
  repeat: Infinity,
});

// Animation for .png-s2 img element
gsap.from(".png-s2 img", {
  opacity: 0,
  duration: 4,
  delay: 1,
  x: 200,
  repeat: Infinity,
});

gsap.from("#hero-heading", { opacity: 0, y: -50, duration: 1 });
gsap.from("h3", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".orderbtn", { opacity: 0, x: -50, duration: 1, delay: 1 });
gsap.from(".chef-png img", { opacity: 0, x: 50, duration: 1, delay: 1.5 });
gsap.from(".service-img img", {
  opacity: 0,
  duration: 1,
  stagger: 0.5, // Stagger the animations by 0.5 seconds
  repeat: Infinity,
});
gsap.from(" .foodkap", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  repeat: -1, // Repeat infinitely
  yoyo: true, // Reverse the animation on completion
});
gsap.to(".food-content", {
  borderColor: "green",
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
});
const split = new SplitText(".service-txt h1", { type: "words" });

// Animate each word individually
split.words.forEach((word, index) => {
  gsap.from(word, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: index * 0.1, // Delay each word by 0.1 second
  });
});
// Example JavaScript function to store order details in local storage
function placeOrder() {
  // Get order details (you can retrieve these from your form or other inputs)
  var orderDetails = {
    productName: "FRUITS FOODs",
    price: "₹150",
    quantity: 1,
  };

  // Store order details in local storage
  localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
}

// Example JavaScript to retrieve and display order details on cart.html
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve order details from local storage
  var orderDetails = JSON.parse(localStorage.getItem("orderDetails"));

  if (orderDetails) {
    // Display order details on the page
    var cartItemContainer = document.querySelector(".cart-item");
    cartItemContainer.innerHTML = `
          <img src="Images/fruits.png" alt="Fruits" class="item-image">
          <div class="item-details">
              <h2>${orderDetails.productName}</h2>
              <p>Price: ${orderDetails.price}</p>
              <p>Quantity: ${orderDetails.quantity}</p>
          </div>
          <img src="Images/pavv.png" alt="Fruits" class="item-image">
          <div class="item-details">
              <h2>${orderDetails.productName}</h2>
              <p>Price: ${orderDetails.price}</p>
              <p>Quantity: ${orderDetails.quantity}</p>
          </div>
      `;
  } else {
    // Handle case when no order details are found
    console.log("No order details found.");
  }
});
