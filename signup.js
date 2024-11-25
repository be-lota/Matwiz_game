document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const errorMessage = document.getElementById("error-message");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Simple email validation
        if (!email.includes("@")) {
            errorMessage.style.display = "block";
            errorMessage.textContent = "Please enter a valid email address.";
            return;
        }

        // Password match validation
        if (password !== confirmPassword) {
            errorMessage.style.display = "block";
            errorMessage.textContent = "Passwords do not match.";
            return;
        }

        // Store user credentials in localStorage (temporary solution)
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Sign-up successful! You can now log in.");
        window.location.href = "login.html";
    });
});
