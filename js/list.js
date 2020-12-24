function myFunc() {
    document.write('<style> .odd { background: yellow; } </style>');
    document.write('<style> .even { background: cyan; } </style>');
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");
    let dan = 4;
    document.write('<ul>');
    document.write('<table border="1" >');
    for (let i = 1; i <= 9; i++) {
        if (i % 2 == 0)
            document.write('<tr class="odd" align="center">');
        else
            document.write('<tr class="even" align="center">');
        document.write('<td width="60px">' + dan + ' * ' + i + '</td><td width="30px"> = </td><td width="40px">' + (dan * i) + '</td>');
        document.write('</tr>');
    }
    document.write('</table>');
}