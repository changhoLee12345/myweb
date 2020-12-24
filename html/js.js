// js.js
var name = document.getElementById('show').innerHTML;
console.log(name);
document.getElementById('show').innerHTML = "World";

var divTag = document.createElement("div");
divTag.innerHTML = "Nice"; // <div>Nice</div>

document.getElementById('show').append(divTag);
console.log("--------------------------------------")

var li_1 = document.createElement("li");
var li_2 = document.createElement("li");
li_1.innerHTML = "Apple"; // <li>Apple</li>
li_2.innerHTML = "Orange"; // <li>Orange</li>

document.getElementById("fruit").append(li_1);
document.getElementById("fruit").append(li_2);

///////////////////////////////////////////
var grade = 5;
for(var i = 1; i <= 9; i++) {
    console.log(grade + ' * ' + i + ' = ' + (grade*i));
}
// 결과값: 5050 입니다.