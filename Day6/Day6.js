const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

//splits the input by lines
data = data.split("\r\n");

let positionX = 0;
let positionY = 0;
let directionX = -1;
let directionY = 0;

let score = 0;


//find starting position
for (let row in data) {
    if (data[row].indexOf('^') != -1){
        positionX = parseInt(row);
        positionY = parseInt(data[row].indexOf('^'));
        console.log(positionX, positionY);
    }
}

//starts the recursive moveGuard function
moveGuard(positionX, positionY);

//traces the guards path
function moveGuard(positionX, positionY){
        if (data[positionX+directionX][positionY+directionY] != '#') {
            if ((data[positionX][positionY] == '.') || (data[positionX][positionY] == '^')) {
                data[positionX] = setCharAt(data[positionX], positionY, 'X');
                //prints the map but takes MUCH longer to display each iteration
                //console.log(data);
                score++;
            }
            positionX += directionX;
            positionY += directionY;
            //console.log(positionX, positionY);
        } else if (data[positionX+directionX][positionY+directionY] == '#'){
            switch (true) {
                case (directionX == -1 && directionY == 0):
                    directionX = 0;
                    directionY = 1;
                    break;
                case (directionX == 0 && directionY == 1):
                    directionX = 1;
                    directionY = 0;
                    break;
                case (directionX == 1 && directionY == 0):
                    directionX = 0;
                    directionY = -1;
                    break;
                case (directionX == 0 && directionY == -1):
                    directionX = -1;
                    directionY = 0;
                    break;
            }
        } else {
            return;
        }

        if ((positionX >= 0) && (positionX <= 130) && (positionY >= 0) && (positionY <= 130)){
            moveGuard(positionX, positionY);
        }
        
    
}

function setCharAt(str,index,chr) {
    var tempArray = str.split("");
    tempArray.splice(index, 1, 'X');
    var result = tempArray.join("");

    return(result);
}

console.log(score);