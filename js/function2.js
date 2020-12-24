// function2.js
let friends = []; // array
for (let i = 0; i < 3; i++) {
    let names = window.prompt('이름을 입력하세요.');
    let age = window.prompt('나이를 입력하세요.');
    let friend = {}; // object
    friend.name = names;
    friend.age = age;
    friends[i] = friend;
}
document.write('<table border="1">');
for (friend of friends) {
    document.write('<tr>');
    for (field in friend) {
        document.write('<td>' + friend[field] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');
// let numAry = [];
// for (let i = 0; i < 5; i++) {
//     let name1 = window.prompt('숫자를 입력하세요.');
//     numAry[i] = parseInt(name1);
// }
// findMax();

// function findMax() {
//     let max = 0;
//     for (val of numAry) {
//         if (max < val) {
//             max = val;
//         }
//     }
//     document.write('<p>max val: <b>' + max + '</b></p>');
// }

// console.log(numAry);
// sum(name1, name2);

// function sum(a, b) {
//     let n1 = parseInt(a); // '30'
//     let n2 = parseInt(b);
//     console.log(n1 + n2);
// }