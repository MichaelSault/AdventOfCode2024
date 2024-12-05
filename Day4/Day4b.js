const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

//splits the input by lines
data = data.split("\n");

let foundXMAS = 0;


XMASSeatch(data)

function XMASSeatch(data) {
    const numRows = data.length;
    const numCols = data[0].length;

    //brute force checks to an X-Mas pattern in the word search
    for (let i = 1; i < numRows - 1; i++) {
        for (let j = 1; j < numCols - 1; j++) {
            const topLeft = data[i - 1][j - 1];
            const topRight = data[i - 1][j + 1];
            const center = data[i][j];
            const bottomLeft = data[i + 1][j - 1];
            const bottomRight = data[i + 1][j + 1];

            if (
                (topLeft === 'M' && topRight === 'S' && center === 'A' && bottomLeft === 'M' && bottomRight === 'S') ||
                (topLeft === 'S' && topRight === 'M' && center === 'A' && bottomLeft === 'S' && bottomRight === 'M') ||
                (topLeft === 'S' && topRight === 'S' && center === 'A' && bottomLeft === 'M' && bottomRight === 'M') ||
                (topLeft === 'M' && topRight === 'M' && center === 'A' && bottomLeft === 'S' && bottomRight === 'S')
            ) {
                foundXMAS++;
            }
        }
    }
}

console.log(foundXMAS);