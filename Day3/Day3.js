const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

//splits the input by lines
data = data.split("mul(");

console.log(data);

let score = 0;
let curXY = 'x';

//seperates the two values into seperate arrays
for(var i = 0; i < data.length; i++){
    let x = '';
    let y = '';
    let x2 = 0;
    let y2 = 0;

    for(var j = 0; j < data[i].length; j++){
        if (data[i][j] >= '0' && data[i][j] <= '9' && curXY == 'x'){
            x += data[i][j];
        } else if (data[i][j] == ',' && curXY == 'x' && x != '') {
            console.log(data[i][j]);
            curXY = 'y';
        } else if (data[i][j] >= '0' && data[i][j] <= '9' && curXY == 'y'){
            y += data[i][j];
        } else if (data[i][j] == ')' && curXY == 'y' && y != '') {
            console.log(data[i][j]);
            curXY = 'x';
            x2 = parseInt(x);
            y2 = parseInt(y);
            break;
        } else {
            curXY = 'x';
            break;
        }
    }
    console.log(x2, y2);
    console.log(x2 * y2);

    score += (x2*y2);
    console.log(score);
}

console.log(score);