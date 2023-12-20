/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(resolve=>{
    setTimeout(()=>{
    const str = "Hello world";
    resolve(str);
    }, n*1000);
});
}

wait(2)
    .then(result =>{
        console.log("Success", result);
    })
    .catch(error=>{
        console.error(error);
    });

module.exports = wait;