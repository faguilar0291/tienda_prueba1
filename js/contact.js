function validateForm(event) {
    // Reset errors
    resetErrors();

    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var cellPhone = document.getElementById("cellPhone").value;
    var message = document.getElementById("message").value;

    // Validate each field
    var isValid = true;

    if (!isValidName(firstName)) {
        document.getElementById("firstNameError").innerText = "Invalid first name";
        isValid = false;
    }

    if (!isValidName(lastName)) {
        document.getElementById("lastNameError").innerText = "Invalid last name";
        isValid = false;
    }

    if (!isValidEmail(email)) {
        document.getElementById("emailError").innerText = "Invalid email address";
        isValid = false;
    }

    if (!isValidPhone(cellPhone)) {
        document.getElementById("cellPhoneError").innerText = "Invalid cell phone number";
        isValid = false;
    }

    if (!isValidMessage(message)) {
        document.getElementById("messageError").innerText = "Message must be at least 250 characters";
        isValid = false;
    }

    // If any field is not valid, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
}

function resetErrors() {
    // Reset error messages
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].innerText = "";
    }
}

function isValidName(name) {
    // Simple validation for names (allow only alphabets and spaces)
    return /^[a-zA-Z\s]+$/.test(name);
}

function isValidEmail(email) {
    // Simple validation for email address
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    // Simple validation for phone number (allow only digits and optional hyphens)
    return /^\d+(-\d+)*$/.test(phone);
}

function isValidMessage(message) {
    // Check if the message has at least 250 characters
    return message.length <= 250;
}