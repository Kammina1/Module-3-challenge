// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]
var upperCase =  [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]
var randomNum = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
]
var specialChar = [
  "!",
  "@",
  "#",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "=",
  "<",
  ">",
  "/"
]
var allAray = [lowerCase, upperCase, randomNum, specialChar]
// Write password to the #password input

function generatePassword() {
  var userInput = prompt("Enter desired password length - must be between 8-128 characters.")
  var charLength = userInput;
  if (charLength < 8 || charLength > 128) {
    var charLength = alert("ERROR: must be between 8-128 characters.")
    generatePassword()
  } else {
    generatePassword()
  }
var lowLetter = confirm("Lowercase letters okay?")
var upLetter = confrim("Uppercase letters okay?")
var numsOkay = confirm("Numbers okay?")
var specChar = confirm("Special Characters okay?")
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
