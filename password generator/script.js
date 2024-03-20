let passwordbox = document.getElementById("password");
const length = 12;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "~!@#$%^&*()_+=-`,./?|<>;:'[]{}";

const allChars = uppercase + lowercase + symbols + numbers;

function createpassword() {
  let password = "";
  for (i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordbox.value = password;
}

function copyPassword() {
  const password = document.getElementById("passwordbox").value; // Assuming 'passwordbox' is the ID of your password input field

  // Attempt to write password to clipboard
  navigator.clipboard
    .writeText(password)
    .then(() => {
      console.log("Password copied to clipboard successfully");
    })
    .catch((err) => {
      console.error("Unable to copy password to clipboard: ", err);
    });
}
