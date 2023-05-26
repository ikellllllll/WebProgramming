// let fruits=['apple', 'orange', 'plum']
// let [apple, orange, plum] = fruits
// console.log(apple)

// let obj = {name:"kim", age:30, dept:"SE"}
// let {name, age, dept} = obj
// console.log(name)

// const items = ["item1", "item2", "item3"]
// const copy = []

// // items.forEach(function(value) {
// //     copy.push(value)
// // });

// items.forEach((element, i) => {
//     console.log(`item[${i}]=${element}`)
// })


// console.log(copy)

// var obj = {a:1, b:2, c:3}

// for(const prop in obj){
//     console.log(`obj.${prop} = ${obj[prop]}`)
// }

// var arr = [10, 20, 30]
// for(let value of arr){
//     console.log(value)
// }

// Object.prototype.objCustom = function () {};
// Array.prototype.arrCustom = function () {};

// let iterable = [3, 5, 7];
// iterable.foo = "hello";

// for (let i in iterable) {
//   console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
// }

// for (let i of iterable) {
//   console.log(i); // logs 3, 5, 7
// }

// const array1 = ["7, 4, 9, 16"]
// const map1 = array1.map(x=> {
//     return x*2
// })

// console.log(map1)

// const array1 = ["회원1", "회원2", "회원3"]
// const map1 = array1.map(x => `<li>${x}</li>`)

// console.log(map1)

// => map1 = ["<li>회원1</li>", "<li>회원2</li>", "<li>회원3</li>"]

function addText() {
    let x = document.getElementsByTagName("li")
    document.getElementById("demo").innerHTML = x[1].innerHTML
}

function menuTemp() {
    let iceMenus = document.getElementsByClassName("ice-menu")
    console.log(iceMenus)
    for (let i of [...iceMenus]) {
        i.style.color = "blue"
    }

    let hotMenus = document.getElementsByClassName("hot-menu")
    for (let i in [...hotMenus]) {
        console.log(typeof i)
        hotMenus[i].style.color = "red"
    }
}

function removeMenu() {
    let demo = document.querySelector("#demo")
    demo.innerHTML = ""
}

function fontSizeUp() {
    let lis = document.querySelectorAll("#menu-ul li")
    lis.forEach((x) => {
        x.style.fontSize = "30px"
    })
}

function popupSelected() {
    let demo = document.getElementsByClassName("select-textbox")[0]
    let selectedNum = demo.value
    selectedNum = +selectedNum //타입캐스팅
    console.log(selectedNum)

    let lis = document.querySelectorAll("#menu-ul li")
    if(selectedNum < 1 || selectedNum > lis.length) {
        alert("입력 오류")
    } else {
        alert(getMenuName(selectedNum))
    }
}

function getMenuName(pos) {
    let menuUL = document.getElementById("menu-ul")
    let str = null
    if(pos == 1){
        str = menuUL.firstElementChild.innerHTML
    }
    else if(pos == 2){
        str = menuUL.firstElementChild.nextElementSibling.innerHTML
    }
    else{
        str = menuUL.lastElementChild.innerHTML
    }

    return str
}

let lis = document.querySelectorAll("li")
console.log(lis)
setTimeout(()=>{
    console.log(lis)
}, 15000)