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
  "z",
];
var upperCase = [
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
  "Z",
];
var randomNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
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
  "/",
];
var allArray = [];
var charLength;
// Write password to the #password input

function promptUser() {
  
  while (true) {
    var userInput = prompt(
      "Enter desired password length - must be between 8-128 characters."
    );
    charLength = Number(userInput);
    if (charLength < 8 || charLength > 128) {
      alert("ERROR: must be between 8-128 characters.");
    } else {
      break;
    }
  }
  while (true) {
    var lowLetter = confirm("Lowercase letters okay?");
    var upLetter = confirm("Uppercase letters okay?");
    var numsOkay = confirm("Numbers okay?");
    var specChar = confirm("Special Characters okay?");
    if (
      lowLetter == false &&
      upLetter == false &&
      numsOkay == false &&
      specChar == false
    ) {
      alert("No characters selected, please select atleast one.");
    } else {
      break;
    }
  }
  if (lowLetter) {
    allArray.push.apply(allArray,lowerCase);
  }
  if (upLetter) {
    allArray.push.apply(allArray,upperCase);
  }
  if (numsOkay) {
    allArray.push.apply(allArray,randomNum);
  }
  if (specChar) {
    allArray.push.apply(allArray,specialChar);
  }
  console.log(allArray)
}
promptUser();

function generatePassword() {
  var password = ""
  for (var i = 0; i < charLength; i++){
  password += allArray[Math.floor(Math.random()*allArray.length)]
  } 
  return password
}

function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
