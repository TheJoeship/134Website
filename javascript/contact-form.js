/* constants */
const contactForm = document.getElementById('contact');
const message = document.getElementById('message');
const errorOutput = document.getElementById('error');
const charCount = document.getElementById('charCount');
const email = document.getElementById("mail");
const name = document.getElementById("name");

message.addEventListener('input', function() {
    charCount.value = `Characters Remaining: ${400-message.value.length}`;
})

email.addEventListener("input", (event) => {
    email.setCustomValidity("");
    if (!email.validity.valid) {
        return;
    }
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address of the form: rdeckard@example.com");
    }
});

/* not working
name.addEventListener("input", (event) => {
    name.setCustomValidity("");
    if (name.value.trim().length < 1) {
        name.setCustomValidity("Error: Please enter your name!");
    }
    if (name.validity.patternMismatch) {
        name.setCustomValidity("Error: Please only use alphanumeric characters");
    }
});
*/


errorOutput.value = '';
contactForm.addEventListener('submit', function(event) {
    if (message.value.trim() === '') {
        event.preventDefault();
        errorOutput.value = "Error: Are you sure you want to submit an empty message?";
    }
})
