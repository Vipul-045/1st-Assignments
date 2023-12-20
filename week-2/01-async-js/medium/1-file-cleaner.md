<!-- File cleaner -->
<!-- Read a file, remove all the extra spaces and write it back to the same file. -->
<!--  -->
<!-- For example, if the file input was -->
<!-- ``` -->
<!-- hello     world    my    name   is       raman -->
<!-- ``` -->

<!-- After the program runs, the output should be -->

<!-- ``` -->
<!-- hello world my name is raman -->
<!-- ``` -->

const fs = require('fs');

fs.readFile("text2.txt" , "utf8" , function(err, data){   
    const string = data;
    
    let newString = string.replace(/\s+/g,' ').trim();

    console.log(newString);

    fs.writeFile("text2.txt", newString , (err)=>{})
})