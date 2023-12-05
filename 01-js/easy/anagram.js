/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let a = str1.toUpperCase().split("").sort().join("");
  let b = str2.toUpperCase().split("").sort().join("");
  if(a==b){
    return true;
  }
  else{
    return false;
  }
}

let a = "saw";
let b = "was";
console.log(isAnagram(a, b));

module.exports = isAnagram;
