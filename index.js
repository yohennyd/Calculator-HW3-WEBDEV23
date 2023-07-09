function squareRoot() {
    let eq = document.getElementById("result").value;
    let ans = Math.sqrt(eq);
    document.getElementById("result").value = ans;
}

function calcSin(){
    let equation = document.getElementById("result").value;
    let answer = Math.sin(equation);
    document.getElementById("result").value = answer; 
}

function display(value) {
    document.getElementById("result").value += value;
}

function calcCos() {
    let equation = document.getElementById("result").value;
    let answer = Math.cos(equation);
    document.getElementById("result").value = answer; 

}

function calcTan() {
    let eq = document.getElementById("result").value;
    let ans = Math.tan(eq);
    document.getElementById("result").value = ans; 
}

function calcFactorial() {
    let eq = document.getElementById("result").value;
    let ans = factorial(eq);
    document.getElementById("result").value = ans;
}

function factorial(x) {
    if(x == 0) {
        return 1;
    }
    return x * factorial(x-1);

}

function calcLog() {
    let eq = document.getElementById("result").value;
    let ans = Math.log10(eq);
    document.getElementById("result").value = ans;
}

function calcln() {
    let eq = document.getElementById("result").value;
    let ans = Math.log(eq);
    document.getElementById("result").value = ans;
}

function calcPercent() {
    let eq = document.getElementById("result").value;
    let ans = eq / 100;
    document.getElementById("result").value = ans;

}