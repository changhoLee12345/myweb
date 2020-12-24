// table.js
// 타이틀 영역..
var tableTag = document.getElementById('tbl');

var trTag1 = document.createElement('tr'); // <tr></tr>

var tdTag1 = document.createElement('td'); // <td></td>
tdTag1.innerHTML = 'Name';
tdTag1.setAttribute('id', 'first');
tdTag1.setAttribute('class', 'title');
var tdTag2 = document.createElement('td'); // <td></td>
tdTag2.innerHTML = 'Age';
tdTag2.setAttribute('class', 'title');

trTag1.append(tdTag1);
trTag1.append(tdTag2);

tableTag.append(trTag1);

// data영역...
trTag1 = document.createElement('tr'); // <tr></tr>
tdTag1 = document.createElement('td'); // <td></td>
tdTag1.innerHTML = 'Hong';
tdTag1.setAttribute('id', 'first');
tdTag1.setAttribute('class', 'data');
tdTag2 = document.createElement('td'); // <td></td>
tdTag2.innerHTML = '15';
tdTag2.setAttribute('class', 'data');

trTag1.append(tdTag1);
trTag1.append(tdTag2);

tableTag.append(trTag1);
