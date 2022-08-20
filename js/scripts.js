let currentOperation = document.getElementById("current_operation");
let firstNumber = 0;
let secondNumber = 0;
let operation;

let arrOperation = ["+", "-", "/", "*", "pot"];

function insert(num) {
  currentOperation.innerHTML += num;

  if (
    ( num === "." || typeof num === "number" ) &&
    (operation == "" ||
    operation == null)) 
  {
    firstNumber = Number(currentOperation.innerHTML);
  }
  else if(typeof num === "string" && num !== ".")
  {
    operation = num;
  }
  else
  {
    // trabalhar aquiiiiiii
    secondNumber = num;
  }
  console.log("firstNumber",firstNumber);
  console.log("operation",operation);
  console.log("secondNumber",secondNumber);
}

function clean() {
  currentOperation.innerHTML = "";
}

function del() {
  let lastValue = currentOperation.innerHTML.substring(
    0,
    currentOperation.innerHTML.length - 1
  );
  currentOperation.innerHTML = lastValue;
}

function calculate() {
  if (currentOperation.innerHTML) {
    currentOperation.innerHTML = eval(currentOperation.innerHTML);
  }
}
console.log(currentOperation);
