// SET TIME OUT ::

function doSomething(){
    console.log(6666)
}

console.log(2222);

// doSomething();

setTimeout(doSomething , 7000); /* 1000 millisecond = 1 second | (7000=7sec) */

console.log(4444);

setTimeout(function(){
    console.log("Lazy and Waited 5 Second")
} , 5000)

setTimeout(() => {
    console.log("With Arrow Function 3 sec delayed")
} , 3000)

// SET INTERVAL ::

setInterval ( () => {
    console.log("I am BACK and Will Back again after 8 Seconds");
} , 8000)

// Press ctrl + c to stop on terminal node