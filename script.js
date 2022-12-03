
const numberBtns = document.querySelectorAll(".number-button");
const functionBtns = document.querySelectorAll(".functions")
const clearBtn = document.getElementById("clear-btn");
const equalsBtn = document.getElementById("equals-btn");
const delBtn = document.getElementById("del");
const screen = document.getElementById("screen");
const oneOpt = document.querySelectorAll(".oneOpt"); //one operand calculations like sine, cosine

let firstOperand="",secondOperant="",operator="",result="",lastresult="";

function add(a,b){
    result= a+b;
    return result.toFixed(7)
}

function subtract(a,b){
    result =a-b;
    return result.toFixed(7)
}

function multiply(a,b){
    result =a*b;
    return result.toFixed(7)
}

function divide(a,b){
    result =a/b;
    return result.toFixed(7)
}

function sine(a){
    result= Math.sin(a*Math.PI/180);
    return result.toFixed(7)
}

function cosine(a){
    result=  Math.cos(a*Math.PI/180);
    return result.toFixed(7)
}



function operate(operator,a,b){
switch(operator){
    case "+":
        return  add(+a,+b);
        
    case "-":
        return   subtract(+a,+b);
        
    case "/":
        return  divide(+a,+b);
        
    case "*":
        return  multiply(+a,+b);
}}

function oneOperandOpt(operator,a){
    switch(operator){
        case "sin":
        return sine(a);
        
    case "cos":
        return cosine(a);
    }
}

numberBtns.forEach((button) =>
    button.addEventListener("click", displayNumber))

function cleanDisplay(){
    screen.textContent = "";
 }

function displayNumber(){
    if(screen.textContent.length>9 || screen.textContent.includes(".") && this.getAttribute('data-value')=== ".")
    return;
   screen.textContent += this.getAttribute('data-value') 
}

delBtn.addEventListener("click", () =>
screen.textContent = screen.textContent.slice(0,-1)
)

clearBtn.addEventListener("click", ()=>{
firstOperand ="";
secondOperant ="";
operator="";
screen.textContent = "";});

functionBtns.forEach((button) => button.addEventListener("click", () =>{
firstOperand = parseInt(screen.textContent);
if(operator!==""){

    secondOperant= screen.textContent;
    screen.textContent = operate(operator,firstOperand,secondOperant);
    lastresult = screen.textContent;
    return;
}

operator =  button.getAttribute('data-value');
screen.textContent ="";
}))

equalsBtn.addEventListener("click", () =>{
    secondOperant= screen.textContent;
    if(operator==="cos"||operator==="sin"){
        
        screen.textContent = oneOperandOpt(operator,secondOperant);
        firstOperand ="";
        secondOperant ="";
        operator="";
        return;
    }
screen.textContent = operate(operator,firstOperand,secondOperant);
firstOperand ="";
secondOperant ="";
operator="";
})


oneOpt.forEach( (button)=> button.addEventListener("click", ()=>{
    operator = button.getAttribute("data-value");
    screen.textContent="";
}))
