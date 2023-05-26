// window.onload = () => {
//     alert("dom is created")
// }


// var element = document.getElementById("div")
// element.onclick = function() {
//     alert("clicked")
//     alert(this)
//     alert(this.id)
// }


// element.addEventListener("click", function(ev){
//     console.log(ev.type)
// })

// this는 이벤트가 등록된 객체(element), ev는 이벤트


// var element = document.getElementById("toHome")
// element.addEventListener("click", function (event) {
//     event.preventDefault()
// });


// var element = document.querySelectorAll("div")

// element.forEach(div => div.addEventListener("click", logEvent))

// function logEvent(event) {
//     console.log(event.currentTarget.className)
// } // 버블링


// var element = document.querySelectorAll("div")

// element.forEach(div => div.addEventListener("click", logEvent, {capture : true}))

// function logEvent(event) {
//     console.log(event.currentTarget.className)
// } // 캡처링


// var element = document.querySelectorAll("div")

// element.forEach(div => div.addEventListener("click", logEvent))

// function logEvent(event) {
//     event.stopPropagation()
//     console.log(event.currentTarget.className)
// }


var lis = document.querySelectorAll("li")

// lis.forEach(li => li.addEventListener("click", addClassEvent))

var ul = document.getElementById("sampleList")
ul.addEventListener("click", addClassEvent)

var addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", addList)

// function addClassEvent(event) {
//     // event.stopPropagation()
//     event.target.classList.toggle("remove")
// }

function addClassEvent(event) {
    var clickedLi = document.getElementById(event.target.id)
    clickedLi.classList.toggle("remove")
}

function addList() {
    var ul = document.getElementById("sampleList")
    var nextSeq = ul.children.length + 1 // 4
    var newLi = document.createElement("li")
    newLi.id = `list${nextSeq}`
    newLi.appendChild(document.createTextNode("기존 리스트 " + nextSeq))
    ul.appendChild(newLi)
}