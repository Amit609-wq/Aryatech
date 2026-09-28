// Ayra Tech - Website Functionality

// Mobile menu
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}

// Contact form
function sendMessage() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    if (!name || !email || !subject || !message) {
        alert("Contact form not found.");
        return;
    }

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        subject.value.trim() === "" ||
        message.value.trim() === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    alert("Thank you! Your message has been received.");

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
}

// Close mobile menu after clicking a link
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            const navLinks = document.querySelector(".nav-links");

            if (navLinks) {
                navLinks.classList.remove("active");
            }
        });
    });
});
