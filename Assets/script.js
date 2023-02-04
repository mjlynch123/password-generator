// Assignment Code
var passwrd = ""; // I made an extra passwrd variable becuase I felt as though it was required so that I could pass it into the function for the param
var generateBtn = document.querySelector("#generate");
var characters = "";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";
var specialChars = "!@#$%^&*()?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwrd);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(pass) {
  var passwordLen = prompt("Please enter password length (8-128)");
  var specialCharacters = prompt("Would you like to use special characters?");
  var upper = prompt("Would you like to use uppercase letters?");
  var lower = prompt("Would you like to use lowercase letters?");
  var number = prompt("Would you like to use numbers?");

  // Adding the desired characters if user answers yes
  if (upper === "yes") {
    characters += upperCase;
  } 

  if (lower === "yes") {
    characters += lowerCase;
  }

  if (number === "yes") {
    characters += numbers;
  }

  if (specialCharacters === "yes") {
    characters += specialChars;
  }

  // Makes sure that characters is not an empty string. If it is it will prompt the user to go back and add at least one option.
  if (characters != ""){
    for (var i = 0; i <= passwordLen; i++) {
      // This is grabbing a random character from within the character variable
      var getCharacter = Math.floor(Math.random() * characters.length + 1);
      // Adding the newly picked characters to the parameter pass
      pass += characters.charAt(getCharacter);
    }
    console.log(characters); // This is making sure all the chosen characters are being added
    // Return pass so that it can be used when the password variable calls this function
    return pass
  } else {
    alert("Please add at least one type of character to the password");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
