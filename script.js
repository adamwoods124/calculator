operate = (num1, num2, op) => {
  switch (op) {
    case "÷":
      return num1 / num2;
    case "×":
      return num1 * num2;
    case "−":
      return num1 - num2;
    case "+":
      return num1 + num2;
    default:
      return "error";
  }
};

clearFunc = () => {
  let bar = document.getElementById("bar");
  bar.innerHTML = "";
  num1 = "";
  num2 = "";
  toggle = true;
};

let num1 = "";
let num2 = "";
let op = "";
let toggle = true;

onNum = (obj) => {
  let bar = document.getElementById("bar");
  if (toggle) {
    num1 += obj.value;
    bar.textContent += obj.value;
  } else {
    num2 += obj.value;
    bar.textContent += obj.value;
  }
};

onOp = (obj) => {
  let bar = document.getElementById("bar");
  if (op != "") {
    op2 = obj.value;
    onEquals();
    onOp(obj);
    op = obj.value;
    toggle = false;
  } else {
    op = obj.value;
    bar.textContent += " " + op + " ";
    toggle = false;
  }
};

onEquals = () => {
  let bar = document.getElementById("bar");
  ans = operate(parseInt(num1), parseInt(num2), op);
  bar.textContent = operate(parseInt(num1), parseInt(num2), op);
  num1 = ans;
  num2 = "";
  op = "";
  toggle = true;
};
