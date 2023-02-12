// Assignment code here

var userInputLength = length

function generatePassword(length) {
  console.log("check button pressed and working fine")
  let password = '';
  // Select criteria to use in password
  const chars = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&'()*+,-./:;<=>?@[\]^_`{|}~!";
  // Choose length of password
  const userInputLength = chars.length;
  //let userInputLength;

  const array = new Uint32Array(length);
  // Password gets generated
  self.crypto.getRandomValues(array);

  for (i=0; i < length; i++) {
    password += chars[array[i] % chars.length];
  }
  // 4. Display password to the page
    console.log("Your password is:",password);
    return "Generated password will go here!";
    //document.getElementById('password').value = password;
}

generatePassword(6);
generatePassword(10);

// 1. Prompt user for the password criteria
  // a. password length 8 < 128
  // b. lowercase, uppercase, numbers, special characters

// 2. Validate the input

// 3. Generate password based on criteria

// 4. Display password to the page
// return "Generated password will go here!";

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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //window.alert("Enter password length");
  let userInputLength = prompt("Enter password length between 8 and 128");
  if (userInput != null) {
    userOutput = document.getElementById("generate").innerHTML; 
    return generateBtn;
  } else {
    userOutput = "No number entered";
    alert(userOutput);
  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
