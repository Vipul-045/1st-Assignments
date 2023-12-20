<!-- <!-- ## Write to a file -->
<!-- Using the fs library again, try to write to the contents of a file. -->
<!-- You can use the fs library to as a black box, the goal is to understand async tasks. --> -->

const fs = require('fs')
let data = "What are you doing bro do it with full dedication harkirat course is really good though"; 

fs.writeFile('text.txt' , data, (err) => {
    if(err){
        console.log(err);
    }
    console.log(fs.readFileSync('text.txt','utf8'))
})