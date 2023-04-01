
function generatePassword() {
  console.log("check button pressed and working fine")
  // create variables and prompts for each of the user input questions
  // 1. Prompt user for the password criteria
  // a. password length 8 < 128
  var length = window.prompt("Please enter number of characters for password between 8 and 128");
  if (length <8 || length >128) {
    window.alert("Choose password length between 8 and 128 characters")
    return null
  }
  var upperCase = window.confirm("Would you like to include uppercase letters?");
  var lowerCase = window.confirm("Would you like to include lowercase letters?");
  var numericals = window.confirm("Would you like to include numbers?");
  var specChar = window.confirm("Would you like to include special characters?");

  // 1b. lowercase, uppercase, numbers, special characters
  if (!upperCase && !lowerCase && !numericals && !specChar) {
    window.alert("Please select at least one character type")
    return null
  }

  let password = '';
  // Select criteria to use in password
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numChars = "0123456789"
  const specChars = "#$%&()*+,-./:;<=>?@[\]^_{|}~!";

// 2. Validate the user input
  let chars = ""
  if (lowerCase) {
    chars += lowerChars
  }
  if (upperCase) {
    chars += upperChars
  }
  if(numericals) {
    chars += numChars
  }
  if (specChar) {
    chars += specChars
  }

const array = new Uint32Array(length);

// 3. Password gets randomly generated based on user input criteria
self.crypto.getRandomValues(array);

for (i=0; i < length; i++) {
  password += chars[array[i] % chars.length];
}
return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

// 4. Display password to the page
   document.getElementById('password').value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


