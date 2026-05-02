document.getElementById("year").textContent = new Date().getFullYear();

const localSignupForm = document.getElementById("localSignupForm");

if (localSignupForm) {
  localSignupForm.addEventListener("submit", function (event) {
    const email = document.getElementById("emailField").value.trim();
    const phone = document.getElementById("phoneField").value.trim();

    if (!email && !phone) {
      event.preventDefault();
      alert("Please enter an email address or phone number so we can send you updates.");
    }
  });
}
