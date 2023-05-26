// var button = document.getElementById('button');
// var anchor = document.getElementById('anchor');
// var para = document.getElementById('para');

// button.title = 'inputTitle';
// button.onclick = function() {
//     alert("clicked")   
// }
// // "alert('modified click')" //javascript 적용 안됨
// anchor.href = 'http://se.kumoh.ac.kr/';
// para.style.fontSize = '32px';
// para.style.textAlign = 'right';

// anchor.setAttribute('href', 'http://cs.kumoh.ac.kr/cs/index.do');                
// para.setAttribute('style','font-size:48px;text-align:center; border: 1px solid blue');

// function myFunction() {
//     document.getElementsByTagName("h1")[0].setAttribute("class", "header-text"); 
//     document.getElementsByTagName("h1")[1].setAttribute("class", "body-text"); 
// }
// var firstH1 = document.getElementsByTagName("h1")[0]
// firstH1.classList.add("first")
// firstH1.classList.add("second")
// firstH1.classList.add("third")
// console.log(firstH1.classList.item(1))
// firstH1.classList.remove("second")
// firstH1.classList.toggle("second")
// firstH1.classList.toggle("second")    

// var root = document.getElementsByTagName('ol')[0]; //root는 살아있는 객체
// var li = document.createElement('li');		// <li></li>
// var content = document.createTextNode('게임');      //  ‘게임’
// li.id = 'newLi';			      //<li id=“newLi”><li>	 
// li.className = 'festival';		      //<li class=“festival”><li>	
// li.appendChild(content);		      //<li class=“festival”>게임<li>	
// root.appendChild(li);

// var li = document.createElement('li')
// var content = document.createTextNode("휴강")
// li.appendChild(content)
// root.insertBefore(li, root.firstElementChild.nextElementSibling)

// var jujum = document.getElementsByTagName('li')[2]
// jujum.remove();

// window.alert("hello")


// function sum(a, b) {
//     console.log(this === window)
//     this.number = 20;
//     return a+b;
// }

// console.log(1, window.number)
// console.log(2, sum(1, 1));
// console.log(3, window.number)

// var calc = {
//     num:0, 
//     increment: function() {
//         console.log(this === calc) // 객체 안에 들어간 함수를 보고 메소드라 함.
//         this.num += 1
//         return this.num
//     }
// }

// console.log(calc.increment())
// console.log(calc.increment())

function Country(name, traveled) {
    this.name = name ? name : "United Kingdom";
    this.traveled = Boolean(traveled);
}
Country.prototype.travel = function () {
    this.traveled = true;
};
// Constructor invocation
var france = new Country("France", false);//실행
// Constructor invocation
//   var unitedKingdom = new Country();

//   console.log(1, france.name);
//   console.log(2, window.name);
//   console.log(3, window.france.name);

//   console.log(4, france.traveled);
//   france.travel();
//   console.log(5, france.traveled);

function Prefixer(prefix) {
    this.prefix = prefix;
}
console.log(this);
Prefixer.prototype.prefixArray = function (arr) {
    console.log(this);
    return arr.map((x) => `${this.prefix}  ${x}`); 
    // 화살표는 상위 문맥의 this
    // 원래 함수라면 window ->상위 문맥을 따라 Prefixer
};
const pre = new Prefixer("Hi");
console.log(pre.prefixArray(["Lee", "Kim"]));
