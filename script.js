//#region operator functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(a, b, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
  }
  return result;
}
//#endregion

let currentDisplay = "";

function updateDisplay(screenContent) {
  display.textContent = currentDisplay += screenContent;
}

function clearDisplay() {
  currentDisplay = ''
  display.textContent = ''
}

function playAudio(audioFile) {
  if (audioFile.paused) {
    audioFile.play();
  } else {
    audioFile.currentTime = 0;
  }
}
// #region declerations
//number buttton
const display = document.getElementById("display");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
const button8 = document.getElementById("button-8");
const button9 = document.getElementById("button-9");
const button0 = document.getElementById("button-0");
const buttonPoint = document.getElementById("button-point");
//function buttons
const buttonPlus = document.getElementById("button-plus");
const buttonMinus = document.getElementById("button-minus");
const buttonMultiply = document.getElementById("button-multiply");
const buttonDivide = document.getElementById("button-divide");
const buttonEquals = document.getElementById("button-equals");
const buttonC = document.getElementById("button-c");
const buttonBackspace = document.getElementById("button-backspace");
//audio files
const beep1 = new Audio(
  "https://res.cloudinary.com/dli7mlkdu/video/upload/v1596233547/Calculator/Beep1_fguvzt.wav"
);
const beep2 = new Audio(
  "https://res.cloudinary.com/dli7mlkdu/video/upload/v1596234138/Calculator/Beep2_zulrpu.wav"
);
const beep3 = new Audio(
  "https://res.cloudinary.com/dli7mlkdu/video/upload/v1596234138/Calculator/Beep3_gy4cpp.wav"
);
const equalsSound = new Audio(
  "https://res.cloudinary.com/dli7mlkdu/video/upload/v1596234140/Calculator/zemcube_ayoscr.wav"
);
// #endregion

//#region buttons

button1.addEventListener("click", () => {
  playAudio(beep1);
  updateDisplay("1");
});
button2.addEventListener("click", () => {
  playAudio(beep2);
  updateDisplay("2");
});
button3.addEventListener("click", () => {
  playAudio(beep1);
  updateDisplay("3");
});
button4.addEventListener("click", () => {
  playAudio(beep2);
  updateDisplay("4");
});
button5.addEventListener("click", () => {
  playAudio(beep1);
  updateDisplay("5");
});
button6.addEventListener("click", () => {
  playAudio(beep2);
  updateDisplay("6");
});
button7.addEventListener("click", () => {
  playAudio(beep1);
  updateDisplay("7");
});
button8.addEventListener("click", () => {
  playAudio(beep2);
  updateDisplay("8");
});
button9.addEventListener("click", () => {
  playAudio(beep1);
  updateDisplay("9");
});
button0.addEventListener("click", () => {
  playAudio(beep2);
  updateDisplay("0");
});
buttonPoint.addEventListener("click", () => {
  playAudio(beep1);
  updateDisplay(".");
});
buttonPlus.addEventListener("click", () => {
  playAudio(beep3);
  updateDisplay("+");
});
buttonMinus.addEventListener("click", () => {
  playAudio(beep3);
  updateDisplay("-");
});
buttonMultiply.addEventListener("click", () => {
  playAudio(beep3);
  updateDisplay("×");
});
buttonDivide.addEventListener("click", () => {
  playAudio(beep3);
  updateDisplay("÷");
});
buttonEquals.addEventListener("click", () => {
  playAudio(equalsSound);
  updateDisplay("Calculating");
});
buttonC.addEventListener("click", () => {
  playAudio(beep3);
  clearDisplay();
});
buttonBackspace.addEventListener("click", () => {
  playAudio(beep3);
  // updateDisplay("");
});

//#endregion
