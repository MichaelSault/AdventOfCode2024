const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

//splits the input by lines
data = data.split("\n");

var leftArray = [];
var rightArray = [];

let distance = 0;

//seperates the two values into seperate arrays
for(var i = 0; i < data.length; i++){
  let points = data[i].split("   ");
  leftArray.push(parseInt(points[0]));
  rightArray.push(parseInt(points[1]));
}

leftArray.sort();
rightArray.sort();

//compare the two arrays and add the difference between the two
for(var i = 0; i < leftArray.length; i++){
  let diff = leftArray[i] - rightArray[i];
  if (diff < 0) {
    diff = diff * -1;
  }

  distance += diff;

}

console.log(distance);