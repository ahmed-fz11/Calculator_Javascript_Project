import { variables } from "./variables.js";

function evaluateExpression()
{
    try{
        let expr = document.getElementById('expr').value;
        expr = expr.replace(/sin\(/g, "Math.sin("); // '/' is delimiter in regular expressions. //g flag for global. will replace all occurences of variable in the expression
        expr = expr.replace(/tan\(/g, "Math.tan(");
        expr = expr.replace(/cos\(/g, "Math.cos(");
        expr = expr.replace(/sqrt\(/g, "Math.sqrt(");
        expr = expr.replace(/\^/g, "**");
        for(const variable in variables)
        {
            const regEx = new RegExp(variable,'g'); //regular expression object created using variable name as pattern
            expr = expr.replace(regEx,variables[variable]) //using regular expression, replacing all occurences of variable name with its corresponding value from variables object
        }
        let result = eval(expr);
        result = result.toFixed(4); //making sure to 4 decimal places
        if(result==Infinity)
        {
            document.getElementById('result').textContent = "Error! Divide by zero";
            return;
        }
        console.log("Result: ",result)
        document.getElementById('result').textContent = result;
    }
    catch(error){
        document.getElementById('result').textContent = "Error! Invalid Expression";
    }
}

export {evaluateExpression, variables};

// module.exports = evaluateExpression;