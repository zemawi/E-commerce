// Modal functionality
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const closeLogin = document.getElementById("closeLogin");
const closeRegister = document.getElementById("closeRegister");
const switchToRegister = document.getElementById("switchToRegister");
const switchToLogin = document.getElementById("switchToLogin");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// Open login modal
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

// Open register modal
registerBtn.addEventListener("click", () => {
  registerModal.style.display = "block";
});

// Close modals
closeLogin.addEventListener("click", () => {
  loginModal.style.display = "none";
});

closeRegister.addEventListener("click", () => {
  registerModal.style.display = "none";
});

// Switch between login and register
switchToRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
  registerModal.style.display = "block";
});

switchToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerModal.style.display = "none";
  loginModal.style.display = "block";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
  if (e.target === registerModal) {
    registerModal.style.display = "none";
  }
});

// Form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Here you would typically send this data to a server
  console.log("Login attempt with:", { email, password });
  alert("Login functionality would connect to a server in a real application");
  loginModal.style.display = "none";
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("registerConfirm").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Here you would typically send this data to a server
  console.log("Registration attempt with:", { name, email, password });
  alert(
    "Registration functionality would connect to a server in a real application"
  );
  registerModal.style.display = "none";
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product-card");
    const productName = product.querySelector("h3").textContent;
    const productPrice = product.querySelector(".product-price").textContent;

    alert(
      `Added ${productName} (${productPrice}) to cart\n\nIn a real application, this would update the shopping cart.`
    );
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
