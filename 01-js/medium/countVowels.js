/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let u = str.toLowerCase().split("");
    let w = 0;
  for(let i=0 ; i<=str.length ; i++){
    if(u[i]=='a' || u[i]=='e' || u[i]=='i' || u[i]=='o' || u[i]=='u'){
      w=w+1;
    }
  }
  return w++;
}
let str = "Hello";

module.exports = countVowels;