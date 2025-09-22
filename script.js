// ===============================
// Interactive Web Page JavaScript
// ===============================

// 1. Light/Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Light/Dark Mode";
toggleBtn.classList.add("toggle-mode");
document.body.prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. FAQ Section (Collapsible)
const faqSection = document.createElement("section");
faqSection.innerHTML = `
  <h2>Frequently Asked Questions</h2>
  <div class="faq-item">
    <div class="faq-question">What services do you offer?</div>
    <div class="faq-answer">We offer online government services, printing, passport assistance, and more.</div>
  </div>
  <div class="faq-item">
    <div class="faq-question">How can I contact support?</div>
    <div class="faq-answer">You can call 0700 000 000 or email info@somtechithub.com.</div>
  </div>
`;
document.querySelector("main").appendChild(faqSection);

document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// 3. Form Validation
const form = document.querySelector("form");
const errorBox = document.createElement("div");
form.prepend(errorBox);

form.addEventListener("submit", function(e) {
  e.preventDefault();
  errorBox.innerHTML = ""; // clear messages
  errorBox.className = "";

  let errors = [];

  // Validate Full Name
  const fullname = document.getElementById("fullname").value.trim();
  if (!/^[A-Za-z\s]{3,50}$/.test(fullname)) {
    errors.push("Full name must be 3-50 characters and only letters/spaces.");
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    errors.push("Enter a valid email address.");
  }

  // Validate Phone
  const phone = document.getElementById("phone").value.trim();
  if (!/^\d{10}$/.test(phone)) {
    errors.push("Phone number must be 10 digits.");
  }

  // Validate Service Selection
  const service = document.getElementById("service-type").value;
  if (service === "") {
    errors.push("Please select a service.");
  }

  // Validate Terms
  if (!document.getElementById("terms").checked) {
    errors.push("You must agree to the terms and conditions.");
  }

  if (errors.length > 0) {
    errorBox.classList.add("error");
    errorBox.innerHTML = errors.join("<br>");
  } else {
    errorBox.classList.add("success");
    errorBox.textContent = "Form submitted successfully! 🎉";
    form.reset();
  }
});
