const form = document.getElementById("contactFrom");
const error = document.getElementById("error");
form.addEventListener("submit", function (e) { e.preventDefault();
    const name = document.getElementById("name").Value.trim();
    const email = document.getElementById("email").Value.trim();
    const message = document.getElementById("message").Value.trim();

    if (name === "" || email === "" || message === "") {
        error.textContent = "All fields are required!";
        return;
    }
    if (!validateEmail(email)) {
        error.textContent = "Please emter a valid email";
        return;
    }
    error.style.color =  "green";
    error.textContent = "Message sent successfully!";
    form.requestFullscreen();
});

function validateEmail(email) {
    const pattern = /^[^\s@]+[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
