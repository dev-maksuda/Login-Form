// Selecting form elements
const btn = document.querySelector(".btn");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const genderRadios = document.getElementsByName("gender");
const fileUpload = document.querySelector("#fileUpload");
const bio = document.querySelector("#bio");
const terms = document.querySelector("#terms");

// Selecting error display elements
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passError = document.querySelector("#passError");
const cpassError = document.querySelector("#cpassError");
const genderError = document.querySelector("#genderError");
const fileError = document.querySelector("#fileError");
const bioError = document.querySelector("#bioError");
const termsError = document.querySelector("#termsError");

// Validation regular expressions
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

// Event listener for submit button click
btn.addEventListener("click", (event) => {
    event.preventDefault(); 
    let isValid = true;

    // 1. Name validation
    if (!username.value) {
        nameError.innerHTML = "Name is required";
        username.style.border = "1px solid red";
        isValid = false;
    } else {
        nameError.innerHTML = "";
        username.style.border = "1px solid gray";
    }

    // 2. Email validation
    if (!email.value) {
        emailError.innerHTML = "Email is required";
        email.style.border = "1px solid red";
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.innerHTML = "Invalid email address";
        email.style.border = "1px solid red";
        isValid = false;
    } else {
        emailError.innerHTML = "";
        email.style.border = "1px solid gray";
    }

    // 3. Password validation
    if (!password.value) {
        passError.innerHTML = "password required";
        password.style.border = "1px solid red";
        isValid = false;
    } else if (!passwordRegex.test(password.value)) {
        passError.innerHTML = "Make more strong password";
        password.style.border = "1px solid red";
        isValid = false;
    } else {
        passError.innerHTML = "";
        password.style.border = "1px solid gray";
    }

    // 4. Confirm Password validation
    if (!confirmPassword.value) {
        cpassError.innerHTML = "Confirm Password is required";
        confirmPassword.style.border = "1px solid red";
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        cpassError.innerHTML = "Passwords do not match";
        confirmPassword.style.border = "1px solid red";
        isValid = false;
    } else {
        cpassError.innerHTML = "";
        confirmPassword.style.border = "1px solid gray";
    }

    // 5. Gender radio buttons validation
    let genderSelected = false;
    for (let i = 0; i < genderRadios.length; i++) { 
        if (genderRadios[i].checked) {
            genderSelected = true; 
            break;
        }
    }
    genderError.innerHTML = genderSelected ? "" : "Please select gender";
    if (!genderSelected) isValid = false;

    // 6. File upload  validation
    if (!fileUpload.value) {
        fileError.innerHTML = "File is required";
        fileUpload.style.border = "1px solid red";
        isValid = false;
    } else {
        fileError.innerHTML = "";
        fileUpload.style.border = "1px solid gray";
    }

    // 7. Textarea bio validation
    if (!bio.value) {
        bioError.innerHTML = "Bio is required";
        bio.style.border = "1px solid red";
        isValid = false;
    } else {
        bioError.innerHTML = "";
        bio.style.border = "1px solid gray";
    }

    // 8. Terms checkbox validation
    termsError.innerHTML = terms.checked ? "" : "Agree to terms";
    if (!terms.checked) isValid = false;

    // Reset form using querySelector if validation passes
    if (isValid) {
        alert("Registration Successful!");
        document.querySelector("#registrationForm").reset();
    }
});
