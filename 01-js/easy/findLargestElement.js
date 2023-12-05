/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestelement = numbers[0];
    for(let i=0 ; i <= numbers.length ; i++){
        if(numbers[i]>largestelement){
            largestelement = numbers[i];
        }
    }
    return largestelement;
}

let numbers = [ 1, 7, 3, 4, 5, 6, 2, 8]
console.log(findLargestElement(numbers));

module.exports = findLargestElement;