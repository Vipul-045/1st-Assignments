<!-- ## Reading the contents of a file -->

<!-- Write code to read contents of a file and print it to the console. -->
<!-- You can use the fs library to as a black box, the goal is to understand async tasks. -->
<!-- Try to do an expensive operation below the file read and see how it affects the output. -->
<!-- Make the expensive operation more and more expensive and see how it affects the output. -->

const fs = require("fs");

fs.readFile('text.txt', 'utf8' , function(err, data){
    console.log(data);
})

let a=0; 
function calculate(a){
for(let i = 0 ; i < 100000 ; i++){
    a=a+i;
}
return a;
}
console.log(calculate(a));