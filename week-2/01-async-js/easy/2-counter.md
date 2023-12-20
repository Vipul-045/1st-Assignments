<!-- ## Counter without setInterval -->

<!--    . There is a hint at the bottom of the file if you get stuck. -->

let a = 0
function counter(){
    a++;
    console.log(a);
    setTimeout(counter, 1000)
}

counter();





































































<!-- (Hint: setTimeout) -->