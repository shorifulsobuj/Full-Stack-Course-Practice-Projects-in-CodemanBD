//      ----------01---------
// Write a function called reverseString that takes a string as an argument and returns the string reversed.

// function reverseString(word) {
//   return word.split("").reverse().join("");
// }

//console.log(reverseString("Shoriful Sobuj"));
// let word = "shoriful sobuj is good boy";

// let splitWord = word.split("").reverse().join("");

// // splitWord.forEach((word) => console.log(word));

//console.log(splitWord);

//      ------02----
// Create a function called extractDomain that takes an email address as a string and returns only the domain part.

//dlkjla@lsdfkj.com
// slkf@fld.com

let email = "shorifulsobuj@gamil.com";
let atIndex = email.indexOf("@");

console.log(email.substring(atIndex + 1));

function extractDomain(email){
    let atIndex = email.indexOf(("@"));
    return email.substring(atIndex + 1);
}

console.log(extractDomain("sdjflasdjf@sdfl.com"))