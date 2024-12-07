const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

//splits the input by lines
data = data.split("\r\n");

let positionX = 0;
let positionY = 0;
let directionX = -1;
let directionY = 0;

let guardPath = [];
let checkArray =[];

let score = 0;
let obScore = 0;


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
        if ((data[positionX+directionX][positionY+directionY] != '#')&&(data[positionX+directionX][positionY+directionY] != '0')) {
            if ((data[positionX][positionY] == '.') || (data[positionX][positionY] == '^')) {
                //data[positionX] = setCharAt(data[positionX], positionY, 'X');
                guardPath.push([positionX, positionY, directionX, directionY]);
                score++;
            }
            positionX += directionX;
            positionY += directionY;
            //console.log(positionX, positionY);
        } else if ((data[positionX+directionX][positionY+directionY] == '#') || (data[positionX+directionX][positionY+directionY] == '0')){
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
    tempArray.splice(index, 1, chr);
    var result = tempArray.join("");

    return(result);
}

console.log(score);
//console.log(guardPath);
checkObsticles();

//start part 2
function checkObsticles() {
    for (let pos in guardPath) {
        positionX = 60;
        positionY = 60;
        directionX = -1;
        directionY = 0;
        optionArray = data;
        optionArray[guardPath[pos][0]] = setCharAt(optionArray[guardPath[pos][0]], guardPath[pos][1], '0');
        if (pos > 0) {
            optionArray[guardPath[(pos-1)][0]] = setCharAt(optionArray[guardPath[(pos-1)][0]], guardPath[(pos-1)][1], '%');
        }
        console.log("option array", optionArray);
        if (pos == 2) {
            break;
        }
        checkPath(positionX, positionY);
    }
}

//traces the guards path
function checkPath(positionX, positionY){
    let looping = false;

    if ((data[positionX+directionX][positionY+directionY] != '#')&&(data[positionX+directionX][positionY+directionY] != '0')) {
        if ((data[positionX][positionY] == '.') || (data[positionX][positionY] == 'X')) {
            console.log("does this run?");
            data[positionX] = setCharAt(data[positionX], positionY, '%');
            console.log(data);
            if (checkArray.includes([positionX, positionY, directionX, directionY])){
                console.log("loop reached");
                looping = true;
                return obScore++;
            } else {
                checkArray.push([positionX, positionY, directionX, directionY]);
                console.log(positionX, positionY, directionX, directionY);
            }
            positionX += directionX;
            positionY += directionY;
            console.log(positionX, positionY);
        }
    } else if ((data[positionX+directionX][positionY+directionY] == '#') || (data[positionX+directionX][positionY+directionY] == '0')){
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

    if (looping == true) {
        return;
    }

    if ((positionX >= 0) && (positionX <= 130) && (positionY >= 0) && (positionY <= 130)){
        //console.log("check path loops");
        //console.log(positionX, positionY);
        checkPath(positionX, positionY);
    }
    
}

console.log(obScore);