const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

let score = 0;

//splits the input by lines
data = data.split('\r\n');

const antennas = {};

for (let i=0; i < data.length; i++){
    for (let j=0; j < [...data[i]].length; j++){
        if (data[i][j] !== '.') {
            if (antennas[data[i][j]] === undefined) {
            antennas[data[i][j]] = [];
        }
        antennas[data[i][j]].push([j,i]);
        }
    };
};

let antinodes = new Set();
Object.values(antennas).forEach(arr => {
    for (let i = 0; i < arr.length; i++) {
    for (let j=i+1; j < arr.length; j++) {
        let [x, y] = arr[i];
        let [x1, y1] = arr[j];
        antinodes.add([2*x-x, 2*y-y1]);
        antinodes.add([2*x1-x, 2*y1-y]);
        //console.log(antinodes);
    }
    }
});

const result = new Set();

antinodes.forEach(([x,y]) => {
    if (x >= 0 && x < data[0].length && y >= 0 && y < data.length) {
        result.add(`${x}-${y}`);
    }
});

console.log(result.size);