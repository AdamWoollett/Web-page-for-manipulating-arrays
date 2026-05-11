//Create the master array
let array = [];

//Creating event listeners for each button:
//Push
const pushbutton = document.querySelector("#pushButton");
pushbutton.addEventListener("click", pushButton);
//Pop
const popbutton = document.querySelector("#popButton");
popbutton.addEventListener("click", popButton);
//Shift
const shiftbutton = document.querySelector("#shiftButton");
shiftbutton.addEventListener("click", shiftButton);
//Unshift
const unshiftbutton = document.querySelector("#unshiftButton");
unshiftbutton.addEventListener("click", unshiftButton);
//Splice
const splicebutton = document.querySelector("#spliceButton");
splicebutton.addEventListener("click", spliceButton);
//spliceBoxNoValueAddition
const spliceButtonNoValueAddition = document.querySelector("#spliceButtonNoValueAddition");
spliceButtonNoValueAddition.addEventListener("click", spliceBoxNoValueAddition);
//spliceBoxOnlyStartValue
const spliceButtonOnlyStartValue = document.querySelector("#spliceButtonOnlyStartValue");
spliceButtonOnlyStartValue.addEventListener("click", spliceBoxOnlyStartValue);

//Creating functions for the buttons:
//Push
function pushButton(){
    let pushValue = document.querySelector("#pushTextBox").value;
    if (pushValue !== ''){
    array.push(pushValue);
    document.querySelector("#pushTextBox").value = '';
    displayArray();
    } else{
        alert("Please enter a value.");
    }
}
//Pop
function popButton(){
    if(array.length === 0){ alert("Array is Empty"); return;}
    else{
    array.pop();
    displayArray();}
}
//Shift
function shiftButton(){
    if(array.length === 0){alert("Array is Empty"); return;}
    else{
    array.shift();
    displayArray();}
}
//Unshift
function unshiftButton(){
    let unshiftValue = document.querySelector("#unshiftTextBox").value;
    if (unshiftValue !== ''){
        array.unshift(unshiftValue);
        document.querySelector("#unshiftTextBox").value = '';
        displayArray();
    } else {
        alert("Please enter a value.");
    }
}
//Splice
function spliceButton(){
    let spliceStartValue = document.querySelector("#spliceStartPosition").value;
    let spliceDeleteCountValue = document.querySelector("#spliceDeleteCount").value;
    let spliceTextInputValue = document.querySelector("#spliceTextInput").value;
    if(array.length === 0){alert("Array is Empty"); return;}else{
        if(spliceStartValue === "" || spliceDeleteCountValue === ""){alert("Please specify numerical splicing parameters");}else{
            if(spliceTextInputValue === ""){alert("Please input value to add to array")}else{
    array.splice(spliceStartValue,spliceDeleteCountValue,spliceTextInputValue);
    document.querySelector("#spliceStartPosition").value = '';
    document.querySelector("#spliceDeleteCount").value = '';
    document.querySelector("#spliceTextInput").value = '';
    displayArray()}}
}}

//spliceBoxNoValueAddition
function spliceBoxNoValueAddition(){
    let spliceStartValue = document.querySelector("#spliceStartPositionNoAddition").value;
    let spliceDeleteCountValue = document.querySelector("#spliceDeleteCountNoAddition").value;
    if(array.length === 0){alert("Array is Empty"); return;}else{
    if(spliceStartValue === "" || spliceDeleteCountValue === ""){alert("Please specify numerical splicing parameters");}
    else{
    array.splice(spliceStartValue,spliceDeleteCountValue);
    document.querySelector("#spliceStartPositionNoAddition").value = '';
    document.querySelector("#spliceDeleteCountNoAddition").value = '';
    displayArray()}}
}

//spliceBoxOnlyStartValue
function spliceBoxOnlyStartValue(){
    let spliceStartValue = document.querySelector("#spliceStartPositionOnlyStartValue").value;
    if(array.length === 0){alert("Array is Empty"); return;}else{
    if (spliceStartValue === ""){alert("Please specify numerical splicing parameters");}
    else{
    array.splice(spliceStartValue);
    document.querySelector("#spliceStartPositionOnlyStartValue").value = '';
    displayArray()}}
}

//Update the array display
function displayArray(){
    let arrayList = document.getElementById("arrayElements");
    arrayList.innerHTML = ''; //Clear the list
    array.forEach((element, index) => {
    const indexP = document.createElement("p");//Creates paragraph for each element
    indexP.textContent = "Element " + index + ": " + element; //Set the text of the p to the element
    arrayList.appendChild(indexP);
    });
}
