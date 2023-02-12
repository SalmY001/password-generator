// Assignment code here

function generatePassword(length) {
  console.log("check button pressed and working fine")
  let password = '';
  // Select criteria to use in password
  const chars = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&'()*+,-./:;<=>?@[\]^_`{|}~!";
  // Choose length of password
  let lengthOfPassword = length;

  const array = new Uint32Array(length);
  // Password gets generated
  self.crypto.getRandomValues(array);

  for (i=0; i < length; i++) {
    password += chars[array[i] % chars.length];
  }
    console.log("Your password is:",password);
    return password;
}

generatePassword(6);
generatePassword(10);

  //console.log(array);
  //console.log("Your password is:",password);
  //for (const num of array) {
    //console.log(num)

  //console.log(password);

  //generatePassword(6);
  //generatePassword(10);


// Prompt user for password criteria

// Choose character types

// Input validation at each prompt

// Password displayed on the page
  //return "This is where your password will show";
  //return password;


//generatePassword(5);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
