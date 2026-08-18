document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const messageDiv = document.getElementById("message");

  // Handle form submission
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      messageDiv.textContent = "Please enter both email and password.";
      messageDiv.className = "message error";
      messageDiv.classList.remove("hidden");
      return;
    }

    messageDiv.textContent = `Login successful. Welcome, ${email}!`;
    messageDiv.className = "message success";
    messageDiv.classList.remove("hidden");
    loginForm.reset();
  });
});
