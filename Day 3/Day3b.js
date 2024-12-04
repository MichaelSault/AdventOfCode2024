const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

//splits the input by lines
dataDont = data.split("do");


let score = 0;
let curXY = 'x';

for (let m = 0; m < dataDont.length; m++) {
    if (dataDont[m][0] != 'n' && dataDont[m][1] != "'" && dataDont[m][2] != 't' && dataDont[m][3] != '(' && dataDont[m][4] != ')') {
        dataDo = dataDont[m];
        console.log(dataDo);

        
            dataMul = dataDo.split("mul(");
            
            console.log(dataMul);

            //seperates the two values into seperate arrays
            for(var i = 0; i < dataMul.length; i++){
                let x = '';
                let y = '';
                let x2 = 0;
                let y2 = 0;

                for(var j = 0; j < dataMul[i].length; j++){
                    if (dataMul[i][j] >= '0' && dataMul[i][j] <= '9' && curXY == 'x'){
                        x += dataMul[i][j];
                    } else if (dataMul[i][j] == ',' && curXY == 'x' && x != '') {
                        //console.log(dataMul[i][j]);
                        curXY = 'y';
                    } else if (dataMul[i][j] >= '0' && dataMul[i][j] <= '9' && curXY == 'y'){
                        y += dataMul[i][j];
                    } else if (dataMul[i][j] == ')' && curXY == 'y' && y != '') {
                        //console.log(dataMul[i][j]);
                        curXY = 'x';
                        x2 = parseInt(x);
                        y2 = parseInt(y);
                        break;
                    } else {
                        curXY = 'x';
                        break;
                    }
                }
                //console.log(x2, y2);
                //console.log(x2 * y2);

                score += (x2*y2);
                console.log(score);
            }


    }

    
}
console.log(score);