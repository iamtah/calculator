
const numberBtns = document.querySelectorAll(".number-button");
const functionBtns = document.querySelectorAll(".functions")
const clearBtn = document.getElementById("clear-btn");
const equalsBtn = document.getElementById("equals-btn");
const delBtn = document.getElementById("del");
const screen = document.getElementById("screen");
const ans = document.getElementById("ans-btn"); 
let firstOperand="",secondOperant="",operator="",result="",lastresult="",previousAction="",vForF=false,lastAnswer;

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




function operate(operator,a,b){
switch(operator){
    case "+":
        return  add(+a,+b);
        
    case "-":
        return   subtract(+a,+b);
        
    case "/":
        if(b==0)
        return "math err"
        return  divide(+a,+b);
        
    case "*":
        return  multiply(+a,+b);
}}

function oneOperandOpt(operator,a){
    switch(operator){
        case "sin":
        return sine(a);
        
}}

numberBtns.forEach((button) =>
    button.addEventListener("click", displayNumber))

function displayNumber(){
    if(previousAction =="equals") {
        screen.textContent ="";
    }
    if(vForF){
        screen.textContent="";
        vForF = false;
    }
    // if(previousAction =="func" && (["1","2","3","4","5","6","7","8","9","0"].includes(this.getAttribute('data-value')))){
    //     if(screen.textContent==""){
    //         screen.textContent += this.getAttribute('data-value');
    //         return;
    //     }
    // }         


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
screen.textContent = "";
lastAnswer = lastresult;             //need to keep last result for ANS button
lastresult ="";
previousAction ="";
});


functionBtns.forEach((button) => button.addEventListener("click", ()=>{
   
    if(previousAction =="func"){
        
        secondOperant =screen.textContent;
        if(lastresult ==""){
            lastresult = operate(operator,firstOperand,secondOperant);
            screen.textContent= lastresult;
            operator = button.getAttribute("data-value");
            vForF = true;
            return;
        }
        screen.textContent = operate(operator,lastresult,secondOperant);
        lastresult= screen.textContent;
        operator = button.getAttribute("data-value");
        vForF = true;
        
        return;
    }
    operator =  button.getAttribute("data-value");
    previousAction ="func";
    firstOperand = screen.textContent;
    screen.textContent="";
}))

equalsBtn.addEventListener("click", function(){
    
    if(lastresult!==""){
        if(previousAction=="func"){
            secondOperant = screen.textContent;
        }
        lastresult =operate(operator,lastresult,secondOperant);
        screen.textContent = lastresult;
        return;
    }
    secondOperant =screen.textContent;
    lastresult =operate(operator,firstOperand,secondOperant);
    screen.textContent = lastresult;
    previousAction ="equals";
    
    return;
})

ans.addEventListener("click", ()=>{
    screen.textContent = lastAnswer;});




