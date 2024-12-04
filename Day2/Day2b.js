const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

//splits the input by lines
data = data.split("\n");

unsafe = [];

let score = 0;


//seperates the two values into seperate arrays
for(var i = 0; i < data.length; i++){
    let points = data[i].split(" ");
    console.log(points);
    
    if (parseInt(points[0]) > parseInt(points[1])) {
        for (var j = 1; j < points.length; j++){
            if (parseInt(points[j]) < parseInt(points[j-1])){
                if ((parseInt(points[j-1]) - parseInt(points[j])) > 0 && (parseInt(points[j-1]) - parseInt(points[j])) <= 3) {
                    //console.log("true", points[j], points[j-1]);
                    if (j == points.length-1) {
                        score+=1;
                        console.log("pass1", score);
                    }
                } else {
                    console.log("fail1", points[j-1], points[j]);
                    unsafe.push(data[i].split(" ").splice(j, 1));
                    break;
                }
            } else {
                console.log("fail2", points[j-1], points[j]);
                unsafe.push(data[i].split(" ").splice(j, 1));
                break;
            }
            
        }
        
    } else if (parseInt(points[0]) < parseInt(points[1])) { //if increasing
        for (var j = 1; j < points.length; j++){ //iterate through points
            if (parseInt(points[j]) > parseInt(points[j-1])){   //check that current point is lager than the last
                if ((parseInt(points[j]) - parseInt(points[j-1])) > 0 && (parseInt(points[j]) - parseInt(points[j-1])) <= 3) {  //and that the difference is between 1 and 3
                    if (j == points.length-1) {
                        score+=1;
                        console.log("pass2", score);
                    }
                } else { 
                    console.log("fail3", points[j-1], points[j]);
                    unsafe.push(data[i].split(" ").splice(j, 1));
                    break;
                }
            } else { //if the current point is smaller than the last
                console.log("fail4", points[j-1], points[j]);
                unsafe.push(data[i].split(" ").splice(j, 1));
                break;
            }   
            
        }
        
    } else if (points[0] == points[1]) {
        console.log("fail5", points[j-1], points[j]);
        unsafe.push(data[i].split(" ").splice(j, 1));
    }
    
}
console.log(score);


//check unsafe nodes to see if they have an outlier
console.log("running unsafe");

//seperates the two values into seperate arrays
for(var i = 0; i < unsafe.length; i++){
let points = unsafe[i];
console.log(points);

if (parseInt(points[0]) > parseInt(points[1])) {
    for (var j = 1; j < points.length; j++){
        if (parseInt(points[j]) < parseInt(points[j-1])){
            if ((parseInt(points[j-1]) - parseInt(points[j])) > 0 && (parseInt(points[j-1]) - parseInt(points[j])) <= 3) {
                //console.log("true", points[j], points[j-1]);
                if (j == points.length-1) {
                    score+=1;
                    console.log("pass3", score);
                }
            } else {
                console.log("fail6", points[j-1], points[j]);
                break;
            }
        } else {
            console.log("fail7", points[j-1], points[j]);
            break;
        }
        
    }
    
} else if (parseInt(points[0]) < parseInt(points[1])) { //if increasing
    for (var j = 1; j < points.length; j++){ //iterate through points
        if (parseInt(points[j]) > parseInt(points[j-1])){   //check that current point is lager than the last
            if ((parseInt(points[j]) - parseInt(points[j-1])) > 0 && (parseInt(points[j]) - parseInt(points[j-1])) <= 3) {  //and that the difference is between 1 and 3
                if (j == points.length-1) {
                    score+=1;
                    console.log("pass4", score);
                }
            } else { 
                console.log("fail8", points[j-1], points[j]);
                break;
            }
        } else { //if the current point is smaller than the last
            console.log("fail9", points[j-1], points[j]);
            break;
        }   
        
    }
    
} else if (points[0] == points[1]) {
    console.log("fail10", points[j-1], points[j]);
}

}
console.log(score);


