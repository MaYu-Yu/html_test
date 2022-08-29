score = [];
score[0] = ["國", "英", "數"];
score[1] = [100,70,60];
score[2] = [80,70,90];
document.write("<table border='1'>")
for(var i = 0; i < score.length; i++){
    document.write("<tr>")
    for(var j = 0; j < score[i].length; j++){
        if (i == 0) document.write("<th>"+ score[i][j] + "</th>");
        else document.write("<td>"+ score[i][j] + "</td>");
    }
    document.write("</tr>")
}
document.write("</table>")
