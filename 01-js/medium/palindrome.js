/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  let str1 = str.toString().toLowerCase().replace(re, '');
  let a = str1.length;
  for(let i=0 ; i<= a/2 ; i++){
    if(str1[i] == str1[a-i-1]){
      return true;
    }
    else{
      return false;
    }
  } 
}

let string = "Madam";
console.log(isPalindrome(string));

module.exports = isPalindrome;
