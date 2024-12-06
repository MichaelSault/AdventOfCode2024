const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });


let updates = []
let score = 0;

data = data.split('\r\n');

ruleInput = data.slice(0, 1175);

rules = ruleInput.map(rule => {
  const [before, after] = rule.split('|');
  return [parseInt(before), parseInt(after)];
});


updatesInput = data.slice(1177);

for (let i = 0; i < updatesInput.length; i++){
  updates.push(updatesInput[i].split(','));
}


function validate(rules, update) {
  const rulesToUse = rules.filter(([before, after]) => update.includes(before) && update.includes(after));
  console.log(rulesToUse);

  for (let [before, after] of rulesToUse) {
    
    if (update.indexOf(before) > update.indexOf(after)) {
      return false;
    }
  }
  return true;
}

let sum = 0;
for (let update of updates) {
  console.log(rules);
  if (validate(rules, update)) { 
    sum += parseInt(update[Math.floor(update.length / 2)]);
  } else {
    //console.log("updates are not valid");
  }
}

console.log(updates.length);
console.log(sum);