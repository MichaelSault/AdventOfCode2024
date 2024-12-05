const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

//splits the input by lines
data = data.split("\n");

let foundXMAS = 0;

data.forEach(line => {
    findXMAS(line);
});

vertSearch(data);
diagSearch(data);

console.log(foundXMAS);

function vertSearch(data) {
    const numRows = data.length;
    const numCols = data[0].length;

    // add each col to a long string
    for (let x = 0; x < numCols; x++) {
        let columnString = '';
        for (let y = 0; y < numRows; y++) {
            columnString += data[y][x];
        }

        for (let i = 0; i <= columnString.length - 4; i++) {
            const word = columnString.slice(i, i + 4);
            if (word === "XMAS" || word === "SAMX") {
                foundXMAS++;
            }
        }
    }
}

function diagSearch(data) {
    const numRows = data.length;
    const numCols = data[0].length;

    //add diagnal letters to a long string
    for (let x = 0; x < numRows + numCols - 1; x++) {
        let letters = "";
        for (let i = 0; i < numRows; i++) {
            let j = x - i;
            if (j >= 0 && j < numCols) {
                letters += data[i][j];
            }
        }
        findXMAS(letters);
    }

    //add the other diagnal to a long string
    for (let x = -numRows + 1; x < numCols; x++) {
        let letters = "";
        for (let i = 0; i < numRows; i++) {
            let j = i + x;
            if (j >= 0 && j < numCols) {
                letters += data[i][j];
            }
        }
        findXMAS(letters);
    }
}

function findXMAS(letters) {
    for (let i = 0; i <= letters.length - 4; i++) {
        const word = letters.slice(i, i + 4);
        if (word === "XMAS" || word === "SAMX") {
            foundXMAS++;
        }
    }
}
