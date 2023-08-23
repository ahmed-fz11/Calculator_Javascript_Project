function backspaceValue()
{
    let val = document.getElementById('expr').value;
    if(val==""){
        return;
    }
    val = val.slice(0,-1)
    document.getElementById('expr').value = val;
}

export {backspaceValue};
// module.exports = backspaceValue;