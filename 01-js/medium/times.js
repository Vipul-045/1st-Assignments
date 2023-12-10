/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let num = 0;
    for(let i = 0 ; i<=100000000 ; i++){
        num = num + 1;
    }
    return num;
}

const currentdate = new Date();
const gettime = currentdate.getTime();

calculateTime(100);

const currentdate2 = new Date();
const gettime2 = currentdate2.getTime();

console.log(gettime2 - gettime);