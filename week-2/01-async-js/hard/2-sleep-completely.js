/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds){
    let timeoutId;
    new Promise(resolve =>{
        timeoutId = setTimeout(()=>{
            resolve()}, milliseconds*1000);
    })
    Promise.clearTimeout=()=>{
        clearTimeout(timeoutId);
    }
    return Promise;
}

console.log("Start")
const mysleep = sleep(5).then(()=>{
    console.log("This is printed after 5 seconds");
})

mysleep.clearTimeout();

mysleep.then(()=>{
    console.log("End");
})

module.exports = sleep;