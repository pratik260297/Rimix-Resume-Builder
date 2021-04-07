const signInForm = getValue("signInForm");
const signUpForm = getValue("signUpForm");
const firstName = getValue("firstNameTextBox");
const lastName = getValue("lastNameTextBox");
const email = getValue("emailTextBox");
const mobileNumber = getValue("mobileNumberTextBox");
const password = getValue("passwordTextBox");
const confirmPassword = getValue("confirmPasswordTextBox");

const signInEmail = getValue("signInEmailTextBox");
const signInPassword = getValue("signInPasswordTextBox");

const inputClasses =
  "x-input x-border x-bottombar x-round-large x-hover-border-gray";

function getValue(id) {
  return document.getElementById(id);
}

function showError(input, message) {
  input.className = `${inputClasses} x-border-red`;
  const error = input.nextElementSibling;
  error.innerHTML = message;
  error.style.visibility = "visible";
}

function showSuccess(input) {
  input.className = `${inputClasses} x-border-green`;
  const error = input.nextElementSibling;
  error.style.visibility = "hidden";
  location.replace("pages/create_resume.html");
}

function validateInputs(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `Required.`);
    } else {
      showSuccess(input);
    }
  });
}

function validatePasswords(p1, p2) {
  if (p1.value !== p2.value) {
    showError(p2, "Passwords must be match");
  }
}

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInputs([signInEmail, signInPassword]);
});

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInputs([
    firstName,
    lastName,
    email,
    mobileNumber,
    password,
    confirmPassword,
  ]);
  validatePasswords(password, confirmPassword);
});
