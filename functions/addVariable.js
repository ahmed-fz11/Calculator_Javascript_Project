import { variables } from "./variables.js";

function addVariable()
{
    const reserved = ['pi','e','π','sin','cos','tan'];
    const varName = document.getElementById('varName').value;
    const varVal = parseFloat(document.getElementById('varVal').value); //converting string to floating point number. if not string then NaN returned

    if(isNaN(varVal)){
        alert('Variable value should be a number')
        document.getElementById('varVal').value = "";
        return;
    }
    if(reserved.includes(varName))
    {
        alert('Reserved variable names are not allowed')
        document.getElementById('varName').value = "";
        document.getElementById('varVal').value = "";
        return;
    }

    variables[varName] = varVal; //appending variable to the object

    document.getElementById('varName').value = "";
    document.getElementById('varVal').value = "";
}

export {addVariable, variables};

// module.exports = addVariable;