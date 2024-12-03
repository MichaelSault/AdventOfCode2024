const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

//splits the input by lines
data = data.split("\n");

var leftArray = [];
var rightArray = [];

let simScore = 0;

//seperates the two values into seperate arrays
for(var i = 0; i < data.length; i++) {
  let points = data[i].split("   ");
  leftArray.push(parseInt(points[0]));
  rightArray.push(parseInt(points[1]));
}

leftArray.sort();
rightArray.sort();

//compare the two arrays and add any matching values
for(var i = 0; i < leftArray.length; i++) {
  for(var j = 0; leftArray[i] >= rightArray[j]; j++) {
    if (leftArray[i] == rightArray[j]) {
      simScore += parseInt(leftArray[i]);
      //console.log(leftArray[i]);
    }
  }
}

console.log(simScore);