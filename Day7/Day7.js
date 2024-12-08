const fs = require("fs");

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

let score = 0;

//splits the input by lines
data = data.split('\r\n');

for (let i=0; i < data.length; i++){
    const [answer, equation] = data[i].split(': ');
    const combinations = generateExpressions(equation.split(' ').map(Number));

    for (let comb of combinations) {
        const r = evaluate(comb);
        if (r === parseInt(answer)) {
            score += r;
            break;
        }
    }
};

function generateExpressions(numbers) {
    const ops = ["+", "*"];
    const results = [];
    function helper(curExpression, index) {
        if (index === numbers.length) {
            results.push(curExpression.join(' '));
            return;
        }
        for (const operation of ops) {
            const nextExpression = [...curExpression, operation, numbers[index]];
            helper(nextExpression, index + 1);
        }
    }
    helper([numbers[0]], 1);

    return results;
}

function evaluate(expression) {
    const elems = expression.split(' ');

    let result = parseInt(elems[0]);
    for (let i = 1; i < elems.length; i += 2) {
        const operator = elems[i];
        const nextNumber = parseInt(elems[i + 1]);

        switch(operator) {
            case '+':
                result += nextNumber;
                break;
            case '*':
                result *= nextNumber;
                break;
        }
    }
    return result;
}

console.log(score);