// dashboard.js

document.addEventListener("DOMContentLoaded", function () {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
        // if token or user data is not found , send this page.
        window.location.href = "index.html";
        return;
    }

    // parse the data user
    let user = {};
    try {
        user = JSON.parse(userData);
    } catch (error) {
        console.error("User data parsing error:", error);
        // Agar data corrupt ho gaya to logout kar do
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "index.html";
        return;
    }

    // show the user name
    const userNameElement = document.getElementById("userName");
    if (userNameElement && user.username) {
        userNameElement.textContent = user.username;
    }
 // Logout button function
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "index.html";
        });
    }

    console.log("Dashboard loaded successfully for:", user.username);
});

