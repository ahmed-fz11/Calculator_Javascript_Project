function appendValue(val) {
  if (document.getElementById("expr").value == "0" && val == "0") {
    return;
  }
  const currentPos = document.getElementById("expr").selectionStart; //fetching the current cursor position
  const expr = document.getElementById("expr").value;

  // Slice the expression before and after the cursor position
  const expressionBeforeCursor = expr.slice(0, currentPos); //expr before cursor
  const expressionAfterCursor = expr.slice(currentPos); //expr after the cursor

  // adding new value in between the sliced parts and update the input value
  document.getElementById("expr").value = expressionBeforeCursor + val + expressionAfterCursor;

  const newPosition = currentPos + val.length; //calculating cursor position after the inserted value is appended
  document.getElementById("expr").selectionStart = newPosition; //the cursor is moved to the correct position in the input field i.e immediately after the newly appended value
  document.getElementById("expr").selectionEnd = newPosition; //ensures that the cursor is not only at the correct position but also that there is no selected text
  document.getElementById("expr").focus(); //input field is given focus so user can continue typing without having to click on the input field again
}

export { appendValue };
// module.exports = appendValue;
