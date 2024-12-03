const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

//splits the input by lines
data = data.split("\n");