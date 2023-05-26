function myFunction() {
    var x = document.getElementsByTagName("LI");
    document.getElementById("demo").innerHTML = x[1].innerHTML;
    for (var i in [...x]) {
        x[i].style.color = "green";
    }
}

function getGreeting() {
    return "Hello World!";
}

console.log(getGreeting());

var o = {};
o.f = getGreeting;
console.log(o);
console.log(o.f());

// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable

//     alert(message);
// }
// showMessage(); // Hello, I'm JavaScript!
// alert(message); // <-- Error! The variable is local to the function

// let userName = 'John';
// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// showMessage(); // Hello, John

let func = (a, b, ...c) => { // c는 여러개이므로 배열로 받아줌.
    let total = a + b;
    for (let i of c) {
        total += i;
    }

    return total;
}

console.log(func(1, 2));
console.log(func(1, 2, 3));
console.log(func(1, 2, 3, 4));
console.log(func(1, 2, 3, 4, 5));

function outFunc(name) {
    var outVar = 'my name is '
    function innerFunc() { return outVar + name }
    return innerFunc
}
var result = outFunc('bono')
console.log('result: ' + result())

var x;
console.log(x); //undefined -> 어? 값이 없네?
x = 3; // 선언은 올리지만, 할당은 올리지 않는다.
console.log(x); //3

sayName(); 
var sayName = function(){ 
console.log('yuddomack'); 
}
